import { notFound } from "next/navigation"
import { getTripBySlug, allTrips } from "@/lib/trips-data"
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
  const trip = getTripBySlug(params.slug)

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

export default function TripPage({ params }: TripPageProps) {
  const trip = getTripBySlug(params.slug)

  if (!trip) {
    notFound()
  }

  return <TripDetailPage trip={trip} />
}
