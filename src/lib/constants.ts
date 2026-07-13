/**
 * PMRG Solution — central content & navigation constants.
 * Single source of truth so pages stay consistent.
 */

export const COMPANY = {
  name: "PMRG Solution",
  shortName: "PMRG",
  legalName: "PMRG Solution Pvt. Ltd.",
  tagline: "AI-Powered Telecom & Enterprise Solutions",
  description:
    "PMRG Solution is an AI-driven business and software services company specializing in Telecom BSS/OSS, CRM platforms, and enterprise digital transformation.",
  foundedYear: 2014,
  email: "hello@pmrgsolution.com",
  salesEmail: "sales@pmrgsolution.com",
  phone: "+1 (415) 555-0192",
  address: "Tower B, Cyber Greens, DLF Phase III, Gurugram, Haryana 122002, India",
  hq: "Gurugram, India",
  offices: [
    { city: "Gurugram", country: "India", tz: "GMT+5:30" },
    { city: "Dubai", country: "UAE", tz: "GMT+4" },
    { city: "Singapore", country: "Singapore", tz: "GMT+8" },
    { city: "London", country: "UK", tz: "GMT+0" },
  ],
  social: {
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    youtube: "https://youtube.com",
  },
  url: "https://www.pmrgsolution.com",
} as const;

/** Brand palette (mirrors globals.css custom properties). */
export const COLORS = {
  navy: "#0A0F1C",
  primary: "#1E3A5F",
  accentCyan: "#00D4FF",
  accentViolet: "#7B2FFF",
  accentMint: "#00F5A0",
} as const;

export type NavChild = { label: string; href: string; description: string; icon: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};


export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "BSS/OSS Solutions", href: "/services/bss-oss", description: "Billing, rating, charging & mediation.", icon: "Network" },
      { label: "CRM Platforms", href: "/services/crm", description: "AI-enhanced customer management.", icon: "Users" },
      { label: "Digital Transformation", href: "/services/digital", description: "Modernize legacy systems.", icon: "RefreshCw" },
      { label: "AI & Machine Learning", href: "/services/ai-ml", description: "Predictive analytics & automation.", icon: "BrainCircuit" },
      { label: "Cloud & DevOps", href: "/services/cloud", description: "Scalable infra & CI/CD.", icon: "Cloud" },
      { label: "Custom Software", href: "/services/custom", description: "Bespoke enterprise apps.", icon: "Code2" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "PMRG BSS Suite", href: "/solutions/bss-suite", description: "Unified billing & revenue management.", icon: "Receipt" },
      { label: "PMRG CRM360", href: "/solutions/crm360", description: "AI-powered customer engagement.", icon: "Contact" },
      { label: "PMRG CloudOps", href: "/solutions/cloudops", description: "Infrastructure automation & monitoring.", icon: "Server" },
      { label: "PMRG DataIntel", href: "/solutions/dataintel", description: "Business intelligence & analytics.", icon: "BarChart3" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];


