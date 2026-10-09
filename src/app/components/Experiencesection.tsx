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
        <section id="experience" className="py-24" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="reveal-hidden mb-16">
                    <span className="section-label text-primary block mb-4">Career Path</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                        Experience &{' '}
                        <span className="text-gradient-cyan">Education</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Experience Column */}
                    <div className="space-y-5">
                        <p className="section-label text-muted-foreground mb-6">Professional Experience</p>
                        {experiences.map((exp, i) => (
                            <div
                                key={`${exp.company}-${exp.role}`}
                                className="reveal-hidden glass-card rounded-2xl p-6 card-hover relative overflow-hidden"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                {exp.current && (
                                    <div className="absolute top-4 right-4 flex items-center gap-2">
                                        <div className="relative">
                                            <div className="w-2 h-2 rounded-full bg-primary" />
                                            <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary animate-ping-slow" />
                                        </div>
                                        <span className="section-label text-primary">Current</span>
                                    </div>
                                )}

                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-muted border border-border/50 flex-shrink-0">
                                        <AppImage
                                            src={exp.logo}
                                            alt={exp.logoAlt}
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-contain p-1"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-foreground">{exp.role}</h3>
                                        <p className="text-sm font-semibold" style={{ color: exp.accent }}>
                                            {exp.company}
                                        </p>
                                        <p className="section-label text-muted-foreground mt-0.5">{exp.period}</p>
                                    </div>
                                </div>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-semibold px-2.5 py-1 rounded-full"
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
                    <div className="space-y-5">
                        <p className="section-label text-muted-foreground mb-6">Education</p>
                        {education.map((edu, i) => (
                            <div
                                key={edu.institution}
                                className="reveal-hidden glass-card rounded-2xl p-6 card-hover"
                                style={{ transitionDelay: `${i * 100 + 50}ms` }}
                            >
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-muted border border-border/50 flex-shrink-0">
                                        <AppImage
                                            src={edu.logo}
                                            alt={edu.logoAlt}
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-contain p-1"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-bold text-foreground leading-snug">{edu.degree}</h3>
                                        <p className="text-xs font-semibold mt-0.5 truncate" style={{ color: edu.accent }}>
                                            {edu.institution}
                                        </p>
                                        <p className="section-label text-muted-foreground mt-0.5">{edu.period}</p>
                                    </div>
                                    <div
                                        className="flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-black"
                                        style={{ background: `${edu.accent}15`, color: edu.accent }}
                                    >
                                        {edu.result}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Publication Callout */}
                        <div
                            className="reveal-hidden glass-card rounded-2xl p-6 border border-primary/20 cyan-glow"
                            style={{ transitionDelay: '350ms' }}
                        >
                            <div className="flex items-start gap-3">
                                <span className="text-2xl flex-shrink-0">📄</span>
                                <div>
                                    <p className="section-label text-primary mb-2">Publication</p>
                                    <h4 className="text-sm font-bold text-foreground leading-snug mb-1">
                                        IoT-Based Smart Irrigation Systems for Climate-Resilient Farming
                                    </h4>
                                    <p className="text-xs text-muted-foreground">
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