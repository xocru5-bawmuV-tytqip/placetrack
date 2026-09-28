import { PrismaClient, Role, SubscriptionTier, DriveType, QuestionType, QuestionDifficulty } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting Poornima University Placement Platform Seed...')

  // 1. Universities
  const poornima = await prisma.university.upsert({
    where: { slug: 'poornima-university' },
    update: {},
    create: {
      name: 'Poornima University',
      slug: 'poornima-university',
      shortName: 'PU',
      location: 'IS-2027 to 2031, Ramchandrapura, P.O. Vidhani Vatika, Sitapura Extension',
      city: 'Jaipur',
      state: 'Rajasthan',
      website: 'https://poornima.edu.in',
      established: 2012,
      type: 'Private',
      description: 'Poornima University is a premier multidisciplinary research university located in Jaipur, Rajasthan, known for outstanding placement records and industry-aligned technical curriculum.',
    },
  })

  // 2. Departments
  const csDept = await prisma.department.upsert({
    where: { universityId_code: { universityId: poornima.id, code: 'CSE' } },
    update: {},
    create: {
      universityId: poornima.id,
      name: 'Computer Science & Engineering',
      code: 'CSE',
      description: 'Department of Computer Science and Engineering',
    },
  })

  // 3. Courses
  const btechCs = await prisma.course.create({
    data: {
      departmentId: csDept.id,
      name: 'B.Tech Computer Science & Engineering',
      duration: 4,
      type: 'UG',
    },
  })

  // 4. Companies
  const google = await prisma.company.upsert({
    where: { slug: 'google' },
    update: {},
    create: {
      name: 'Google',
      slug: 'google',
      sector: 'Product / Tech',
      website: 'https://careers.google.com',
      linkedIn: 'https://linkedin.com/company/google',
      description: 'Global technology leader specializing in search, cloud computing, AI, and software.',
      hqLocation: 'Mountain View, CA / Bengaluru, India',
    },
  })

  const tcs = await prisma.company.upsert({
    where: { slug: 'tcs' },
    update: {},
    create: {
      name: 'Tata Consultancy Services',
      slug: 'tcs',
      sector: 'IT Services & Consulting',
      website: 'https://tcs.com',
      linkedIn: 'https://linkedin.com/company/tata-consultancy-services',
      description: 'Leading global IT services, consulting, and business solutions organization.',
      hqLocation: 'Mumbai, India',
    },
  })

  // 5. Admin User
  const adminPassword = await bcrypt.hash('Admin@123', 10)
  await prisma.user.upsert({
    where: { email: 'admin@placetrack.in' },
    update: {},
    create: {
      email: 'admin@placetrack.in',
      name: 'Poornima Placement Admin',
      password: adminPassword,
      role: Role.ADMIN,
      subscriptionTier: SubscriptionTier.ENTERPRISE,
      universityId: poornima.id,
    },
  })

  // 6. Placed Student: Arjun Sharma
  const studentPassword = await bcrypt.hash('Student@123', 10)
  const arjunUser = await prisma.user.upsert({
    where: { email: 'arjun.sharma@poornima.edu.in' },
    update: {},
    create: {
      email: 'arjun.sharma@poornima.edu.in',
      name: 'Arjun Sharma',
      password: studentPassword,
      role: Role.PLACED_STUDENT,
      subscriptionTier: SubscriptionTier.PRO,
      universityId: poornima.id,
    },
  })

  const arjunProfile = await prisma.studentProfile.upsert({
    where: { userId: arjunUser.id },
    update: {},
    create: {
      userId: arjunUser.id,
      universityId: poornima.id,
      courseId: btechCs.id,
      rollNo: '21PUCS104',
      collegeEmail: 'arjun.sharma@poornima.edu.in',
      passingYear: 2024,
      batch: '2020-2024',
      bio: 'Incoming SDE-1 at Google India. Passionate about distributed systems, Raft consensus, and concurrent systems in Go.',
      linkedIn: 'https://linkedin.com/in/arjun-sharma-google',
      github: 'https://github.com/arjun-sharma-dev',
      portfolio: 'https://arjunsharma.dev',
      skills: ['Go', 'gRPC', 'Distributed Systems', 'Raft', 'Next.js', 'Kafka', 'Docker'],
      isPlaced: true,
      placedAt: 'Google',
      ctc: 42.0,
      role: 'Software Development Engineer (SDE-1)',
      profileVisible: true,
      resumePublic: true,
    },
  })

  // 7. Placed Senior Projects
  await prisma.project.createMany({
    data: [
      {
        studentId: arjunProfile.id,
        title: 'Distributed Real-Time Log Processing Pipeline',
        description: 'Append-only distributed log ingestion broker in Go and gRPC with Raft consensus protocol. Integrated Apache Kafka for partition re-balancing.',
        techStack: ['Go', 'gRPC', 'Raft Consensus', 'Kafka', 'RocksDB'],
        githubUrl: 'https://github.com/arjun-sharma-dev/distributed-log-broker',
        liveUrl: 'https://log-pipeline-demo.vercel.app',
        year: 2024,
      },
      {
        studentId: arjunProfile.id,
        title: 'Campus Peer-to-Peer Code Collaboration Engine',
        description: 'Collaborative code editor built for Poornima University labs using CRDTs to resolve editing conflicts with sub-50ms latency.',
        techStack: ['TypeScript', 'WebSockets', 'CRDT', 'Redis', 'React'],
        githubUrl: 'https://github.com/arjun-sharma-dev/peer-code-collab',
        year: 2023,
      },
    ],
  })

  // 8. Interview Questions
  await prisma.interviewQuestion.createMany({
    data: [
      {
        companyId: google.id,
        universityId: poornima.id,
        year: 2024,
        round: 'Round 1: Data Structures & Algorithms',
        type: QuestionType.CODING,
        difficulty: QuestionDifficulty.HARD,
        question: 'Given an infinite stream of 2D coordinates representing drone telemetry data, design a data structure to return the top-K densest clusters within a bounding radius in O(log N) time.',
        answer: 'Solution implemented using Quad-Trees combined with Min-Heap for k-nearest cluster boundary queries.',
        upvotes: 48,
        isVerified: true,
      },
      {
        companyId: tcs.id,
        universityId: poornima.id,
        year: 2024,
        round: 'Round 2: Technical Interview',
        type: QuestionType.TECHNICAL,
        difficulty: QuestionDifficulty.MEDIUM,
        question: 'Explain the internal difference between DENSE_RANK() and RANK() window functions in PostgreSQL with a salary ranking example.',
        answer: 'RANK() skips rank numbers after ties (e.g., 1, 2, 2, 4), whereas DENSE_RANK() assigns consecutive rank numbers without skipping (e.g., 1, 2, 2, 3).',
        upvotes: 29,
        isVerified: true,
      },
    ],
  })

  console.log('✅ Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
