"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  MapPin,
  Users,
  Clock,
  Star,
  Phone,
  MessageCircle,
  Check,
  X,
  Shield,
  Share2,
  Calendar,
  CheckCircle,
  Heart,
  Camera,
  Mountain,
  Sparkles,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ClientBookingForm from "@/components/client-booking-form"
import type { Trip } from "@/lib/trips-data"

interface TripDetailPageProps {
  trip: Trip
}

export function TripDetailPage({ trip }: TripDetailPageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleBookNow = () => {
    const message = `Hi! I'm interested in booking the ${trip.title} trip. Can you provide more details about availability and pricing?`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919740174089?text=${encodedMessage}`, "_blank")
  }

  const handleCallNow = () => {
    window.open("tel:+919740174089", "_self")
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: trip.title,
          text: trip.description,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  const tabsToShow =
    trip.category === "one-day" ? ["itinerary", "inclusions", "faq"] : ["itinerary", "inclusions", "gallery", "faq"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={trip.image || "/placeholder.svg"}
            alt={trip.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-blue-300/20 rounded-full blur-xl animate-float stagger-2"></div>
        </div>

        {/* Enhanced Navigation */}
        <div className="absolute top-6 left-6 z-20 animate-fadeInLeft">
          <Link href={trip.category === "one-day" ? "/one-day-trips" : "/two-day-trips"}>
            <Button
              variant="secondary"
              size="lg"
              className="glass text-white border-white/30 hover:bg-white/20 shadow-xl backdrop-blur-md px-6 py-3"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Trips
            </Button>
          </Link>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="absolute top-6 right-6 z-20 flex gap-3 animate-fadeInRight">
          <Button
            variant="secondary"
            size="lg"
            className="glass text-white border-white/30 hover:bg-white/20 shadow-xl backdrop-blur-md p-3"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-5 w-5 transition-colors ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="glass text-white border-white/30 hover:bg-white/20 shadow-xl backdrop-blur-md p-3"
            onClick={handleShare}
          >
            <Share2 className="h-5 w-5" />
          </Button>
        </div>

        {/* Enhanced Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <div className={`max-w-5xl transition-all duration-1000 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
              <div className="flex flex-wrap items-center gap-4 mb-6 animate-fadeInUp stagger-1">
                <Badge variant="secondary" className="glass text-white border-white/30 px-4 py-2 text-lg font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  {trip.category === "one-day" ? "One Day Trip" : "Two Day Trip"}
                </Badge>
                <Badge
                  variant="secondary"
                  className={`${
                    trip.difficulty === "Easy"
                      ? "bg-emerald-500/80 text-white border-0"
                      : trip.difficulty === "Moderate"
                        ? "bg-amber-500/80 text-white border-0"
                        : "bg-red-500/80 text-white border-0"
                  } backdrop-blur-sm px-4 py-2 text-lg font-medium`}
                >
                  {trip.difficulty}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 animate-fadeInUp stagger-2 leading-tight">
                {trip.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 md:gap-8 text-white/90 mb-8 text-lg animate-fadeInUp stagger-3">
                <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                  <MapPin className="h-6 w-6 text-blue-300" />
                  <span className="font-medium">{trip.location}</span>
                </div>
                <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                  <Clock className="h-6 w-6 text-emerald-300" />
                  <span className="font-medium">{trip.duration}</span>
                </div>
                <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                  <Users className="h-6 w-6 text-purple-300" />
                  <span className="font-medium">{trip.groupSize} people</span>
                </div>
                <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                  <Star className="h-6 w-6 text-yellow-400 fill-current" />
                  <span className="font-medium">
                    {trip.rating} ({trip.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 animate-fadeInUp stagger-4">
                <div className="glass rounded-2xl px-6 py-4 border border-white/20">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-3xl md:text-4xl font-bold text-white">{trip.price}</div>
                      <div className="text-sm text-white/70">per person</div>
                    </div>
                    {trip.originalPrice && (
                      <div className="text-white/60 line-through text-xl">{trip.originalPrice}</div>
                    )}
                  </div>
                </div>
                <Button
                  onClick={handleBookNow}
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg font-semibold btn-animate"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-12 md:gap-16">
          {/* Enhanced Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Enhanced Overview */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fadeInUp">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-xl">
                <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                  <Mountain className="w-8 h-8" />
                  Trip Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <p className="text-gray-700 leading-relaxed text-lg md:text-xl">{trip.detailedDescription}</p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover-lift">
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="font-bold text-xl text-gray-900">{trip.duration}</div>
                    <div className="text-gray-600">Duration</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl hover-lift">
                    <Users className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                    <div className="font-bold text-xl text-gray-900">{trip.groupSize}</div>
                    <div className="text-gray-600">Group Size</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl hover-lift">
                    <Badge variant="outline" className="text-amber-600 border-amber-200 text-lg px-4 py-2">
                      {trip.difficulty}
                    </Badge>
                    <div className="text-gray-600 mt-2">Difficulty</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Star className="w-7 h-7 text-yellow-500" />
                    Key Highlights
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {trip.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl hover-lift"
                      >
                        <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Detailed Tabs */}
            <Tabs defaultValue="itinerary" className="w-full animate-fadeInUp stagger-2">
              <TabsList
                className={`grid w-full ${tabsToShow.length === 3 ? "grid-cols-3" : "grid-cols-4"} h-16 bg-gradient-to-r from-slate-100 to-blue-100 rounded-2xl p-2`}
              >
                <TabsTrigger
                  value="itinerary"
                  className="text-lg font-semibold rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Itinerary
                </TabsTrigger>
                <TabsTrigger
                  value="inclusions"
                  className="text-lg font-semibold rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg"
                >
                  <Check className="w-5 h-5 mr-2" />
                  Inclusions
                </TabsTrigger>
                {tabsToShow.includes("gallery") && (
                  <TabsTrigger
                    value="gallery"
                    className="text-lg font-semibold rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg"
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    Gallery
                  </TabsTrigger>
                )}
                <TabsTrigger
                  value="faq"
                  className="text-lg font-semibold rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg"
                >
                  FAQ
                </TabsTrigger>
              </TabsList>

              <TabsContent value="itinerary" className="mt-8">
                <Card className="border-0 shadow-2xl">
                  <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-xl">
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Calendar className="w-7 h-7" />
                      Detailed Itinerary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {trip.itinerary.map((item, index) => (
                        <div
                          key={index}
                          className="flex gap-6 pb-6 border-b border-gray-100 last:border-b-0 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl p-4 transition-all duration-300"
                        >
                          <div className="flex-shrink-0 w-32">
                            <Badge
                              variant="outline"
                              className="text-sm font-medium px-3 py-2 bg-gradient-to-r from-blue-100 to-purple-100 border-blue-200"
                            >
                              {item.time}
                            </Badge>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700 text-lg leading-relaxed">{item.activity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="inclusions" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-t-xl">
                      <CardTitle className="text-xl flex items-center gap-3">
                        <Check className="h-6 w-6" />
                        What's Included
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        {trip.included.map((item, index) => (
                          <li key={index} className="flex items-start gap-4 p-3 bg-emerald-50 rounded-xl hover-lift">
                            <Check className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <CardHeader className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-t-xl">
                      <CardTitle className="text-xl flex items-center gap-3">
                        <X className="h-6 w-6" />
                        What's Not Included
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        {trip.excluded.map((item, index) => (
                          <li key={index} className="flex items-start gap-4 p-3 bg-red-50 rounded-xl hover-lift">
                            <X className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-8 border-0 shadow-2xl">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-t-xl">
                    <CardTitle className="text-xl">Things to Carry</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {trip.thingsToCarry.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-3 bg-blue-50 rounded-xl hover-lift">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {tabsToShow.includes("gallery") && (
                <TabsContent value="gallery" className="mt-8">
                  <Card className="border-0 shadow-2xl">
                    <CardHeader className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-t-xl">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <Camera className="h-7 w-7" />
                        Photo Gallery
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {trip.gallery.map((image, index) => (
                          <div
                            key={index}
                            className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                            onClick={() => setActiveImageIndex(index)}
                          >
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${trip.title} - Image ${index + 1}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                              <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}

              <TabsContent value="faq" className="mt-8">
                <Card className="border-0 shadow-2xl">
                  <CardHeader className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-t-xl">
                    <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {trip.faqs.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="border border-gray-200 rounded-xl px-6 hover:shadow-lg transition-all duration-300"
                        >
                          <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 pb-6 text-lg leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Enhanced Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Enhanced Booking Card */}
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fadeInUp">
                <CardHeader className="text-center pb-6 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-t-xl">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-4xl md:text-5xl font-bold">{trip.price}</span>
                    {trip.originalPrice && (
                      <span className="text-2xl text-white/70 line-through">{trip.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-white/90 text-lg">per person</p>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
                    <h4 className="font-bold text-yellow-800 flex items-center gap-3 mb-3 text-lg">
                      <MessageCircle className="h-6 w-6" />
                      Quick WhatsApp Booking
                    </h4>
                    <p className="text-yellow-700 leading-relaxed">
                      Book instantly through WhatsApp for faster confirmations!
                    </p>
                  </div>

                  <ClientBookingForm tripTitle={trip.title} tripPrice={trip.price} />

                  <div className="pt-6 border-t space-y-4">
                    <h4 className="font-bold text-center text-xl text-gray-900">Need Help?</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        onClick={handleCallNow}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3 btn-animate"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        Call
                      </Button>
                      <Button
                        onClick={handleBookNow}
                        className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3 btn-animate"
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Pickup Points */}
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fadeInUp stagger-2">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-xl">
                  <CardTitle className="text-xl flex items-center gap-3">
                    <MapPin className="h-6 w-6" />
                    Pickup Points
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {trip.pickupPoints.slice(0, 3).map((point, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl hover-lift">
                        <MapPin className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{point}</span>
                      </div>
                    ))}
                    {trip.pickupPoints.length > 3 && (
                      <p className="text-gray-500 text-sm mt-4 text-center bg-gray-50 p-3 rounded-xl">
                        +{trip.pickupPoints.length - 3} more pickup points available
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Safety & Policies */}
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fadeInUp stagger-3">
                <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-t-xl">
                  <CardTitle className="text-xl flex items-center gap-3">
                    <Shield className="h-6 w-6" />
                    Safety & Policies
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="p-4 bg-emerald-50 rounded-xl">
                    <h4 className="font-bold text-emerald-800 mb-2 text-lg">Cancellation Policy</h4>
                    <p className="text-emerald-700 leading-relaxed">{trip.cancellationPolicy}</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <h4 className="font-bold text-blue-800 mb-2 text-lg">Safety Measures</h4>
                    <p className="text-blue-700 leading-relaxed">
                      First aid kit, experienced guides, and safety briefings included.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
