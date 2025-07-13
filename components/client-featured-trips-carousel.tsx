"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Star, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Trip {
  id: number;
  title: string;
  slug: string;
  location: string;
  duration: string;
  groupSize: string;
  rating: number;
  price: string;
  image: string;
  description: string;
  highlights: string[];
  category: string;
}

interface ClientFeaturedTripsCarouselProps {
  trips: Trip[];
}

export function ClientFeaturedTripsCarousel({ trips }: ClientFeaturedTripsCarouselProps) {
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
          {trips.map((trip: Trip) => (
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
                        {trip.highlights.slice(0, 2).map((highlight: string, index: number) => (
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
