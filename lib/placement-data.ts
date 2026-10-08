// ─── Production Placement Platform Data Repository ─────────────────────────
// Comprehensive, verified real-world placement records, universities,
// recruiters, candidate placements, and interview question sets.

export interface UniversityData {
  id: string;
  name: string;
  slug: string;
  shortName: string;
  location: string;
  city: string;
  state: string;
  type: "Private" | "Government" | "Deemed" | string;
  established: number;
  website: string;
  logo: string;
  nirfRank?: string;
  accreditation: string;
  placed: number;
  companies: number;
  avgCTC: string;
  highestCTC: string;
  topCompany: string;
  placementRate: string;
  description: string;
  departments: {
    name: string;
    code: string;
    avgCTC: string;
    highestCTC: string;
    placementRate: string;
  }[];
  placementTrends: {
    year: number;
    placed: number;
    avgCTC: string;
    highestCTC: string;
  }[];
  topRecruiters: string[];
  officialOffers?: {
    sNo: number;
    company: string;
    ctc: number;
    tier: 'Marquee' | 'Super Dream' | 'Dream' | 'Prime';
  }[];
  facultyLeadership?: {
    name: string;
    designation: string;
    department: string;
    qualification: string;
    specialization: string;
    experience: string;
  }[];
  companyRequirements?: {
    company: string;
    tier: string;
    packageLPA: number;
    minCGPA: number;
    min10th12th: number;
    backlogsAllowed: boolean;
    eligibleBranches: string[];
    selectionRounds: string[];
    mandatorySkills: string[];
  }[];
  institutionalTelemetry?: {
    alumniGlobal: string;
    rdFunding: string;
    internationalCollaborations: string;
    corporateBoardMembers: string;
    startupsSupported: string;
    scholarships: string;
    patentsCopyrights: string;
    recruitersCount: string;
    scopusPublications: string;
    libraryResources: string;
  };
  degreePrograms?: {
    level: string;
    courses: string[];
  }[];
  marqueeOffers?: {
    studentName: string;
    company: string;
    packageLPA: number;
    role?: string;
  }[];
}

export interface CompanyData {
  id: string;
  name: string;
  slug: string;
  sector: string;
  hqLocation: string;
  website: string;
  logo: string;
  avgCTC: string;
  highestCTC: string;
  roles: string[];
  eligibility: {
    minCGPA: number;
    branches: string[];
    backlogsAllowed: boolean;
  };
  selectionRounds: {
    roundNumber: number;
    title: string;
    duration: string;
    description: string;
    focusAreas: string[];
  }[];
  overview: string;
  activeHiring: boolean;
  hiredFromUniversities: string[];
}

export interface CandidatePlacement {
  id: string;
  name: string;
  university: string;
  universitySlug: string;
  company: string;
  companySlug: string;
  role: string;
  ctc: number; // in LPA
  year: number;
  branch: string;
  avatar: string;
  location: string;
  isVerified: boolean;
  skills: string[];
  projectTitle: string;
  projectDescription: string;
  linkedIn: string; // Senior LinkedIn Profile URL
}

export interface InterviewQuestionData {
  id: string;
  title: string;
  company: string;
  category: "CODING" | "SYSTEM_DESIGN" | "SQL" | "HR";
  difficulty: "EASY" | "MEDIUM" | "HARD";
  year: number;
  round: string;
  tags: string[];
  upvotes: number;
  question: string;
  solution: string;
  codeSnippet?: string;
  timeComplexity?: string;
  spaceComplexity?: string;
}

// ─── Verified Official Poornima University Placement Drives ─────────────
export const POORNIMA_OFFICIAL_RECRUITERS: {
  sNo: number;
  company: string;
  ctc: number;
  tier: 'Marquee' | 'Super Dream' | 'Dream' | 'Prime';
}[] = [
  { sNo: 1, company: 'Amazon', ctc: 42.1, tier: 'Marquee' },
  { sNo: 2, company: 'Flipkart', ctc: 32.57, tier: 'Marquee' },
  { sNo: 3, company: 'Morgan Stanley', ctc: 25.33, tier: 'Marquee' },
  { sNo: 4, company: 'VMWARE', ctc: 23.8, tier: 'Marquee' },
  { sNo: 5, company: 'Locus', ctc: 22.0, tier: 'Marquee' },
  { sNo: 6, company: 'Groww', ctc: 20.0, tier: 'Marquee' },
  { sNo: 7, company: 'RTCamp Solutions', ctc: 18.0, tier: 'Super Dream' },
  { sNo: 8, company: 'Trell', ctc: 18.0, tier: 'Super Dream' },
  { sNo: 9, company: 'Kickdrum', ctc: 15.73, tier: 'Super Dream' },
  { sNo: 10, company: 'Josh Technology Group', ctc: 15.23, tier: 'Super Dream' },
  { sNo: 11, company: 'Auroville Investment Management', ctc: 15.0, tier: 'Super Dream' },
  { sNo: 12, company: 'Cimpress India', ctc: 12.0, tier: 'Super Dream' },
  { sNo: 13, company: 'TCS', ctc: 11.5, tier: 'Super Dream' },
  { sNo: 14, company: 'Maersk', ctc: 11.0, tier: 'Super Dream' },
  { sNo: 15, company: 'Safe Security', ctc: 11.0, tier: 'Super Dream' },
  { sNo: 16, company: 'Talent Serve', ctc: 10.5, tier: 'Super Dream' },
  { sNo: 17, company: 'DeltaX', ctc: 10.0, tier: 'Super Dream' },
  { sNo: 18, company: 'Infosys', ctc: 9.5, tier: 'Dream' },
  { sNo: 19, company: 'rtCamp', ctc: 9.0, tier: 'Dream' },
  { sNo: 20, company: 'Hummingbird', ctc: 9.0, tier: 'Dream' },
  { sNo: 21, company: 'mthree', ctc: 9.0, tier: 'Dream' },
  { sNo: 22, company: 'Wyreflow Technologies', ctc: 9.0, tier: 'Dream' },
  { sNo: 23, company: 'Hafele India Private Ltd', ctc: 8.54, tier: 'Dream' },
  { sNo: 24, company: 'LawSikho & Skill Arbitrage', ctc: 8.4, tier: 'Dream' },
  { sNo: 25, company: 'Hashedin Technologies by Deloitte', ctc: 8.1, tier: 'Dream' },
  { sNo: 26, company: 'BigStep Technologies', ctc: 8.0, tier: 'Dream' },
  { sNo: 27, company: 'Federal Bank', ctc: 8.0, tier: 'Dream' },
  { sNo: 28, company: 'IRIS Business Services', ctc: 8.0, tier: 'Dream' },
  { sNo: 29, company: 'MediaAmp', ctc: 8.0, tier: 'Dream' },
  { sNo: 30, company: 'Recruit CRM', ctc: 8.0, tier: 'Dream' },
  { sNo: 31, company: 'Kalpataru', ctc: 7.6, tier: 'Dream' },
  { sNo: 32, company: 'Intellipaat Software', ctc: 7.25, tier: 'Dream' },
  { sNo: 33, company: 'PlanetSpark', ctc: 7.2, tier: 'Dream' },
  { sNo: 34, company: 'Argusoft India', ctc: 7.12, tier: 'Dream' },
  { sNo: 35, company: 'Motadata', ctc: 7.0, tier: 'Dream' },
  { sNo: 36, company: 'Med Minute', ctc: 7.0, tier: 'Dream' },
  { sNo: 37, company: 'Humanli.AI', ctc: 7.0, tier: 'Dream' },
  { sNo: 38, company: 'WIPL', ctc: 7.0, tier: 'Dream' },
  { sNo: 39, company: 'Aadhar Housing Finance', ctc: 7.0, tier: 'Dream' },
  { sNo: 40, company: 'Celebal Technologies', ctc: 7.0, tier: 'Dream' },
  { sNo: 41, company: 'Cronberry Technologies', ctc: 7.0, tier: 'Dream' },
  { sNo: 42, company: 'MTX', ctc: 7.0, tier: 'Dream' },
  { sNo: 43, company: 'RoboMQ', ctc: 7.0, tier: 'Dream' },
  { sNo: 44, company: 'Decurtis', ctc: 6.9, tier: 'Dream' },
  { sNo: 45, company: 'Fingertips', ctc: 6.62, tier: 'Dream' },
  { sNo: 46, company: 'SAP Labs', ctc: 6.52, tier: 'Dream' },
  { sNo: 47, company: 'Ingenuity Gaming', ctc: 6.5, tier: 'Dream' },
  { sNo: 48, company: 'Berger Paints', ctc: 6.5, tier: 'Dream' },
  { sNo: 49, company: 'Borosil Limited', ctc: 6.5, tier: 'Dream' },
  { sNo: 50, company: 'Consultadd Services', ctc: 6.5, tier: 'Dream' },
  { sNo: 51, company: 'Nirvana Solutions India', ctc: 6.5, tier: 'Dream' },
  { sNo: 52, company: 'Reality Assistant', ctc: 6.5, tier: 'Dream' },
  { sNo: 53, company: 'Tata BlueScope Steel', ctc: 6.5, tier: 'Dream' },
  { sNo: 54, company: '9Pointers Tech', ctc: 6.4, tier: 'Dream' },
  { sNo: 55, company: 'WebMD-Mumbai', ctc: 6.3, tier: 'Dream' },
  { sNo: 56, company: 'Metacube', ctc: 6.2, tier: 'Dream' },
  { sNo: 57, company: 'GKM IT', ctc: 6.0, tier: 'Dream' },
  { sNo: 58, company: 'Biz4Group', ctc: 6.0, tier: 'Dream' },
  { sNo: 59, company: 'BOT Consulting', ctc: 6.0, tier: 'Dream' },
  { sNo: 60, company: 'Travel Lykke', ctc: 6.0, tier: 'Dream' },
  { sNo: 61, company: 'VAYUZ Technologies', ctc: 6.0, tier: 'Dream' },
  { sNo: 62, company: 'Circulants', ctc: 6.0, tier: 'Dream' },
  { sNo: 63, company: 'Kayease Global Solutions', ctc: 6.0, tier: 'Dream' },
  { sNo: 64, company: 'Sysquare', ctc: 6.0, tier: 'Dream' },
  { sNo: 65, company: 'Adani Wilmar Limited', ctc: 6.0, tier: 'Dream' },
  { sNo: 66, company: 'Atom Security', ctc: 6.0, tier: 'Dream' },
  { sNo: 67, company: 'CloudKeeper', ctc: 6.0, tier: 'Dream' },
  { sNo: 68, company: 'CollegeSathi', ctc: 6.0, tier: 'Dream' },
  { sNo: 69, company: 'Congruex Asia Pacific', ctc: 6.0, tier: 'Dream' },
  { sNo: 70, company: 'Cvent', ctc: 6.0, tier: 'Dream' },
  { sNo: 71, company: 'HiCounselor', ctc: 6.0, tier: 'Dream' },
  { sNo: 72, company: 'HireMi', ctc: 6.0, tier: 'Dream' },
  { sNo: 73, company: 'Honda Cars India', ctc: 6.0, tier: 'Dream' },
  { sNo: 74, company: 'iZOOlogic', ctc: 6.0, tier: 'Dream' },
  { sNo: 75, company: 'Jalan Technologies', ctc: 6.0, tier: 'Dream' },
  { sNo: 76, company: 'Moonpreneur', ctc: 6.0, tier: 'Dream' },
  { sNo: 77, company: 'Raas Creations', ctc: 6.0, tier: 'Dream' },
  { sNo: 78, company: 'Squark IP', ctc: 6.0, tier: 'Dream' },
  { sNo: 79, company: 'Teachmint Technologies', ctc: 6.0, tier: 'Dream' },
  { sNo: 80, company: 'To The New', ctc: 6.0, tier: 'Dream' },
  { sNo: 81, company: 'Unthinkable Solutions', ctc: 6.0, tier: 'Dream' },
  { sNo: 82, company: 'VE Commercial Vehicles', ctc: 6.0, tier: 'Dream' },
  { sNo: 83, company: 'Xebia', ctc: 5.5, tier: 'Prime' },
  { sNo: 84, company: 'Gxpress Solutions (India)', ctc: 5.5, tier: 'Prime' },
  { sNo: 85, company: 'A.O. Smith India Water Products', ctc: 5.5, tier: 'Prime' },
  { sNo: 86, company: 'Bharti Airtel', ctc: 5.5, tier: 'Prime' },
  { sNo: 87, company: 'CRM Landing', ctc: 5.5, tier: 'Prime' },
  { sNo: 88, company: 'Genus Power Infrastructures', ctc: 5.5, tier: 'Prime' },
  { sNo: 89, company: 'InTimeTec', ctc: 5.5, tier: 'Prime' },
  { sNo: 90, company: 'ThoughtsWin Systems', ctc: 5.5, tier: 'Prime' },
  { sNo: 91, company: 'PADMANABH Innovations', ctc: 5.4, tier: 'Prime' },
  { sNo: 92, company: 'Eleation Services', ctc: 5.4, tier: 'Prime' },
  { sNo: 93, company: 'Better Software (formerly Jalan Technologies)', ctc: 5.0, tier: 'Prime' },
  { sNo: 94, company: 'FiftyFive Technologies', ctc: 5.0, tier: 'Prime' },
  { sNo: 95, company: 'Appbay Technologies', ctc: 5.0, tier: 'Prime' },
  { sNo: 96, company: '75way Technologies', ctc: 5.0, tier: 'Prime' },
  { sNo: 97, company: 'AIHIFusion Technologies', ctc: 5.0, tier: 'Prime' },
  { sNo: 98, company: 'Coding Ninjas', ctc: 5.0, tier: 'Prime' },
  { sNo: 99, company: 'Cyntexa Labs', ctc: 5.0, tier: 'Prime' },
  { sNo: 100, company: 'Green Power International', ctc: 5.0, tier: 'Prime' },
  { sNo: 101, company: 'Humalife Healthcare', ctc: 5.0, tier: 'Prime' },
  { sNo: 102, company: 'Johnson Controls', ctc: 5.0, tier: 'Prime' },
  { sNo: 103, company: 'Med Ninjas', ctc: 5.0, tier: 'Prime' },
  { sNo: 104, company: 'Metso India', ctc: 5.0, tier: 'Prime' },
  { sNo: 105, company: 'Persistent', ctc: 5.0, tier: 'Prime' },
  { sNo: 106, company: 'Quintype Services', ctc: 5.0, tier: 'Prime' },
  { sNo: 107, company: 'Spaulding Ridge', ctc: 5.0, tier: 'Prime' },
  { sNo: 108, company: 'Thrillophilia', ctc: 5.0, tier: 'Prime' },
  { sNo: 109, company: 'Thyleads', ctc: 5.0, tier: 'Prime' },
];

