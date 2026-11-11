'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { projectsData, Project } from '@/data/projects';
import {
    ArrowRightIcon,
    ArrowUpRightIcon,
    CpuChipIcon,
    DocumentMagnifyingGlassIcon,
    ChatBubbleLeftRightIcon,
    Square3Stack3DIcon,
} from '@heroicons/react/24/outline';

function getProjectByIdSafe(id: string): Project {
    return projectsData.find((p) => p.id === id) || projectsData[0];
}

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const taxAutomation = getProjectByIdSafe('agentic-tax-automation');
    const taxAudit = getProjectByIdSafe('ai-tax-audit');
    const algoChat = getProjectByIdSafe('algochat');
    const neuralBot = getProjectByIdSafe('neural-bot');

    useEffect(() => {
        const els = sectionRef.current?.querySelectorAll('.reveal-hidden');
        if (!els) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        (entry.target as HTMLElement).classList.add('revealed');
                    }
                });
            },
            { threshold: 0.1 }
        );
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="py-14 sm:py-20 lg:py-24 bg-secondary/20 scroll-mt-20" ref={sectionRef}>
            <div className="site-container">
                {/* Section Header */}
                <div className="reveal-hidden flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 lg:mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <span className="section-label text-primary font-bold tracking-[0.2em] text-[11px] uppercase">
                                Featured Projects
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.12] mb-2">
                            Featured <span className="text-gradient-cyan">Projects</span>
                        </h2>
                        <p className="text-muted-foreground max-w-xl text-xs sm:text-sm leading-relaxed">
                            AI systems I&apos;ve built across enterprise workflows, RAG, automation, and intelligent applications.
                        </p>
                    </div>

                    <Link
                        href="/projects"
                        className="inline-flex items-center justify-center gap-2 glass-card text-foreground hover:text-primary border border-border/70 hover:border-primary/40 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex-shrink-0 self-start md:self-auto"
                    >
                        <span>View All Projects ({projectsData.length})</span>
                        <ArrowUpRightIcon className="w-3.5 h-3.5" />
                    </Link>
                </div>

                {/* Asymmetric Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 w-full min-w-0">
                    {/* Top Left (7 cols): Large Feature Card — Agentic AI Tax Automation */}
                    <Link
                        href={`/projects/${taxAutomation.id}`}
                        className="reveal-hidden lg:col-span-7 glass-card rounded-[24px] p-5 sm:p-7 border border-border/60 card-hover group relative overflow-hidden flex flex-col justify-between min-w-0"
                    >
                        {/* Subtle Ambient Glow */}
                        <div
                            className="absolute -top-24 -left-24 w-64 h-64 rounded-full blur-[90px] opacity-15 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                            style={{ background: taxAutomation.accent }}
                        />

                        <div className="relative z-10 flex flex-col sm:flex-row gap-5 sm:gap-6 h-full">
                            {/* Visual Icon Tile */}
                            <div className="sm:w-36 md:w-44 flex-shrink-0 rounded-[20px] bg-muted/40 border border-border/60 flex items-center justify-center p-6 sm:p-4 relative overflow-hidden group-hover:border-primary/30 transition-colors">
                                <div
                                    className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity"
                                    style={{ background: `radial-gradient(circle, ${taxAutomation.accent}45 0%, transparent 70%)` }}
                                />
                                <Square3Stack3DIcon className="w-14 h-14 sm:w-16 sm:h-16 text-primary drop-shadow-lg group-hover:scale-110 transition-transform duration-500 relative z-10" />
                            </div>

                            {/* Card Content */}
                            <div className="flex-1 flex flex-col justify-between min-w-0">
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/25 truncate">
                                            Agentic AI System
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0">
                                            <span>Demo</span>
                                            <ArrowUpRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </span>
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors mb-1.5">
                                        {taxAutomation.title}
                                    </h3>
                                    <p className="text-xs font-semibold text-primary/90 mb-3">
                                        {taxAutomation.subtitle}
                                    </p>
                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                                        {taxAutomation.description}
                                    </p>
                                </div>

                                {/* Footer Tags + Hover Architecture Reveal */}
                                <div className="space-y-3 pt-3 border-t border-border/40">
                                    <div className="hidden sm:block text-[11px] font-mono text-muted-foreground/80 group-hover:text-primary/90 transition-colors truncate">
                                        Arch: Python · Flask → Pydantic Contracts → Multi-Agent Orchestrator
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {taxAutomation.tags.slice(0, 4).map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-muted/60 text-muted-foreground border border-border/60"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Top Right (5 cols): Stacked Pair of Compact Project Cards */}
                    <div className="lg:col-span-5 flex flex-col gap-5 min-w-0">
                        {[
                            { project: taxAudit, icon: DocumentMagnifyingGlassIcon, label: 'Enterprise AI' },
                            { project: algoChat, icon: ChatBubbleLeftRightIcon, label: 'RAG-based App' },
                        ].map(({ project, icon: CardIcon, label }, idx) => (
                            <Link
                                key={project.id}
                                href={`/projects/${project.id}`}
                                className="reveal-hidden glass-card rounded-[20px] p-5 border border-border/60 card-hover group flex-1 flex items-center justify-between gap-4 relative overflow-hidden min-w-0"
                                style={{ transitionDelay: `${(idx + 1) * 70}ms` }}
                            >
                                <div className="flex items-start gap-3.5 min-w-0 flex-1">
                                    <div className="w-11 h-11 rounded-[14px] bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <CardIcon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <span className="inline-block text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 mb-1.5">
                                            {label}
                                        </span>
                                        <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors truncate">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mt-1 mb-2.5">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground border border-border/50"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="w-9 h-9 rounded-full border border-border/70 flex items-center justify-center flex-shrink-0 text-muted-foreground group-hover:border-primary group-hover:text-primary group-hover:bg-primary/10 transition-all">
                                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Bottom Row (12 cols): Full-Width Banner Card — Neural Bot */}
                    <Link
                        href={`/projects/${neuralBot.id}`}
                        className="reveal-hidden lg:col-span-12 glass-card rounded-[24px] p-5 sm:p-6 border border-border/60 card-hover group flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 relative overflow-hidden min-w-0"
                        style={{ transitionDelay: '180ms' }}
                    >
                        <div className="flex items-start sm:items-center gap-4 sm:gap-5 min-w-0 flex-1">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[16px] bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                <CpuChipIcon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1 space-y-1.5">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="text-base sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {neuralBot.title} — {neuralBot.subtitle}
                                    </h3>
                                    <span className="hidden md:inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                        Node.js → PostgreSQL → pgvector → GPT-4o / Groq
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
                                    {neuralBot.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {neuralBot.tags.slice(0, 5).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-muted/60 text-muted-foreground border border-border/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 self-end sm:self-center flex-shrink-0">
                            <span className="text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors">
                                View Case Study
                            </span>
                            <div className="w-9 h-9 rounded-full border border-border/70 flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary group-hover:bg-primary/10 transition-all">
                                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
