import { Button } from '@/components/ui/button'
import { Download, ExternalLink, Sparkles, Dumbbell, Rocket } from 'lucide-react'

const products = [
  {
    name: 'MagiNews',
    description: 'AI-powered news aggregation and personalization platform',
    icon: Sparkles,
    features: ['Smart Curation', 'Personalized Feeds', 'Real-time Updates'],
    status: 'Live',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Trainerly',
    description: 'AI fitness coaching and workout planning application',
    icon: Dumbbell,
    features: ['AI Workout Plans', 'Progress Tracking', 'Nutrition Guidance'],
    status: 'Beta',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'AstroApp',
    description: 'Astronomy and stargazing companion with AI insights',
    icon: Rocket,
    features: ['Sky Maps', 'AI Observations', 'Educational Content'],
    status: 'Coming Soon',
    color: 'from-purple-500 to-pink-500'
  }
]

export function ProductShowcase() {
  return (
    <section id="products" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our AI-Powered Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our suite of innovative SaaS applications designed to transform 
            how you work, learn, and stay informed.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.name} className="bg-background rounded-lg border p-6 hover:shadow-lg transition-shadow">
              {/* Product Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4`}>
                <product.icon className="h-6 w-6 text-white" />
              </div>

              {/* Product Info */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.status === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    product.status === 'Beta' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                  }`}>
                    {product.status}
                  </span>
                </div>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-nordic-blue rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <Button className="w-full" variant="outline">
                {product.status === 'Coming Soon' ? 'Join Waitlist' : 'Learn More'}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <div className="bg-background rounded-lg border p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Resources & Downloads
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get access to our pitch decks, technical documentation, and business plans 
            to understand our vision and investment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-nordic-blue hover:bg-nordic-blue/90">
              <Download className="mr-2 h-4 w-4" />
              Download Pitch Deck
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Technical Whitepaper
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Business Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