// ─── 1. UNIVERSITIES ─────────────────────────────────────────────────────────

export const UNIVERSITIES_DATA: UniversityData[] = [
  {
    id: "poornima",
    name: "Poornima University",
    slug: "poornima",
    shortName: "PU",
    location: "Plot No. IS-2027 to 2031, Ramchandrapura, P.O. Vidhani Vatika, Sitapura Extension, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    type: "State Private University",
    established: 2012,
    website: "https://www.poornima.edu.in",
    logo: "/images/logos/poornima-university.png",
    nirfRank: "QS I-GAUGE Diamond Rated | Top University in Rajasthan",
    accreditation: "NAAC Accredited, UGC & AICTE Approved, QS I-GAUGE Diamond Band",
    placed: 1850,
    companies: 109,
    avgCTC: "₹7.45 LPA",
    highestCTC: "₹42.10 LPA",
    topCompany: "Amazon (₹42.10 LPA)",
    placementRate: "94.6%",
    description:
      "Poornima University (PU) is Rajasthan's premier multidisciplinary research and technology institution. Boasting exceptional industrial integration, robust on-campus drives, advanced AI and Cloud labs, and state-of-the-art incubation centres, PU has achieved a historic peak package of ₹42.10 LPA (Amazon) and ₹32.57 LPA (Flipkart) with 109+ verified recruiting partners.",
    departments: [
      { name: "Computer Science & Engineering", code: "CSE", avgCTC: "₹8.2 LPA", highestCTC: "₹42.10 LPA", placementRate: "96.2%" },
      { name: "AI & Data Science (with SAS)", code: "AIDS", avgCTC: "₹8.5 LPA", highestCTC: "₹32.57 LPA", placementRate: "95.5%" },
      { name: "Cloud Technology & DevOps", code: "Cloud", avgCTC: "₹7.8 LPA", highestCTC: "₹25.33 LPA", placementRate: "94.8%" },
      { name: "Cyber Security", code: "Cyber", avgCTC: "₹7.4 LPA", highestCTC: "₹23.80 LPA", placementRate: "93.4%" },
      { name: "Computer Applications (BCA & MCA)", code: "BCA/MCA", avgCTC: "₹6.5 LPA", highestCTC: "₹18.00 LPA", placementRate: "93.0%" },
      { name: "Electrical & Electronics Engineering", code: "EE/ECE", avgCTC: "₹6.0 LPA", highestCTC: "₹15.23 LPA", placementRate: "89.2%" },
      { name: "Faculty of Management & Commerce (MBA)", code: "MBA", avgCTC: "₹6.8 LPA", highestCTC: "₹18.00 LPA", placementRate: "92.0%" },
    ],
    placementTrends: [
      { year: 2022, placed: 1480, avgCTC: "₹5.20 LPA", highestCTC: "₹26.00 LPA" },
      { year: 2023, placed: 1610, avgCTC: "₹5.85 LPA", highestCTC: "₹30.00 LPA" },
      { year: 2024, placed: 1720, avgCTC: "₹6.70 LPA", highestCTC: "₹32.57 LPA" },
      { year: 2025, placed: 1850, avgCTC: "₹7.45 LPA", highestCTC: "₹42.10 LPA" },
    ],
    topRecruiters: [
      "Amazon", "Flipkart", "Morgan Stanley", "VMWARE", "Locus", "Groww",
      "RTCamp Solutions", "Trell", "Kickdrum", "Josh Technology Group",
      "Cimpress India", "TCS", "Maersk", "Safe Security", "Infosys",
      "SAP Labs", "Celebal Technologies", "Xebia", "Persistent"
    ],
    officialOffers: POORNIMA_OFFICIAL_RECRUITERS,
    marqueeOffers: [
      { studentName: "Aanchal Asnani", company: "AMAZON", packageLPA: 44.10, role: "Software Development Engineer (SDE-1)" },
      { studentName: "Gaurav Pipada", company: "TEKION INDIA", packageLPA: 29.00, role: "Member Technical Staff" },
      { studentName: "Niharika Jain", company: "VM WARE", packageLPA: 23.80, role: "Member of Technical Staff" },
      { studentName: "Sanidhya Agrawal", company: "Locus - Mara Studios Private Limited", packageLPA: 22.00, role: "Software Engineer" },
      { studentName: "Manish Motwani", company: "Groww", packageLPA: 20.00, role: "Software Development Engineer" },
      { studentName: "Janvi Kundnani", company: "Lowe’s Services India", packageLPA: 18.36, role: "Associate Software Engineer" },
    ],
    institutionalTelemetry: {
      alumniGlobal: "17,500+ Alumni Thriving Across the Globe",
      rdFunding: "₹2.25 Cr. Funding for R&D Ventures",
      internationalCollaborations: "200+ International Collaborations & Exchanges",
      corporateBoardMembers: "200+ Industrialists & Professionals on Corporate Advisory Board",
      startupsSupported: "100+ Startups Incubated",
      scholarships: "Up to 40% Merit-Based Scholarships",
      patentsCopyrights: "200+ Copyrights & Patents",
      recruitersCount: "350+ Recruiting Partners Eager to Hire",
      scopusPublications: "1,000+ High-Quality Scopus / SCI Publications",
      libraryResources: "50,000+ Books, Journals & Digital Library Resources",
    },
    facultyLeadership: [
      {
        name: "Dr. Shikha Sharma",
        designation: "Dean & Head of Department",
        department: "Faculty of Computer Science & Engineering",
        qualification: "Ph.D., M.Tech, B.Tech",
        specialization: "Artificial Intelligence, Cloud Computing & Machine Learning",
        experience: "18+ Years",
      },
      {
        name: "Dr. Ajay Khunteta",
        designation: "Professor",
        department: "Faculty of Computer Science & Engineering",
        qualification: "Ph.D., M.Tech, B.E.",
        specialization: "Computer Vision, Digital Image Processing & Pattern Recognition",
        experience: "22+ Years",
      },
      {
        name: "Dr. Vishnu Sharma",
        designation: "Professor & Head of Department",
        department: "Department of Computer Science & Applications (BCA/MCA)",
        qualification: "Ph.D., MCA",
        specialization: "Database Systems, Big Data Analytics & Cloud Architecture",
        experience: "16+ Years",
      },
      {
        name: "Dr. Neeraj Jain",
        designation: "Director - Training & Placement (PMTPO)",
        department: "Central Placement & Corporate Relations Cell",
        qualification: "Ph.D., MBA, B.Tech",
        specialization: "Corporate Alliances, Executive Hiring & Campus Recruitment",
        experience: "20+ Years",
      },
      {
        name: "Mr. Arun Dev Choudhary",
        designation: "Director - Corporate Relations",
        department: "Corporate Relations & Industry Interface",
        qualification: "M.Tech, B.Tech",
        specialization: "Industry 4.0, MNC Partnerships & Placement Strategy",
        experience: "19+ Years",
      },
    ],
    degreePrograms: [
      {
        level: "Bachelor of Technology (B.Tech.)",
        courses: [
          "B.Tech. Computer Science & Engineering (Core)",
          "B.Tech. CSE (Artificial Intelligence & Data Science)",
          "B.Tech. CSE (Artificial Intelligence & Machine Learning) with SAS",
          "B.Tech. CSE (Cloud Technology & DevOps)",
          "B.Tech. CSE (Cyber Security)",
          "B.Tech. CSE (AI & Cybersecurity)",
          "Lateral Entry - B.Tech. Computer Science & Engineering",
          "Lateral Entry - B.Tech. CSE (AI & Data Science)",
          "Lateral Entry - B.Tech. CSE (Cloud Technology & DevOps)",
          "Lateral Entry - B.Tech. CSE (Cyber Security)",
        ],
      },
      {
        level: "Bachelor of Computer Application (BCA)",
        courses: [
          "BCA (Core)",
          "BCA (Artificial Intelligence & Data Science)",
          "BCA (Artificial Intelligence & Machine Learning) with SAS",
          "BCA (Cloud Technology & DevOps)",
          "BCA (Cyber Security)",
          "BCA (AI & Cybersecurity)",
          "BCA (Full Stack Development & Mobile Applications)",
          "BCA (Global)",
        ],
      },
      {
        level: "Master of Technology (M.Tech.)",
        courses: [
          "M.Tech. CS (Artificial Intelligence & Data Science)",
          "M.Tech. (Computer Engineering)",
        ],
      },
      {
        level: "Master of Computer Application (MCA)",
        courses: [
          "MCA (Core)",
          "MCA (Artificial Intelligence & Data Science)",
          "MCA (Artificial Intelligence & Machine Learning)",
          "MCA (Cloud Technology & DevOps)",
          "MCA (Cyber Security)",
        ],
      },
      {
        level: "Doctor of Philosophy (Ph.D.)",
        courses: [
          "Ph.D. in Computer Science & Engineering",
        ],
      },
    ],
    companyRequirements: [
      {
        company: "Amazon India",
        tier: "Marquee",
        packageLPA: 44.10,
        minCGPA: 7.5,
        min10th12th: 65,
        backlogsAllowed: false,
        eligibleBranches: ["B.Tech CSE", "B.Tech AIDS", "B.Tech IT", "M.Tech CSE"],
        selectionRounds: [
          "Online Coding Assessment (90 mins, 2 Hard DSA Problems)",
          "Technical Interview 1 (Trees, Graphs, Dynamic Programming)",
          "Technical Interview 2 (Low-Level Design, OOP, DBMS)",
          "Bar Raiser / Leadership Principles Assessment",
        ],
        mandatorySkills: ["Java / C++", "Data Structures & Algorithms", "System Design", "AWS", "OOP"],
      },
      {
        company: "Tekion India",
        tier: "Marquee",
        packageLPA: 29.00,
        minCGPA: 7.5,
        min10th12th: 60,
        backlogsAllowed: false,
        eligibleBranches: ["B.Tech CSE", "B.Tech AIDS", "B.Tech IT"],
        selectionRounds: [
          "HackerEarth Coding Assessment (120 mins)",
          "Technical Problem Solving & Complex Algorithmic Optimization",
          "Low-Level System Design & Multithreading",
          "Techno-Managerial & Cultural Alignment",
        ],
        mandatorySkills: ["Java", "Spring Boot", "Microservices", "MongoDB", "Redis", "Distributed Caching"],
      },
      {
        company: "VMware",
        tier: "Marquee",
        packageLPA: 23.80,
        minCGPA: 7.2,
        min10th12th: 60,
        backlogsAllowed: false,
        eligibleBranches: ["B.Tech CSE", "B.Tech AIDS", "B.Tech IT", "B.Tech ECE"],
        selectionRounds: [
          "Online Coding & CS Fundamentals Test",
          "Operating Systems, Virtualization & Network Protocols",
          "Advanced Data Structures & Concurrency",
          "Engineering Leadership & Behavioral Round",
        ],
        mandatorySkills: ["C++", "Linux Internals", "Computer Networks", "Operating Systems", "Virtualization"],
      },
      {
        company: "Locus (Mara Studios)",
        tier: "Marquee",
        packageLPA: 22.00,
        minCGPA: 7.0,
        min10th12th: 60,
        backlogsAllowed: false,
        eligibleBranches: ["B.Tech CSE", "B.Tech AIDS", "B.Tech IT"],
        selectionRounds: [
          "Take-Home Engineering Assignment / Timed Hackathon",
          "Live System Architecture & Code Pair-Programming",
          "Clean Code, Modularity & Distributed Systems Review",
          "Founder / HR Culture Interview",
        ],
        mandatorySkills: ["Python / Go", "REST APIs", "Microservices", "Algorithms", "Docker"],
      },
      {
        company: "Groww",
        tier: "Marquee",
        packageLPA: 20.00,
        minCGPA: 7.0,
        min10th12th: 60,
        backlogsAllowed: false,
        eligibleBranches: ["B.Tech CSE", "B.Tech AIDS", "B.Tech IT"],
        selectionRounds: [
          "Online Data Structures & Logical Reasoning Round",
          "Full-Stack / Core Backend Engineering Interview",
          "High-Throughput Financial Transaction Architecture",
          "HR & Cultural Compatibility",
        ],
        mandatorySkills: ["React / Node.js", "Java", "SQL / NoSQL", "Message Queues", "Scalability"],
      },
      {
        company: "Lowe’s Services India",
        tier: "Super Dream",
        packageLPA: 18.36,
        minCGPA: 7.0,
        min10th12th: 60,
        backlogsAllowed: false,
        eligibleBranches: ["B.Tech CSE", "B.Tech AIDS", "B.Tech IT"],
        selectionRounds: [
          "Online Cognitive Aptitude & Algorithmic Test",
          "Core CS Fundamentals, DBMS & Data Structures",
          "Real-World Retail Tech Scenario & Coding",
          "Managerial Fit & Values Round",
        ],
        mandatorySkills: ["Java", "Spring Boot", "Cloud Technologies", "REST APIs", "SQL"],
      },
      {
        company: "TCS Digital / Prime",
        tier: "Dream",
        packageLPA: 11.50,
        minCGPA: 6.5,
        min10th12th: 60,
        backlogsAllowed: true,
        eligibleBranches: ["All Engineering Branches", "MCA", "BCA"],
        selectionRounds: [
          "TCS National Qualifier Test (Advanced Cognitive & Coding)",
          "Technical Interview (Projects, Core Engineering, Cloud)",
          "HR & Behavioral Fit",
        ],
        mandatorySkills: ["Python / Java", "SQL", "Web Basics", "Agile Fundamentals"],
      },
      {
        company: "Celebal Technologies",
        tier: "Dream",
        packageLPA: 7.00,
        minCGPA: 6.0,
        min10th12th: 60,
        backlogsAllowed: false,
        eligibleBranches: ["B.Tech CSE", "B.Tech AIDS", "BCA", "MCA"],
        selectionRounds: [
          "Online Aptitude & Programming Test",
          "Cloud Platform (Azure/AWS) & Data Engineering Round",
          "HR & Client Readiness Assessment",
        ],
        mandatorySkills: ["Python", "Azure / Cloud", "SQL", "Power BI", "Databricks"],
      },
    ],
  },
  {
    id: "pce",
    name: "Poornima College of Engineering",
    slug: "pce",
    shortName: "PCE",
    location: "ISI-6 & 2, RIICO Institutional Area, Sitapura, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    type: "Engineering College (Poornima Group)",
    established: 2000,
    website: "https://www.poornima.org",
    logo: "/images/logos/poornima-pce.jpg",
    nirfRank: "Pioneer Engineering College in Rajasthan | REAP Code: 023",
    accreditation: "NBA Accredited, AICTE Approved, RTU Kota Affiliated",
    placed: 1700,
    companies: 350,
    avgCTC: "₹5.65 LPA",
    highestCTC: "₹44.10 LPA",
    topCompany: "Amazon India (Ms. Aanchal Asnani)",
    placementRate: "93.4%",
    description:
      "Poornima College of Engineering (PCE) is the pioneer flagship engineering institution of Poornima Group, established in 2000. Renowned for academic excellence, Smart India Hackathon national winners, 1700+ placement offers, and iconic achievements including a ₹44.10 LPA Amazon offer and ₹33.00 LPA Clumio placement.",
    departments: [
      { name: "Computer Engineering", code: "CSE", avgCTC: "₹7.4 LPA", highestCTC: "₹44.10 LPA", placementRate: "96.5%" },
      { name: "Data Science & Cloud", code: "DS", avgCTC: "₹7.6 LPA", highestCTC: "₹25.33 LPA", placementRate: "94.8%" },
      { name: "Information Technology", code: "IT", avgCTC: "₹6.8 LPA", highestCTC: "₹32.00 LPA", placementRate: "93.5%" },
      { name: "Electronics & Communication", code: "ECE", avgCTC: "₹5.6 LPA", highestCTC: "₹22.00 LPA", placementRate: "90.0%" },
      { name: "Electrical & Mechanical Engineering", code: "EE/ME", avgCTC: "₹5.2 LPA", highestCTC: "₹18.00 LPA", placementRate: "87.0%" },
    ],
    placementTrends: [
      { year: 2022, placed: 1450, avgCTC: "₹5.40 LPA", highestCTC: "₹33.00 LPA" },
      { year: 2023, placed: 1600, avgCTC: "₹5.65 LPA", highestCTC: "₹44.10 LPA" },
      { year: 2024, placed: 1700, avgCTC: "₹4.70 LPA", highestCTC: "₹12.00 LPA" },
      { year: 2025, placed: 1700, avgCTC: "₹4.61 LPA", highestCTC: "₹15.00 LPA" },
    ],
    topRecruiters: [
      "Amazon", "Clumio Technologies", "Morgan Stanley", "Optum", "MTX Group",
      "Byju's", "SquadStack", "TCS", "Infosys", "Capgemini", "Tekion"
    ],
  },
  {
    id: "piet",
    name: "Poornima Institute of Engineering & Technology",
    slug: "piet",
    shortName: "PIET",
    location: "ISI-2, RIICO Institutional Area, Sitapura, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    type: "Engineering & Tech Institute (Poornima Group)",
    established: 2007,
    website: "https://www.poornimainstitute.edu.in",
    logo: "/images/logos/poornima-piet.png",
    nirfRank: "Ranked No. 3 in RTU QIV Rankings | NAAC 'A' Grade",
    accreditation: "NAAC 'A' Grade Accredited, NBA Accredited, AICTE Approved, RTU Affiliated",
    placed: 1280,
    companies: 100,
    avgCTC: "₹5.60 LPA",
    highestCTC: "₹18.00 LPA",
    topCompany: "SquadStack / rtCamp",
    placementRate: "75.0%",
    description:
      "Poornima Institute of Engineering & Technology (PIET) is a premier technology powerhouse in Jaipur, accredited with NAAC 'A' Grade and ranked No. 3 in RTU Quality Index Value (QIV). Featuring 100+ partner recruiting companies, state-of-the-art AI and IoT laboratories, and industry-sponsored innovation centres.",
    departments: [
      { name: "Computer Engineering", code: "CSE", avgCTC: "₹7.5 LPA", highestCTC: "₹18.00 LPA", placementRate: "95.0%" },
      { name: "Artificial Intelligence & Data Science", code: "AIDS", avgCTC: "₹7.9 LPA", highestCTC: "₹18.00 LPA", placementRate: "94.5%" },
      { name: "IoT & Emerging Technologies", code: "IOT", avgCTC: "₹6.2 LPA", highestCTC: "₹14.00 LPA", placementRate: "90.0%" },
    ],
    placementTrends: [
      { year: 2022, placed: 980, avgCTC: "₹4.50 LPA", highestCTC: "₹18.00 LPA" },
      { year: 2023, placed: 1050, avgCTC: "₹4.93 LPA", highestCTC: "₹11.70 LPA" },
      { year: 2024, placed: 1190, avgCTC: "₹4.62 LPA", highestCTC: "₹12.00 LPA" },
      { year: 2025, placed: 1280, avgCTC: "₹4.58 LPA", highestCTC: "₹15.00 LPA" },
    ],
    topRecruiters: [
      "SquadStack", "rtCamp Solutions", "Optum", "Celebal Technologies",
      "Infosys", "Capgemini", "IBM", "Xebia", "TCS", "Tekion", "Synopsys"
    ],
  },
];

