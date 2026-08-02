import { Brain, Code, Database, Layers, Terminal } from "lucide-react"

export const personalDetails = {
    name: "Darpally Saketh Goud",
    title: "Master of Engineering in Artificial Intelligence",
    titles: ["AI Engineer", "Agentic Systems Architect", "Machine Learning Specialist", "Data Analyst"],
    tagline: "Master of Engineering in Artificial Intelligence candidate who designs and ships agentic LLM systems: multi-agent orchestration, retrieval-augmented generation, and tool / OAuth integrations.",
    bio: `Master of Engineering in Artificial Intelligence candidate who designs and ships agentic LLM systems: multi-agent orchestration, retrieval-augmented generation, and tool / OAuth integrations, as deployed, end-to-end applications backed by evaluation harnesses and clean, reproducible code.`,
    resumeUrl: "https://drive.google.com/file/d/1L15wDMR1bR3XjNgRvZBGY3Sl319y-MKI/view?usp=sharing",
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
        items: ["Python", "SQL", "JavaScript", "Java", "C++", "C"],
        icon: Code,
    },
    {
        category: "Agentic & LLM",
        items: [
            "LangGraph",
            "LangChain",
            "Retrieval-Augmented Generation (RAG)",
            "Multi-Agent Orchestration",
            "Prompt Engineering",
            "Function / Tool Calling",
            "OAuth Tool Integrations",
            "Human-in-the-Loop Workflows",
            "Agent Memory & Checkpointing",
            "Vector Search & Embeddings",
            "LLM Evaluation & Eval Harnesses",
            "Streaming Responses",
        ],
        icon: Terminal,
    },
    {
        category: "ML / DL",
        items: ["PyTorch", "TensorFlow", "scikit-learn", "Keras", "NLP", "OpenCV", "Model Deployment"],
        icon: Brain,
    },
    {
        category: "LLMs & Data Stores",
        items: [
            "OpenAI API",
            "Anthropic Claude",
            "Gemini",
            "Groq",
            "OpenRouter",
            "LlamaIndex",
            "Hugging Face",
            "ChromaDB",
            "pgvector",
            "Supabase",
            "PostgreSQL",
            "MongoDB",
            "Pandas",
            "NumPy",
            "Apache Spark",
        ],
        icon: Database,
    },
    {
        category: "Platforms & DevOps",
        items: [
            "FastAPI",
            "Next.js",
            "React",
            "Docker",
            "Git",
            "GitHub Actions (CI/CD)",
            "Async SQLAlchemy",
            "AWS",
            "GCP",
            "Render",
            "Vercel",
            "Gradio",
            "Streamlit",
        ],
        icon: Layers,
    },
]

