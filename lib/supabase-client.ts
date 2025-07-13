import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface DbTrip {
  id: string
  title: string
  slug: string
  description: string
  detailed_description: string
  location: string
  duration: string
  price: string
  original_price: string
  difficulty: 'Easy' | 'Moderate' | 'Hard'
  group_size: string
  rating: number
  reviews: number
  category: 'one-day' | 'two-day'
  image: string
  highlights: string[]
  itinerary: any[]
  pickup_points: string[]
  included: string[]
  excluded: string[]
  things_to_carry: string[]
  cancellation_policy: string
  is_featured: boolean
  created_at: string
  updated_at: string
}

export interface DbTestimonial {
  id: string
  name: string
  trip_title: string
  content: string
  rating: number
  created_at: string
}

export interface DbBooking {
  id: string
  trip_id: string
  user_name: string
  user_email: string
  user_phone: string
  travelers: number
  travel_date: string
  special_requests?: string
  total_amount: number
  booking_status: 'pending' | 'confirmed' | 'cancelled'
  created_at: string
  updated_at: string
}
