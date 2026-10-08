import { Brain, Code, Database, Layers, Terminal } from "lucide-react"

export const personalDetails = {
    name: "Darpally Saketh Goud",
    title: "Master of Engineering in Artificial Intelligence | AI, Software & Data Systems",
    titles: [
        "AI / ML Engineer",
        "Software & Backend Engineer",
        "Data & ML Systems Engineer",
        "Agentic AI Architect"
    ],
    tagline: "Master of Engineering in AI candidate specializing in production AI/ML systems, scalable data pipelines, and robust software engineering across Python, SQL, and distributed architectures.",
    bio: `Master of Engineering in Artificial Intelligence student at the University of Cincinnati with experience building production-oriented AI/ML systems, data pipelines, and backend services using Python, SQL, cloud platforms, and modern distributed architectures. Focused on scalable, reliable systems that combine machine learning, data engineering, and software engineering to solve complex real-world problems.`,
    resumeUrl: "https://drive.google.com/file/d/1aKVJVN4KvNNMwz_qF6w0WK9Ddck8o2jg/view?usp=sharing",
    socials: {
        github: "https://github.com/Saketh-2407",
        linkedin: "https://www.linkedin.com/in/saketh-darpally24/",
        email: "darpallysaketh@gmail.com",
        phone: "+1 513-240-2328",
        location: "Cincinnati, OH",
    },
}

export const skills = [
    {
        category: "Languages",
        items: ["Python", "SQL", "Java", "JavaScript / TypeScript", "C++", "C"],
        icon: Code,
    },
    {
        category: "AI / ML Engineering",
        items: [
            "Agentic AI",
            "LangGraph",
            "LangChain",
            "Retrieval-Augmented Generation (RAG)",
            "LLM Evaluation",
            "Prompt Engineering & Tool Calling",
            "Embeddings & Vector Search",
            "PyTorch",
            "TensorFlow",
            "scikit-learn",
            "Hugging Face",
            "NLP & Model Evaluation",
        ],
        icon: Brain,
    },
    {
        category: "Data Engineering",
        items: [
            "Pandas",
            "NumPy",
            "Apache Spark",
            "ETL / ELT Pipelines",
            "Data Modeling & Data Quality",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "pgvector",
            "Data Warehousing",
            "Kafka Streaming Fundamentals",
        ],
        icon: Database,
    },
    {
        category: "Software Engineering & Microservices",
        items: [
            "FastAPI",
            "REST APIs",
            "React",
            "Next.js",
            "Spring Boot",
            "Microservices Architecture",
            "Distributed Systems",
            "OOP & System Design",
            "Unit / Integration Testing",
            "OAuth 2.0",
        ],
        icon: Terminal,
    },
    {
        category: "Cloud & DevOps",
        items: [
            "AWS",
            "GCP",
            "Docker",
            "Kubernetes",
            "Git",
            "GitHub Actions (CI/CD)",
            "Linux System Admin",
            "Monitoring & Observability",
            "API Deployment",
            "Airflow & dbt",
        ],
        icon: Layers,
    },
]

