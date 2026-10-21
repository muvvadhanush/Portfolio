'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { EnvelopeIcon, PhoneIcon, ArrowDownTrayIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

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
        <section id="about" className="py-16 sm:py-24 bg-secondary/30" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start w-full min-w-0">
                    {/* Left: Bio */}
                    <div className="lg:col-span-7 space-y-6 sm:space-y-8 min-w-0 w-full">
                        <div className="reveal-hidden">
                            <span className="section-label text-primary block mb-2 sm:mb-4">About Me</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
                                Architecting intelligent{' '}
                                <span className="text-gradient-cyan">AI solutions</span>
                            </h2>
                        </div>

                        <div className="reveal-hidden space-y-3 sm:space-y-4 text-muted-foreground text-xs sm:text-base leading-relaxed" style={{ transitionDelay: '100ms' }}>
                            <p>
                                I am a dedicated <strong className="text-foreground font-semibold">AI & Machine Learning Engineer</strong> and
                                a B.E. graduate in AI & ML from New Horizon College of Engineering. Currently a Junior Engineer at Algoleap Technologies,
                                I architect sophisticated enterprise systems including multi-agent tax workflow POCs, multi-tenant AI chatbots (Neural Bot) with Hybrid RAG,
                                and intelligent document gap analysis engines.
                            </p>
                            <p>
                                With a strong technical foundation across Python, Azure OpenAI, PostgreSQL (pgvector), and modern full-stack web engineering,
                                I specialize in transforming complex unstructured data into high-performance, production-ready AI solutions.
                            </p>
                        </div>

                        {/* Contact info cards */}
                        <div className="reveal-hidden grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" style={{ transitionDelay: '200ms' }}>
                            <a
                                href="mailto:dhanushmuvva@gmail.com"
                                className="flex items-center gap-3 glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:border-primary/30 transition-all group"
                            >
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <EnvelopeIcon className="w-4 h-4 text-primary" />
                                </div>
                                <div className="min-w-0">
                                    <p className="section-label text-muted-foreground text-[9px] sm:text-[10px]">Email</p>
                                    <p className="text-xs sm:text-sm font-medium text-foreground truncate">dhanushmuvva@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="tel:+917329995385"
                                className="flex items-center gap-3 glass-card rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:border-primary/30 transition-all group"
                            >
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <PhoneIcon className="w-4 h-4 text-primary" />
                                </div>
                                <div className="min-w-0">
                                    <p className="section-label text-muted-foreground text-[9px] sm:text-[10px]">Phone</p>
                                    <p className="text-xs sm:text-sm font-medium text-foreground truncate">+91 73299 95385</p>
                                </div>
                            </a>
                        </div>

                        {/* Action buttons */}
                        <div className="reveal-hidden flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4" style={{ transitionDelay: '300ms' }}>
                            <a
                                href="/Muvva Babu Dhanush Kumar.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold hover:bg-accent active:scale-[0.98] transition-all shadow-lg text-center"
                            >
                                <ArrowDownTrayIcon className="w-4 h-4" />
                                Download Resume
                            </a>
                            <a
                                href="https://www.linkedin.com/in/muvva-babu-dhanush-kumar-198b81261"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 glass-card text-foreground px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold hover:border-primary/40 active:scale-[0.98] transition-all text-center"
                            >
                                <ArrowUpRightIcon className="w-4 h-4" />
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/BabuDhanushKumar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 glass-card text-foreground px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold hover:border-primary/40 active:scale-[0.98] transition-all text-center"
                            >
                                <ArrowUpRightIcon className="w-4 h-4" />
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* Right: Quick facts card */}
                    <div className="lg:col-span-5 space-y-4 w-full min-w-0">
                        <div className="reveal-hidden glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 cyan-glow" style={{ transitionDelay: '150ms' }}>
                            <h3 className="text-base sm:text-lg font-bold text-foreground mb-4 sm:mb-6">Quick Facts</h3>
                            <div className="space-y-4 sm:space-y-5">
                                {[
                                    { label: 'Current Role', value: 'Junior Engineer @ Algoleap Technologies' },
                                    { label: 'Degree', value: 'B.E. in AI & ML — NHCE Bengaluru' },
                                    { label: 'Graduation', value: 'AUG 2025 · CGPA 7.14' },
                                    { label: 'Specialization', value: 'RAG, LLM, Full-Stack AI' },
                                    { label: 'Location', value: 'Hyderabad, India' },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 pb-3 sm:pb-4 border-b border-border/40 last:border-0 last:pb-0"
                                    >
                                        <span className="section-label text-muted-foreground text-[10px] sm:text-xs flex-shrink-0">
                                            {item.label}
                                        </span>
                                        <span className="text-xs sm:text-sm font-semibold text-foreground sm:text-right break-words">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education logos */}
                        <div className="reveal-hidden glass-card rounded-2xl p-4 sm:p-5" style={{ transitionDelay: '250ms' }}>
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