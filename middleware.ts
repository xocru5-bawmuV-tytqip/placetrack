import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import type { JWT } from 'next-auth/jwt'

// ─── Route Config ─────────────────────────────────────────────────────────────

/** Routes that require a valid session (any role). */
const PROTECTED_PREFIXES = [
  '/dashboard',
  '/chat',
  '/profile',
  '/settings',
  '/drives',
]

/** Routes that require the ADMIN role. */
const ADMIN_PREFIXES = ['/admin']

/** Routes that authenticated users should be redirected AWAY from. */
const AUTH_ONLY_ROUTES = ['/login', '/register']

// ─── Helpers ──────────────────────────────────────────────────────────────────

function matchesPrefix(pathname: string, prefixes: string[]): boolean {
  return prefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
}

function buildRedirect(url: string, request: NextRequest): NextResponse {
  return NextResponse.redirect(new URL(url, request.url))
}

// ─── Middleware ───────────────────────────────────────────────────────────────

export default withAuth(
  function middleware(request) {
    const { pathname } = request.nextUrl
    const token = request.nextauth?.token as JWT | null

    // ── Authenticated users should not revisit login / register ──────────────
    if (token && matchesPrefix(pathname, AUTH_ONLY_ROUTES)) {
      return buildRedirect('/dashboard', request)
    }

    // ── Admin-only routes ─────────────────────────────────────────────────────
    if (matchesPrefix(pathname, ADMIN_PREFIXES)) {
      if (!token) {
        const loginUrl = new URL('/login', request.url)
        loginUrl.searchParams.set('callbackUrl', pathname)
        return NextResponse.redirect(loginUrl)
      }
      if (token.role !== 'ADMIN') {
        // Non-admins get redirected to their dashboard
        return buildRedirect('/dashboard', request)
      }
    }

    // ── Banned account guard (applies everywhere once authenticated) ──────────
    if (token?.isBanned && !pathname.startsWith('/banned')) {
      return buildRedirect('/banned', request)
    }

    // ── Protected routes ──────────────────────────────────────────────────────
    if (matchesPrefix(pathname, PROTECTED_PREFIXES)) {
      if (!token) {
        const loginUrl = new URL('/login', request.url)
        loginUrl.searchParams.set('callbackUrl', pathname)
        return NextResponse.redirect(loginUrl)
      }
    }

    return NextResponse.next()
  },
  {
    secret: process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET || 'placetrack-fallback-secret-production-key-32chars',
    callbacks: {
      /**
       * This callback controls whether withAuth runs the middleware function.
       * Returning `true` always runs the middleware, letting our function above
       * perform granular checks rather than relying on withAuth's built-in block.
       */
      authorized() {
        return true
      },
    },
  }
)

// ─── Matcher ──────────────────────────────────────────────────────────────────

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static (static files)
     * - _next/image (image optimisation)
     * - favicon.ico
     * - public folder assets
     * - Next.js API routes under /api/auth (NextAuth handles these internally)
     */
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)|api/auth).*)',
  ],
}
