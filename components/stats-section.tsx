"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Star, Calendar } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 500,
    label: "Happy Travelers",
    suffix: "+",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: MapPin,
    value: 50,
    label: "Destinations",
    suffix: "+",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Star,
    value: 4.8,
    label: "Average Rating",
    suffix: "/5",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    icon: Calendar,
    value: 100,
    label: "Trips Completed",
    suffix: "+",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
]

export function StatsSection() {
  const [counters, setCounters] = useState(stats.map(() => 0))
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById("stats-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000
        const steps = 60
        const increment = stat.value / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
            clearInterval(timer)
          }
          setCounters((prev) => {
            const newCounters = [...prev]
            newCounters[index] = current
            return newCounters
          })
        }, duration / steps)
      })
    }
  }, [isVisible])

  return (
    <section id="stats-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Journey in Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every number tells a story of adventure, satisfaction, and unforgettable memories
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white"
            >
              <CardContent className="p-8">
                <div
                  className={`mx-auto w-20 h-20 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
                <div className="space-y-2">
                  <div className={`text-4xl font-bold ${stat.color}`}>
                    {stat.value === 4.8 ? counters[index].toFixed(1) : Math.floor(counters[index])}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
