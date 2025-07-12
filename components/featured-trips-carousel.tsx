"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Star, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featuredTrips = [
  {
    id: 1,
    title: "Gokarna Beach Retreat",
    slug: "gokarna-murudeshwar-trip",
    location: "Gokarna, Karnataka",
    duration: "2 Days",
    groupSize: "8-12 people",
    rating: 4.8,
    price: "₹3,500",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "Pristine beaches, temple visits, and coastal camping experience",
    highlights: ["Beach camping", "Temple visits", "Sunset views", "Water sports"],
    category: "Beach",
  },
  {
    id: 2,
    title: "Coorg Trip – The Scotland of India",
    slug: "coorg-trip",
    location: "Coorg, Karnataka",
    duration: "2 Days",
    groupSize: "6-10 people",
    rating: 4.9,
    price: "₹4,200",
    image:
      "https://images.unsplash.com/photo-1669744665015-33f3a2f657b3?q=80&w=1342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Explore majestic viewpoints, waterfalls, and hill station beauty",
    highlights: ["Mandalpatti View Point", "Abbey Falls", "Raja's Seat", "Local cuisine"],
    category: "Hill Station",
  },
  {
    id: 3,
    title: "Wayanad Adventure",
    slug: "wayanad-adventure",
    location: "Wayanad, Kerala",
    duration: "2 Days",
    groupSize: "8-15 people",
    rating: 4.7,
    price: "₹3,800",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "Explore the lush forests and waterfalls of Wayanad",
    highlights: ["Edakkal Caves", "Banasura Dam", "Pookode Lake", "Soochipara Falls"],
    category: "Adventure",
  },
  {
    id: 4,
    title: "Chikmagalur Backpacking Trip",
    slug: "chikmagalur-trip",
    location: "Chikmagalur, Karnataka",
    duration: "2 Days",
    groupSize: "6-12 people",
    rating: 4.8,
    price: "₹4,000",
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Coffee estates, hill treks, and serene landscapes",
    highlights: ["Mullayanagiri Peak", "Hill station views", "Hebbe Falls", "Baba Budangiri"],
    category: "Adventure",
  },
  {
    id: 5,
    title: "Dandeli Wildlife Adventure",
    slug: "dandeli-adventure",
    location: "Dandeli, Karnataka",
    duration: "2 Days",
    groupSize: "6-10 people",
    rating: 4.9,
    price: "₹4,500",
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Exciting wildlife safari, river rafting, and jungle stay",
    highlights: ["White water rafting", "Wildlife safari", "Kayaking", "Jungle stay"],
    category: "Wildlife",
  },
  {
    id: 6,
    title: "Nandi Hills Sunrise Trek",
    slug: "nandi-hills-sunrise-trek",
    location: "Nandi Hills, Karnataka",
    duration: "1 Day",
    groupSize: "15-25 people",
    rating: 4.7,
    price: "₹799",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Witness breathtaking sunrise from historic Nandi Hills",
    highlights: ["Sunrise viewpoint", "Historical fort", "Photography spots", "Bird watching"],
    category: "Adventure",
  },
]

export function FeaturedTripsCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {featuredTrips.map((trip) => (
            <CarouselItem key={trip.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Link href={`/trips/${trip.slug}`}>
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 cursor-pointer bg-white h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={trip.image || "/placeholder.svg"}
                      alt={trip.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="eager"
                      priority={true}
                      unoptimized={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <Badge className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700 text-white">
                      {trip.category}
                    </Badge>
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{trip.rating}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 text-white">
                      <span className="text-lg font-bold">{trip.price}</span>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {trip.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-2">{trip.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{trip.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{trip.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{trip.groupSize}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span className="text-green-600 font-semibold">Available</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 pt-2">
                        {trip.highlights.slice(0, 2).map((highlight, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                        {trip.highlights.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{trip.highlights.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  )
}
