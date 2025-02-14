'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { Label } from "@/components/ui/label"
import { Heart } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/store"
import { setLoading, setError } from "@/features/auth/authSlice"
import axios from "@/lib/axios"
import { signIn } from "next-auth/react"

export default function SignUp() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { status, error } = useAppSelector((state) => state.auth)
    const [role, setRole] = useState<'donor' | 'hospital'>('donor')
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            dispatch(setError("Passwords don't match"))
            return
        }

        dispatch(setLoading())

        try {
            // Register the user
            await axios.post(`/api/register/${role}`, {
                ...formData,
                role,
            })

            // Log them in automatically
            const result = await signIn('credentials', {
                email: formData.email,
                password: formData.password,
                role,
                redirect: false,
            })

            if (result?.error) {
                dispatch(setError(result.error))
            } else {
                router.push(`/${role}/dashboard`)
            }
        } catch (error) {
            if (error instanceof Error) {
                dispatch(setError(error.message))
            } else {
                dispatch(setError('Registration failed'))
            }
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white border-b">
                <div className="container mx-auto px-4 h-14 flex items-center">
                    <Link className="flex items-center justify-center" href="/">
                        <Heart className="h-6 w-6 text-red-500" />
                        <span className="ml-2 text-2xl font-bold text-black">iGive</span>
                    </Link>
                </div>
            </header>
            <main className="flex-1 flex items-center justify-center bg-[#fff1f2]">
                <div className="w-full max-w-md space-y-8 px-4 bg-white p-8 rounded-lg shadow-sm">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Create your account</h1>
                        <p className="mt-2 text-black/60">
                            Already have an account?{" "}
                            <Link href="/login" className="text-red-500 hover:text-red-600">
                                Sign in
                            </Link>
                        </p>
                    </div>

                    <div className="flex gap-4 p-1 bg-gray-100 rounded-lg">
                        <button
                            type="button"
                            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${role === 'donor' ? 'bg-white shadow' : 'hover:bg-white/50'
                                }`}
                            onClick={() => setRole('donor')}
                        >
                            Donor
                        </button>
                        <button
                            type="button"
                            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${role === 'hospital' ? 'bg-white shadow' : 'hover:bg-white/50'
                                }`}
                            onClick={() => setRole('hospital')}
                        >
                            Hospital
                        </button>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-100 text-red-700 p-3 rounded text-center">
                                {error}
                            </div>
                        )}
                        <div>
                            <Label htmlFor="name">{role === 'hospital' ? 'Hospital Name' : 'Full Name'}</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <PasswordInput
                                id="password"
                                value={formData.password}
                                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <PasswordInput
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={status === 'loading'}>
                            {status === 'loading' ? 'Creating Account...' : `Create ${role === 'hospital' ? 'Hospital' : 'Donor'} Account`}
                        </Button>
                    </form>
                </div>
            </main>
            <footer className="bg-white border-t">
                <div className="container mx-auto px-4 py-6">
                    <p className="text-sm text-black/70 text-center">
                        © 2025 iGive Blood Donation. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
} 