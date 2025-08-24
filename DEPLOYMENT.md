# Deployment Guide

## 🚀 Deployment Overview

This guide covers the deployment process for MagiLabs, from local development to production environments.

## 🏗️ Architecture

### Current Architecture (v0.1.0)
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   (Next.js)     │◄──►│   (API Routes)  │◄──►│   (Local/None)  │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Vercel        │    │   GitHub        │    │   Environment   │
│   (Hosting)     │    │   (CI/CD)       │    │   Variables     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Target Architecture (v1.0.0)
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   (Next.js)     │◄──►│   (Node.js)     │◄──►│   (PostgreSQL)  │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   CDN           │    │   Load          │    │   Redis         │
│   (Cloudflare)  │    │   Balancer      │    │   (Cache)       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Kubernetes    │    │   Monitoring    │    │   Backup        │
│   (AWS/GCP)     │    │   (Prometheus)  │    │   (Automated)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🛠️ Prerequisites

### Required Tools
- **Node.js**: 18+ (LTS recommended)
- **npm**: 9+ or **yarn**: 1.22+
- **Git**: 2.30+
- **Docker**: 20.10+ (for containerized deployment)
- **kubectl**: 1.25+ (for Kubernetes deployment)

### Required Accounts
- **GitHub**: Repository access
- **Vercel**: Hosting and deployment
- **AWS/GCP**: Cloud infrastructure (future)
- **Cloudflare**: CDN and DNS (future)

## 🚀 Deployment Options

### 1. Vercel (Recommended for v0.1.0)

#### Setup
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

#### Configuration
```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

#### Environment Variables
```bash
# Set in Vercel dashboard or CLI
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NEXT_PUBLIC_API_URL=https://api.your-domain.com
DATABASE_URL=your-database-connection-string
```

### 2. Docker (Local/Development)

#### Dockerfile
```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

#### Docker Compose
```yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/magilabs
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=magilabs
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=magilabs
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    restart: unless-stopped

volumes:
  postgres_data:
```

#### Build and Run
```bash
# Build Docker image
docker build -t magilabs .

# Run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f app
```

### 3. Kubernetes (Production v1.0.0+)

#### Deployment Manifest
```yaml
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: magilabs-frontend
  namespace: magilabs
spec:
  replicas: 3
  selector:
    matchLabels:
      app: magilabs-frontend
  template:
    metadata:
      labels:
        app: magilabs-frontend
    spec:
      containers:
      - name: magilabs-frontend
        image: magilabs/frontend:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: magilabs-secrets
              key: database-url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /api/health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /api/health
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
```

#### Service Manifest
```yaml
# k8s/service.yaml
apiVersion: v1
kind: Service
metadata:
  name: magilabs-frontend-service
  namespace: magilabs
spec:
  selector:
    app: magilabs-frontend
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer
```

#### Ingress Manifest
```yaml
# k8s/ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: magilabs-ingress
  namespace: magilabs
  annotations:
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  tls:
  - hosts:
    - magilabs.com
    - www.magilabs.com
    secretName: magilabs-tls
  rules:
  - host: magilabs.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: magilabs-frontend-service
            port:
              number: 80
```

#### Deploy to Kubernetes
```bash
# Create namespace
kubectl create namespace magilabs

# Apply manifests
kubectl apply -f k8s/

# Check deployment status
kubectl get pods -n magilabs
kubectl get services -n magilabs
kubectl get ingress -n magilabs

# View logs
kubectl logs -f deployment/magilabs-frontend -n magilabs
```

## 🔧 Environment Configuration

### Environment Variables

#### Required Variables
```bash
# Application
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_API_URL=https://api.your-domain.com

# Database
DATABASE_URL=postgresql://user:password@host:port/database

# Authentication
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://your-domain.com

# External Services
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

#### Optional Variables
```bash
# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_POSTHOG_KEY=your-posthog-key

# Monitoring
SENTRY_DSN=your-sentry-dsn
DATADOG_API_KEY=your-datadog-api-key

# CDN
NEXT_PUBLIC_CDN_URL=https://cdn.your-domain.com
```

### Environment Files
```bash
# .env.local (development)
NODE_ENV=development
DATABASE_URL=postgresql://localhost:5432/magilabs_dev

# .env.production (production)
NODE_ENV=production
DATABASE_URL=postgresql://prod-host:5432/magilabs_prod
```

## 📊 Monitoring & Health Checks

### Health Check Endpoint
```typescript
// app/api/health/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Check database connection
    // Check external services
    // Check system resources
    
    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version,
      environment: process.env.NODE_ENV
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        error: error.message,
        timestamp: new Date().toISOString()
      },
      { status: 503 }
    )
  }
}
```

### Monitoring Setup
```yaml
# k8s/monitoring.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-config
  namespace: monitoring
