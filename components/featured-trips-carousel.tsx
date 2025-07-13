import { getAllTripsFromDB } from "@/lib/trips-data"
import { ClientFeaturedTripsCarousel } from "./client-featured-trips-carousel"

// Default featured trips for fallback
const defaultFeaturedTrips = [
  {
    id: 1,
    title: "Gokarna Beach Retreat",
    slug: "gokarna-murudeshwar-trip",
    location: "Gokarna, Karnataka",
    duration: "2 Days",
    groupSize: "8-12 people",
    rating: 4.8,
    price: "₹3,500",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    description: "Pristine beaches, temple visits, and coastal camping experience",
    highlights: ["Beach camping", "Temple visits", "Sunset views", "Water sports"],
    category: "Beach",
  },
  {
    id: 2,
    title: "Coorg Trip – The Scotland of India",
    slug: "coorg-trip",
    location: "Coorg, Karnataka",
    duration: "2 Days",
    groupSize: "6-10 people",
    rating: 4.9,
    price: "₹4,200",
    image:
      "https://images.unsplash.com/photo-1669744665015-33f3a2f657b3?q=80&w=1342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Explore majestic viewpoints, waterfalls, and hill station beauty",
    highlights: ["Mandalpatti View Point", "Abbey Falls", "Raja's Seat", "Local cuisine"],
    category: "Hill Station",
  },
  {
    id: 3,
    title: "Wayanad Adventure",
    slug: "wayanad-adventure",
    location: "Wayanad, Kerala",
    duration: "2 Days",
    groupSize: "8-15 people",
    rating: 4.7,
    price: "₹3,800",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "Explore the lush forests and waterfalls of Wayanad",
    highlights: ["Edakkal Caves", "Banasura Dam", "Pookode Lake", "Soochipara Falls"],
    category: "Adventure",
  },
  {
    id: 4,
    title: "Chikmagalur Backpacking Trip",
    slug: "chikmagalur-trip",
    location: "Chikmagalur, Karnataka",
    duration: "2 Days",
    groupSize: "6-12 people",
    rating: 4.8,
    price: "₹4,000",
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Coffee estates, hill treks, and serene landscapes",
    highlights: ["Mullayanagiri Peak", "Hill station views", "Hebbe Falls", "Baba Budangiri"],
    category: "Adventure",
  },
  {
    id: 5,
    title: "Dandeli Wildlife Adventure",
    slug: "dandeli-adventure",
    location: "Dandeli, Karnataka",
    duration: "2 Days",
    groupSize: "6-10 people",
    rating: 4.9,
    price: "₹4,500",
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Exciting wildlife safari, river rafting, and jungle stay",
    highlights: ["White water rafting", "Wildlife safari", "Kayaking", "Jungle stay"],
    category: "Wildlife",
  },
  {
    id: 6,
    title: "Nandi Hills Sunrise Trek",
    slug: "nandi-hills-sunrise-trek",
    location: "Nandi Hills, Karnataka",
    duration: "1 Day",
    groupSize: "15-25 people",
    rating: 4.7,
    price: "₹799",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Witness breathtaking sunrise from historic Nandi Hills",
    highlights: ["Sunrise viewpoint", "Historical fort", "Photography spots", "Bird watching"],
    category: "Adventure",
  },
]

export async function FeaturedTripsCarousel() {
  // Load trips from database, fallback to default
  let trips;
  try {
    const allTrips = await getAllTripsFromDB();
    // Get only featured trips from database, fallback to default
    const featuredTrips = allTrips.filter(trip => trip.is_featured === true);
    trips = featuredTrips.length > 0 ? featuredTrips.slice(0, 6) : defaultFeaturedTrips.slice(0, 6);
  } catch (error) {
    console.error('Error loading trips:', error);
    trips = defaultFeaturedTrips.slice(0, 6);
  }

  return <ClientFeaturedTripsCarousel trips={trips} />;
}
