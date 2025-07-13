import { createClient } from '@supabase/supabase-js'

// Database Types
export interface DbTrip {
  id: string
  slug: string
  title: string
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
  pickup_points: string[]
  included: string[]
  excluded: string[]
  things_to_carry: string[]
  cancellation_policy: string
  is_featured: boolean
  faqs: Array<{
    question: string
    answer: string
  }>
  itinerary: Array<{
    day?: number
    time?: string
    title?: string
    activity?: string
  }>
  created_at: string
  updated_at: string
}

export interface DbTestimonial {
  id: string
  name: string
  trip_title: string
  rating: number
  comment: string
  image: string
  created_at: string
}

export interface DbBooking {
  id: string
  trip_id: string
  name: string
  email: string
  phone: string
  pickup_location: string
  participants: number
  created_at: string
  updated_at: string
}

// Create Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null

export default supabase