data:
  prometheus.yml: |
    global:
      scrape_interval: 15s
    scrape_configs:
    - job_name: 'magilabs'
      static_configs:
      - targets: ['magilabs-frontend-service:3000']
      metrics_path: /api/metrics
      scrape_interval: 5s
```

## 🔒 Security Configuration

### Security Headers
```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  }
}
```

### SSL/TLS Configuration
```bash
# Let's Encrypt with Cert-Manager
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.12.0/cert-manager.yaml

# Create ClusterIssuer
kubectl apply -f - <<EOF
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: admin@magilabs.com
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
    - http01:
        ingress:
          class: nginx
EOF
```

## 📈 Performance Optimization

### Build Optimization
```typescript
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react']
  },
  images: {
    domains: ['your-cdn-domain.com'],
    formats: ['image/webp', 'image/avif']
  },
  compress: true,
  poweredByHeader: false
}
```

### CDN Configuration
```bash
# Cloudflare configuration
# Enable Auto Minify for JS, CSS, HTML
# Enable Brotli compression
# Enable HTTP/3
# Enable Early Hints
# Configure Page Rules for caching
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build application
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
        vercel-args: '--prod'
```

### Deployment Scripts
```bash
#!/bin/bash
# scripts/deploy.sh

set -e

echo "🚀 Starting deployment..."

# Build the application
echo "📦 Building application..."
npm run build

# Run tests
echo "🧪 Running tests..."
npm test

# Deploy to production
echo "🚀 Deploying to production..."
npm run deploy:prod

echo "✅ Deployment completed successfully!"
```

## 🚨 Rollback Procedures

### Vercel Rollback
```bash
# List deployments
vercel ls

# Rollback to previous version
vercel rollback <deployment-url>

# Or rollback to specific version
vercel rollback <deployment-url> --to <previous-deployment-url>
```

### Kubernetes Rollback
```bash
# Check deployment history
kubectl rollout history deployment/magilabs-frontend -n magilabs

# Rollback to previous version
kubectl rollout undo deployment/magilabs-frontend -n magilabs

# Rollback to specific version
kubectl rollout undo deployment/magilabs-frontend -n magilabs --to-revision=2

# Check rollback status
kubectl rollout status deployment/magilabs-frontend -n magilabs
```

## 📊 Deployment Checklist

### Pre-Deployment
- [ ] All tests passing
- [ ] Code review completed
- [ ] Security scan passed
- [ ] Performance benchmarks met
- [ ] Documentation updated
- [ ] Environment variables configured
- [ ] Database migrations ready
- [ ] Backup procedures tested

### Deployment
- [ ] Deploy to staging environment
- [ ] Run smoke tests
- [ ] Verify functionality
- [ ] Check performance metrics
- [ ] Deploy to production
- [ ] Monitor deployment
- [ ] Verify health checks
- [ ] Update DNS/CDN

### Post-Deployment
- [ ] Monitor application logs
- [ ] Check error rates
- [ ] Verify user experience
- [ ] Monitor performance
- [ ] Update status page
- [ ] Notify stakeholders
- [ ] Document deployment

## 🌍 Multi-Region Deployment

### Regional Configuration
```yaml
# k8s/regional-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: magilabs-frontend-eu
  namespace: magilabs
  labels:
    region: europe
spec:
  replicas: 5
  template:
    spec:
      containers:
      - name: magilabs-frontend
        image: magilabs/frontend:latest
        env:
        - name: REGION
          value: "europe"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: magilabs-eu-secrets
              key: database-url
```

### Global Load Balancing
```yaml
# k8s/global-ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: magilabs-global-ingress
  annotations:
    external-dns.alpha.kubernetes.io/hostname: magilabs.com
    external-dns.alpha.kubernetes.io/ttl: "300"
spec:
  rules:
  - host: magilabs.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: magilabs-frontend-service
            port:
              number: 80
```

---

## 🎯 Next Steps

### Immediate Actions
1. **Set up Vercel deployment**
2. **Configure environment variables**
3. **Set up monitoring and health checks**
4. **Test deployment process**

### This Month
1. **Implement Docker containerization**
2. **Set up staging environment**
3. **Configure CI/CD pipeline**
4. **Plan Kubernetes migration**

### This Quarter
1. **Migrate to Kubernetes**
2. **Implement multi-region deployment**
3. **Set up advanced monitoring**
4. **Optimize performance and security**

---

*This deployment guide is maintained by the MagiLabs DevOps team and updated regularly based on infrastructure changes and best practices.*
