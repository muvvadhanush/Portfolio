'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    ArrowUpRightIcon,
    DocumentTextIcon,
    CommandLineIcon,
    CheckIcon,
    EnvelopeIcon,
    Square3Stack3DIcon,
    ChartBarIcon,
    BookOpenIcon,
    CalendarDaysIcon,
} from '@heroicons/react/24/outline';

const proofMetrics = [
    { value: '4+', label: 'Completed Projects', icon: Square3Stack3DIcon },
    { value: '91%', label: 'ML Sensitivity Score', icon: ChartBarIcon },
    { value: 'ICDSMLA', label: 'Published Research', icon: BookOpenIcon },
    { value: '1+ Years', label: 'Applied Internship & Work', icon: CalendarDaysIcon },
];

const capabilityItems = [
    'RAG & LLM Systems',
    'Agentic Workflows',
    'Full-Stack Applications',
    'Enterprise Automation',
];

export default function HeroSection() {
    const meshRef = useRef<HTMLDivElement>(null);

    // Subtle parallax mouse follow
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!meshRef.current) return;
            const x = (e.clientX / window.innerWidth - 0.5) * 16;
            const y = (e.clientY / window.innerHeight - 0.5) * 16;
            meshRef.current.style.transform = `translate(${x}px, ${y}px)`;
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            id="home"
            className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden mesh-bg"
        >
            {/* Ambient Background Glows */}
            <div ref={meshRef} className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out">
                <div
                    className="absolute top-[5%] left-[4%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full blur-[110px] sm:blur-[140px] opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(110,231,247,0.25) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute bottom-[12%] right-[4%] w-[280px] sm:w-[440px] h-[280px] sm:h-[440px] rounded-full blur-[100px] sm:blur-[130px] opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.22) 0%, transparent 70%)' }}
                />
            </div>

            {/* Noise & Grid Overlay */}
            <div className="absolute inset-0 noise-overlay pointer-events-none" />
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(rgba(110,231,247,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(110,231,247,0.35) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            <div className="site-container relative z-10 min-w-0">
                {/* 7:5 Grid Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full min-w-0">
                    {/* Left Column (7 cols): Identity, Role, Value Proposition, CTAs */}
                    <div className="lg:col-span-7 space-y-5 sm:space-y-6 min-w-0 w-full">
                        {/* Live Status Pill */}
                        <div className="inline-flex items-center gap-2 glass-card rounded-full px-3.5 py-1.5 border border-primary/25 max-w-full min-w-0">
                            <span className="relative flex h-2 w-2 flex-shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-primary font-bold text-[10px] sm:text-xs tracking-wider uppercase truncate min-w-0">
                                Junior Engineer @ Algoleap Technologies
                            </span>
                        </div>

                        {/* Headline & Value Prop */}
                        <div className="space-y-3">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-extrabold text-foreground tracking-tight leading-[1.08]">
                                <span className="block">Muvva Babu</span>
                                <span className="text-gradient-cyan block">Dhanush Kumar</span>
                            </h1>
                            <p className="text-base sm:text-xl font-bold text-foreground/95 tracking-tight">
                                AI &amp; Machine Learning Engineer
                            </p>
                            <p className="text-muted-foreground text-xs sm:text-base leading-relaxed max-w-xl">
                                Architecting enterprise RAG pipelines, multi-tenant AI backends, and intelligent full-stack applications.
                            </p>
                        </div>

                        {/* Primary CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full">
                            <Link
                                href="/#projects"
                                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-accent active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/20 w-full sm:w-auto"
                            >
                                <span>Explore Projects</span>
                                <ArrowUpRightIcon className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                            <a
                                href="/Muvva Babu Dhanush Kumar.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-2 glass-card text-foreground px-6 py-3 rounded-full font-bold text-xs sm:text-sm border border-border/70 hover:border-primary/40 active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
                            >
                                <DocumentTextIcon className="w-4 h-4 text-primary" />
                                <span>Resume PDF</span>
                            </a>
                        </div>

                        {/* Compact Circular Social Links */}
                        <div className="flex items-center gap-3 pt-1">
                            <a
                                href="https://www.linkedin.com/in/muvva-babu-dhanush-kumar-198b81261"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="w-9 h-9 rounded-full glass-card border border-border/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                            >
                                <span className="font-extrabold text-xs">in</span>
                            </a>
                            <a
                                href="https://github.com/BabuDhanushKumar"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="w-9 h-9 rounded-full glass-card border border-border/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="mailto:dhanushmuvva@gmail.com"
                                aria-label="Send Email"
                                className="w-9 h-9 rounded-full glass-card border border-border/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                            >
                                <EnvelopeIcon className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column (5 cols): Studio Portrait + Capability Card */}
                    <div className="lg:col-span-5 min-w-0 w-full">
                        <div className="relative mx-auto max-w-[340px] sm:max-w-[400px] lg:max-w-none">
                            {/* Subtle Ambient Portrait Glow */}
                            <div
                                className="absolute -inset-2 rounded-[28px] opacity-30 blur-2xl pointer-events-none"
                                style={{ background: 'radial-gradient(circle at 60% 35%, rgba(110,231,247,0.35), rgba(56,189,248,0.12), transparent 70%)' }}
                            />

                            {/* Portrait Frame */}
                            <div className="relative rounded-[24px] overflow-hidden glass-card border border-primary/25 aspect-[11/12] sm:aspect-[4/4.1] bg-[#0B1120]">
                                <img
                                    src="/Dhanush.png"
                                    alt="Muvva Babu Dhanush Kumar — AI & ML Engineer"
                                    loading="eager"
                                    fetchPriority="high"
                                    decoding="async"
                                    className="w-full h-full object-cover object-top"
                                />
                                {/* Soft Bottom Vignette for Clean Contrast */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent pointer-events-none" />
                            </div>

                            {/* Floating Capability Card ("Building with AI") */}
                            <div className="mt-3 sm:mt-0 sm:absolute sm:bottom-4 sm:right-4 sm:w-[220px] glass-card rounded-[20px] p-3.5 sm:p-4 border border-primary/30 shadow-2xl backdrop-blur-xl">
                                <div className="flex items-center gap-2 text-xs font-bold text-foreground mb-2.5 pb-2 border-b border-border/50">
                                    <CommandLineIcon className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span>Building with AI</span>
                                </div>
                                <ul className="space-y-1.5">
                                    {capabilityItems.map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-muted-foreground">
                                            <CheckIcon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                            <span className="truncate text-foreground/90">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Unified 4-Column Proof Bar */}
                <div className="mt-10 sm:mt-14 glass-card rounded-[20px] border border-border/60 overflow-hidden w-full min-w-0">
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-border/40">
                        {proofMetrics.map((stat, idx) => {
                            const IconComp = stat.icon;
                            return (
                                <div
                                    key={stat.label}
                                    className={`flex items-center gap-3 sm:gap-4 px-4 py-4 sm:px-6 sm:py-5 ${
                                        idx % 2 === 0 ? 'border-r lg:border-r-0 border-border/40' : ''
                                    } ${idx < 2 ? 'border-b lg:border-b-0 border-border/40' : ''}`}
                                >
                                    <div className="w-10 h-10 rounded-[14px] bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                        <IconComp className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-lg sm:text-2xl font-extrabold text-foreground leading-none mb-1">
                                            {stat.value}
                                        </p>
                                        <p className="text-muted-foreground text-[11px] sm:text-xs font-medium leading-tight truncate">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
