"use client"

import { useEffect, useState } from "react"
import { AdminDashboard } from "@/components/admin-dashboard"
import { useRouter } from "next/navigation"

export default function ProtectedAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if the user is authenticated
    const authStatus = localStorage.getItem('adminAuthenticated')
    
    if (authStatus !== 'true') {
      // Redirect to login if not authenticated
      router.push('/admin/login')
    } else {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [router])

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated')
    router.push('/admin/login')
  }

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-slate-600">Loading...</p>
        </div>
      </div>
    )
  }

  return isAuthenticated ? <AdminDashboard onLogout={handleLogout} /> : null
}
