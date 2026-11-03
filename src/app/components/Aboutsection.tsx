'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
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
        <section id="about" className="py-16 sm:py-24 bg-secondary/30 relative overflow-hidden" ref={sectionRef}>
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(110,231,247,0.35) 0%, transparent 70%)' }}
            />
            <div className="absolute bottom-10 -right-48 w-96 h-96 rounded-full blur-[140px] opacity-15 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.3) 0%, transparent 70%)' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start w-full min-w-0">
                    {/* Left: Bio & Highlights */}
                    <div className="lg:col-span-7 space-y-6 sm:space-y-8 min-w-0 w-full">
                        <div className="reveal-hidden">
                            <div className="inline-flex items-center gap-2 mb-2 sm:mb-4">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="section-label text-primary font-bold tracking-widest text-[10px] sm:text-xs uppercase">
                                    About Me
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-[1.15] tracking-tight">
                                Architecting Intelligent <br />
                                <span className="text-gradient-cyan">AI Solutions</span>
                            </h2>
                        </div>

                        <div className="reveal-hidden space-y-3 sm:space-y-4 text-muted-foreground text-xs sm:text-base leading-relaxed" style={{ transitionDelay: '100ms' }}>
                            <p>
                                I&apos;m a dedicated <strong className="text-foreground font-semibold">AI & Machine Learning Engineer</strong> and a B.E. graduate in AI & ML from New Horizon College of Engineering. Currently, a Junior Engineer at Algoleap Technologies, I architect sophisticated enterprise systems including multi-agent tax workflow POCs, multi-tenant AI chatbots (Neural Bot) with Hybrid RAG, and intelligent document gap analysis engines.
                            </p>
                            <p>
                                With a strong foundation across Python, Azure OpenAI, PostgreSQL (pgvector), and modern full-stack web engineering, I specialize in transforming complex unstructured data into high-performance, production-ready AI solutions.
                            </p>
                        </div>

                        {/* Specialization Tags matching mockup */}
                        <div className="reveal-hidden flex flex-wrap gap-2 sm:gap-3" style={{ transitionDelay: '150ms' }}>
                            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border border-primary/25 text-xs font-semibold text-foreground hover:border-primary/50 transition-all">
                                <CodeBracketIcon className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>AI/ML Engineering</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border border-primary/25 text-xs font-semibold text-foreground hover:border-primary/50 transition-all">
                                <ServerStackIcon className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>Full-Stack Development</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border border-primary/25 text-xs font-semibold text-foreground hover:border-primary/50 transition-all">
                                <GlobeAltIcon className="w-4 h-4 text-primary flex-shrink-0" />
                                <span>RAG & LLM Systems</span>
                            </div>
                        </div>

                        {/* Contact info cards with Copy button */}
                        <div className="reveal-hidden grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" style={{ transitionDelay: '200ms' }}>
                            <div className="flex items-center justify-between gap-3 glass-card rounded-2xl p-3.5 sm:p-4 hover:border-primary/30 transition-all group">
                                <a href="mailto:dhanushmuvva@gmail.com" className="flex items-center gap-3 min-w-0 flex-1">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <EnvelopeIcon className="w-4 h-4 text-primary" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="section-label text-muted-foreground text-[9px] sm:text-[10px]">Email</p>
                                        <p className="text-xs sm:text-sm font-medium text-foreground truncate">dhanushmuvva@gmail.com</p>
                                    </div>
                                </a>
                                <button
                                    onClick={() => copyToClipboard('dhanushmuvva@gmail.com', 'email')}
                                    className="p-2 rounded-lg hover:bg-muted/60 text-muted-foreground hover:text-primary active:scale-90 transition-all flex-shrink-0"
                                    title="Copy Email"
                                    aria-label="Copy Email"
                                >
                                    {copiedEmail ? (
                                        <CheckIcon className="w-4 h-4 text-emerald-400" />
                                    ) : (
                                        <DocumentDuplicateIcon className="w-4 h-4" />
                                    )}
                                </button>
                            </div>

                            <div className="flex items-center justify-between gap-3 glass-card rounded-2xl p-3.5 sm:p-4 hover:border-primary/30 transition-all group">
                                <a href="tel:+917329995385" className="flex items-center gap-3 min-w-0 flex-1">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <PhoneIcon className="w-4 h-4 text-primary" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="section-label text-muted-foreground text-[9px] sm:text-[10px]">Phone</p>
                                        <p className="text-xs sm:text-sm font-medium text-foreground truncate">+91 73299 95385</p>
                                    </div>
                                </a>
                                <button
                                    onClick={() => copyToClipboard('+917329995385', 'phone')}
                                    className="p-2 rounded-lg hover:bg-muted/60 text-muted-foreground hover:text-primary active:scale-90 transition-all flex-shrink-0"
                                    title="Copy Phone Number"
                                    aria-label="Copy Phone Number"
                                >
                                    {copiedPhone ? (
                                        <CheckIcon className="w-4 h-4 text-emerald-400" />
                                    ) : (
                                        <DocumentDuplicateIcon className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="reveal-hidden flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4" style={{ transitionDelay: '250ms' }}>
                            <a
                                href="/Muvva Babu Dhanush Kumar.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold hover:bg-accent active:scale-[0.98] transition-all shadow-lg shadow-primary/20 text-center"
                            >
                                <ArrowDownTrayIcon className="w-4 h-4" />
                                Download Resume
                            </a>
                            <a
                                href="https://www.linkedin.com/in/muvva-babu-dhanush-kumar-198b81261"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 glass-card text-foreground px-5 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold hover:border-primary/40 active:scale-[0.98] transition-all text-center border border-border/70"
                            >
                                <span className="font-extrabold text-primary text-xs">in</span>
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/BabuDhanushKumar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 glass-card text-foreground px-5 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold hover:border-primary/40 active:scale-[0.98] transition-all text-center border border-border/70"
                            >
                                GitHub
                                <ArrowUpRightIcon className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Portrait & Quick facts card */}
                    <div className="lg:col-span-5 space-y-4 sm:space-y-6 w-full min-w-0">
                        {/* Portrait Card with Cyan Aurora Curve */}
                        <div className="reveal-hidden relative group rounded-2xl sm:rounded-3xl overflow-hidden glass-card border border-primary/30 cyan-glow" style={{ transitionDelay: '100ms' }}>
                            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden bg-muted/40">
                                {/* Ambient Cyan Wave Background Streak */}
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                                    style={{
                                        background: 'radial-gradient(circle at 80% 30%, rgba(110,231,247,0.35) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(56,189,248,0.2) 0%, transparent 50%)',
                                    }}
                                />
                                <svg
                                    className="absolute inset-0 w-full h-full pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                                    viewBox="0 0 400 300"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M-50 250 C 100 180, 250 220, 450 100"
                                        stroke="url(#cyanGlowGrad)"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                    <defs>
                                        <linearGradient id="cyanGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#6EE7F7" stopOpacity="0.2" />
                                            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.8" />
                                            <stop offset="100%" stopColor="#818CF8" stopOpacity="0.2" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <img
                                    src="/assets/dhanush-portrait.jpg"
                                    alt="Muvva Babu Dhanush Kumar — AI & ML Engineer"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 relative z-10"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent pointer-events-none z-10" />

                                {/* Bottom Badge Bar */}
                                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 glass-card rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 border border-white/10 backdrop-blur-md z-20">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="min-w-0">
                                            <p className="text-xs sm:text-sm font-bold text-foreground truncate">
                                                Muvva Babu Dhanush Kumar
                                            </p>
                                            <p className="text-[10px] sm:text-xs text-primary font-semibold truncate">
                                                AI & ML Engineer · Algoleap Technologies
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold flex-shrink-0">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            Active
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Facts Card with Neon Icons */}
                        <div className="reveal-hidden glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-border/60 cyan-glow" style={{ transitionDelay: '150ms' }}>
                            <div className="flex items-center gap-2 mb-4 sm:mb-6">
                                <BoltIcon className="w-5 h-5 text-primary" />
                                <h3 className="text-base sm:text-lg font-bold text-foreground">Quick Facts</h3>
                            </div>
                            <div className="space-y-3.5 sm:space-y-4">
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
                                            className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 pb-3 sm:pb-3.5 border-b border-border/40 last:border-0 last:pb-0"
                                        >
                                            <div className="flex items-center gap-2.5 text-muted-foreground flex-shrink-0">
                                                <IconComp className="w-4 h-4 text-primary" />
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

                        {/* Education logos */}
                        <div className="reveal-hidden glass-card rounded-2xl p-4 sm:p-5" style={{ transitionDelay: '200ms' }}>
                            <p className="section-label text-muted-foreground mb-3 text-[10px]">Education & Training</p>
                            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                                {[
                                    { src: 'https://dhanushmuvva.in/LOGOS/nhce.jpg', alt: 'NHCE Bengaluru' },
                                    { src: 'https://dhanushmuvva.in/LOGOS/algoleap.jpg', alt: 'Algoleap Technologies' },
                                    { src: 'https://dhanushmuvva.in/LOGOS/rooman.jpg', alt: 'Rooman Technologies' },
                                ].map((logo) => (
                                    <div
                                        key={logo.src}
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-muted border border-border/50 flex-shrink-0 p-1"
                                        title={logo.alt}
                                    >
                                        <AppImage
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
