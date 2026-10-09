'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projectsData, Project } from '@/data/projects';
import {
    ArrowLeftIcon,
    ArrowUpRightIcon,
    MagnifyingGlassIcon,
    VideoCameraIcon,
    PlayIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';

const categories = [
    'All',
    'Agentic AI & Enterprise Workflows',
    'AI / RAG Architecture',
    'Enterprise AI & Search',
    'Full-Stack SaaS Product',
    'Enterprise Software',
    'Machine Learning & Healthcare',
    'IoT & Published Research',
];

export default function AllProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter projects by category and search query
    const filteredProjects = projectsData.filter((project) => {
        const matchesCategory =
            selectedCategory === 'All' || project.category === selectedCategory;
        const matchesQuery =
            searchQuery.trim() === '' ||
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesQuery;
    });

    return (
        <main className="bg-background text-foreground min-h-screen relative overflow-x-hidden">
            <Header />

            {/* Mesh Glow Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none z-0">
                <div
                    className="absolute top-12 left-1/3 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(110,231,247,0.25) 0%, transparent 70%)' }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-24 relative z-10">
                {/* Back Button */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors mb-8 bg-muted/30 border border-border/50 rounded-full px-4 py-2 backdrop-blur-sm"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    Back to Home
                </Link>

                {/* Header Title */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <span className="section-label text-primary block mb-3">Complete Portfolio</span>
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                            All <span className="text-gradient-cyan">Projects ({projectsData.length})</span>
                        </h1>
                    </div>
                    <p className="text-muted-foreground max-w-md text-xs sm:text-sm leading-relaxed">
                        Explore Dhanush&apos;s full collection of AI systems, multi-agent frameworks, SaaS platforms, machine learning models, and full-stack applications.
                    </p>
                </div>

                {/* Filter & Search Bar Controls */}
                <div className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-border/60 mb-12 space-y-4 shadow-xl">
                    {/* Search Input */}
                    <div className="relative">
                        <MagnifyingGlassIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search projects by name, technology (e.g. PyTorch, Azure OpenAI, pgvector, React)..."
                            className="w-full bg-muted/40 border border-border/60 rounded-xl pl-12 pr-4 py-3 text-xs sm:text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-muted/60 transition-all"
                        />
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 sm:flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`text-xs px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all duration-300 ${
                                    selectedCategory === cat
                                        ? 'bg-primary text-primary-foreground shadow-lg'
                                        : 'glass-card text-muted-foreground hover:text-foreground hover:border-primary/30'
                                }`}
                            >
                                {cat === 'All' ? 'All Projects' : cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                {filteredProjects.length === 0 ? (
                    <div className="glass-card rounded-3xl p-12 text-center space-y-3">
                        <SparklesIcon className="w-8 h-8 text-primary mx-auto" />
                        <h3 className="text-lg font-bold text-foreground">No projects match your search criteria</h3>
                        <p className="text-xs text-muted-foreground">Try searching for a different keyword or reset filters.</p>
                        <button
                            onClick={() => {
                                setSelectedCategory('All');
                                setSearchQuery('');
                            }}
                            className="text-xs text-primary font-bold hover:underline pt-2 inline-block"
                        >
                            Reset Search Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {filteredProjects.map((project, idx) => {
                            const isLarge = project.size === 'large';
                            return (
                                <div
                                    key={project.id}
                                    className={`glass-card rounded-2xl sm:rounded-3xl overflow-hidden card-hover relative group flex flex-col justify-between border border-border/60 ${
                                        isLarge ? 'md:col-span-2' : 'md:col-span-1'
                                    }`}
                                    style={{ minHeight: '340px' }}
                                >
                                    {/* Media Header */}
                                    <div className="relative aspect-video sm:aspect-[16/9] w-full overflow-hidden bg-muted/40 border-b border-border/40 group">
                                        <div
                                            className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                                            style={{ background: `radial-gradient(ellipse at center, ${project.accent}30 0%, transparent 70%)` }}
                                        />

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

                                    {/* Content */}
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
                                                View Case Study
                                                <ArrowUpRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
