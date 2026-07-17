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
  { label: "Mission Vision", href: "/about" },
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
  { label: "Blogs/Testimonials", href: "/blog" },
  { label: "Our Team", href: "/team" },
  { label: "Jobs/Internship", href: "/careers" },
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
  slug: string;
  quote: string;
  fullDescription: string;
  name: string;
  title: string;
  company: string;
  logo?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    slug: "mtc",
    quote:
      "I wanted to take a moment to share my experience with PMRG Solution. I recently had the pleasure of working with their team, and I'm thrilled with the results.",
    fullDescription:
      "I wanted to take a moment to share my experience with PMRG Solution. I recently had the pleasure of working with their team, and I'm thrilled with the results. From the initial consultation to the final delivery, everything was handled with utmost professionalism. The team demonstrated deep technical expertise, proactive communication, and a genuine commitment to understanding our business needs. They delivered a solution that not only met our expectations but exceeded them in terms of quality, performance, and scalability. I would highly recommend PMRG Solution to any organization looking for a reliable and innovative technology partner.",
    name: "MTC",
    title: "Profession",
    company: "MTC",
    logo: "/logos/mtc.png",
  },
  {
    slug: "school-buddy",
    quote:
      "First off, the design is absolutely stunning. The team really captured our brand's essence and translated it into a visually appealing and user-friendly.",
    fullDescription:
      "First off, the design is absolutely stunning. The team really captured our brand's essence and translated it into a visually appealing and user-friendly platform. The attention to detail in every aspect of the design — from color schemes to typography to micro-interactions — shows a deep understanding of modern UX principles. Beyond the aesthetics, the technical implementation was rock-solid. The platform performs flawlessly across devices, loads quickly, and provides an intuitive experience for our users. The PMRG team was collaborative throughout, incorporating our feedback at every stage and delivering on time. Working with them has been a truly positive experience.",
    name: "School Buddy",
    title: "Profession",
    company: "SCHOOL BUDDY",
    logo: "/logos/school-buddy.png",
  },
  {
    slug: "vessel-audit",
    quote:
      "Throughout the entire process, communication with the team was excellent. They were attentive to our needs and expectations, and always quick to respond to any questions we had.",
    fullDescription:
      "Throughout the entire process, communication with the team was excellent. They were attentive to our needs and expectations, and always quick to respond to any questions we had. What impressed us most was their ability to understand the complexities of the maritime audit industry and translate those requirements into a functional, efficient digital solution. The platform they built has streamlined our audit workflows, improved data accuracy, and significantly reduced the time our team spends on administrative tasks. Their post-launch support has been equally impressive — responsive, thorough, and always focused on continuous improvement. PMRG Solution has been an invaluable partner in our digital transformation journey.",
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
    slug: "ai-governance-delivery-discipline",
    title: "From Black Box to Boardroom: Why AI Governance Is the New Delivery Discipline",
    excerpt: "Every enterprise racing to adopt AI eventually hits the same wall: models that work in a demo don't automatically translate into decisions leadership can trust. The gap isn't technical capability — it's governance.",
    content: `<h2>The AI-Intelligence Layer</h2>
<p>Think of this as the nervous system sitting between raw data and human decision-making. Instead of dashboards that just report what happened, an AI-intelligence layer actively supports decisions — flagging risk before it materializes, surfacing outcome trends across projects, and giving leadership a real-time read on where delivery is heading, not just where it's been.</p>
<p>The shift matters because most delivery risk isn't sudden. It builds quietly: a slipping sprint here, a resourcing gap there. AI models trained on historical delivery patterns can catch these signals weeks before a human program manager would, simply because they're watching every project simultaneously instead of the two or three closest to them.</p>

<h2>Governance Is What Makes It Trustworthy</h2>
<p>None of this works without guardrails. Governance frameworks define:</p>
<ul>
<li><strong>Data provenance</strong> — where inputs come from and how fresh they are</li>
<li><strong>Model accountability</strong> — who owns a recommendation, and how it's audited</li>
<li><strong>Escalation logic</strong> — when an AI flag requires human sign-off versus automated action</li>
</ul>
<p>Organizations that skip this step often see AI initiatives stall after the pilot phase — not because the model was wrong, but because nobody could explain <em>why</em> it made a call, and no one was willing to act on a recommendation they couldn't defend.</p>

<h2>Intelligent Sprint Planning: Governance in Action</h2>
<p>A practical example is capacity-aware sprint planning. Rather than teams committing to sprints based on gut feel or last quarter's velocity, an intelligence layer can cross-reference actual team capacity, historical commitment accuracy, and dependency risk to recommend realistic sprint loads — and explain the reasoning behind each recommendation.</p>
<p>This is delivery intelligence doing double duty: improving planning accuracy while building the audit trail that governance requires. Over time, this creates a virtuous cycle — better data discipline produces better models, and better-governed models earn more trust, which drives adoption deeper into the organization.</p>

<h2>The Bottom Line</h2>
<p>AI governance isn't a compliance checkbox bolted onto a project after the fact. Done right, it's the operating discipline that turns AI from an experimental tool into a dependable part of how an enterprise plans, delivers, and course-corrects. Organizations that treat governance as core infrastructure — not an afterthought — are the ones that will still be running their AI initiatives three years from now.</p>`,
    category: "AI & Governance",
    date: "2026-07-10",
    readTime: "7 min read",
  },
  {
    slug: "customer-lifecycle-orchestration-telecom",
    title: "Beyond the Network: Why Customer Lifecycle Orchestration Is Telecom's Next Battleground",
    excerpt: "Telecom operators have spent decades perfecting the network. Coverage, latency, uptime — these are table stakes now. What customers notice is everything else: the billing error, the plan upgrade that doesn't sync, the support agent with no context.",
    content: `<h2>The BSS/OSS Bottleneck</h2>
<p>Business Support Systems (BSS) and Operations Support Systems (OSS) form the backbone of how telecom operators bill, provision, and manage services. The problem is that most of these systems evolved in silos — billing here, provisioning there, customer records somewhere else entirely — often stitched together over 15–20 years of mergers, upgrades, and vendor changes.</p>
<p>The result is friction that customers feel directly: a plan change that takes days to reflect in billing, a network fault that support can't see in real time, an ERP system with no visibility into what's happening on the customer-facing side. Modernizing this stack isn't glamorous work, but it's the foundation everything else depends on.</p>

<h2>Customer Lifecycle Management as a Discipline</h2>
<p>End-to-end customer lifecycle orchestration reframes the problem. Instead of treating onboarding, billing, support, and retention as separate workflows owned by separate teams, it treats them as one continuous journey — with a single, consistent view of the customer at every stage.</p>
<p>Done well, this means:</p>
<ul>
<li>A customer's plan change made via app instantly reflects across billing, support, and network provisioning</li>
<li>Churn risk signals (usage drops, repeated support contacts, billing disputes) surface automatically instead of being buried across disconnected systems</li>
<li>Retention offers are triggered by real behavioral signals, not generic campaigns blasted to entire customer segments</li>
</ul>

<h2>Why This Matters More Now</h2>
<p>Telecom margins are under pressure, acquisition costs are rising, and customers have more switching options than ever — MVNOs, bundled fiber-and-mobile plans, and satellite alternatives are all lowering the barrier to leave. In that environment, the cost of a bad billing experience isn't just one annoyed customer; it's a churn event that took years of infrastructure investment to prevent.</p>
<p>Enterprise and telecom platforms that unify BSS, OSS, ERP, and CRM around the customer — rather than around internal org charts — are the ones positioned to compete on experience, not just price. The network got operators this far. Customer platforms will decide who wins the next decade.</p>`,
    category: "Telecom",
    date: "2026-06-28",
    readTime: "8 min read",
  },
  {
    slug: "data-center-management-hybrid-cloud",
    title: "The Invisible Backbone: Rethinking Data Center Management for a Hybrid-Cloud World",
    excerpt: "Nobody notices infrastructure until it fails. Success looks like nothing happening — no outages, no slow queries, no 2 a.m. pages. But achieving that invisibility has gotten dramatically harder as environments have sprawled.",
    content: `<h2>The Visibility Problem</h2>
<p>Most organizations don't actually lack infrastructure — they lack a unified view of it. A typical enterprise today runs workloads across:</p>
<ul>
<li>On-premises data centers for legacy or compliance-sensitive systems</li>
<li>One or more public cloud providers for elastic workloads</li>
<li>Edge locations for latency-sensitive applications</li>
<li>A growing set of SaaS and managed services nobody centrally tracks</li>
</ul>
<p>Each of these tends to have its own monitoring tools, its own alerting logic, and its own team. When something breaks, the first hour of incident response is often just figuring out <em>where</em> the problem actually is — before anyone can start fixing it.</p>
<p>Unified infrastructure visibility solves this by pulling telemetry from every environment into a single control plane. It doesn't replace the specialized tools each team uses; it gives leadership and on-call engineers a common picture so a network issue in one region and a database bottleneck in another don't look like two unrelated fires.</p>

<h2>Managed Operations as a Force Multiplier</h2>
<p>Once visibility exists, managed operations can shift from reactive firefighting to proactive management. Capacity planning becomes a data-driven exercise instead of a guessing game. Cost optimization — a perennial pain point in cloud environments — becomes possible because spend can finally be mapped back to actual usage patterns, not just monthly invoices.</p>
<p>DevOps practices benefit too. Deployment pipelines that are visible end-to-end make it far easier to spot where releases are slowing down, where flaky tests are costing engineering time, and where infrastructure — not code — is the actual bottleneck.</p>

<h2>Why This Is a Business Conversation, Not Just an IT One</h2>
<p>Infrastructure decisions used to be purely technical. That's no longer true. Downtime has direct revenue impact, cloud costs are now a board-level budget line, and infrastructure choices increasingly determine how fast a company can ship new products. Organizations that treat data center and cloud management as a strategic capability — not just a cost center to be minimized — end up with more reliable systems and lower total spend, because they're managing infrastructure with intention instead of accumulated inertia.</p>
<p>The goal isn't a flashier data center. It's an infrastructure layer boring enough that nobody has to think about it — which, paradoxically, takes real sophistication to achieve.</p>`,
    category: "Cloud & Infrastructure",
    date: "2026-06-15",
    readTime: "7 min read",
  },
  {
    slug: "responsible-ai-education-smart-campus",
    title: "Responsible AI in Education: From K-12 Classrooms to Smart University Campuses",
    excerpt: "Education technology has a credibility problem. Closing the gap between AI hype and real classroom impact requires two things done well: responsible AI for younger learners, and smarter operations for the institutions built to serve them.",
    content: `<h2>AI for Schools: Responsibility First</h2>
<p>K-12 is not the place for move-fast-and-break-things AI deployment. The students involved are minors, the stakes around data privacy are high, and the potential for AI to either help or harm learning outcomes is significant depending on how it's implemented.</p>
<p>Responsible AI for schools means:</p>
<ul>
<li><strong>Transparency for educators</strong> — teachers should understand what an AI tool is recommending and why, not treat it as an unquestionable black box</li>
<li><strong>Privacy by design</strong> — student data protections that go beyond minimum compliance, especially given how much behavioral data adaptive learning tools can generate</li>
<li><strong>Support, not replacement</strong> — AI that helps teachers personalize instruction and catch students falling behind, without displacing the human relationships that actually drive learning</li>
</ul>
<p>Done carefully, AI can help flag a struggling student weeks before a report card would show it, or free up a teacher's time from administrative grading so more of it goes toward actual instruction. Done carelessly, it becomes another unaccountable system making decisions about children's education.</p>

<h2>Smart Campuses: Where Operations Meets Academics</h2>
<p>Universities face a different but related challenge: connecting sprawling, decades-old campus infrastructure into something that functions as a coherent, intelligent system. Smart campus initiatives typically combine:</p>
<ul>
<li>Connected building and facilities management (energy use, space utilization, maintenance)</li>
<li>Academic operations intelligence (enrollment patterns, resource allocation, campus safety)</li>
<li>Unified data across departments that have historically operated in silos</li>
</ul>
<p>The payoff isn't just efficiency, though that matters — a campus that knows which buildings are underused can cut energy costs meaningfully. The bigger win is that connected campus data lets administrators make better decisions about everything from course scheduling to student support services, grounded in what's actually happening across campus rather than fragmented departmental reports.</p>

<h2>The Common Thread</h2>
<p>Whether it's a classroom or a campus, the throughline is the same: AI in education only earns its place when it's built around the people it's meant to serve — students, teachers, and administrators — rather than around what's technically possible. Institutions that get this right will find that responsible, well-governed AI doesn't just modernize education. It restores some of the trust that flashy, poorly-implemented edtech has spent the last decade eroding.</p>`,
    category: "Education",
    date: "2026-06-01",
    readTime: "8 min read",
  },
  {
    slug: "innovation-talent-pipelines-campus-career",
    title: "Closing the Gap Between Campus and Career: Building Real Innovation and Talent Pipelines",
    excerpt: "Ask most employers what's wrong with fresh graduates, and you'll hear: technically capable, but not workplace-ready. Both sides are pointing at the same structural gap — and closing it takes more than a capstone project.",
    content: `<h2>Incubation Centers: Innovation Needs Structure</h2>
<p>Every college claims to encourage innovation. Far fewer actually build the pipeline that turns a student's raw idea into something real. A structured incubation center does the unglamorous work that separates genuine innovation programs from decorative ones:</p>
<ul>
<li><strong>Idea intake and evaluation</strong> — a real process for surfacing and assessing student projects, not just an annual pitch competition</li>
<li><strong>Mentorship access</strong> — connections to people who've actually built something, not just faculty advisors reading from a syllabus</li>
<li><strong>Resource and funding pathways</strong> — a clear route from "interesting prototype" to "fundable venture" or at least a strong portfolio piece</li>
</ul>
<p>Without this structure, good ideas die quietly after the semester ends, not because they weren't viable, but because nobody built the scaffolding to carry them further.</p>

<h2>Structured Internships: Learning That Transfers</h2>
<p>The same principle applies to internships. A student shadowing someone for a few weeks learns very little that transfers into an actual job. A structured, role-based internship — with defined learning objectives, real project ownership, and regular feedback — does something fundamentally different: it teaches workplace readiness as a skill in its own right, alongside whatever technical work is being done.</p>
<p>This matters especially in fast-moving fields like AI and software engineering, where the gap between "what's taught" and "what's current in industry" can be significant. A well-structured internship exposes students to the actual tools, workflows, and pace of real projects — including the parts that don't show up in coursework, like managing ambiguity, working with legacy systems, or explaining technical decisions to non-technical stakeholders.</p>

<h2>Why Institutions Should Care About Both</h2>
<p>Incubation and internship programs often get funded and run separately, but they solve the same underlying problem from different angles: how do you take someone with strong fundamentals and make them genuinely useful to an organization — or capable of building their own? Institutions that invest seriously in both don't just improve placement statistics. They produce graduates who can contribute meaningfully in their first few months on the job, rather than needing a year of informal, unstructured ramp-up that most employers aren't set up to provide.</p>
<p>The students entering the workforce over the next few years will be judged less on what they memorized and more on what they can actually do. Institutions that build real pipelines — not token programs — are the ones giving their students a genuine head start.</p>`,
    category: "Education",
    date: "2026-05-18",
    readTime: "7 min read",
  },
] as const;

