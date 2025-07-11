"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, MessageCircle } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface BookingFormProps {
  tripTitle: string
  tripPrice: string
}

export function BookingForm({ tripTitle, tripPrice }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    participants: "",
    preferredDate: undefined as Date | undefined,
    pickupPoint: "",
    specialRequests: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Hi! I'd like to book the ${tripTitle} trip.

Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Number of participants: ${formData.participants}
- Preferred date: ${formData.preferredDate ? format(formData.preferredDate, "PPP") : "Not specified"}
- Pickup point: ${formData.pickupPoint || "Not specified"}
- Special requests: ${formData.specialRequests || "None"}
- Price: ${tripPrice} per person

Please confirm availability and provide further details.`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919740174089?text=${encodedMessage}`, "_blank")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          placeholder="Enter your full name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          placeholder="Enter your email"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          placeholder="Enter your phone number"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="participants">Number of Participants *</Label>
        <Select onValueChange={(value) => setFormData({ ...formData, participants: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select number of participants" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? "person" : "people"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Preferred Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !formData.preferredDate && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formData.preferredDate ? format(formData.preferredDate, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={formData.preferredDate}
              onSelect={(date) => setFormData({ ...formData, preferredDate: date })}
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label htmlFor="pickup">Preferred Pickup Point</Label>
        <Input
          id="pickup"
          value={formData.pickupPoint}
          onChange={(e) => setFormData({ ...formData, pickupPoint: e.target.value })}
          placeholder="Enter your preferred pickup location"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="requests">Special Requests</Label>
        <Textarea
          id="requests"
          value={formData.specialRequests}
          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
          placeholder="Any special requirements or requests..."
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
        <MessageCircle className="mr-2 h-4 w-4" />
        Book via WhatsApp
      </Button>
    </form>
  )
}
