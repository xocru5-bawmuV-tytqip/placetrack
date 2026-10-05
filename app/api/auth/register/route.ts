import { NextResponse } from 'next/server'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

// ─── Validation Schema ────────────────────────────────────────────────────────

const registerSchema = z
  .object({
    // Step 1
    name: z.string().min(2, 'Name must be at least 2 characters').max(100),
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
      .regex(/[0-9]/, 'Must contain at least one number'),
    confirmPassword: z.string().optional(),

    // Step 2
    universityName: z.string().min(2, 'University is required').default('Poornima University'),
    course: z.string().optional(),
    courseName: z.string().optional(),
    passingYear: z
      .union([z.number(), z.string()])
      .transform((val) => {
        if (typeof val === 'number') return val
        const num = parseInt(String(val).replace(/\D/g, '').slice(0, 4), 10)
        return isNaN(num) ? 2025 : num
      })
      .pipe(z.number().int().min(2000).max(new Date().getFullYear() + 10)),
    rollNo: z.string().optional().nullable(),

    // Step 3
    isPlaced: z.boolean().optional().default(false),
    linkedIn: z
      .string()
      .url('Invalid LinkedIn URL')
      .optional()
      .or(z.literal(''))
      .nullable(),
    github: z
      .string()
      .url('Invalid GitHub URL')
      .optional()
      .or(z.literal(''))
      .nullable(),
  })
  .refine(
    (data) => {
      if (data.confirmPassword) {
        return data.password === data.confirmPassword
      }
      return true
    },
    {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    }
  )

type RegisterPayload = z.infer<typeof registerSchema>

// ─── POST /api/auth/register ──────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json()

    // Validate request body
    const parseResult = registerSchema.safeParse(body)
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const data: RegisterPayload = parseResult.data

    // ─── DEMO MODE MOCK ───────────────────────────────────────────────────────────
    if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('dev.db')) {
      console.log('[REGISTER] Running in demo mode without real DB, mocking success.');
      return NextResponse.json(
        {
          success: true,
          message: 'Account created successfully (Demo Mode)! Please sign in.',
          userId: 'mock-user-123',
        },
        { status: 201 }
      )
    }

    // Check if email is already taken
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email.toLowerCase().trim() },
      select: { id: true },
    })

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: 'An account with this email already exists.',
        },
        { status: 409 }
      )
    }

    // Hash password securely with bcrypt (12 salt rounds)
    const hashedPassword = await bcrypt.hash(data.password, 12)

    // Resolve or create the university record
    const normalizedName = data.universityName.trim()
    let university = await prisma.university.findFirst({
      where: { name: { equals: normalizedName, mode: 'insensitive' } },
      select: { id: true },
    })

    if (!university) {
      // Create a minimal university record — admin can enrich it later
      const slug = normalizedName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')

      university = await prisma.university.create({
        data: {
          name: normalizedName,
          slug: `${slug}-${Date.now()}`,
          location: 'India',
          city: 'India',
          state: 'India',
        },
        select: { id: true },
      })
    }

    // Resolve or create a default course (department-less stub for now)
    let department = await prisma.department.findFirst({
      where: { universityId: university.id, name: { equals: 'General', mode: 'insensitive' } },
      select: { id: true },
    })

    if (!department) {
      department = await prisma.department.create({
        data: {
          universityId: university.id,
          name: 'General',
          code: 'GEN',
        },
        select: { id: true },
      })
    }

    const courseNameClean = (data.course || data.courseName || 'B.Tech Computer Science').trim()

    let course = await prisma.course.findFirst({
      where: {
        departmentId: department.id,
        name: { equals: courseNameClean, mode: 'insensitive' },
      },
      select: { id: true },
    })

    if (!course) {
      course = await prisma.course.create({
        data: {
          departmentId: department.id,
          name: courseNameClean,
          duration: 4,
          type: 'UG',
        },
        select: { id: true },
      })
    }

    // Determine role
    const role = data.isPlaced ? 'PLACED_STUDENT' : 'STUDENT'

    // Transactionally create User + StudentProfile + Subscription
    const newUser = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email: data.email.toLowerCase().trim(),
          name: data.name.trim(),
          password: hashedPassword,
          role,
          universityId: university!.id,
          subscriptionTier: 'FREE',
        },
        select: { id: true, email: true, name: true },
      })

      await tx.studentProfile.create({
        data: {
          userId: user.id,
          universityId: university!.id,
          courseId: course!.id,
          passingYear: data.passingYear,
          rollNo: data.rollNo ?? null,
          isPlaced: data.isPlaced,
          linkedIn: data.linkedIn || null,
          github: data.github || null,
        },
      })

      await tx.subscription.create({
        data: {
          userId: user.id,
          tier: 'FREE',
          status: 'ACTIVE',
        },
      })

      return user
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Account created successfully! Please sign in.',
        userId: newUser.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[REGISTER_API]', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again later.',
      },
      { status: 500 }
    )
  }
}
