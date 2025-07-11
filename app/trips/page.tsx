"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, Star, Clock, ArrowRight, Search, Sparkles, Mountain } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { allTrips } from "@/lib/trips-data"

export default function TripsPage() {
  const [trips, setTrips] = useState(allTrips)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredTrips = trips.filter((trip) => {
    const matchesSearch =
      trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || trip.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "all" || trip.difficulty === selectedDifficulty
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const oneDayTrips = filteredTrips.filter((trip) => trip.category === "one-day")
  const twoDayTrips = filteredTrips.filter((trip) => trip.category === "two-day")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800"></div>
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-300/20 rounded-full blur-lg animate-float stagger-2"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-300/15 rounded-full blur-2xl animate-float stagger-3"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-indigo-300/20 rounded-full blur-xl animate-float stagger-4"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div
            className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
          >
            <div className="flex items-center justify-center gap-3 mb-8 animate-fadeInUp stagger-1">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-yellow-300 animate-pulse" />
                <div className="absolute inset-0 h-8 w-8 text-yellow-300 animate-ping opacity-75">
                  <Sparkles className="h-8 w-8" />
                </div>
              </div>
              <Badge variant="secondary" className="glass text-white border-white/30 px-6 py-2 text-lg font-medium">
                <Mountain className="w-5 h-5 mr-2" />
                All Adventures
              </Badge>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 animate-fadeInUp stagger-2">
              <span className="block">Explore All Our</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent animate-gradient">
                Adventures
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12 animate-fadeInUp stagger-3">
              Discover the complete collection of our adventure trips and treks. From one-day escapes to extended
              getaways, find your perfect adventure in Karnataka's most beautiful destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Search and Filter Section */}
      <section className="py-12 bg-white/80 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 animate-fadeInUp">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search destinations, locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl shadow-lg"
                  />
                </div>
              </div>
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full h-14 px-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl shadow-lg bg-white"
                >
                  <option value="all">All Categories</option>
                  <option value="one-day">One Day Trips</option>
                  <option value="two-day">Two Day Trips</option>
                </select>
              </div>
              <div>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full h-14 px-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl shadow-lg bg-white"
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

      {/* Enhanced Trips Sections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* One Day Trips Section */}
          {(selectedCategory === "all" || selectedCategory === "one-day") && oneDayTrips.length > 0 && (
            <div className="mb-20">
              <div className="text-center mb-16 animate-fadeInUp">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  One Day <span className="gradient-text">Adventures</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Perfect escapes for weekend warriors and adventure seekers looking for quick getaways.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {oneDayTrips.map((trip, index) => (
                  <Card
                    key={trip.id}
                    className={`group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 card-hover bg-white animate-fadeInUp stagger-${(index % 6) + 1}`}
                  >
                    <div className="relative h-64 md:h-72 overflow-hidden">
                      <Image
                        src={trip.image || "/placeholder.svg"}
                        alt={trip.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      <div className="absolute top-4 left-4 animate-fadeInLeft">
                        <Badge
                          variant="secondary"
                          className={`${
                            trip.difficulty === "Easy"
                              ? "bg-green-500/90 text-white border-0"
                              : "bg-yellow-500/90 text-white border-0"
                          } backdrop-blur-sm shadow-lg px-3 py-1 font-medium`}
                        >
                          {trip.difficulty}
                        </Badge>
                      </div>

                      <div className="absolute top-4 right-4 animate-fadeInRight">
                        <Badge
                          variant="secondary"
                          className="bg-black/70 text-white border-0 backdrop-blur-sm shadow-lg px-3 py-1"
                        >
                          <Clock className="w-4 h-4 mr-1" />
                          {trip.duration}
                        </Badge>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 animate-fadeInUp">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-2 glass rounded-lg px-3 py-2">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{trip.rating}</span>
                            <span className="text-white/80 text-sm">({trip.reviews})</span>
                          </div>
                          <div className="glass rounded-lg px-3 py-2">
                            <span className="text-2xl font-bold text-green-400">{trip.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl md:text-2xl line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 font-bold">
                        {trip.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-gray-600 line-clamp-3 leading-relaxed">{trip.description}</p>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
                          <MapPin className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                          <span className="font-medium">{trip.location}</span>
                        </div>
                        <div className="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
                          <Users className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                          <span className="font-medium">{trip.groupSize} people</span>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl font-bold text-green-600">{trip.price}</span>
                            {trip.originalPrice && (
                              <span className="text-lg text-gray-500 line-through">{trip.originalPrice}</span>
                            )}
                          </div>
                          <Link href={`/trips/${trip.slug}`}>
                            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 btn-animate px-6 py-3">
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
            </div>
          )}

          {/* Two Day Trips Section */}
          {(selectedCategory === "all" || selectedCategory === "two-day") && twoDayTrips.length > 0 && (
            <div>
              <div className="text-center mb-16 animate-fadeInUp">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Extended <span className="gradient-text">Getaways</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Immerse yourself in longer adventures with overnight stays and deeper exploration.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
                {twoDayTrips.map((trip, index) => (
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

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

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

                      <div className="absolute bottom-6 left-6 right-6 animate-fadeInUp">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <span className="font-bold text-lg">{trip.rating}</span>
                            <span className="text-white/80">({trip.reviews})</span>
                          </div>
                          <div className="glass rounded-xl px-4 py-3">
                            <span className="text-3xl font-bold text-emerald-400">{trip.price}</span>
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
                      </div>

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
            </div>
          )}

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
                  setSelectedCategory("all")
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
    </div>
  )
}