export const experience = [
    {
        company: "Grahmind Innovations",
        role: "AI Engineering Intern",
        logo: "",
        duration: "Jun 2026 – Jul 2026",
        location: "Hyderabad, India",
        department: "AI Engineering & Automation",
        description: [
            "Built and tested 8+ AI-powered automation workflows using n8n, LLM APIs, REST APIs, webhooks, JSON, and JavaScript to automate internal operations, data processing, and document-generation tasks, reducing manual effort by approximately 30%.",
            "Developed an internal organizational chatbot that enabled employees to retrieve company information, summarize internal resources, and receive contextual responses through natural-language queries.",
            "Automated cross-company Proof of Concept documentation workflows, converting stakeholder requirements into structured business and technical documents with solution scope, implementation plans, architecture details, and success criteria.",
        ],
        tech: ["n8n", "LLM APIs", "REST APIs", "Webhooks", "JSON", "JavaScript", "Chatbots", "Automation"],
    },
    {
        company: "Request IT Support",
        role: "Junior Data Analyst",
        logo: "",
        duration: "Sep 2023 – Jul 2025",
        location: "Hyderabad, India",
        department: "Data Analytics & Reporting",
        description: [
            "Cleaned, validated, and transformed 25,000+ candidate, client, and recruitment records using SQL, Python (Pandas), and Excel through standardization, duplicate removal, and validation to support accurate reporting and analytics.",
            "Developed and maintained Power BI dashboards and recurring reports with SQL queries and automated data-preparation workflows, visualizing recruitment, client, and operational KPIs and reducing report turnaround time by 30%.",
            "Performed exploratory data analysis on recruitment pipelines, interview conversion, and client hiring patterns, collaborating with cross-functional teams to deliver actionable insights and maintain 98%+ reporting accuracy.",
        ],
        tech: ["SQL", "Python", "Pandas", "Power BI", "Excel", "Data Analytics"],
    },
    {
        company: "Microsoft & SAP Initiative, AICTE Virtual",
        role: "Artificial Intelligence Intern",
        logo: "",
        duration: "Jan 2025 – Feb 2025",
        location: "Remote",
        description: [
            "Developed predictive models for heart disease, Parkinson's, and diabetes, achieving 85% accuracy on test data.",
            "Built a Streamlit-powered interface, processing 100+ real-time predictions per session, increasing model accessibility by 60%.",
        ],
        tech: ["Python", "Machine Learning", "Streamlit", "scikit-learn"],
    },
    {
        company: "Internship Studio Virtual",
        role: "Artificial Intelligence Intern",
        logo: "",
        duration: "Nov 2024 – Dec 2024",
        location: "Remote",
        description: [
            "Crafted a 77% accurate face recognition model on a 5,000+ image dataset, optimizing training with 90% feature reduction using PCA & LDA.",
            "Implemented a (10,10) MLP architecture with early stopping (loss threshold 0.0001), enhancing model convergence and efficiency.",
        ],
        tech: ["Python", "PCA", "LDA", "MLP Architecture", "Computer Vision"],
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
        title: "LLM Cost Autopilot: Intelligent LLM Routing Gateway",
        tech: ["Python", "FastAPI", "Async SQLAlchemy", "scikit-learn", "Docker", "Groq / OpenRouter"],
        description: "Built and deployed an OpenAI-compatible LLM routing gateway integrated into a production app (Wayfare), achieving 93.1% serving-cost reduction and 91.5% routing accuracy.",
        bullets: [
            "Built and deployed an OpenAI-compatible LLM routing gateway integrated into a production app (Wayfare), achieving 93.1% serving-cost reduction, 91.5% routing accuracy, and quality parity (88.6% routed pass rate vs. 84.3% baseline) across a 300-prompt benchmark.",
            "Designed a capability-aware model selection engine that dynamically filters LLM candidates by tool-calling support, context limits, and structured-output capability (JSON mode vs. strict JSON schema) before cost-based ranking to prevent incompatible model selection.",
            "Implemented an async LLM-as-judge verification and retraining pipeline with non-regression safeguards, achieving +23.4% projected net savings under production sampling policies while balancing verification overhead against routing quality.",
        ],
        links: {
            github: "https://github.com/Saketh-2407/LLM-Cost-Optimizer",
        },
    },
    {
        title: "Wayfare: Multi-Agent AI Travel Planner",
        tech: ["LangGraph", "LangChain", "FastAPI", "Next.js", "React", "Supabase", "pgvector", "OpenAI", "Gemini", "Groq", "Render", "Vercel"],
        description: "An 8-node LangGraph agentic travel planner with dynamic supervisor routing, parallel flight/stay/activity agents, human-in-the-loop clarification interrupts, and critic-driven revision loops.",
        bullets: [
            "Built an 8-node LangGraph agentic travel planner with dynamic supervisor routing, parallel flight/stay/activity agents, human-in-the-loop clarification interrupts, and critic-driven revision loops; integrated 6 external services (Duffel, OpenStreetMap, Open-Meteo, Tavily, Supabase) and multi-provider LLMs (Gemini, Groq, OpenRouter).",
            "Engineered a production RAG memory and orchestration layer using Supabase Postgres + pgvector for semantic preference retrieval, LangGraph checkpointing for resumable workflows, and SSE streaming for real-time multi-agent updates in a Next.js frontend.",
            "Designed a 15-case end-to-end evaluation harness spanning full trips, ambiguous queries, and budget constraints; validated 100% groundedness across 11 completed plans, 100% clarification accuracy, and 83% budget adherence.",
        ],
        links: {
            github: "https://github.com/Saketh-2407/Agentic-AI-Travel-Planner",
            demo: "https://frontend-flame-one-50.vercel.app",
        },
    },
    {
        title: "MeetOps AI: Agentic Meeting Intelligence Platform",
        tech: ["LangGraph", "LangChain", "Python", "FastAPI", "PostgreSQL", "OAuth 2.0", "Gmail / Google Calendar / GitHub APIs", "Checkpointing"],
        description: "An 8-node LangGraph agentic workflow transforming meeting transcripts into structured summaries, decisions, action items, emails, and calendar suggestions.",
        bullets: [
            "Built an 8-node LangGraph agentic workflow that transforms meeting transcripts into structured summaries, decisions, action items, emails, and calendar suggestions via sequential LLM agents, with human-in-the-loop interrupt approval and checkpoint-based resumption (11.4s median latency across 10 runs).",
            "Developed a human-approved action execution framework integrating Gmail Drafts, Google Calendar, and GitHub REST APIs, with PostgreSQL backed audit logging tracking every action lifecycle across approved, rejected, failed, and tracked states.",
            "Created an LLM evaluation harness over 3 labeled transcripts with 12 expected action items, measuring precision, recall, F1, ownership, and deadline accuracy; achieved 77% precision, 83% recall, 80% F1, and 100% owner attribution accuracy.",
        ],
        links: {
            github: "https://github.com/Saketh-2407/Meetops-AI",
        },
    },
    {
        title: "RAG-Powered AI Tutor",
        tech: ["Python", "LlamaIndex", "OpenAI (GPT-4o-mini)", "text-embedding-3-small", "ChromaDB", "Gradio", "Hugging Face Spaces", "CI/CD"],
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
        links: {
            github: "https://github.com/Saketh-2407",
        },
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
]
