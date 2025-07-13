import { createClient } from '@supabase/supabase-js'

// Fallback values for development/demo purposes
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-key'

// Mock query builder for demo mode
const createMockQueryBuilder = () => {
  const mockResult = { data: [], error: null }
  
  const builder = {
    select: (columns?: string) => builder,
    insert: (data: any) => {
      console.log('Demo mode: Simulating insert operation', data)
      return builder
    },
    update: (data: any) => {
      console.log('Demo mode: Simulating update operation', data)
      return builder
    },
    delete: () => {
      console.log('Demo mode: Simulating delete operation')
      return builder
    },
    eq: (column: string, value: any) => builder,
    order: (column: string, options?: any) => builder,
    limit: (count: number) => builder,
    single: () => builder,
    then: (callback: (result: { data: any[], error: null }) => void) => {
      setTimeout(() => callback(mockResult), 100)
      return Promise.resolve(mockResult)
    }
  }
  
  // Make it a thenable Promise-like object
  return Object.assign(Promise.resolve(mockResult), builder)
}

// Create a mock client if environment variables are not set
export const supabase = (() => {
  try {
    console.log('Supabase initialization:', {
      url: supabaseUrl,
      hasKey: !!supabaseAnonKey,
      urlValid: supabaseUrl !== 'https://demo.supabase.co',
      keyValid: supabaseAnonKey !== 'demo-key'
    })

    // Only create real client if we have valid environment variables
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && 
        process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your_supabase_project_url_here' &&
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY && 
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'your_supabase_anon_key_here') {
      
      console.log('Creating real Supabase client')
      return createClient(supabaseUrl, supabaseAnonKey)
    } else {
      console.log('Using mock Supabase client - environment variables not properly set')
      // Return a mock client for demo purposes
      return {
        from: (table: string) => createMockQueryBuilder(),
        auth: {
          signInWithPassword: () => Promise.resolve({ data: null, error: null }),
          signOut: () => Promise.resolve({ error: null }),
        },
        storage: {
          from: (bucket: string) => ({
            upload: (path: string, file: File) => Promise.resolve({ error: null }),
            getPublicUrl: (path: string) => ({ 
              data: { publicUrl: '/placeholder.svg' } 
            })
          })
        }
      }
    }
  } catch (error) {
    console.warn('Supabase client initialization failed, using mock client:', error)
    // Return a mock client as fallback
    return {
      from: (table: string) => createMockQueryBuilder(),
      auth: {
        signInWithPassword: () => Promise.resolve({ data: null, error: null }),
        signOut: () => Promise.resolve({ error: null }),
      },
      storage: {
        from: (bucket: string) => ({
          upload: (path: string, file: File) => Promise.resolve({ error: null }),
          getPublicUrl: (path: string) => ({ 
            data: { publicUrl: '/placeholder.svg' } 
          })
        })
      }
    }
  }
})()

// Types for our database tables
export interface DbTrip {
  id: string
  title: string
  description: string
  detailed_description: string
  location: string
  duration: string
  price: string
  original_price?: string
  difficulty: 'Easy' | 'Moderate' | 'Hard'
  group_size: string
  rating: number
  reviews: number
  category: 'one-day' | 'two-day'
  image: string
  highlights: string[]
  itinerary: Array<{
    day?: number
    time?: string
    title?: string
    activity?: string
    activities?: string[]
    meals?: string[]
  }>
  pickup_points: Array<string | { location: string; time: string }>
  included: string[]
  excluded: string[]
  things_to_carry: string[]
  faqs: Array<{ question: string; answer: string }>
  cancellation_policy: string
  is_featured: boolean
  created_at: string
  updated_at: string
}

export interface DbTestimonial {
  id: string
  name: string
  trip_title: string
  rating: number
  comment: string
  image?: string
  created_at: string
  updated_at: string
}