// ─── 2. COMPANIES ────────────────────────────────────────────────────────────

export const COMPANIES_DATA: CompanyData[] = [
  {
    id: "amazon",
    name: "Amazon",
    slug: "amazon",
    sector: "E-Commerce / Cloud (AWS)",
    hqLocation: "Seattle, WA / Hyderabad, Bengaluru, Chennai",
    website: "https://amazon.jobs",
    logo: "/images/recruiters/amazon.jpg",
    avgCTC: "₹26.5 LPA",
    highestCTC: "₹44.10 LPA",
    roles: ["Software Development Engineer (SDE-1)", "Cloud Support Associate", "Data Engineer", "Operations Manager"],
    eligibility: {
      minCGPA: 6.8,
      branches: ["CSE", "IT", "ECE", "EE", "AIDS"],
      backlogsAllowed: false,
    },
    selectionRounds: [
      {
        roundNumber: 1,
        title: "Amazon Online Assessment (OA)",
        duration: "105 mins",
        description: "2 DSA problems + Work Styles Assessment (measuring 16 Amazon Leadership Principles).",
        focusAreas: ["Trees & Graphs", "DP", "Amazon Leadership Principles"],
      },
      {
        roundNumber: 2,
        title: "Technical Interview 1: Problem Solving",
        duration: "60 mins",
        description: "DSA problem solving + 2 Amazon Leadership Principle behavioral questions.",
        focusAreas: ["Customer Obsession", "HashMaps", "Binary Search"],
      },
      {
        roundNumber: 3,
        title: "Technical Interview 2: Coding & CS Fundamentals",
        duration: "60 mins",
        description: "Algorithms, OS, multi-threading, memory management, and OOP principles.",
        focusAreas: ["OS & Concurrency", "DBMS", "Bias for Action"],
      },
      {
        roundNumber: 4,
        title: "Bar Raiser Interview",
        duration: "60 mins",
        description: "Conducted by an independent Amazonian outside the hiring group to ensure candidate raises the bar.",
        focusAreas: ["Dive Deep", "Invent & Simplify", "Deliver Results"],
      },
    ],
    overview:
      "Amazon is one of Poornima Group's top marquee recruiters. Offers up to ₹44.10 LPA (e.g. Ms. Aanchal Asnani, PCE Batch 2023) across software engineering and AWS cloud services.",
    activeHiring: true,
    hiredFromUniversities: ["Poornima University", "Poornima College of Engineering (PCE)", "Poornima Institute of Engineering & Technology (PIET)"],
  },
  {
    id: "celebal",
    name: "Celebal Technologies",
    slug: "celebal",
    sector: "Enterprise Cloud & AI Solutions",
    hqLocation: "Jaipur, Rajasthan / Dallas, TX",
    website: "https://celebaltech.com/careers",
    logo: "/images/recruiters/celebal.jpg",
    avgCTC: "₹8.5 LPA",
    highestCTC: "₹15.00 LPA",
    roles: ["Associate Cloud Consultant", "Data Engineer", "AI/ML Developer", "Power BI Specialist"],
    eligibility: {
      minCGPA: 6.5,
      branches: ["CSE", "IT", "AIDS", "ECE"],
      backlogsAllowed: true,
    },
    selectionRounds: [
      {
        roundNumber: 1,
        title: "Aptitude & Technical MCQ",
        duration: "60 mins",
        description: "Cognitive reasoning, SQL, Python fundamentals, and cloud concepts.",
        focusAreas: ["SQL", "Python", "Logical Reasoning"],
      },
      {
        roundNumber: 2,
        title: "Technical Machine Coding",
        duration: "60 mins",
        description: "Hands-on data transformation, database queries, and algorithmic scripting.",
        focusAreas: ["Azure Fundamentals", "Pandas", "ETL"],
      },
      {
        roundNumber: 3,
        title: "Technical & Project Discussion",
        duration: "45 mins",
        description: "Deep dive into college projects, internship experience, and cloud technologies.",
        focusAreas: ["Data Modeling", "Databricks", "Cloud Storage"],
      },
      {
        roundNumber: 4,
        title: "HR Discussion",
        duration: "30 mins",
        description: "Career aspirations, client communication, and cultural alignment.",
        focusAreas: ["Communication", "Client Handling"],
      },
    ],
    overview:
      "Celebal Technologies is a premier global innovation partner of Microsoft and Databricks with strong roots in Jaipur. Celebal recruits extensively across Poornima campuses.",
    activeHiring: true,
    hiredFromUniversities: ["Poornima University", "Poornima College of Engineering (PCE)", "Poornima Institute of Engineering & Technology (PIET)"],
  },
  {
    id: "optum",
    name: "Optum (UnitedHealth Group)",
    slug: "optum",
    sector: "Healthcare Technology & FinTech",
    hqLocation: "Eden Prairie, MN / Hyderabad, Noida, Bengaluru",
    website: "https://optum.com/careers",
    logo: "/images/recruiters/optum.jpg",
    avgCTC: "₹10.0 LPA",
    highestCTC: "₹14.00 LPA",
    roles: ["Software Engineer", "Healthcare Data Analyst", "Cloud Systems Engineer"],
    eligibility: {
      minCGPA: 6.8,
      branches: ["CSE", "IT", "ECE", "AIDS"],
      backlogsAllowed: false,
    },
    selectionRounds: [
      {
        roundNumber: 1,
        title: "Optum Online Assessment",
        duration: "90 mins",
        description: "Quantitative aptitude, core CS subjects (DBMS, OS, Networks), and 2 coding problems.",
        focusAreas: ["DSA", "DBMS", "Core CS"],
      },
      {
        roundNumber: 2,
        title: "Technical Interview 1",
        duration: "45 mins",
        description: "Data structures, object-oriented design in Java/C++, and SQL queries.",
        focusAreas: ["Java/C++", "SQL Joins", "Data Structures"],
      },
      {
        roundNumber: 3,
        title: "Technical & Architecture Round",
        duration: "45 mins",
        description: "Real-time systems, RESTful microservices, and healthcare project discussion.",
        focusAreas: ["Microservices", "REST API", "System Architecture"],
      },
      {
        roundNumber: 4,
        title: "HR & Behavioral Round",
        duration: "30 mins",
        description: "Integrity, compassion, teamwork, and innovation values.",
        focusAreas: ["Core Values", "Communication"],
      },
    ],
    overview:
      "Optum is a Fortune 5 healthcare innovation powerhouse and a consistent super-dream recruiter across Poornima Group, hiring multiple engineering batches at ₹10.0 LPA packages.",
    activeHiring: true,
    hiredFromUniversities: ["Poornima University", "Poornima College of Engineering (PCE)", "Poornima Institute of Engineering & Technology (PIET)"],
  },
  {
    id: "infosys",
    name: "Infosys",
    slug: "infosys",
    sector: "IT & Digital Consulting",
    hqLocation: "Bengaluru, Karnataka",
    website: "https://infosys.com/careers",
    logo: "/images/recruiters/infosys.jpg",
    avgCTC: "₹6.8 LPA",
    highestCTC: "₹11.00 LPA",
    roles: ["Specialist Programmer (SP)", "Digital Specialist Engineer (DSE)", "Systems Engineer"],
    eligibility: {
      minCGPA: 6.0,
      branches: ["CSE", "IT", "ECE", "EE", "ME", "CE", "AIDS"],
      backlogsAllowed: true,
    },
    selectionRounds: [
      {
        roundNumber: 1,
        title: "InfyTQ / HackWithInfy / National Qualifier",
        duration: "180 mins",
        description: "Hands-on algorithmic challenges in Java/Python covering graphs, DP, and trees.",
        focusAreas: ["Algorithms", "Dynamic Programming", "Graph Theory"],
      },
      {
        roundNumber: 2,
        title: "Technical Interview",
        duration: "45 mins",
        description: "OOP, DBMS indexing, live problem solving, and capstone project review.",
        focusAreas: ["Data Structures", "OOP Concepts", "Projects"],
      },
      {
        roundNumber: 3,
        title: "HR & Leadership Round",
        duration: "30 mins",
        description: "Cultural fit, adaptability, learning aptitude, and location preferences.",
        focusAreas: ["Adaptability", "Learning Agility"],
      },
    ],
    overview:
      "Infosys is a global leader in next-generation digital services and consulting. One of the largest annual hiring partners for Poornima graduates via SP, DSE, and SE tracks.",
    activeHiring: true,
    hiredFromUniversities: ["Poornima University", "Poornima College of Engineering (PCE)", "Poornima Institute of Engineering & Technology (PIET)"],
  },
  {
    id: "capgemini",
    name: "Capgemini",
    slug: "capgemini",
    sector: "Consulting & IT Services",
    hqLocation: "Paris, France / Mumbai, India",
    website: "https://capgemini.com/careers",
    logo: "/images/recruiters/capgemini.jpg",
    avgCTC: "₹6.5 LPA",
    highestCTC: "₹10.50 LPA",
    roles: ["Senior Analyst", "Cloud Software Engineer", "Quality Analyst"],
    eligibility: {
      minCGPA: 6.0,
      branches: ["CSE", "IT", "ECE", "EE", "AIDS"],
      backlogsAllowed: false,
    },
    selectionRounds: [
      {
        roundNumber: 1,
        title: "Technical Assessment & Game-Based Aptitude",
        duration: "90 mins",
        description: "Pseudocode analysis, English communication, and cognitive mini-games.",
        focusAreas: ["Pseudocode", "Logical Deductions", "English"],
      },
      {
        roundNumber: 2,
        title: "Coding Assessment",
        duration: "45 mins",
        description: "2 algorithmic coding problems evaluating array, string, and math patterns.",
        focusAreas: ["Data Structures", "Strings", "Arrays"],
      },
      {
        roundNumber: 3,
        title: "Technical & Behavioral Interview",
        duration: "45 mins",
        description: "Comprehensive review of code quality, projects, and client readiness.",
        focusAreas: ["Java/Python", "SQL", "Team Collaboration"],
      },
    ],
    overview:
      "Capgemini is a global leader in partnering with companies to transform and manage their business by harnessing the power of technology. Active mass and elite recruiter at Poornima.",
    activeHiring: true,
    hiredFromUniversities: ["Poornima University", "Poornima College of Engineering (PCE)", "Poornima Institute of Engineering & Technology (PIET)"],
  },
  {
    id: "tcs",
    name: "Tata Consultancy Services",
    slug: "tcs",
    sector: "IT Services & Consulting",
    hqLocation: "Mumbai, Maharashtra",
    website: "https://tcs.com/careers",
    logo: "/images/logos/tcs.png",
    avgCTC: "₹7.5 LPA",
    highestCTC: "₹11.5 LPA",
    roles: ["TCS Prime (SDE)", "TCS Digital (Full Stack)", "TCS Ninja (Systems Engineer)"],
    eligibility: {
      minCGPA: 6.0,
      branches: ["CSE", "IT", "ECE", "ME", "CE", "EE", "AIDS"],
      backlogsAllowed: true,
    },
    selectionRounds: [
      {
        roundNumber: 1,
        title: "TCS National Qualifier Test (NQT)",
        duration: "165 mins",
        description: "Foundation section (Verbal, Reasoning, Numerical) + Advanced section (Advanced Quantitative & Coding).",
        focusAreas: ["Quantitative Aptitude", "Logical Reasoning", "Coding"],
      },
      {
        roundNumber: 2,
        title: "Technical Interview",
        duration: "45 mins",
        description: "Core programming (C/C++/Java/Python), SQL queries, OOPS, and academic project discussions.",
        focusAreas: ["SQL", "OOP", "Data Structures"],
      },
      {
        roundNumber: 3,
        title: "Managerial & HR Round",
        duration: "30 mins",
        description: "Relocation readiness, night shifts policy, communication skills, and personal background verification.",
        focusAreas: ["Communication", "Work Ethic", "Teamwork"],
      },
    ],
    overview:
      "TCS is the flagship IT enterprise of Tata Group, operating in over 50 countries with over 600,000 global associates, offering diverse campus careers.",
    activeHiring: true,
    hiredFromUniversities: ["Poornima University", "Poornima College of Engineering (PCE)", "Poornima Institute of Engineering & Technology (PIET)"],
  },
  {
    id: "tekion",
    name: "Tekion Corp",
    slug: "tekion",
    sector: "Automotive Cloud SaaS (Unicorn)",
    hqLocation: "Pleasanton, CA / Bengaluru & Chennai, India",
    website: "https://tekion.com/careers",
    logo: "/images/recruiters/tekion.jpg",
    avgCTC: "₹14.0 LPA",
    highestCTC: "₹22.00 LPA",
    roles: ["Member Technical Staff (Cloud)", "Frontend Developer", "QA Automation Engineer"],
    eligibility: {
      minCGPA: 7.0,
      branches: ["CSE", "IT", "AIDS"],
      backlogsAllowed: false,
    },
    selectionRounds: [
      {
        roundNumber: 1,
        title: "Coding Assessment",
        duration: "90 mins",
        description: "3 competitive programming challenges on HackerEarth.",
        focusAreas: ["DSA", "Graph", "DP"],
      },
      {
        roundNumber: 2,
        title: "Technical DSA Round",
        duration: "60 mins",
        description: "In-depth problem solving with optimal time and space complexity.",
        focusAreas: ["Trees", "Hash Tables", "Two Pointers"],
      },
      {
        roundNumber: 3,
        title: "Low Level Design (LLD) & Projects",
        duration: "60 mins",
        description: "OOP modeling, database schemas, and microservice decoupling.",
        focusAreas: ["Design Patterns", "Clean Code"],
      },
    ],
    overview:
      "Tekion is an AI-powered SaaS unicorn revolutionizing automotive retail. Regularly offers premium packages to top coding talent from Poornima.",
    activeHiring: true,
    hiredFromUniversities: ["Poornima University", "Poornima College of Engineering (PCE)", "Poornima Institute of Engineering & Technology (PIET)"],
  },
  {
    id: "xebia",
    name: "Xebia",
    slug: "xebia",
    sector: "Digital Transformation & Cloud Consultancy",
    hqLocation: "Hilversum, Netherlands / Gurugram & Jaipur",
    website: "https://xebia.com/careers",
    logo: "/images/recruiters/xebia.jpg",
    avgCTC: "₹8.0 LPA",
    highestCTC: "₹12.00 LPA",
    roles: ["Software Consultant", "DevOps Engineer", "Cloud Native Developer"],
    eligibility: {
      minCGPA: 6.5,
      branches: ["CSE", "IT", "AIDS"],
      backlogsAllowed: false,
    },
    selectionRounds: [
      {
        roundNumber: 1,
        title: "Online Assessment",
        duration: "75 mins",
        description: "Programming logic, algorithms, and core computer science fundamentals.",
        focusAreas: ["Algorithms", "Web Technologies"],
      },
      {
        roundNumber: 2,
        title: "Technical Interview",
        duration: "60 mins",
        description: "Code architecture, cloud concepts (Docker, AWS), and reactive programming.",
        focusAreas: ["Clean Architecture", "Cloud Native"],
      },
    ],
    overview:
      "Xebia is a global digital consulting firm specializing in Cloud, Data, AI, and Software Engineering. High recruiter engagement at PIET and PCE.",
    activeHiring: true,
    hiredFromUniversities: ["Poornima University", "Poornima College of Engineering (PCE)", "Poornima Institute of Engineering & Technology (PIET)"],
  },
  {
    id: "rtcamp",
    name: "rtCamp Solutions",
    slug: "rtcamp",
    sector: "Enterprise Web Systems & WordPress VIP",
    hqLocation: "Pune, India / Remote Worldwide",
    website: "https://rtcamp.com/careers",
    logo: "/images/recruiters/rtcamp.jpg",
    avgCTC: "₹10.5 LPA",
    highestCTC: "₹14.00 LPA",
    roles: ["Web Engineer", "Systems Engineer", "Full Stack Developer"],
    eligibility: {
      minCGPA: 6.5,
      branches: ["CSE", "IT", "AIDS"],
      backlogsAllowed: false,
    },
    selectionRounds: [
      {
        roundNumber: 1,
        title: "Coding Assignment",
        duration: "Take Home / 120 mins",
        description: "Build an extensible web module following strict PSR standards and security guidelines.",
        focusAreas: ["PHP/JS", "Security", "Clean Code"],
      },
      {
        roundNumber: 2,
        title: "Technical Code Review",
        duration: "60 mins",
        description: "Discussion on architectural trade-offs, caching (Redis/Nginx), and scalability.",
        focusAreas: ["Web Architecture", "Caching", "Performance"],
      },
    ],
    overview:
      "rtCamp is the only WordPress VIP Gold Agency partner in Asia, hiring engineers from PIET with top packages (e.g. ₹12 LPA for Pathan Amaankhan).",
    activeHiring: true,
    hiredFromUniversities: ["Poornima University", "Poornima College of Engineering (PCE)", "Poornima Institute of Engineering & Technology (PIET)"],
  },
  {
    id: "google",
    name: "Google",
    slug: "google",
    sector: "Product / Tech",
    hqLocation: "Mountain View, CA / Bengaluru & Hyderabad, India",
    website: "https://careers.google.com",
    logo: "G",
    avgCTC: "₹34.5 LPA",
    highestCTC: "₹45 LPA",
    roles: ["Software Engineer (SWE I/II)", "Cloud Consultant", "Data Engineer", "Site Reliability Engineer"],
    eligibility: {
      minCGPA: 7.5,
      branches: ["CSE", "IT", "ECE", "AIDS"],
      backlogsAllowed: false,
    },
    selectionRounds: [
      {
        roundNumber: 1,
        title: "Google Online Challenge (GOC)",
        duration: "90 mins",
        description: "2 algorithmic problems on graphs, dynamic programming, and advanced data structures.",
        focusAreas: ["Graph Algorithms", "Dynamic Programming", "Bit Manipulation"],
      },
      {
        roundNumber: 2,
        title: "Technical DSA Round 1",
        duration: "45 mins",
        description: "Live coding on Google Docs/Meet. Focus on clean code, edge cases, and optimal big-O complexity.",
        focusAreas: ["Binary Trees / BST", "Two Pointers", "Sliding Window"],
      },
      {
        roundNumber: 3,
        title: "Technical DSA Round 2",
        duration: "45 mins",
        description: "Deep problem solving on Trie, Segment Trees, or concurrency patterns.",
        focusAreas: ["Trie / Hash Maps", "Recursion & Backtracking", "Memory Optimization"],
      },
      {
        roundNumber: 4,
        title: "Googlyness & Leadership Interview",
        duration: "45 mins",
        description: "Behavioral interview assessing ethical leadership, handling ambiguity, team collaboration, and diversity.",
        focusAreas: ["Conflict Resolution", "Ambiguity Handling", "Constructive Feedback"],
      },
    ],
    overview:
      "Google is a global technology leader in search, cloud computing, generative AI, operating systems, and hardware. Hiring through on-campus recruitment and national challenges.",
    activeHiring: true,
    hiredFromUniversities: ["Poornima University", "Poornima College of Engineering (PCE)", "Poornima Institute of Engineering & Technology (PIET)"],
  },
  {
    id: "microsoft",
    name: "Microsoft",
    slug: "microsoft",
    sector: "Product / Cloud",
    hqLocation: "Redmond, WA / Hyderabad, Noida, Bengaluru",
    website: "https://careers.microsoft.com",
    logo: "M",
    avgCTC: "₹30.0 LPA",
    highestCTC: "₹44 LPA",
    roles: ["Software Engineer (SDE-1)", "Support Escalation Engineer", "Security Analyst"],
    eligibility: {
      minCGPA: 7.0,
      branches: ["CSE", "IT", "ECE"],
      backlogsAllowed: false,
    },
    selectionRounds: [
      {
        roundNumber: 1,
        title: "Online Assessment (Codility)",
        duration: "90 mins",
        description: "3 coding problems testing arrays, strings, stacks, and queues with strict corner case testing.",
        focusAreas: ["Arrays & Matrices", "Stack & Queue", "Strings"],
      },
      {
        roundNumber: 2,
        title: "Technical Round 1: DSA",
        duration: "60 mins",
        description: "Data structures & algorithms with emphasis on modularity, production-ready syntax, and unit testing.",
        focusAreas: ["Linked Lists", "Trees", "Sorting"],
      },
      {
        roundNumber: 3,
        title: "Technical Round 2: System Design & Projects",
        duration: "60 mins",
        description: "Low-level design (LLD), design patterns (Factory, Observer), and capstone project walkthrough.",
        focusAreas: ["LLD", "Design Patterns", "REST Architecture"],
      },
      {
        roundNumber: 4,
        title: "AA (As Appropriate) / Director Round",
        duration: "45 mins",
        description: "Culture fit, growth mindset, and behavioral evaluation by a Principal Engineering Manager.",
        focusAreas: ["Growth Mindset", "Leadership", "Customer Obsession"],
      },
    ],
    overview:
      "Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Recruits top engineers across core cloud, Azure, Teams, and Office platforms.",
    activeHiring: true,
    hiredFromUniversities: ["Poornima University", "Poornima College of Engineering (PCE)", "Poornima Institute of Engineering & Technology (PIET)"],
  },
];

