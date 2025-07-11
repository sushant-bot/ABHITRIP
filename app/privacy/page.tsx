"use client"

import type React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Shield, Lock, Eye, Database, Bell, UserCheck, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
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

export default function PrivacyPage() {
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
        className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white py-24 pt-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Dynamic pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="absolute top-0 left-0 w-full h-48 md:h-56 lg:h-64"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                className="animate-wave-slow"
                fill="rgba(255, 255, 255, 0.3)"
                d="M0,64L40,80C80,96,160,128,240,144C320,160,400,160,480,138.7C560,117,640,75,720,69.3C800,64,880,96,960,117.3C1040,139,1120,149,1200,154.7C1280,160,1360,160,1400,160L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
              ></path>
              <path
                className="animate-wave-fast"
                fill="rgba(255, 255, 255, 0.15)"
                d="M0,96L30,101.3C60,107,120,117,180,117.3C240,117,300,107,360,101.3C420,96,480,96,540,101.3C600,107,660,117,720,112C780,107,840,85,900,80C960,75,1020,85,1080,112C1140,139,1200,181,1260,192C1320,203,1380,181,1410,170.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
              ></path>
            </svg>
          </div>

          {/* Floating elements with parallax effect */}
          <FloatingElement
            className="top-10 left-[10%] bg-purple-500/20"
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
            className="bottom-[25%] left-[20%] bg-blue-500/20"
            delay={1}
            duration={22}
            size="md"
            style={{
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            }}
          />
          <FloatingElement
            className="bottom-20 right-[25%] bg-indigo-500/15"
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
                <Lock className="h-8 w-8 text-purple-300" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-300 rounded-full animate-ping-slow"></span>
              </div>
              <Badge
                variant="outline"
                className="border-purple-300 text-purple-300 bg-purple-400/20 backdrop-blur-sm shadow-glow transition-all duration-300 hover:bg-purple-400/30"
              >
                <Sparkles className="h-3 w-3 mr-1 animate-pulse" />
                Data Protection
              </Badge>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-indigo-200 bg-clip-text text-transparent animate-gradient">
              Privacy Policy
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm px-4 py-2 rounded-lg bg-purple-900/20">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Quick Overview */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Data Protection Overview</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <UserCheck className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-900">Control Your Data</p>
                  <p className="text-sm text-gray-600">Access and manage your data</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Database className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-900">Secure Storage</p>
                  <p className="text-sm text-gray-600">Protection by encryption</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Bell className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-900">Consent Based</p>
                  <p className="text-sm text-gray-600">Marketing is opt-in only</p>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <Database className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">1. Information We Collect</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Personal Information:</strong> We collect personal information that you provide to us,
                      including name, email address, phone number, and address.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Payment information for booking transactions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Emergency contact details</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Dietary restrictions and medical information (if provided)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Photos and videos taken during trips (with consent)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-indigo-50">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <Eye className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">2. How We Use Your Information</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <p className="mb-4">We use the collected information for the following purposes:</p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Processing and managing your trip bookings</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Communicating with you about your trips</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
