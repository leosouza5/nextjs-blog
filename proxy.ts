import { getSessionCookie } from "better-auth/cookies"
import { NextRequest, NextResponse } from "next/server"

export async function proxy(req: NextRequest) {
  const sessionCookie = getSessionCookie(req)

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/auth/login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/blog", "/blog/:path*", '/create']
}