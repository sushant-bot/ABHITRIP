import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, MapPin, Calendar, Users, Phone, MessageCircle, Heart, Star } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Nandi Hills Sunrise",
      location: "Nandi Hills",
      category: "Sunrise Trek",
      description: "Breathtaking sunrise views from the historic Nandi Hills",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Savandurga Adventure",
      location: "Savandurga",
      category: "Rock Climbing",
      description: "Conquering one of Asia's largest monolith hills",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Skandagiri Night Trek",
      location: "Skandagiri",
      category: "Night Trek",
      description: "Thrilling night trek with mesmerizing sunrise views",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1669744665015-33f3a2f657b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Coorg – The Scotland of India",
      location: "Coorg",
      category: "Hill Station",
      description: "Misty hills and scenic viewpoints experience",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Hampi Heritage",
      location: "Hampi",
      category: "Heritage Tour",
      description: "Ancient ruins and UNESCO World Heritage Site exploration",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Gokarna Beach Bliss",
      location: "Gokarna",
      category: "Beach Tour",
      description: "Pristine beaches and spiritual temple visits",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Chikmagalur Hills",
      location: "Chikmagalur",
      category: "Hill Station",
      description: "Coffee capital with scenic Western Ghats views",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Kabini Wildlife",
      location: "Kabini",
      category: "Wildlife Safari",
      description: "Jungle safari and wildlife photography adventure",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Couple Trekking",
      location: "Forest Trails",
      category: "Couple Adventure",
      description: "Romantic trekking experiences through lush forests",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Mountain Sunrise",
      location: "Western Ghats",
      category: "Sunrise Trek",
      description: "Group watching spectacular sunrise from mountain peaks",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Mountain Expedition",
      location: "High Peaks",
      category: "Trekking",
      description: "Challenging mountain treks with stunning lake views",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Stream Crossing",
      location: "Forest Streams",
      category: "Adventure Trek",
      description: "Exciting stream crossings during forest adventures",
    },
  ]

  const categories = [
    "All",
    "Sunrise Trek",
    "Rock Climbing",
    "Night Trek",
    "Hill Station",
    "Heritage Tour",
    "Beach Tour",
    "Wildlife Safari",
    "Couple Adventure",
    "Trekking",
    "Adventure Trek",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white py-24 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Adventure gallery showcase"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

        {/* Moving Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-move-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-move-slow-reverse"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Camera className="h-6 w-6 text-pink-400" />
              <span className="text-pink-400 font-semibold tracking-wide uppercase text-sm">Adventure Gallery</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Memories That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
                Last Forever
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Explore our collection of breathtaking moments captured during our adventures across Karnataka and South
              India.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Camera className="h-5 w-5 text-yellow-400" />
                <span>500+ Photos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <MapPin className="h-5 w-5 text-green-400" />
                <span>50+ Destinations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Users className="h-5 w-5 text-blue-400" />
                <span>Happy Travelers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Heart className="h-5 w-5 text-red-400" />
                <span>Unforgettable Moments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-pink-50 hover:border-pink-300 hover:text-pink-700 transition-all duration-200 px-4 py-2 text-sm font-medium"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <Card
                key={image.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] bg-white"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm border-0 text-xs">
                      {image.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-200 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{image.location}</span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">{image.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-6 w-6 text-pink-600" />
              <span className="text-pink-600 font-semibold tracking-wide uppercase text-sm">Our Journey</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Adventures in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600">
                Numbers
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-pink-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Photos Captured</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Destinations</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
                <div className="text-gray-600">Happy Travelers</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600">Adventures</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
              <Calendar className="h-6 w-6 text-pink-400" />
              <span className="text-pink-400 font-semibold tracking-wide uppercase text-sm">Join Our Adventures</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Create Your Own{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
                Photo Story
              </span>
            </h2>
            <p className="text-xl text-pink-100 mb-8 leading-relaxed">
              Be part of our next adventure and create memories that will last a lifetime. Your story could be featured
              in our gallery!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+919740174089">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 text-white shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 h-14 px-10">
                  <Phone className="mr-3 h-6 w-6" />
                  Call +91 97401 74089
                </button>
              </a>
              <a href="https://wa.me/919740174089" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 border-2 border-white/30 text-white hover:bg-white hover:text-pink-600 backdrop-blur-sm bg-white/10 hover:shadow-2xl transform hover:scale-105 h-14 px-10">
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
