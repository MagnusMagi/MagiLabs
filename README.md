# MagiLabs - Digital Innovation Studio

A modern, responsive corporate website for MagiLabs ÖÜ, an Estonia-based digital innovation studio specializing in AI-powered SaaS applications.

## 🎯 Proje Amacı / Project Goal

Bu proje, Magi Labs için Framer tarzında bir CMS ve Admin Panel sistemi geliştirmeyi amaçlamaktadır. Magi Labs, Estonya merkezli bir dijital ürün stüdyosudur ve MagiNews, Trainerly, AstroApp gibi çoklu AI destekli uygulamaları yönetmektedir. Sistem tamamen modüler, responsive ve Cursor AI kullanılarak component-driven yaklaşımla inşa edilecektir.

**English**: The goal of this project is to build a Framer-inspired CMS and Admin Panel system for Magi Labs, an Estonia-based digital product studio managing multiple AI-powered applications like MagiNews, Trainerly, and AstroApp. The system will be fully modular, responsive, and built with a component-driven approach using Cursor AI.

## 🚀 Özellikler / Features

### 🎨 Tasarım / Design
- **Modern Design**: Framer-inspired UI with Nordic color palette
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dark/Light Theme**: Automatic theme switching with system preference detection
- **Nordic Aesthetics**: Estonya'nın doğal güzelliklerinden ilham alan tasarım

### 🌐 Çok Dilli Destek / Multilingual Support
- **EN**: English (default)
- **TR**: Turkish (Türkçe)
- **EE**: Estonian (Eesti keel)
- **Language Switching**: Framework ready for seamless language transitions

### 🧩 Component-Driven Architecture
- **Modular Components**: Her bileşen bağımsız ve yeniden kullanılabilir
- **Reusable UI**: shadcn/ui components ile tutarlı tasarım
- **Scalable Structure**: Büyüyen proje ihtiyaçlarına uygun yapı

### ⚡ Performance & Optimization
- **Next.js 14**: App Router ile optimal performans
- **TypeScript**: Tip güvenliği ve geliştirici deneyimi
- **Tailwind CSS**: Utility-first CSS framework
- **Optimized Build**: Production-ready optimizasyonlar

## 🛠️ Teknoloji Stack'i / Tech Stack

### Frontend Framework
- **Next.js 14**: React framework with App Router
- **React 18**: Modern React with concurrent features
- **TypeScript**: Type-safe JavaScript development

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library

### State Management & Theming
- **React Context**: Lightweight state management
- **next-themes**: Theme switching and persistence
- **CSS Variables**: Dynamic theming support

### Development Tools
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📁 Proje Yapısı / Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Homepage with all sections
├── components/             # Reusable UI components
│   ├── ui/                # shadcn/ui base components
│   │   └── button.tsx     # Custom button component
│   ├── header.tsx         # Navigation header with language selector
│   ├── hero.tsx           # Hero section with call-to-action
│   ├── product-showcase.tsx # Product cards and descriptions
│   ├── about-section.tsx  # Company information and values
│   ├── tech-stack.tsx     # Technology overview and expertise
│   ├── contact-section.tsx # Contact form and information
│   ├── footer.tsx         # Site footer with links
│   ├── language-selector.tsx # Language switching component
│   ├── theme-toggle.tsx   # Dark/light theme switcher
│   └── theme-provider.tsx # Theme context provider
└── lib/                   # Utility functions and helpers
    └── utils.ts           # Common utilities and helpers
```

## 🎨 Tasarım Sistemi / Design System

### Renk Paleti / Color Palette
- **Nordic Blue**: #3B82F6 (Primary - Ana renk)
- **Soft Blue**: #93C5FD (Secondary - İkincil renk)
- **Charcoal**: #1F2937 (Text - Metin)
- **White**: #FFFFFF (Background - Arka plan)
- **Gray**: #F3F4F6 (Muted - Soluk)
- **Accent**: #10B981 (Success - Başarı)

### Tipografi / Typography
- **Primary**: Inter (Sans-serif) - Modern ve okunabilir
- **Monospace**: Teknik içerik için
- **Font Weights**: 300, 400, 500, 600, 700
- **Line Heights**: Optimized for readability

### Spacing & Layout
- **Base Unit**: 4px (0.25rem)
- **Container**: Max-width 1200px
- **Grid**: 12-column responsive grid
- **Breakpoints**: Mobile-first approach

## 🚀 Kurulum ve Çalıştırma / Getting Started

### Gereksinimler / Prerequisites
- Node.js 18+ 
- npm veya yarn
- Git

### Kurulum / Installation
```bash
# Repository'yi klonlayın
git clone https://github.com/MagnusMagi/MagiLabs.git
cd MagiLabs

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

### Build & Deploy
```bash
# Production için build
npm run build

# Production sunucusunu başlat
npm start

# Kod kalitesi kontrolü
npm run lint
```

## 🌐 Çok Dilli Destek Detayları / Internationalization Details

Proje çok dilli destek için hazırlanmıştır:
- **Dil Dosyaları**: `/locales` klasöründe organize edilecek
- **Context API**: React Context ile dil yönetimi
- **Dynamic Routing**: URL-based language switching
- **SEO Optimization**: Her dil için meta tags