export const SERVICES = [
  {
    id: "bss-oss",
    slug: "bss-oss",
    icon: "Network",
    title: "BSS/OSS Solutions",
    short: "End-to-end billing, rating, charging, and mediation platforms for telecom operators.",
    description:
      "We build and modernize the mission-critical BSS/OSS stack — convergent charging, real-time rating, policy control, order management, and revenue assurance — engineered for 5G and cloud-native telcos.",
    features: [
      "Convergent charging & real-time rating engine",
      "Policy & charging rules function (PCRF)",
      "Order orchestration & catalog-driven provisioning",
      "Mediation & usage data management",
      "Revenue assurance & fraud management",
      "Interconnect & partner settlement",
    ],
    stack: ["Kubernetes", "Kafka", "PostgreSQL", "Redis", "gRPC", "Camel"],
    useCase: {
      title: "Case: 5G slice monetization",
      body: "We helped a tier-2 operator launch slice-based pricing in 11 days using a real-time rating engine — cutting rating latency 80% and unlocking new B2B revenue.",
    },
  },
  {
    id: "crm",
    slug: "crm",
    icon: "Users",
    title: "CRM Platforms",
    short: "AI-enhanced customer relationship management tailored for high-volume enterprises.",
    description:
      "Enterprise-grade CRM platforms that unify sales, service, and marketing with AI-driven insights — built to handle millions of customer records with sub-second response times.",
    features: [
      "360° customer view & unified profiles",
      "AI-driven lead scoring & next-best-action",
      "Omnichannel service desk & ticketing",
      "Marketing automation & journey orchestration",
      "Telecom-native subscription & plan management",
      "Custom dashboards & reporting studio",
    ],
    stack: ["React", "Node.js", "GraphQL", "PostgreSQL", "Elasticsearch", "RabbitMQ"],
    useCase: {
      title: "Case: Churn turnaround at an MVNO",
      body: "Our AI next-best-action engine flagged 92% of at-risk subscribers a quarter early and orchestrated retention offers — reducing monthly churn by 18%.",
    },
  },
  {
    id: "digital",
    slug: "digital",
    icon: "RefreshCw",
    title: "Digital Transformation",
    short: "Modernize legacy systems with cloud-native architectures and intelligent automation.",
    description:
      "From mainframe decommissioning to API-first re-platforming, we guide enterprises through end-to-end digital transformation — de-risking migration while accelerating time-to-value.",
    features: [
      "Legacy modernization & API-first re-platforming",
      "Strangler-fig & domain-driven migration",
      "Microservices & event-driven architecture",
      "Process automation with RPA & workflows",
      "Data lake & analytics platform design",
      "Change management & enablement",
    ],
    stack: ["AWS", "Azure", "Terraform", "Strangler", "Camunda", "Apache Kafka"],
    useCase: {
      title: "Case: Mainframe decommissioning",
      body: "Using a strangler-fig approach, we retired a 20-year-old mainframe order system domain-by-domain with zero downtime and full audit traceability.",
    },
  },
  {
    id: "ai-ml",
    slug: "ai-ml",
    icon: "BrainCircuit",
    title: "AI & Machine Learning",
    short: "Predictive analytics, NLP, computer vision, and intelligent process automation.",
    description:
      "Production AI/ML systems — from churn prediction to computer-vision QA — delivered as MLOps pipelines that scale and stay explainable. We turn model experiments into reliable business outcomes.",
    features: [
      "Churn, propensity & lifetime-value prediction",
      "Natural language processing & LLM integration",
      "Computer vision for inspection & QA",
      "Intelligent document processing (OCR + LLM)",
      "Forecasting & anomaly detection",
      "MLOps: CI/CD for models, monitoring & drift",
    ],
    stack: ["TensorFlow", "PyTorch", "MLflow", "Kubeflow", "LangChain", "Hugging Face"],
    useCase: {
      title: "Case: Grid anomaly detection at scale",
      body: "A streaming ML pipeline over 2M smart meters now detects outages and tampering sub-minute — cutting non-technical losses by 31%.",
    },
  },
  {
    id: "cloud",
    slug: "cloud",
    icon: "Cloud",
    title: "Cloud & DevOps",
    short: "Scalable cloud infrastructure, CI/CD pipelines, and container orchestration.",
    description:
      "Cloud-native foundations that scale: infrastructure-as-code, GitOps-driven delivery, observability, and FinOps — so your teams ship faster while keeping spend and risk in check.",
    features: [
      "Multi-cloud architecture (AWS / Azure / GCP)",
      "Infrastructure as Code with Terraform",
      "GitOps CI/CD with ArgoCD & Argo Rollouts",
      "Kubernetes platform engineering",
      "Observability: logs, metrics, traces, SLOs",
      "FinOps cost optimization & governance",
    ],
    stack: ["Kubernetes", "Terraform", "ArgoCD", "Prometheus", "Grafana", "Istio"],
    useCase: {
      title: "Case: FinOps velocity engine",
      body: "GitOps delivery with ArgoCD plus FinOps guardrails doubled a fintech's deploy frequency while reducing cloud spend by 23%.",
    },
  },
  {
    id: "custom",
    slug: "custom",
    icon: "Code2",
    title: "Custom Software Development",
    short: "Bespoke enterprise applications built with modern tech stacks.",
    description:
      "Full-lifecycle custom software — discovery, design, engineering, and support — delivered by cross-functional pods that embed with your teams and ship in tight, transparent iterations.",
    features: [
      "Product discovery & UX design",
      "Web & mobile application engineering",
      "API & integration platform development",
      "Quality engineering & test automation",
      "Staff augmentation & managed pods",
      "Long-term application lifecycle support",
    ],
    stack: ["Next.js", "React Native", "Go", "NestJS", "PostgreSQL", "Playwright"],
    useCase: {
      title: "Case: Headless commerce re-platform",
      body: "We rebuilt a marketplace on a headless, event-driven stack — halving page load time and tripling peak throughput on Black Friday.",
    },
  },
] as const;


