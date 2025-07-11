import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function FeaturedTrips() {
  const trips = [
    {
      id: 1,
      title: "Skandagiri Sunrise Trek",
      location: "Chikkaballapur",
      duration: "1 Day",
      groupSize: "15-20",
      rating: 4.8,
      price: "₹1,200",
      image: "/placeholder.svg?height=300&width=400",
      difficulty: "Moderate",
      highlights: ["Sunrise View", "Night Trek", "Ancient Fort"],
      category: "one-day",
    },
    {
      id: 2,
      title: "Kudremukh Trek",
      location: "Chikmagalur",
      duration: "2 Days",
      groupSize: "12-15",
      rating: 4.9,
      price: "₹2,800",
      image: "/placeholder.svg?height=300&width=400",
      difficulty: "Challenging",
      highlights: ["Peak Summit", "Grasslands", "Wildlife"],
      category: "two-day",
    },
    {
      id: 3,
      title: "Ooty Adventure",
      location: "Tamil Nadu",
      duration: "3 Days",
      groupSize: "20-25",
      rating: 4.7,
      price: "₹4,500",
      image: "/placeholder.svg?height=300&width=400",
      difficulty: "Easy",
      highlights: ["Hill Station", "Tea Gardens", "Toy Train"],
      category: "customized",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Adventures</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular trips and create memories that last a lifetime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <Card
              key={trip.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={trip.image || "/placeholder.svg"}
                  alt={trip.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{trip.difficulty}</Badge>
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="ml-1 text-sm font-semibold">{trip.rating}</span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold">{trip.title}</CardTitle>
                <div className="flex items-center text-gray-600 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{trip.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{trip.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{trip.groupSize}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {trip.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">{trip.price}</div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-x-4">
          <Link href="/one-day-trips">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
            >
              One Day Trips
            </Button>
          </Link>
          <Link href="/two-day-trips">
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
            >
              Two Day Trips
            </Button>
          </Link>
          <Link href="/customized-trips">
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
            >
              Customized Trips
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
