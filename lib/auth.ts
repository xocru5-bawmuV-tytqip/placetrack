import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import type { Role, SubscriptionTier } from '@prisma/client'

// ─── Type Augmentation ────────────────────────────────────────────────────────

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name: string | null
      image: string | null
      role: Role
      subscriptionTier: SubscriptionTier
      isBanned: boolean
      universityId: string | null
    }
  }
  interface User {
    id: string
    role: Role
    subscriptionTier: SubscriptionTier
    isBanned: boolean
    universityId: string | null
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    role: Role
    subscriptionTier: SubscriptionTier
    isBanned: boolean
    universityId: string | null
  }
}

// ─── Auth Options ─────────────────────────────────────────────────────────────

export const authOptions: NextAuthOptions = {
  // Adapter omitted when using JWT sessions to allow offline/demo resilience
  secret: process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET || 'placetrack-fallback-secret-production-key-32chars',
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  pages: {
    signIn: '/login',
    error: '/login',
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      allowDangerousEmailAccountLinking: true,
    }),

    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('EMAIL_PASSWORD_REQUIRED')
        }

        const email = credentials.email.toLowerCase().trim()

        try {
          if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('dev.db')) {
            console.log('[AUTH] Running in demo mode, returning mock user.');
            return {
              id: 'mock-user-123',
              email: email,
              name: 'Demo Student',
              image: null,
              role: 'STUDENT',
              subscriptionTier: 'PRO',
              isBanned: false,
              universityId: 'poornima',
            }
          }

          const user = await prisma.user.findUnique({
            where: { email },
            select: {
              id: true,
              email: true,
              name: true,
              password: true,
              image: true,
              role: true,
              subscriptionTier: true,
              isBanned: true,
              isActive: true,
              universityId: true,
            },
          })

          if (!user) {
            throw new Error('INVALID_CREDENTIALS')
          }

          if (!user.password) {
            throw new Error('USE_OAUTH')
          }

          const passwordValid = await bcrypt.compare(credentials.password, user.password)
          if (!passwordValid) {
            throw new Error('INVALID_CREDENTIALS')
          }

          if (user.isBanned) {
            throw new Error('ACCOUNT_BANNED')
          }

          if (!user.isActive) {
            throw new Error('ACCOUNT_INACTIVE')
          }

          // Return sanitized user object - NEVER include password
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
            role: user.role,
            subscriptionTier: user.subscriptionTier,
            isBanned: user.isBanned,
            universityId: user.universityId,
          }
        } catch (err: any) {
          if ([
            'EMAIL_PASSWORD_REQUIRED',
            'USE_OAUTH',
            'INVALID_CREDENTIALS',
            'ACCOUNT_BANNED',
            'ACCOUNT_INACTIVE',
          ].includes(err?.message)) {
            throw err
          }

          console.error('[AUTH_ERROR]', err?.message || err)
          throw new Error('DATABASE_UNAVAILABLE')
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, trigger }) {
      // Populate token on first sign-in
      if (user) {
        token.id = user.id
        token.role = user.role
        token.subscriptionTier = user.subscriptionTier
        token.isBanned = user.isBanned
        token.universityId = user.universityId
      }

      // Re-fetch from DB when the session is explicitly updated (e.g. subscription upgrade)
      if (trigger === 'update') {
        const refreshed = await prisma.user.findUnique({
          where: { id: token.id },
          select: {
            role: true,
            subscriptionTier: true,
            isBanned: true,
            universityId: true,
          },
        })
        if (refreshed) {
          token.role = refreshed.role
          token.subscriptionTier = refreshed.subscriptionTier
          token.isBanned = refreshed.isBanned
          token.universityId = refreshed.universityId
        }
      }

      return token
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.role = token.role
        session.user.subscriptionTier = token.subscriptionTier
        session.user.isBanned = token.isBanned
        session.user.universityId = token.universityId
      }
      return session
    },

    async signIn({ user, account }) {
      // Block banned / inactive accounts on OAuth sign-ins
      if (account?.provider !== 'credentials') {
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email! },
          select: { isBanned: true, isActive: true },
        })
        if (dbUser?.isBanned || dbUser?.isActive === false) {
          return false
        }
      }
      return true
    },
  },

  events: {
    async signIn({ user, account, isNewUser }) {
      // Seed a FREE subscription for brand-new Google OAuth accounts
      if (isNewUser && account?.provider === 'google') {
        await prisma.subscription.upsert({
          where: { userId: user.id },
          create: {
            userId: user.id,
            tier: 'FREE',
            status: 'ACTIVE',
          },
          update: {},
        })
      }
    },
  },

  debug: process.env.NODE_ENV === 'development',
}
