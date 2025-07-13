import { notFound } from "next/navigation"
import { getTripBySlug, getTripBySlugFromDB, allTrips } from "@/lib/trips-data"
import { TripDetailPage } from "@/components/trip-detail-page"

interface TripPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allTrips.map((trip) => ({
    slug: trip.slug,
  }))
}

export async function generateMetadata({ params }: TripPageProps) {
  // Try database first, then fallback to static data
  let trip = await getTripBySlugFromDB(params.slug)
  if (!trip) {
    trip = getTripBySlug(params.slug) || null
  }

  if (!trip) {
    return {
      title: "Trip Not Found",
    }
  }

  return {
    title: `${trip.title} | Abhitrip Travel`,
    description: trip.description,
    openGraph: {
      title: trip.title,
      description: trip.description,
      images: [trip.image],
    },
  }
}

export default async function TripPage({ params }: TripPageProps) {
  // Try database first, then fallback to static data
  let trip = await getTripBySlugFromDB(params.slug)
  if (!trip) {
    trip = getTripBySlug(params.slug) || null
  }

  if (!trip) {
    notFound()
  }

  return <TripDetailPage trip={trip} />
}