export const experience = [
    {
        company: "Ohio Cyber Range Institute (OCRI)",
        role: "Graduate Student Associate - Data & AI",
        logo: "",
        duration: "Aug 2026 – Present",
        location: "Cincinnati, OH",
        department: "Data & AI Operations",
        description: [
            "Developing an AI-assisted challenge intelligence pipeline for cybersecurity education programs using Python, LLM classification, structured metadata, and reviewer-in-the-loop evaluation to triage 100+ challenge artifacts across topic, delivery mode, and technical requirements.",
            "Built reusable validation and analytics checks for challenge content and competition operations, reducing manual review steps by about 25% in early internal workflows while producing auditable outputs for statewide education and workforce programs.",
        ],
        tech: ["Python", "LLM Classification", "Structured Metadata", "Human-in-the-Loop", "Data Analytics", "Validation Pipelines"],
    },
    {
        company: "IDD Education Center, University of Cincinnati",
        role: "Software Engineer",
        logo: "",
        duration: "Dec 2025 – May 2026",
        location: "Cincinnati, OH",
        department: "Software Systems Engineering",
        description: [
            "Developed Python/JavaScript services, REST integrations, and SQL-backed workflows for education-program operations, consolidating data from 3 recurring processes and reducing repetitive staff data-entry steps by about 20%.",
            "Implemented input validation, logging, automated tests, and reusable backend utilities across 2 core workflows, improving maintainability and reducing recurring data-quality defects in participant-facing and internal software.",
        ],
        tech: ["Python", "JavaScript", "REST APIs", "SQL", "Input Validation", "Automated Testing", "Software Engineering"],
    },
    {
        company: "Grahmind Innovations",
        role: "AI/ML Engineering Intern",
        logo: "",
        duration: "Jun 2026 – Jul 2026",
        location: "Hyderabad, India",
        department: "AI Engineering & Automation",
        description: [
            "Built 8+ AI/ML workflows with Python, scikit-learn, LLM APIs, n8n, REST APIs, and retrieval components for document intelligence, knowledge Q&A, classification, and internal operations, reducing manual handling time by about 30% across pilot use cases.",
            "Developed and evaluated 2 internal AI assistants with retrieval, prompt/response tests, structured outputs, and lightweight ML ranking/classification logic across 3 knowledge tasks, improving response consistency and reducing repeated manual lookup effort.",
        ],
        tech: ["Python", "scikit-learn", "LLM APIs", "n8n", "REST APIs", "Retrieval & Q&A", "AI Assistants"],
    },
    {
        company: "Request IT Support",
        role: "Data & Software Analyst",
        logo: "",
        duration: "Sep 2023 – Jul 2025",
        location: "Hyderabad, India",
        department: "Data Analytics & Software Systems",
        description: [
            "Engineered Python/SQL data pipelines and reusable validation utilities for 25K+ recruitment and client records, standardizing schemas, de-duplicating data, and exposing analysis-ready datasets that sustained 98%+ reporting accuracy.",
            "Built internal reporting software and automated SQL/Pandas workflows feeding Power BI dashboards and recurring exports, cutting report turnaround by about 30% while improving reliability of hiring-funnel and client KPI delivery.",
        ],
        tech: ["Python", "SQL", "Data Pipelines", "Pandas", "Power BI", "Data Analytics", "Software Workflows"],
    },
]

export interface Project {
    title: string
    tech: string[]
    description: string
    bullets: string[]
    duration?: string
    category?: string
    links: {
        github?: string
        demo?: string
    }
}

