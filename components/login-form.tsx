"use client"

import { useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';
import { LayoutDashboard, Lock, LogIn, AlertCircle } from 'lucide-react';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const router = useRouter();

  // This is a simple validation - in a real app, you would validate against a database or API
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simple validation - in a real app, you'd verify with a backend
    // For demo purposes, we're using hardcoded credentials
    setTimeout(() => {
      if (username === 'admin' && password === 'abhitrip2025') {
        // Set a session token in localStorage to remember the login
        localStorage.setItem('adminAuthenticated', 'true');
        // Redirect to admin dashboard
        router.push('/admin/dashboard');
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    }, 1000); // Simulate network delay
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      <Card className="w-full max-w-md shadow-xl border-0 bg-white/90 backdrop-blur">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto w-16 h-16 mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
            <LayoutDashboard className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-slate-800">Admin Login</CardTitle>
          <CardDescription className="text-slate-500">
            Enter your credentials to access the admin panel
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-slate-700 font-medium">Username</Label>
                <div className="relative">
                  <Input
                    id="username"
                    type="text" 
                    placeholder="Enter your username"
                    className="pl-10 py-6 bg-slate-50 border-slate-200"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <div className="absolute left-3 top-3 text-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-slate-700 font-medium">Password</Label>
                </div>
                <div className="relative">
                  <Input 
                    id="password"
                    type="password" 
                    placeholder="Enter your password"
                    className="pl-10 py-6 bg-slate-50 border-slate-200"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="absolute left-3 top-3 text-slate-400">
                    <Lock className="h-[18px] w-[18px]" />
                  </div>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 text-red-700 p-3 rounded-md flex items-start gap-2 text-sm">
                  <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full mt-6 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <LogIn className="h-5 w-5" />
                  Sign In
                </span>
              )}
            </Button>
          </form>
        </CardContent>
        
      </Card>
    </div>
  );
}
