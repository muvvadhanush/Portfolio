import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectById, projectsData } from '@/data/projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectMediaSection from './ProjectMediaSection';
import {
    ArrowLeftIcon,
    ArrowUpRightIcon,
    CheckCircleIcon,
    CpuChipIcon,
    ExclamationTriangleIcon,
    LightBulbIcon,
    RocketLaunchIcon,
} from '@heroicons/react/24/outline';

interface PageProps {
    params: Promise<{ id: string }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://muvvadhanush.com';

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const project = getProjectById(id);
    if (!project) return { title: 'Project Not Found' };

    const pageUrl = `${siteUrl}/projects/${project.id}`;

    return {
        title: `${project.title} — ${project.subtitle} | Case Study by Dhanush Kumar`,
        description: project.fullDescription,
        keywords: [
            project.title,
            project.category,
            ...project.tags,
            'Muvva Babu Dhanush Kumar',
            'AI Engineering Case Study',
        ],
        alternates: {
            canonical: pageUrl,
        },
        openGraph: {
            title: `${project.title} — AI & ML Engineering Case Study`,
            description: project.description,
            url: pageUrl,
            type: 'article',
            siteName: 'Muvva Babu Dhanush Kumar Portfolio',
            images: [
                {
                    url: project.media?.thumbnail || '/assets/image.png',
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} — AI Case Study`,
            description: project.description,
            images: [project.media?.thumbnail || '/assets/image.png'],
        },
    };
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { id } = await params;
    const project = getProjectById(id);

    if (!project) {
        notFound();
    }

    const pageUrl = `${siteUrl}/projects/${project.id}`;

    // Software & Case Study Schema
    const softwareSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: project.title,
        alternateName: project.subtitle,
        description: project.fullDescription,
        applicationCategory: project.category,
        operatingSystem: 'Cross-platform',
        url: pageUrl,
        author: {
            '@type': 'Person',
            name: 'Muvva Babu Dhanush Kumar',
            url: siteUrl,
        },
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        featureList: project.highlights.join(', '),
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: siteUrl,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Projects',
                item: `${siteUrl}/projects`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: project.title,
                item: pageUrl,
            },
        ],
    };

    return (
        <main className="bg-background text-foreground min-h-screen relative overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <Header />

            {/* Background Mesh Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none z-0">
                <div
                    className="absolute top-12 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20"
                    style={{ background: `radial-gradient(circle, ${project.accent}, transparent)` }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-24 relative z-10">
                {/* Back Button */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-primary transition-colors mb-8 bg-muted/30 border border-border/50 rounded-full px-4 py-2 backdrop-blur-sm"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    Back to All Projects
                </Link>

                {/* Main Hero Header */}
                <div className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden mb-8 cyan-glow border border-border/60">
                    <div
                        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-25"
                        style={{ background: `radial-gradient(circle, ${project.accent}, transparent)` }}
                    />
                    <div className="relative z-10">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                            <div className="flex items-center gap-3">
                                <span className="text-4xl sm:text-5xl">{project.icon}</span>
                                <div>
                                    <span
                                        className="section-label px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider inline-block"
                                        style={{
                                            background: `${project.accent}20`,
                                            color: project.accent,
                                            border: `1px solid ${project.accent}40`,
                                        }}
                                    >
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Stat pill */}
                            <div className="glass-card rounded-2xl px-5 py-2.5 border border-border/60">
                                <p className="text-sm sm:text-base font-extrabold" style={{ color: project.accent }}>
                                    {project.stat.value}
                                </p>
                                <p className="section-label text-muted-foreground text-[10px]">{project.stat.label}</p>
                            </div>
                        </div>

                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-2 tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-sm sm:text-lg font-semibold mb-5" style={{ color: project.accent }}>
                            {project.subtitle}
                        </p>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
                            {project.fullDescription}
                        </p>

                        {/* Action buttons & tags */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/40">
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full"
                                        style={{
                                            background: `${project.accent}15`,
                                            color: project.accent,
                                            border: `1px solid ${project.accent}30`,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-3">
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 glass-card text-foreground text-xs font-bold px-4 py-2.5 sm:px-5 sm:py-3 rounded-full hover:border-primary/40 transition-all"
                                    >
                                        GitHub Repo
                                        <ArrowUpRightIcon className="w-3.5 h-3.5" />
                                    </a>
                                )}
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-accent transition-all shadow-lg hover:shadow-primary/30"
                                    >
                                        Live Demo
                                        <ArrowUpRightIcon className="w-3.5 h-3.5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Demo & Screenshot Gallery Section */}
                <ProjectMediaSection
                    media={project.media}
                    title={project.title}
                    accent={project.accent}
                    icon={project.icon}
                />

                {/* Content Grid */}
                <div className="grid lg:grid-cols-12 gap-8 mb-12">
                    {/* Left 8 Cols: Key Features & Architecture */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Highlights */}
                        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <RocketLaunchIcon className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Key Engineered Highlights</h2>
                            </div>
                            <div className="space-y-4">
                                {project.highlights.map((highlight, index) => (
                                    <div key={index} className="flex items-start gap-3.5">
                                        <CheckCircleIcon
                                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                                            style={{ color: project.accent }}
                                        />
                                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{highlight}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Challenges & Solutions */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="glass-card rounded-3xl p-6 space-y-3 border-amber-500/20">
                                <div className="flex items-center gap-2.5 text-amber-400">
                                    <ExclamationTriangleIcon className="w-5 h-5" />
                                    <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider">Engineering Challenge</h3>
                                </div>
                                <p className="text-muted-foreground text-xs leading-relaxed">{project.challenges}</p>
                            </div>

                            <div className="glass-card rounded-3xl p-6 space-y-3 border-emerald-500/20">
                                <div className="flex items-center gap-2.5 text-emerald-400">
                                    <LightBulbIcon className="w-5 h-5" />
                                    <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider">Architectural Solution</h3>
                                </div>
                                <p className="text-muted-foreground text-xs leading-relaxed">{project.solutions}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right 4 Cols: Architecture Specs & Impact */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Architecture Specs */}
                        <div className="glass-card rounded-3xl p-6 space-y-4">
                            <div className="flex items-center gap-2.5 text-primary">
                                <CpuChipIcon className="w-5 h-5" />
                                <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-foreground">
                                    Architecture Stack
                                </h3>
                            </div>
                            <ul className="space-y-2.5 text-xs">
                                {project.architecture.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="bg-muted/40 border border-border/50 rounded-xl p-3 text-muted-foreground leading-relaxed"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Measurable Impact */}
                        <div
                            className="glass-card rounded-3xl p-6 space-y-2 border"
                            style={{ borderColor: `${project.accent}30` }}
                        >
                            <span className="section-label block text-muted-foreground">Measured Result</span>
                            <p className="text-sm sm:text-base font-extrabold text-foreground">{project.impact}</p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Card */}
                <div className="glass-card rounded-3xl p-6 sm:p-10 text-center space-y-4 cyan-glow">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">Interested in building a similar AI system?</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                        Let&apos;s collaborate to design scalable RAG pipelines, multi-tenant AI backends, or enterprise full-stack applications.
                    </p>
                    <div className="pt-2">
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-accent transition-all shadow-lg hover:shadow-primary/30"
                        >
                            Get In Touch
                            <ArrowUpRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
