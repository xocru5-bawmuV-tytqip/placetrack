import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

// ─── Route Config ─────────────────────────────────────────────────────────────

const PROTECTED_PREFIXES = [
  '/dashboard',
  '/chat',
  '/profile',
  '/settings',
  '/drives',
]

const ADMIN_PREFIXES = ['/admin']
const AUTH_ONLY_ROUTES = ['/login', '/register']

function matchesPrefix(pathname: string, prefixes: string[]): boolean {
  return prefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
}

// ─── Middleware ───────────────────────────────────────────────────────────────

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Ignore static assets & API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const isProtected = matchesPrefix(pathname, PROTECTED_PREFIXES)
  const isAdmin = matchesPrefix(pathname, ADMIN_PREFIXES)
  const isAuthOnly = matchesPrefix(pathname, AUTH_ONLY_ROUTES)

  // If not a protected or auth route, let it pass immediately
  if (!isProtected && !isAdmin && !isAuthOnly) {
    return NextResponse.next()
  }

  let token = null
  try {
    token = await getToken({
      req: request,
      secret:
        process.env.NEXTAUTH_SECRET ||
        process.env.AUTH_SECRET ||
        'placetrack-fallback-secret-production-key-32chars',
    })
  } catch (err) {
    console.warn('Middleware token verification fallback:', err)
  }

  // Authenticated users shouldn't revisit login / register
  if (token && isAuthOnly) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Admin routes guard
  if (isAdmin) {
    if (!token) {
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('callbackUrl', pathname)
      return NextResponse.redirect(loginUrl)
    }
    if (token.role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  // Banned account guard
  if (token?.isBanned && !pathname.startsWith('/banned')) {
    return NextResponse.redirect(new URL('/banned', request.url))
  }

  // Protected routes guard
  if (isProtected && !token) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

// ─── Matcher ──────────────────────────────────────────────────────────────────
// Only run middleware on actual protected and auth routes to keep public pages blazing fast

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/chat/:path*',
    '/profile/:path*',
    '/settings/:path*',
    '/drives/:path*',
    '/admin/:path*',
    '/login',
    '/register',
  ],
}
