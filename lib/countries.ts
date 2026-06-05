export const TOP_COUNTRIES = [
  { code: "US", name: "United States", currency: "USD", cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"] },
  { code: "CA", name: "Canada", currency: "CAD", cities: ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Kitchener"] },
  { code: "GB", name: "United Kingdom", currency: "GBP", cities: ["London", "Birmingham", "Manchester", "Glasgow", "Liverpool", "Bristol", "Sheffield", "Leeds", "Edinburgh", "Leicester"] },
  { code: "IN", name: "India", currency: "INR", cities: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat"] },
  { code: "AU", name: "Australia", currency: "AUD", cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Newcastle", "Wollongong", "Hobart"] },
  { code: "DE", name: "Germany", currency: "EUR", cities: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Leipzig", "Dortmund", "Essen"] },
  { code: "FR", name: "France", currency: "EUR", cities: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"] },
  { code: "AE", name: "UAE", currency: "AED", cities: ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Khor Fakkan", "Dibba"] },
  { code: "SG", name: "Singapore", currency: "SGD", cities: ["Singapore City", "Jurong East", "Tampines", "Woodlands", "Sengkang", "Punggol", "Hougang", "Yishun", "Bukit Merah", "Bedok"] },
  { code: "NZ", name: "New Zealand", currency: "NZD", cities: ["Auckland", "Wellington", "Christchurch", "Hamilton", "Tauranga", "Napier", "Palmerston North", "Nelson", "Rotorua", "New Plymouth"] },
];

export const JOB_TITLES = [
  "Software Engineer", "Senior Software Engineer", "Full Stack Developer", "Frontend Developer", "Backend Developer",
  "DevOps Engineer", "Cloud Architect", "Data Scientist", "Machine Learning Engineer", "Data Analyst",
  "Product Manager", "Project Manager", "Scrum Master", "Business Analyst", "UX Designer",
  "UI Designer", "Graphic Designer", "Marketing Manager", "Digital Marketing Specialist", "SEO Specialist",
  "Content Writer", "Copywriter", "Social Media Manager", "Sales Manager", "Account Executive",
  "Customer Success Manager", "HR Manager", "Recruiter", "Finance Manager", "Accountant",
  "Financial Analyst", "Operations Manager", "Supply Chain Manager", "Logistics Coordinator", "Warehouse Manager",
  "Quality Assurance Engineer", "Security Engineer", "Network Engineer", "Systems Administrator", "Database Administrator",
  "Mobile Developer", "iOS Developer", "Android Developer", "React Native Developer", "Flutter Developer",
  "Technical Writer", "Solutions Architect", "IT Support Specialist", "CRM Manager", "E-commerce Manager",
  "Data Engineer", "BI Developer", "Automation Engineer", "Embedded Systems Engineer", "Firmware Developer",
  "Electrical Engineer", "Mechanical Engineer", "Civil Engineer", "Chemical Engineer", "Biomedical Engineer",
  "Healthcare Administrator", "Nurse", "Pharmacist", "Medical Coder", "Clinical Data Manager",
  "Legal Counsel", "Compliance Officer", "Risk Analyst", "Procurement Specialist", "Brand Manager",
  "Event Manager", "PR Manager", "Training Coordinator", "Learning & Development Manager", "Talent Acquisition Specialist",
];

export const SENIORITY_LEVELS = ["Junior", "Mid-Level", "Senior", "Lead", "Principal", "Staff", "Associate", "Director of"];

export const EMPLOYMENT_TYPES = ["FULL_TIME", "PART_TIME", "CONTRACTOR", "TEMPORARY", "INTERN"];

export const SALARY_RANGES: Record<string, [number, number][]> = {
  US: [[50000, 80000], [80000, 120000], [120000, 160000], [160000, 200000], [200000, 280000]],
  CA: [[45000, 70000], [70000, 100000], [100000, 140000], [140000, 180000], [180000, 240000]],
  GB: [[30000, 50000], [50000, 75000], [75000, 100000], [100000, 140000], [140000, 200000]],
  IN: [[300000, 600000], [600000, 1200000], [1200000, 2000000], [2000000, 3500000], [3500000, 6000000]],
  AU: [[55000, 80000], [80000, 110000], [110000, 150000], [150000, 200000], [200000, 280000]],
  DE: [[35000, 55000], [55000, 80000], [80000, 110000], [110000, 150000], [150000, 200000]],
  FR: [[30000, 50000], [50000, 70000], [70000, 100000], [100000, 140000], [140000, 190000]],
  AE: [[60000, 100000], [100000, 150000], [150000, 220000], [220000, 300000], [300000, 450000]],
  SG: [[40000, 70000], [70000, 100000], [100000, 140000], [140000, 200000], [200000, 300000]],
  NZ: [[45000, 70000], [70000, 95000], [95000, 130000], [130000, 180000], [180000, 240000]],
};

export const SKILLS_BY_DOMAIN: Record<string, string[]> = {
  tech: ["JavaScript", "TypeScript", "Python", "React", "Node.js", "AWS", "Docker", "Kubernetes", "SQL", "Git", "REST APIs", "GraphQL", "CI/CD", "Agile", "Microservices"],
  design: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "UI/UX", "Prototyping", "User Research", "Design Systems", "Accessibility"],
  data: ["Python", "R", "SQL", "Tableau", "Power BI", "Machine Learning", "TensorFlow", "PyTorch", "Statistics", "Data Visualization", "Excel", "Spark"],
  marketing: ["Google Ads", "Facebook Ads", "SEO", "SEM", "Content Strategy", "Analytics", "HubSpot", "Salesforce", "CRM", "Email Marketing"],
  finance: ["Excel", "SAP", "QuickBooks", "Financial Modeling", "Forecasting", "GAAP", "Risk Management", "Budgeting", "Auditing", "Bloomberg"],
  general: ["Communication", "Leadership", "Problem Solving", "Team Management", "Microsoft Office", "Project Management", "Stakeholder Management", "Analytical Thinking"],
};

export const JOB_DESCRIPTIONS_TEMPLATES = [
  `We are looking for a talented {title} to join our dynamic team at {company}. In this role, you will be responsible for designing, developing, and maintaining {domain} solutions that drive business growth and innovation.

**Key Responsibilities:**
- Collaborate with cross-functional teams to define and implement new features
- Write clean, maintainable, and well-documented code/work
- Participate in code reviews and contribute to best practices
- Identify and resolve performance bottlenecks and bugs
- Mentor junior team members and share knowledge across the organization
- Communicate effectively with stakeholders to understand business requirements

**Requirements:**
- {experience} years of experience in a similar role
- Strong proficiency in {skills}
- Excellent problem-solving and analytical skills
- Bachelor's degree in a relevant field or equivalent practical experience
- Strong communication and collaboration skills

**What We Offer:**
- Competitive salary of {salary} per year
- Comprehensive health, dental, and vision insurance
- {remote_perk}
- Generous PTO and paid holidays
- Learning and development budget
- Collaborative and inclusive work environment`,

  `{company} is seeking a {title} who is passionate about building innovative solutions. This is an exciting opportunity to make a real impact in a fast-growing organization.

**About the Role:**
As a {title}, you will play a key role in shaping the future of our {domain} capabilities. You will work closely with our product, engineering, and business teams to deliver high-quality solutions.

**What You'll Do:**
- Lead and execute {domain} initiatives from conception to delivery
- Work with stakeholders across the business to identify opportunities
- Develop and implement strategies that align with company goals
- Analyze data and metrics to measure impact and drive improvements
- Stay up-to-date with industry trends and best practices
- Build and maintain strong relationships with internal and external partners

**Your Background:**
- {experience}+ years of relevant experience
- Expertise in {skills}
- Proven track record of delivering results in a fast-paced environment
- Strong analytical and strategic thinking skills
- Excellent written and verbal communication abilities

**Compensation & Benefits:**
- Annual salary: {salary}
- {remote_perk}
- Stock options / performance bonus
- Premium health insurance
- 401k/pension with company match
- Flexible working hours`,

  `Join {company} as a {title} and be part of our mission to transform the industry. We're a team of driven professionals who love what we do and are committed to excellence.

**The Opportunity:**
We're expanding our team and looking for a skilled {title} with strong expertise in {domain}. This role offers tremendous growth potential and the chance to work on challenging, meaningful projects.

**Day-to-Day Responsibilities:**
- Plan, prioritize, and execute {domain} projects to meet deadlines
- Collaborate with team members across departments
- Create detailed documentation and reports
- Conduct research and analysis to support decision-making
- Present findings and recommendations to leadership
- Continuously improve processes and workflows

**Must-Have Qualifications:**
- Minimum {experience} years of experience as a {title} or similar
- In-depth knowledge of {skills}
- Strong attention to detail and organizational skills
- Ability to manage multiple projects simultaneously
- Team player with a proactive mindset

**Perks & Benefits:**
- Salary range: {salary}
- {remote_perk}
- Health and wellness allowance
- Professional development opportunities
- Team offsites and company events
- Modern office with great amenities`,
];