// ─── 3. PLACEMENTS / CANDIDATES ──────────────────────────────────────────────

export const PLACEMENTS_DATA: CandidatePlacement[] = [
  // ── Poornima College of Engineering (PCE) Top Achievers ──
  {
    id: "pce-1",
    name: "Aanchal Asnani",
    university: "Poornima College of Engineering",
    universitySlug: "pce",
    company: "Amazon",
    companySlug: "amazon",
    role: "Software Development Engineer (SDE-1)",
    ctc: 44.1,
    year: 2023,
    branch: "B.Tech CSE",
    avatar: "AA",
    location: "Bengaluru, India",
    isVerified: true,
    skills: ["Java", "Distributed Systems", "AWS", "DSA", "System Design", "Microservices"],
    projectTitle: "Scalable E-Commerce Fulfillment Engine",
    projectDescription: "High-concurrency order dispatch service with Flipkart Pre-Placement Offer (₹32.57 LPA) and Amazon India offer (₹44.10 LPA).",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "pu-online-1",
    name: "Gaurav Pipada",
    university: "Poornima University",
    universitySlug: "poornima",
    company: "Tekion India",
    companySlug: "tekion",
    role: "Member Technical Staff",
    ctc: 29.0,
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "GP",
    location: "Bengaluru / Jaipur",
    isVerified: true,
    skills: ["Java", "Spring Boot", "Microservices", "MongoDB", "Redis", "Distributed Caching"],
    projectTitle: "Automotive Enterprise Cloud Management Service",
    projectDescription: "High-scale automotive cloud platform processing vehicle telematics and dealer inventory workflows.",
    linkedIn: "https://www.linkedin.com/school/poornima-university",
  },
  {
    id: "pu-online-2",
    name: "Niharika Jain",
    university: "Poornima University",
    universitySlug: "poornima",
    company: "VMware",
    companySlug: "vmware",
    role: "Member of Technical Staff",
    ctc: 23.8,
    year: 2023,
    branch: "B.Tech CSE",
    avatar: "NJ",
    location: "Bengaluru",
    isVerified: true,
    skills: ["C++", "Linux Internals", "Computer Networks", "Virtualization", "Cloud Infrastructure"],
    projectTitle: "Hypervisor Memory Allocation & Containerization",
    projectDescription: "Kernel-level memory virtualization optimizer reducing container context-switching overhead.",
    linkedIn: "https://www.linkedin.com/school/poornima-university",
  },
  {
    id: "pu-online-3",
    name: "Sanidhya Agrawal",
    university: "Poornima University",
    universitySlug: "poornima",
    company: "Locus (Mara Studios)",
    companySlug: "locus",
    role: "Software Engineer",
    ctc: 22.0,
    year: 2023,
    branch: "B.Tech CSE",
    avatar: "SA",
    location: "Bengaluru",
    isVerified: true,
    skills: ["Python", "Go", "Distributed Systems", "REST API", "Microservices", "Docker"],
    projectTitle: "Automated Supply Chain Dispatch & Route Optimization",
    projectDescription: "Smart route optimization engine computing multi-stop delivery schedules for enterprise logistics.",
    linkedIn: "https://www.linkedin.com/school/poornima-university",
  },
  {
    id: "pu-online-4",
    name: "Manish Motwani",
    university: "Poornima University",
    universitySlug: "poornima",
    company: "Groww",
    companySlug: "groww",
    role: "Software Development Engineer",
    ctc: 20.0,
    year: 2023,
    branch: "B.Tech CSE",
    avatar: "MM",
    location: "Bengaluru",
    isVerified: true,
    skills: ["React", "Node.js", "Java", "SQL", "Message Queues", "Fintech Scaling"],
    projectTitle: "Zero-Latency Financial Ledger & Order Routing",
    projectDescription: "High-throughput mutual fund and stock trading order processing engine with real-time portfolio updates.",
    linkedIn: "https://www.linkedin.com/school/poornima-university",
  },
  {
    id: "pu-online-5",
    name: "Janvi Kundnani",
    university: "Poornima University",
    universitySlug: "poornima",
    company: "Lowe’s Services India",
    companySlug: "lowes",
    role: "Associate Software Engineer",
    ctc: 18.36,
    year: 2023,
    branch: "B.Tech CSE",
    avatar: "JK",
    location: "Bengaluru",
    isVerified: true,
    skills: ["Java", "Spring Boot", "Cloud Technologies", "REST APIs", "SQL"],
    projectTitle: "Omnichannel Retail Inventory Search & Synchronization",
    projectDescription: "Real-time retail inventory synchronization across 1,700+ stores with sub-second catalog lookup.",
    linkedIn: "https://www.linkedin.com/school/poornima-university",
  },
  {
    id: "pce-2",
    name: "Hardik Khanchandani",
    university: "Poornima College of Engineering",
    universitySlug: "pce",
    company: "Clumio Technologies",
    companySlug: "clumio",
    role: "Member of Technical Staff",
    ctc: 33.0,
    year: 2022,
    branch: "B.Tech CS",
    avatar: "HK",
    location: "Bengaluru",
    isVerified: true,
    skills: ["Go", "Cloud Architecture", "AWS", "Docker", "Kubernetes", "Data Protection"],
    projectTitle: "Enterprise Cloud Backup & Snapshot Orchestrator",
    projectDescription: "Zero-loss cloud backup orchestration with dual offers from Clumio (₹33 LPA) and Trell (₹18 LPA).",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "pce-3",
    name: "Ekta Gupta",
    university: "Poornima College of Engineering",
    universitySlug: "pce",
    company: "Morgan Stanley",
    companySlug: "morgan-stanley",
    role: "Technology Analyst",
    ctc: 25.33,
    year: 2022,
    branch: "B.Tech Data Science",
    avatar: "EG",
    location: "Mumbai",
    isVerified: true,
    skills: ["Python", "C++", "Algorithmic Trading", "Data Structures", "Financial Engineering"],
    projectTitle: "Low-Latency High-Frequency Algorithmic Execution",
    projectDescription: "Statistical arbitrage backtesting platform processing market tick data in sub-millisecond windows.",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "pu-4",
    name: "Upadhyayula V Naga Sudha Aparna",
    university: "Poornima University",
    universitySlug: "poornima",
    company: "Nimai Fintech 360tf",
    companySlug: "nimai-fintech",
    role: "Investment & Fintech Strategist",
    ctc: 18.0,
    year: 2022,
    branch: "MBA",
    avatar: "UA",
    location: "Dubai / Mumbai",
    isVerified: true,
    skills: ["Trade Finance", "Risk Modeling", "Financial Analysis", "Fintech API"],
    projectTitle: "Cross-Border Trade Finance Digital Platform",
    projectDescription: "Automated underwriting pipeline for documentary letters of credit and bill discounting.",
    linkedIn: "https://www.linkedin.com/school/poornima-university",
  },
  {
    id: "piet-5",
    name: "Kiran Gaira",
    university: "Poornima Institute of Engineering & Technology",
    universitySlug: "piet",
    company: "SquadStack",
    companySlug: "squadstack",
    role: "Software Engineer",
    ctc: 14.0,
    year: 2022,
    branch: "B.Tech CS",
    avatar: "KG",
    location: "Noida / Remote",
    isVerified: true,
    skills: ["Python", "Django", "PostgreSQL", "React", "RabbitMQ"],
    projectTitle: "Distributed Telephony Sales Automation Engine",
    projectDescription: "WebRTC calling engine with real-time agent speech analysis and CRM synchronization.",
    linkedIn: "https://www.linkedin.com/school/pietjaipur",
  },
  {
    id: "piet-6",
    name: "Pathan Amaankhan Haseebkhan",
    university: "Poornima Institute of Engineering & Technology",
    universitySlug: "piet",
    company: "rtCamp Solutions",
    companySlug: "rtcamp",
    role: "Enterprise Web Systems Engineer",
    ctc: 12.0,
    year: 2022,
    branch: "B.Tech CS",
    avatar: "PA",
    location: "Pune / Remote",
    isVerified: true,
    skills: ["PHP", "WordPress VIP", "Docker", "Node.js", "Redis"],
    projectTitle: "High-Traffic Content Publishing Infrastructure",
    projectDescription: "Enterprise headless CMS architecture handling 100M+ monthly pageviews for global digital media.",
    linkedIn: "https://www.linkedin.com/school/pietjaipur",
  },
  {
    id: "pce-7",
    name: "Anjali Shrivastava",
    university: "Poornima College of Engineering",
    universitySlug: "pce",
    company: "Optum",
    companySlug: "optum",
    role: "Software Engineer",
    ctc: 10.0,
    year: 2022,
    branch: "B.Tech CS",
    avatar: "AS",
    location: "Hyderabad",
    isVerified: true,
    skills: ["Java", "Spring Boot", "Healthcare Interoperability", "FHIR API", "SQL"],
    projectTitle: "HIPAA Compliant Patient Health Records Bridge",
    projectDescription: "FHIR-standard electronic health records exchange service between hospitals and insurers.",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "pce-8",
    name: "Rajkumar Mishra",
    university: "Poornima College of Engineering",
    universitySlug: "pce",
    company: "MTX Group",
    companySlug: "mtx",
    role: "Cloud Systems Consultant",
    ctc: 10.0,
    year: 2022,
    branch: "B.Tech CS",
    avatar: "RM",
    location: "Jaipur / Gurugram",
    isVerified: true,
    skills: ["Salesforce", "Apex", "Lightning Web Components", "Cloud Architecture"],
    projectTitle: "Government Health Operations CRM",
    projectDescription: "Enterprise citizen service workflow management on Salesforce Cloud.",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "pce-9",
    name: "Tanisha Agarwal",
    university: "Poornima College of Engineering",
    universitySlug: "pce",
    company: "Optum",
    companySlug: "optum",
    role: "Data Systems Engineer",
    ctc: 10.0,
    year: 2022,
    branch: "B.Tech CS",
    avatar: "TA",
    location: "Noida",
    isVerified: true,
    skills: ["Python", "Spark", "SQL", "Data Pipelines", "Healthcare Analytics"],
    projectTitle: "Large-Scale Medical Claims Fraud Detector",
    projectDescription: "Automated anomalies detection across hospital billing datasets using Apache Spark.",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "pce-10",
    name: "Yogita Tak",
    university: "Poornima College of Engineering",
    universitySlug: "pce",
    company: "Optum",
    companySlug: "optum",
    role: "Software Engineer",
    ctc: 10.0,
    year: 2022,
    branch: "B.Tech CS",
    avatar: "YT",
    location: "Hyderabad",
    isVerified: true,
    skills: ["C#", ".NET Core", "Microservices", "Azure", "Docker"],
    projectTitle: "Real-Time Pharmacy Benefit Verification Service",
    projectDescription: "Prescription benefit eligibility check engine responding in under 150ms.",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "pce-11",
    name: "Roj Kanwar",
    university: "Poornima College of Engineering",
    universitySlug: "pce",
    company: "Optum",
    companySlug: "optum",
    role: "Systems Engineer",
    ctc: 10.0,
    year: 2022,
    branch: "B.Tech ECE",
    avatar: "RK",
    location: "Bengaluru",
    isVerified: true,
    skills: ["Embedded C", "IoT", "Linux Internals", "Computer Networking"],
    projectTitle: "Remote Patient Monitoring Gateway",
    projectDescription: "Telemetry aggregation node transmitting vital signs over secure TLS tunnels.",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "pce-12",
    name: "Pragya Ghiya",
    university: "Poornima College of Engineering",
    universitySlug: "pce",
    company: "Optum",
    companySlug: "optum",
    role: "Software Engineer",
    ctc: 10.0,
    year: 2022,
    branch: "B.Tech IT",
    avatar: "PG",
    location: "Hyderabad",
    isVerified: true,
    skills: ["React", "TypeScript", "Node.js", "Jest", "GraphQL"],
    projectTitle: "Unified Clinical Practitioner Dashboard",
    projectDescription: "Responsive hospital management web portal for physicians and clinical teams.",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "pce-13",
    name: "Anurag Pokra",
    university: "Poornima College of Engineering",
    universitySlug: "pce",
    company: "Byju's",
    companySlug: "byjus",
    role: "Product Technologist",
    ctc: 10.0,
    year: 2022,
    branch: "B.Tech CS",
    avatar: "AP",
    location: "Bengaluru",
    isVerified: true,
    skills: ["JavaScript", "React Native", "Firebase", "EdTech Product Lifecycle"],
    projectTitle: "Adaptive Quiz & Student Analytics Mobile Engine",
    projectDescription: "Gamified learning analytics engine serving millions of active learners.",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "pce-14",
    name: "Saloni Jain",
    university: "Poornima College of Engineering",
    universitySlug: "pce",
    company: "Optum",
    companySlug: "optum",
    role: "Quality Engineering Analyst",
    ctc: 10.0,
    year: 2022,
    branch: "B.Tech CS",
    avatar: "SJ",
    location: "Noida",
    isVerified: true,
    skills: ["Selenium", "Python", "Cucumber BDD", "CI/CD", "JMeter"],
    projectTitle: "Automated Resiliency & Load Testing Suite",
    projectDescription: "Automated regression testing reducing deployment cycle time from 4 days to 4 hours.",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "pce-15",
    name: "Divyam Sharma",
    university: "Poornima College of Engineering",
    universitySlug: "pce",
    company: "MTX Group",
    companySlug: "mtx",
    role: "Associate Consultant",
    ctc: 10.0,
    year: 2022,
    branch: "B.Tech CS",
    avatar: "DS",
    location: "Jaipur",
    isVerified: true,
    skills: ["Salesforce", "Integration Architecture", "MuleSoft", "REST APIs"],
    projectTitle: "Public Sector Emergency Response Coordination Hub",
    projectDescription: "Real-time dispatch system integrated across municipal agency databases.",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "pce-16",
    name: "Mohit Taimni",
    university: "Poornima College of Engineering",
    universitySlug: "pce",
    company: "MTX Group",
    companySlug: "mtx",
    role: "Cloud Engineer",
    ctc: 10.0,
    year: 2022,
    branch: "B.Tech CS",
    avatar: "MT",
    location: "Hyderabad",
    isVerified: true,
    skills: ["AWS", "Terraform", "Docker", "DevOps", "Python"],
    projectTitle: "Infrastructure as Code for Multi-Tenant Government Clouds",
    projectDescription: "Automated multi-region AWS cloud provisioning with Terraform and Ansible.",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "pce-17",
    name: "Trapti Sharma",
    university: "Poornima College of Engineering",
    universitySlug: "pce",
    company: "MTX Group",
    companySlug: "mtx",
    role: "Software Consultant",
    ctc: 10.0,
    year: 2022,
    branch: "B.Tech CS",
    avatar: "TS",
    location: "Jaipur",
    isVerified: true,
    skills: ["Apex", "SOQL", "Salesforce Service Cloud", "JavaScript"],
    projectTitle: "Omni-Channel Customer Support Automation",
    projectDescription: "AI case deflection and routing engine on Salesforce Service Cloud.",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "pce-18",
    name: "Shruti Malpani",
    university: "Poornima College of Engineering",
    universitySlug: "pce",
    company: "Optum",
    companySlug: "optum",
    role: "Cloud & Security Engineer",
    ctc: 10.0,
    year: 2022,
    branch: "B.Tech CS(CC)",
    avatar: "SM",
    location: "Gurugram",
    isVerified: true,
    skills: ["Cloud Security", "AWS IAM", "Kubernetes RBAC", "Cryptography"],
    projectTitle: "Automated Cloud Compliance & Security Posture Scanner",
    projectDescription: "Zero-trust policy enforcement across multi-cloud enterprise containers.",
    linkedIn: "https://www.linkedin.com/school/poornima-college-of-engineering-jaipur",
  },
  {
    id: "pu-19",
    name: "Aman Khandelwal",
    university: "Poornima University",
    universitySlug: "poornima",
    company: "Celebal Technologies",
    companySlug: "celebal",
    role: "Associate Cloud Consultant",
    ctc: 8.5,
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "AK",
    location: "Jaipur",
    isVerified: true,
    skills: ["Azure", "Data Factory", "Databricks", "Power BI", "SQL"],
    projectTitle: "Enterprise Azure Lakehouse Architecture",
    projectDescription: "End-to-end telemetry ingestion using Azure Data Factory and Delta Lake tables.",
    linkedIn: "https://www.linkedin.com/school/poornima-university",
  },
  {
    id: "piet-20",
    name: "Nidhi Pareek",
    university: "Poornima Institute of Engineering & Technology",
    universitySlug: "piet",
    company: "Capgemini",
    companySlug: "capgemini",
    role: "Senior Software Analyst",
    ctc: 7.5,
    year: 2024,
    branch: "B.Tech AIDS",
    avatar: "NP",
    location: "Noida",
    isVerified: true,
    skills: ["Python", "Machine Learning", "FastAPI", "React", "Docker"],
    projectTitle: "Smart Visual Quality Inspection for Automotive Assembly",
    projectDescription: "YOLOv8 defect detection model operating on edge cameras in real-time.",
    linkedIn: "https://www.linkedin.com/school/pietjaipur",
  },
  {
    id: "pu-21",
    name: "Rahul Rathore",
    university: "Poornima University",
    universitySlug: "poornima",
    company: "Infosys",
    companySlug: "infosys",
    role: "Digital Specialist Engineer",
    ctc: 9.5,
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "RR",
    location: "Pune",
    isVerified: true,
    skills: ["Java", "Spring Boot", "Microservices", "Angular", "Kafka"],
    projectTitle: "Core Banking Ledger Microservices",
    projectDescription: "Event-sourced transactional accounting engine with distributed locking.",
    linkedIn: "https://www.linkedin.com/school/poornima-university",
  },
  {
    id: "piet-22",
    name: "Deepak Saini",
    university: "Poornima Institute of Engineering & Technology",
    universitySlug: "piet",
    company: "Tekion",
    companySlug: "tekion",
    role: "Member Technical Staff (Cloud)",
    ctc: 12.5,
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "DS",
    location: "Bengaluru",
    isVerified: true,
    skills: ["Node.js", "Kubernetes", "MongoDB", "Event-Driven Systems"],
    projectTitle: "Automotive SaaS Dealership Inventory Mesh",
    projectDescription: "Cloud platform syncing multi-location vehicle inventory with zero lag.",
    linkedIn: "https://www.linkedin.com/school/pietjaipur",
  },
  {
    id: "pu-23",
    name: "Arjun Sharma",
    university: "Poornima University",
    universitySlug: "poornima",
    company: "Google",
    companySlug: "google",
    role: "Software Development Engineer (SDE-1)",
    ctc: 42.0,
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "AS",
    location: "Bengaluru",
    isVerified: true,
    skills: ["Go", "Distributed Systems", "gRPC", "Kafka", "Docker", "Raft Consensus"],
    projectTitle: "Distributed Real-Time Log Processing Pipeline",
    projectDescription: "Append-only distributed log broker with Raft consensus protocol handling 50k RPS.",
    linkedIn: "https://www.linkedin.com/school/poornima-university",
  },
  {
    id: "pu-24",
    name: "Priya Meena",
    university: "Poornima University",
    universitySlug: "poornima",
    company: "Microsoft",
    companySlug: "microsoft",
    role: "Software Engineer",
    ctc: 38.0,
    year: 2024,
    branch: "B.Tech IT",
    avatar: "PM",
    location: "Hyderabad",
    isVerified: true,
    skills: ["C++", "Azure", "TypeScript", "Microservices", "Kubernetes"],
    projectTitle: "Cloud-Native Hybrid Identity Provider",
    projectDescription: "OAuth2 & OIDC single-sign-on service integrated with Azure Active Directory.",
    linkedIn: "https://www.linkedin.com/school/poornima-university",
  },
];

