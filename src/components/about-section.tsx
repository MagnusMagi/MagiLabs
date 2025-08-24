import { Button } from '@/components/ui/button'
import { MapPin, Building2, Users, Target, Award } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About MagiLabs ÖÜ
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2024, MagiLabs is a Tallinn-based digital innovation studio 
              operating under Estonia's e-Residency program. We specialize in creating 
              AI-powered SaaS applications that solve real-world problems.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Our mission is to democratize access to advanced technology by building 
              modular, scalable solutions that empower businesses and individuals alike.
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-nordic-blue">2024</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-nordic-blue">3</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
            </div>

            {/* CTA */}
            <Button className="bg-nordic-blue hover:bg-nordic-blue/90">
              Learn More About Us
            </Button>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="space-y-6">
            {/* Estonia Badge */}
            <div className="bg-gradient-to-r from-nordic-blue to-nordic-softBlue rounded-lg p-6 text-white text-center">
              <Building2 className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Estonia e-Residency</h3>
              <p className="text-nordic-gray">
                Operating under Estonia's digital-first business environment
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-nordic-blue mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Innovation First</h4>
                  <p className="text-sm text-muted-foreground">
                    We push boundaries and explore new technologies to create breakthrough solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-nordic-blue mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">User-Centric Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Every product is built with the end-user in mind, ensuring intuitive experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-nordic-blue mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Quality & Reliability</h4>
                  <p className="text-sm text-muted-foreground">
                    We maintain high standards in code quality, security, and performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Tallinn, Estonia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
