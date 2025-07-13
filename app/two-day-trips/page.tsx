"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Clock,
  Users,
  Star,
  Calendar,
  ArrowRight,
  Mountain,
  Camera,
  Utensils,
  Search,
  Sparkles,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getTwoDayTrips, getTwoDayTripsFromDB } from "@/lib/trips-data"

export default function TwoDayTripsPage() {
  const [trips, setTrips] = useState(getTwoDayTrips())
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [isVisible, setIsVisible] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setIsVisible(true)
    loadTrips()
  }, [])

  const loadTrips = async () => {
    try {
      const dbTrips = await getTwoDayTripsFromDB()
      if (dbTrips.length > 0) {
        setTrips(dbTrips)
      }
    } catch (error) {
      console.error('Failed to load trips from database, using fallback data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredTrips = trips.filter((trip) => {
    const matchesSearch =
      trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = selectedDifficulty === "all" || trip.difficulty === selectedDifficulty
    return matchesSearch && matchesDifficulty
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section with Enhanced Animations */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800"></div>
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Floating Elements with Different Animations */}
          <div className="absolute top-16 left-8 w-36 h-36 bg-emerald-300/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-32 right-16 w-28 h-28 bg-teal-300/25 rounded-full blur-xl animate-float stagger-2"></div>
          <div className="absolute bottom-40 left-1/3 w-44 h-44 bg-cyan-300/15 rounded-full blur-3xl animate-float stagger-3"></div>
          <div className="absolute bottom-24 right-1/4 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl animate-float stagger-4"></div>

          {/* Animated Mountain Silhouettes */}
          <div className="absolute bottom-0 left-0 w-full h-40 opacity-20">
            <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="w-full h-full">
              <path
                d="M0,200 L200,100 L400,150 L600,80 L800,120 L1000,60 L1200,100 L1200,200 Z"
                fill="rgba(255,255,255,0.1)"
                className="animate-pulse"
              ></path>
            </svg>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div
            className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
          >
            <div className="flex items-center justify-center gap-3 mb-8 animate-fadeInUp stagger-1">
              <div className="relative">
                <Mountain className="h-8 w-8 text-emerald-300 animate-pulse" />
                <div className="absolute inset-0 h-8 w-8 text-emerald-300 animate-ping opacity-75">
                  <Mountain className="h-8 w-8" />
                </div>
              </div>
              <Badge variant="secondary" className="glass text-white border-white/30 px-6 py-2 text-lg font-medium">
                <Calendar className="w-5 h-5 mr-2" />
                Extended Adventures
              </Badge>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 animate-fadeInUp stagger-2">
              <span className="block">Two Day</span>
              <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent animate-gradient">
                Getaways
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-12 animate-fadeInUp stagger-3">
              Immerse yourself in extended adventures with overnight stays. Perfect for deeper exploration of
              Karnataka's hidden gems, cultural sites, and natural wonders.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base animate-fadeInUp stagger-4">
              <Badge variant="secondary" className="glass text-white border-white/30 px-6 py-3 hover-lift">
                <Calendar className="w-5 h-5 mr-2" />2 Days / 1 Night
              </Badge>
              <Badge variant="secondary" className="glass text-white border-white/30 px-6 py-3 hover-lift">
                <Utensils className="w-5 h-5 mr-2" />
                Meals Included
              </Badge>
              <Badge variant="secondary" className="glass text-white border-white/30 px-6 py-3 hover-lift">
                <Mountain className="w-5 h-5 mr-2" />
                Accommodation
              </Badge>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Search and Filter Section */}
      <section className="py-12 bg-white/80 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 animate-fadeInUp">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search destinations, locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-emerald-500 rounded-xl shadow-lg"
                  />
                </div>
              </div>
              <div>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full h-14 px-4 text-lg border-2 border-gray-200 focus:border-emerald-500 rounded-xl shadow-lg bg-white"
                >
                  <option value="all">All Difficulties</option>
                  <option value="Easy">Easy</option>
                  <option value="Moderate">Moderate</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Trips Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Extended <span className="gradient-text">Adventures</span> Await
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take your time to truly experience the beauty and culture of Karnataka with our carefully planned two-day
              itineraries including comfortable accommodation and meals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {filteredTrips.map((trip, index) => (
              <Card
                key={trip.id}
                className={`group overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 card-hover bg-white animate-fadeInUp stagger-${(index % 4) + 1}`}
              >
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <Image
                    src={trip.image || "/placeholder.svg"}
                    alt={trip.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                  {/* Floating Badges with Enhanced Animations */}
                  <div className="absolute top-6 left-6 animate-fadeInLeft">
                    <Badge
                      variant="secondary"
                      className={`${
                        trip.difficulty === "Easy"
                          ? "bg-emerald-500/90 text-white border-0"
                          : "bg-amber-500/90 text-white border-0"
                      } backdrop-blur-sm shadow-lg px-4 py-2 font-medium text-sm`}
                    >
                      {trip.difficulty}
                    </Badge>
                  </div>

                  <div className="absolute top-6 right-6 animate-fadeInRight">
                    <Badge
                      variant="secondary"
                      className="bg-black/70 text-white border-0 backdrop-blur-sm shadow-lg px-4 py-2"
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      {trip.duration}
                    </Badge>
                  </div>

                  {/* Enhanced Bottom Info */}
                  <div className="absolute bottom-6 left-6 right-6 animate-fadeInUp">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-lg">{trip.rating}</span>
                        <span className="text-white/80">({trip.reviews})</span>
                      </div>
                      <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                        <Camera className="w-5 h-5 text-blue-300" />
                        <Mountain className="w-5 h-5 text-emerald-300" />
                        <Utensils className="w-5 h-5 text-orange-300" />
                      </div>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl md:text-3xl line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300 font-bold">
                    {trip.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-600 line-clamp-3 leading-relaxed text-lg">{trip.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
                      <MapPin className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" />
                      <span className="font-medium">{trip.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
                      <Users className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                      <span className="font-medium">{trip.groupSize} people</span>
                    </div>
                    <div className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
                      <Clock className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0" />
                      <span className="font-medium">Includes accommodation & meals</span>
                    </div>
                  </div>

                  {/* Enhanced Highlights */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 text-lg">Key Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trip.highlights.slice(0, 3).map((highlight, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-sm px-3 py-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-colors"
                        >
                          {highlight}
                        </Badge>
                      ))}
                      {trip.highlights.length > 3 && (
                        <Badge variant="outline" className="text-sm px-3 py-1 border-gray-200 text-gray-600">
                          +{trip.highlights.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl md:text-4xl font-bold text-emerald-600">{trip.price}</span>
                        {trip.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">{trip.originalPrice}</span>
                        )}
                      </div>
                      <Link href={`/trips/${trip.slug}`}>
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 btn-animate px-8 py-4 text-lg font-semibold"
                        >
                          View Details
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Coming Soon Section */}
          <div className="mt-20 text-center animate-fadeInUp">
            <Card className="max-w-3xl mx-auto bg-gradient-to-r from-emerald-50 to-teal-50 border-dashed border-2 border-emerald-200 hover-lift">
              <CardContent className="py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-emerald-600 animate-pulse" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">More Adventures Coming Soon!</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We're constantly adding new destinations and experiences. Stay tuned for more exciting two-day
                  getaways to explore Karnataka's beauty.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white bg-transparent shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 text-lg font-semibold btn-animate"
                >
                  <Link href="/contact">Get Notified</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {filteredTrips.length === 0 && (
            <div className="text-center py-16 animate-fadeInUp">
              <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No trips found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search criteria or browse all available trips.</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedDifficulty("all")
                }}
                variant="outline"
                size="lg"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Enhanced Animated Background Elements */}
        <div className="absolute top-10 left-10 w-44 h-44 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-emerald-300/20 rounded-full blur-2xl animate-float stagger-2"></div>
        <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-teal-300/15 rounded-full blur-xl animate-float stagger-3"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto animate-fadeInUp">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Ready for an Extended <span className="text-emerald-300">Adventure?</span>
            </h2>
            <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
              Experience the best of Karnataka with our thoughtfully planned two-day trips. Perfect for couples,
              families, and groups looking for memorable getaways.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-emerald-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold btn-animate"
              >
                <Link href="/contact" className="flex items-center">
                  Plan Custom Trip
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold btn-animate"
              >
                <Link href="/one-day-trips" className="flex items-center">
                  View Day Trips
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
