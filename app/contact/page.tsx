"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MessageCircle, Clock, Send, Calendar, Users, Star } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our travel experts",
      value: "+91 97401 74089",
      action: "tel:+919740174089",
      color: "text-green-600",
      bg: "bg-green-50",
      buttonText: "Call Now",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick responses on WhatsApp",
      value: "+91 97401 74089",
      action: "https://wa.me/919740174089",
      color: "text-green-600",
      bg: "bg-green-50",
      buttonText: "Chat on WhatsApp",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your detailed requirements",
      value: "abhitripkarnataka@gmail.com",
      action: "mailto:abhitripkarnataka@gmail.com",
      color: "text-blue-600",
      bg: "bg-blue-50",
      buttonText: "Send Email",
    },
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
  ]

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const groupSize = formData.get("group-size") as string
    const destination = formData.get("destination") as string
    const dates = formData.get("dates") as string
    const message = formData.get("message") as string

    const whatsappMessage = `Hello Abhi Trip! 👋

I would like to get more information about your travel packages.

👤 *My Details:*
• Name: ${name}
• Phone: ${phone}
• Email: ${email}
• Group Size: ${groupSize || "Not specified"}

🎯 *Travel Preferences:*
• Preferred Destination: ${destination || "Open to suggestions"}
• Preferred Dates: ${dates || "Flexible"}

💬 *Message:*
${message || "Please provide more information about your packages and availability."}

Looking forward to hearing from you!`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/919740174089?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-24 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Contact us for your next adventure"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

        {/* Moving Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-move-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-move-slow-reverse"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Phone className="h-6 w-6 text-blue-400" />
              <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">Get In Touch</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Let's Plan Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Next Adventure
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Ready to explore? Our travel experts are here to help you create unforgettable memories.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Clock className="h-5 w-5 text-green-400" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Users className="h-5 w-5 text-blue-400" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span>Trusted Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageCircle className="h-6 w-6 text-blue-600" />
              <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Contact Methods</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Multiple Ways to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Reach Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred way to connect with us. We're always ready to help plan your perfect adventure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`mx-auto w-16 h-16 ${contact.bg} rounded-xl flex items-center justify-center mb-4 shadow-md`}
                  >
                    <contact.icon className={`h-8 w-8 ${contact.color}`} />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{contact.title}</CardTitle>
                  <CardDescription className="text-gray-600">{contact.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-semibold text-gray-900">{contact.value}</p>
                  <a
                    href={contact.action}
                    target={contact.action.startsWith("http") ? "_blank" : undefined}
                    rel={contact.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-semibold transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transform hover:scale-105 h-12 px-4">
                      {contact.buttonText}
                    </button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Send className="h-6 w-6 text-purple-600" />
                <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm">Send Message</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Tell Us About Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Dream Trip
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Share your travel preferences and we'll create a customized itinerary just for you
              </p>
            </div>

            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="group-size" className="text-sm font-semibold text-gray-700">
                        Group Size
                      </Label>
                      <Input
                        id="group-size"
                        name="group-size"
                        type="number"
                        placeholder="Number of travelers"
                        className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        min="1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="destination" className="text-sm font-semibold text-gray-700">
                        Preferred Destination
                      </Label>
                      <Input
                        id="destination"
                        name="destination"
                        placeholder="Where would you like to go?"
                        className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dates" className="text-sm font-semibold text-gray-700">
                        Preferred Dates
                      </Label>
                      <Input
                        id="dates"
                        name="dates"
                        placeholder="When would you like to travel?"
                        className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                      Additional Requirements
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your travel preferences, special requirements, or any questions you have..."
                      className="min-h-[120px] border-gray-200 focus:border-purple-500 focus:ring-purple-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 h-14 px-8"
                  >
                    <Send className="mr-3 h-6 w-6" />
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
                <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Business Hours</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                When We're{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Available
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Our travel experts are available during these hours to help plan your perfect adventure
              </p>
            </div>

            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {businessHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-gray-900">{schedule.day}</span>
                      </div>
                      <span className="text-gray-600 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-800 text-sm">
                    <strong>Emergency Contact:</strong> For urgent travel assistance outside business hours, you can
                    reach us on WhatsApp at +91 97401 74089
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Adventure background"
            fill
            className="object-cover opacity-10"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Phone className="h-6 w-6 text-blue-400" />
              <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">Ready to Adventure</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Your Adventure{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Awaits</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't wait! Contact us today and let's start planning your next unforgettable journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+919740174089">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 h-14 px-10">
                  <Phone className="mr-3 h-6 w-6" />
                  Call +91 97401 74089
                </button>
              </a>
              <a href="https://wa.me/919740174089" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 border-2 border-white/30 text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm bg-white/10 hover:shadow-2xl transform hover:scale-105 h-14 px-10">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  WhatsApp Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
