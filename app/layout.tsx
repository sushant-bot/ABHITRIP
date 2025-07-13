import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AuthProvider } from "@/components/auth/auth-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abhi Trip - Adventure Travel Company in Karnataka",
  description:
    "Explore. Experience. Escape. Karnataka's #1 Adventure Travel Company offering thrilling treks and weekend getaways.",
  generator: '',
  icons: {
    icon: '/abhi-trip-logo.png',
    apple: '/abhi-trip-logo.png',
    shortcut: '/abhi-trip-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
