'use client'

import { useSession } from "next-auth/react"

export default function DonorDashboard() {
  const { data: session } = useSession()
  
  return (
    <div>
      <h1>Welcome, {session?.user?.name}</h1>
      {/* Dashboard content */}
    </div>
  )
} 