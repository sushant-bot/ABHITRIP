"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if the user is authenticated
    const authStatus = localStorage.getItem('adminAuthenticated')
    
    if (authStatus === 'true') {
      // Redirect to dashboard if authenticated
      router.push('/admin/dashboard')
    } else {
      // Redirect to login if not authenticated
      router.push('/admin/login')
    }
  }, [router])

  // Show a loading state while redirecting
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4 text-slate-600">Redirecting...</p>
      </div>
    </div>
  )
}
