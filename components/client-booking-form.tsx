"use client"

import { BookingForm } from "@/components/booking-form"

interface ClientBookingFormProps {
  tripTitle: string
  tripPrice: string
}

export default function ClientBookingForm({ tripTitle, tripPrice }: ClientBookingFormProps) {
  return <BookingForm tripTitle={tripTitle} tripPrice={tripPrice} />
}
