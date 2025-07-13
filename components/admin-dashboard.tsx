"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  LayoutDashboard, 
  MapPin, 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Calendar,
  LogOut,
  Settings,
  BarChart3
} from "lucide-react"
import { TripManagement } from "./trip-management"
import { TestimonialManagement } from "./testimonial-management"

interface AdminDashboardProps {
  onLogout: () => void
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock stats - in real app, these would come from your database
  const stats = {
    totalTrips: 12,
    oneDayTrips: 8,
    twoDayTrips: 4,
    totalTestimonials: 24,
    avgRating: 4.8,
    totalBookings: 156
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <LayoutDashboard className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">Abhi Trip Admin</h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" className="sm:hidden" title="Settings">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={onLogout}>
                <LogOut className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm">
            <TabsTrigger 
              value="overview" 
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger 
              value="trips"
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white"
            >
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">Trips</span>
            </TabsTrigger>
            <TabsTrigger 
              value="testimonials"
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
            >
              <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">Reviews</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Trips</CardTitle>
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">{stats.totalTrips}</div>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        {stats.oneDayTrips} One Day
                      </Badge>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        {stats.twoDayTrips} Two Day
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600">{stats.totalTestimonials}</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Customer feedback and reviews
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-600">{stats.avgRating}/5</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Across all trips
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button 
                      onClick={() => setActiveTab("trips")}
                      className="h-16 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        <span className="text-sm sm:text-base">Manage Trips</span>
                      </div>
                    </Button>
                    <Button 
                      onClick={() => setActiveTab("testimonials")}
                      className="h-16 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <MessageSquare className="h-5 w-5" />
                        <span className="text-sm sm:text-base">Manage Reviews</span>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <MapPin className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-green-800">New trip added</p>
                          <p className="text-sm text-green-600">Nandi Hills Adventure created</p>
                        </div>
                      </div>
                      <span className="text-xs text-green-600">2 hours ago</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-purple-800">New testimonial</p>
                          <p className="text-sm text-purple-600">5-star review from Rajesh Kumar</p>
                        </div>
                      </div>
                      <span className="text-xs text-purple-600">1 day ago</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <Users className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-blue-800">Booking received</p>
                          <p className="text-sm text-blue-600">New booking for Skandagiri Trek</p>
                        </div>
                      </div>
                      <span className="text-xs text-blue-600">2 days ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="trips">
            <TripManagement />
          </TabsContent>

          <TabsContent value="testimonials">
            <TestimonialManagement />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
