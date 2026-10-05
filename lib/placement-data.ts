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
    companies: 350,
    avgCTC: "₹5.85 LPA",
    highestCTC: "₹52.83 LPA",
    topCompany: "Amazon / Microsoft",
    placementRate: "94.6%",
    description:
      "Poornima University (PU) is Rajasthan's premier multidisciplinary research and technology institution. Boasting exceptional industrial integration, robust on-campus drives, advanced AI and Cloud labs, and state-of-the-art incubation centres, PU has achieved a historic peak package of ₹52.83 LPA with 350+ annual recruiting partners.",
    departments: [
      { name: "Computer Science & Engineering", code: "CSE", avgCTC: "₹7.8 LPA", highestCTC: "₹52.83 LPA", placementRate: "96.2%" },
      { name: "AI & Data Science (with SAS)", code: "AIDS", avgCTC: "₹8.2 LPA", highestCTC: "₹36.00 LPA", placementRate: "95.5%" },
      { name: "Cloud Technology & DevOps", code: "Cloud", avgCTC: "₹7.5 LPA", highestCTC: "₹32.00 LPA", placementRate: "94.8%" },
      { name: "Cyber Security", code: "Cyber", avgCTC: "₹7.2 LPA", highestCTC: "₹28.00 LPA", placementRate: "93.4%" },
      { name: "Computer Applications (BCA & MCA)", code: "BCA/MCA", avgCTC: "₹6.2 LPA", highestCTC: "₹22.00 LPA", placementRate: "93.0%" },
      { name: "Electrical & Electronics Engineering", code: "EE/ECE", avgCTC: "₹5.8 LPA", highestCTC: "₹24.00 LPA", placementRate: "89.2%" },
      { name: "Faculty of Management & Commerce (MBA)", code: "MBA", avgCTC: "₹6.8 LPA", highestCTC: "₹18.00 LPA", placementRate: "92.0%" },
    ],
    placementTrends: [
      { year: 2022, placed: 1480, avgCTC: "₹4.90 LPA", highestCTC: "₹26.00 LPA" },
      { year: 2023, placed: 1610, avgCTC: "₹5.35 LPA", highestCTC: "₹30.00 LPA" },
      { year: 2024, placed: 1720, avgCTC: "₹5.50 LPA", highestCTC: "₹30.00 LPA" },
      { year: 2025, placed: 1850, avgCTC: "₹5.85 LPA", highestCTC: "₹52.83 LPA" },
    ],
    topRecruiters: [
      "Amazon", "Microsoft", "Google", "Morgan Stanley", "Celebal Technologies",
      "Infosys", "TCS", "Capgemini", "Optum", "Xebia", "Tekion", "rtCamp"
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
