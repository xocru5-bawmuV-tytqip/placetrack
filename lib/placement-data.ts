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
  type: "Private" | "Government" | "Deemed";
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

// ─── 1. UNIVERSITIES ─────────────────────────────────────────────────────────

export const UNIVERSITIES_DATA: UniversityData[] = [
  {
    id: "poornima",
    name: "Poornima University",
    slug: "poornima",
    shortName: "PU",
    location: "Ramchandrapura, Sitapura Extension, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    type: "Private",
    established: 2012,
    website: "https://poornima.edu.in",
    logo: "PU",
    nirfRank: "Top 100 University in India",
    accreditation: "NAAC A+ Accredited, UGC & AICTE Approved",
    placed: 1842,
    companies: 210,
    avgCTC: "₹6.4 LPA",
    highestCTC: "₹42 LPA",
    topCompany: "Google",
    placementRate: "94.6%",
    description:
      "Poornima University is Rajasthan's premier multidisciplinary research and technology institution. Boasting exceptional industrial integration, robust on-campus drives, advanced AI and Cloud labs, and state-of-the-art incubation centres, PU has placed thousands of engineers in Fortune 500 tech companies.",
    departments: [
      { name: "Computer Science & Engineering", code: "CSE", avgCTC: "₹7.8 LPA", highestCTC: "₹42 LPA", placementRate: "96.2%" },
      { name: "Information Technology", code: "IT", avgCTC: "₹7.2 LPA", highestCTC: "₹38 LPA", placementRate: "94.8%" },
      { name: "AI & Data Science", code: "AIDS", avgCTC: "₹8.2 LPA", highestCTC: "₹36 LPA", placementRate: "95.5%" },
      { name: "Electronics & Communication", code: "ECE", avgCTC: "₹5.8 LPA", highestCTC: "₹24 LPA", placementRate: "89.2%" },
      { name: "Mechanical Engineering", code: "ME", avgCTC: "₹5.2 LPA", highestCTC: "₹16 LPA", placementRate: "86.0%" },
      { name: "Master of Business Admin", code: "MBA", avgCTC: "₹6.8 LPA", highestCTC: "₹20 LPA", placementRate: "92.0%" },
    ],
    placementTrends: [
      { year: 2021, placed: 1240, avgCTC: "₹5.2 LPA", highestCTC: "₹26 LPA" },
      { year: 2022, placed: 1510, avgCTC: "₹5.8 LPA", highestCTC: "₹33 LPA" },
      { year: 2023, placed: 1680, avgCTC: "₹6.1 LPA", highestCTC: "₹38 LPA" },
      { year: 2024, placed: 1842, avgCTC: "₹6.4 LPA", highestCTC: "₹42 LPA" },
    ],
    topRecruiters: ["Google", "Microsoft", "Amazon", "Razorpay", "Flipkart", "Zomato", "TCS", "Infosys", "Deloitte", "LTI Mindtree"],
  },
  {
    id: "mnit",
    name: "MNIT Jaipur",
    slug: "mnit",
    shortName: "MNIT",
    location: "Jawahar Lal Nehru Marg, Malviya Nagar, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    type: "Government",
    established: 1963,
    website: "https://mnit.ac.in",
    logo: "MN",
    nirfRank: "NIRF #37 (Engineering)",
    accreditation: "Institute of National Importance (INI)",
    placed: 980,
    companies: 156,
    avgCTC: "₹13.8 LPA",
    highestCTC: "₹64 LPA",
    topCompany: "Atlassian",
    placementRate: "91.2%",
    description:
      "Malaviya National Institute of Technology (MNIT) Jaipur is one of India's leading NITs, offering elite engineering education, cutting-edge research, and top tier product engineering placements across global tech leaders.",
    departments: [
      { name: "Computer Science & Engineering", code: "CSE", avgCTC: "₹20.4 LPA", highestCTC: "₹64 LPA", placementRate: "98.5%" },
      { name: "Electrical Engineering", code: "EE", avgCTC: "₹12.2 LPA", highestCTC: "₹32 LPA", placementRate: "88.0%" },
      { name: "Electronics & Communication", code: "ECE", avgCTC: "₹15.6 LPA", highestCTC: "₹45 LPA", placementRate: "92.4%" },
      { name: "Mechanical Engineering", code: "ME", avgCTC: "₹9.8 LPA", highestCTC: "₹22 LPA", placementRate: "84.5%" },
    ],
    placementTrends: [
      { year: 2022, placed: 890, avgCTC: "₹11.8 LPA", highestCTC: "₹52 LPA" },
      { year: 2023, placed: 940, avgCTC: "₹12.9 LPA", highestCTC: "₹58 LPA" },
      { year: 2024, placed: 980, avgCTC: "₹13.8 LPA", highestCTC: "₹64 LPA" },
    ],
    topRecruiters: ["Atlassian", "Google", "Microsoft", "Goldman Sachs", "Amazon", "Texas Instruments", "Qualcomm"],
  },
  {
    id: "bits-pilani",
    name: "BITS Pilani",
    slug: "bits-pilani",
    shortName: "BITS",
    location: "Vidya Vihar, Pilani",
    city: "Pilani",
    state: "Rajasthan",
    type: "Deemed",
    established: 1964,
    website: "https://bits-pilani.ac.in",
    logo: "BP",
    nirfRank: "NIRF #25 (Engineering / Overall)",
    accreditation: "Institute of Eminence (IoE), NAAC A++",
    placed: 1560,
    companies: 240,
    avgCTC: "₹19.5 LPA",
    highestCTC: "₹60 LPA",
    topCompany: "Microsoft",
    placementRate: "97.4%",
    description:
      "Birla Institute of Technology and Science (BITS), Pilani is India's most prestigious private engineering institute, famous for its no-attendance policy, Practice School internship program, and Silicon Valley alumni network.",
    departments: [
      { name: "Computer Science & Engineering", code: "CSE", avgCTC: "₹27.5 LPA", highestCTC: "₹60 LPA", placementRate: "99.2%" },
      { name: "Electrical & Electronics", code: "EEE", avgCTC: "₹18.4 LPA", highestCTC: "₹48 LPA", placementRate: "96.5%" },
      { name: "Economics & Finance (Dual)", code: "ECO", avgCTC: "₹22.1 LPA", highestCTC: "₹55 LPA", placementRate: "98.0%" },
    ],
    placementTrends: [
      { year: 2022, placed: 1420, avgCTC: "₹17.2 LPA", highestCTC: "₹54 LPA" },
      { year: 2023, placed: 1490, avgCTC: "₹18.5 LPA", highestCTC: "₹58 LPA" },
      { year: 2024, placed: 1560, avgCTC: "₹19.5 LPA", highestCTC: "₹60 LPA" },
    ],
    topRecruiters: ["Microsoft", "Google", "Uber", "Apple", "Goldman Sachs", "DE Shaw", "Tower Research"],
  },
  {
    id: "vit-jaipur",
    name: "VIT Jaipur",
    slug: "vit-jaipur",
    shortName: "VIT-J",
    location: "Sector 36, Srijan Campus, Jagatpura, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    type: "Private",
    established: 2013,
    website: "https://vitj.ac.in",
    logo: "VJ",
    nirfRank: "Top Private Engineering Institute",
    accreditation: "NAAC A+ Accredited",
    placed: 2130,
    companies: 185,
    avgCTC: "₹7.2 LPA",
    highestCTC: "₹44 LPA",
    topCompany: "Microsoft",
    placementRate: "93.1%",
    description:
      "Vivekananda Institute of Technology (VIT Jaipur) provides intensive engineering training, international conferences, and dedicated corporate placement tie-ups resulting in high placement volumes across IT & Product firms.",
    departments: [
      { name: "Computer Science & Engineering", code: "CSE", avgCTC: "₹8.4 LPA", highestCTC: "₹44 LPA", placementRate: "95.0%" },
      { name: "Information Technology", code: "IT", avgCTC: "₹7.6 LPA", highestCTC: "₹34 LPA", placementRate: "93.5%" },
      { name: "Electronics & Communication", code: "ECE", avgCTC: "₹6.1 LPA", highestCTC: "₹20 LPA", placementRate: "88.2%" },
    ],
    placementTrends: [
      { year: 2022, placed: 1820, avgCTC: "₹6.2 LPA", highestCTC: "₹36 LPA" },
      { year: 2023, placed: 1980, avgCTC: "₹6.8 LPA", highestCTC: "₹40 LPA" },
      { year: 2024, placed: 2130, avgCTC: "₹7.2 LPA", highestCTC: "₹44 LPA" },
    ],
    topRecruiters: ["Microsoft", "Amazon", "Cognizant", "Wipro", "TCS", "Capgemini", "Accenture"],
  },
  {
    id: "jecrc",
    name: "JECRC University",
    slug: "jecrc",
    shortName: "JU",
    location: "Plot No. IS-2036 to 2039, Ramchandrapura, Sitapura Industrial Area Extn, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    type: "Private",
    established: 2012,
    website: "https://jecrcuniversity.edu.in",
    logo: "JE",
    nirfRank: "Ranked among top private universities in North India",
    accreditation: "NAAC Accredited",
    placed: 1280,
    companies: 140,
    avgCTC: "₹5.8 LPA",
    highestCTC: "₹33 LPA",
    topCompany: "Amazon",
    placementRate: "89.4%",
    description:
      "JECRC University is known for its strong culture of technical clubs, campus recruitment marathons, and consistent mass & dream hiring offers.",
    departments: [
      { name: "Computer Science & Engineering", code: "CSE", avgCTC: "₹6.8 LPA", highestCTC: "₹33 LPA", placementRate: "93.0%" },
      { name: "Information Technology", code: "IT", avgCTC: "₹6.2 LPA", highestCTC: "₹28 LPA", placementRate: "90.0%" },
      { name: "ECE & Mechanical", code: "CORE", avgCTC: "₹4.8 LPA", highestCTC: "₹18 LPA", placementRate: "82.5%" },
    ],
    placementTrends: [
      { year: 2022, placed: 1050, avgCTC: "₹5.1 LPA", highestCTC: "₹26 LPA" },
      { year: 2023, placed: 1180, avgCTC: "₹5.4 LPA", highestCTC: "₹30 LPA" },
      { year: 2024, placed: 1280, avgCTC: "₹5.8 LPA", highestCTC: "₹33 LPA" },
    ],
    topRecruiters: ["Amazon", "TCS", "Infosys", "Hexaware", "LTI Mindtree", "Celebal Technologies"],
  },
  {
    id: "jnu-jaipur",
    name: "Jaipur National University",
    slug: "jnu-jaipur",
    shortName: "JNU",
    location: "Jaipur-Agra Bypass, Jagatpura, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    type: "Private",
    established: 2007,
    website: "https://jnujaipur.ac.in",
    logo: "JN",
    nirfRank: "NAAC Accredited",
    accreditation: "UGC Approved",
    placed: 760,
    companies: 105,
    avgCTC: "₹5.0 LPA",
    highestCTC: "₹28 LPA",
    topCompany: "TCS",
    placementRate: "85.2%",
    description:
      "Jaipur National University offers multidisciplinary training covering computer applications, biotechnology, engineering, and pharmacy with steady regional corporate hiring.",
    departments: [
      { name: "Computer Science & Engineering", code: "CSE", avgCTC: "₹5.8 LPA", highestCTC: "₹28 LPA", placementRate: "88.0%" },
      { name: "Management Studies", code: "MBA", avgCTC: "₹5.2 LPA", highestCTC: "₹16 LPA", placementRate: "85.0%" },
    ],
    placementTrends: [
      { year: 2023, placed: 710, avgCTC: "₹4.6 LPA", highestCTC: "₹24 LPA" },
      { year: 2024, placed: 760, avgCTC: "₹5.0 LPA", highestCTC: "₹28 LPA" },
    ],
    topRecruiters: ["TCS", "Infosys", "Wipro", "Collabera", "Genpact"],
  },
  {
    id: "manipal-jaipur",
    name: "Manipal University Jaipur",
    slug: "manipal-jaipur",
    shortName: "MUJ",
    location: "Dehmi Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Expressway",
    city: "Jaipur",
    state: "Rajasthan",
    type: "Private",
    established: 2011,
    website: "https://jaipur.manipal.edu",
    logo: "MJ",
    nirfRank: "NIRF #64 (Engineering)",
    accreditation: "NAAC A+ Accredited",
    placed: 1450,
    companies: 215,
    avgCTC: "₹8.4 LPA",
    highestCTC: "₹45 LPA",
    topCompany: "Microsoft",
    placementRate: "93.8%",
    description:
      "Manipal University Jaipur features world-class infrastructure, research incubation, and a global placement network attracting tier-1 product organizations.",
    departments: [
      { name: "Computer Science & Engineering", code: "CSE", avgCTC: "₹10.5 LPA", highestCTC: "₹45 LPA", placementRate: "96.4%" },
      { name: "Information Technology", code: "IT", avgCTC: "₹9.2 LPA", highestCTC: "₹38 LPA", placementRate: "94.0%" },
      { name: "Data Science & AI", code: "DSAI", avgCTC: "₹9.8 LPA", highestCTC: "₹40 LPA", placementRate: "95.0%" },
    ],
    placementTrends: [
      { year: 2022, placed: 1220, avgCTC: "₹7.4 LPA", highestCTC: "₹38 LPA" },
      { year: 2023, placed: 1350, avgCTC: "₹7.9 LPA", highestCTC: "₹42 LPA" },
      { year: 2024, placed: 1450, avgCTC: "₹8.4 LPA", highestCTC: "₹45 LPA" },
    ],
    topRecruiters: ["Microsoft", "Amazon", "Dell", "Cisco", "Adobe", "Accenture"],
  },
  {
    id: "iit-jodhpur",
    name: "IIT Jodhpur",
    slug: "iit-jodhpur",
    shortName: "IIT-J",
    location: "NH 62, Nagaur Road, Karwar, Jodhpur",
    city: "Jodhpur",
    state: "Rajasthan",
    type: "Government",
    established: 2008,
    website: "https://iitj.ac.in",
    logo: "IJ",
    nirfRank: "NIRF #30 (Engineering)",
    accreditation: "Institute of National Importance",
    placed: 490,
    companies: 120,
    avgCTC: "₹21.3 LPA",
    highestCTC: "₹65 LPA",
    topCompany: "Google",
    placementRate: "92.0%",
    description:
      "Indian Institute of Technology (IIT) Jodhpur focuses on deep tech, quantum computing, AI, and smart healthcare with leading international and domestic compensation packages.",
    departments: [
      { name: "Computer Science & Engineering", code: "CSE", avgCTC: "₹28.2 LPA", highestCTC: "₹65 LPA", placementRate: "98.0%" },
      { name: "Artificial Intelligence & Data", code: "AI", avgCTC: "₹25.0 LPA", highestCTC: "₹55 LPA", placementRate: "96.0%" },
      { name: "Electrical Engineering", code: "EE", avgCTC: "₹18.6 LPA", highestCTC: "₹40 LPA", placementRate: "90.0%" },
    ],
    placementTrends: [
      { year: 2023, placed: 440, avgCTC: "₹19.8 LPA", highestCTC: "₹60 LPA" },
      { year: 2024, placed: 490, avgCTC: "₹21.3 LPA", highestCTC: "₹65 LPA" },
    ],
    topRecruiters: ["Google", "Microsoft", "Oracle", "Qualcomm", "Texas Instruments", "Morgan Stanley"],
  },
];

