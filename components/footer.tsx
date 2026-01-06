import Link from "next/link"
import Image from "next/image"
import { Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-16 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path
              className="animate-wave-slow fill-current text-blue-500"
              d="M0,0L80,10C160,20,320,40,480,50C640,60,800,60,960,55C1120,50,1280,40,1360,35L1440,30L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
            <path
              className="animate-wave-fast fill-current text-green-500"
              d="M0,30L80,35C160,40,320,50,480,45C640,40,800,20,960,15C1120,10,1280,20,1360,25L1440,30L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl animate-move-slow"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute -bottom-48 right-1/4 w-96 h-96 bg-green-500/25 rounded-full blur-3xl animate-move-slow-reverse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute bottom-1/2 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-ping-slow opacity-60"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-ping-slow opacity-60"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Image src="/abhi-trip-logo.png" alt="Abhi Trip" width={40} height={40} className="rounded-full" />
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"
                  style={{ backgroundSize: "200% 100%" }}
                ></div>
              </div>
              <div>
                <div className="text-xl font-bold">Abhi Trip</div>
                <div className="text-sm text-gray-300">Explore. Experience. Escape.</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted travel partner for weekend escapes and thrilling adventures across Karnataka and South India.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/abhitrip.in?igsh=MzRpdjR6Mzh4dDVo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:shadow-lg hover:shadow-pink-500/25"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://wa.me/919740174089"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 bg-green-500 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/one-day-trips" className="text-gray-300 hover:text-white transition-colors">
                  One Day Trips
                </Link>
              </li>
              <li>
                <Link href="/two-day-trips" className="text-gray-300 hover:text-white transition-colors">
                  Two Day Trips
                </Link>
              </li>
              <li>
                <Link href="/customized-trips" className="text-gray-300 hover:text-white transition-colors">
                  Customized Trips
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-gray-400" />
                <div className="text-gray-300">
                  3rd Floor, SAKET CALLIPOLIS, 301/302,
                  <br />
                  Sarjapur - Marathahalli Rd, Rainbow Drive,
                  <br />
                  Doddakannelli, Bengaluru, Karnataka 560035
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <div className="text-gray-300">
                  <a href="tel:+919740174089" className="hover:text-white">
                    +91 97401 74089
                  </a>
                  ,{" "}
                  <a href="tel:+919448482501" className="hover:text-white">
                    9448482501
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:abhitripkarnataka@gmail.com" className="text-gray-300 hover:text-white">
                  abhitripkarnataka@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p className="flex items-center justify-center gap-2">
            <span>&copy; {new Date().getFullYear()} Abhi Trip. All rights reserved.</span>
            <span className="px-2">•</span>
           
          </p>
        </div>
      </div>
    </footer>
  )
}
