"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Star, Clock, Phone, MessageCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Trip {
  id: number
  title: string
  description: string
  image: string
  price: string
  originalPrice?: string
  duration: string
  difficulty: string
  groupSize: string
  rating: number
  reviews: number
  slug: string
  highlights: string[]
  location: string
}

interface TripCardProps {
  trip: Trip
}

export function TripCard({ trip }: TripCardProps) {
  const handleBookNow = () => {
    const message = `Hi! I'm interested in booking the ${trip.title} trip. Can you provide more details about availability and pricing?`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919740174089?text=${encodedMessage}`, "_blank")
  }

  const handleCallNow = () => {
    window.open("tel:+919740174089", "_self")
  }

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] bg-white">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={trip.image || "/placeholder.svg"}
          alt={trip.title}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="eager"
          priority={true}
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Price Badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-green-600">{trip.price}</span>
              {trip.originalPrice && <span className="text-sm text-gray-500 line-through">{trip.originalPrice}</span>}
            </div>
            <div className="text-xs text-gray-600">per person</div>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-sm font-semibold text-gray-800">{trip.rating}</span>
              <span className="text-xs text-gray-600">({trip.reviews})</span>
            </div>
          </div>
        </div>

        {/* Difficulty Badge */}
        <div className="absolute bottom-4 left-4">
          <Badge
            variant="secondary"
            className={`
              ${
                trip.difficulty === "Easy"
                  ? "bg-green-100 text-green-800"
                  : trip.difficulty === "Moderate"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
              }
              backdrop-blur-sm border-0
            `}
          >
            {trip.difficulty}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Title and Location */}
          <div>
            <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {trip.title}
            </CardTitle>
            <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
              <MapPin className="h-4 w-4" />
              <span>{trip.location}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{trip.description}</p>
          </div>

          {/* Trip Details */}
          <div className="grid grid-cols-2 gap-4 py-3 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-700">{trip.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-700">{trip.groupSize}</span>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Highlights:</h4>
            <div className="flex flex-wrap gap-1">
              {trip.highlights.slice(0, 3).map((highlight, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {highlight}
                </Badge>
              ))}
              {trip.highlights.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{trip.highlights.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
            {/* View Details Button */}
            <Link href={`/trips/${trip.slug}`}>
              <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transform hover:scale-105 h-10 px-4">
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>

            {/* Contact Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleCallNow}
                className="inline-flex items-center justify-center rounded-md text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transform hover:scale-105 h-9 px-3"
              >
                <Phone className="mr-1 h-4 w-4" />
                Call
              </button>
              <button
                onClick={handleBookNow}
                className="inline-flex items-center justify-center rounded-md text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white shadow-md hover:shadow-lg transform hover:scale-105 h-9 px-3"
              >
                <MessageCircle className="mr-1 h-4 w-4" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
