export interface FAQItem {
    question: string;
    answer: string;
    category: 'General' | 'Skills & Tech' | 'Projects' | 'Hiring';
}

export const faqsData: FAQItem[] = [
    {
        question: 'Who is Muvva Babu Dhanush Kumar?',
        answer: 'Muvva Babu Dhanush Kumar is an AI & Machine Learning Engineer based in India specializing in Retrieval-Augmented Generation (RAG) architectures, multi-agent AI automation, dual-provider LLM routing, pgvector database systems, and full-stack Next.js applications.',
        category: 'General',
    },
    {
        question: 'What is Dhanush Kumar\'s primary expertise in AI & Machine Learning?',
        answer: 'Dhanush specializes in building multi-agent orchestrated pipelines (Pydantic, Azure OpenAI, Python Flask), enterprise RAG search engines (pgvector, Hybrid Keyword + Vector Search), multi-tenant AI chatbot backends, LLM latency & cost optimization (OpenAI GPT-4o + Groq Llama-3 routing), and predictive ML classification models (PyTorch, Scikit-learn).',
        category: 'Skills & Tech',
    },
    {
        question: 'What key AI projects has Muvva Babu Dhanush Kumar engineered?',
        answer: 'Notable projects engineered by Dhanush include the Agentic AI Tax Automation Suite (multi-agent tax law monitoring & YoY form comparison), Neural Bot (white-label multi-tenant AI chatbot platform with pgvector & dual-provider LLM routing), AlgoChat (enterprise document search assistant), and an IoT Smart Irrigation System published at ICDSMLA 2024.',
        category: 'Projects',
    },
    {
        question: 'What qualifications and certifications does Muvva Babu Dhanush Kumar hold?',
        answer: 'Dhanush holds a B.Tech degree in Computer Science & Engineering (AI & ML) from Mohan Babu University (CGPA 9.3/10). He is certified as an AWS Certified Cloud Practitioner, Microsoft Certified: Azure AI Fundamentals, and Google Cloud Computing Foundations credential holder.',
        category: 'General',
    },
    {
        question: 'How can I contact or hire Muvva Babu Dhanush Kumar for AI engineering roles?',
        answer: 'You can contact Muvva Babu Dhanush Kumar directly via email at muvvadhanush7480@gmail.com, connect on LinkedIn at linkedin.com/in/muvva-babu-dhanush-kumar-198b81261, or send a message using the interactive contact form at muvvadhanush.com/#contact.',
        category: 'Hiring',
    },
];
