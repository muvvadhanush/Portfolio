'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    EnvelopeIcon,
    PhoneIcon,
    ArrowDownTrayIcon,
    ArrowUpRightIcon,
    DocumentDuplicateIcon,
    CheckIcon,
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

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const copyToClipboard = (text: string, type: 'email' | 'phone') => {
        navigator.clipboard.writeText(text);
        if (type === 'email') {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        } else {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        }
    };

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
            className="py-12 sm:py-16 lg:py-20 bg-secondary/30 relative overflow-hidden scroll-mt-20"
            ref={sectionRef}
        >
            {/* Ambient Background Glows */}
            <div
                className="absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(110,231,247,0.35) 0%, transparent 70%)' }}
            />
            <div
                className="absolute bottom-10 -right-48 w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.3) 0%, transparent 70%)' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full min-w-0">
                    {/* Left Column: Bio, Skills & Contact */}
                    <div className="lg:col-span-7 space-y-5 sm:space-y-6 min-w-0 w-full">
                        {/* Section Header */}
                        <div className="reveal-hidden">
                            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="section-label text-primary font-bold tracking-widest text-[10px] sm:text-xs uppercase">
                                    About Me
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.15] tracking-tight">
                                Architecting Intelligent <br />
                                <span className="text-gradient-cyan">AI Solutions</span>
                            </h2>
                        </div>

                        {/* Bio Text */}
                        <div
                            className="reveal-hidden space-y-3 sm:space-y-3.5 text-muted-foreground text-xs sm:text-sm leading-relaxed"
                            style={{ transitionDelay: '80ms' }}
                        >
                            <p>
                                I&apos;m a dedicated <strong className="text-foreground font-semibold">AI &amp; Machine Learning Engineer</strong> and a B.E. graduate in AI &amp; ML from New Horizon College of Engineering. Currently, a Junior Engineer at Algoleap Technologies, I architect sophisticated enterprise systems including multi-agent tax workflow POCs, multi-tenant AI chatbots (Neural Bot) with Hybrid RAG, and intelligent document gap analysis engines.
                            </p>
                            <p>
                                With a strong foundation across Python, Azure OpenAI, PostgreSQL (pgvector), and modern full-stack web engineering, I specialize in transforming complex unstructured data into high-performance, production-ready AI solutions.
                            </p>
                        </div>

                        {/* Specialization Badges */}
                        <div
                            className="reveal-hidden flex flex-wrap gap-2 sm:gap-2.5 pt-0.5"
                            style={{ transitionDelay: '140ms' }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card border border-primary/25 text-[11px] sm:text-xs font-semibold text-foreground hover:border-primary/45 transition-colors">
                                <CodeBracketIcon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                <span>AI/ML Engineering</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card border border-primary/25 text-[11px] sm:text-xs font-semibold text-foreground hover:border-primary/45 transition-colors">
                                <ServerStackIcon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                <span>Full-Stack Development</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card border border-primary/25 text-[11px] sm:text-xs font-semibold text-foreground hover:border-primary/45 transition-colors">
                                <GlobeAltIcon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                <span>RAG &amp; LLM Systems</span>
                            </div>
                        </div>

                        {/* Contact info cards with Copy button */}
                        <div
                            className="reveal-hidden grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 pt-0.5"
                            style={{ transitionDelay: '180ms' }}
                        >
                            {/* Email */}
                            <div className="flex items-center justify-between gap-2.5 glass-card rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 border border-border/60 hover:border-primary/30 transition-all group">
                                <a href="mailto:dhanushmuvva@gmail.com" className="flex items-center gap-3 min-w-0 flex-1">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary/20 transition-colors">
                                        <EnvelopeIcon className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[9px] uppercase tracking-wider font-bold text-muted-foreground">Email</p>
                                        <p className="text-xs font-semibold text-foreground truncate">dhanushmuvva@gmail.com</p>
                                    </div>
                                </a>
                                <button
                                    onClick={() => copyToClipboard('dhanushmuvva@gmail.com', 'email')}
                                    className="p-1.5 rounded-md hover:bg-muted/60 text-muted-foreground hover:text-primary active:scale-90 transition-all flex-shrink-0"
                                    title="Copy Email"
                                    aria-label="Copy Email"
                                >
                                    {copiedEmail ? (
                                        <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                                    ) : (
                                        <DocumentDuplicateIcon className="w-3.5 h-3.5" />
                                    )}
                                </button>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center justify-between gap-2.5 glass-card rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 border border-border/60 hover:border-primary/30 transition-all group">
                                <a href="tel:+917329995385" className="flex items-center gap-3 min-w-0 flex-1">
                                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary/20 transition-colors">
                                        <PhoneIcon className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[9px] uppercase tracking-wider font-bold text-muted-foreground">Phone</p>
                                        <p className="text-xs font-semibold text-foreground truncate">+91 73299 95385</p>
                                    </div>
                                </a>
                                <button
                                    onClick={() => copyToClipboard('+917329995385', 'phone')}
                                    className="p-1.5 rounded-md hover:bg-muted/60 text-muted-foreground hover:text-primary active:scale-90 transition-all flex-shrink-0"
                                    title="Copy Phone Number"
                                    aria-label="Copy Phone Number"
                                >
                                    {copiedPhone ? (
                                        <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                                    ) : (
                                        <DocumentDuplicateIcon className="w-3.5 h-3.5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div
                            className="reveal-hidden flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1"
                            style={{ transitionDelay: '220ms' }}
                        >
                            <a
                                href="/Muvva Babu Dhanush Kumar.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs font-bold hover:bg-accent active:scale-[0.98] transition-all shadow-lg shadow-primary/25"
                            >
                                <ArrowDownTrayIcon className="w-4 h-4" />
                                Download Resume
                            </a>
                            <a
                                href="https://www.linkedin.com/in/muvva-babu-dhanush-kumar-198b81261"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 glass-card text-foreground px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-xs font-bold hover:border-primary/40 active:scale-[0.98] transition-all border border-border/70"
                            >
                                <span className="font-black text-primary text-[11px]">in</span>
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/BabuDhanushKumar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 glass-card text-foreground px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-xs font-bold hover:border-primary/40 active:scale-[0.98] transition-all border border-border/70"
                            >
                                GitHub
                                <ArrowUpRightIcon className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Portrait Card & Quick Facts */}
                    <div className="lg:col-span-5 space-y-4 sm:space-y-5 w-full min-w-0">
                        {/* Portrait Card */}
                        <div
                            className="reveal-hidden relative group rounded-2xl sm:rounded-3xl overflow-hidden glass-card border border-primary/30 cyan-glow"
                            style={{ transitionDelay: '100ms' }}
                        >
                            <div className="relative h-[230px] sm:h-[260px] lg:h-[270px] w-full overflow-hidden bg-[#0A0F1D]">
                                {/* Cyan Aurora Arc Background */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                                    style={{
                                        background:
                                            'radial-gradient(circle at 80% 30%, rgba(110,231,247,0.3) 0%, transparent 55%), radial-gradient(circle at 20% 80%, rgba(56,189,248,0.18) 0%, transparent 50%)',
                                    }}
                                />
                                <svg
                                    className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                                    viewBox="0 0 450 270"
                                    fill="none"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M -30 240 C 130 180, 240 140, 480 50"
                                        stroke="url(#cyanGlowGrad)"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />
                                    <defs>
                                        <linearGradient id="cyanGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#6EE7F7" stopOpacity="0.15" />
                                            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="#818CF8" stopOpacity="0.15" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Photo with top-anchored framing showing full hair, face & suit */}
                                <img
                                    src="/assets/dhanush-portrait.jpg"
                                    alt="Muvva Babu Dhanush Kumar — AI & ML Engineer"
                                    className="w-full h-full object-cover object-[center_6%] sm:object-[center_5%] group-hover:scale-105 transition-transform duration-700 relative z-10"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/15 to-transparent pointer-events-none z-10" />

                                {/* Bottom Badge Bar */}
                                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 glass-card rounded-xl sm:rounded-2xl px-3 py-2 sm:px-3.5 sm:py-2.5 border border-white/10 backdrop-blur-md z-20 flex items-center justify-between gap-2">
                                    <div className="min-w-0">
                                        <p className="text-xs sm:text-sm font-bold text-foreground truncate">
                                            Muvva Babu Dhanush Kumar
                                        </p>
                                        <p className="text-[10px] sm:text-xs text-primary font-semibold truncate">
                                            AI &amp; ML Engineer · Algoleap Technologies
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold flex-shrink-0">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        Active
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Facts Card */}
                        <div
                            className="reveal-hidden glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-border/60 cyan-glow"
                            style={{ transitionDelay: '150ms' }}
                        >
                            <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                <BoltIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                <h3 className="text-sm sm:text-base font-bold text-foreground">Quick Facts</h3>
                            </div>
                            <div className="space-y-2.5 sm:space-y-3">
                                {[
                                    { icon: BriefcaseIcon, label: 'Current Role', value: 'Junior Engineer @ Algoleap Technologies' },
                                    { icon: AcademicCapIcon, label: 'Degree', value: 'B.E. in AI & ML — NHCE Bengaluru' },
                                    { icon: CalendarDaysIcon, label: 'Graduation', value: 'Aug 2025 · CGPA 7.14' },
                                    { icon: StarIcon, label: 'Specialization', value: 'RAG, LLM, Full-Stack AI' },
                                    { icon: MapPinIcon, label: 'Location', value: 'Hyderabad, India' },
                                ].map((item) => {
                                    const IconComp = item.icon;
                                    return (
                                        <div
                                            key={item.label}
                                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 pb-2.5 sm:pb-3 border-b border-border/40 last:border-0 last:pb-0"
                                        >
                                            <div className="flex items-center gap-2 text-muted-foreground flex-shrink-0">
                                                <IconComp className="w-3.5 h-3.5 text-primary" />
                                                <span className="text-xs sm:text-sm font-medium">{item.label}</span>
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
