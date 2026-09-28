'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Building2, GraduationCap, Mail, Linkedin, Github, Globe,
  FileText, Lock, ArrowLeft, MessageSquare, Download, Sparkles,
  MapPin, Calendar, TrendingUp, Code, Award, CheckCircle2,
  ExternalLink, Star, Briefcase, BookOpen
} from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface CandidateData {
  id: string
  name: string
  email: string
  avatar: string
  company: string
  role: string
  ctc: number
  year: number
  course: string
  department: string
  university: string
  location: string
  bio: string
  skills: string[]
  linkedin: string
  github: string
  portfolio: string
  rollNumber: string
  cgpa: number
  achievements: string[]
  projects: {
    title: string
    description: string
    techStack: string[]
    github: string
    live: string
  }[]
  interviewExperience: {
    round: string
    description: string
    difficulty: string
    tips: string
  }[]
}

// ─── All Candidate Data ───────────────────────────────────────────────────────

const CANDIDATES_DATA: Record<string, CandidateData> = {
  '1': {
    id: '1', name: 'Arjun Sharma', email: 'arjun.sharma@poornima.edu.in', avatar: 'AS',
    company: 'Google', role: 'Software Engineer', ctc: 42.0, year: 2024,
    course: 'B.Tech CSE', department: 'Computer Science & Engineering',
    university: 'Poornima University', location: 'Bangalore',
    bio: 'Passionate full-stack developer with a strong foundation in system design and distributed computing. Selected through Google\'s rigorous interview process involving 5 rounds. Active open-source contributor and competitive programmer with 1800+ rating on Codeforces.',
    skills: ['React', 'Node.js', 'Python', 'System Design', 'TypeScript', 'Go', 'Kubernetes', 'PostgreSQL'],
    linkedin: 'https://linkedin.com/in/arjun-sharma', github: 'https://github.com/arjunsharma',
    portfolio: 'https://arjunsharma.dev', rollNumber: '21CS001', cgpa: 9.2,
    achievements: ['Google Code Jam Qualifier 2023', 'Smart India Hackathon Winner', 'Dean\'s List 6 semesters', 'Published paper on distributed caching at IEEE ICSE'],
    projects: [
      { title: 'Distributed Task Scheduler', description: 'Built a fault-tolerant distributed task scheduling system using Go and Redis, handling 10K+ concurrent jobs with automatic retry and dead-letter queues.', techStack: ['Go', 'Redis', 'gRPC', 'Docker'], github: 'https://github.com/arjunsharma/task-scheduler', live: '' },
      { title: 'Real-time Collaboration Editor', description: 'Google Docs clone with CRDT-based conflict resolution, supporting real-time multi-user editing with WebSocket sync and offline support.', techStack: ['React', 'TypeScript', 'Y.js', 'WebSocket', 'Node.js'], github: 'https://github.com/arjunsharma/collab-editor', live: 'https://collab-edit.vercel.app' },
      { title: 'ML-based Code Review Bot', description: 'GitHub App that automatically reviews pull requests using a fine-tuned CodeBERT model, detecting bugs, style violations, and suggesting improvements.', techStack: ['Python', 'PyTorch', 'FastAPI', 'GitHub API'], github: 'https://github.com/arjunsharma/code-review-bot', live: '' },
    ],
    interviewExperience: [
      { round: 'Online Assessment', description: 'Two coding problems on HackerRank — one medium (graph traversal) and one hard (dynamic programming with bitmask). 90 minutes total.', difficulty: 'Hard', tips: 'Practice Leetcode hard problems, especially graph and DP. Time management is crucial.' },
      { round: 'Phone Screen', description: 'One medium-level coding question on data structures. Asked to optimize from O(n²) to O(n log n). Followed by behavioral questions.', difficulty: 'Medium', tips: 'Think out loud, explain your approach before coding. Interviewers want to see your thought process.' },
      { round: 'Onsite Round 1 - Coding', description: 'Two problems: Binary tree serialization and a sliding window problem. Had to write production-quality code with edge cases.', difficulty: 'Hard', tips: 'Cover ALL edge cases — null inputs, empty arrays, single elements. Write clean, readable code.' },
      { round: 'Onsite Round 2 - System Design', description: 'Design a URL shortener like bit.ly that handles 100M+ daily redirects. Discussed database sharding, caching, analytics pipeline.', difficulty: 'Hard', tips: 'Study Designing Data-Intensive Applications book. Practice drawing architecture diagrams clearly.' },
      { round: 'Onsite Round 3 - Behavioral (Googleyness)', description: 'Questions about teamwork, handling ambiguity, disagreements with teammates, and a time I failed and learned from it.', difficulty: 'Medium', tips: 'Use STAR format. Have 5-6 stories ready covering leadership, failure, conflict, and innovation.' },
    ],
  },
  '2': {
    id: '2', name: 'Priya Patel', email: 'priya.patel@poornima.edu.in', avatar: 'PP',
    company: 'Microsoft', role: 'SDE-1', ctc: 38.5, year: 2024,
    course: 'B.Tech CSE', department: 'Computer Science & Engineering',
    university: 'Poornima University', location: 'Hyderabad',
    bio: 'Cloud computing enthusiast with expertise in Azure services and backend development. Won Microsoft Imagine Cup 2023 India Finals. Active technical blogger with 50K+ monthly readers.',
    skills: ['C++', 'Azure', 'TypeScript', 'Algorithms', '.NET', 'Docker', 'SQL Server', 'React'],
    linkedin: 'https://linkedin.com/in/priya-patel', github: 'https://github.com/priyapatel',
    portfolio: 'https://priyapatel.tech', rollNumber: '21CS002', cgpa: 9.0,
    achievements: ['Microsoft Imagine Cup India Finalist', 'Azure Fundamentals Certified', '3x Dean\'s List', 'Technical Lead - Coding Club'],
    projects: [
      { title: 'Cloud-Native CRM System', description: 'Enterprise CRM built on Azure with microservices architecture, Azure Functions, and CosmosDB for global distribution.', techStack: ['C#', '.NET', 'Azure Functions', 'CosmosDB', 'React'], github: 'https://github.com/priyapatel/cloud-crm', live: '' },
      { title: 'AI-Powered Resume Parser', description: 'NLP-based resume parser that extracts structured data from PDF/DOCX resumes with 95% accuracy using spaCy and custom NER models.', techStack: ['Python', 'spaCy', 'FastAPI', 'Azure Cognitive Services'], github: 'https://github.com/priyapatel/resume-parser', live: '' },
    ],
    interviewExperience: [
      { round: 'Online Assessment', description: 'Three coding problems of increasing difficulty on Codility. Focused on arrays, strings, and trees.', difficulty: 'Medium', tips: 'Focus on correctness first, then optimization. Microsoft values clean code.' },
      { round: 'Technical Round 1', description: 'LLD problem — design a parking lot system. Then a coding question on graph BFS.', difficulty: 'Medium', tips: 'Practice Low-Level Design problems. Know SOLID principles well.' },
      { round: 'Technical Round 2', description: 'System design — design OneDrive file sync. Discussed conflict resolution, versioning, delta sync.', difficulty: 'Hard', tips: 'Understand how file sync works. Study CAP theorem and eventual consistency.' },
      { round: 'HR/Managerial', description: 'Growth mindset questions, why Microsoft, handling feedback, teamwork scenarios.', difficulty: 'Easy', tips: 'Research Microsoft\'s culture and growth mindset philosophy. Be genuine.' },
    ],
  },
  '3': {
    id: '3', name: 'Amit Verma', email: 'amit.verma@poornima.edu.in', avatar: 'AV',
    company: 'Amazon', role: 'SDE-1', ctc: 35.0, year: 2024,
    course: 'B.Tech IT', department: 'Information Technology',
    university: 'Poornima University', location: 'Bangalore',
    bio: 'Backend developer specializing in microservices and distributed systems. Built scalable APIs handling 50K+ requests/second. Strong advocate of clean architecture and test-driven development.',
    skills: ['Java', 'AWS', 'Microservices', 'DSA', 'Spring Boot', 'DynamoDB', 'Kafka', 'Redis'],
    linkedin: 'https://linkedin.com/in/amit-verma', github: 'https://github.com/amitverma',
    portfolio: '', rollNumber: '21IT003', cgpa: 8.8,
    achievements: ['AWS Solutions Architect Certified', 'HackerRank 5-star Java', 'Open Source Contributor - Apache Kafka', 'Top 1% on LeetCode'],
    projects: [
      { title: 'E-Commerce Microservices Platform', description: 'Complete e-commerce backend with 8 microservices — order, inventory, payment, notification, user, catalog, search, and analytics services.', techStack: ['Java', 'Spring Boot', 'Kafka', 'DynamoDB', 'Redis', 'Docker'], github: 'https://github.com/amitverma/ecommerce-ms', live: '' },
      { title: 'Real-time Analytics Pipeline', description: 'Stream processing pipeline using Kafka Streams for real-time clickstream analytics, processing 1M+ events/minute.', techStack: ['Java', 'Kafka Streams', 'Elasticsearch', 'Grafana'], github: 'https://github.com/amitverma/analytics-pipeline', live: '' },
    ],
    interviewExperience: [
      { round: 'Online Assessment', description: 'Two coding questions + work simulation. Coding involved trees and dynamic programming. Work simulation tested Amazon Leadership Principles.', difficulty: 'Medium', tips: 'Learn all 16 Amazon Leadership Principles. They are tested at EVERY stage.' },
      { round: 'Technical Round 1 (DSA)', description: 'Two hard-level coding problems — one on graph shortest path, one on trie-based autocomplete.', difficulty: 'Hard', tips: 'Amazon loves graph problems and trees. Practice Dijkstra, BFS/DFS, trie thoroughly.' },
      { round: 'Technical Round 2 (System Design)', description: 'Design Amazon\'s order tracking system. Discussed event-driven architecture, SQS, SNS, state machines.', difficulty: 'Hard', tips: 'Know AWS services well. Amazon expects you to use their cloud stack in designs.' },
      { round: 'Bar Raiser', description: 'Mix of behavioral (Leadership Principles) and one final coding question. Very thorough on "Dive Deep" and "Ownership" principles.', difficulty: 'Hard', tips: 'The Bar Raiser can reject you even if other rounds go well. Prepare LP stories very carefully.' },
    ],
  },
  '4': {
    id: '4', name: 'Sneha Gupta', email: 'sneha.gupta@poornima.edu.in', avatar: 'SG',
    company: 'Adobe', role: 'Member of Technical Staff', ctc: 32.0, year: 2024,
    course: 'B.Tech CSE', department: 'Computer Science & Engineering',
    university: 'Poornima University', location: 'Noida',
    bio: 'Frontend specialist with deep expertise in React ecosystem, performance optimization, and accessibility. Contributed to popular open-source component libraries. Passionate about creating beautiful, performant user interfaces.',
    skills: ['JavaScript', 'React', 'GraphQL', 'CSS', 'Next.js', 'Figma', 'Web Performance', 'A11y'],
    linkedin: 'https://linkedin.com/in/sneha-gupta', github: 'https://github.com/snehagupta',
    portfolio: 'https://sneha.design', rollNumber: '21CS004', cgpa: 9.1,
    achievements: ['Google Summer of Code 2023 - Material UI', 'Web Performance Lead at GDG Jaipur', 'Best UI Award - National Hackathon', '100+ GitHub stars on CSS library'],
    projects: [
      { title: 'Accessible Design System', description: 'WAI-ARIA compliant React component library with 30+ components, automatic dark mode, and comprehensive Storybook documentation.', techStack: ['React', 'TypeScript', 'Storybook', 'Radix UI', 'Tailwind CSS'], github: 'https://github.com/snehagupta/a11y-design', live: 'https://a11y-design.vercel.app' },
      { title: 'Creative Portfolio Builder', description: 'Drag-and-drop portfolio builder with live preview, custom themes, and one-click deployment to Vercel.', techStack: ['Next.js', 'DnD Kit', 'Prisma', 'Cloudinary'], github: 'https://github.com/snehagupta/portfolio-builder', live: 'https://portfoliocraft.app' },
    ],
    interviewExperience: [
      { round: 'Online Coding Test', description: 'Three JavaScript-specific questions — closures, async/await patterns, and DOM manipulation without frameworks.', difficulty: 'Medium', tips: 'Adobe tests vanilla JS deeply. Know closures, prototypal inheritance, event loop inside out.' },
      { round: 'Technical Round 1', description: 'Build a Kanban board component from scratch in React within 45 minutes. Drag-and-drop, state management, responsive design.', difficulty: 'Hard', tips: 'Practice building UI components without any library help. Speed and code quality both matter.' },
      { round: 'Technical Round 2', description: 'Web performance optimization case study — given a slow page, identify bottlenecks and implement fixes. Discussed CWV, lazy loading, code splitting.', difficulty: 'Medium', tips: 'Learn Chrome DevTools Performance tab thoroughly. Know Core Web Vitals metrics.' },
      { round: 'HR + Design Thinking', description: 'How would you redesign Adobe Acrobat for mobile? Whiteboard exercise followed by standard behavioral questions.', difficulty: 'Medium', tips: 'Adobe values design thinking. Practice product design exercises.' },
    ],
  },
  '5': {
    id: '5', name: 'Vikram Singh', email: 'vikram.singh@poornima.edu.in', avatar: 'VS',
    company: 'TCS', role: 'Systems Engineer', ctc: 7.5, year: 2024,
    course: 'B.Tech CSE', department: 'Computer Science & Engineering',
    university: 'Poornima University', location: 'Mumbai',
    bio: 'Versatile developer with full-stack experience. Quick learner who enjoys solving complex business problems. Active in university coding community and mentored 20+ juniors for placement preparation.',
    skills: ['Java', 'SQL', 'Agile', 'Testing', 'Spring', 'HTML/CSS', 'JavaScript', 'Git'],
    linkedin: 'https://linkedin.com/in/vikram-singh', github: 'https://github.com/vikramsingh',
    portfolio: '', rollNumber: '21CS005', cgpa: 7.8,
    achievements: ['TCS CodeVita Round 2 Qualifier', 'University Placement Coordinator', 'Java Certification - Oracle'],
    projects: [
      { title: 'Hospital Management System', description: 'Full-stack web app for managing patient records, appointments, billing, and pharmacy with role-based access.', techStack: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'], github: 'https://github.com/vikramsingh/hospital-mgmt', live: '' },
      { title: 'Student Attendance Tracker', description: 'Android app with QR-based attendance marking, integrated with university ERP system via REST APIs.', techStack: ['Kotlin', 'Firebase', 'REST API', 'ZXing'], github: 'https://github.com/vikramsingh/attendance-app', live: '' },
    ],
    interviewExperience: [
      { round: 'TCS NQT (National Qualifier Test)', description: 'Aptitude (verbal, quantitative, reasoning) + programming section with 2 coding questions.', difficulty: 'Easy', tips: 'Practice aptitude from IndiaBIX. For coding, basic array/string manipulation is enough.' },
      { round: 'Technical Interview', description: 'Questions on Java OOP concepts, basic SQL queries, DBMS normalization, and one simple coding question on paper.', difficulty: 'Easy', tips: 'Know your core CS subjects well — DBMS, OS, CN, OOPs. TCS asks theory-based questions.' },
      { round: 'Managerial Round', description: 'Why TCS, relocation willingness, bond acceptance (2 years), strengths/weaknesses, career goals.', difficulty: 'Easy', tips: 'Be honest, show willingness to learn and relocate. TCS values stability and loyalty.' },
      { round: 'HR Round', description: 'Standard HR questions — tell me about yourself, family background, hobbies, salary expectations.', difficulty: 'Easy', tips: 'Keep it simple and professional. Don\'t negotiate salary in mass hiring — it\'s fixed.' },
    ],
  },
}

// Generate fallback data for IDs 6-20
for (let i = 6; i <= 20; i++) {
  const names: Record<number, string> = {
    6: 'Ananya Joshi', 7: 'Rohan Mehta', 8: 'Kavita Rao', 9: 'Amit Tiwari', 10: 'Nisha Agarwal',
    11: 'Deepak Kumar', 12: 'Sakshi Dubey', 13: 'Manish Yadav', 14: 'Riya Sharma', 15: 'Karan Malhotra',
    16: 'Pooja Sinha', 17: 'Aditya Raj', 18: 'Meera Nair', 19: 'Saurabh Pandey', 20: 'Tanvi Kapoor',
  }
  const companies: Record<number, string> = {
    6: 'Infosys', 7: 'Wipro', 8: 'Deloitte', 9: 'HCL', 10: 'Tech Mahindra',
    11: 'Google', 12: 'Microsoft', 13: 'Amazon', 14: 'HDFC Bank', 15: 'Jio',
    16: 'EY', 17: 'Airtel', 18: 'KPMG', 19: 'Adobe', 20: 'TCS',
  }
  const roles: Record<number, string> = {
    6: 'Software Engineer', 7: 'Project Engineer', 8: 'Analyst', 9: 'Software Engineer', 10: 'Associate Engineer',
    11: 'Cloud Engineer', 12: 'Program Manager', 13: 'Data Engineer', 14: 'Technology Analyst', 15: 'Network Engineer',
    16: 'Technology Consultant', 17: 'Software Developer', 18: 'Associate Consultant', 19: 'Frontend Developer', 20: 'Digital Engineer',
  }
  const ctcs: Record<number, number> = {
    6: 6.8, 7: 6.5, 8: 12.0, 9: 5.5, 10: 4.8,
    11: 28.0, 12: 30.0, 13: 26.0, 14: 8.5, 15: 9.0,
    16: 11.5, 17: 8.0, 18: 10.0, 19: 22.0, 20: 7.0,
  }
  const name = names[i]
  const initials = name.split(' ').map(w => w[0]).join('')
  CANDIDATES_DATA[i.toString()] = {
    id: i.toString(), name, email: `${name.toLowerCase().replace(' ', '.')}@poornima.edu.in`, avatar: initials,
    company: companies[i], role: roles[i], ctc: ctcs[i], year: i <= 10 ? (i <= 8 ? 2024 : 2023) : (i <= 15 ? 2024 : 2023),
    course: 'B.Tech CSE', department: 'Computer Science & Engineering',
    university: 'Poornima University', location: 'Bangalore',
    bio: `Talented engineer placed at ${companies[i]} as ${roles[i]}. Passionate about technology and continuous learning with strong academic background from Poornima University.`,
    skills: ['JavaScript', 'Python', 'SQL', 'Git', 'React', 'Node.js'],
    linkedin: `https://linkedin.com/in/${name.toLowerCase().replace(' ', '-')}`,
    github: `https://github.com/${name.toLowerCase().replace(' ', '')}`,
    portfolio: '', rollNumber: `21CS0${i.toString().padStart(2, '0')}`, cgpa: 7.5 + Math.random() * 1.5,
    achievements: ['University Topper', 'Hackathon Participant', 'Coding Contest Qualifier'],
    projects: [
      { title: 'Web Application Project', description: `Built a full-stack web application with modern tech stack during internship at ${companies[i]}.`, techStack: ['React', 'Node.js', 'MongoDB'], github: '#', live: '' },
      { title: 'Machine Learning Project', description: 'Implemented ML models for data classification and prediction with 92% accuracy.', techStack: ['Python', 'Scikit-learn', 'Pandas'], github: '#', live: '' },
    ],
    interviewExperience: [
      { round: 'Online Assessment', description: 'Standard coding + aptitude test conducted on HackerRank platform.', difficulty: 'Medium', tips: 'Practice coding problems on LeetCode and HackerRank regularly.' },
      { round: 'Technical Interview', description: 'Core CS questions on DSA, OOP, DBMS, and one live coding problem.', difficulty: 'Medium', tips: 'Revise all core CS subjects. Be ready to code on a shared editor.' },
      { round: 'HR Round', description: 'Behavioral questions about teamwork, goals, and strengths.', difficulty: 'Easy', tips: 'Be confident and honest. Research the company before the interview.' },
    ],
  }
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function CandidateDetailPage() {
  const { data: session, status } = useSession()
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const [activeTab, setActiveTab] = useState<'about' | 'projects' | 'resume' | 'interview'>('about')

  const candidate = CANDIDATES_DATA[id]

  const tier: string = (session?.user as any)?.subscriptionTier ?? 'FREE'
  const canViewProjects = tier !== 'FREE'
  const canViewResume = tier === 'PRO' || tier === 'ENTERPRISE'

  function formatCTC(ctc: number): string {
    if (ctc >= 100) return `₹${(ctc / 100).toFixed(1)} Cr`
    return `₹${ctc.toFixed(1)} LPA`
  }

  // Loading
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#0A0F1E] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  // Not found
  if (!candidate) {
    return (
      <div className="min-h-screen bg-[#0A0F1E] flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Candidate Not Found</h2>
          <p className="text-white/50 mb-4">The candidate profile you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/candidates" className="px-4 py-2 bg-blue-600 rounded-lg text-sm hover:bg-blue-500 transition">
            ← Back to Candidates
          </Link>
        </div>
      </div>
    )
  }

  const tabs: { key: 'about' | 'projects' | 'resume' | 'interview'; label: string; icon: any; gated: boolean }[] = [
    { key: 'about', label: 'About', icon: BookOpen, gated: false },
    { key: 'projects', label: 'Projects', icon: Code, gated: !canViewProjects },
    { key: 'resume', label: 'Resume', icon: FileText, gated: !canViewResume },
    { key: 'interview', label: 'Interview Tips', icon: Sparkles, gated: false },
  ]

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      {/* ── Back Button ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-4">
        <Link href="/candidates" className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition">
          <ArrowLeft className="w-4 h-4" /> Back to Candidates
        </Link>
      </div>

      {/* ── Profile Header ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        <div className="relative rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-white/10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl md:text-3xl shadow-xl shadow-blue-500/20 flex-shrink-0">
              {candidate.avatar}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">{candidate.name}</h1>
                  <p className="text-white/60 mt-1">{candidate.role}</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">Placed</span>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-1.5 text-sm text-white/70">
                  <Building2 className="w-4 h-4 text-blue-400" /> {candidate.company}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-white/70">
                  <MapPin className="w-4 h-4 text-white/40" /> {candidate.location}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-white/70">
                  <Calendar className="w-4 h-4 text-white/40" /> Batch {candidate.year}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-white/70">
                  <GraduationCap className="w-4 h-4 text-white/40" /> {candidate.course}
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  {tier === 'FREE' ? (
                    <span className="text-white/30 flex items-center gap-1"><Lock className="w-3 h-3" /> Upgrade to view CTC</span>
                  ) : (
                    <span className="text-amber-400">{formatCTC(candidate.ctc)}</span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 mt-4">
                {candidate.linkedin && (
                  <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-[#0A66C2] text-xs font-medium hover:bg-[#0A66C2]/30 transition">
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                )}
                {candidate.github && (
                  <a href={candidate.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-medium hover:bg-white/10 transition">
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                )}
                {candidate.portfolio && (
                  <a href={candidate.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-medium hover:bg-white/10 transition">
                    <Globe className="w-3.5 h-3.5" /> Portfolio
                  </a>
                )}
                <Link href="/ai" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-medium hover:bg-purple-500/30 transition">
                  <Sparkles className="w-3.5 h-3.5" /> Practice for {candidate.company}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex gap-1 border-b border-white/10 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-1.5 px-4 py-3 text-sm font-medium border-b-2 transition whitespace-nowrap ${
                activeTab === tab.key
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-white/50 hover:text-white/70'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {tab.gated && <Lock className="w-3 h-3 text-amber-400" />}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">

        {/* About Tab */}
        {activeTab === 'about' && (
          <div className="space-y-6">
            {/* Bio */}
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5">
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3">About</h3>
              <p className="text-sm text-white/70 leading-relaxed">{candidate.bio}</p>
            </div>

            {/* Academic Details */}
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5">
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3">Academic Details</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div><p className="text-[10px] text-white/30 uppercase">University</p><p className="text-sm text-white/80 mt-0.5">{candidate.university}</p></div>
                <div><p className="text-[10px] text-white/30 uppercase">Department</p><p className="text-sm text-white/80 mt-0.5">{candidate.department}</p></div>
                <div><p className="text-[10px] text-white/30 uppercase">Roll Number</p><p className="text-sm text-white/80 mt-0.5">{candidate.rollNumber}</p></div>
                <div><p className="text-[10px] text-white/30 uppercase">CGPA</p><p className="text-sm text-white/80 mt-0.5">{candidate.cgpa.toFixed(1)} / 10</p></div>
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5">
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {candidate.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-5">
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3">Achievements</h3>
              <ul className="space-y-2">
                {candidate.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                    <Award className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          canViewProjects ? (
            <div className="space-y-4">
              {candidate.projects.map((project, i) => (
                <div key={i} className="rounded-xl bg-white/[0.04] border border-white/10 p-5 hover:bg-white/[0.06] transition">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-white">{project.title}</h3>
                    <div className="flex gap-2 flex-shrink-0">
                      {project.github && project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition">
                          <Github className="w-4 h-4 text-white/60" />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition">
                          <ExternalLink className="w-4 h-4 text-white/60" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-white/60 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-[11px] text-purple-400">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <SubscriptionGate feature="project details" requiredTier="BASIC" />
          )
        )}

        {/* Resume Tab */}
        {activeTab === 'resume' && (
          canViewResume ? (
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-6 text-center">
              <FileText className="w-16 h-16 text-blue-400/50 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Resume Available</h3>
              <p className="text-sm text-white/50 mb-4">Download {candidate.name}&apos;s verified resume in PDF format</p>
              <button
                onClick={() => alert(`Downloading ${candidate.name}'s resume...`)}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center gap-2 mx-auto shadow-lg shadow-blue-600/30 transition"
              >
                <Download className="w-4 h-4" /> Download Resume (PDF)
              </button>
              <p className="text-[11px] text-white/30 mt-3">Watermarked for: {session?.user?.name || session?.user?.email || 'User'}</p>
            </div>
          ) : (
            <SubscriptionGate feature="resume download" requiredTier="PRO" />
          )
        )}

        {/* Interview Tips Tab */}
        {activeTab === 'interview' && (
          <div className="space-y-4">
            <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4 mb-4">
              <div className="flex items-center gap-2 mb-1">
                <Briefcase className="w-4 h-4 text-blue-400" />
                <h3 className="text-sm font-semibold text-blue-400">Interview at {candidate.company}</h3>
              </div>
              <p className="text-xs text-white/50">{candidate.interviewExperience.length} rounds • Shared by {candidate.name}</p>
            </div>

            {candidate.interviewExperience.map((exp, i) => (
              <div key={i} className="rounded-xl bg-white/[0.04] border border-white/10 p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400">{i + 1}</span>
                    <h4 className="font-semibold text-white text-sm">{exp.round}</h4>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                    exp.difficulty === 'Hard' ? 'bg-red-500/20 text-red-400' :
                    exp.difficulty === 'Medium' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {exp.difficulty}
                  </span>
                </div>
                <p className="text-sm text-white/60 mb-3">{exp.description}</p>
                <div className="bg-green-500/5 border border-green-500/10 rounded-lg p-3">
                  <p className="text-xs text-green-400 font-medium mb-1">💡 Tips from {candidate.name}:</p>
                  <p className="text-xs text-white/60">{exp.tips}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Subscription Gate Component ──────────────────────────────────────────────

function SubscriptionGate({ feature, requiredTier }: { feature: string; requiredTier: string }) {
  return (
    <div className="rounded-xl bg-white/[0.04] border border-white/10 p-10 text-center">
      <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-4">
        <Lock className="w-8 h-8 text-amber-400" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Upgrade to {requiredTier}+</h3>
      <p className="text-sm text-white/50 mb-4">Access to {feature} requires a {requiredTier} or higher subscription</p>
      <Link
        href="/subscription"
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold hover:opacity-90 shadow-lg shadow-amber-500/20 transition"
      >
        <Star className="w-4 h-4" /> Upgrade Now
      </Link>
    </div>
  )
}
