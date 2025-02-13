'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, Calendar } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fff1f2]">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="/">
            <Heart className="h-6 w-6 text-red-500" />
            <span className="ml-2 text-2xl font-bold text-black">iGive</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium text-black hover:underline underline-offset-4" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium text-black hover:underline underline-offset-4" href="#about">
              About
            </Link>
            <Link className="text-sm font-medium text-black hover:underline underline-offset-4" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter text-black sm:text-5xl md:text-6xl lg:text-7xl">
                  Give Blood, Save Lives
                </h1>
                <p className="mx-auto max-w-[700px] text-black/80 md:text-xl">
                  Join iGive and become a hero. Your donation can save up to three lives.
                </p>
              </div>
              <div className="space-x-4 mt-8">
                <Button className="bg-black text-white hover:bg-black/90" asChild>
                  <Link href="/sign-up">Donate Now</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl text-center mb-16">
              Why Donate with iGive?
            </h2>
            <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Heart className="h-12 w-12 text-red-500" />
                <h3 className="text-xl font-bold text-black">Save Lives</h3>
                <p className="text-black/80">Your donation can help save up to three lives.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-12 w-12 text-red-500" />
                <h3 className="text-xl font-bold text-black">Community Impact</h3>
                <p className="text-black/80">Join a community of lifesavers making a difference.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Calendar className="h-12 w-12 text-red-500" />
                <h3 className="text-xl font-bold text-black">Convenient Scheduling</h3>
                <p className="text-black/80">Easy online appointment booking at your convenience.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center">
          <p className="text-sm text-black/70">© 2025 iGive Blood Donation. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-sm text-black/70 hover:underline underline-offset-4" href="/login?role=donor">
              Donor Sign In
            </Link>
            <Link className="text-sm text-black/70 hover:underline underline-offset-4" href="/login?role=hospital">
              Hospital Sign In
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
