"use client"

import type React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Shield, CreditCard, Calendar, AlertTriangle, Users, Phone, Sparkles } from "lucide-react"
import { useRef, useEffect, useState } from "react"

// Animation component for floating elements
type FloatingElementProps = {
  className?: string
  delay?: number
  duration?: number
  children?: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl"
  blur?: "sm" | "md" | "lg"
  style?: React.CSSProperties
}

function FloatingElement({
  className,
  delay = 0,
  duration = 20,
  children,
  size = "md",
  blur = "md",
  style,
}: FloatingElementProps) {
  const sizes = {
    sm: "w-16 h-16",
    md: "w-32 h-32",
    lg: "w-64 h-64",
    xl: "w-96 h-96",
  }

  const blurs = {
    sm: "blur-xl",
    md: "blur-2xl",
    lg: "blur-3xl",
  }

  return (
    <div
      className={`absolute rounded-full ${sizes[size]} ${blurs[blur]} animate-floating ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default function TermsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      setMousePosition({ x, y })
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)

      return () => {
        heroElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-24 pt-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Dynamic wave pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="absolute bottom-0 left-0 w-full h-48 md:h-56 lg:h-64 transform scale-110"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                className="animate-wave-slow"
                fill="rgba(255, 255, 255, 0.3)"
                d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,149.3C672,139,768,85,864,74.7C960,64,1056,96,1152,122.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
              <path
                className="animate-wave-fast"
                fill="rgba(255, 255, 255, 0.15)"
                d="M0,160L40,170.7C80,181,160,203,240,197.3C320,192,400,160,480,165.3C560,171,640,213,720,218.7C800,224,880,192,960,165.3C1040,139,1120,117,1200,128C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              ></path>
            </svg>
          </div>

          {/* Floating elements with parallax effect */}
          <FloatingElement
            className="top-10 left-[10%] bg-blue-500/20"
            delay={0}
            duration={25}
            size="lg"
            style={{
              transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            }}
          />
          <FloatingElement
            className="top-[20%] right-[15%] bg-indigo-500/15"
            delay={2}
            duration={18}
            size="md"
            style={{
              transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
            }}
          />
          <FloatingElement
            className="bottom-[25%] left-[20%] bg-purple-500/20"
            delay={1}
            duration={22}
            size="md"
            style={{
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            }}
          />
          <FloatingElement
            className="bottom-20 right-[25%] bg-pink-500/15"
            delay={3}
            duration={20}
            size="lg"
            style={{
              transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
            }}
          />

          {/* Sparkle effects */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-ping-slow"></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-white rounded-full animate-ping-slow delay-1000"></div>
          <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-white rounded-full animate-ping-slow delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6 animate-float">
              <div className="relative">
                <FileText className="h-8 w-8 text-blue-400" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-300 rounded-full animate-ping-slow"></span>
              </div>
              <Badge
                variant="outline"
                className="border-blue-400 text-blue-400 bg-blue-400/20 backdrop-blur-sm shadow-glow transition-all duration-300 hover:bg-blue-400/30"
              >
                <Sparkles className="h-3 w-3 mr-1 animate-pulse" />
                Legal Document
              </Badge>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent animate-gradient">
              Terms & Conditions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm px-4 py-2 rounded-lg bg-blue-900/20">
              Please read these terms and conditions carefully before booking any adventure with Abhi Trip. Your booking
              constitutes acceptance of these terms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Quick Overview */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Quick Overview</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-900">Flexible Booking</p>
                  <p className="text-sm text-gray-600">Easy cancellation policy</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <CreditCard className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-900">Secure Payments</p>
                  <p className="text-sm text-gray-600">Multiple payment options</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-900">Group Friendly</p>
                  <p className="text-sm text-gray-600">Special group rates</p>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">1. Booking and Payment</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>All bookings must be confirmed with advance payment as specified for each trip.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Full payment is required at least 3 days before the trip departure date.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Payment can be made through bank transfer, UPI, or other specified payment methods.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Booking confirmation will be sent via email or WhatsApp after payment verification.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-red-50">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">2. Cancellation Policy</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <div className="grid gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="font-semibold text-green-800">7+ days before departure</p>
                    </div>
                    <p className="text-green-700">90% refund of total amount</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <p className="font-semibold text-yellow-800">3-6 days before departure</p>
                    </div>
                    <p className="text-yellow-700">50% refund of total amount</p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <p className="font-semibold text-red-800">Less than 3 days / No-show</p>
                    </div>
                    <p className="text-red-700">No refund</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800">
                    <strong>Note:</strong> Refunds will be processed within 7-10 working days after cancellation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-orange-50">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">3. Trip Modifications</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      Abhi Trip reserves the right to modify itineraries due to weather conditions, natural disasters,
                      or unforeseen circumstances.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Alternative arrangements will be made to ensure the best possible experience.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>No compensation will be provided for minor itinerary changes.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>In case of trip cancellation by Abhi Trip, full refund will be provided.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">4. Participant Responsibilities</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Participants must be physically and mentally fit for the chosen activity.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Valid ID proof is mandatory for all participants.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Participants must follow safety guidelines and instructions from guides.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Consumption of alcohol or drugs during trips is strictly prohibited.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Participants are responsible for their personal belongings.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-red-50">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">5. Safety and Liability</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Abhi Trip takes all reasonable precautions for participant safety.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Participants join trips at their own risk and responsibility.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Abhi Trip is not liable for accidents, injuries, or losses during trips.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Travel insurance is recommended for all participants.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Medical expenses, if any, will be borne by the participant.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-green-50">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">6. Inclusions and Exclusions</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Trip inclusions and exclusions are clearly mentioned in each trip description.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Personal expenses like shopping, additional food, etc., are not included unless specified.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Entry fees to monuments/parks are included unless mentioned otherwise.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Transportation from designated pickup points is included.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-yellow-50 relative">
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-amber-500/20 rounded-full blur-xl"></div>
              <CardHeader className="bg-gradient-to-r from-yellow-600 to-amber-700 text-white rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-yellow-500/20 w-full h-full"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <AlertTriangle className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold z-10 relative">7. Code of Conduct</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Respect for local culture, environment, and fellow travelers is mandatory.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Littering or damaging natural/cultural sites is strictly prohibited.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Abhi Trip reserves the right to exclude participants who violate conduct rules.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>No refund will be provided for exclusion due to misconduct.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-indigo-50">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">8. Contact Information</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <p className="mb-4">
                  For any queries or clarifications regarding these terms and conditions, please contact us:
                </p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Email:</strong> abhitripkarnataka@gmail.com
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Phone:</strong> +91 97401 74089, +91 9448482501
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Address:</strong> 3rd Floor, SAKET CALLIPOLIS, 301/302, Sarjapur - Marathahalli Rd,
                      Rainbow Drive, Doddakannelli, Bengaluru, Karnataka 560035
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-gray-600 text-sm">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <p>These terms and conditions are subject to change without prior notice.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
