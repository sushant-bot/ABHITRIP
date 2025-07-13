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
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert("Link copied to clipboard!")
      } catch (err) {
        // Fallback for when clipboard API is not available
        console.log("Clipboard not available:", err)
        // Create a temporary input element to copy the text
        const textArea = document.createElement("textarea")
        textArea.value = window.location.href
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand("copy")
        document.body.removeChild(textArea)
        alert("Link copied to clipboard!")
      }
    }
  }

  const tabsToShow = ["itinerary", "inclusions"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[85vh] overflow-hidden">
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
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 animate-fadeInLeft">
          <Link href={trip.category === "one-day" ? "/one-day-trips" : "/two-day-trips"}>
            <Button
              variant="secondary"
              size="sm"
              className="glass text-white border-white/30 hover:bg-white/20 shadow-xl backdrop-blur-md px-3 py-2 md:px-6 md:py-3 text-sm md:text-base"
            >
              <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Back to Trips</span>
              <span className="sm:hidden">Back</span>
            </Button>
          </Link>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex gap-2 md:gap-3 animate-fadeInRight">
          <Button
            variant="secondary"
            size="sm"
            className="glass text-white border-white/30 hover:bg-white/20 shadow-xl backdrop-blur-md p-2 md:p-3"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-4 w-4 md:h-5 md:w-5 transition-colors ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="glass text-white border-white/30 hover:bg-white/20 shadow-xl backdrop-blur-md p-2 md:p-3"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>

        {/* Enhanced Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="container mx-auto">
            <div className={`max-w-5xl transition-all duration-1000 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 animate-fadeInUp stagger-1">
                <Badge variant="secondary" className="glass text-white border-white/30 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-lg font-medium">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
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
                  } backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-lg font-medium`}
                >
                  {trip.difficulty}
                </Badge>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fadeInUp stagger-2 leading-tight">
                {trip.title}
              </h1>

              <div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-2 sm:gap-3 md:gap-6 lg:gap-8 text-white/90 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-lg animate-fadeInUp stagger-3">
                <div className="flex items-center gap-2 md:gap-3 glass rounded-lg md:rounded-xl px-2 sm:px-3 md:px-4 py-2 md:py-3">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-blue-300 flex-shrink-0" />
                  <span className="font-medium truncate">{trip.location}</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 glass rounded-lg md:rounded-xl px-2 sm:px-3 md:px-4 py-2 md:py-3">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-emerald-300 flex-shrink-0" />
                  <span className="font-medium truncate">{trip.duration}</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 glass rounded-lg md:rounded-xl px-2 sm:px-3 md:px-4 py-2 md:py-3">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-purple-300 flex-shrink-0" />
                  <span className="font-medium truncate">{trip.groupSize} people</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 glass rounded-lg md:rounded-xl px-2 sm:px-3 md:px-4 py-2 md:py-3">
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 md:h-6 md:w-6 text-yellow-400 fill-current flex-shrink-0" />
                  <span className="font-medium truncate">
                    {trip.rating} ({trip.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6 animate-fadeInUp stagger-4">
                <div className="glass rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-6 py-3 md:py-4 border border-white/20">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div>
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">{trip.price}</div>
                      <div className="text-xs sm:text-sm text-white/70">per person</div>
                    </div>
                    {trip.originalPrice && (
                      <div className="text-white/60 line-through text-sm sm:text-lg md:text-xl">{trip.originalPrice}</div>
                    )}
                  </div>
                </div>
                <Button
                  onClick={handleBookNow}
                  size="sm"
                  className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-4 sm:px-6 md:px-8 py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold btn-animate w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mr-3 shadow-md">
                  <Mountain className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">Overview</h2>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mb-4 border border-green-100">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {trip.detailedDescription}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium">
                  <Mountain className="mr-1 h-3 w-3" />
                  {trip.difficulty}
                </span>
                <span className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium">
                  <Clock className="mr-1 h-3 w-3" />
                  {trip.duration}
                </span>
                <span className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-medium">
                  <Users className="mr-1 h-3 w-3" />
                  {trip.groupSize} people
                </span>
                <span className="inline-flex items-center bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-sm font-medium">
                  <Star className="mr-1 h-3 w-3" />
                  {trip.rating} ({trip.reviews} reviews)
                </span>
              </div>
            </section>

            {/* Highlights */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full mr-3 shadow-md">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">Highlights</h2>
              </div>
              <div className="mb-6 bg-green-50 p-4 rounded-lg border border-green-100 transform hover:scale-[1.01] transition-transform duration-300">
                <p className="text-green-800 font-medium flex items-center">
                  <Star className="h-5 w-5 mr-2 text-green-600" />
                  Key attractions and experiences that make this trip special.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trip.highlights.map((highlight, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 border border-emerald-100">
                    <div className="flex items-start">
                      <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <span className="font-medium text-emerald-800">{highlight}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mr-3 shadow-md">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-700 bg-clip-text text-transparent">Detailed Itinerary</h2>
              </div>
              <div className="mb-6 bg-indigo-50 p-4 rounded-lg border border-indigo-100 transform hover:scale-[1.01] transition-transform duration-300">
                <p className="text-indigo-800 font-medium flex items-center text-sm sm:text-base">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-indigo-600 flex-shrink-0" />
                  Your complete journey breakdown with activities, timings, and locations.
                </p>
              </div>
              
              <div className="space-y-8 sm:space-y-12">
                {(() => {
                  // Group itinerary items by day
                  const groupedByDay = trip.itinerary.reduce((acc, item, index) => {
                    const dayNumber = item.day ?? (Math.floor(index / Math.ceil(trip.itinerary.length / (trip.category === 'two-day' ? 2 : 1))) + 1);
                    if (!acc[dayNumber]) {
                      acc[dayNumber] = [];
                    }
                    acc[dayNumber].push({ ...item, originalIndex: index });
                    return acc;
                  }, {} as Record<number, any[]>);

                  return Object.entries(groupedByDay)
                    .sort(([a], [b]) => parseInt(a) - parseInt(b)) // Sort days numerically (0, 1, 2)
                    .map(([day, dayItems]) => (
                    <div key={day} className="relative">
                      {/* Day Header */}
                      <div className="flex items-center mb-6 sm:mb-8">
                        <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 shadow-lg mr-4 ring-4 ring-purple-100">
                          <span className="text-sm sm:text-lg font-bold text-white">
                            {day === '0' ? 'Day 0' : `Day ${day}`}
                          </span>
                        </div>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full"></div>
                      </div>
                      
                      {/* Day Activities */}
                      <div className="ml-4 sm:ml-8 space-y-4 sm:space-y-6 relative">
                        {/* Vertical line for activities within a day */}
                        <div className="absolute left-2 sm:left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-200 to-indigo-200"></div>
                        
                        {dayItems.map((item, itemIndex) => (
                          <div key={itemIndex} className="relative">
                            <div className="flex items-start">
                              <div className="z-10 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-md ring-2 ring-blue-100 flex-shrink-0">
                                <span className="text-xs font-bold text-white">{itemIndex + 1}</span>
                              </div>
                              <div className="ml-3 sm:ml-4 flex-1">
                                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 transform hover:translate-y-[-2px]">
                                  <div className="flex flex-col gap-2 sm:gap-3">
                                    {item.time && (
                                      <div className="flex items-center">
                                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-indigo-600 mr-2 flex-shrink-0" />
                                        <span className="text-indigo-700 font-semibold bg-indigo-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                                          {item.time}
                                        </span>
                                      </div>
                                    )}
                                    {item.title && (
                                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{item.title}</h4>
                                    )}
                                    {item.activity && (
                                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.activity}</p>
                                    )}
                                    {item.activities && item.activities.length > 0 && (
                                      <div className="mt-2">
                                        <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2">Activities:</p>
                                        <ul className="space-y-1 sm:space-y-2">
                                          {item.activities.map((activity: string, actIndex: number) => (
                                            <li key={actIndex} className="text-gray-700 flex items-start text-sm">
                                              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-400 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                                              {activity}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                    {item.meals && item.meals.length > 0 && (
                                      <div className="mt-2 p-2 sm:p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                                        <span className="text-xs sm:text-sm font-medium text-emerald-700 flex items-center">
                                          🍽️ Meals Included: 
                                        </span>
                                        <span className="text-gray-700 text-sm ml-1">{item.meals.join(", ")}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </section>
            
            {/* Pick Up Points */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-600 rounded-full mr-3 shadow-md">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-700 bg-clip-text text-transparent">Pick Up Points</h2>
              </div>
              
              <div className="mb-6 bg-orange-50 p-4 rounded-lg border border-orange-100 transform hover:scale-[1.01] transition-transform duration-300">
                <p className="text-orange-800 font-medium flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-orange-600" />
                  Multiple pickup locations in Bangalore for your convenience. Same locations serve as drop points on return.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trip.pickupPoints.map((point, index) => {
                  const location = typeof point === 'string' 
                    ? (point as string).split(' - ')[0] 
                    : (point as { location: string; time: string }).location;
                  const time = typeof point === 'string' 
                    ? (point as string).split(' - ')[1] 
                    : (point as { location: string; time: string }).time;
                  
                  return (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200 transform hover:translate-y-[-5px] transition-transform duration-300">
                      <div className="flex items-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 shadow-md">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-gray-800 mb-1">{location}</h3>
                          {time && (
                            <p className="text-orange-600 flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {time}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            
            {/* Things to Carry */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-teal-500 to-green-600 rounded-full mr-3 shadow-md">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-green-700 bg-clip-text text-transparent">Things to Carry</h2>
              </div>
              
              <div className="mb-6 bg-teal-50 p-4 rounded-lg border border-teal-100 transform hover:scale-[1.01] transition-transform duration-300">
                <p className="text-teal-800 font-medium flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-teal-600" />
                  Essential items to pack for a comfortable and enjoyable journey.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {trip.thingsToCarry.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px] border border-green-100">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mr-3 shadow-md">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">Inclusions & Exclusions</h2>
              </div>
              
              <div className="mb-6 bg-emerald-50 p-4 rounded-lg border border-emerald-100 transform hover:scale-[1.01] transition-transform duration-300">
                <p className="text-emerald-800 font-medium flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-emerald-600" />
                  What's included in your package and what you'll need to arrange separately.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Inclusions */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-semibold text-green-800 mb-4 flex items-center text-lg">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    Inclusions
                  </h3>
                  <ul className="space-y-3 pl-11">
                    {trip.included.map((item, index) => (
                      <li key={index} className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Exclusions */}
                <div className="bg-gradient-to-br from-rose-50 via-red-50 to-pink-50 rounded-lg p-6 border border-red-200 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-200/20 to-pink-200/30 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-200/30 to-pink-200/20 rounded-full blur-xl -ml-6 -mb-6 pointer-events-none"></div>
                  
                  <h3 className="font-bold text-red-800 mb-5 flex items-center text-lg relative z-10">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-600 rounded-full mr-3 flex-shrink-0 shadow-md ring-2 ring-red-200">
                      <X className="h-4 w-4 text-white" />
                    </div>
                    Exclusions
                  </h3>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-red-100 relative z-10">
                    <p className="text-gray-700 text-sm italic">The following items are not included in your trip package and may require additional payment or separate arrangements.</p>
                  </div>
                  
                  <ul className="space-y-3 pl-12 relative z-10">
                    {trip.excluded.map((item, index) => (
                      <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border border-red-200 border-l-red-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                        <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Cancellation Policy */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mr-3 shadow-md">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">Cancellation Policy</h2>
              </div>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-100">
                <p className="text-amber-800 font-medium flex items-center mb-3">
                  <Shield className="h-5 w-5 mr-2 text-amber-600" />
                  Important cancellation terms and conditions.
                </p>
                <p className="text-gray-700 leading-relaxed">{trip.cancellationPolicy}</p>
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Pricing Card */}
              <Card className="shadow-lg">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-green-600">{trip.price}</span>
                    {trip.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{trip.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">per person</p>
                  {trip.originalPrice && (
                    <div className="mt-2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full px-3 py-1 text-xs font-bold text-white">
                        SAVE {Math.round((1 - parseInt(trip.price.replace('₹', '').replace(',', '')) / parseInt(trip.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                      </span>
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="mb-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-medium text-yellow-800 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" /> Quick WhatsApp Booking
                    </h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      Book instantly through WhatsApp for faster confirmations and immediate responses!
                    </p>
                  </div>
                  
                  <ClientBookingForm tripTitle={trip.title} tripPrice={trip.price} />

                  {/* Contact Options */}
                  <div className="mt-6 pt-6 border-t space-y-3">
                    <h4 className="font-medium text-center">Need Help?</h4>
                    <div className="flex gap-2">
                      <Button
                        onClick={handleCallNow}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Call
                      </Button>
                      <Button
                        onClick={handleBookNow}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trip Details Card */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Trip Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-gray-500 mr-2" />
                    <span>{trip.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-gray-500 mr-2" />
                    <span>{trip.groupSize} people per group</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                    <span>{trip.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    <span>{trip.rating}/5 ({trip.reviews} reviews)</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Sample Testimonial */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-white p-0.5 shadow-md mr-3">
                    <div className="h-full w-full rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                      {trip.title.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Verified Traveler</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"Amazing experience with Abhi Trip! The {trip.title.toLowerCase()} was perfectly organized with great guides and beautiful locations. Highly recommended for anyone looking for adventure and memories that last a lifetime."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