export const PRODUCTS = [
  {
    id: "bss-suite",
    slug: "bss-suite", 
    name: "PMRG BSS Suite",
    tagline: "Unified billing & revenue management",
    icon: "Receipt",
    description:
      "A convergent BSS platform unifying product catalog, charging, billing, and partner settlement into a single cloud-native fabric — built for 5G monetization.",
    features: [
      "Catalog-driven product & offer management",
      "Real-time online & offline charging",
      "Invoice generation & dunning",
      "Interconnect & wholesale settlement",
      "Open APIs (TMF Open) for partner integration",
    ],
    metrics: [
      { label: "Throughput", value: "50K TPS" },
      { label: "Avallability", value: "99.99%" },
      { label: "Latency", value: "<8ms" },
    ],
  },
  {
    id: "crm360",
    slug: "crm360",
    name: "PMRG CRM360",
    tagline: "AI-powered customer engagement platform",
    icon: "Contact",
    description:
      "A telecom-native CRM that fuses a 360° customer view with AI-driven next-best-action, omnichannel care, and marketing automation.",
    features: [
      "Unified customer profile & golden record",
      "AI next-best-action & sentiment analysis",
      "Omnichannel service desk (voice, chat, email, social)",
      "Journey orchestration & campaigns",
      "Self-care portal & mobile app",
    ],
    metrics: [
      { label: "CSAT lift", value: "+27%" },
      { label: "First-contact", value: "+34%" },
      { label: "Churn ↓", value: "−18%" },
    ],
  },
  {
    id: "cloudops",
    slug: "cloudops",
    name: "PMRG CloudOps",
    tagline: "Infrastructure automation & monitoring",
    icon: "Server",
    description:
      "A unified platform for provisioning, deploying, and observing your entire cloud estate — GitOps delivery, SLO management, and FinOps in one pane of glass.",
    features: [
      "Self-service provisioning & guardrails",
      "GitOps continuous delivery",
      "Full-stack observability & SLOs",
      "Auto-remediation & runbook automation",
      "Cost visibility & optimization",
    ],
    metrics: [
      { label: "Deploy freq", value: "12×/day" },
      { label: "MTTR", value: "−61%" },
      { label: "Cloud cost", value: "−23%" },
    ],
  },
  {
    id: "dataintel",
    slug: "dataintel",
    name: "PMRG DataIntel",
    tagline: "Business intelligence & analytics platform",
    icon: "BarChart3",
    description:
      "An end-to-end analytics platform — ingestion, modeling, BI, and augmented analytics — that turns raw data into trusted, governed insight across the enterprise.",
    features: [
      "Governed semantic layer & metrics store",
      "Self-serve BI & dashboard studio",
      "Real-time streaming analytics",
      "Augmented analytics with natural language",
      "Embedded analytics & data APIs",
    ],
    metrics: [
      { label: "Query speed", value: "10× faster" },
      { label: "Adoption", value: "4.2× users" },
      { label: "Trust score", value: "99.2%" },
    ],
  },
] as const;



export const STATS: { value: number; suffix: string; label: string; decimals?: number }[] = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 99.9, suffix: "%", label: "System Uptime", decimals: 1 },
  { value: 15, suffix: "+", label: "Countries Served" },
];

export const WHY_PMRG = [
  {
    icon: "BrainCircuit",
    title: "AI-First Approach",
    description:
      "AI is woven into every layer — from predictive models in BSS to copilots in CRM — not bolted on as an afterthought.",
  },
  {
    icon: "RadioTower",
    title: "Telecom Domain Expertise",
    description:
      "A decade of deep BSS/OSS experience means we speak rating, mediation, and 5G policy fluently.",
  },
  {
    icon: "ShieldCheck",
    title: "Enterprise-Grade Security",
    description:
      "SOC 2, ISO 27001, and zero-trust by design. Security is engineered in, never audited in.",
  },
  {
    icon: "Headset",
    title: "24/7 Global Support",
    description:
      "Follow-the-sun operations across four delivery centers keep your platforms running around the clock.",
  },
] as const;

export const INDUSTRIES = [
  { icon: "RadioTower", name: "Telecommunications", description: "Operators, MVNOs & digital telcos" },
  { icon: "Landmark", name: "Banking & Finance", description: "Banks, fintech & insurance" },
  { icon: "HeartPulse", name: "Healthcare", description: "Providers, payers & healthtech" },
  { icon: "ShoppingCart", name: "E-Commerce", description: "Marketplaces & D2C brands" },
  { icon: "Building2", name: "Government", description: "Public sector & smart cities" },
  { icon: "Zap", name: "Energy & Utilities", description: "Grid, oil & gas, water" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "PMRG re-platformed our legacy billing stack onto a cloud-native convergent charging engine. We cut rating latency by 80% and shipped a new 5G plan in days, not months.",
    name: "Rajiv Menon",
    title: "CTO",
    company: "Airtel-class Operator",
  },
  {
    quote:
      "Their AI team built a churn model that flagged 92% of at-risk customers a full quarter ahead. The CRM360 next-best-action engine alone moved our CSAT by double digits.",
    name: "Sarah Whitfield",
    title: "VP, Customer Experience",
    company: "Global Telco Group",
  },
  {
    quote:
      "From discovery to production, PMRG operated as a true partner. Their CloudOps platform reduced our cloud spend by 23% while doubling deploy frequency.",
    name: "Daniel Osei",
    title: "Head of Platform",
    company: "FinServ International",
  },
] as const;

