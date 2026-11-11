'use client';

import React, { useEffect, useRef } from 'react';
import {
    ArrowDownTrayIcon,
    ArrowUpRightIcon,
    CodeBracketIcon,
    ServerStackIcon,
    GlobeAltIcon,
    BoltIcon,
    BriefcaseIcon,
    AcademicCapIcon,
    CalendarDaysIcon,
    StarIcon,
    MapPinIcon,
} from '@heroicons/react/24/outline';

const quickFacts = [
    { icon: BriefcaseIcon, label: 'Current Role', value: 'Junior Engineer @ Algoleap Technologies' },
    { icon: AcademicCapIcon, label: 'Degree', value: 'B.E. in AI & ML — NHCE Bengaluru' },
    { icon: CalendarDaysIcon, label: 'Graduation', value: 'Aug 2025 · CGPA 7.14' },
    { icon: StarIcon, label: 'Specialization', value: 'RAG, LLM, Full-Stack AI' },
    { icon: MapPinIcon, label: 'Location', value: 'Hyderabad, India' },
];

export default function AboutSection() {
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
            { threshold: 0.15 }
        );
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            className="py-14 sm:py-20 lg:py-24 bg-secondary/30 relative overflow-hidden scroll-mt-20"
            ref={sectionRef}
        >
            {/* Subtle Ambient Glow */}
            <div
                className="absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(110,231,247,0.3) 0%, transparent 70%)' }}
            />

            <div className="site-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full min-w-0">
                    {/* Left Column (7 cols): Bio, Highlights & CTAs */}
                    <div className="lg:col-span-7 space-y-5 sm:space-y-6 min-w-0 w-full">
                        <div className="reveal-hidden">
                            <div className="inline-flex items-center gap-2 mb-3">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                <span className="section-label text-primary font-bold tracking-[0.2em] text-[11px] uppercase">
                                    About Me
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.12] tracking-tight">
                                Architecting Intelligent <br />
                                <span className="text-gradient-cyan">AI Solutions</span>
                            </h2>
                        </div>

                        <div
                            className="reveal-hidden space-y-3 text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-2xl"
                            style={{ transitionDelay: '80ms' }}
                        >
                            <p>
                                I&apos;m a dedicated <strong className="text-foreground font-semibold">AI &amp; Machine Learning Engineer</strong> and a B.E. graduate in AI &amp; ML from New Horizon College of Engineering. Currently a Junior Engineer at Algoleap Technologies, I build end-to-end AI solutions — from multi-agent tax workflow POCs and multi-tenant Hybrid RAG platforms (Neural Bot) to intelligent document gap analysis engines.
                            </p>
                            <p>
                                With a strong foundation across Python, Azure OpenAI, PostgreSQL (pgvector), and modern full-stack engineering, I specialize in transforming complex unstructured data into production-ready AI systems focused on impact, scalability, and performance.
                            </p>
                        </div>

                        {/* Specialization Badges */}
                        <div
                            className="reveal-hidden flex flex-wrap gap-2 sm:gap-2.5"
                            style={{ transitionDelay: '130ms' }}
                        >
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-primary/25 text-[11px] sm:text-xs font-semibold text-foreground">
                                <CodeBracketIcon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                <span>AI/ML Engineering</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-primary/25 text-[11px] sm:text-xs font-semibold text-foreground">
                                <ServerStackIcon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                <span>Full-Stack Development</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-primary/25 text-[11px] sm:text-xs font-semibold text-foreground">
                                <GlobeAltIcon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                <span>RAG &amp; LLM Systems</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div
                            className="reveal-hidden flex flex-wrap items-center gap-3 pt-1"
                            style={{ transitionDelay: '180ms' }}
                        >
                            <a
                                href="/Muvva Babu Dhanush Kumar.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs font-bold hover:bg-accent active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
                            >
                                <ArrowDownTrayIcon className="w-4 h-4" />
                                <span>Download Resume</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/muvva-babu-dhanush-kumar-198b81261"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 glass-card text-foreground px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-xs font-bold hover:border-primary/40 active:scale-[0.98] transition-all border border-border/70"
                            >
                                <span className="font-black text-primary text-[11px]">in</span>
                                <span>LinkedIn</span>
                                <ArrowUpRightIcon className="w-3.5 h-3.5 text-muted-foreground" />
                            </a>
                            <a
                                href="https://github.com/BabuDhanushKumar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 glass-card text-foreground px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-xs font-bold hover:border-primary/40 active:scale-[0.98] transition-all border border-border/70"
                            >
                                <span>GitHub</span>
                                <ArrowUpRightIcon className="w-3.5 h-3.5 text-muted-foreground" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column (5 cols): Quick Facts Card */}
                    <div className="lg:col-span-5 w-full min-w-0">
                        <div
                            className="reveal-hidden glass-card rounded-[20px] p-5 sm:p-7 border border-border/60"
                            style={{ transitionDelay: '120ms' }}
                        >
                            <div className="flex items-center gap-2 mb-4 sm:mb-5">
                                <BoltIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                <h3 className="text-base sm:text-lg font-bold text-foreground">Quick Facts</h3>
                            </div>
                            <div className="space-y-3 sm:space-y-3.5">
                                {quickFacts.map((item) => {
                                    const IconComp = item.icon;
                                    return (
                                        <div
                                            key={item.label}
                                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 pb-3 sm:pb-3.5 border-b border-border/40 last:border-0 last:pb-0"
                                        >
                                            <div className="flex items-center gap-2.5 text-muted-foreground flex-shrink-0">
                                                <IconComp className="w-4 h-4 text-primary" />
                                                <span className="text-xs font-medium">{item.label}</span>
                                            </div>
                                            <span className="text-xs sm:text-sm font-semibold text-foreground sm:text-right break-words">
                                                {item.value}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