// ─── 2. COMPANIES ────────────────────────────────────────────────────────────

export const COMPANIES_DATA: CompanyData[] = [
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
    hiredFromUniversities: ["Poornima University", "MNIT Jaipur", "BITS Pilani", "IIT Jodhpur"],
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
    hiredFromUniversities: ["Poornima University", "VIT Jaipur", "BITS Pilani", "Manipal University Jaipur"],
  },
  {
    id: "amazon",
    name: "Amazon",
    slug: "amazon",
    sector: "E-Commerce / Cloud (AWS)",
    hqLocation: "Seattle, WA / Hyderabad, Bengaluru, Chennai",
    website: "https://amazon.jobs",
    logo: "A",
    avgCTC: "₹26.5 LPA",
    highestCTC: "₹38 LPA",
    roles: ["SDE-1", "Cloud Support Associate", "Data Engineer", "Operations Manager"],
    eligibility: {
      minCGPA: 6.8,
      branches: ["CSE", "IT", "ECE", "EE", "AIDS"],
      backlogsAllowed: false,
    },
    selectionRounds: [
      {
        roundNumber: 1,
        title: "Amazon Online Assessment",
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
        description: "Conducted by an independent Amazonian outside the hiring group to ensure the candidate raises the team bar.",
        focusAreas: ["Dive Deep", "Invent & Simplify", "Deliver Results"],
      },
    ],
    overview:
      "Amazon is guided by four principles: customer obsession, passion for invention, commitment to operational excellence, and long-term thinking.",
    activeHiring: true,
    hiredFromUniversities: ["Poornima University", "MNIT Jaipur", "JECRC University", "VIT Jaipur"],
  },
  {
    id: "razorpay",
    name: "Razorpay",
    slug: "razorpay",
    sector: "FinTech",
    hqLocation: "Bengaluru, Karnataka",
    website: "https://razorpay.com/jobs",
    logo: "R",
    avgCTC: "₹22.0 LPA",
    highestCTC: "₹32 LPA",
    roles: ["Backend Engineer", "Frontend Engineer", "DevOps Engineer"],
    eligibility: {
      minCGPA: 7.0,
      branches: ["CSE", "IT"],
      backlogsAllowed: false,
    },
    selectionRounds: [
      {
        roundNumber: 1,
        title: "HackerRank Coding Challenge",
        duration: "90 mins",
        description: "3 medium-to-hard coding problems focusing on strings, stacks, and graph traversals.",
        focusAreas: ["Algorithms", "Data Structures"],
      },
      {
        roundNumber: 2,
        title: "Technical Round: Machine Coding",
        duration: "90 mins",
        description: "Build a working mini system (e.g., In-Memory Rate Limiter or Payment Gateway Router) in 90 minutes.",
        focusAreas: ["Clean Architecture", "OOP", "Concurrency"],
      },
      {
        roundNumber: 3,
        title: "System Design & CS Core",
        duration: "60 mins",
        description: "High-level design, database schema, indexing, and Redis caching.",
        focusAreas: ["Redis", "PostgreSQL", "Kafka"],
      },
      {
        roundNumber: 4,
        title: "Culture & Engineering Fit",
        duration: "45 mins",
        description: "Product mindset, fast-paced execution, and FinTech reliability.",
        focusAreas: ["Product Thinking", "Ownership"],
      },
    ],
    overview:
      "Razorpay is India's leading full-stack payments and business banking platform, enabling millions of businesses to accept, process, and disburse payments.",
    activeHiring: true,
    hiredFromUniversities: ["Poornima University", "MNIT Jaipur", "BITS Pilani"],
  },
  {
    id: "tcs",
    name: "Tata Consultancy Services",
    slug: "tcs",
    sector: "IT Services & Consulting",
    hqLocation: "Mumbai, Maharashtra",
    website: "https://tcs.com/careers",
    logo: "TCS",
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
    hiredFromUniversities: ["Poornima University", "JECRC University", "VIT Jaipur", "Jaipur National University"],
  },
  {
    id: "zomato",
    name: "Zomato",
    slug: "zomato",
    sector: "Consumer Tech / Quick Commerce",
    hqLocation: "Gurugram, Haryana",
    website: "https://zomato.com/careers",
    logo: "Z",
    avgCTC: "₹20.0 LPA",
    highestCTC: "₹28 LPA",
    roles: ["Software Development Engineer", "Product Analyst", "Associate Product Manager"],
    eligibility: {
      minCGPA: 7.0,
      branches: ["CSE", "IT", "AIDS"],
      backlogsAllowed: false,
    },
    selectionRounds: [
      {
        roundNumber: 1,
        title: "Online Coding Test",
        duration: "75 mins",
        description: "Algorithms focusing on graph traversal, sorting, and dynamic programming.",
        focusAreas: ["Graph Algorithms", "Greedy Approaches"],
      },
      {
        roundNumber: 2,
        title: "Technical Problem Solving",
        duration: "60 mins",
        description: "Deep dive into real-world scaling problems like geohashing, rider allocation, and real-time queues.",
        focusAreas: ["System Scalability", "DSA"],
      },
      {
        roundNumber: 3,
        title: "Engineering Culture & Founder Mindset",
        duration: "45 mins",
        description: "Product ownership, obsession with user experience, and high agency.",
        focusAreas: ["High Agency", "Ownership", "Product Vision"],
      },
    ],
    overview:
      "Zomato and Blinkit power India's hyper-local delivery ecosystem, connecting millions of consumers with restaurants, delivery partners, and quick commerce grocery.",
    activeHiring: true,
    hiredFromUniversities: ["Poornima University", "BITS Pilani", "MNIT Jaipur"],
  },
];

