import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, Star, Clock, ArrowRight, Search, Sparkles, Mountain } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getAllTripsFromDB, allTrips } from "@/lib/trips-data"
import { ClientTripsPage } from "@/components/client-trips-page"

export default async function TripsPage() {
  // Load trips from database, fallback to static data
  let trips;
  try {
    trips = await getAllTripsFromDB();
    if (trips.length === 0) {
      trips = allTrips;
    }
  } catch (error) {
    console.error('Error loading trips:', error);
    trips = allTrips;
  }

  return <ClientTripsPage trips={trips} />;
}