export const JOB_LISTINGS = [
  { title: "Senior Backend Engineer (Go)", department: "Engineering", location: "Pune / Remote", type: "Full-time", category: "job" as const, description: "Build the charging core of our BSS Suite in Go and Kubernetes." },
  { title: "AI/ML Engineer — NLP & LLMs", department: "AI & Data", location: "Remote", type: "Full-time", category: "job" as const, description: "Productionize LLM features across CRM360 and DataIntel." },
  { title: "Cloud Platform Engineer", department: "Cloud & DevOps", location: "Dubai / Remote", type: "Full-time", category: "job" as const, description: "Own the CloudOps platform — Kubernetes, GitOps, observability." },
  { title: "Frontend Engineer (React/Next.js)", department: "Engineering", location: "Pune", type: "Full-time", category: "job" as const, description: "Craft premium, accessible UIs across our product suite." },
  { title: "Telecom BSS Solutions Architect", department: "Solutions", location: "Singapore", type: "Full-time", category: "job" as const, description: "Shape convergent-charging architectures for tier-1 operators." },
  { title: "DevSecOps Engineer", department: "Cloud & DevOps", location: "London / Remote", type: "Full-time", category: "job" as const, description: "Embed zero-trust security into CI/CD and platform engineering." },
  { title: "Product Designer", department: "Design", location: "Pune / Remote", type: "Full-time", category: "job" as const, description: "Define the design language for enterprise-grade products." },
  { title: "Technical Program Manager", department: "Delivery", location: "Pune", type: "Full-time", category: "job" as const, description: "Drive complex, multi-team delivery for enterprise clients." },
  { title: "Frontend Development Intern", department: "Engineering", location: "Pune", type: "Internship", category: "internship" as const, description: "Learn and contribute to production React/Next.js applications under senior mentorship." },
  { title: "AI/ML Research Intern", department: "AI & Data", location: "Remote", type: "Internship", category: "internship" as const, description: "Work on real-world NLP and LLM projects with our AI team." },
  { title: "Cloud & DevOps Intern", department: "Cloud & DevOps", location: "Pune", type: "Internship", category: "internship" as const, description: "Hands-on experience with Kubernetes, CI/CD pipelines, and cloud infrastructure." },
  { title: "UI/UX Design Intern", department: "Design", location: "Pune / Remote", type: "Internship", category: "internship" as const, description: "Design intuitive interfaces for enterprise products alongside experienced designers." },
] as const;

export const BENEFITS = [
  { icon: "HeartPulse", title: "Health & Wellness", description: "Comprehensive medical, dental, and vision coverage for you and your family." },
  { icon: "GraduationCap", title: "Learning Budget", description: "Annual learning stipend for courses, conferences, and certifications." },
  { icon: "Clock", title: "Flexible Hours", description: "Work when you're most productive — we care about outcomes, not hours clocked." },
  { icon: "Palmtree", title: "Generous PTO", description: "Paid time off plus company-wide recharge days so you can truly disconnect." },
  { icon: "Laptop", title: "Remote-Friendly", description: "Work from home, our Pune office, or a mix — whatever works best for you." },
  { icon: "TrendingUp", title: "Growth & Equity", description: "Clear career ladders, regular promotions, and meaningful equity participation." },
] as const;

export const BLOG_CATEGORIES = ["All", "AI & Governance", "Telecom", "Cloud & Infrastructure", "Education"] as const;
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