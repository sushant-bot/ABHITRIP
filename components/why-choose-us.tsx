import { Shield, Users, Award, Clock } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Professional guides, safety equipment, and comprehensive insurance for all trips.",
    },
    {
      icon: Users,
      title: "Expert Guides",
      description: "Local experts with years of experience in Karnataka's mountains and trails.",
    },
    {
      icon: Award,
      title: "Best Experience",
      description: "Carefully curated itineraries for maximum adventure and unforgettable memories.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support before, during, and after your adventure.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Abhi Trip?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing safe, memorable, and authentic adventure experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