export const projects: Project[] = [
    {
        title: "LLM Cost Autopilot: Intelligent Model Routing Gateway",
        tech: ["Python", "FastAPI", "scikit-learn", "Docker", "LLM APIs"],
        description: "Built an OpenAI-compatible LLM router evaluated on 300 prompts, reaching 91.5% routing accuracy and 93.1% lower serving cost with quality parity to a fixed-model baseline.",
        bullets: [
            "Built an OpenAI-compatible LLM router evaluated on 300 prompts, reaching 91.5% routing accuracy and 93.1% lower serving cost with quality parity to a fixed-model baseline.",
            "Added capability-aware selection, async LLM-as-judge checks, and non-regression retraining safeguards, projecting 23.4% additional net savings under sampled verification.",
        ],
        links: {
            github: "https://github.com/Saketh-2407/LLM-Cost-Optimizer",
        },
    },
    {
        title: "Wayfare: Multi-Agent AI Travel Planner",
        tech: ["LangGraph", "FastAPI", "Next.js", "PostgreSQL / pgvector", "RAG"],
        description: "Designed an 8-node LangGraph system with supervisor routing, parallel agents, approval gates, checkpointing, and 6 integrations; validated 100% groundedness on 11 completed plans.",
        bullets: [
            "Designed an 8-node LangGraph system with supervisor routing, parallel agents, approval gates, checkpointing, and 6 integrations; validated 100% groundedness on 11 completed plans.",
            "Built pgvector-backed preference memory and SSE streaming APIs, achieving 100% clarification accuracy and 83% budget adherence across a 15-case end-to-end evaluation suite.",
        ],
        links: {
            github: "https://github.com/Saketh-2407/Agentic-AI-Travel-Planner",
            demo: "https://frontend-flame-one-50.vercel.app",
        },
    },
    {
        title: "MeetOps AI: Agentic Meeting Intelligence Platform",
        tech: ["LangGraph", "LangChain", "Python", "FastAPI", "PostgreSQL", "OAuth 2.0", "Gmail / Google Calendar / GitHub APIs"],
        description: "An 8-node LangGraph agentic workflow transforming meeting transcripts into structured summaries, decisions, action items, emails, and calendar suggestions.",
        bullets: [
            "Built an 8-node LangGraph agentic workflow that transforms meeting transcripts into structured summaries, decisions, action items, emails, and calendar suggestions via sequential LLM agents, with human-in-the-loop interrupt approval and checkpoint-based resumption.",
            "Developed a human-approved action execution framework integrating Gmail Drafts, Google Calendar, and GitHub REST APIs, with PostgreSQL backed audit logging tracking every action lifecycle.",
            "Created an LLM evaluation harness over 3 labeled transcripts measuring precision, recall, F1, ownership, and deadline accuracy; achieved 77% precision, 83% recall, 80% F1, and 100% owner attribution accuracy.",
        ],
        links: {
            github: "https://github.com/Saketh-2407/Meetops-AI",
        },
    },
    {
        title: "RAG-Powered AI Tutor",
        tech: ["Python", "LlamaIndex", "OpenAI (GPT-4o-mini)", "text-embedding-3-small", "ChromaDB", "Gradio", "Hugging Face Spaces"],
        description: "Retrieval-augmented tutor indexing 500+ technical articles in ChromaDB with text-embedding-3-small for grounded, source-aware answers.",
        bullets: [
            "Built a retrieval-augmented tutor indexing 500+ technical articles in ChromaDB with text-embedding-3-small for grounded, source-aware answers.",
            "Shipped a streaming Gradio UI with long-context memory; deployed on Hugging Face Spaces with a CI/CD pipeline for continuous delivery.",
        ],
        links: {
            github: "https://github.com/Saketh-2407/AI_Tutor_Using_RAG",
        },
    },
    {
        title: "Customer Purchase History Analysis and Prediction",
        tech: ["Python", "Apache Spark", "Pandas", "NumPy", "Scikit-learn"],
        duration: "Jan 2024 – Feb 2024",
        category: "Machine Learning Project",
        description: "Analyzed customer purchase data and built predictive models using Apache Spark for efficient big data processing and real-time analysis.",
        bullets: [
            "Analyzed customer purchase data and built predictive models using Apache Spark for efficient big data processing and real-time analysis.",
            "Applied K-Means clustering and ALS algorithms for customer segmentation and recommendation with a prediction accuracy of 92%.",
            "Improved marketing strategies and inventory management through distributed computing and machine learning models.",
        ],
        links: {},
    },
    {
        title: "SignalLake: Real-Time Data & ML Intelligence Platform",
        tech: ["Python", "Kafka", "Spark", "dbt", "Airflow", "MLflow"],
        description: "Built Kafka/Spark pipelines over 2M+ synthetic events with dbt quality gates and 30+ reusable features; trained an ML model reaching 0.89 F1 for real-time anomaly detection.",
        bullets: [
            "Built Kafka/Spark pipelines over 2M+ synthetic events with dbt quality gates and 30+ reusable features; trained an ML model reaching 0.89 F1 for real-time anomaly detection.",
            "Orchestrated incremental/backfill workflows with Airflow and MLflow lineage, serving online features at sub-120 ms p95 while cutting recomputation by 64% in load tests.",
        ],
        links: {
            github: "https://github.com/Saketh-2407/signallake",
        },
    },
    {
        title: "PulseCore: Distributed Backend & Event Processing Platform",
        tech: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Docker"],
        description: "Built event-driven microservices with Kafka, PostgreSQL, Redis caching, idempotency, and retry/DLQ handling; sustained 1,800+ req/s with sub-95 ms p95 in local load tests.",
        bullets: [
            "Built event-driven microservices with Kafka, PostgreSQL, Redis caching, idempotency, and retry/DLQ handling; sustained 1,800+ req/s with sub-95 ms p95 in local load tests.",
            "Added OpenTelemetry tracing, contract/integration tests, rate limiting, and containerized deployment; reduced duplicate event processing by 99% and achieved 99.9% test-run availability.",
        ],
        links: {},
    },
]

export const education = [
    {
        degree: "Master of Engineering in Artificial Intelligence",
        school: "University of Cincinnati",
        logo: "/cincinnati_logo.png",
        details: "Relevant Coursework: Machine Learning, Deep Learning, Artificial Intelligence, Generative AI, Natural Language Processing, Large Language Models, Data Mining, Cloud Computing",
        duration: "Aug 2025 – Apr 2027",
        location: "Cincinnati, OH",
    },
    {
        degree: "Bachelor of Technology in Data Science",
        school: "MLR Institute of Technology and Management",
        logo: "",
        details: "Relevant Coursework: Data Science, Machine Learning, Data Engineering, Software Engineering, Python, SQL, Statistics",
        duration: "2021 – 2025",
        location: "Hyderabad, India",
    },
]
