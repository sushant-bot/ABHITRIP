import { notFound } from "next/navigation"
import { getTripBySlug, getTripBySlugFromDB, allTrips } from "@/lib/trips-data"
import { TripDetailPage } from "@/components/trip-detail-page"

interface TripPageProps {
  params: Promise<{
    slug: string
  }>
}

// Use ISR to revalidate pages when data changes
export const revalidate = 0 // Revalidate on every request in production

export async function generateStaticParams() {
  return allTrips.map((trip) => ({
    slug: trip.slug,
  }))
}

export async function generateMetadata({ params }: TripPageProps) {
  const { slug } = await params
  // Try database first, then fallback to static data
  let trip = await getTripBySlugFromDB(slug)
  if (!trip) {
    trip = getTripBySlug(slug) || null
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
  const { slug } = await params
  // Try database first, then fallback to static data
  let trip = await getTripBySlugFromDB(slug)
  if (!trip) {
    trip = getTripBySlug(slug) || null
  }

  if (!trip) {
    notFound()
  }

  return <TripDetailPage trip={trip} />
}
