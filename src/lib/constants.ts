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
      { label: "BSS/OSS Solutions", href: "/services#bss-oss", description: "Billing, rating, charging & mediation.", icon: "Network" },
      { label: "CRM Platforms", href: "/services#crm", description: "AI-enhanced customer management.", icon: "Users" },
      { label: "Digital Transformation", href: "/services#digital", description: "Modernize legacy systems.", icon: "RefreshCw" },
      { label: "AI & Machine Learning", href: "/services#ai-ml", description: "Predictive analytics & automation.", icon: "BrainCircuit" },
      { label: "Cloud & DevOps", href: "/services#cloud", description: "Scalable infra & CI/CD.", icon: "Cloud" },
      { label: "Custom Software", href: "/services#custom", description: "Bespoke enterprise apps.", icon: "Code2" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "PMRG BSS Suite", href: "/solutions#bss-suite", description: "Unified billing & revenue management.", icon: "Receipt" },
      { label: "PMRG CRM360", href: "/solutions#crm360", description: "AI-powered customer engagement.", icon: "Contact" },
      { label: "PMRG CloudOps", href: "/solutions#cloudops", description: "Infrastructure automation & monitoring.", icon: "Server" },
      { label: "PMRG DataIntel", href: "/solutions#dataintel", description: "Business intelligence & analytics.", icon: "BarChart3" },
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
  },
] as const;

