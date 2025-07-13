"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { migrateTripsWithSlugs } from '@/lib/trips-data'

export function DatabaseMigration() {
  const [isRunning, setIsRunning] = useState(false)
  const [message, setMessage] = useState('')
  const [logs, setLogs] = useState<string[]>([])

  const runMigration = async () => {
    setIsRunning(true)
    setMessage('')
    setLogs([])
    
    // Capture console logs
    const originalLog = console.log
    const originalError = console.error
    const capturedLogs: string[] = []
    
    console.log = (...args) => {
      const logMessage = args.join(' ')
      capturedLogs.push(`ℹ️ ${logMessage}`)
      setLogs([...capturedLogs])
      originalLog(...args)
    }
    
    console.error = (...args) => {
      const errorMessage = args.join(' ')
      capturedLogs.push(`❌ ${errorMessage}`)
      setLogs([...capturedLogs])
      originalError(...args)
    }
    
    try {
      await migrateTripsWithSlugs()
      setMessage('✅ Migration completed successfully!')
    } catch (error: any) {
      setMessage(`❌ Migration failed: ${error.message || error}`)
    } finally {
      // Restore original console methods
      console.log = originalLog
      console.error = originalError
      setIsRunning(false)
    }
  }

  const addSlugColumnInstructions = `
STEP 1: Add Slug Column to Supabase
1. Go to your Supabase dashboard (https://supabase.com)
2. Navigate to Table Editor > trips table
3. Click "Add Column" button
4. Enter these details:
   - Column name: slug
   - Data type: text
   - Default value: (leave empty)
   - Allow nullable: ✓ (checked)
5. Click "Save"

STEP 2: Run Migration
After adding the column, click the "Run Migration" button below.
  `

  return (
    <div className="space-y-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Database Migration - Add Slug Support</CardTitle>
          <CardDescription>
            This will add slug support to your trips for better URL handling
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">📋 Setup Instructions:</h3>
            <pre className="text-sm text-blue-800 whitespace-pre-wrap font-mono">
              {addSlugColumnInstructions}
            </pre>
          </div>
          
          <div className="space-y-3">
            <Button 
              onClick={runMigration} 
              disabled={isRunning}
              className="w-full"
              size="lg"
            >
              {isRunning ? '🔄 Running Migration...' : '🚀 Run Migration'}
            </Button>
            
            {message && (
              <div className={`p-4 rounded-lg font-medium ${
                message.includes('❌') 
                  ? 'bg-red-50 text-red-800 border border-red-200'
                  : 'bg-green-50 text-green-800 border border-green-200'
              }`}>
                {message}
              </div>
            )}
            
            {logs.length > 0 && (
              <div className="bg-gray-50 border rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">📋 Migration Logs:</h4>
                <div className="max-h-48 overflow-y-auto space-y-1">
                  {logs.map((log, index) => (
                    <div key={index} className="text-sm font-mono text-gray-700">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>🔧 Troubleshooting</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <strong>If you see "Slug column does not exist":</strong>
            <p className="text-gray-600">You need to add the slug column to your Supabase trips table first (see instructions above).</p>
          </div>
          <div>
            <strong>If you see "All trips already have slugs":</strong>
            <p className="text-gray-600">Great! Your database is already set up correctly. No migration needed.</p>
          </div>
          <div>
            <strong>If you see "No trips found":</strong>
            <p className="text-gray-600">Your trips table might be empty, or there might be a connection issue with Supabase.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
