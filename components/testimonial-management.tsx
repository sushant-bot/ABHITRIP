"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Save, X, Star, User } from "lucide-react"
import { supabase, type DbTestimonial } from "@/lib/supabase"

interface TestimonialFormData {
  name: string
  trip_title: string
  rating: number
  comment: string
  image: string
}

const initialFormData: TestimonialFormData = {
  name: '',
  trip_title: '',
  rating: 5,
  comment: '',
  image: ''
}

export function TestimonialManagement() {
  const [testimonials, setTestimonials] = useState<DbTestimonial[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<TestimonialFormData>(initialFormData)
  const [isLoading, setIsLoading] = useState(false)
  const [isDemoMode, setIsDemoMode] = useState(false)

  useEffect(() => {
    // Check if we're in demo mode
    const isDemo = !process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL === 'your_supabase_project_url_here'
    setIsDemoMode(isDemo)
    loadTestimonials()
  }, [])

  const loadTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error loading testimonials:', error)
        // Fallback to sample data
        setTestimonials([
          {
            id: '1',
            name: 'Rajesh Kumar',
            trip_title: 'Nandi Hills Adventure',
            rating: 5,
            comment: 'Amazing experience! The sunrise view was breathtaking and the trek was well organized.',
            image: '/placeholder-user.jpg',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            id: '2',
            name: 'Priya Sharma',
            trip_title: 'Skandagiri Night Trek',
            rating: 4,
            comment: 'Great adventure under the stars. Well planned trip with experienced guides.',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ])
        return
      }

      setTestimonials(data || [])
    } catch (error) {
      console.error('Error loading testimonials:', error)
    }
  }

  const handleSave = async () => {
    setIsLoading(true)
    try {
      if (editingId) {
        // Update existing testimonial
        const { error } = await supabase
          .from('testimonials')
          .update({ ...formData, updated_at: new Date().toISOString() })
          .eq('id', editingId)

        if (error) throw error
      } else {
        // Create new testimonial
        const { error } = await supabase
          .from('testimonials')
          .insert([{ ...formData, created_at: new Date().toISOString(), updated_at: new Date().toISOString() }])

        if (error) throw error
      }

      setIsEditing(false)
      setEditingId(null)
      setFormData(initialFormData)
      loadTestimonials()
    } catch (error) {
      console.error('Error saving testimonial:', error)
      alert('Error saving testimonial. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (testimonial: DbTestimonial) => {
    setFormData({
      name: testimonial.name,
      trip_title: testimonial.trip_title,
      rating: testimonial.rating,
      comment: testimonial.comment,
      image: testimonial.image || ''
    })
    setEditingId(testimonial.id)
    setIsEditing(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return

    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id)

      if (error) throw error
      loadTestimonials()
    } catch (error) {
      console.error('Error deleting testimonial:', error)
      alert('Error deleting testimonial. Please try again.')
    }
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ))
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
                <br />To enable full functionality, set up your Supabase project and update the environment variables.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Testimonial Management</h2>
        <Button
          onClick={() => {
            setFormData(initialFormData)
            setEditingId(null)
            setIsEditing(true)
          }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Testimonial
        </Button>
      </div>

      {isEditing && (
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardTitle>{editingId ? 'Edit Testimonial' : 'Add New Testimonial'}</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Customer Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Customer name"
                />
              </div>
              <div>
                <Label htmlFor="trip_title">Trip Title *</Label>
                <Input
                  id="trip_title"
                  value={formData.trip_title}
                  onChange={(e) => setFormData(prev => ({ ...prev, trip_title: e.target.value }))}
                  placeholder="Trip they attended"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="rating">Rating (1-5) *</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="rating"
                    type="number"
                    min="1"
                    max="5"
                    value={formData.rating}
                    onChange={(e) => setFormData(prev => ({ ...prev, rating: parseInt(e.target.value) || 5 }))}
                    className="w-20"
                  />
                  <div className="flex">
                    {renderStars(formData.rating)}
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="image">Customer Image URL</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="comment">Testimonial Comment *</Label>
              <Textarea
                id="comment"
                value={formData.comment}
                onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                placeholder="Customer feedback and experience"
                rows={4}
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button
                onClick={handleSave}
                disabled={isLoading}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <Save className="h-4 w-4 mr-2" />
                {isLoading ? 'Saving...' : 'Save Testimonial'}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setIsEditing(false)
                  setEditingId(null)
                  setFormData(initialFormData)
                }}
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center text-white font-bold">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-6 w-6" />
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <div className="flex items-center gap-1 mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(testimonial)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(testimonial.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="mb-3">
                {testimonial.trip_title}
              </Badge>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                "{testimonial.comment}"
              </p>
              <div className="mt-3 pt-3 border-t text-xs text-gray-500">
                Added: {new Date(testimonial.created_at).toLocaleDateString()}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {testimonials.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="text-gray-500 mb-4">
              <User className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">No testimonials yet</p>
              <p className="text-sm">Add your first customer testimonial to get started.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