export const PRODUCTS = [
  {
    id: "bss-suite",
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
  {
    slug: "ai-churn-crm360",
    title: "AI Churn Prevention with CRM360",
    industry: "Telecommunications",
    tag: "AI & CRM",
    excerpt: "A churn model that flagged 92% of at-risk subscribers a quarter early — and the next-best-action engine that saved them.",
    challenge: "An MVNO was losing 3.2% of subscribers monthly with no early-warning system and reactive retention.",
    solution: "We deployed CRM360 with a gradient-boosted churn model and a next-best-action engine that orchestrated offers across channels.",
    results: ["92% at-risk subscribers flagged early", "−18% monthly churn", "+27% CSAT"],
    tech: ["XGBoost", "MLflow", "React", "Node.js", "Kafka"],
    testimonial: "The AI didn't just predict churn — it told us exactly what to do about it.",
  },
  {
    slug: "finserv-cloudops",
    title: "CloudOps Cuts Cloud Spend 23%",
    industry: "Banking & Finance",
    tag: "Cloud & DevOps",
    excerpt: "A FinServ platform team doubled deploy frequency while cutting cloud costs by nearly a quarter.",
    challenge: "A fast-growing fintech's cloud spend was growing faster than revenue, with manual deploys and poor observability.",
    solution: "We rolled out CloudOps — GitOps delivery with ArgoCD, FinOps guardrails, and full-stack observability on Kubernetes.",
    results: ["−23% cloud cost", "12× daily deploy frequency", "−61% MTTR"],
    tech: ["Kubernetes", "ArgoCD", "Terraform", "Prometheus", "Grafana"],
    testimonial: "PMRG turned our platform team into a velocity engine.",
  },
  {
    slug: "healthcare-dataintel",
    title: "Healthcare Analytics on DataIntel",
    industry: "Healthcare",
    tag: "Data & AI",
    excerpt: "A provider network unified 14 data silos into one governed analytics platform — 10× faster queries.",
    challenge: "A hospital network had 14 disconnected data silos, slow reporting, and no single source of truth.",
    solution: "We built a lakehouse on DataIntel with a governed semantic layer and self-serve BI, plus NLP over clinical notes.",
    results: ["10× faster query performance", "4.2× more active analysts", "14 silos → 1 platform"],
    tech: ["Databricks", "Snowflake", "dbt", "Power BI", "Spark"],
    testimonial: "For the first time, every clinician trusts the same numbers.",
  },
  {
    slug: "ecommerce-custom",
    title: "Headless Commerce Re-platform",
    industry: "E-Commerce",
    tag: "Custom Software",
    excerpt: "We rebuilt a marketplace on a headless, API-first stack — halving page load and tripling throughput.",
    challenge: "A monolithic marketplace struggled with traffic spikes, 6-second page loads, and a fragile release process.",
    solution: "We re-platformed to a headless, event-driven architecture with Next.js storefronts and a Go services layer.",
    results: ["−50% page load time", "3× peak throughput", "Daily releases enabled"],
    tech: ["Next.js", "Go", "Kafka", "PostgreSQL", "Redis"],
    testimonial: "Black Friday went from our scariest day to our smoothest.",
  },
  {
    slug: "energy-iot-anomaly",
    title: "Grid Anomaly Detection with ML",
    industry: "Energy & Utilities",
    tag: "AI & IoT",
    excerpt: "Real-time anomaly detection across 2M smart meters — catching outages and theft before customers notice.",
    challenge: "A utility couldn't detect meter tampering or outages fast enough, losing revenue and trust.",
    solution: "We deployed a streaming anomaly-detection pipeline over 2M smart meters with sub-minute alerting.",
    results: ["Sub-minute outage detection", "−31% non-technical losses", "2M meters monitored"],
    tech: ["Apache Flink", "Kafka", "Python", "MLflow", "GCP"],
    testimonial: "We now know about outages before our customers do.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "convergent-charging-5g",
    title: "Architecting Convergent Charging for the 5G Era",
    excerpt: "Slice-based pricing demands a fundamentally different charging architecture. Here's the blueprint we use.",
    category: "Telecom",
    date: "2026-05-18",
    readTime: "8 min read",
  },
  {
    slug: "mlops-production-ml",
    title: "From Notebook to Production: A Pragmatic MLOps Playbook",
    excerpt: "Most ML models never reach production. This is the pipeline pattern that gets them there — and keeps them honest.",
    category: "AI & ML",
    date: "2026-05-02",
    readTime: "11 min read",
  },
  {
    slug: "legacy-modernization-strangler",
    title: "Killing the Mainframe: A Strangler-Fig Migration Guide",
    excerpt: "Big-bang rewrites fail. The strangler fig pattern lets you modernize legacy safely, one domain at a time.",
    category: "Digital Transformation",
    date: "2026-04-14",
    readTime: "9 min read",
  },
  {
    slug: "finops-cloud-cost",
    title: "FinOps in Practice: Cutting Cloud Spend Without Killing Velocity",
    excerpt: "Cost optimization isn't about cutting servers — it's about engineering a culture of accountability.",
    category: "Cloud",
    date: "2026-03-28",
    readTime: "7 min read",
  },
  {
    slug: "crm-next-best-action",
    title: "Next-Best-Action: The AI Engine Behind Modern CRM",
    excerpt: "Why NBA engines outperform generic recommendations — and how to build one that respects privacy.",
    category: "AI & ML",
    date: "2026-03-10",
    readTime: "10 min read",
  },
  {
    slug: "telco-digital-twins",
    title: "Digital Twins for Telecom Networks",
    excerpt: "Simulating the network before you touch it — how twins are reshaping capacity planning and incident response.",
    category: "Industry News",
    date: "2026-02-20",
    readTime: "6 min read",
  },
] as const;

export const JOB_LISTINGS = [
  { title: "Senior Backend Engineer (Go)", department: "Engineering", location: "Gurugram / Remote", type: "Full-time", description: "Build the charging core of our BSS Suite in Go and Kubernetes." },
  { title: "AI/ML Engineer — NLP & LLMs", department: "AI & Data", location: "Remote", type: "Full-time", description: "Productionize LLM features across CRM360 and DataIntel." },
  { title: "Cloud Platform Engineer", department: "Cloud & DevOps", location: "Dubai / Remote", type: "Full-time", description: "Own the CloudOps platform — Kubernetes, GitOps, observability." },
  { title: "Frontend Engineer (React/Next.js)", department: "Engineering", location: "Gurugram", type: "Full-time", description: "Craft premium, accessible UIs across our product suite." },
  { title: "Telecom BSS Solutions Architect", department: "Solutions", location: "Singapore", type: "Full-time", description: "Shape convergent-charging architectures for tier-1 operators." },
  { title: "DevSecOps Engineer", department: "Cloud & DevOps", location: "London / Remote", type: "Full-time", description: "Embed zero-trust security into CI/CD and platform engineering." },
  { title: "Product Designer", department: "Design", location: "Gurugram / Remote", type: "Full-time", description: "Define the design language for enterprise-grade products." },
  { title: "Technical Program Manager", department: "Delivery", location: "Gurugram", type: "Full-time", description: "Drive complex, multi-team delivery for enterprise clients." },
] as const;

export const BENEFITS = [
  { icon: "HeartPulse", title: "Health Insurance", description: "Comprehensive medical, dental & vision for you and your family." },
  { icon: "Globe", title: "Remote-First", description: "Work from anywhere with flexible, async-friendly hours." },
  { icon: "GraduationCap", title: "Learning Budget", description: "$2,500 annual stipend for courses, books & conferences." },
  { icon: "TrendingUp", title: "Equity & Growth", description: "Meaningful equity and a clear, sponsored growth path." },
  { icon: "Laptop", title: "Top-Tier Gear", description: "Your choice of laptop, monitor & home-office setup." },
  { icon: "Plane", title: "Annual Offsites", description: "Quarterly team gatherings in great destinations." },
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
