'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { BriefcaseIcon, AcademicCapIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const experiences = [
    {
        role: 'Junior Engineer',
        company: 'Algoleap Technologies',
        period: 'Sep 2026 – Present',
        description:
            'Building enterprise and presales AI systems across agentic tax automation, AI document gap analysis, and multi-tenant RAG conversational platforms using Azure OpenAI, Python, Node.js, and PostgreSQL.',
        logo: 'https://dhanushmuvva.in/LOGOS/algoleap.jpg',
        logoAlt: 'Algoleap Technologies logo',
        tags: ['Python (Flask)', 'Azure OpenAI', 'Agentic AI', 'Node.js', 'pgvector'],
        accent: '#6EE7F7',
        current: true,
    },
    {
        role: 'Intern',
        company: 'Algoleap Technologies',
        period: 'Jan 2026 – Aug 2026',
        description:
            'Engineered full-stack AI integrations including multi-tenant AI chatbots, enterprise Idea Management workflows, and RAG-based document ingestion pipelines.',
        logo: 'https://dhanushmuvva.in/LOGOS/algoleap.jpg',
        logoAlt: 'Algoleap Technologies logo',
        tags: ['React', 'Node.js', 'PostgreSQL', 'LLM', 'RAG'],
        accent: '#38BDF8',
        current: false,
    },
    {
        role: 'AI - Data Quality Analyst',
        company: 'Rooman Technologies',
        period: 'Feb 2025 – May 2025',
        description:
            'Executed data cleaning, modeling, visualization, and Agile sprint collaboration using Python analytics pipelines.',
        logo: 'https://dhanushmuvva.in/LOGOS/rooman.jpg',
        logoAlt: 'Rooman Technologies logo',
        tags: ['Python', 'Data Cleaning', 'Data Modeling', 'Visualization', 'Agile'],
        accent: '#818CF8',
        current: false,
    },
];

const education = [
    {
        degree: 'B.E in Artificial Intelligence and Machine Learning',
        institution: 'New Horizon College of Engineering (NHCE), Bengaluru',
        period: 'Nov 2021 – May 2025',
        result: 'CGPA: 7.14',
        logo: 'https://dhanushmuvva.in/LOGOS/nhce.jpg',
        logoAlt: 'New Horizon College of Engineering logo',
        accent: '#34D399',
        primary: true,
    },
    {
        degree: 'Board of Intermediate Education (PUC — PCMB)',
        institution: 'Bhashyam Junior College, Tirupati',
        period: 'Jul 2019 – May 2021',
        result: '85.8%',
        logo: 'https://dhanushmuvva.in/LOGOS/bhashyam.jpg',
        logoAlt: 'Bhashyam Junior College logo',
        accent: '#FB923C',
        primary: false,
    },
    {
        degree: '10th Grade — CBSE (SSLC)',
        institution: 'Accord School, Tirupati',
        period: 'Jun 2018 – Mar 2019',
        result: '64%',
        logo: 'https://dhanushmuvva.in/LOGOS/accord.png',
        logoAlt: 'Accord School logo',
        accent: '#F472B6',
        primary: false,
    },
];

