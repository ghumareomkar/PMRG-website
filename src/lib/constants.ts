/**
 * PMRG Solution — central content & navigation constants.
 * Single source of truth so pages stay consistent.
 */

export const COMPANY = {
  name: "PMRG Solution",
  shortName: "PMRG",
  legalName: "PMRG Solution LLP",
  tagline: "Innovate to Elevate",
  description:
    "PMRG Solution is an AI-led technology, consulting, and transformation company focused on helping businesses and institutions become more intelligent, connected, accountable, and future-ready.",
  foundedYear: 2014,
  email: "admin@pmrgsolution.com",
  salesEmail: "admin@pmrgsolution.com",
  phone: "+91 7722017100",
  address: "E2-103, Sr No-296, Revell Orchid, Porwal Pune City, Pune-411047",
  hq: "Pune, India",
  offices: [
    { city: "Pune", country: "India", tz: "GMT+5:30" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/pmrg-solution/",
    facebook: "https://www.facebook.com/people/Sugaam-In/pfbid02MDjVo1ZDWVKJBJSR4cvnb5FYV94bXowvYji8nQeKkgez8DnuTQ9w7RE4QoSCjKNcl/",
    instagram: "https://instagram.com/pmrg",
    whatsapp: "https://wa.me/917722017100",
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
      { label: "AI, Governance & Delivery Intelligence", href: "/services/ai-governance", description: "AI strategy, governance frameworks, and delivery intelligence.", icon: "BrainCircuit" },
      { label: "Enterprise, Telecom & Customer Platforms", href: "/services/enterprise-telecom", description: "Customer lifecycle, BSS/OSS, ERP, and CRM solutions.", icon: "RadioTower" },
      { label: "Infrastructure & Managed Operations", href: "/services/infrastructure-ops", description: "Data center management, cloud, DevOps, and managed ops.", icon: "Server" },
      { label: "Education, Innovation & Talent Readiness", href: "/services/education-innovation", description: "AI for schools, smart campuses, incubation, and internships.", icon: "GraduationCap" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "AI-Intelligence Layer", href: "/solutions/governance-layer", description: "Decision support, risk visibility & outcome tracking.", icon: "ShieldCheck" },
      { label: "Intelligent Sprint Planning", href: "/solutions/sprint-planning", description: "Capacity-aware planning & commitment control.", icon: "CalendarCheck" },
      { label: "Data Center Management", href: "/solutions/data-center", description: "Unified infrastructure visibility & control.", icon: "Server" },
      { label: "Customer Lifecycle Management", href: "/solutions/customer-lifecycle", description: "End-to-end customer journey orchestration.", icon: "Users" },
      { label: "AI for Schools", href: "/solutions/ai-for-schools", description: "Responsible AI for K-12 education.", icon: "GraduationCap" },
      { label: "Smart Campus for Universities", href: "/solutions/smart-campus", description: "Connected campus operations & academic intelligence.", icon: "Building2" },
      { label: "Incubation Center Enablement", href: "/solutions/incubation-center", description: "Structured innovation pipelines.", icon: "Lightbulb" },
      { label: "Structured Industry Internship", href: "/solutions/industry-internship", description: "Role-based learning & workplace readiness.", icon: "Briefcase" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blogs/Testimonials", href: "/blog" },
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

/** Service pillars — the 4 connected practice areas from the content strategy. */
export const SERVICE_PILLARS = [
  {
    id: "ai-governance",
    title: "AI, Governance and Delivery Intelligence",
    tag: "Pillar 1",
    icon: "BrainCircuit",
    description: "AI strategy, governance frameworks, and delivery intelligence that turn decisions into measurable outcomes.",
    items: [
      "AI strategy, use-case prioritization, readiness assessment, and adoption roadmap",
      "AI-assisted enterprise, portfolio, program, project, and technical governance",
      "Intelligent sprint planning, capacity management, dependency control, and delivery forecasting",
      "Executive dashboards, risk intelligence, decision logs, escalation workflows, and outcome tracking",
      "Responsible AI controls, human approvals, auditability, and governance operating models",
    ],
  },
  {
    id: "enterprise-telecom",
    title: "Enterprise, Telecom and Customer Platforms",
    tag: "Pillar 2",
    icon: "RadioTower",
    description: "End-to-end platform engineering for customer lifecycle, telecom BSS/OSS, ERP, and CRM solutions.",
    items: [
      "Customer Lifecycle Management and Customer 360 solutions",
      "Telecom BSS/OSS consulting, solution architecture, CRM, catalog, order, inventory, billing, and digital journeys",
      "ERPNext implementation, finance, sales, inventory, HR, project, and workflow transformation",
      "CRM, customer service, sales automation, and business process digitization",
      "API integration, cloud-native architecture, data migration, workflow orchestration, and platform modernization",
    ],
  },
  {
    id: "infrastructure-ops",
    title: "Infrastructure and Managed Operations",
    tag: "Pillar 3",
    icon: "Server",
    description: "Data center management, cloud enablement, DevOps, and SLA-based managed operations.",
    items: [
      "Data center management, asset visibility, capacity, incident, change, and service-level management",
      "Infrastructure monitoring, observability, predictive alerting, and operational dashboards",
      "Cloud and DevOps enablement, deployment automation, reliability, and security controls",
      "Application support, managed services, continuous improvement, and SLA-based operations",
      "Operational governance, documentation, knowledge transfer, and support transition",
    ],
  },
  {
    id: "education-innovation",
    title: "Education, Innovation and Talent Readiness",
    tag: "Pillar 4",
    icon: "GraduationCap",
    description: "AI for schools, smart campuses, incubation ecosystems, and structured industry-readiness programs.",
    items: [
      "AI literacy and responsible AI programs for schools",
      "AI-enabled university transformation and smart campus solutions",
      "Incubation center design, startup pipelines, innovation challenges, mentorship, and market readiness",
      "Structured internships with real project exposure, learning paths, mentoring, and milestone-based assessment",
      "Faculty development, guest sessions, industry-academia collaboration, placement readiness, and innovation programs",
    ],
  },
] as const;

/** Who We Are — operating identity roles from the content strategy. */
export const WHO_WE_ARE_ROLES = [
  { title: "Transformation Partner", icon: "ArrowRightLeft", description: "We help clients translate business challenges into structured roadmaps, operating models, and measurable digital initiatives." },
  { title: "Product Innovator", icon: "Lightbulb", description: "We build reusable platforms and solution accelerators for governance, planning, customer lifecycle, operations, and education." },
  { title: "Implementation Team", icon: "Wrench", description: "We configure, integrate, deploy, and support technology in real business and institutional environments." },
  { title: "Capability Builder", icon: "GraduationCap", description: "We help client teams, students, faculty, founders, and professionals adopt new tools and develop future-ready capabilities." },
  { title: "Domain Specialist", icon: "Award", description: "We bring practical experience in telecom, enterprise platforms, customer operations, delivery governance, and digital transformation." },
  { title: "Ecosystem Enabler", icon: "Network", description: "We work with clients, institutions, mentors, partners, and specialists to build solutions that can scale beyond a single engagement." },
] as const;


export const PRODUCTS = [
  {
    id: "governance-layer",
    slug: "governance-layer",
    name: "AI-Intelligence Layer",
    tag: "GOVERN",
    tagline: "Decision support, risk visibility & outcome tracking",
    detailedTagline: "From status reporting to decision intelligence.",
    icon: "ShieldCheck",
    description:
      "Decision support, risk visibility, compliance, escalation, and outcome tracking across portfolios and projects.",
    detailedDescription:
      "A configurable governance layer that connects strategy, portfolios, programs, projects, risks, dependencies, approvals, financials, milestones, and technical delivery into a single decision-support environment. It helps leadership understand what requires attention, why it matters, who owns the action, and what outcome is at risk.",
    features: [
      "AI-assisted decision support & risk scoring",
      "Real-time compliance monitoring",
      "Escalation workflows & audit trails",
      "Portfolio-level outcome tracking",
      "Governance dashboards & reporting",
    ],
    coreCapabilities: [
      "Executive, portfolio, program, project, and technical governance",
      "Risk, issue, dependency, action, and decision management",
      "AI-assisted summaries, anomaly detection, and escalation recommendations",
      "KPI, milestone, budget, quality, compliance, and benefit tracking",
      "Approval workflows, audit trails, evidence, and role-based dashboards",
      "Integration with delivery, ticketing, finance, and collaboration tools",
    ],
    businessOutcomes: [
      "Earlier identification of delivery and operational risk",
      "Faster, evidence-based management decisions",
      "Improved accountability and traceability",
      "Reduced manual reporting and governance effort",
      "Greater confidence in commitments and forecasts",
      "A repeatable governance operating model across teams",
    ],
    bestSuitedFor: "Enterprises, telecom operators, multi-project organizations, transformation offices, PMOs, delivery leaders, and regulated environments.",
    metrics: [
      { label: "Risk visibility", value: "360°" },
      { label: "Compliance", value: "99.5%" },
      { label: "Decision speed", value: "3× faster" },
    ],
  },
  {
    id: "sprint-planning",
    slug: "sprint-planning",
    name: "Intelligent Sprint Planning",
    tag: "PLAN",
    tagline: "Capacity-aware planning & commitment control",
    detailedTagline: "A system that thinks before teams commit.",
    icon: "CalendarCheck",
    description:
      "Capacity-aware planning, dependency validation, risk prediction, and commitment control for delivery teams.",
    detailedDescription:
      "An AI-assisted planning solution that evaluates capacity, skills, priorities, dependencies, historical velocity, release constraints, risk signals, and delivery readiness before sprint commitments are finalized. It supports more realistic planning and continuously revalidates commitments as conditions change.",
    features: [
      "AI-driven capacity planning & forecasting",
      "Dependency validation & conflict detection",
      "Risk prediction & mitigation suggestions",
      "Commitment tracking & velocity analytics",
      "Cross-team coordination & resource balancing",
    ],
    coreCapabilities: [
      "Backlog prioritization and readiness checks",
      "Capacity and skill-based allocation",
      "Dependency and constraint mapping",
      "AI-assisted estimation and historical pattern analysis",
      "Commitment validation and scenario planning",
      "Sprint health, scope change, risk, and delivery forecast dashboards",
    ],
    businessOutcomes: [
      "More realistic sprint commitments",
      "Fewer rollovers, blocked stories, and late surprises",
      "Better utilization without overloading teams",
      "Improved release predictability and stakeholder confidence",
      "Faster planning cycles with stronger evidence",
      "Clear linkage between delivery capacity and business priority",
    ],
    bestSuitedFor: "Product teams, software delivery organizations, engineering leaders, agile PMOs, managed service teams, and transformation programs.",
    metrics: [
      { label: "Plan accuracy", value: "+40%" },
      { label: "On-time delivery", value: "94%" },
      { label: "Velocity", value: "+25%" },
    ],
  },
  {
    id: "data-center",
    slug: "data-center",
    name: "Data Center Management",
    tag: "OPERATE",
    tagline: "Unified infrastructure visibility & control",
    detailedTagline: "Unified control for infrastructure visibility, reliability, capacity, and service assurance.",
    icon: "Server",
    description:
      "Unified visibility of assets, incidents, capacity, service levels, energy, security, and infrastructure risk.",
    detailedDescription:
      "A modular data center and infrastructure operations solution that provides a connected view of physical and virtual assets, environment, power, capacity, incidents, changes, service levels, security events, and operational risk. The solution can be integrated with existing monitoring, ITSM, CMDB, facilities, and cloud platforms.",
    features: [
      "Asset lifecycle & inventory management",
      "Incident management & auto-remediation",
      "Capacity planning & utilization tracking",
      "Energy monitoring & optimization",
      "Security posture & infrastructure risk",
    ],
    coreCapabilities: [
      "Asset inventory, rack, location, ownership, lifecycle, and CMDB synchronization",
      "Infrastructure health, availability, performance, and environmental monitoring",
      "Incident, problem, change, maintenance, and escalation workflows",
      "Capacity, power, cooling, space, and utilization dashboards",
      "SLA, availability, MTTR, recurring fault, and operational risk analytics",
      "Predictive alerts, anomaly detection, knowledge support, and audit evidence",
    ],
    businessOutcomes: [
      "Higher infrastructure availability and service reliability",
      "Reduced mean time to detect and repair",
      "Better capacity planning and investment decisions",
      "Improved asset utilization and lifecycle control",
      "Stronger compliance, security, and audit readiness",
      "Lower operational risk through proactive visibility",
    ],
    bestSuitedFor: "Data centers, enterprise IT teams, managed service providers, telecom operators, campuses, and organizations with distributed infrastructure.",
    metrics: [
      { label: "Uptime", value: "99.99%" },
      { label: "Energy cost", value: "−18%" },
      { label: "MTTR", value: "−55%" },
    ],
  },
  {
    id: "customer-lifecycle",
    slug: "customer-lifecycle",
    name: "Customer Lifecycle Management",
    tag: "GROW",
    tagline: "End-to-end customer journey orchestration",
    detailedTagline: "Manage every customer moment — from interest to loyalty.",
    icon: "Users",
    description:
      "End-to-end customer acquisition, onboarding, fulfilment, care, retention, and insight across digital and telecom journeys.",
    detailedDescription:
      "An end-to-end customer lifecycle platform covering acquisition, onboarding, identity and KYC, product selection, ordering, fulfilment, activation, billing and payment, service, issue resolution, retention, cross-sell, and customer insight. The solution can serve telecom, subscription, service, and digital-first business models.",
    features: [
      "Customer acquisition & onboarding automation",
      "Order fulfilment & provisioning",
      "Omnichannel care & self-service portals",
      "Retention analytics & churn prediction",
      "360° customer insight & reporting",
    ],
    coreCapabilities: [
      "Lead, prospect, customer, account, and subscription management",
      "Omnichannel onboarding, KYC, document, consent, and payment journeys",
      "Product catalog, eligibility, pricing, offers, discounts, and order orchestration",
      "Service activation, inventory integration, billing, collection, and notifications",
      "Customer 360, service requests, trouble tickets, care, and self-service",
      "Churn prediction, next-best-action, retention, loyalty, and revenue insight",
    ],
    businessOutcomes: [
      "Faster onboarding and order-to-activation",
      "Consistent customer experience across assisted and digital channels",
      "Higher conversion, retention, and customer lifetime value",
      "Lower cost-to-serve through automation and self-service",
      "Better visibility across customer, product, service, payment, and interaction data",
      "A scalable platform for new products, channels, and business models",
    ],
    bestSuitedFor: "Telecom operators, MSOs, ISPs, subscription businesses, service enterprises, digital brands, and organizations seeking a unified customer operating model.",
    metrics: [
      { label: "CSAT lift", value: "+27%" },
      { label: "Churn ↓", value: "−18%" },
      { label: "Onboarding", value: "3× faster" },
    ],
  },
  {
    id: "ai-for-schools",
    slug: "ai-for-schools",
    name: "AI for Schools",
    tag: "EDUCATE",
    tagline: "Responsible AI for K-12 education",
    detailedTagline: "Responsible, age-appropriate AI that supports students, teachers, and school operations.",
    icon: "GraduationCap",
    description:
      "Responsible AI literacy, teacher enablement, student support, assessment assistance, and administrative intelligence.",
    detailedDescription:
      "A structured school transformation offering that introduces AI literacy while helping teachers and administrators use AI safely and productively. The program can be customized by grade, curriculum, institutional maturity, and policy requirements.",
    features: [
      "AI-powered adaptive learning paths",
      "Automated assessment & grading",
      "Teacher enablement & analytics",
      "Student support & early intervention",
      "Administrative intelligence & reporting",
    ],
    coreCapabilities: [
      "AI awareness, computational thinking, prompt basics, digital safety, and responsible use",
      "Project-based learning, storytelling, research support, and creative problem solving",
      "Teacher copilots for lesson planning, worksheets, assessments, feedback, and differentiated learning",
      "Student support, knowledge assistants, learning analytics, and intervention signals",
      "School operations dashboards, communication assistance, and workflow automation",
      "AI policy, usage guidelines, safeguarding, teacher review, and governance",
    ],
    businessOutcomes: [
      "Future-ready students with practical and responsible AI exposure",
      "Improved teacher productivity and classroom innovation",
      "More personalized support and earlier intervention",
      "Stronger digital safety and governance awareness",
      "Better parent, teacher, and administration visibility",
      "A phased, sustainable AI adoption roadmap for the school",
    ],
    bestSuitedFor: "Schools, school groups, educators, trustees, academic leaders, and institutions introducing AI across Classes 6-12.",
    metrics: [
      { label: "Students", value: "10K+" },
      { label: "Teacher time", value: "+8h/week" },
      { label: "Assessment", value: "−60%" },
    ],
  },
  {
    id: "smart-campus",
    slug: "smart-campus",
    name: "Smart Campus for Universities",
    tag: "TRANSFORM",
    tagline: "Connected campus operations & academic intelligence",
    detailedTagline: "Connect academics, administration, innovation, employability, and campus operations.",
    icon: "Building2",
    description:
      "Connected student lifecycle, academic intelligence, research, innovation, placement, and campus operations.",
    detailedDescription:
      "A modular university transformation framework that creates an intelligent campus experience across the student lifecycle, academic delivery, research, placements, incubation, facilities, stakeholder engagement, and institutional decision-making.",
    features: [
      "Student lifecycle management",
      "Academic intelligence & analytics",
      "Research & innovation tracking",
      "Placement management & industry connect",
      "Campus operations & facility management",
    ],
    coreCapabilities: [
      "Digital student lifecycle from enquiry and admission to alumni engagement",
      "AI-assisted student support, academic advising, faculty enablement, and knowledge access",
      "Smart dashboards for attendance, performance, engagement, retention, placement, and accreditation",
      "Internship, placement, industry projects, mentor, and employer engagement platforms",
      "Research, innovation, ideathon, incubation, startup, and intellectual property workflows",
      "Campus command center for service requests, assets, facilities, events, and institutional KPIs",
    ],
    businessOutcomes: [
      "Improved student experience and institutional responsiveness",
      "Greater employability and industry alignment",
      "Stronger research, innovation, and startup outcomes",
      "More efficient academic and administrative operations",
      "Data-driven leadership and accreditation readiness",
      "A connected digital identity and operating model across the campus",
    ],
    bestSuitedFor: "Universities, colleges, education groups, autonomous institutions, incubation cells, placement teams, and academic leadership.",
    metrics: [
      { label: "Placement", value: "+35%" },
      { label: "Operations", value: "−40% cost" },
      { label: "Engagement", value: "2× higher" },
    ],
  },
  {
    id: "incubation-center",
    slug: "incubation-center",
    name: "Incubation Center Enablement",
    tag: "INNOVATE",
    tagline: "Structured innovation pipelines",
    detailedTagline: "Build a repeatable journey from idea to market impact.",
    icon: "Lightbulb",
    description:
      "Structured innovation pipelines from idea discovery to validation, mentoring, market readiness, and investor preparation.",
    detailedDescription:
      "A structured incubation offering covering center strategy, governance, operating processes, idea pipelines, innovation challenges, founder support, mentor networks, validation, prototyping, market access, investor readiness, and performance reporting.",
    features: [
      "Idea discovery & evaluation framework",
      "Validation & prototyping support",
      "Mentorship matching & tracking",
      "Market readiness assessment",
      "Investor preparation & pitch support",
    ],
    coreCapabilities: [
      "Incubation vision, focus areas, governance, roles, policies, and operating model",
      "Idea intake, evaluation, selection, cohort, and milestone workflows",
      "Ideathons, hackathons, innovation challenges, and problem-statement programs",
      "Mentor, domain expert, corporate, alumni, and investor engagement",
      "Business model, prototype, market validation, go-to-market, finance, and pitch support",
      "Startup portfolio dashboards, impact metrics, documentation, and review governance",
    ],
    businessOutcomes: [
      "More credible and structured startup pipelines",
      "Greater conversion from ideas to validated solutions",
      "Improved mentor, industry, and investor participation",
      "Clear visibility of startup progress and incubation impact",
      "Stronger institutional innovation branding",
      "A scalable model that can run multiple cohorts and programs",
    ],
    bestSuitedFor: "Universities, colleges, incubation centers, innovation cells, government institutions, corporate academies, and entrepreneurship programs.",
    metrics: [
      { label: "Startups", value: "50+ launched" },
      { label: "Funding", value: "₹10Cr+" },
      { label: "Success rate", value: "72%" },
    ],
  },
  {
    id: "industry-internship",
    slug: "industry-internship",
    name: "Structured Industry Internship",
    tag: "ENABLE",
    tagline: "Role-based learning & workplace readiness",
    detailedTagline: "Move students from course completion to workplace contribution.",
    icon: "Briefcase",
    description:
      "Role-based learning paths, real project exposure, mentorship, milestone evaluation, and workplace readiness.",
    detailedDescription:
      "A structured internship model that combines role-based learning, mentor guidance, real project exposure, industry practices, documentation, reviews, and milestone-based assessment. The focus is not only technical knowledge, but also ownership, communication, delivery discipline, and professional readiness.",
    features: [
      "Role-based learning path design",
      "Real project exposure & assignments",
      "Mentorship & progress tracking",
      "Milestone evaluation & certification",
      "Workplace readiness & placement support",
    ],
    coreCapabilities: [
      "Role-based learning paths for AI, software, data, cloud, testing, design, ERP, telecom, and project roles",
      "Foundation learning, practical assignments, live or simulated projects, and portfolio creation",
      "Mentor sessions, industry talks, code and design reviews, and delivery checkpoints",
      "Agile working, requirement analysis, documentation, testing, deployment, and presentation practice",
      "Milestone assessments covering skills, quality, communication, ownership, and teamwork",
      "Completion reports, project evidence, performance feedback, and employability guidance",
    ],
    businessOutcomes: [
      "Practical exposure beyond classroom learning",
      "Stronger portfolios, confidence, and interview readiness",
      "Better understanding of real project delivery and client expectations",
      "Improved communication, ownership, teamwork, and professional behaviour",
      "A transparent assessment model for institutions and employers",
      "Stronger industry-academia collaboration and placement outcomes",
    ],
    bestSuitedFor: "Students, interns, universities, colleges, training partners, placement cells, and organizations seeking project-ready entry-level talent.",
    metrics: [
      { label: "Interns", value: "200+/year" },
      { label: "Placement", value: "89%" },
      { label: "Satisfaction", value: "4.7/5" },
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
    icon: "TrendingUp",
    title: "Business-First Technology",
    description:
      "We begin with the outcome, operating challenge, and stakeholder need before defining the technology.",
  },
  {
    icon: "BrainCircuit",
    title: "AI with Accountability",
    description:
      "Our solutions combine intelligent assistance with clear governance, controls, human judgement, and auditability.",
  },
  {
    icon: "Award",
    title: "Domain-Led Architecture",
    description:
      "We bring practical expertise in telecom, customer operations, delivery governance, enterprise platforms, education, and infrastructure.",
  },
  {
    icon: "Wrench",
    title: "Execution, Not Presentations Alone",
    description:
      "We translate strategy into architecture, prototypes, products, integrations, deployments, and operating routines.",
  },
  {
    icon: "Puzzle",
    title: "Flexible Paths to Value",
    description:
      "Clients can start small, prove value, and scale through modular solutions and phased implementation.",
  },
  {
    icon: "GraduationCap",
    title: "Capability That Remains with the Client",
    description:
      "Training, documentation, governance, and knowledge transfer are built into our approach.",
  },
] as const;

export const INDUSTRIES = [
  { icon: "RadioTower", name: "Telecom", fullName: "Telecom, Broadband and Digital Service Providers", description: "Customer lifecycle, BSS/OSS, AI care, order and service operations, governance, field operations, and revenue insight." },
  { icon: "GraduationCap", name: "Education", fullName: "Schools, Universities and Education Groups", description: "Responsible AI, smart campus, student lifecycle, faculty enablement, placements, incubation, and institutional dashboards." },
  { icon: "Building2", name: "Enterprises", fullName: "Enterprises and Growing Businesses", description: "ERP, CRM, workflow digitization, AI automation, governance, data center management, and custom platforms." },
  { icon: "Rocket", name: "Startups", fullName: "Startups and Innovation Ecosystems", description: "Product discovery, architecture, MVP development, incubation programs, market validation, and scalable technology foundations." },
  { icon: "UtensilsCrossed", name: "Food & Wellness", fullName: "Food, Wellness and Service Organizations", description: "Digital presence, customer engagement, operations automation, ERP/CRM, booking, communication, and analytics." },
  { icon: "Landmark", name: "Public Institutions", fullName: "Public and Institutional Programs", description: "Program governance, dashboards, innovation challenges, capacity building, digital platforms, and stakeholder engagement." },
] as const;

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  logo?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I wanted to take a moment to share my experience with PMRG Solution. I recently had the pleasure of working with their team, and I'm thrilled with the results.",
    name: "MTC",
    title: "Profession",
    company: "MTC",
    logo: "/logos/mtc.png",
  },
  {
    quote:
      "First off, the design is absolutely stunning. The team really captured our brand's essence and translated it into a visually appealing and user-friendly.",
    name: "School Buddy",
    title: "Profession",
    company: "SCHOOL BUDDY",
    logo: "/logos/school-buddy.png",
  },
  {
    quote:
      "Throughout the entire process, communication with the team was excellent. They were attentive to our needs and expectations, and always quick to respond to any questions we had.",
    name: "Vessel Audit",
    title: "Profession",
    company: "VESSEL AUDIT",
    logo: "/logos/vessel-audit.png",
  },
];

export const CLIENTS = [
  { name: "Hathway", descriptor: "Telecom and digital services engagement" },
  { name: "MTC", descriptor: "Technology and transformation engagement" },
  { name: "Ocean Impact", descriptor: "Digital and solution collaboration" },
  { name: "Acharya Institutes", descriptor: "Education, innovation, and industry-readiness initiatives" },
  { name: "BPUT", descriptor: "University transformation and innovation collaboration" },
  { name: "Amddas Food", descriptor: "Enterprise and digital enablement" },
  { name: "Bali Yoga Kendra", descriptor: "Digital and customer engagement support" },
] as const;

export const PARTNERS = [
  { name: "USU Telecom", description: "Strategic collaboration for telecom opportunities, solution delivery, and account-specific market engagement." },
  { name: "Global Tech", description: "Technology and delivery partnership supporting solution implementation and scale." },
] as const;

export const ENGAGEMENT_STEPS = [
  { step: 1, stage: "Discover", description: "Understand goals, stakeholders, current processes, systems, data, pain points, and value opportunities." },
  { step: 2, stage: "Design", description: "Define target operating model, solution architecture, roadmap, governance, KPIs, and implementation plan." },
  { step: 3, stage: "Pilot", description: "Deliver a focused proof of value with measurable scope, adoption, feedback, and decision criteria." },
  { step: 4, stage: "Scale", description: "Integrate, configure, migrate, train, deploy, govern, and expand across users, modules, or institutions." },
  { step: 5, stage: "Operate", description: "Support, monitor, optimize, measure outcomes, manage releases, and continuously improve." },
] as const;

export const VALUE_ADDITIONS = [
  { title: "One Partner from Strategy to Operations", description: "Discovery, solution design, build, integration, governance, adoption, support, and continuous improvement through one accountable engagement model." },
  { title: "AI with Governance and Human Accountability", description: "AI assists with analysis, recommendations, forecasting, and productivity while roles, approvals, policies, and auditability remain explicit." },
  { title: "Strong Domain and Solution Architecture", description: "Practical understanding of telecom, customer platforms, enterprise systems, delivery governance, institutional transformation, and infrastructure operations." },
  { title: "Modular and Scalable Adoption", description: "Clients can begin with an assessment, pilot, module, department, campus, or use case and expand as value is demonstrated." },
  { title: "Integration with the Existing Ecosystem", description: "Our solutions are designed to connect with current systems, data, workflows, users, and operating processes rather than creating isolated technology." },
  { title: "Outcome and KPI Orientation", description: "Every engagement defines success measures such as adoption, predictability, cycle time, cost, quality, availability, conversion, retention, or employability." },
  { title: "Capability Transfer", description: "Documentation, training, operating procedures, governance routines, and handover help client teams sustain and improve the solution." },
  { title: "Partnership-Led Delivery", description: "We collaborate with technology partners, domain specialists, educational leaders, mentors, and client stakeholders to strengthen delivery capacity." },
  { title: "Flexible Engagement Models", description: "Consulting, implementation, pilot, managed service, support retainer, product subscription, and outcome-linked models can be structured to the context." },
  { title: "Continuous Improvement", description: "Post-go-live reviews, enhancement roadmaps, data-driven insights, and governance cadences help the solution evolve with changing priorities." },
] as const;

export const CORE_VALUES = [
  { icon: "Lightbulb", title: "Purposeful Innovation", description: "We innovate to solve real problems, not to follow trends." },
  { icon: "ShieldCheck", title: "Governance by Design", description: "Controls, accountability, risk visibility, and traceability are built into the solution." },
  { icon: "Handshake", title: "Client Ownership", description: "We treat client outcomes, timelines, quality, and trust as our own responsibility." },
  { icon: "Users", title: "Co-Creation", description: "The strongest solutions are built with stakeholders, not imposed on them." },
  { icon: "Eye", title: "Transparency", description: "We communicate clearly about scope, progress, risk, assumptions, and decisions." },
  { icon: "GraduationCap", title: "Continuous Learning", description: "We build a culture where teams, students, professionals, and institutions keep evolving." },
  { icon: "BarChart3", title: "Measurable Impact", description: "Every solution should have visible KPIs and a clear value realization path." },
  { icon: "BrainCircuit", title: "Human-First AI", description: "We design technology that supports people, protects trust, and respects accountability." },
] as const;

export const TIMELINE = [
  { year: "2014", title: "Founded in Pune", description: "PMRG starts as a 4-person BSS consultancy serving regional operators." },
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
    slug: "mtc-mobile-info-platform",
    title: "MTC — Mobile Info Platform for MVNO Launch",
    industry: "Telecommunications",
    tag: "BSS/OSS",
    excerpt: "How we built a complete BSS stack from scratch for MTC, enabling rapid MVNO launch with automated billing, provisioning, and self-care.",
    challenge: "MTC needed a fully operational BSS platform to launch as a new MVNO — billing, provisioning, customer management, and compliance — without relying on expensive legacy systems or slow vendor timelines.",
    solution: "PMRG delivered a ground-up BSS suite with real-time convergent charging, automated invoicing, a cashback loyalty wallet, and a digital self-care portal for subscriber management. The platform was built with MVNE integration out of the box.",
    results: ["MVNO launched in under 6 months", "Zero-touch automated invoicing from day one", "Self-care portal reduced support tickets by 40%"],
    tech: ["Node.js", "React", "PostgreSQL", "Docker", "REST APIs"],
    testimonial: "PMRG gave us a BSS platform that let us compete with established operators from day one.",
  },
  {
    slug: "school-buddy-gen-ai",
    title: "School Buddy — Gen-AI Powered Education App",
    industry: "Education & AI",
    tag: "AI & GenAI",
    excerpt: "A Gen-AI application that personalizes learning experiences, automates assessments, and provides intelligent tutoring for students.",
    challenge: "Schools needed a scalable solution to provide personalized learning at scale — addressing diverse student needs without proportionally increasing teaching staff or administrative overhead.",
    solution: "We built School Buddy, a Gen-AI application leveraging large language models for adaptive tutoring, automated quiz generation, and intelligent progress tracking. The platform includes parent dashboards and teacher analytics.",
    results: ["Personalized learning paths for 10,000+ students", "60% reduction in manual assessment workload", "Teachers freed up 8 hours/week for high-impact activities"],
    tech: ["Python", "OpenAI API", "React Native", "FastAPI", "MongoDB"],
    testimonial: "School Buddy didn't replace teachers — it gave them superpowers.",
  },
  {
    slug: "vessel-audit-platform",
    title: "Vessel Audit — Maritime Compliance Web & App",
    industry: "Maritime & Logistics",
    tag: "Web & App Development",
    excerpt: "A full-stack web and mobile application that digitized vessel audits, replacing paper-based inspections with real-time compliance tracking.",
    challenge: "Maritime vessel audits relied on paper forms, offline checklists, and manual data entry — leading to delays, compliance gaps, and costly re-inspections across global fleets.",
    solution: "PMRG developed a cross-platform web and mobile application for real-time vessel audit management. Inspectors capture findings with photos and geo-tags, while fleet managers track compliance status across all vessels from a centralized dashboard.",
    results: ["Audit turnaround reduced from 2 weeks to 48 hours", "90% elimination of paper-based processes", "Real-time compliance visibility across 200+ vessels"],
    tech: ["React", "React Native", "Node.js", "PostgreSQL", "AWS S3"],
    testimonial: "We went from filing cabinets to real-time compliance dashboards. PMRG transformed how we manage audits.",
  },
  {
    slug: "mvno-convergent-billing",
    title: "Convergent Billing for European MVNO",
    industry: "Telecommunications",
    tag: "BSS/OSS",
    excerpt: "A convergent billing platform with real-time charging, automated invoicing, and cashback loyalty — launched for a European MVNO in 5 months.",
    challenge: "A European MVNO needed a flexible billing engine that could handle prepaid, postpaid, and hybrid plans with real-time balance management — without the cost and lock-in of legacy BSS vendors.",
    solution: "We delivered PMRG's convergent billing platform with real-time rating, multi-currency invoicing, cashback loyalty wallets, and a subscriber self-care portal. The system integrates seamlessly with the host MNO's MVNE platform.",
    results: ["Real-time charging across prepaid and postpaid", "Cashback wallet drove 22% increase in ARPU", "5-month launch timeline from contract to go-live"],
    tech: ["Go", "Redis", "Kafka", "PostgreSQL", "Kubernetes"],
    testimonial: "PMRG delivered the billing flexibility we needed to differentiate in a competitive market.",
  },
  {
    slug: "crm-telecom-operator",
    title: "CRM Transformation for Regional Operator",
    industry: "Telecommunications",
    tag: "CRM",
    excerpt: "Unified CRM with lead tracking, SLA management, and integrated ticketing — replacing 4 disconnected tools for a regional telecom.",
    challenge: "A regional operator was managing customer relationships across 4 disconnected tools — a CRM, a ticketing system, a call logger, and spreadsheets. Agent productivity was low and customer satisfaction suffered.",
    solution: "PMRG implemented a unified CRM platform with lead and deal tracking, integrated call/email logging, an SLA management engine, customizable sales pipelines, and performance analytics dashboards for management.",
    results: ["4 tools consolidated into 1 platform", "Agent handle time reduced by 35%", "CSAT score improved from 3.2 to 4.5"],
    tech: ["React", "Node.js", "PostgreSQL", "Elasticsearch", "Docker"],
    testimonial: "Our agents finally have a single view of every customer. The difference in productivity is remarkable.",
  },
  {
    slug: "erp-manufacturing-firm",
    title: "ERP Implementation for Manufacturing Firm",
    industry: "Manufacturing",
    tag: "ERP",
    excerpt: "End-to-end ERP covering finance, inventory, procurement, and HR — streamlining operations for a 500-employee manufacturer.",
    challenge: "A mid-sized manufacturer managed finance, inventory, procurement, and payroll on separate legacy systems with manual data transfers. Month-end closing took 12 days and procurement visibility was poor.",
    solution: "PMRG deployed a comprehensive ERP covering finance & accounting, sales & order management, inventory & procurement, and HR & payroll — with automated workflows and real-time dashboards.",
    results: ["Month-end closing reduced from 12 days to 3", "Procurement cycle time cut by 45%", "Real-time inventory accuracy improved to 99.2%"],
    tech: ["React", "Python", "PostgreSQL", "Redis", "Docker"],
    testimonial: "PMRG didn't just install software — they re-engineered how we run our business.",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "building-bss-from-scratch-mvno",
    title: "Building a BSS Platform from Scratch: Lessons from Launching MVNOs",
    excerpt: "Legacy BSS vendors charge millions and take years. Here's how we build modern billing and provisioning systems that launch operators in months.",
    content: "",
    category: "Telecom",
    date: "2026-06-15",
    readTime: "9 min read",
  },
  {
    slug: "gen-ai-education-personalized-learning",
    title: "How Gen-AI Is Transforming Personalized Learning in Schools",
    excerpt: "From adaptive tutoring to automated assessments — a deep dive into building School Buddy and what we learned about AI in education.",
    content: "",
    category: "AI & ML",
    date: "2026-06-01",
    readTime: "10 min read",
  },
  {
    slug: "mvne-integration-guide",
    title: "MVNE Integration: The Technical Blueprint for Virtual Operators",
    excerpt: "Connecting your BSS to an MVNE platform involves provisioning APIs, mediation layers, and real-time charging hooks. Here's the complete guide.",
    content: "",
    category: "Telecom",
    date: "2026-05-18",
    readTime: "8 min read",
  },
  {
    slug: "crm-unified-customer-view",
    title: "The Unified Customer View: Why Your CRM Needs a Single Pane of Glass",
    excerpt: "Most operators manage customers across 4+ tools. We explain why unified CRM with integrated ticketing and SLA tracking changes everything.",
    content: "",
    category: "Digital Transformation",
    date: "2026-05-02",
    readTime: "7 min read",
  },
  {
    slug: "self-care-portal-reducing-support-costs",
    title: "Digital Self-Care Portals: Cutting Support Costs by 40%",
    excerpt: "Subscribers want to check balances, change plans, and raise complaints without calling support. Here's how to build a portal that actually works.",
    content: "",
    category: "Telecom",
    date: "2026-04-14",
    readTime: "6 min read",
  },
  {
    slug: "erp-implementation-lessons",
    title: "ERP Implementation: 5 Hard Lessons from the Manufacturing Floor",
    excerpt: "Finance, inventory, procurement, and HR under one roof sounds simple. Getting adoption right is the real challenge — here's what we've learned.",
    content: "",
    category: "Digital Transformation",
    date: "2026-03-28",
    readTime: "8 min read",
  },
  {
    slug: "cashback-loyalty-wallets-telecom",
    title: "Cashback Loyalty Wallets: Boosting ARPU for Telecom Operators",
    excerpt: "How integrated cashback and loyalty programs inside BSS platforms drive subscriber engagement and increase average revenue per user.",
    content: "",
    category: "Telecom",
    date: "2026-03-10",
    readTime: "7 min read",
  },
  {
    slug: "digitizing-maritime-compliance",
    title: "From Paper to Platform: Digitizing Maritime Vessel Audits",
    excerpt: "Paper-based inspections cost the maritime industry millions in delays. We share how mobile-first audit platforms are changing compliance.",
    content: "",
    category: "Industry News",
    date: "2026-02-20",
    readTime: "6 min read",
  },
  {
    slug: "cloud-migration-enterprise-apps",
    title: "Cloud Migration for Enterprise Apps: A Practical Playbook",
    excerpt: "Moving legacy business applications to the cloud isn't a lift-and-shift job. Here's the phased approach that minimizes risk and maximizes ROI.",
    content: "",
    category: "Cloud",
    date: "2026-02-05",
    readTime: "9 min read",
  },
] as const;

export const JOB_LISTINGS = [
  { title: "Senior Backend Engineer (Go)", department: "Engineering", location: "Pune / Remote", type: "Full-time", description: "Build the charging core of our BSS Suite in Go and Kubernetes." },
  { title: "AI/ML Engineer — NLP & LLMs", department: "AI & Data", location: "Remote", type: "Full-time", description: "Productionize LLM features across CRM360 and DataIntel." },
  { title: "Cloud Platform Engineer", department: "Cloud & DevOps", location: "Dubai / Remote", type: "Full-time", description: "Own the CloudOps platform — Kubernetes, GitOps, observability." },
  { title: "Frontend Engineer (React/Next.js)", department: "Engineering", location: "Pune", type: "Full-time", description: "Craft premium, accessible UIs across our product suite." },
  { title: "Telecom BSS Solutions Architect", department: "Solutions", location: "Singapore", type: "Full-time", description: "Shape convergent-charging architectures for tier-1 operators." },
  { title: "DevSecOps Engineer", department: "Cloud & DevOps", location: "London / Remote", type: "Full-time", description: "Embed zero-trust security into CI/CD and platform engineering." },
  { title: "Product Designer", department: "Design", location: "Pune / Remote", type: "Full-time", description: "Define the design language for enterprise-grade products." },
  { title: "Technical Program Manager", department: "Delivery", location: "Pune", type: "Full-time", description: "Drive complex, multi-team delivery for enterprise clients." },
] as const;

export const BENEFITS = [
  { icon: "HeartPulse", title: "Health & Wellness", description: "Comprehensive medical, dental, and vision coverage for you and your family." },
  { icon: "GraduationCap", title: "Learning Budget", description: "Annual learning stipend for courses, conferences, and certifications." },
  { icon: "Clock", title: "Flexible Hours", description: "Work when you're most productive — we care about outcomes, not hours clocked." },
  { icon: "Palmtree", title: "Generous PTO", description: "Paid time off plus company-wide recharge days so you can truly disconnect." },
  { icon: "Laptop", title: "Remote-Friendly", description: "Work from home, our Pune office, or a mix — whatever works best for you." },
  { icon: "TrendingUp", title: "Growth & Equity", description: "Clear career ladders, regular promotions, and meaningful equity participation." },
] as const;

export const BLOG_CATEGORIES = ["All", "AI & ML", "Telecom", "Digital Transformation", "Cloud", "Industry News"] as const;
export const CASE_STUDY_FILTERS = ["All", "Telecommunications", "Education & AI", "Maritime & Logistics", "Manufacturing"] as const;
export const SERVICE_INTERESTS = [
  "BSS/OSS Solutions",
  "CRM Platforms",
  "Digital Transformation",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Custom Software Development",
  "Not sure yet — help me decide",
] as const;