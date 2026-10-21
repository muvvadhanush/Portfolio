'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const experiences = [
    {
        type: 'experience',
        role: 'Junior Engineer',
        company: 'Algoleap Technologies',
        period: 'Jan 2026 – Present',
        description:
            'Contributed to enterprise and presales-focused AI proof-of-concepts at Algoleap, spanning agentic tax automation, AI-powered document intelligence, and conversational AI platforms. Built multi-agent orchestrated workflows for a tax intelligence POC suite and developed an AI tax audit platform using Azure OpenAI-based agentic analysis, rule-driven gap detection, and automated document processing.',
        logo: 'https://dhanushmuvva.in/LOGOS/algoleap.jpg',
        logoAlt: 'Algoleap Technologies logo',
        tags: ['Python (Flask)', 'Azure OpenAI', 'Agentic AI', 'Multi-Agent', 'Node.js', 'PostgreSQL', 'pgvector', 'REST APIs'],
        accent: '#6EE7F7',
        current: true,
    },
    {
        type: 'experience',
        role: 'Intern',
        company: 'Algoleap Technologies',
        period: 'Jan 2026 – AUG 2026',
        description:
            'Worked on real-world AI projects, gained hands-on experience in full-stack web development and AI integrations including multi-tenant AI chatbots, enterprise Idea Management System, and RAG-based document ingestion pipelines.',
        logo: 'https://dhanushmuvva.in/LOGOS/algoleap.jpg',
        logoAlt: 'Algoleap Technologies logo',
        tags: ['React', 'Node.js', 'PostgreSQL', 'LLM', 'RAG'],
        accent: '#38BDF8',
        current: false,
    },
    {
        type: 'experience',
        role: 'AI - Data Quality Analyst',
        company: 'Rooman Technologies',
        period: 'Feb 2025 – May 2025',
        description:
            'Gained hands-on experience in data cleaning, modeling, visualization, and collaboration using Python and Agile practices during an internship at Rooman Technologies.',
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
    },
    {
        degree: 'Board of Intermediate Education (PUC — PCMB)',
        institution: 'Bhashyam Junior College, Tirupati',
        period: 'Jul 2019 – May 2021',
        result: '85.8%',
        logo: 'https://dhanushmuvva.in/LOGOS/bhashyam.jpg',
        logoAlt: 'Bhashyam Junior College logo',
        accent: '#FB923C',
    },
    {
        degree: '10th Grade — CBSE (SSLC)',
        institution: 'Accord School, Tirupati',
        period: 'Jun 2018 – Mar 2019',
        result: '64%',
        logo: 'https://dhanushmuvva.in/LOGOS/accord.png',
        logoAlt: 'Accord School logo',
        accent: '#F472B6',
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
        <section id="experience" className="py-16 sm:py-24" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="reveal-hidden mb-8 sm:mb-16">
                    <span className="section-label text-primary block mb-2 sm:mb-4">Career Path</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                        Experience &{' '}
                        <span className="text-gradient-cyan">Education</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 w-full min-w-0">
                    {/* Experience Column */}
                    <div className="space-y-4 sm:space-y-5 w-full min-w-0">
                        <p className="section-label text-muted-foreground mb-3 sm:mb-6">Professional Experience</p>
                        {experiences.map((exp, i) => (
                            <div
                                key={`${exp.company}-${exp.role}`}
                                className="reveal-hidden glass-card rounded-2xl p-4 sm:p-6 card-hover relative overflow-hidden"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className="flex items-start justify-between gap-2.5 mb-3 sm:mb-4">
                                    <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-muted border border-border/50 flex-shrink-0">
                                            <AppImage
                                                src={exp.logo}
                                                alt={exp.logoAlt}
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-contain p-1"
                                            />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug">{exp.role}</h3>
                                            <p className="text-xs sm:text-sm font-semibold truncate" style={{ color: exp.accent }}>
                                                {exp.company}
                                            </p>
                                            <p className="section-label text-muted-foreground mt-0.5 text-[9px] sm:text-[10px]">{exp.period}</p>
                                        </div>
                                    </div>

                                    {exp.current && (
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/25 flex-shrink-0">
                                            <div className="relative">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-primary animate-ping-slow" />
                                            </div>
                                            <span className="section-label text-primary text-[9px]">Current</span>
                                        </div>
                                    )}
                                </div>

                                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{exp.description}</p>

                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {exp.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full"
                                            style={{
                                                background: `${exp.accent}12`,
                                                color: exp.accent,
                                                border: `1px solid ${exp.accent}25`,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Education Column */}
                    <div className="space-y-4 sm:space-y-5 w-full min-w-0">
                        <p className="section-label text-muted-foreground mb-3 sm:mb-6">Education</p>
                        {education.map((edu, i) => (
                            <div
                                key={edu.institution}
                                className="reveal-hidden glass-card rounded-2xl p-4 sm:p-6 card-hover"
                                style={{ transitionDelay: `${i * 100 + 50}ms` }}
                            >
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-muted border border-border/50 flex-shrink-0">
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
                                            <h3 className="text-xs sm:text-sm font-bold text-foreground leading-snug">{edu.degree}</h3>
                                            <span
                                                className="flex-shrink-0 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-bold"
                                                style={{ background: `${edu.accent}15`, color: edu.accent }}
                                            >
                                                {edu.result}
                                            </span>
                                        </div>
                                        <p className="text-[11px] sm:text-xs font-semibold truncate" style={{ color: edu.accent }}>
                                            {edu.institution}
                                        </p>
                                        <p className="section-label text-muted-foreground mt-0.5 text-[9px] sm:text-[10px]">{edu.period}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Publication Callout */}
                        <div
                            className="reveal-hidden glass-card rounded-2xl p-4 sm:p-6 border border-primary/20 cyan-glow"
                            style={{ transitionDelay: '350ms' }}
                        >
                            <div className="flex items-start gap-3">
                                <span className="text-xl sm:text-2xl flex-shrink-0">📄</span>
                                <div>
                                    <p className="section-label text-primary mb-1 sm:mb-2 text-[9px] sm:text-[10px]">Publication</p>
                                    <h4 className="text-xs sm:text-sm font-bold text-foreground leading-snug mb-1">
                                        IoT-Based Smart Irrigation Systems for Climate-Resilient Farming
                                    </h4>
                                    <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                                        6th International Conference on Data Science, Machine Learning & Application (ICDSMLA-2024), Mohan Babu University
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}