export const CLIENTS = [
  "NORTHWIND TELECOM",
  "ATLAS DIGITAL",
  "VERTEX FINANCE",
  "HELIX HEALTH",
  "ORBIS COMMERCE",
  "QUANTUM GRID",
  "MERIDIAN MOBILE",
  "NEXUS PAYMENTS",
] as const;

export const CORE_VALUES = [
  { icon: "Lightbulb", title: "Innovation", description: "We chase the frontier — relentlessly turning emerging tech into durable business value." },
  { icon: "ShieldCheck", title: "Integrity", description: "We say what we'll do and do what we say. Transparency is non-negotiable." },
  { icon: "Gem", title: "Excellence", description: "Craft at every layer. We sweat the details others skip, because quality compounds." },
  { icon: "Handshake", title: "Partnership", description: "We win when you win. Long-term trust over short-term transactions, always." },
] as const;

export const TIMELINE = [
  { year: "2014", title: "Founded in Gurugram", description: "PMRG starts as a 4-person BSS consultancy serving regional operators." },
  { year: "2016", title: "First Convergent Billing Launch", description: "We deliver our first end-to-end convergent charging platform for an MVNO." },
  { year: "2018", title: "CRM360 Hits the Market", description: "Our telecom-native CRM ships and crosses 1M subscriber profiles under management." },
  { year: "2020", title: "AI Practice Established", description: "We launch a dedicated AI/ML practice, shipping our first churn-prediction platform." },
  { year: "2022", title: "CloudOps & Global Expansion", description: "CloudOps platform debuts; offices open in Dubai, Singapore, and London." },
  { year: "2024", title: "DataIntel & 150+ Projects", description: "DataIntel launches; we cross 150 deliveries across 15+ countries." },
] as const;

export const LEADERSHIP = [
  { name: "Aarav Kapoor", role: "Co-Founder & CEO", initials: "AK" },
  { name: "Meera Nair", role: "Co-Founder & CTO", initials: "MN" },
  { name: "Vikram Shah", role: "Chief Revenue Officer", initials: "VS" },
  { name: "Lena Fischer", role: "VP, AI & Data", initials: "LF" },
  { name: "Daniel Osei", role: "VP, Cloud & DevOps", initials: "DO" },
  { name: "Priya Raman", role: "VP, Delivery", initials: "PR" },
  { name: "Tomás Vega", role: "VP, Engineering", initials: "TV" },
  { name: "Hana Kim", role: "Head of Design", initials: "HK" },
] as const;

export const CASE_STUDIES = [
  {
    slug: "5g-convergent-charging",
    title: "Cloud-Native 5G Convergent Charging",
    industry: "Telecommunications",
    tag: "BSS/OSS",
    excerpt: "How we re-platformed a tier-2 operator's billing onto a real-time charging engine — cutting rating latency 80%.",
    challenge: "A regional operator's legacy billing couldn't keep up with 5G slice-based pricing, with rating latency exceeding 40ms and outages during peak events.",
    solution: "We designed a cloud-native convergent charging platform on Kubernetes with an in-memory rating engine, Kafka-based mediation, and TMF Open APIs.",
    results: ["80% reduction in rating latency", "99.99% billing availability", "New 5G plan launched in 11 days"],
    tech: ["Kubernetes", "Kafka", "Go", "Redis", "PostgreSQL"],
    testimonial: "PMRG didn't just migrate our billing — they reimagined it for 5G.",
  },
  
] as const;

export const BLOG_POSTS = [
 
] as const;

export const JOB_LISTINGS = [
  
] as const;

export const BENEFITS = [
  
] as const;

export const BLOG_CATEGORIES = ["All", "AI & ML", "Telecom", "Digital Transformation", "Cloud", "Industry News"] as const;
export const CASE_STUDY_FILTERS = ["All", "Telecommunications", "Banking & Finance", "Healthcare", "E-Commerce", "Energy & Utilities"] as const;
export const SERVICE_INTERESTS = [
  "BSS/OSS Solutions",
  "CRM Platforms",
  "Digital Transformation",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Custom Software Development",
  "Not sure yet — help me decide",
] as const;