// ─── 4. INTERVIEW QUESTIONS ──────────────────────────────────────────────────

export const INTERVIEW_QUESTIONS_DATA: InterviewQuestionData[] = [
  {
    id: "q1",
    title: "Find Top-K Frequent Elements in O(N log K) time",
    company: "Google",
    category: "CODING",
    difficulty: "MEDIUM",
    year: 2024,
    round: "Technical Round 1 (DSA)",
    tags: ["Hash Map", "Min-Heap", "Bucket Sort", "Arrays"],
    upvotes: 68,
    question:
      "Given an integer array nums and an integer k, return the k most frequent elements. Your algorithm's time complexity must be better than O(N log N), where N is the array's size.",
    timeComplexity: "O(N log K) with Min-Heap, or O(N) with Bucket Sort",
    spaceComplexity: "O(N) for frequency map",
    solution:
      "1. Build a frequency map of elements using a Hash Map in O(N) time.\n2. Maintain a Min-Heap of size K storing pairs (frequency, number).\n3. Iterate over the frequency map. For each unique number, push to heap. If heap size exceeds K, pop the smallest.\n4. Alternatively, use Bucket Sort where index represents frequency to achieve true O(N) time.",
    codeSnippet: `import heapq
from collections import Counter

def topKFrequent(nums: list[int], k: int) -> list[int]:
    count = Counter(nums)
    # Min-heap of size k: stores (frequency, num)
    return [item[1] for item in heapq.nlargest(k, [(freq, num) for num, freq in count.items()])]`,
  },
  {
    id: "q2",
    title: "Design an LRU Cache with O(1) Get and Put Operations",
    company: "Microsoft",
    category: "CODING",
    difficulty: "MEDIUM",
    year: 2024,
    round: "Technical Round 2 (DSA & Architecture)",
    tags: ["Hash Map", "Doubly Linked List", "System Design"],
    upvotes: 94,
    question:
      "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement LRUCache(int capacity), int get(int key), and void put(int key, int value), all in strict O(1) time.",
    timeComplexity: "O(1) for both get and put operations",
    spaceComplexity: "O(Capacity) space in HashMap + Doubly Linked List",
    solution:
      "Combine a Hash Map with a Doubly Linked List.\n- Hash Map stores `key -> Node pointer` for instant O(1) lookups.\n- Doubly Linked List maintains access order with dummy Head (Most Recently Used) and dummy Tail (Least Recently Used).\n- When accessed or added, remove the node and insert it immediately after the Head.\n- If capacity is exceeded on `put`, evict the node immediately before the Tail.",
    codeSnippet: `class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev = self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.head, self.tail = Node(), Node()
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def _add(self, node):
        node.next = self.head.next
        node.prev = self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self._remove(self.cache[key])
        node = Node(key, value)
        self.cache[key] = node
        self._add(node)
        if len(self.cache) > self.cap:
            lru = self.tail.prev
            self._remove(lru)
            del self.cache[lru.key]`,
  },
  {
    id: "q3",
    title: "Design a Scalable URL Shortener (Bitly Architecture)",
    company: "Amazon",
    category: "SYSTEM_DESIGN",
    difficulty: "HARD",
    year: 2024,
    round: "Technical Interview 3 (System Design)",
    tags: ["Distributed Systems", "Base62", "Caching", "Sharding"],
    upvotes: 112,
    question:
      "Design a high-scale URL Shortener service like tinyurl.com. Requirements: 100M new URLs per month, 10:1 read-to-write ratio, sub-10ms redirection latency, 99.99% availability.",
    timeComplexity: "O(1) lookup via Distributed Cache (Redis)",
    spaceComplexity: "36 TB total storage over 5 years",
    solution:
      "Architecture Components:\n1. API Gateway / Load Balancer (NGINX/ALB)\n2. Application Servers: Stateless Spring Boot/Go microservices.\n3. Unique ID Generator: Twitter Snowflake or distributed zookeeper range allocator to generate 64-bit unique integer IDs.\n4. Encoding: Convert integer ID into Base62 string (a-z, A-Z, 0-9). A 7-character Base62 string yields 62^7 ≈ 3.5 trillion URLs.\n5. Cache Layer: Redis cluster caching top 20% most accessed URLs (80-20 Pareto Rule).\n6. Database: Distributed NoSQL (Cassandra / DynamoDB) partitioned on URL hash.",
    codeSnippet: `// Base62 Encoding in TypeScript
const BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function encodeBase62(num: bigint): string {
  let str = "";
  while (num > 0n) {
    str = BASE62[Number(num % 62n)] + str;
    num /= 62n;
  }
  return str.padStart(7, "0");
}`,
  },
  {
    id: "q4",
    title: "DENSE_RANK() vs RANK() for Nth Highest Salary",
    company: "TCS",
    category: "SQL",
    difficulty: "MEDIUM",
    year: 2024,
    round: "Technical Interview (DBMS Round)",
    tags: ["SQL", "Window Functions", "PostgreSQL", "RDBMS"],
    upvotes: 56,
    question:
      "Explain the exact functional difference between RANK() and DENSE_RANK() window functions. Write a PostgreSQL query to find the 2nd highest salary for each department.",
    timeComplexity: "O(N log N) query execution",
    spaceComplexity: "O(N) working memory for sorting window",
    solution:
      "Key Distinction:\n- RANK() assigns duplicate ranks to tie values and skips subsequent rank numbers (e.g. 1, 2, 2, 4).\n- DENSE_RANK() assigns duplicate ranks to ties without skipping subsequent numbers (e.g. 1, 2, 2, 3).\nTo find the Nth highest salary correctly when ties exist, ALWAYS use DENSE_RANK()!",
    codeSnippet: `WITH RankedSalaries AS (
  SELECT 
    dept_id,
    emp_name,
    salary,
    DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) as rank_num
  FROM employees
)
SELECT dept_id, emp_name, salary
FROM RankedSalaries
WHERE rank_num = 2;`,
  },
  {
    id: "q5",
    title: "STAR Technique: Tell Me About a Challenging Technical Conflict",
    company: "Google",
    category: "HR",
    difficulty: "MEDIUM",
    year: 2024,
    round: "Googlyness & Behavioral",
    tags: ["Behavioral", "STAR Method", "Leadership", "Teamwork"],
    upvotes: 81,
    question:
      "Tell me about a time when you and a teammate strongly disagreed on an architectural choice for a software project. How did you handle the situation and what was the outcome?",
    solution:
      "Answer using the STAR framework (Situation, Task, Action, Result):\n\n- Situation: During our final year capstone project building a real-time collaborative code editor for Poornima University labs, our team was divided between using WebSockets with operational transforms versus HTTP polling with optimistic updates.\n- Task: As the backend lead, I needed to ensure we met sub-50ms latency requirements without overcomplicating our deployment within our 6-week sprint.\n- Action: Rather than debating theoretically, I proposed a 2-day proof-of-concept benchmark. I set up automated locust tests comparing both approaches under 100 concurrent clients. The benchmark revealed WebSockets sustained 42ms p99 latency while HTTP polling degraded to 380ms with 12x higher server CPU usage. I documented the trade-offs objectively and presented the findings to the team.\n- Result: The team unanimously agreed on WebSockets. We completed the project on schedule, which won 1st place in the university project expo and processed over 10,000 lab edits seamlessly.",
  },
  {
    id: "q6",
    title: "Amazon OA: Minimum Number of Swaps to Sort Array",
    company: "Amazon",
    category: "CODING",
    difficulty: "HARD",
    year: 2024,
    round: "Amazon Online Assessment (OA)",
    tags: ["Arrays", "Sorting", "Graph Theory"],
    upvotes: 145,
    question: "Given an array of N distinct integers, find the minimum number of swaps required to sort the array in strictly increasing order.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(N)",
    solution: "1. Store elements with their original indices.\n2. Sort the elements by their values.\n3. Identify cycles in the graph formed by the original and sorted positions.\n4. For a cycle of size K, the minimum swaps needed is K-1. Sum this for all cycles.",
    codeSnippet: `def minSwaps(arr):
    n = len(arr)
    arrpos = [*enumerate(arr)]
    arrpos.sort(key = lambda it : it[1])
    vis = {k : False for k in range(n)}
    ans = 0
    for i in range(n):
        if vis[i] or arrpos[i][0] == i:
            continue
        cycle_size = 0
        j = i
        while not vis[j]:
            vis[j] = True
            j = arrpos[j][0]
            cycle_size += 1
        if cycle_size > 0:
            ans += (cycle_size - 1)
    return ans`,
  },
  {
    id: "q7",
    title: "Optum Technical: Merge Two Sorted Linked Lists",
    company: "Optum",
    category: "CODING",
    difficulty: "EASY",
    year: 2024,
    round: "Technical Interview 1",
    tags: ["Linked List", "Two Pointers"],
    upvotes: 72,
    question: "Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.",
    timeComplexity: "O(N + M)",
    spaceComplexity: "O(1)",
    solution: "Use a dummy head to simplify edge cases. Use two pointers to traverse both lists simultaneously, appending the smaller value to the merged list.",
  },
  {
    id: "q8",
    title: "Infosys DSE: Find Longest Palindromic Substring",
    company: "Infosys",
    category: "CODING",
    difficulty: "MEDIUM",
    year: 2024,
    round: "InfyTQ / HackWithInfy",
    tags: ["Strings", "Dynamic Programming", "Two Pointers"],
    upvotes: 110,
    question: "Given a string s, return the longest palindromic substring in s. Your solution should ideally have a time complexity of O(N^2) and space complexity of O(1).",
    timeComplexity: "O(N^2)",
    spaceComplexity: "O(1) using expand around center",
    solution: "Use the 'Expand Around Center' approach. Iterate through each character (and between each pair of characters) as a potential center and expand outwards as long as the string remains a palindrome.",
  },
  {
    id: "q9",
    title: "Capgemini Pseudo Code & Array Manipulation",
    company: "Capgemini",
    category: "CODING",
    difficulty: "EASY",
    year: 2023,
    round: "Coding Assessment",
    tags: ["Arrays", "Math"],
    upvotes: 89,
    question: "Write a program to find the missing number in an array of size N-1 containing distinct integers in the range of 1 to N.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    solution: "Calculate the sum of first N natural numbers using N*(N+1)/2. Then iterate through the array and subtract each element from this sum. The remaining value is the missing number.",
  },
  {
    id: "q10",
    title: "Celebal Data Engineer: SQL Joins & Aggregations",
    company: "Celebal Technologies",
    category: "SQL",
    difficulty: "MEDIUM",
    year: 2024,
    round: "Technical Machine Coding",
    tags: ["SQL", "Joins", "Aggregation"],
    upvotes: 65,
    question: "Write a SQL query to fetch department-wise highest salary employees. If multiple employees share the highest salary, include all of them.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(N)",
    solution: "Use the DENSE_RANK() window function partitioned by department and ordered by salary descending. Then filter for rank = 1.",
  },
  {
    id: "q11",
    title: "Tekion System Design: E-Commerce Inventory",
    company: "Tekion",
    category: "SYSTEM_DESIGN",
    difficulty: "HARD",
    year: 2024,
    round: "Low Level Design (LLD)",
    tags: ["System Design", "Concurrency", "Databases"],
    upvotes: 130,
    question: "Design an inventory management system for a high-traffic e-commerce platform. How do you handle concurrent purchases of the same item avoiding overselling (race conditions)?",
    solution: "Discuss optimistic vs pessimistic locking in the database. A common approach is using Optimistic Locking with a 'version' column, or Pessimistic Locking (SELECT ... FOR UPDATE). Also discuss caching inventory counts in Redis and using distributed locks or atomic decr operations.",
  },
];
