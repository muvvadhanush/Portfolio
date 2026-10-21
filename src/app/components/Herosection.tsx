'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    ArrowUpRightIcon,
    SparklesIcon,
    CommandLineIcon,
    CpuChipIcon,
    CheckCircleIcon,
    DocumentTextIcon,
} from '@heroicons/react/24/outline';

const promptOptions = [
    {
        label: '⚡ Core AI Specialization',
        query: 'What is Dhanush’s primary AI engineering focus?',
        response:
            'Dhanush specializes in Multi-Tenant Hybrid RAG systems, combining dense vector search (pgvector/Pinecone) with SQL keyword retrieval, streaming LLM workflows, and autonomous agentic pipelines.',
    },
    {
        label: '🚀 Featured Project Highlight',
        query: 'Tell me about the Neural Bot architecture.',
        response:
            'Neural Bot is a multi-tenant white-label AI platform built on Node.js & PostgreSQL pgvector. It features tenant-keyed vector isolation, sub-300ms similarity search, and automated context injection guardrails.',
    },
    {
        label: '🎓 Academic & Published Research',
        query: 'What research has Dhanush published?',
        response:
            'Published an IoT Climate-Adaptive Precision Agriculture paper at ICDSMLA 2024.',
    },
];

export default function HeroSection() {
    const meshRef = useRef<HTMLDivElement>(null);
    const [activePrompt, setActivePrompt] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [activeTab, setActiveTab] = useState<'code' | 'rag'>('code');

    // Typewriter effect for live AI simulator
    useEffect(() => {
        let isCancelled = false;
        setIsTyping(true);
        setTypedText('');
        const fullText = promptOptions[activePrompt].response;
        let index = 0;

        const interval = setInterval(() => {
            if (isCancelled) return;
            if (index < fullText.length) {
                setTypedText(fullText.slice(0, index + 1));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(interval);
            }
        }, 18);

        return () => {
            isCancelled = true;
            clearInterval(interval);
        };
    }, [activePrompt]);

    // Parallax mouse follow
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!meshRef.current) return;
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            meshRef.current.style.transform = `translate(${x}px, ${y}px)`;
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden mesh-bg flex flex-col justify-between"
        >
            {/* Animated Ambient Mesh Blobs */}
            <div ref={meshRef} className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out">
                <div
                    className="absolute top-[5%] left-[5%] w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] rounded-full blur-[100px] sm:blur-[140px] opacity-25"
                    style={{ background: 'radial-gradient(circle, rgba(110,231,247,0.2) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute bottom-[10%] right-[5%] w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] rounded-full blur-[90px] sm:blur-[120px] opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.18) 0%, transparent 70%)' }}
                />
            </div>

            {/* Noise & Grid Overlay */}
            <div className="absolute inset-0 noise-overlay pointer-events-none" />
            <div
                className="absolute inset-0 pointer-events-none opacity-5"
                style={{
                    backgroundImage: `linear-gradient(rgba(110,231,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(110,231,247,0.3) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 my-auto min-w-0">
                <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center w-full min-w-0">
                    {/* Left Column: Bio & Interactive AI Simulator */}
                    <div className="lg:col-span-7 space-y-5 sm:space-y-8 min-w-0 w-full">
                        {/* Live Status Pill */}
                        <div className="inline-flex items-center gap-2 glass-card rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-primary/25 max-w-full min-w-0">
                            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 flex-shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="text-primary font-bold text-[10px] sm:text-xs tracking-wider uppercase truncate min-w-0">
                                Junior Engineer @ Algoleap Technologies
                            </span>
                        </div>

                        {/* Title */}
                        <div>
                            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-2 sm:mb-4">
                                <span className="block sm:inline">Muvva Babu </span>
                                <span className="text-gradient-cyan block sm:inline">Dhanush Kumar</span>
                            </h1>
                            <p className="text-muted-foreground text-xs sm:text-base lg:text-xl font-normal leading-relaxed max-w-2xl">
                                Architecting enterprise RAG pipelines, multi-tenant AI backends, and intelligent full-stack applications.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full">
                            <Link
                                href="/#projects"
                                className="group flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 sm:px-7 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm hover:bg-accent active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-primary/30 w-full sm:w-auto"
                            >
                                Explore Projects
                                <ArrowUpRightIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                            <a
                                href="/Muvva Babu Dhanush Kumar.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-2 glass-card text-foreground px-5 py-3 sm:px-6 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm hover:border-primary/40 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
                            >
                                <DocumentTextIcon className="w-4 h-4 text-primary" />
                                Resume PDF
                            </a>
                        </div>

                        {/* Live Interactive Prompt Playground Widget */}
                        <div className="glass-card rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 border border-primary/20 space-y-3 sm:space-y-4 cyan-glow min-w-0 w-full overflow-hidden">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider">
                                    <SparklesIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary animate-spin-slow flex-shrink-0" />
                                    <span>AI Query Sandbox</span>
                                </div>
                                <span className="text-[9px] sm:text-[10px] text-muted-foreground font-mono">Live Demo</span>
                            </div>

                            {/* Prompt Choice Buttons */}
                            <div className="flex gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-1 max-w-full min-w-0 sm:flex-wrap">
                                {promptOptions.map((opt, idx) => (
                                    <button
                                        key={opt.label}
                                        onClick={() => setActivePrompt(idx)}
                                        className={`text-[10px] sm:text-xs px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                                            activePrompt === idx
                                                ? 'bg-primary text-primary-foreground shadow-md'
                                                : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                                        }`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>

                            {/* Interactive Output Box */}
                            <div className="bg-muted/60 border border-border/60 rounded-xl sm:rounded-2xl p-3 sm:p-4 font-mono text-[10px] sm:text-xs space-y-1.5 min-w-0 overflow-hidden">
                                <p className="text-primary font-bold break-words min-w-0">
                                    &gt; {promptOptions[activePrompt].query}
                                </p>
                                <p className="text-foreground leading-relaxed break-words min-w-0">
                                    {typedText}
                                    {isTyping && <span className="inline-block w-1.5 h-3.5 bg-primary ml-1 animate-pulse" />}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Photo & Live Code Terminal */}
                    <div className="lg:col-span-5 space-y-4 sm:space-y-6 min-w-0 w-full">
                        {/* Avatar Image Frame */}
                        <div className="relative mx-auto max-w-[200px] sm:max-w-xs md:max-w-sm group">
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 opacity-25 blur-lg group-hover:opacity-50 transition duration-500"></div>
                            <div className="relative glass-card rounded-3xl overflow-hidden border border-primary/30 aspect-square">
                                <img
                                    src="/assets/image.png"
                                    alt="Muvva Babu Dhanush Kumar"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 glass-card rounded-xl sm:rounded-2xl p-2.5 sm:p-3 border border-white/10 backdrop-blur-md">
                                    <p className="text-xs sm:text-sm font-bold text-foreground truncate">Muvva Babu Dhanush Kumar</p>
                                    <p className="text-[9px] sm:text-[11px] text-primary font-semibold">AI & ML Engineer</p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Code Terminal Console */}
                        <div className="glass-card rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border border-border/60 font-mono text-[10px] sm:text-xs space-y-2.5 sm:space-y-3 min-w-0 w-full overflow-hidden">
                            <div className="flex items-center justify-between border-b border-border/40 pb-2">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80" />
                                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500/80" />
                                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500/80" />
                                </div>
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={() => setActiveTab('code')}
                                        className={`px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold transition-colors ${
                                            activeTab === 'code' ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        developer.ts
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('rag')}
                                        className={`px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold transition-colors ${
                                            activeTab === 'rag' ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                    >
                                        architecture.rag
                                    </button>
                                </div>
                            </div>

                            {activeTab === 'code' ? (
                                <div className="text-muted-foreground space-y-1 leading-relaxed text-[10px] sm:text-[11px] overflow-x-auto no-scrollbar">
                                    <p><span className="text-purple-400">const</span> <span className="text-cyan-300">engineer</span> = &#123;</p>
                                    <p className="pl-3 sm:pl-4"><span className="text-sky-300">name</span>: <span className="text-emerald-300">&apos;Dhanush Kumar&apos;</span>,</p>
                                    <p className="pl-3 sm:pl-4"><span className="text-sky-300">role</span>: <span className="text-emerald-300">&apos;AI / ML Engineer&apos;</span>,</p>
                                    <p className="pl-3 sm:pl-4"><span className="text-sky-300">stack</span>: [<span className="text-amber-300">&apos;Python&apos;</span>, <span className="text-amber-300">&apos;Next.js&apos;</span>, <span className="text-amber-300">&apos;pgvector&apos;</span>],</p>
                                    <p className="pl-3 sm:pl-4"><span className="text-sky-300">focus</span>: <span className="text-emerald-300">&apos;Hybrid RAG + Agentic AI&apos;</span>,</p>
                                    <p className="pl-3 sm:pl-4"><span className="text-sky-300">status</span>: <span className="text-emerald-400">&apos;Junior Engineer @ Algoleap&apos;</span></p>
                                    <p>&#125;;</p>
                                </div>
                            ) : (
                                <div className="text-muted-foreground space-y-1.5 leading-relaxed text-[10px] sm:text-[11px] overflow-x-auto no-scrollbar">
                                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                                        <CheckCircleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" /> Hybrid Retrieval Pipeline
                                    </div>
                                    <p>• Dense Vector Search (OpenAI / HuggingFace)</p>
                                    <p>• Sparse Keyword Fallback (Postgres TSQUERY)</p>
                                    <p>• Tenant Isolation (pgvector HNSW indexes)</p>
                                    <p>• Low-latency Streaming Server-Sent Events (SSE)</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Bento Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mt-8 sm:mt-16 pt-5 sm:pt-8 border-t border-border/40 w-full min-w-0">
                    {[
                        { value: '4+', label: 'Enterprise AI Projects', icon: CpuChipIcon },
                        { value: '91%', label: 'ML Sensitivity Score', icon: SparklesIcon },
                        { value: 'ICDSMLA', label: 'Published Research', icon: DocumentTextIcon },
                        { value: '1+ Yrs', label: 'Algoleap Internship & Work', icon: CommandLineIcon },
                    ].map((stat) => {
                        const IconComp = stat.icon;
                        return (
                            <div key={stat.label} className="glass-card rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-border/50 space-y-1">
                                <div className="flex items-center justify-between mb-1 sm:mb-2">
                                    <IconComp className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-primary" />
                                    <span className="text-[8px] sm:text-[10px] font-mono text-muted-foreground uppercase">Metric</span>
                                </div>
                                <p className="text-lg sm:text-2xl font-extrabold text-foreground">{stat.value}</p>
                                <p className="text-muted-foreground text-[10px] sm:text-xs font-semibold leading-tight line-clamp-2 min-h-[26px]">
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}