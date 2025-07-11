"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { Star, ChevronRight, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation, useReducedMotion } from "framer-motion"

export function EnhancedHeroSection() {
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const containerRef = useRef<HTMLDivElement>(null)
  const opacity = 1
  const contentControls = useAnimation()
  const [animationComplete, setAnimationComplete] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  // Optimized animation variants with reduced motion support
  const bubble1 = useMemo(
    () => ({
      initial: { y: 0, opacity: 0, rotateY: -10, scale: 0.9 },
      animate: prefersReducedMotion
        ? {
            opacity: 0.7,
            transition: { duration: 0.5 },
          }
        : {
            y: [-15, 0, -15],
            opacity: 0.7,
            rotateY: [-5, 5, -5],
            scale: [0.9, 1, 0.9],
            transition: {
              y: { repeat: Number.POSITIVE_INFINITY, duration: 4, ease: [0.25, 0.46, 0.45, 0.94] },
              rotateY: { repeat: Number.POSITIVE_INFINITY, duration: 8, ease: [0.25, 0.46, 0.45, 0.94] },
              scale: { repeat: Number.POSITIVE_INFINITY, duration: 6, ease: [0.25, 0.46, 0.45, 0.94] },
              opacity: { duration: 1 },
            },
          },
    }),
    [prefersReducedMotion],
  )

  const bubble2 = useMemo(
    () => ({
      initial: { y: 0, opacity: 0, rotateZ: 0, scale: 0.8 },
      animate: prefersReducedMotion
        ? {
            opacity: 0.5,
            transition: { duration: 0.5 },
          }
        : {
            y: [-10, 5, -10],
            opacity: 0.5,
            rotateZ: [-3, 3, -3],
            scale: [0.8, 0.9, 0.8],
            transition: {
              y: { repeat: Number.POSITIVE_INFINITY, duration: 4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 },
              rotateZ: { repeat: Number.POSITIVE_INFINITY, duration: 7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 },
              scale: { repeat: Number.POSITIVE_INFINITY, duration: 6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 },
              opacity: { duration: 1, delay: 0.2 },
            },
          },
    }),
    [prefersReducedMotion],
  )

  const bubble3 = useMemo(
    () => ({
      initial: { y: 0, opacity: 0, rotateX: 0, scale: 1 },
      animate: prefersReducedMotion
        ? {
            opacity: 0.6,
            transition: { duration: 0.5 },
          }
        : {
            y: [-5, 15, -5],
            opacity: 0.6,
            rotateX: [-8, 0, -8],
            scale: [1, 1.1, 1],
            transition: {
              y: { repeat: Number.POSITIVE_INFINITY, duration: 6, ease: [0.25, 0.46, 0.45, 0.94], delay: 1 },
              rotateX: { repeat: Number.POSITIVE_INFINITY, duration: 10, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 },
              scale: { repeat: Number.POSITIVE_INFINITY, duration: 8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 },
              opacity: { duration: 1, delay: 0.4 },
            },
          },
    }),
    [prefersReducedMotion],
  )

  // Sparkle effect for badge
  const sparkle = useMemo(
    () => ({
      initial: { scale: 0, opacity: 0, rotate: -30 },
      animate: prefersReducedMotion
        ? {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
          }
        : {
            scale: [0, 1.2, 0],
            opacity: [0, 1, 0],
            rotate: [-30, 30, -30],
            transition: {
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 4,
              duration: 2,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
    }),
    [prefersReducedMotion],
  )

  // Mount effect to prevent hydration mismatches
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Memoized static data for better performance
  const geometricShapes = useMemo(
    () => [
      { left: 15, top: 45, width: 25, height: 25 },
      { left: 30, top: 35, width: 35, height: 35 },
      { left: 45, top: 55, width: 20, height: 30 },
      { left: 60, top: 25, width: 40, height: 30 },
      { left: 75, top: 40, width: 30, height: 28 },
      { left: 90, top: 60, width: 32, height: 35 },
    ],
    [],
  )

  const starPositions = useMemo(
    () => [
      { left: 85, top: 15, width: 1.5, height: 2.5 },
      { left: 20, top: 25, width: 2.2, height: 1.8 },
      { left: 15, top: 45, width: 2.1, height: 2.3 },
      { left: 50, top: 35, width: 1.8, height: 1.5 },
      { left: 43, top: 20, width: 2.5, height: 2.8 },
      { left: 35, top: 55, width: 1.9, height: 2.1 },
      { left: 47, top: 15, width: 1.7, height: 2.6 },
      { left: 34, top: 35, width: 2.3, height: 1.9 },
      { left: 62, top: 25, width: 2.1, height: 2.2 },
      { left: 97, top: 45, width: 1.6, height: 2.4 },
    ],
    [],
  )

  const bubblePositions = useMemo(
    () => [
      { left: 5, top: 80, width: 8, height: 10 },
      { left: 25, top: 75, width: 12, height: 9 },
      { left: 45, top: 85, width: 10, height: 12 },
      { left: 65, top: 70, width: 14, height: 11 },
      { left: 85, top: 90, width: 9, height: 8 },
      { left: 15, top: 60, width: 11, height: 13 },
      { left: 35, top: 95, width: 7, height: 9 },
      { left: 55, top: 65, width: 13, height: 10 },
      { left: 75, top: 80, width: 8, height: 12 },
      { left: 95, top: 75, width: 10, height: 9 },
    ],
    [],
  )

  // Optimized mouse tracking with throttling
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!prefersReducedMotion) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        })
      }
    },
    [prefersReducedMotion],
  )

  useEffect(() => {
    let throttleTimer: NodeJS.Timeout
    const throttledMouseMove = (e: MouseEvent) => {
      if (throttleTimer) return
      throttleTimer = setTimeout(() => {
        handleMouseMove(e)
        throttleTimer = null as any
      }, 16) // ~60fps throttling
    }

    window.addEventListener("mousemove", throttledMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", throttledMouseMove)
      if (throttleTimer) clearTimeout(throttleTimer)
    }
  }, [handleMouseMove])

  // Optimized initial animations
  useEffect(() => {
    if (!isMounted) return

    contentControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    })

    // Set animation complete after initial animations
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [contentControls, isMounted])

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      className="relative min-h-screen pt-16 bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden"
    >
      {/* Adventure Background Image - Subtle and Non-intrusive */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      />

      {/* Mouse-following parallax gradient */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Floating geometric shapes with wave distortion - Hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none opacity-40 hidden sm:block">
        {isMounted &&
          geometricShapes.map((shape, i) => (
            <motion.div
              key={`shape-${i}`}
              className="absolute"
              style={{
                left: `${shape.left}%`,
                top: `${shape.top}%`,
                width: `${shape.width}px`,
                height: `${shape.height}px`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.sin(i * 0.5) * 30, 0],
                rotate: [0, 180, 360],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + (i % 3) * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: [0.33, 1, 0.68, 1],
                delay: i * 0.5,
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-lg blur-sm" />
            </motion.div>
          ))}
      </div>

      {/* Animated Stars - Fixed in background - Reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none opacity-60 hidden sm:block">
        {isMounted &&
          !prefersReducedMotion &&
          starPositions.map((star, i) => (
            <motion.div
              key={`star-${i}`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.3 + (i % 7) * 0.1, 0],
                scale: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2 + (i % 4) * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: (i % 5) * 1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="absolute rounded-full bg-white will-change-transform"
              style={{
                width: star.width + "px",
                height: star.height + "px",
                left: `${star.left}%`,
                top: `${star.top}%`,
              }}
            />
          ))}
      </div>

      {/* Optimized Flowing Wave Animation - Only on larger screens */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Simplified Wave 1 - Slower for performance */}
          {!prefersReducedMotion && (
            <motion.path
              d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z"
              fill="url(#waveGradient1)"
              animate={{
                d: [
                  "M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z",
                  "M0,450 Q300,250 600,450 T1200,450 L1200,800 L0,800 Z",
                  "M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z",
                  "M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z",
                ],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ willChange: "transform" }}
            />
          )}

          {/* Simplified Wave 2 - Reduced complexity */}
          {!prefersReducedMotion && (
            <motion.path
              d="M0,500 Q400,300 800,500 T1600,500 L1600,800 L0,800 Z"
              fill="url(#waveGradient2)"
              animate={{
                d: [
                  "M0,500 Q400,300 800,500 T1600,500 L1600,800 L0,800 Z",
                  "M0,480 Q400,280 800,480 T1600,480 L1600,800 L0,800 Z",
                  "M0,520 Q400,320 800,520 T1600,520 L1600,800 L0,800 Z",
                  "M0,500 Q400,300 800,500 T1600,500 L1600,800 L0,800 Z",
                ],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 2,
              }}
              style={{ willChange: "transform" }}
            />
          )}
        </svg>
      </div>

      {/* Mobile-optimized wave overlay */}
      <div className="absolute inset-0 pointer-events-none lg:hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,300 Q100,200 200,300 T400,300 L400,600 L0,600 Z"
            fill="url(#waveGradient1)"
            opacity="0.2"
            animate={{
              d: [
                "M0,300 Q100,200 200,300 T400,300 L400,600 L0,600 Z",
                "M0,320 Q100,220 200,320 T400,320 L400,600 L0,600 Z",
                "M0,280 Q100,180 200,280 T400,280 L400,600 L0,600 Z",
                "M0,300 Q100,200 200,300 T400,300 L400,600 L0,600 Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Animated Particles - Simplified on mobile */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {isMounted &&
          bubblePositions.map((bubble, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: 1,
                y: [0, -20 + i * 2, 0],
                transition: {
                  y: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3 + i * 0.2,
                    ease: [0.33, 1, 0.68, 1],
                  },
                  opacity: { duration: 1 },
                },
              }}
              className={`absolute rounded-full bg-white/10 backdrop-blur-sm`}
              style={{
                width: bubble.width + "px",
                height: bubble.height + "px",
                left: `${bubble.left}%`,
                top: `${bubble.top}%`,
              }}
            />
          ))}

        {/* Larger floating bubbles with gradient effect - Simplified on mobile */}
        <div className="hidden sm:block">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: 0.7,
              y: [0, -15, 0],
              transition: {
                y: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3.2,
                  ease: "easeInOut",
                },
                opacity: { duration: 1 },
              },
            }}
            className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: 0.5,
              y: [0, -12, 0],
              transition: {
                y: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4.5,
                  ease: "easeInOut",
                },
                opacity: { duration: 1 },
              },
            }}
            className="absolute top-40 right-20 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-bl from-blue-400/20 to-cyan-300/20 rounded-full blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: 0.6,
              y: [0, -20, 0],
              transition: {
                y: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                },
                opacity: { duration: 1 },
              },
            }}
            className="absolute bottom-40 left-20 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-full blur-xl"
          />
        </div>
        {/* Additional floating elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.4,
            scale: [0.8, 1.1, 0.8],
            y: [0, -15, 0],
            transition: {
              scale: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 8,
                ease: "easeInOut",
              },
              y: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 6,
                ease: "easeInOut",
              },
              opacity: { duration: 1.5 },
            },
          }}
          className="absolute top-1/3 right-1/4 w-36 h-36 md:w-48 md:h-48 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-xl hidden sm:block"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center py-20 sm:py-24 relative z-20">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="w-full text-center lg:text-left">
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-full mb-6 text-sm group hover:bg-white/15 transition-all duration-300"
            >
              <motion.span
                className="text-yellow-300 mr-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Star className="w-4 h-4 fill-current" />
              </motion.span>
              <span className="text-white font-medium">Karnataka's #1 Adventure Travel Company</span>
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight"
            >
              Your Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                Adventure Awaits
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-6"
            >
              In Karnataka's Mountains
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              From thrilling one-day treks to weekend getaways, we create unforgettable adventures for nature lovers and
              adventure seekers across Karnataka.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-md mx-auto lg:mx-0"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-lg"
              >
                <Link
                  href="#featured-trips"
                  className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-lg flex items-center justify-center transition-all duration-300 w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="mr-2 relative z-10">Explore Adventures</span>
                  <ChevronRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="group bg-transparent border-2 border-white/40 hover:border-white/80 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg flex items-center justify-center transition-all duration-300 backdrop-blur-sm w-full"
                >
                  <span>Call Now</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 border-t border-white/20 pt-6 max-w-md mx-auto lg:mx-0"
            >
              <motion.div
                className="text-center group"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex justify-center mb-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Calendar className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
                <h3 className="text-yellow-400 text-xl sm:text-2xl font-bold">2000+</h3>
                <p className="text-blue-100 text-xs sm:text-sm">Happy Travelers</p>
              </motion.div>
              <motion.div
                className="text-center group"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex justify-center mb-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                >
                  <Star className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
                <h3 className="text-yellow-400 text-2xl sm:text-3xl font-bold flex items-center justify-center">4.9</h3>
                <p className="text-blue-100 text-xs sm:text-sm">Average Rating</p>
              </motion.div>
              <motion.div
                className="text-center group"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex justify-center mb-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                >
                  <MapPin className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
                <h3 className="text-yellow-400 text-2xl sm:text-3xl font-bold">25+</h3>
                <p className="text-blue-100 text-xs sm:text-sm">Destinations</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full lg:mt-0"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] max-w-md mx-auto lg:max-w-none">
              {/* Main Hero Image */}
              <motion.div
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Adventure Trekking in Karnataka Mountains"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Optimized Pulsing Wave Rings - Desktop Only */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {!prefersReducedMotion &&
          [...Array(2)].map((_, i) => (
            <motion.div
              key={`wave-ring-${i}`}
              className="absolute border border-blue-400/15 rounded-full will-change-transform"
              style={{
                left: `${30 + i * 35}%`,
                top: `${35 + i * 20}%`,
                width: `${120 + i * 60}px`,
                height: `${120 + i * 60}px`,
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.1, 0.25, 0.1],
                rotate: [0, 120, 360],
              }}
              transition={{
                duration: 10 + i * 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: i * 2,
              }}
            />
          ))}
      </div>

      {/* Optimized Wavelength-style flowing dots - Reduced for performance */}
      <div className="absolute inset-0 pointer-events-none opacity-30 hidden md:block">
        {isMounted &&
          !prefersReducedMotion &&
          [...Array(8)].map((_, i) => (
            <motion.div
              key={`flow-dot-${i}`}
              className="absolute w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm will-change-transform"
              style={{
                left: `${(i * 12) % 100}%`,
                top: `${30 + Math.sin(i * 0.8) * 20}%`,
              }}
              animate={{
                x: [0, 150, 300, 450],
                y: [0, Math.sin(i * 0.4 + 1) * 30, Math.sin(i * 0.8 + 2) * -20, Math.sin(i * 1.2 + 3) * 15],
                opacity: [0, 0.5, 0.2, 0],
                scale: [0.5, 1, 0.8, 0.5],
              }}
              transition={{
                duration: 15 + (i % 3) * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: (i % 4) * 1.2,
              }}
            />
          ))}
      </div>
    </motion.section>
  )
}
