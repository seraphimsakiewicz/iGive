import { NextResponse } from 'next/server'
import axios from '@/lib/axios'

export async function POST(
  request: Request,
  { params }: { params: { role: string } }
) {
  try {
    const body = await request.json()
    
    // Call our existing backend registration endpoint
    const response = await axios.post(`${process.env.BACKEND_URL}/api/register/${params.role}`, {
      ...body,
      role: params.role,
    })

    return NextResponse.json(response.data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response?.data?.message || 'Registration failed' },
      { status: error.response?.status || 500 }
    )
  }
} 