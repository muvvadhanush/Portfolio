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
        <section id="about" className="py-24 bg-secondary/30" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    {/* Left: Bio */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="reveal-hidden">
                            <span className="section-label text-primary block mb-4">About Me</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
                                Architecting intelligent{' '}
                                <span className="text-gradient-cyan">AI solutions</span>
                            </h2>
                        </div>

                        <div className="reveal-hidden space-y-4 text-muted-foreground text-base leading-relaxed" style={{ transitionDelay: '100ms' }}>
                            <p>
                                I am a dedicated <strong className="text-foreground font-semibold">AI & Machine Learning Engineer</strong> and
                                a recent B.E. graduate from New Horizon College of Engineering. Currently an Intern at Algoleap Technologies,
                                I have architected sophisticated systems including a multi-tenant AI chatbot platform (Neural Bot) with Hybrid RAG
                                and an enterprise Idea Management System.
                            </p>
                            <p>
                                With a strong technical foundation in Python, SQL, and full-stack development, I specialize in turning complex data
                                into scalable, intelligent solutions. I am passionate about building innovative AI tools that solve real-world
                                industrial challenges.
                            </p>
                        </div>

                        {/* Contact info */}
                        <div className="reveal-hidden grid sm:grid-cols-2 gap-4" style={{ transitionDelay: '200ms' }}>
                            <a
                                href="mailto:dhanushmuvva@gmail.com"
                                className="flex items-center gap-3 glass-card rounded-xl px-4 py-3 hover:border-primary/30 transition-all group">

                                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <EnvelopeIcon className="w-4 h-4 text-primary" />
                                </div>
                                <div className="min-w-0">
                                    <p className="section-label text-muted-foreground">Email</p>
                                    <p className="text-sm font-medium text-foreground truncate">dhanushmuvva@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="tel:+917329995385"
                                className="flex items-center gap-3 glass-card rounded-xl px-4 py-3 hover:border-primary/30 transition-all group">

                                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <PhoneIcon className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <p className="section-label text-muted-foreground">Phone</p>
                                    <p className="text-sm font-medium text-foreground">+91 73299 95385</p>
                                </div>
                            </a>
                        </div>

                        {/* Action buttons */}
                        <div className="reveal-hidden flex flex-wrap gap-4" style={{ transitionDelay: '300ms' }}>
                            <a
                                href="https://dhanushmuvva.in/Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-bold hover:bg-accent transition-all hover:scale-105 shadow-lg">

                                <ArrowDownTrayIcon className="w-4 h-4" />
                                Download Resume
                            </a>
                            <a
                                href="https://www.linkedin.com/in/muvva-babu-dhanush-kumar-198b81261"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 glass-card text-foreground px-6 py-3 rounded-full text-sm font-bold hover:border-primary/40 transition-all">

                                <ArrowUpRightIcon className="w-4 h-4" />
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/BabuDhanushKumar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 glass-card text-foreground px-6 py-3 rounded-full text-sm font-bold hover:border-primary/40 transition-all">

                                <ArrowUpRightIcon className="w-4 h-4" />
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* Right: Stats card */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="reveal-hidden glass-card rounded-3xl p-8 cyan-glow" style={{ transitionDelay: '150ms' }}>
                            <h3 className="text-lg font-bold text-foreground mb-6">Quick Facts</h3>
                            <div className="space-y-5">
                                {[
                                    { label: 'Current Role', value: 'Intern @ Algoleap Technologies' },
                                    { label: 'Degree', value: 'B.E. in AI & ML — NHCE Bengaluru' },
                                    { label: 'Graduation', value: 'May 2025 · CGPA 7.14' },
                                    { label: 'Specialization', value: 'RAG, LLM, Full-Stack AI' },
                                    { label: 'Location', value: 'Bengaluru, India' }].
                                    map((item) =>
                                        <div key={item.label} className="flex items-start justify-between gap-4 pb-4 border-b border-border/40 last:border-0 last:pb-0">
                                            <span className="section-label text-muted-foreground w-32 flex-shrink-0">{item.label}</span>
                                            <span className="text-sm font-semibold text-foreground text-right">{item.value}</span>
                                        </div>
                                    )}
                            </div>
                        </div>

                        {/* Education logos */}
                        <div className="reveal-hidden glass-card rounded-2xl p-5" style={{ transitionDelay: '250ms' }}>
                            <p className="section-label text-muted-foreground mb-4">Education & Training</p>
                            <div className="flex items-center gap-4 flex-wrap">
                                {[
                                    { src: 'https://dhanushmuvva.in/LOGOS/nhce.jpg', alt: 'NHCE college building exterior, white facade, green campus' },
                                    { src: 'https://dhanushmuvva.in/LOGOS/algoleap.jpg', alt: 'Algoleap Technologies company logo, dark background, tech brand' },
                                    { src: 'https://dhanushmuvva.in/LOGOS/rooman.jpg', alt: 'Rooman Technologies logo, blue and white corporate colors' }].
                                    map((logo) =>
                                        <div key={logo.src} className="w-12 h-12 rounded-xl overflow-hidden bg-muted border border-border/50 flex-shrink-0">
                                            <AppImage
                                                src={logo.src}
                                                alt={logo.alt}
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-contain p-1" />

                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);

}