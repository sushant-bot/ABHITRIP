"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, Star, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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

interface OneDayTripCardProps {
  trip: Trip
}

export function OneDayTripCard({ trip }: OneDayTripCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={trip.image || "/placeholder.svg"}
          alt={trip.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge
            variant="secondary"
            className={`${trip.difficulty === "Easy" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}
          >
            {trip.difficulty}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-black/70 text-white border-0">
            {trip.duration}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center text-white text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="mr-1">{trip.rating}</span>
            <span className="opacity-75">({trip.reviews} reviews)</span>
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg md:text-xl line-clamp-2 group-hover:text-blue-600 transition-colors">
          {trip.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm line-clamp-3">{trip.description}</p>

        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{trip.location}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Users className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{trip.groupSize} people</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{trip.duration}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Highlights:</h4>
            <div className="space-y-1">
              {trip.highlights.slice(0, 2).map((highlight, index) => (
                <div key={index} className="flex items-start text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                  <span className="line-clamp-1">{highlight}</span>
                </div>
              ))}
              {trip.highlights.length > 2 && (
                <div className="text-xs text-gray-500">+{trip.highlights.length - 2} more highlights</div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-600">{trip.price}</span>
              {trip.originalPrice && <span className="text-sm text-gray-500 line-through">{trip.originalPrice}</span>}
            </div>
            <Link href={`/trips/${trip.slug}`}>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                View Details
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
