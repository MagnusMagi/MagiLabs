import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Users, Globe, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="py-20 px-4">
      <div className="container mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Sparkles className="h-4 w-4 text-nordic-blue" />
          <span>AI-Powered SaaS Innovation</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
          Building the Future of{' '}
          <span className="bg-gradient-to-r from-nordic-blue to-nordic-softBlue bg-clip-text text-transparent">
            Digital Innovation
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Estonia-based digital product studio specializing in AI-powered applications. 
          We create modular SaaS solutions that scale with your business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-nordic-blue hover:bg-nordic-blue/90">
            Explore Our Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Download Pitch Deck
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Users className="h-8 w-8 text-nordic-blue" />
            </div>
            <div className="text-2xl font-bold text-foreground">10K+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Globe className="h-8 w-8 text-nordic-blue" />
            </div>
            <div className="text-2xl font-bold text-foreground">25+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Zap className="h-8 w-8 text-nordic-blue" />
            </div>
            <div className="text-2xl font-bold text-foreground">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}
