import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MapPin,
  Users,
  Shield,
  Clock,
  Star,
  Calendar,
  Phone,
  Mail,
  Camera,
  Mountain,
  Waves,
  Award,
  Heart,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FeaturedTripsCarousel } from "@/components/featured-trips-carousel"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"

export default function HomePage() {
  const whyChooseUs = [
    {
      icon: Users,
      title: "Small Group Sizes",
      description: "Personal experience with intimate group sizes for better connections and personalized attention",
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Passionate guides with deep local knowledge and insider access to hidden gems",
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Shield,
      title: "Fully Managed Service",
      description: "End-to-end service management for a completely hassle-free travel experience",
      color: "from-orange-500 to-orange-600",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Safe travel with round-the-clock support and assistance whenever you need it",
      color: "from-purple-500 to-purple-600",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ]

  const quickCategories = [
    {
      title: "One Day Adventures",
      description: "Perfect weekend escapes from Bangalore",
      image: "/placeholder.svg?height=300&width=400",
      icon: Mountain,
      href: "/one-day-trips",
      gradient: "from-blue-500 to-blue-600",
      count: "6+ Trips",
    },
    {
      title: "Two Day Getaways",
      description: "Extended adventures with comfortable stays",
      image: "/placeholder.svg?height=300&width=400",
      icon: Waves,
      href: "/two-day-trips",
      gradient: "from-green-500 to-green-600",
      count: "8+ Trips",
    },
    {
      title: "Custom Journeys",
      description: "Tailored experiences just for you",
      image: "/placeholder.svg?height=300&width=400",
      icon: Camera,
      href: "/customized-trips",
      gradient: "from-orange-500 to-orange-600",
      count: "Unlimited",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* Stats Pills */}
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 pt-4 md:pt-6 bg-gray-900 py-6">
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 text-white">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="font-bold">4.8/5 Rating</span>
        </div>
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 text-white">
          <Users className="h-5 w-5 text-blue-400" />
          <span className="font-bold">500+ Happy Travelers</span>
        </div>
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 text-white">
          <CheckCircle className="h-5 w-5 text-green-400" />
          <span className="font-bold">Premium Service</span>
        </div>
      </div>

      {/* Quick Categories */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-red-500" />
              <span className="text-red-500 font-semibold tracking-wide uppercase text-sm">Choose Your Adventure</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Discover Amazing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Destinations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From quick day trips to extended getaways, we have the perfect adventure waiting for you
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {quickCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Link key={index} href={category.href}>
                  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 cursor-pointer bg-white h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-80`}></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <IconComponent className="h-12 w-12 mb-3 opacity-90" />
                        <span className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">{category.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Trips */}
      <section id="featured-trips" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="h-6 w-6 text-blue-600" />
              <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Featured Adventures</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Most Popular{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Experiences
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular weekend getaways and thrilling experiences
            </p>
          </div>
          <FeaturedTripsCarousel />
        </div>
      </section>

      {/* Why Choose Abhi Trip */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-green-600" />
              <span className="text-green-600 font-semibold tracking-wide uppercase text-sm">Why Choose Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Perfect{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Travel Partner
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just plan trips—we craft memorable travel experiences that help you unwind, explore, and
              reconnect with nature.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="group text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 bg-white relative overflow-hidden"
                >
                  <CardHeader className="pb-4 relative z-10">
                    <div
                      className={`mx-auto w-16 h-16 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                    >
                      <IconComponent className={`h-8 w-8 ${feature.iconColor}`} />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Group adventure at sunset"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-6 w-6 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold tracking-wide uppercase text-sm">About Abhi Trip</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Creating{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                    Unforgettable
                  </span>{" "}
                  Memories
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mb-6"></div>
              </div>
              <div className="space-y-4 text-gray-200 text-lg leading-relaxed">
                <p>
                  Welcome to Abhi Trip, your trusted travel partner for weekend escapes, thrilling treks, and customized
                  journeys across the beautiful landscapes of Karnataka and South India. Headquartered in Bangalore, we
                  specialize in organizing one-day and two-day trips, perfect for working professionals, couples, solo
                  travelers, and groups looking to break free from the city rush.
                </p>
                <p>
                  At Abhi Trip, we don't just plan trips—we craft memorable travel experiences. Whether you're trekking
                  through the Western Ghats, exploring waterfalls, camping under the stars, or visiting historical
                  sites, every journey with us is designed to help you unwind, explore, and reconnect with nature.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-block">
                  <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 h-12 px-6">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us
                  </button>
                </Link>
                <Link href="/gallery" className="inline-block">
                  <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm bg-white/10 hover:shadow-xl transform hover:scale-105 h-12 px-6">
                    <Camera className="mr-2 h-5 w-5" />
                    View Gallery
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Group camping experience"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 object-cover"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-blue-400/20 to-green-600/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Mountain trekking group"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide uppercase text-sm">Ready for Adventure</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Journey Today
              </span>
            </h2>
            <p className="text-xl mb-6 text-blue-100 leading-relaxed">
              Join hundreds of travelers who have discovered the joy of exploring with Abhi Trip. Book your weekend
              escape today and create memories that last a lifetime!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+919740174089" className="inline-block">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 h-14 px-10">
                  <Phone className="mr-3 h-6 w-6" />
                  Call Now: +91 97401 74089
                </button>
              </a>
              <a href="https://wa.me/919740174089" target="_blank" rel="noopener noreferrer" className="inline-block">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm bg-white/10 hover:shadow-xl transform hover:scale-105 h-14 px-10">
                  <Mail className="mr-3 h-6 w-6" />
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
