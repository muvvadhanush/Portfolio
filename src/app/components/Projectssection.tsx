'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { projectsData } from '@/data/projects';
import { ArrowUpRightIcon, PlayIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Show top 4 featured projects on the home page
    const featuredProjects = projectsData.slice(0, 4);

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
        <section id="projects" className="py-20 sm:py-24 bg-secondary/20" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="reveal-hidden flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
                    <div>
                        <span className="section-label text-primary block mb-3 sm:mb-4">Visual Portfolio</span>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                            Featured <span className="text-gradient-cyan">Projects</span>
                        </h2>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <p className="text-muted-foreground max-w-sm text-xs sm:text-sm leading-relaxed">
                            Real AI & full-stack systems built during internships and production deployments.
                        </p>

                        {/* View All Button beside Projects */}
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-6 py-3 rounded-full text-xs font-bold transition-all duration-300 shadow-md hover:shadow-primary/20 hover:scale-105 flex-shrink-0"
                        >
                            View All ({projectsData.length})
                            <ArrowUpRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Bento Grid (Top 4 Featured Projects) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {featuredProjects.map((project, idx) => {
                        const isLarge = project.size === 'large';
                        return (
                            <div
                                key={project.id}
                                className={`reveal-hidden glass-card rounded-2xl sm:rounded-3xl overflow-hidden card-hover relative group flex flex-col justify-between border border-border/60 ${
                                    isLarge ? 'md:col-span-2' : 'md:col-span-1'
                                }`}
                                style={{ transitionDelay: `${idx * 50}ms`, minHeight: '340px' }}
                            >
                                {/* Media Preview Header (No Code Displayed) */}
                                <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-muted/40 border-b border-border/40 group">
                                    {/* Radial background glow */}
                                    <div
                                        className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                                        style={{ background: `radial-gradient(ellipse at center, ${project.accent}30 0%, transparent 70%)` }}
                                    />

                                    {/* Visual Banner Graphics & Media Badges */}
                                    <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                                        <div className="flex items-center justify-between">
                                            <span
                                                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md"
                                                style={{
                                                    background: `${project.accent}20`,
                                                    color: project.accent,
                                                    border: `1px solid ${project.accent}40`,
                                                }}
                                            >
                                                {project.category}
                                            </span>

                                            <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-semibold text-muted-foreground">
                                                <VideoCameraIcon className="w-3.5 h-3.5 text-primary" />
                                                <span>Demo Available</span>
                                            </div>
                                        </div>

                                        {/* Center Icon & Play Teaser Overlay */}
                                        <div className="flex items-center justify-center my-auto">
                                            <div className="relative group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                                                <div
                                                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-xl backdrop-blur-md border border-white/20"
                                                    style={{ background: `linear-gradient(135deg, ${project.accent}30, rgba(15, 23, 42, 0.8))` }}
                                                >
                                                    {project.icon}
                                                </div>
                                                <div className="absolute inset-0 rounded-2xl bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <PlayIcon className="w-8 h-8 text-white drop-shadow-md" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between relative z-10">
                                    <div>
                                        <div className="flex items-start justify-between gap-3 mb-2">
                                            <h3 className="text-lg sm:text-xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="glass-card rounded-lg px-2.5 py-1 text-center border border-border/60 flex-shrink-0">
                                                <p className="text-[10px] sm:text-[11px] font-black" style={{ color: project.accent }}>
                                                    {project.stat.value}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-xs font-semibold mb-2.5" style={{ color: project.accent }}>
                                            {project.subtitle}
                                        </p>
                                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="pt-3.5 border-t border-border/30 flex flex-wrap items-center justify-between gap-3 mt-auto">
                                        <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                                            {project.tags.slice(0, 4).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                                                    style={{
                                                        background: `${project.accent}12`,
                                                        color: project.accent,
                                                        border: `1px solid ${project.accent}25`,
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            href={`/projects/${project.id}`}
                                            className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground group-hover:text-primary transition-colors ml-auto bg-muted/50 hover:bg-muted px-3.5 py-2 rounded-full border border-border/60 shadow-sm"
                                        >
                                            View Demo
                                            <ArrowUpRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom View All Link for Mobile */}
                <div className="mt-10 text-center sm:hidden">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-xs font-bold shadow-lg hover:bg-accent transition-all"
                    >
                        View All Projects ({projectsData.length})
                        <ArrowUpRightIcon className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}