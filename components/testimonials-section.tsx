"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Bangalore",
    rating: 5,
    text: "Amazing experience with Abhi Trip! The Coorg trip was perfectly organized. Our guide was knowledgeable and the group size was just right. The viewpoints were breathtaking! Highly recommended!",
    image: "/placeholder.svg?height=80&width=80",
    trip: "Coorg Trip – The Scotland of India",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Bangalore",
    rating: 5,
    text: "The Hampi heritage tour exceeded all expectations. The historical insights provided by the guide were fascinating. Great value for money and excellent service throughout.",
    image: "/placeholder.svg?height=80&width=80",
    trip: "Hampi Heritage Adventure",
  },
  {
    id: 3,
    name: "Anita Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Loved the Nandi Hills sunrise trek! Early morning start was worth it for those breathtaking views. The team was professional and safety was their priority.",
    image: "/placeholder.svg?height=80&width=80",
    trip: "Nandi Hills Sunrise Trek",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Bangalore",
    rating: 4,
    text: "Great experience at Gokarna! The beach was pristine and the temple visits were enlightening. The accommodation was comfortable and the food was delicious.",
    image: "/placeholder.svg?height=80&width=80",
    trip: "Gokarna and Murudeshwar Trip",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Our Travelers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from fellow adventurers who've experienced the magic
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
            <CardContent className="p-12">
              <div className="text-center space-y-8">
                <Quote className="h-16 w-16 text-blue-200 mx-auto" />

                <div className="space-y-6">
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${
                          i < currentTestimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
                    "{currentTestimonial.text}"
                  </blockquote>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-blue-100"
                  />
                  <div className="text-left">
                    <div className="font-bold text-lg text-gray-900">{currentTestimonial.name}</div>
                    <div className="text-gray-600">{currentTestimonial.location}</div>
                    <div className="text-sm text-blue-600 font-medium">{currentTestimonial.trip}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 p-0 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 p-0 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
