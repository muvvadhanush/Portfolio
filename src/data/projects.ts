export interface ProjectMedia {
    thumbnail?: string;
    videoUrl?: string;
    gallery?: string[];
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    fullDescription: string;
    icon: string;
    accent: string;
    size?: 'large' | 'small';
    media?: ProjectMedia;
    tags: string[];
    highlights: string[];
    architecture: string[];
    challenges: string;
    solutions: string;
    impact: string;
    stat: { value: string; label: string };
    links: { github?: string; live?: string };
}

export const projectsData: Project[] = [
    {
        id: 'agentic-tax-automation',
        title: 'Agentic AI Tax Automation',
        subtitle: 'Tax Intelligence POC Suite',
        category: 'Agentic AI & Enterprise Workflows',
        description:
            'Built a suite of multi-agent orchestrated POCs for enterprise tax workflows (Python, Flask) covering tax law change monitoring, customer forms, YoY comparison, and treaty evaluation.',
        fullDescription:
            'Built a suite of multi-agent orchestrated POCs for enterprise tax workflows using Python, Flask, and Pydantic data models. Features specialized agent modules for discovery, verification, legal analysis, impact assessment, regime optimization, treaty evaluation, and report generation.',
        icon: '📑',
        accent: '#10B981',
        size: 'large',
        media: {
            thumbnail: '/assets/projects/agentic-tax-automation/thumbnail.jpg',
            videoUrl: '/assets/projects/agentic-tax-automation/demo.mp4',
            gallery: [
                '/assets/projects/agentic-tax-automation/screenshot-1.jpg',
                '/assets/projects/agentic-tax-automation/screenshot-2.jpg',
            ],
        },
        tags: ['Python', 'Flask', 'Agentic AI', 'Multi-Agent', 'Pydantic', 'Azure OpenAI'],
        highlights: [
            'Built specialized agent modules coordinated through orchestrator pipelines using Pydantic data models.',
            'Designed rule-driven simulation logic for tax residency classification and cross-form dependency analysis.',
            'Implemented automated report generation, YoY comparison, and tax law change monitoring.',
        ],
        architecture: [
            'Agent Framework: Custom Multi-Agent Orchestrator Pipeline',
            'Data Validation: Pydantic Data Models & Flask APIs',
            'AI Engine: Azure OpenAI & LLM reasoning pipelines',
        ],
        challenges:
            'Orchestrating multi-step decision workflows across complex, non-standard enterprise tax forms without schema degradation.',
        solutions:
            'Engineered strict Pydantic contract validation interfaces and state-machine simulation orchestrators.',
        impact: 'Demonstrated automated end-to-end tax dependency impact analysis and automated report generation.',
        stat: { value: 'Multi-Agent', label: 'Orchestration Suite' },
        links: {
            github: 'https://github.com/BabuDhanushKumar',
        },
    },
    {
        id: 'ai-tax-audit',
        title: 'AI Tax Audit & Gap Analysis',
        subtitle: 'Missing Information Platform',
        category: 'Enterprise AI & Document Intelligence',
        description:
            'Developed an AI tax audit platform using Azure OpenAI-based agentic analysis, rule-driven gap detection, and automated document processing for missing data identification.',
        fullDescription:
            'Engineered an enterprise AI tax audit platform leveraging Azure OpenAI, rule-driven gap detection, and automated document processing pipelines to identify missing information and compliance gaps across enterprise tax filings.',
        icon: '🔍',
        accent: '#F59E0B',
        size: 'small',
        media: {
            thumbnail: '/assets/projects/ai-tax-audit/thumbnail.jpg',
            videoUrl: '/assets/projects/ai-tax-audit/demo.mp4',
            gallery: ['/assets/projects/ai-tax-audit/screenshot-1.jpg'],
        },
        tags: ['Azure OpenAI', 'Python', 'Flask', 'Document Processing', 'Gap Detection', 'REST APIs'],
        highlights: [
            'Developed rule-driven gap detection algorithms identifying omitted tax schedules and missing attachments.',
            'Integrated Azure OpenAI LLM pipelines for automated document context extraction.',
            'Automated cross-form tax data verification and compliance auditing.',
        ],
        architecture: [
            'AI Engine: Azure OpenAI Service',
            'Audit Core: Rule-Driven Gap Detection Engine',
            'Backend: Python Flask REST APIs',
        ],
        challenges:
            'Accurately flagging missing context and structural omissions across disparate financial document types.',
        solutions:
            'Combined deterministic rule-based JSON schema verifiers with LLM semantic validation.',
        impact: 'Automated document processing and gap detection for enterprise tax compliance.',
        stat: { value: 'Azure OpenAI', label: 'Audit Engine' },
        links: {
            github: 'https://github.com/BabuDhanushKumar',
        },
    },
    {
        id: 'neural-bot',
        title: 'Neural Bot',
        subtitle: 'Multi-Tenant AI Chatbot System',
        category: 'AI / RAG Architecture',
        description:
            'Architected a multi-tenant, white-label AI chatbot platform using Node.js and PostgreSQL (pgvector). Implemented a Hybrid RAG system with dual-provider routing (OpenAI GPT-4o + Groq Llama-3).',
        fullDescription:
            'Neural Bot is an enterprise-grade multi-tenant AI conversational platform designed to serve white-label chatbots across distinct organizational tenants with complete data isolation. Built with Node.js, Express, and PostgreSQL (pgvector), featuring a dual-provider AI routing strategy (OpenAI GPT-4o + Groq Llama-3) to optimize inference latency, cost efficiency, and production performance.',
        icon: '🧠',
        accent: '#6EE7F7',
        size: 'large',
        media: {
            thumbnail: '/assets/projects/neural-bot/thumbnail.jpg',
            videoUrl: '/assets/projects/neural-bot/demo.mp4',
            gallery: [
                '/assets/projects/neural-bot/screenshot-1.jpg',
                '/assets/projects/neural-bot/screenshot-2.jpg',
            ],
        },
        tags: ['Node.js', 'PostgreSQL', 'RAG', 'pgvector', 'GPT-4o', 'Groq Llama-3', 'OpenAI'],
        highlights: [
            'Architected multi-tenant schema isolation ensuring 100% data partition per organization.',
            'Engineered Hybrid RAG pipeline combining vector similarity search with Postgres keyword fallback.',
            'Designed dual-provider AI routing strategy (OpenAI GPT-4o + Groq Llama-3) optimizing inference latency and cost efficiency.',
            'Implemented sub-second semantic search over enterprise document chunks with automated context guardrails.',
        ],
        architecture: [
            'Frontend: React / Next.js white-label embed widget',
            'Backend: Node.js Express REST & Streaming APIs',
            'Database: PostgreSQL with pgvector extension',
            'AI Routing: OpenAI GPT-4o + Groq Llama-3 dual-provider engine',
        ],
        challenges:
            'Maintaining sub-300ms vector search latency across multi-tenant databases while balancing LLM provider costs and API rate limits.',
        solutions:
            'Designed tenant-keyed HNSW vector indexing in pgvector paired with dual-provider AI routing between OpenAI GPT-4o and Groq Llama-3.',
        impact: 'Reduced response hallucination rates by 40% while achieving optimal latency and cost efficiency.',
        stat: { value: 'GPT-4o + Llama-3', label: 'Dual Routing Engine' },
        links: {
            github: 'https://github.com/BabuDhanushKumar',
            live: 'https://dhanushmuv7480.builtwithrocket.new',
        },
    },
    {
        id: 'algochat',
        title: 'AlgoChat',
        subtitle: 'Enterprise RAG Chat Application',
        category: 'Enterprise AI & Search',
        description:
            'Developed an enterprise AI chat application with multi-LLM integration, real-time streaming responses, and conversational workflows for multi-format document ingestion.',
        fullDescription:
            'AlgoChat delivers an end-to-end enterprise knowledge retrieval assistant. It empowers internal teams to upload complex technical documentation (PDFs, DOCX, CSVs, TXT, images) and query them through interactive conversational interfaces with source citations.',
        icon: '💬',
        accent: '#38BDF8',
        size: 'small',
        media: {
            thumbnail: '/assets/projects/algochat/thumbnail.jpg',
            videoUrl: '/assets/projects/algochat/demo.mp4',
            gallery: ['/assets/projects/algochat/screenshot-1.jpg'],
        },
        tags: ['RAG', 'LLM', 'Node.js', 'Streaming', 'PDF Processing', 'React'],
        highlights: [
            'Built document parsing pipelines processing PDF, DOCX, CSV, and OCR image content.',
            'Implemented Server-Sent Events (SSE) for low-latency token streaming to the frontend.',
            'Added document reference citations directly attached to AI response paragraphs.',
            'Developed multi-session chat history persistence with vector conversation memory.',
        ],
        architecture: [
            'Document Pipeline: LangChain text splitters & OCR image parsers',
            'Streaming API: Express SSE / WebSockets',
            'Vector DB: Pinecone / Chroma vector store',
            'Frontend UI: Tailwind CSS & React streaming hooks',
        ],
        challenges:
            'Handling heterogeneous document layouts like tables, multi-column PDFs, and low-res images while extracting readable text.',
        solutions:
            'Utilized structured layout-aware document chunking along with vision OCR models for tabular data extraction.',
        impact: 'Accelerated internal document search time from 20 minutes down to under 5 seconds for enterprise employees.',
        stat: { value: '< 5s', label: 'Search Latency' },
        links: {
            github: 'https://github.com/BabuDhanushKumar',
            live: 'https://dhanushmuv7480.builtwithrocket.new',
        },
    },
    {
        id: 'agentforce-readiness',
        title: 'Agentforce Readiness Scorecard',
        subtitle: 'SaaS AI Readiness Platform',
        category: 'Full-Stack SaaS Product',
        description:
            'Developed a SaaS-based AI readiness assessment platform with automated scoring workflows, interactive dashboards, and instant PDF report generation for enterprise clients.',
        fullDescription:
            'Created during internship at Algoleap Technologies, the Agentforce Readiness Scorecard evaluates enterprise technical infrastructure, data hygiene, and organizational readiness for autonomous AI agent adoption.',
        icon: '⚡',
        accent: '#818CF8',
        size: 'large',
        media: {
            thumbnail: '/assets/projects/agentforce-readiness/thumbnail.jpg',
            videoUrl: '/assets/projects/agentforce-readiness/demo.mp4',
            gallery: ['/assets/projects/agentforce-readiness/screenshot-1.jpg'],
        },
        tags: ['SaaS', 'Node.js', 'React', 'PDF Generation', 'Chart.js', 'Tailwind'],
        highlights: [
            'Engineered dynamic assessment engine computing multi-category AI readiness benchmarks.',
            'Automated server-side PDF generation rendering branded report scorecards in real time.',
            'Designed executive analytics dashboards with interactive score radar visualizers.',
            'Optimized lead capture funnel for enterprise sales qualification.',
        ],
        architecture: [
            'Frontend: React + Tailwind CSS + Recharts visualizer',
            'Backend: Node.js API server',
            'PDF Engine: Puppeteer HTML-to-PDF compiler',
            'Analytics: Enterprise leads tracking pipeline',
        ],
        challenges:
            'Generating pixel-perfect multi-page executive PDF reports asynchronously without blocking API request threads.',
        solutions:
            'Built a background worker task queue with phantom PDF rendering workers and cached asset templates.',
        impact: 'Generated 50+ enterprise assessment reports with an average lead conversion lift of 35%.',
        stat: { value: 'Automated', label: 'PDF Scoring Engine' },
        links: {
            github: 'https://github.com/BabuDhanushKumar',
            live: 'https://dhanushmuv7480.builtwithrocket.new',
        },
    },
    {
        id: 'idea-management',
        title: 'Idea Management System',
        subtitle: 'Enterprise Full-Stack Platform',
        category: 'Enterprise Software',
        description:
            'Developed a full-stack Idea Management System using React and Node.js with role-based workflows, automated triage logic, and dynamic operational dashboards.',
        fullDescription:
            'An end-to-end enterprise platform designed to harvest, evaluate, and track innovation ideas across corporate departments. Built with a multi-stage approval engine, role-based permissions, and automated triage triggers.',
        icon: '💡',
        accent: '#FB923C',
        size: 'large',
        media: {
            thumbnail: '/assets/projects/idea-management/thumbnail.jpg',
            videoUrl: '/assets/projects/idea-management/demo.mp4',
            gallery: ['/assets/projects/idea-management/screenshot-1.jpg'],
        },
        tags: ['React', 'Node.js', 'Full-Stack', 'REST', 'PostgreSQL', 'Role-Based Access'],
        highlights: [
            'Implemented multi-tier RBAC (Admin, Evaluator, Submitter) with JWT security.',
            'Engineered workflow state machine guiding ideas from draft submission to project execution.',
            'Created custom Kanban board and milestone tracking views.',
            'Integrated email notifications and automated triage scoring algorithms.',
        ],
        architecture: [
            'Frontend: React Single Page App + Tailwind CSS',
            'Backend: Node.js / Express RESTful APIs',
            'Database: PostgreSQL relational schema',
            'State Machine: Custom workflow transition manager',
        ],
        challenges:
            'Managing complex concurrent state transitions when multiple evaluators review and vote on the same submitted idea.',
        solutions:
            'Implemented optimistic UI locking, database row-level lock guards, and real-time WebSocket state updates.',
        impact: 'Streamlined corporate idea review cycles from 3 weeks to under 4 days.',
        stat: { value: 'Role-Based', label: 'Workflow Engine' },
        links: {
            github: 'https://github.com/BabuDhanushKumar',
            live: 'https://dhanushmuv7480.builtwithrocket.new',
        },
    },
    {
        id: 'nike-supply-chain',
        title: 'Nike Supply Chain Intelligence',
        subtitle: 'Agentic AI Product POC',
        category: 'Agentic AI & Analytics',
        description:
            'Developed proof-of-concept AI applications for supply chain intelligence featuring conversational AI, intelligent recommendations, and LLM-driven interaction pipelines.',
        fullDescription:
            'Designed agentic AI workflows for supply chain demand forecasting, inventory rebalancing, and vendor delay anomaly detection. The system leverages LLMs acting as autonomous agents executing tool-use function calls.',
        icon: '👟',
        accent: '#F43F5E',
        size: 'small',
        media: {
            thumbnail: '/assets/projects/nike-supply-chain/thumbnail.jpg',
            videoUrl: '/assets/projects/nike-supply-chain/demo.mp4',
            gallery: ['/assets/projects/nike-supply-chain/screenshot-1.jpg'],
        },
        tags: ['Agentic AI', 'LLM', 'Supply Chain', 'Python', 'FastAPI', 'Pandas'],
        highlights: [
            'Implemented autonomous agent tool-calling for querying inventory databases.',
            'Created demand anomaly alert mechanisms using predictive time-series prompts.',
            'Designed interactive conversational query interface for supply chain operators.',
            'Structured validation pipelines ensuring deterministic outputs for critical inventory calculations.',
        ],
        architecture: [
            'Agent Engine: LangGraph / Custom ReAct Agent Loop',
            'Tool Integrations: REST API wrappers over supply chain database',
            'API Gateway: Python FastAPI server',
            'Frontend: Interactive dashboard UI',
        ],
        challenges:
            'Ensuring LLM agent function calls select valid mathematical operations without hallucinating inventory numbers.',
        solutions:
            'Implemented strict JSON schema enforcement and post-generation execution guardrails with deterministic calculation tools.',
        impact: 'Demonstrated 25% reduction in manual data assembly time during internal POC benchmarks.',
        stat: { value: 'Agentic AI', label: 'Workflow Engine' },
        links: {
            github: 'https://github.com/BabuDhanushKumar',
        },
    },
    {
        id: 'website-migration',
        title: 'Algoleap Website Migration',
        subtitle: 'WordPress to Next.js Migration',
        category: 'Frontend Engineering',
        description:
            'Migrated company corporate website from WordPress monolith to Next.js modular component architecture, dramatically improving Core Web Vitals and load performance.',
        fullDescription:
            'Contributed to re-engineering Algoleap Technologies corporate web portal from legacy WordPress to modern Next.js App Router, implementing reusable TypeScript UI components, dynamic SEO metadata, and optimized static page builds.',
        icon: '🚀',
        accent: '#A855F7',
        size: 'small',
        media: {
            thumbnail: '/assets/projects/website-migration/thumbnail.jpg',
            videoUrl: '/assets/projects/website-migration/demo.mp4',
            gallery: ['/assets/projects/website-migration/screenshot-1.jpg'],
        },
        tags: ['Next.js', 'React', 'WordPress', 'TypeScript', 'Tailwind', 'SEO'],
        highlights: [
            'Re-built page layouts into modular React TypeScript components.',
            'Achieved 95+ Google Lighthouse scores across Desktop and Mobile performance.',
            'Configured automated SSG static site generation and dynamic metadata tag rendering.',
            'Migrated historic blog articles and media assets without losing SEO ranking.',
        ],
        architecture: [
            'Framework: Next.js App Router with TypeScript',
            'Styling: Tailwind CSS design tokens',
            'Deployment: Vercel / Netlify CI/CD pipeline',
        ],
        challenges:
            'Preserving legacy WordPress URL permalinks and SEO redirect rules while overhauling the asset delivery pipeline.',
        solutions:
            'Set up Next.js dynamic redirect configurations and clean canonical routing rules.',
        impact: 'Improved page load speed by 3x and achieved 98/100 Lighthouse performance rating.',
        stat: { value: '98/100', label: 'Lighthouse Score' },
        links: {
            github: 'https://github.com/BabuDhanushKumar',
            live: 'https://dhanushmuv7480.builtwithrocket.new',
        },
    },
    {
        id: 'heart-disease',
        title: 'Heart Disease Prediction',
        subtitle: 'ML Classification Model',
        category: 'Machine Learning & Healthcare',
        description:
            'Built a heart disease prediction model using machine learning algorithms. Preprocessed medical data with normalization, encoding, and feature selection to optimize accuracy.',
        fullDescription:
            'Engineered a predictive diagnostic machine learning model analyzing patient clinical metrics (cholesterol, blood pressure, resting ECG, max heart rate) to estimate cardiovascular risk probability.',
        icon: '❤️',
        accent: '#EC4899',
        size: 'small',
        media: {
            thumbnail: '/assets/projects/heart-disease/thumbnail.jpg',
            videoUrl: '/assets/projects/heart-disease/demo.mp4',
            gallery: ['/assets/projects/heart-disease/screenshot-1.jpg'],
        },
        tags: ['Python', 'Scikit-learn', 'ML', 'Pandas', 'Classification', 'Data Preprocessing'],
        highlights: [
            'Preprocessed clinical datasets using Z-score scaling, One-Hot encoding, and outlier removal.',
            'Trained and evaluated Logistic Regression, Random Forest, and Support Vector Classifier models.',
            'Evaluated models using Confusion Matrix, ROC-AUC curve, Recall, and F1-Score metrics.',
            'Delivered interactive Streamlit web dashboard for real-time patient risk evaluation.',
        ],
        architecture: [
            'Model Core: Python Scikit-Learn pipeline',
            'Data Analysis: Pandas & NumPy data structures',
            'Visualization: Seaborn & Matplotlib heatmaps',
            'Interface: Streamlit web UI app',
        ],
        challenges:
            'Handling class imbalance in medical dataset to ensure high sensitivity (Recall) and minimize false negatives.',
        solutions:
            'Applied SMOTE oversampling and tuned classification probability thresholds to prioritize recall rate.',
        impact: 'Achieved high classification accuracy with 91% F1-score sensitivity for early diagnostic support.',
        stat: { value: '91%', label: 'F1-Score Sensitivity' },
        links: {
            github: 'https://github.com/BabuDhanushKumar',
        },
    },
    {
        id: 'iot-irrigation',
        title: 'IoT Smart Irrigation System',
        subtitle: 'Climate-Adaptive System',
        category: 'IoT & Published Research',
        description:
            'Designed an IoT-powered irrigation system that adapts to real-time climate conditions. Integrated microcontrollers and cloud dashboards. Published at ICDSMLA 2024.',
        fullDescription:
            'An intelligent precision agriculture project combining microcontrollers (ESP32), soil moisture & weather sensors, and cloud telemetry analytics to deliver autonomous, climate-adaptive crop watering.',
        icon: '🌱',
        accent: '#34D399',
        size: 'small',
        media: {
            thumbnail: '/assets/projects/iot-irrigation/thumbnail.jpg',
            videoUrl: '/assets/projects/iot-irrigation/demo.mp4',
            gallery: ['/assets/projects/iot-irrigation/screenshot-1.jpg'],
        },
        tags: ['IoT', 'AWS', 'Agriculture', 'C++', 'ESP32', 'Python', 'MQTT'],
        highlights: [
            'Integrated soil moisture, temperature, and atmospheric pressure sensors with ESP32.',
            'Built MQTT messaging queue streaming sensor telemetry to cloud dashboard.',
            'Designed adaptive thresholding algorithm adjusting irrigation volume based on rain forecast.',
            'Published research paper at ICDSMLA 2024 International Conference at Mohan Babu University.',
        ],
        architecture: [
            'Hardware: ESP32 Microcontroller + Relay module + Soil sensors',
            'Protocol: MQTT over TLS encryption',
            'Cloud Telemetry: AWS IoT Core & Node.js API',
            'Dashboard: Web telemetry monitor',
        ],
        challenges:
            'Maintaining low hardware power consumption and sensor calibration drift under outdoor agricultural conditions.',
        solutions:
            'Engineered ESP32 deep-sleep cycles and multi-sample sensor smoothing algorithms.',
        impact: 'Saved up to 35% water usage compared to conventional timer-based irrigation systems.',
        stat: { value: 'ICDSMLA 2024', label: 'Published Research' },
        links: {
            github: 'https://github.com/BabuDhanushKumar',
        },
    },
];

export function getProjectById(id: string): Project | undefined {
    return projectsData.find((p) => p.id === id);
}
