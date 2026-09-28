export type SubscriptionTier = 'FREE' | 'BASIC' | 'PRO' | 'ENTERPRISE'

export const FEATURES = {
  VIEW_CANDIDATE_LIST: 'VIEW_CANDIDATE_LIST',
  VIEW_FULL_PROFILE: 'VIEW_FULL_PROFILE',
  VIEW_CTC: 'VIEW_CTC',
  VIEW_PROJECTS: 'VIEW_PROJECTS',
  DOWNLOAD_RESUME: 'DOWNLOAD_RESUME',
  CHAT_WITH_SENIORS: 'CHAT_WITH_SENIORS',
  SEVEN_AI_CHAT: 'SEVEN_AI_CHAT',
  MOCK_INTERVIEW_SIMULATOR: 'MOCK_INTERVIEW_SIMULATOR',
  EXPORT_DATA: 'EXPORT_DATA',
} as const

export type FeatureKey = keyof typeof FEATURES

const TIER_PERMISSIONS: Record<SubscriptionTier, FeatureKey[]> = {
  FREE: [
    'VIEW_CANDIDATE_LIST',
  ],
  BASIC: [
    'VIEW_CANDIDATE_LIST',
    'VIEW_FULL_PROFILE',
    'VIEW_CTC',
    'VIEW_PROJECTS',
    'CHAT_WITH_SENIORS',
    'SEVEN_AI_CHAT',
  ],
  PRO: [
    'VIEW_CANDIDATE_LIST',
    'VIEW_FULL_PROFILE',
    'VIEW_CTC',
    'VIEW_PROJECTS',
    'DOWNLOAD_RESUME',
    'CHAT_WITH_SENIORS',
    'SEVEN_AI_CHAT',
    'MOCK_INTERVIEW_SIMULATOR',
  ],
  ENTERPRISE: [
    'VIEW_CANDIDATE_LIST',
    'VIEW_FULL_PROFILE',
    'VIEW_CTC',
    'VIEW_PROJECTS',
    'DOWNLOAD_RESUME',
    'CHAT_WITH_SENIORS',
    'SEVEN_AI_CHAT',
    'MOCK_INTERVIEW_SIMULATOR',
    'EXPORT_DATA',
  ],
}

export function checkAccess(tier: SubscriptionTier | undefined | null, feature: FeatureKey): boolean {
  const userTier = tier || 'FREE'
  const allowed = TIER_PERMISSIONS[userTier] || []
  return allowed.includes(feature)
}

export const SUBSCRIPTION_PLANS = [
  {
    id: 'FREE',
    name: 'Free Access',
    price: 0,
    interval: 'forever',
    description: 'Basic public metrics and placement overview',
    features: [
      'View university placement metrics',
      'View company visit rosters',
      'Search placed student names',
      'Community discussion forums',
    ],
    locked: [
      'Full CTC & compensation breakdown',
      'Senior project repositories & architecture',
      'Verified resume PDF downloads',
      'SevenAI Mock Interview Simulator',
      'Direct 1-on-1 Senior Mentorship Chat',
    ],
  },
  {
    id: 'BASIC',
    name: 'Placement Basic',
    price: 99,
    interval: 'month',
    description: 'Essential for 3rd and 4th year placement preparation',
    features: [
      'Everything in Free',
      'Complete candidate profiles & LinkedIn',
      'Exact CTC & bonus breakdowns',
      'Senior placed capstone projects & architecture',
      'SevenAI Placement Advisor Chat',
      'Direct 1-on-1 Chat with Placed Seniors',
    ],
    locked: [
      'Resume PDF downloads',
      'SevenAI Mock Interview Simulator',
    ],
  },
  {
    id: 'PRO',
    name: 'Placement Pro Pass',
    price: 299,
    interval: 'month',
    popular: true,
    description: 'Unrestricted access to all resources, resumes, and AI tools',
    features: [
      'Everything in Basic Plan',
      'Instant verified resume PDF downloads',
      'SevenAI Real-Time Mock Interview Simulator',
      'Company-specific round scoring & grading',
      'All 2020-2024 past interview questions with answers',
      'Priority delivery in Junior-Senior Chat',
    ],
    locked: [],
  },
]
