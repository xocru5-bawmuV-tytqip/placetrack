import { Role, SubscriptionTier, DriveType, QuestionType, QuestionDifficulty } from '@prisma/client'

export interface ExtendedUser {
  id: string
  email: string
  name?: string | null
  image?: string | null
  role: Role
  subscriptionTier: SubscriptionTier
  universityId?: string | null
}

export interface CandidateCardData {
  id: string
  userId: string
  name: string
  rollNo?: string | null
  collegeEmail?: string | null
  passingYear: number
  batch?: string | null
  photo?: string | null
  bio?: string | null
  linkedIn?: string | null
  github?: string | null
  portfolio?: string | null
  skills: string[]
  isPlaced: boolean
  placedAt?: string | null
  ctc?: number | null
  role?: string | null
  universityName: string
  courseName: string
  projectsCount: number
}

export interface ProjectData {
  id: string
  title: string
  description: string
  techStack: string[]
  githubUrl?: string | null
  liveUrl?: string | null
  thumbnail?: string | null
  year: number
}

export interface InterviewQuestionData {
  id: string
  companyName?: string
  round?: string | null
  type: QuestionType
  question: string
  answer?: string | null
  difficulty: QuestionDifficulty
  upvotes: number
}

export interface ChatMessageItem {
  id: string
  senderId: string
  senderName: string
  senderAvatar?: string | null
  content: string
  isOwn: boolean
  isBlocked: boolean
  flagReason?: string | null
  createdAt: string
}

export interface SubscriptionPlanItem {
  id: 'FREE' | 'BASIC' | 'PRO' | 'ENTERPRISE'
  name: string
  priceINR: number
  billingPeriod: string
  description: string
  features: string[]
  highlight?: boolean
  badge?: string
}