export default function ExperienceSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

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
        <section id="experience" className="py-14 sm:py-20 lg:py-24 scroll-mt-20" ref={sectionRef}>
            <div className="site-container">
                {/* Section Header */}
                <div className="reveal-hidden mb-10 lg:mb-12">
                    <div className="inline-flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="section-label text-primary font-bold tracking-[0.2em] text-[11px] uppercase">
                            Experience &amp; Education
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.12]">
                        Experience &amp; <span className="text-gradient-cyan">Education</span>
                    </h2>
                </div>

                {/* 6:6 Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full min-w-0">
                    {/* Left (6 cols): Professional Experience Timeline */}
                    <div className="lg:col-span-6 w-full min-w-0">
                        <div className="flex items-center gap-2.5 mb-5">
                            <BriefcaseIcon className="w-4 h-4 text-primary" />
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                Professional Experience
                            </p>
                        </div>

                        <div className="relative pl-6 space-y-5 before:content-[''] before:absolute before:left-[7px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-primary/60 before:via-primary/25 before:to-transparent">
                            {experiences.map((exp, i) => (
                                <div
                                    key={`${exp.company}-${exp.role}`}
                                    className="reveal-hidden relative glass-card rounded-[20px] p-5 border border-border/60 card-hover"
                                    style={{ transitionDelay: `${i * 80}ms` }}
                                >
                                    {/* Timeline Node */}
                                    <span
                                        className={`absolute -left-[23px] top-6 w-3 h-3 rounded-full border-2 border-background ${
                                            exp.current ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]' : 'bg-primary'
                                        }`}
                                    />

                                    <div className="flex items-start justify-between gap-2.5 mb-3">
                                        <div className="flex items-start gap-3 min-w-0">
                                            <div className="w-10 h-10 rounded-[12px] overflow-hidden bg-muted border border-border/50 flex-shrink-0">
                                                <AppImage
                                                    src={exp.logo}
                                                    alt={exp.logoAlt}
                                                    width={40}
                                                    height={40}
                                                    className="w-full h-full object-contain p-1"
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-xs font-semibold truncate text-primary">
                                                    {exp.company}
                                                </p>
                                                <p className="text-[10px] font-medium text-muted-foreground mt-0.5">
                                                    {exp.period}
                                                </p>
                                            </div>
                                        </div>

                                        {exp.current && (
                                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex-shrink-0">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                                                    Current
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-muted/60 text-muted-foreground border border-border/60"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right (6 cols): Education & Publication */}
                    <div className="lg:col-span-6 w-full min-w-0">
                        <div className="flex items-center gap-2.5 mb-5">
                            <AcademicCapIcon className="w-4 h-4 text-primary" />
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                Education &amp; Research
                            </p>
                        </div>

                        <div className="space-y-4">
                            {education.map((edu, i) => (
                                <div
                                    key={edu.institution}
                                    className={`reveal-hidden glass-card rounded-[20px] border card-hover ${
                                        edu.primary
                                            ? 'p-5 sm:p-6 border-primary/30'
                                            : 'p-4 sm:p-5 border-border/60'
                                    }`}
                                    style={{ transitionDelay: `${i * 80 + 40}ms` }}
                                >
                                    <div className="flex items-start gap-3.5">
                                        <div
                                            className={`rounded-[12px] overflow-hidden bg-muted border border-border/50 flex-shrink-0 ${
                                                edu.primary ? 'w-12 h-12' : 'w-10 h-10'
                                            }`}
                                        >
                                            <AppImage
                                                src={edu.logo}
                                                alt={edu.logoAlt}
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-contain p-1"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-1">
                                                <h3
                                                    className={`font-bold text-foreground leading-snug ${
                                                        edu.primary ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                                                    }`}
                                                >
                                                    {edu.degree}
                                                </h3>
                                                <span
                                                    className="flex-shrink-0 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold"
                                                    style={{ background: `${edu.accent}18`, color: edu.accent }}
                                                >
                                                    {edu.result}
                                                </span>
                                            </div>
                                            <p
                                                className="text-xs font-semibold truncate"
                                                style={{ color: edu.accent }}
                                            >
                                                {edu.institution}
                                            </p>
                                            <p className="text-[10px] font-medium text-muted-foreground mt-0.5">
                                                {edu.period}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Publication Callout */}
                            <div
                                className="reveal-hidden glass-card rounded-[20px] p-5 border border-primary/25"
                                style={{ transitionDelay: '280ms' }}
                            >
                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-[12px] bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                        <DocumentTextIcon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                                            Published Research · ICDSMLA 2024
                                        </span>
                                        <h4 className="text-xs sm:text-sm font-bold text-foreground leading-snug mb-1">
                                            IoT-Based Smart Irrigation Systems for Climate-Resilient Farming
                                        </h4>
                                        <p className="text-[11px] text-muted-foreground leading-relaxed">
                                            6th International Conference on Data Science, Machine Learning &amp; Application, Mohan Babu University
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
