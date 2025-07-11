import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"
import Image from "next/image"

interface CustomTrip {
  slug: string
  title: string
  description: string
  price: string
  originalPrice: string
  image: string
}

interface CustomTripCardProps {
  trip: CustomTrip
}

export function CustomTripCard({ trip }: CustomTripCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="relative">
        <Image
          src={trip.image || "/placeholder.svg"}
          alt={trip.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
          <Settings className="w-3 h-3" />
          <span className="text-xs font-medium">Customizable</span>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold">{trip.title}</CardTitle>
        <p className="text-gray-600 text-sm">{trip.description}</p>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-emerald-600">{trip.price}</div>
            <div className="text-sm text-gray-500 line-through">{trip.originalPrice}</div>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">Customize</Button>
        </div>
      </CardContent>
    </Card>
  )
}