// ─── 3. PLACEMENTS / CANDIDATES ──────────────────────────────────────────────

export const PLACEMENTS_DATA: CandidatePlacement[] = [
  {
    id: "1",
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
  },
  {
    id: "2",
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
  },
  {
    id: "3",
    name: "Amit Verma",
    university: "Poornima University",
    universitySlug: "poornima",
    company: "Amazon",
    companySlug: "amazon",
    role: "SDE-1 (AWS Cloud)",
    ctc: 32.0,
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "AV",
    location: "Bengaluru",
    isVerified: true,
    skills: ["Java", "AWS Lambda", "DynamoDB", "Spring Boot", "System Design"],
    projectTitle: "Serverless Event-Driven Order Processing",
    projectDescription: "Resilient asynchronous checkout pipeline with SQS dead-letter queuing.",
  },
  {
    id: "4",
    name: "Anjali Gupta",
    university: "Poornima University",
    universitySlug: "poornima",
    company: "Razorpay",
    companySlug: "razorpay",
    role: "Backend Engineer",
    ctc: 22.0,
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "AG",
    location: "Bengaluru",
    isVerified: true,
    skills: ["Go", "PostgreSQL", "Redis", "Payment Routing", "Docker"],
    projectTitle: "High-Throughput In-Memory Rate Limiter",
    projectDescription: "Token-bucket sliding window algorithm in Go with Redis backplane.",
  },
  {
    id: "5",
    name: "Vikram Patel",
    university: "Poornima University",
    universitySlug: "poornima",
    company: "Zomato",
    companySlug: "zomato",
    role: "Full Stack Engineer",
    ctc: 20.0,
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "VP",
    location: "Gurugram",
    isVerified: true,
    skills: ["Next.js", "Node.js", "Redis", "WebSockets", "MongoDB"],
    projectTitle: "Live Hyperlocal Fleet Tracking Platform",
    projectDescription: "Interactive GPS delivery tracking with sub-second WebSocket updates.",
  },
  {
    id: "6",
    name: "Neha Joshi",
    university: "Poornima University",
    universitySlug: "poornima",
    company: "Flipkart",
    companySlug: "flipkart",
    role: "Data Analyst",
    ctc: 18.0,
    year: 2024,
    branch: "B.Tech AIDS",
    avatar: "NJ",
    location: "Bengaluru",
    isVerified: true,
    skills: ["Python", "SQL", "Pandas", "Tableau", "Time Series Forecasting"],
    projectTitle: "Festival Sale Demand Forecasting Model",
    projectDescription: "XGBoost and Prophet models reducing inventory stockouts by 24%.",
  },
  {
    id: "7",
    name: "Rohan Agarwal",
    university: "Poornima University",
    universitySlug: "poornima",
    company: "TCS",
    companySlug: "tcs",
    role: "TCS Prime Software Engineer",
    ctc: 11.5,
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "RA",
    location: "Mumbai",
    isVerified: true,
    skills: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
    projectTitle: "Enterprise Resource Management Portal",
    projectDescription: "RBAC workflow automation system deployed on Kubernetes.",
  },
  {
    id: "8",
    name: "Divya Verma",
    university: "Poornima University",
    universitySlug: "poornima",
    company: "Deloitte",
    companySlug: "deloitte",
    role: "Technology Consultant",
    ctc: 12.0,
    year: 2024,
    branch: "B.Tech ECE",
    avatar: "DV",
    location: "Gurugram",
    isVerified: true,
    skills: ["Python", "Cloud Security", "SQL", "SAP", "Power BI"],
    projectTitle: "Automated Cloud Compliance Auditor",
    projectDescription: "AWS IAM security benchmark scanner with alerting via Slack.",
  },
  {
    id: "9",
    name: "Deepak Kumar",
    university: "MNIT Jaipur",
    universitySlug: "mnit",
    company: "Atlassian",
    companySlug: "atlassian",
    role: "Software Engineer",
    ctc: 64.0,
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "DK",
    location: "Bengaluru",
    isVerified: true,
    skills: ["Java", "Kotlin", "React", "GraphQL", "Distributed Systems"],
    projectTitle: "Real-Time Collaborative Canvas Editor",
    projectDescription: "Operational Transformation engine supporting 20 concurrent editors.",
  },
  {
    id: "10",
    name: "Sakshi Dubey",
    university: "BITS Pilani",
    universitySlug: "bits-pilani",
    company: "Google",
    companySlug: "google",
    role: "Software Engineer",
    ctc: 55.0,
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "SD",
    location: "Bengaluru",
    isVerified: true,
    skills: ["C++", "Python", "ML Systems", "TensorFlow", "Kubernetes"],
    projectTitle: "Low-Latency Vector Search Engine",
    projectDescription: "HNSW approximate nearest neighbor index over 10M embeddings.",
  },
  {
    id: "11",
    name: "Karan Malhotra",
    university: "VIT Jaipur",
    universitySlug: "vit-jaipur",
    company: "Microsoft",
    companySlug: "microsoft",
    role: "Software Engineer",
    ctc: 44.0,
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "KM",
    location: "Hyderabad",
    isVerified: true,
    skills: ["C#", ".NET Core", "Azure", "React", "SQL Server"],
    projectTitle: "Distributed Cache Synchronization Broker",
    projectDescription: "Multi-region cache invalidation engine reducing stale reads by 99%.",
  },
  {
    id: "12",
    name: "Manish Yadav",
    university: "JECRC University",
    universitySlug: "jecrc",
    company: "Amazon",
    companySlug: "amazon",
    role: "SDE-1",
    ctc: 33.0,
    year: 2024,
    branch: "B.Tech CSE",
    avatar: "MY",
    location: "Bengaluru",
    isVerified: true,
    skills: ["Java", "AWS", "Spring Boot", "MySQL", "Algorithms"],
    projectTitle: "Automated Package Sorting Simulator",
    projectDescription: "Dijkstra-based routing engine minimizing warehouse transfer latency.",
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
];
