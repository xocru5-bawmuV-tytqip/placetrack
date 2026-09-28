# PlaceTrack — Poornima University Placement Portal

A premium, production-grade campus placement intelligence platform for Poornima University.

## Features

- 🎓 **Placement Drives** — Year-wise, course-wise, company-wise data
- 👤 **Candidate Profiles** — Photo, CTC, company, LinkedIn, GitHub, projects, resume
- 🏢 **Company Analytics** — All-time stats, year-wise, student-wise data
- 🤖 **SevenAI** — Gemini-powered placement advisor + Interview Simulator
- 💬 **Restricted Chat** — Junior-senior mentorship (placement topics only, AI-moderated)
- 💳 **Subscription Tiers** — Free, Basic (₹99), Pro (₹299), Enterprise
- 🔒 **Privacy & Safety** — Role-based access, data masking, resume watermarking
- 📊 **Analytics Dashboard** — CTC trends, placement rates, company insights

## Quick Start

### 1. Clone & Install
```bash
git clone <repo-url>
cd placement-platform
npm install
```

### 2. Setup Environment
```bash
cp .env.example .env.local
# Fill in your API keys (see .env.example for instructions)
```

### 3. Setup Database
```bash
# Push schema to your PostgreSQL database
npm run db:push

# Seed with sample data (Poornima University data included)
npm run db:seed
```

### 4. Run Development Server
```bash
npm run dev
# Open http://localhost:3000
```

## Default Credentials (after seeding)
| Role | Email | Password |
|---|---|---|
| Admin | admin@placetrack.in | Admin@123 |
| Student | student@poornima.edu.in | Student@123 |

## Environment Variables Required
See [.env.example](./.env.example) for all required variables with instructions.

| Variable | Service | Free Tier |
|---|---|---|
| `DATABASE_URL` | Supabase | ✅ Free |
| `GEMINI_API_KEY` | Google AI Studio | ✅ Free |
| `CLOUDINARY_*` | Cloudinary | ✅ Free |
| `PUSHER_*` | Pusher | ✅ Free (200k msg/day) |
| `RAZORPAY_*` | Razorpay | ✅ Test keys free |

## Tech Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
- **Backend**: Next.js API Routes, Server Actions
- **Database**: PostgreSQL + Prisma ORM
- **Auth**: NextAuth.js (email/password + Google)
- **AI**: Google Gemini 1.5 Pro (SevenAI)
- **Chat**: Pusher (real-time WebSockets)
- **Files**: Cloudinary (resume + photo storage)
- **Payments**: Razorpay (INR subscriptions)

## Project Structure
```
placement-platform/
├── app/
│   ├── (auth)/          # Login, Register pages
│   ├── (protected)/     # Dashboard, Candidates, Chat, AI
│   ├── admin/           # Admin panel
│   ├── universities/    # University pages
│   ├── companies/       # Company pages
│   ├── questions/       # Interview question bank
│   └── api/             # API routes
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── chat/            # Chat components
│   ├── ai/              # SevenAI components
│   ├── profile/         # Candidate profile
│   ├── charts/          # Analytics charts
│   └── layout/          # Navbar, Footer
├── lib/
│   ├── prisma.ts        # DB client
│   ├── auth.ts          # NextAuth config
│   ├── seven-ai.ts      # Gemini AI agent
│   ├── subscription.ts  # Subscription logic
│   ├── cloudinary.ts    # File upload
│   ├── pusher.ts        # Real-time chat
│   ├── razorpay.ts      # Payments
│   └── utils.ts         # Utilities
├── prisma/
│   ├── schema.prisma    # DB schema
│   └── seed.ts          # Sample data
└── types/index.ts       # TypeScript types
```

## Deployment (Vercel + Supabase)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# or use: vercel env add VARIABLE_NAME
```

## License
Private — All rights reserved, Poornima University
