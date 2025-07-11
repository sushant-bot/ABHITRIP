import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#1e40af] overflow-hidden">
      {/* Moving Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large moving circles */}
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-move-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-move-slow-reverse"></div>

        {/* Small floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-indigo-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/40 rounded-full blur-sm animate-float"></div>
        <div className="absolute top-3/4 left-2/3 w-3 h-3 bg-indigo-400/40 rounded-full blur-sm animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-blue-400/40 rounded-full blur-sm animate-float animation-delay-2000"></div>

        {/* Wave effects */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-500/10 to-transparent animate-wave"></div>
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-indigo-500/10 to-transparent animate-wave-slow"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <Badge className="bg-yellow-500 text-black hover:bg-yellow-400 text-sm font-medium">
              ⭐ Karnataka's #1 Adventure Travel Company
            </Badge>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Your Perfect{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Adventure Awaits
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-blue-100">In Karnataka's Mountains</h2>
            </div>

            <p className="text-lg text-blue-100 leading-relaxed max-w-lg">
              From thrilling one-day treks to weekend getaways, we create unforgettable adventures for nature lovers and
              adventure seekers across Karnataka.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
                Explore Adventures
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 text-lg font-semibold bg-transparent"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://sjc.microlink.io/EJYinzVtKX8YnKefL1oq4VdXtdH8H-aRZ-YxtWtPu-3HMSuTC4ah5wlAa-3EIpk74XE5OGlWBHqh7h5vbt84uA.jpeg"
                alt="Adventure trekkers in Karnataka mountains"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">4.9⭐</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">2000+</div>
                <div className="text-sm text-gray-600">Happy Travelers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
