import { Users, Star, Phone, MessageCircle, Sparkles, Settings, Compass } from "lucide-react"
import { CustomTripCard } from "@/components/custom-trip-card"

const trips = [
  {
    slug: "customized-adventure-package",
    title: "Customized Adventure Package",
    description: "Tailor-made adventure experiences to suit your preferences.",
    price: "₹2,999",
    originalPrice: "₹3,499",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    slug: "corporate-team-building",
    title: "Corporate Team Building",
    description: "Strengthen your team with engaging outdoor activities.",
    price: "₹3,499",
    originalPrice: "₹3,999",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    slug: "photography-expedition",
    title: "Photography Expedition",
    description: "Capture stunning landscapes and wildlife with expert guidance.",
    price: "₹4,299",
    originalPrice: "₹4,799",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    slug: "family-adventure-package",
    title: "Family Adventure Package",
    description: "Create lasting memories with exciting family-friendly adventures.",
    price: "₹2,799",
    originalPrice: "₹3,299",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    slug: "wellness-yoga-retreat",
    title: "Wellness & Yoga Retreat",
    description: "Rejuvenate your mind and body in serene natural settings.",
    price: "₹3,999",
    originalPrice: "₹4,499",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    slug: "adventure-sports-package",
    title: "Adventure Sports Package",
    description: "Experience thrilling adventure sports like never before.",
    price: "₹4,999",
    originalPrice: "₹5,499",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
  },
]

export default function CustomizedTripsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-24 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>

        {/* Moving Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-move-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-move-slow-reverse"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-teal-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Settings className="h-6 w-6 text-emerald-400" />
              <span className="text-emerald-400 font-semibold tracking-wide uppercase text-sm">
                Personalized Adventures
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Custom Journey
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Tailor-made adventures designed specifically for you, your group, or your company.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Sparkles className="h-5 w-5 text-yellow-400" />
                <span>Fully Customizable</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Users className="h-5 w-5 text-green-400" />
                <span>Groups & Corporate</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span>Premium Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Compass className="h-5 w-5 text-blue-400" />
                <span>Unique Destinations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <CustomTripCard key={trip.slug} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Dream Adventure
              </span>
            </h2>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Contact us today to create a personalized experience that perfectly matches your interests, group size,
              and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+919740174089">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105 h-14 px-10">
                  <Phone className="mr-3 h-6 w-6" />
                  Call +91 97401 74089
                </button>
              </a>
              <a href="https://wa.me/919740174089" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 border-2 border-white/30 text-white hover:bg-white hover:text-teal-600 backdrop-blur-sm bg-white/10 hover:shadow-2xl transform hover:scale-105 h-14 px-10">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  WhatsApp Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
