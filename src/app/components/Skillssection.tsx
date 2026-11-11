'use client';

import React, { useEffect, useRef } from 'react';
import {
    CpuChipIcon,
    CodeBracketIcon,
    ServerStackIcon,
    CircleStackIcon,
    WindowIcon,
    CloudIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';

const technicalCategories = [
    {
        category: 'AI & Machine Learning',
        icon: CpuChipIcon,
        skills: ['Generative AI', 'Hybrid RAG', 'Multi-Agent', 'Prompt Engineering', 'Azure OpenAI', 'pgvector', 'PyTorch', 'Scikit-learn'],
    },
    {
        category: 'Languages & Core',
        icon: CodeBracketIcon,
        skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
    },
    {
        category: 'Backend & APIs',
        icon: ServerStackIcon,
        skills: ['Node.js', 'Express', 'Python (Flask)', 'FastAPI', 'REST APIs', 'JWT Security'],
    },
    {
        category: 'Databases & Vector',
        icon: CircleStackIcon,
        skills: ['PostgreSQL', 'pgvector', 'MySQL', 'Neon Postgres', 'Vector DBs'],
    },
    {
        category: 'Frontend Development',
        icon: WindowIcon,
        skills: ['React.js', 'Next.js 15', 'Tailwind CSS', 'Redux', 'Responsive UI'],
    },
    {
        category: 'DevOps & Analytics',
        icon: CloudIcon,
        skills: ['Docker', 'AWS', 'Git & GitHub', 'Vercel', 'Pandas', 'NumPy', 'Data Modeling'],
    },
];

const softSkills = [
    'Problem-Solving',
    'Communication',
    'Attention to Detail',
    'Adaptability',
    'Agile Teamwork',
];

export default function SkillsSection() {
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
        <section id="skills" className="py-14 sm:py-20 lg:py-24 scroll-mt-20" ref={sectionRef}>
            <div className="site-container">
                {/* Header */}
                <div className="reveal-hidden mb-10 lg:mb-12 flex flex-col md:flex-row md:items-end gap-4 justify-between">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <span className="section-label text-primary font-bold tracking-[0.2em] text-[11px] uppercase">
                                Skills &amp; Expertise
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.12]">
                            Skills &amp; <span className="text-gradient-cyan">Expertise</span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground max-w-md text-xs sm:text-sm leading-relaxed">
                        A curated skill set built for real-world AI applications, enterprise workflows, and scalable production systems.
                    </p>
                </div>

                {/* 3 x 2 Technical Domain Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full min-w-0">
                    {technicalCategories.map((cat, i) => {
                        const IconComp = cat.icon;
                        return (
                            <div
                                key={cat.category}
                                className="reveal-hidden glass-card rounded-[20px] p-5 sm:p-6 border border-border/60 card-hover"
                                style={{ transitionDelay: `${i * 50}ms` }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-9 h-9 rounded-[12px] bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                        <IconComp className="w-4 h-4 text-primary" />
                                    </div>
                                    <h3 className="text-sm sm:text-base font-bold text-foreground">{cat.category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {cat.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="skill-pill text-muted-foreground text-[11px] font-medium px-2.5 py-1 rounded-full cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Soft Skills Strip */}
                <div
                    className="reveal-hidden mt-5 glass-card rounded-[20px] px-5 py-3.5 sm:px-6 sm:py-4 border border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    style={{ transitionDelay: '250ms' }}
                >
                    <div className="flex items-center gap-2.5 flex-shrink-0">
                        <UserGroupIcon className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider text-foreground">Soft Skills</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium text-muted-foreground">
                        {softSkills.map((item, idx) => (
                            <React.Fragment key={item}>
                                <span className="text-foreground/90">{item}</span>
                                {idx < softSkills.length - 1 && (
                                    <span className="text-primary/60" aria-hidden="true">·</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
