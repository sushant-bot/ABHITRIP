import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Award,
  MapPin,
  Calendar,
  Phone,
  MessageCircle,
  Heart,
  Star,
  Shield,
  Mountain,
  CheckCircle,
  Target,
  Eye,
  Compass,
} from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const milestones = [
    {
      year: "2018",
      title: "Founded Abhi Trip",
      description: "Started with a vision to make adventure accessible to everyone",
      icon: Compass,
    },
    {
      year: "2019",
      title: "First 100 Travelers",
      description: "Reached our first milestone of 100 happy adventurers",
      icon: Users,
    },
    {
      year: "2020",
      title: "Safety First Initiative",
      description: "Implemented comprehensive safety protocols and training",
      icon: Shield,
    },
    {
      year: "2021",
      title: "Expanded Destinations",
      description: "Added 25+ new destinations across Karnataka and South India",
      icon: MapPin,
    },
    {
      year: "2022",
      title: "1000+ Adventures",
      description: "Completed over 1000 successful trips with 4.8+ rating",
      icon: Star,
    },
    {
      year: "2023",
      title: "Premium Services",
      description: "Launched customized and corporate travel packages",
      icon: Award,
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion for Adventure",
      description: "We live and breathe adventure, sharing our passion with every traveler who joins us.",
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety is our top priority. We maintain the highest safety standards in all our trips.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "We create lasting friendships and connections through shared adventure experiences.",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from planning to execution.",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication, honest pricing, and no hidden costs. What you see is what you get.",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      icon: Mountain,
      title: "Sustainable Tourism",
      description: "We promote responsible travel that respects local communities and preserves nature.",
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
  ]

  const achievements = [
    { number: "1000+", label: "Happy Travelers", icon: Users },
    { number: "50+", label: "Destinations", icon: MapPin },
    { number: "4.8", label: "Average Rating", icon: Star },
    { number: "100+", label: "Successful Trips", icon: CheckCircle },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-24 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Abhi Trip team adventure"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

        {/* Moving Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-move-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-move-slow-reverse"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="h-6 w-6 text-blue-400" />
              <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">About Abhi Trip</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Your Trusted{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Adventure Partner
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Since 2018, we've been creating unforgettable travel experiences across Karnataka and South India,
              connecting people with nature and adventure.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Calendar className="h-5 w-5 text-green-400" />
                <span>Since 2018</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Users className="h-5 w-5 text-blue-400" />
                <span>1000+ Travelers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span>4.8+ Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Award className="h-5 w-5 text-purple-400" />
                <span>Trusted Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Compass className="h-6 w-6 text-blue-600" />
                  <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Our Story</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Welcome to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Abhitrip
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"></div>
              </div>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Welcome to Abhitrip, your trusted travel partner for weekend getaways, trekking adventures, and
                  customized trips across the breathtaking landscapes of Karnataka and South India. Based in Bangalore,
                  we specialize in one-day and two-day escapes—ideal for working professionals, couples, solo travelers,
                  and groups seeking a refreshing break from city life.
                </p>
                <p>
                  At Abhitrip, we don't just plan trips — we create experiences. Whether you're trekking through the
                  Western Ghats, camping under starlit skies, chasing waterfalls, or exploring historic forts and hill
                  stations, every journey is designed to help you unwind, explore, and reconnect with nature.
                </p>
                <p>
                  Come join the growing community of happy travelers who trust Abhitrip to turn their weekends into
                  lasting memories.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Abhi Trip adventure experiences"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Target className="h-6 w-6 text-purple-600" />
              <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm">Mission & Vision</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Drives{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl bg-white transform hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed text-lg">
                  To make adventure travel accessible, safe, and memorable for everyone. We believe that everyone
                  deserves to experience the joy of exploration and the peace that comes from connecting with nature.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white transform hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed text-lg">
                  To become South India's most trusted adventure travel company, known for creating transformative
                  experiences that inspire people to explore, connect, and grow through responsible tourism.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-red-600" />
              <span className="text-red-600 font-semibold tracking-wide uppercase text-sm">Our Values</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Stand For
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values guide every decision we make and every experience we create for our travelers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`mx-auto w-16 h-16 ${value.bg} rounded-xl flex items-center justify-center mb-4 shadow-md`}
                  >
                    <value.icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="h-6 w-6 text-purple-600" />
              <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm">Our Journey</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Milestones &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Achievements
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <milestone.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">{milestone.year}</div>
                  <CardTitle className="text-lg font-bold text-gray-900">{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed text-sm">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide uppercase text-sm">Our Achievements</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Numbers That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Speak
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-10 w-10 text-yellow-400" />
                </div>
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-blue-200">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Join our adventure"
            fill
            className="object-cover opacity-10"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mountain className="h-6 w-6 text-blue-400" />
              <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">Join Our Community</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Adventure With Us?
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Become part of our adventure community and create memories that will last a lifetime. Your next great
              adventure is just a call away!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+919740174089">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 h-14 px-10">
                  <Phone className="mr-3 h-6 w-6" />
                  Call +91 97401 74089
                </button>
              </a>
              <a href="https://wa.me/919740174089" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm bg-white/10 hover:shadow-2xl transform hover:scale-105 h-14 px-10">
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