### Desteklenen Diller / Supported Languages
- **EN**: English (Varsayılan / Default)
- **TR**: Turkish (Türkçe)
- **EE**: Estonian (Eesti keel)

## 📱 Responsive Tasarım / Responsive Design

### Breakpoint Sistemi
- **Mobile**: 320px - 768px (Mobil öncelikli)
- **Tablet**: 768px - 1024px (Tablet uyumlu)
- **Desktop**: 1024px+ (Masaüstü optimizasyonu)

### Responsive Özellikler
- **Mobile-First**: Mobil cihazlardan başlayarak tasarım
- **Flexible Grid**: CSS Grid ve Flexbox ile esnek layout
- **Touch-Friendly**: Dokunmatik cihazlar için optimize edilmiş
- **Performance**: Her ekran boyutu için optimize edilmiş

## 🔧 Geliştirme Rehberi / Development Guide

### Component Geliştirme / Component Development
- shadcn/ui bileşenlerini temel olarak kullan
- Tailwind CSS utility-first yaklaşımını takip et
- Tutarlı spacing ve typography sürdür
- Çoklu ekran boyutlarında test et

### Kod Stili / Code Style
- TypeScript strict mode aktif
- ESLint Next.js konfigürasyonu
- Prettier kod formatlaması
- Semantic commit mesajları

### Best Practices
- **Component Composition**: Bileşenleri birleştirerek karmaşık UI oluştur
- **Props Interface**: Her component için TypeScript interface tanımla
- **Error Boundaries**: Hata yönetimi için error boundary kullan
- **Performance**: React.memo ve useMemo ile gereksiz render'ları önle

## 🚀 Gelecek Geliştirmeler / Future Enhancements

### Phase 1 - Core Features
- [x] Responsive website structure
- [x] Theme switching system
- [x] Language selector framework
- [x] Component library setup

### Phase 2 - CMS Integration
- [ ] MDX/TipTap editor integration
- [ ] Content management system
- [ ] Dynamic page generation
- [ ] SEO optimization tools

### Phase 3 - Advanced Features
- [ ] Blog section with AI-generated content
- [ ] Job application system
- [ ] Product-specific landing pages
- [ ] Analytics integration (PostHog/Vercel)

### Phase 4 - Enterprise Features
- [ ] User authentication system
- [ ] Role-based access control
- [ ] Performance monitoring
- [ ] Advanced analytics dashboard

## 📊 Performance Hedefleri / Performance Targets

### Lighthouse Metrics
- **Performance Score**: 95+
- **Accessibility Score**: 95+
- **Best Practices Score**: 95+
- **SEO Score**: 95+

### Core Web Vitals
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Optimization Strategies
- **Code Splitting**: Route-based code splitting
- **Image Optimization**: Next.js Image component
- **Font Loading**: Optimized font loading strategy
- **Bundle Analysis**: Regular bundle size monitoring

## 🤝 Katkıda Bulunma / Contributing

### Geliştirici Kurulumu / Developer Setup
1. Repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi yapın
4. Test edin ve lint kontrolünden geçirin
5. Commit mesajlarını semantic olarak yazın
6. Pull request gönderin

### Commit Convention
```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: adding tests
chore: maintenance tasks
```

### Code Review Process
- Her PR için en az bir review gerekli
- Test coverage %80+ olmalı
- Performance impact değerlendirilmeli
- Accessibility standartları karşılanmalı

## 📄 Lisans / License

Bu proje MagiLabs ÖÜ'nin özel yazılımıdır. Tüm hakları saklıdır.

**English**: This project is proprietary software owned by MagiLabs ÖÜ. All rights reserved.

## 📞 İletişim / Contact

### Company Information
- **Company**: MagiLabs ÖÜ
- **Location**: Tallinn, Estonia (Tallinn, Estonya)
- **Industry**: Digital Product Studio
- **Specialization**: AI-powered SaaS Applications

### Contact Details
- **Email**: [Contact via website]
- **Website**: [Coming soon]
- **LinkedIn**: [Company profile]
- **GitHub**: [https://github.com/MagnusMagi/MagiLabs](https://github.com/MagnusMagi/MagiLabs)

### Office Location
- **Address**: Tallinn, Estonia
- **Timezone**: EET (UTC+2) / EEST (UTC+3)
- **Business Hours**: Monday - Friday, 9:00 AM - 6:00 PM

## 🌟 Öne Çıkan Özellikler / Key Highlights

### Innovation Focus
- **AI Integration**: Yapay zeka destekli özellikler
- **Modern Tech Stack**: En güncel teknolojiler
- **Scalable Architecture**: Büyüyen ihtiyaçlara uygun yapı
- **Performance First**: Hız ve performans odaklı geliştirme

### Estonian Excellence
- **Nordic Design**: İskandinav tasarım estetiği
- **Digital Innovation**: Estonya'nın dijital öncülüğü
- **Quality Standards**: Yüksek kalite standartları
- **Global Reach**: Uluslararası pazarlara açık

---

**Built with ❤️ by MagiLabs ÖÜ in Tallinn, Estonia**

*"Innovating the future, one line of code at a time"*
