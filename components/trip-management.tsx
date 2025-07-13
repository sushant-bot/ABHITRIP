"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Save, X, MapPin, Clock, Users, Star, Upload, Image as ImageIcon } from "lucide-react"
import { supabase, type DbTrip } from "@/lib/supabase-client"
import { allTrips } from "@/lib/trips-data"
import Image from "next/image"

interface TripFormData {
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
  itinerary: {
    day?: number
    time?: string
    title?: string
    activity?: string
  }[]
}

const initialFormData: TripFormData = {
  title: '',
  description: '',
  detailed_description: '',
  location: '',
  duration: '',
  price: '',
  original_price: '',
  difficulty: 'Easy',
  group_size: '',
  rating: 5,
  reviews: 0,
  category: 'one-day',
  image: '',
  highlights: [''],
  pickup_points: [''],
  included: [''],
  excluded: [''],
  things_to_carry: [''],
  cancellation_policy: '',
  is_featured: false,
  itinerary: [{ day: 0, time: '', title: '', activity: '' }]
}

export function TripManagement() {
  const [trips, setTrips] = useState<DbTrip[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<TripFormData>(initialFormData)
  const [isLoading, setIsLoading] = useState(false)
  const [isDemoMode, setIsDemoMode] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')
  const [uploadingImage, setUploadingImage] = useState(false)

  useEffect(() => {
    // Check if we're in demo mode by testing the Supabase client
    const checkDemoMode = async () => {
      try {
        // Try a simple select operation to test if Supabase is working
        const testQuery = supabase?.from('trips')
        const testResult = testQuery ? await testQuery.select('id').limit(1) : null
        
        console.log('Supabase test result:', testResult)
        
        // If we get an empty array with no error, it's likely working
        // If we get an error or unexpected result, we're in demo mode
        const isDemo = !testResult || testResult.error !== null || Array.isArray(testResult.data) === false
        
        console.log('Demo mode detection:', {
          testResult,
          isDemoMode: isDemo,
          envVars: {
            url: process.env.NEXT_PUBLIC_SUPABASE_URL,
            hasKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
          }
        })
        
        setIsDemoMode(isDemo)
      } catch (error) {
        console.log('Supabase test failed, using demo mode:', error)
        setIsDemoMode(true)
      }
    }
    
    checkDemoMode()
    loadTrips()
  }, [])

  const loadTrips = async () => {
    try {
      console.log('Loading trips from database...')
      
      // Check if supabase client is available
      if (!supabase) {
        console.log('Supabase client not available, using fallback data')
        setTrips(allTrips.map(trip => ({
          ...trip,
          id: trip.slug || '',
          slug: trip.slug,
          detailed_description: trip.detailedDescription,
          group_size: trip.groupSize,
          original_price: trip.originalPrice || trip.price,
          pickup_points: trip.pickupPoints.map(p => 
            typeof p === 'string' ? p : `${p.location} - ${p.time}`
          ),
          things_to_carry: trip.thingsToCarry,
          cancellation_policy: trip.cancellationPolicy,
          itinerary: trip.itinerary || [{ day: 0, time: '', title: '', activity: '' }],
          is_featured: trip.is_featured || false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })) as DbTrip[])
        return
      }

      const tripsQuery = supabase?.from('trips')
      if (!tripsQuery) {
        throw new Error('Unable to create trips query')
      }

      const { data, error } = await tripsQuery
        .select('*')
        .order('created_at', { ascending: false })

      console.log('Database response:', { data, error, count: data?.length })

      if (error) {
        console.error('Error loading trips:', error)
        // Fallback to static data
        console.log('Using static fallback data')
        setTrips(allTrips.map(trip => ({
          ...trip,
          id: trip.slug || '',
          slug: trip.slug,
          detailed_description: trip.detailedDescription,
          group_size: trip.groupSize,
          original_price: trip.originalPrice || trip.price,
          pickup_points: trip.pickupPoints.map(p => 
            typeof p === 'string' ? p : `${p.location} - ${p.time}`
          ),
          things_to_carry: trip.thingsToCarry,
          cancellation_policy: trip.cancellationPolicy,
          itinerary: trip.itinerary || [{ day: 0, time: '', title: '', activity: '' }],
          is_featured: trip.is_featured || false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })) as DbTrip[])
        return
      }

      // Process database data to ensure compatibility
    interface ProcessedTrip extends DbTrip {
      itinerary: Array<{ day?: number; time?: string; title?: string; activity?: string; }>;
      highlights: string[];
      pickup_points: string[];
      included: string[];
      excluded: string[];
      things_to_carry: string[];
      is_featured: boolean;
    }

    const processedTrips: ProcessedTrip[] = (data || []).map((trip: DbTrip): ProcessedTrip => ({
      ...trip,
      itinerary: trip.itinerary || [{ day: 0, time: '', title: '', activity: '' }],
      highlights: Array.isArray(trip.highlights) ? trip.highlights : [],
      pickup_points: Array.isArray(trip.pickup_points) ? trip.pickup_points : [],
      included: Array.isArray(trip.included) ? trip.included : [],
      excluded: Array.isArray(trip.excluded) ? trip.excluded : [],
      things_to_carry: Array.isArray(trip.things_to_carry) ? trip.things_to_carry : [],
      is_featured: trip.is_featured || false
    }))

      console.log('Processed trips:', processedTrips.length, 'trips loaded')
      setTrips(processedTrips)
    } catch (error) {
      console.error('Error loading trips:', error)
      console.log('Using static fallback due to error')
      // Fallback to static data
      setTrips(allTrips.map(trip => ({
        ...trip,
        id: trip.slug || '',
        slug: trip.slug,
        detailed_description: trip.detailedDescription,
        group_size: trip.groupSize,
        original_price: trip.originalPrice || trip.price,
        pickup_points: trip.pickupPoints.map(p => 
          typeof p === 'string' ? p : `${p.location} - ${p.time}`
        ),
        things_to_carry: trip.thingsToCarry,
        cancellation_policy: trip.cancellationPolicy,
        itinerary: trip.itinerary || [{ day: 0, time: '', title: '', activity: '' }],
        is_featured: trip.is_featured || false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })) as DbTrip[])
    }
  }

  // Image upload functions
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file')
        return
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB')
        return
      }

      setImageFile(file)
      
      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const uploadImageToSupabase = async (file: File): Promise<string> => {
    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `trip-${Date.now()}.${fileExt}`
      const filePath = `trips/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('trip-images')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      const { data: { publicUrl } } = supabase.storage
        .from('trip-images')
        .getPublicUrl(filePath)

      return publicUrl
    } catch (error) {
      console.error('Error uploading image:', error)
      throw error
    }
  }

  const uploadImageToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'abhitrip_preset') // You'll need to create this in Cloudinary
    formData.append('folder', 'abhitrip/trips')

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/your-cloud-name/image/upload`, // Replace with your cloud name
        {
          method: 'POST',
          body: formData,
        }
      )

      if (!response.ok) {
        throw new Error('Failed to upload image')
      }

      const data = await response.json()
      return data.secure_url
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error)
      throw error
    }
  }

  const handleImageUpload = async (): Promise<string> => {
    if (!imageFile) return formData.image

    setUploadingImage(true)
    try {
      // Try Supabase first, fallback to Cloudinary
      let imageUrl = ''
      
      if (!isDemoMode) {
        try {
          imageUrl = await uploadImageToSupabase(imageFile)
        } catch (supabaseError) {
          console.log('Supabase upload failed, trying Cloudinary...', supabaseError)
          // Fallback to Cloudinary or other service
          // imageUrl = await uploadImageToCloudinary(imageFile)
          
          // For demo purposes, use a placeholder
          imageUrl = '/placeholder.svg'
        }
      } else {
        // Demo mode - use placeholder
        imageUrl = '/placeholder.svg'
      }

      return imageUrl
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Failed to upload image. Please try again.')
      return formData.image
    } finally {
      setUploadingImage(false)
    }
  }

  const clearImageSelection = () => {
    setImageFile(null)
    setImagePreview('')
    setFormData(prev => ({ ...prev, image: '' }))
  }

  const handleSave = async () => {
    setIsLoading(true)
    try {
      console.log('HandleSave called, isDemoMode:', isDemoMode)
      
      // In demo mode, show success message and return early
      if (isDemoMode) {
        console.log('Demo mode: Trip save operation simulated')
        alert('Demo mode: Trip saved successfully! (This is a simulation - no real data was saved)')
        setIsEditing(false)
        setEditingId(null)
        setFormData(initialFormData)
        clearImageSelection()
        return
      }

      // Upload image first if there's a new image
      let imageUrl = formData.image
      if (imageFile) {
        imageUrl = await handleImageUpload()
      }

      const tripData = {
        ...formData,
        image: imageUrl,
        highlights: formData.highlights.filter(h => h.trim()),
        pickup_points: formData.pickup_points.filter(p => p.trim()),
        included: formData.included.filter(i => i.trim()),
        excluded: formData.excluded.filter(e => e.trim()),
        things_to_carry: formData.things_to_carry.filter(t => t.trim()),
      }

      console.log('Attempting to save trip data:', tripData)

      let result
      if (editingId) {
        // Update existing trip
        console.log('Updating trip with ID:', editingId)
        const updateQuery = supabase?.from('trips')
        if (updateQuery) {
          result = await updateQuery
            .update({ ...tripData, updated_at: new Date().toISOString() })
            .eq('id', editingId)
        }
      } else {
        // Create new trip
        console.log('Creating new trip')
        const insertQuery = supabase?.from('trips')
        if (insertQuery) {
          result = await insertQuery
            .insert([{ ...tripData, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }])
        }
      }

      console.log('Supabase operation result:', result)

      if (result?.error) {
        console.error('Supabase error:', result.error)
        throw new Error(result.error.message || 'Database operation failed')
      }

      alert('Trip saved successfully!')
      setIsEditing(false)
      setEditingId(null)
      setFormData(initialFormData)
      clearImageSelection()
      loadTrips()
    } catch (error) {
      console.error('Error saving trip:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      alert(`Error saving trip: ${errorMessage}. Please try again.`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (trip: DbTrip) => {
    setFormData({
      title: trip.title,
      description: trip.description,
      detailed_description: trip.detailed_description,
      location: trip.location,
      duration: trip.duration,
      price: trip.price,
      original_price: trip.original_price || '',
      difficulty: trip.difficulty,
      group_size: trip.group_size,
      rating: trip.rating,
      reviews: trip.reviews,
      category: trip.category,
      image: trip.image,
      highlights: Array.isArray(trip.highlights) ? trip.highlights : [trip.highlights].filter(Boolean),
      pickup_points: Array.isArray(trip.pickup_points) 
        ? trip.pickup_points.map(p => 
            typeof p === 'string' ? p : `${(p as any).location} - ${(p as any).time}`
          ) 
        : [],
      included: Array.isArray(trip.included) ? trip.included : [],
      excluded: Array.isArray(trip.excluded) ? trip.excluded : [],
      things_to_carry: Array.isArray(trip.things_to_carry) ? trip.things_to_carry : [],
      cancellation_policy: trip.cancellation_policy,
      is_featured: trip.is_featured || false,
      itinerary: Array.isArray(trip.itinerary) ? trip.itinerary : [{ day: 1, time: '', title: '', activity: '' }]
    })
    setEditingId(trip.id)
    setIsEditing(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this trip?')) return

    try {
      // In demo mode, show simulation message
      if (isDemoMode) {
        console.log('Demo mode: Trip delete operation simulated')
        alert('Demo mode: Trip deleted successfully! (This is a simulation - no real data was deleted)')
        return
      }

      const deleteQuery = supabase?.from('trips')
      if (deleteQuery) {
        const { error } = await deleteQuery
          .delete()
          .eq('id', id)

        if (error) throw error
      }
      loadTrips()
    } catch (error) {
      console.error('Error deleting trip:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      alert(`Error deleting trip: ${errorMessage}. Please try again.`)
    }
  }

  const updateArrayField = (field: keyof Pick<TripFormData, 'highlights' | 'pickup_points' | 'included' | 'excluded' | 'things_to_carry'>, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }))
  }

  const addArrayField = (field: keyof Pick<TripFormData, 'highlights' | 'pickup_points' | 'included' | 'excluded' | 'things_to_carry'>) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }))
  }

  const removeArrayField = (field: keyof Pick<TripFormData, 'highlights' | 'pickup_points' | 'included' | 'excluded' | 'things_to_carry'>, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }))
  }

  // Itinerary management functions
  const addItineraryItem = () => {
    const currentDays = formData.itinerary.map(item => item.day || 1);
    const maxDay = formData.category === 'two-day' ? 2 : 1;
    
    // Start with Day 0 if no items exist, otherwise add next available day
    let newDay = 0;
    if (currentDays.length > 0) {
      // Find the next available day (0, 1, 2)
      for (let day = 0; day <= maxDay; day++) {
        if (!currentDays.includes(day)) {
          newDay = day;
          break;
        }
      }
      // If all days are used, default to the last day
      if (newDay === 0 && currentDays.includes(0)) {
        newDay = maxDay;
      }
    }
    
    setFormData(prev => ({
      ...prev,
      itinerary: [...prev.itinerary, { day: newDay, time: '', title: '', activity: '' }]
    }))
  }

  const updateItineraryItem = (index: number, field: keyof TripFormData['itinerary'][0], value: string | number) => {
    setFormData(prev => ({
      ...prev,
      itinerary: prev.itinerary.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }))
  }

  const removeItineraryItem = (index: number) => {
    setFormData(prev => ({
      ...prev,
      itinerary: prev.itinerary.filter((_, i) => i !== index)
    }))
  }

  // Migration function to fix existing trips without itinerary
  const migrateExistingTrips = async () => {
    try {
      console.log('Starting migration of existing trips...')
      
      // Get all trips that have NULL or empty itinerary
      const migrateQuery = supabase?.from('trips')
      if (!migrateQuery) {
        alert('Migration not available - Supabase client not initialized')
        return
      }
      
      const { data: tripsToMigrate, error: selectError } = await migrateQuery
        .select('*')
        .or('itinerary.is.null,itinerary.eq.[]')
      
      if (selectError) {
        console.error('Error fetching trips for migration:', selectError)
        alert(`Error fetching trips: ${selectError.message}`)
        return
      }

      if (!tripsToMigrate || tripsToMigrate.length === 0) {
        alert('No trips need migration. All trips already have itinerary data.')
        return
      }

      console.log(`Found ${tripsToMigrate.length} trips that need migration`)
      
      // Update each trip with default itinerary
      for (const trip of tripsToMigrate) {
        const defaultItinerary = [
          { day: 0, time: '11:00 PM', title: 'Departure', activity: 'Board transport from Bangalore' },
          { day: 1, time: '8:00 AM', title: 'Main Activity', activity: 'Start the main trip activities' }
        ]
        
        if (trip.category === 'two-day') {
          defaultItinerary.push(
            { day: 2, time: '10:00 AM', title: 'Return Journey', activity: 'Pack up and return to Bangalore' }
          )
        }

        const updateQuery = supabase?.from('trips')
        if (!updateQuery) {
          console.error('Cannot update trip - Supabase client not available')
          continue
        }
        
        const { error: updateError } = await updateQuery
          .update({ itinerary: defaultItinerary })
          .eq('id', trip.id)

        if (updateError) {
          console.error(`Error updating trip ${trip.title}:`, updateError)
        } else {
          console.log(`Successfully migrated trip: ${trip.title}`)
        }
      }

      alert(`Migration complete! Updated ${tripsToMigrate.length} trips with default itinerary data.`)
      loadTrips() // Refresh the trips list
      
    } catch (error) {
      console.error('Migration error:', error)
      alert('Migration failed. Check console for details.')
    }
  }

  // Test Supabase connection
  const testSupabaseConnection = async () => {
    try {
      console.log('Testing Supabase connection...')
      
      // First, try to list tables or get database info
      const testQuery = supabase?.from('trips')
      if (!testQuery) {
        console.error('Supabase client not available')
        alert('Supabase client not available')
        return
      }
      
      const { data, error } = await testQuery
        .select('*')
        .limit(1)
      
      console.log('Supabase connection test result:', { data, error })
      
      if (error) {
        console.error('Supabase connection error:', error)
        alert(`Supabase connection error: ${error.message}`)
        return false
      }
      
      console.log('Supabase connection successful!')
      return true
    } catch (error) {
      console.error('Supabase connection test failed:', error)
      return false
    }
  }

  return (
    <div className="space-y-6">
      {/* Demo Mode Banner */}
      {isDemoMode && (
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">!</span>
            </div>
            <div>
              <h3 className="font-semibold text-amber-800">Demo Mode Active</h3>
              <p className="text-amber-700 text-sm">
                Supabase is not configured. You're viewing sample data. 
                <br />Save operations will be simulated only. To enable real database functionality, set up your Supabase project and update the environment variables.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h2 className="text-xl sm:text-2xl font-bold">Trip Management</h2>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={testSupabaseConnection}
            variant="outline"
            size="sm"
            className="border-blue-500 text-blue-600 hover:bg-blue-50 text-xs sm:text-sm"
          >
            Test Connection
          </Button>
          <Button
            onClick={() => {
              console.log('Manually refreshing trips...')
              loadTrips()
            }}
            variant="outline"
            size="sm"
            className="border-green-500 text-green-600 hover:bg-green-50 text-xs sm:text-sm"
          >
            Refresh Data
          </Button>
          <Button
            onClick={migrateExistingTrips}
            variant="outline"
            size="sm"
            className="border-orange-500 text-orange-600 hover:bg-orange-50 text-xs sm:text-sm hidden sm:inline-flex"
          >
            Migrate Old Data
          </Button>
          <Button
            onClick={() => {
              setFormData(initialFormData)
              clearImageSelection()
              setEditingId(null)
              setIsEditing(true)
            }}
            size="sm"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-xs sm:text-sm"
          >
            <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Add New Trip
          </Button>
        </div>
      </div>

      {isEditing && (
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardTitle>{editingId ? 'Edit Trip' : 'Add New Trip'}</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 space-y-4 max-h-96 overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Trip title"
                />
              </div>
              <div>
                <Label htmlFor="category">Category *</Label>
                <Select value={formData.category} onValueChange={(value: 'one-day' | 'two-day') => setFormData(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="one-day">One Day Trip</SelectItem>
                    <SelectItem value="two-day">Two Day Trip</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="is_featured">Featured Trip</Label>
                <div className="flex items-center space-x-3 pt-2">
                  <Switch
                    id="is_featured"
                    checked={formData.is_featured}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_featured: checked }))}
                  />
                  <Label htmlFor="is_featured" className="text-sm text-gray-600">
                    {formData.is_featured ? 'Show on homepage' : 'Not featured'}
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Short Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Brief description of the trip"
                rows={2}
              />
            </div>

            <div>
              <Label htmlFor="detailed_description">Detailed Description *</Label>
              <Textarea
                id="detailed_description"
                value={formData.detailed_description}
                onChange={(e) => setFormData(prev => ({ ...prev, detailed_description: e.target.value }))}
                placeholder="Detailed description of the trip"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="Trip location"
                />
              </div>
              <div>
                <Label htmlFor="duration">Duration *</Label>
                <Input
                  id="duration"
                  value={formData.duration}
                  onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                  placeholder="e.g., 1 Day, 2 Days 1 Night"
                />
              </div>
              <div>
                <Label htmlFor="group_size">Group Size *</Label>
                <Input
                  id="group_size"
                  value={formData.group_size}
                  onChange={(e) => setFormData(prev => ({ ...prev, group_size: e.target.value }))}
                  placeholder="e.g., Max 25"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="price">Price *</Label>
                <Input
                  id="price"
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  placeholder="₹1,999"
                />
              </div>
              <div>
                <Label htmlFor="original_price">Original Price</Label>
                <Input
                  id="original_price"
                  value={formData.original_price}
                  onChange={(e) => setFormData(prev => ({ ...prev, original_price: e.target.value }))}
                  placeholder="₹2,499"
                />
              </div>
              <div>
                <Label htmlFor="difficulty">Difficulty *</Label>
                <Select value={formData.difficulty} onValueChange={(value: 'Easy' | 'Moderate' | 'Hard') => setFormData(prev => ({ ...prev, difficulty: value }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Moderate">Moderate</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="rating">Rating (1-5) *</Label>
                <Input
                  id="rating"
                  type="number"
                  min="1"
                  max="5"
                  step="0.1"
                  value={formData.rating}
                  onChange={(e) => setFormData(prev => ({ ...prev, rating: parseFloat(e.target.value) || 5 }))}
                />
              </div>
            </div>

            {/* Array Fields */}
            {(['highlights', 'pickup_points', 'included', 'excluded', 'things_to_carry'] as const).map((field) => (
              <div key={field}>
                <Label className="capitalize">{field.replace('_', ' ')} *</Label>
                {formData[field].map((item, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <Input
                      value={item}
                      onChange={(e) => updateArrayField(field, index, e.target.value)}
                      placeholder={`Add ${field.replace('_', ' ')}`}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeArrayField(field, index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayField(field)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add {field.replace('_', ' ')}
                </Button>
              </div>
            ))}

            {/* Itinerary Section */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-lg font-semibold">Day-wise Itinerary *</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addItineraryItem}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Itinerary Item
                </Button>
              </div>
              
              {formData.itinerary.map((item, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3 bg-gray-50">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-700">Itinerary Item {index + 1}</h4>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeItineraryItem(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor={`day-${index}`}>Day</Label>
                      <Select
                        value={item.day?.toString() || '1'}
                        onValueChange={(value) => updateItineraryItem(index, 'day', parseInt(value))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Day" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Day 0</SelectItem>
                          <SelectItem value="1">Day 1</SelectItem>
                          {formData.category === 'two-day' && <SelectItem value="2">Day 2</SelectItem>}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor={`time-${index}`}>Time</Label>
                      <Input
                        id={`time-${index}`}
                        value={item.time || ''}
                        onChange={(e) => updateItineraryItem(index, 'time', e.target.value)}
                        placeholder="e.g., 6:00 AM"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor={`title-${index}`}>Activity Title</Label>
                    <Input
                      id={`title-${index}`}
                      value={item.title || ''}
                      onChange={(e) => updateItineraryItem(index, 'title', e.target.value)}
                      placeholder="e.g., Breakfast and departure"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor={`activity-${index}`}>Activity Description</Label>
                    <Textarea
                      id={`activity-${index}`}
                      value={item.activity || ''}
                      onChange={(e) => updateItineraryItem(index, 'activity', e.target.value)}
                      placeholder="Describe the activity in detail..."
                      rows={3}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Label htmlFor="cancellation_policy">Cancellation Policy *</Label>
              <Textarea
                id="cancellation_policy"
                value={formData.cancellation_policy}
                onChange={(e) => setFormData(prev => ({ ...prev, cancellation_policy: e.target.value }))}
                placeholder="Cancellation policy details"
                rows={2}
              />
            </div>

            {/* Itinerary Section */}
            <div>
              <Label>Itinerary *</Label>
              {formData.itinerary.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Label htmlFor={`itinerary_title_${index}`}>Title</Label>
                      <Input
                        id={`itinerary_title_${index}`}
                        value={item.title}
                        onChange={(e) => updateItineraryItem(index, 'title', e.target.value)}
                        placeholder="Itinerary title"
                      />
                    </div>
                    <div className="w-20">
                      <Label htmlFor={`itinerary_day_${index}`}>Day</Label>
                      <Input
                        id={`itinerary_day_${index}`}
                        type="number"
                        min="1"
                        value={item.day}
                        onChange={(e) => updateItineraryItem(index, 'day', parseInt(e.target.value) || 1)}
                        placeholder="Day"
                        className="text-center"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div>
                      <Label htmlFor={`itinerary_time_${index}`}>Time</Label>
                      <Input
                        id={`itinerary_time_${index}`}
                        value={item.time}
                        onChange={(e) => updateItineraryItem(index, 'time', e.target.value)}
                        placeholder="e.g., 10:00 AM"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`itinerary_activity_${index}`}>Activity</Label>
                      <Input
                        id={`itinerary_activity_${index}`}
                        value={item.activity}
                        onChange={(e) => updateItineraryItem(index, 'activity', e.target.value)}
                        placeholder="Activity details"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeItineraryItem(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addItineraryItem}
                className="w-full sm:w-auto"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Itinerary Item
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-4">
              <Button
                onClick={handleSave}
                disabled={isLoading}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 flex-1 sm:flex-none"
              >
                <Save className="h-4 w-4 mr-2" />
                {isLoading ? 'Saving...' : 'Save Trip'}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setIsEditing(false)
                  setEditingId(null)
                  setFormData(initialFormData)
                  clearImageSelection()
                }}
                className="flex-1 sm:flex-none"
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
            </div>

            {/* Image Upload Section */}
            <div>
              <Label>Trip Image</Label>
              <div className="space-y-4">
                {/* Current Image Display */}
                {(formData.image || imagePreview) && (
                  <div className="relative w-full max-w-md">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border-2 border-gray-200">
                      <Image
                        src={imagePreview || formData.image || '/placeholder.svg'}
                        alt="Trip preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={clearImageSelection}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}

                {/* Image Upload Controls */}
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <input
                      type="file"
                      id="image-upload"
                      accept="image/*"
                      onChange={handleImageSelect}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById('image-upload')?.click()}
                      disabled={uploadingImage}
                      className="w-full sm:w-auto"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      {uploadingImage ? 'Uploading...' : 'Select Image'}
                    </Button>
                  </div>
                  
                  {/* Manual URL Input */}
                  <div className="flex-1">
                    <Input
                      placeholder="Or enter image URL"
                      value={formData.image}
                      onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Upload Instructions */}
                <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-start gap-2">
                    <ImageIcon className="h-4 w-4 mt-0.5 text-gray-400" />
                    <div>
                      <p className="font-medium">Image Guidelines:</p>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Recommended size: 800x600 pixels or higher</li>
                        <li>Supported formats: JPG, PNG, WebP</li>
                        <li>Maximum file size: 5MB</li>
                        <li>Use high-quality landscape photos for best results</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* This section will contain location, duration, etc. fields */}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {trips.map((trip) => (
          <Card key={trip.id} className="shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
            {/* Trip Image */}
            {trip.image && (
              <div className="relative h-48 w-full">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <Badge 
                  variant={trip.category === 'one-day' ? 'default' : 'secondary'} 
                  className="absolute top-3 left-3 bg-white/90 text-gray-800"
                >
                  {trip.category === 'one-day' ? 'One Day' : 'Two Days'}
                </Badge>
              </div>
            )}
            
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg line-clamp-2">{trip.title}</CardTitle>
                  {!trip.image && (
                    <Badge variant={trip.category === 'one-day' ? 'default' : 'secondary'} className="mt-2">
                      {trip.category === 'one-day' ? 'One Day' : 'Two Days'}
                    </Badge>
                  )}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm ml-1">{trip.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-600">{trip.reviews} reviews</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-1">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(trip)} className="w-full sm:w-auto">
                    <Edit className="h-4 w-4 mr-1 sm:mr-0" />
                    <span className="sm:hidden">Edit</span>
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(trip.id)} className="w-full sm:w-auto">
                    <Trash2 className="h-4 w-4 mr-1 sm:mr-0" />
                    <span className="sm:hidden">Delete</span>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{trip.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>{trip.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>{trip.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span>{trip.group_size}</span>
                </div>
              </div>
              
              {/* Pricing Section */}
              <div className="mt-4 pt-3 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">{trip.price}</span>
                    {trip.original_price && (
                      <span className="text-sm text-gray-500 line-through">{trip.original_price}</span>
                    )}
                  </div>
                  <Badge 
                    variant={
                      trip.difficulty === 'Easy' ? 'default' : 
                      trip.difficulty === 'Moderate' ? 'secondary' : 'destructive'
                    }
                    className="text-xs"
                  >
                    {trip.difficulty}
                  </Badge>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-green-600">{trip.price}</span>
                    {trip.original_price && (
                      <span className="text-sm text-gray-500 line-through ml-2">{trip.original_price}</span>
                    )}
                  </div>
                  <Badge variant={trip.difficulty === 'Easy' ? 'default' : trip.difficulty === 'Moderate' ? 'secondary' : 'destructive'}>
                    {trip.difficulty}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
