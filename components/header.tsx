"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Instagram, MessageCircle, Sparkles } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
          : "bg-gradient-to-r from-blue-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-md"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-move-slow"></div>
        <div className="absolute top-0 right-1/3 w-24 h-24 bg-indigo-400/10 rounded-full blur-xl animate-move-slow-reverse"></div>
      </div>

      <div className="relative container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <Image
                src="/abhi-trip-logo.png"
                alt="Abhi Trip"
                width={50}
                height={50}
                className="relative rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300"
              />
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                style={{ backgroundSize: "200% 100%" }}
              ></div>
            </div>
            <div className="group-hover:scale-105 transition-transform duration-300">
              <h1
                className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Abhi Trip
              </h1>
              <p className={`text-sm transition-colors duration-300 ${isScrolled ? "text-blue-600" : "text-blue-200"}`}>
                Explore. Experience. Escape.
              </p>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
              } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full`}
            >
              Home
            </Link>

            <div className="relative group">
              <button
                className={`flex items-center space-x-1 font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
                }`}
              >
                <span>Trips</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                <div className="py-3">
                  <Link
                    href="/one-day-trips"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 group/item"
                  >
                    <Sparkles className="w-4 h-4 mr-3 text-blue-500 group-hover/item:animate-pulse" />
                    <div>
                      <div className="font-medium">One Day Trips</div>
                      <div className="text-xs text-gray-500">Quick adventures</div>
                    </div>
                  </Link>
                  <Link
                    href="/two-day-trips"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 group/item"
                  >
                    <Sparkles className="w-4 h-4 mr-3 text-green-500 group-hover/item:animate-pulse" />
                    <div>
                      <div className="font-medium">Two Day Trips</div>
                      <div className="text-xs text-gray-500">Extended getaways</div>
                    </div>
                  </Link>
                  <Link
                    href="/customized-trips"
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 group/item"
                  >
                    <Sparkles className="w-4 h-4 mr-3 text-purple-500 group-hover/item:animate-pulse" />
                    <div>
                      <div className="font-medium">Customized Trips</div>
                      <div className="text-xs text-gray-500">Tailored experiences</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {["About", "Gallery", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
                } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Enhanced Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="https://www.instagram.com/abhitrip.in?igsh=MzRpdjR6Mzh4dDVo"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-pink-500/25"
            >
              <Instagram className="w-4 h-4 text-white" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
            </Link>
            <Link
              href="https://wa.me/919740174089"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-green-500/25"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-all duration-300 hover:scale-110 ${
              isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4 animate-slide-up">
            <div className="flex flex-col space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "One Day Trips", href: "/one-day-trips" },
                { name: "Two Day Trips", href: "/two-day-trips" },
                { name: "Customized Trips", href: "/customized-trips" },
                { name: "About", href: "/about" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-300 hover:scale-105 animate-slide-in-left ${
                    isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Social Links */}
              <div className="flex space-x-4 pt-4 border-t border-white/20">
                <Link
                  href="https://www.instagram.com/abhitrip.in?igsh=MzRpdjR6Mzh4dDVo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </Link>
                <Link
                  href="https://wa.me/919740174089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-110"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
