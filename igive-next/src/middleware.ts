import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const path = req.nextUrl.pathname

    // Redirect donor trying to access hospital routes and vice versa
    if (path.startsWith("/donor") && token?.role !== "donor") {
      return NextResponse.redirect(new URL("/login", req.url))
    }

    if (path.startsWith("/hospital") && token?.role !== "hospital") {
      return NextResponse.redirect(new URL("/login", req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: ["/donor/:path*", "/hospital/:path*"],
} 