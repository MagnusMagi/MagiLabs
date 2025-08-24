import { Code, Database, Globe, Settings } from 'lucide-react'

const techCategories = [
  {
    name: 'Frontend',
    icon: Code,
    technologies: [
      { name: 'Next.js 14', description: 'React framework with App Router' },
      { name: 'TypeScript', description: 'Type-safe JavaScript development' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
      { name: 'shadcn/ui', description: 'Reusable component library' },
      { name: 'React 18', description: 'Latest React with concurrent features' }
    ]
  },
  {
    name: 'Backend & API',
    icon: Settings,
    technologies: [
      { name: 'Next.js API Routes', description: 'Serverless API endpoints' },
      { name: 'OpenAI API', description: 'AI-powered features and content' },
      { name: 'RESTful APIs', description: 'Clean, scalable API design' },
      { name: 'JWT Authentication', description: 'Secure user authentication' }
    ]
  },
  {
    name: 'Database & Storage',
    icon: Database,
    technologies: [
      { name: 'PostgreSQL', description: 'Reliable relational database' },
      { name: 'Supabase', description: 'Open source Firebase alternative' },
      { name: 'Redis', description: 'Fast in-memory data store' },
      { name: 'AWS S3', description: 'Scalable file storage' }
    ]
  },
  {
    name: 'DevOps & Tools',
    icon: Globe,
    technologies: [
      { name: 'Vercel', description: 'Deployment and hosting platform' },
      { name: 'GitHub Actions', description: 'CI/CD automation' },
      { name: 'Docker', description: 'Containerization and deployment' },
      { name: 'ESLint + Prettier', description: 'Code quality and formatting' }
    ]
  }
]

export function TechStack() {
  return (
    <section id="tech" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with modern, scalable technologies that ensure performance, 
            security, and maintainability across all our products.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category) => (
            <div key={category.name} className="bg-background rounded-lg border p-6">
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-nordic-blue flex items-center justify-center">
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                {category.technologies.map((tech) => (
                  <div key={tech.name} className="border-l-2 border-muted pl-4">
                    <h4 className="font-medium text-foreground text-sm">{tech.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why This Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Why This Technology Stack?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-nordic-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Performance</h4>
              <p className="text-sm text-muted-foreground">
                Next.js 14 and modern tooling ensure fast, responsive applications
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-nordic-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🔒</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Security</h4>
              <p className="text-sm text-muted-foreground">
                Built-in security features and best practices for enterprise use
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-nordic-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">📈</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Scalability</h4>
              <p className="text-sm text-muted-foreground">
                Architecture designed to grow with your business needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
