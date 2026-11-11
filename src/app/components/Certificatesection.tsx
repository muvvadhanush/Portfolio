'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { ArrowRightIcon, ArrowUpRightIcon, TrophyIcon, XMarkIcon } from '@heroicons/react/24/outline';

const certGroups = [
    {
        group: 'Professional Certifications',
        items: [
            { title: 'Python Full Stack Web Development', issuer: 'Koushalya Tech', img: 'https://dhanushmuvva.in/Certificates/Certificate%20Python%20Full%20Stack%20.jpg' },
            { title: 'JavaScript Essentials 1', issuer: 'Cisco Networking Academy', img: 'https://dhanushmuvva.in/Certificates/Certificate%20JavaScript_Essentials_1_Badge20240424-37-o8cl7i.jpg' },
            { title: 'Tableau', issuer: 'NHCE, Koushalya Tech', img: 'https://dhanushmuvva.in/Certificates/Certificate%20TABLEAU%20.jpg' },
            { title: 'DevOps', issuer: 'NHCE, Kaushalya Tech', img: 'https://dhanushmuvva.in/Certificates/Certificate%20DEVOPS.jpg' },
            { title: 'Network Addressing & Troubleshooting', issuer: 'Cisco Networking Academy', img: 'https://dhanushmuvva.in/Certificates/Certificate%20Network_Addressing_and_Basic_Troubleshooting_Badge20231214-29-u2f3a.jpg' },
            { title: 'MLOps', issuer: 'NHCE, Koushalya Tech', img: 'https://dhanushmuvva.in/Certificates/Certificate%20MLOPS.jpg' },
            { title: 'Introduction to NLP', issuer: 'Great Learning', img: 'https://dhanushmuvva.in/Certificates/NLP%20Certificate%20.jpg' },
            { title: 'AI - Data Quality Analyst', issuer: 'Rooman Technologies', img: 'https://dhanushmuvva.in/Certificates/Rooman_Certificate.jpg' },
            { title: 'Cyber Security & Ethical Hacking', issuer: 'Infosys Springboard', img: 'https://dhanushmuvva.in/Certificates/certificate%20Infosys%20cyber%20security.jpg' },
        ],
    },
    {
        group: 'Workshops',
        items: [
            { title: 'Deep Learning — Industrial Perspective', issuer: 'NHCE', img: 'https://dhanushmuvva.in/Certificates/Deep%20Learning%20Workshop.jpg' },
            { title: 'Prototype Design & Development', issuer: 'NHCE Innovation Council', img: 'https://dhanushmuvva.in/Certificates/E-certificate.jpg' },
        ],
    },
    {
        group: 'Internships & Simulations',
        items: [
            { title: 'Data Science Intern', issuer: 'CodesOnBytes (AICTE)', img: 'https://dhanushmuvva.in/Certificates/Certificate-9287ff26c3df42a6bd816b8c16b42a70.jpg' },
            { title: 'Cloud Computing (AWS)', issuer: 'CloudplusAI (AICTE)', img: 'https://dhanushmuvva.in/Certificates/Certificate%20AWS%2025-1.jpg' },
            { title: 'Data Analytics Job Simulation', issuer: 'Deloitte', img: 'https://dhanushmuvva.in/Certificates/Deloitte.jpg' },
            { title: 'GenAI Powered Data Analytics', issuer: 'Tata Forage', img: 'https://dhanushmuvva.in/Certificates/Tata.jpg' },
        ],
    },
    {
        group: 'Languages & Events',
        items: [
            { title: 'French for You — A1-A2', issuer: 'Udemy', img: 'https://dhanushmuvva.in/Certificates/French%20Certificate.jpg' },
            { title: 'Canwalk2024 — Cancer Awareness', issuer: 'Sankalpa Foundation, Bengaluru', img: 'https://dhanushmuvva.in/Certificates/Certificate%20Sankapa-2139.jpg' },
        ],
    },
];

const totalCertCount = certGroups.reduce((sum, g) => sum + g.items.length, 0);

export default function CertificationsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeGroup, setActiveGroup] = useState(0);
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);
    const [showAllModal, setShowAllModal] = useState(false);

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

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (lightboxImg) {
                    setLightboxImg(null);
                } else if (showAllModal) {
                    setShowAllModal(false);
                }
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxImg, showAllModal]);

    useEffect(() => {
        if (showAllModal || lightboxImg) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [showAllModal, lightboxImg]);

    const spotlightItems = certGroups[activeGroup].items.slice(0, 3);

    return (
        <section id="certifications" className="py-14 sm:py-20 lg:py-24 bg-secondary/20 scroll-mt-20" ref={sectionRef}>
            <div className="site-container">
                {/* Header Row with Category Filters */}
                <div className="reveal-hidden flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-10">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <span className="section-label text-primary font-bold tracking-[0.2em] text-[11px] uppercase">
                                Certifications &amp; Achievements
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.12]">
                            Certifications &amp; <span className="text-gradient-cyan">Achievements</span>
                        </h2>
                    </div>

                    {/* Tab Filters */}
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 max-w-full min-w-0 lg:flex-wrap">
                        {certGroups.map((g, i) => (
                            <button
                                key={g.group}
                                onClick={() => setActiveGroup(i)}
                                className={`px-3.5 py-2 rounded-full text-[11px] sm:text-xs font-bold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                                    activeGroup === i
                                        ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                                        : 'glass-card text-muted-foreground hover:text-foreground hover:border-primary/30 border border-border/60'
                                }`}
                            >
                                {g.group}
                                <span className="ml-1.5 opacity-75">({g.items.length})</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Single 4-Column Row: Top 3 Certificates + 'View all certifications' Action Card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full min-w-0">
                    {spotlightItems.map((cert, i) => (
                        <button
                            key={cert.title}
                            onClick={() => setLightboxImg(cert.img)}
                            className="reveal-hidden glass-card rounded-[20px] overflow-hidden card-hover text-left group border border-border/60 flex flex-col justify-between active:scale-[0.99] transition-transform"
                            style={{ transitionDelay: `${i * 50}ms` }}
                            aria-label={`View certificate: ${cert.title}`}
                        >
                            <div className="aspect-video w-full overflow-hidden bg-muted/50 relative">
                                <AppImage
                                    src={cert.img}
                                    alt={`${cert.title} certificate issued by ${cert.issuer}`}
                                    fill
                                    className="object-cover cert-img-hover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                                    <ArrowUpRightIcon className="w-5 h-5 text-primary" />
                                </div>
                            </div>
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <h3 className="text-xs sm:text-sm font-bold text-foreground leading-snug line-clamp-2 mb-1.5 group-hover:text-primary transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground truncate">
                                    {cert.issuer}
                                </p>
                            </div>
                        </button>
                    ))}

                    {/* 4th Card: View All Certifications Trigger */}
                    <button
                        onClick={() => setShowAllModal(true)}
                        className="reveal-hidden glass-card rounded-[20px] p-5 sm:p-6 border border-primary/25 hover:border-primary/50 card-hover text-left group flex flex-col justify-between min-h-[190px]"
                        style={{ transitionDelay: '150ms' }}
                    >
                        <div className="flex items-center justify-between gap-2 mb-4">
                            <div className="w-10 h-10 rounded-[12px] bg-primary/10 border border-primary/25 flex items-center justify-center text-primary">
                                <TrophyIcon className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                {totalCertCount} Credentials
                            </span>
                        </div>

                        <div>
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                                <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                                    View all certifications
                                </h3>
                                <ArrowRightIcon className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Explore my complete credentials, technical workshops, and simulations.
                            </p>
                        </div>
                    </button>
                </div>
            </div>

            {/* Full Certifications Gallery Modal */}
            {showAllModal && (
                <div
                    className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setShowAllModal(false)}
                >
                    <div
                        className="relative max-w-5xl w-full max-h-[88vh] glass-card rounded-[24px] border border-primary/25 shadow-2xl flex flex-col overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="p-5 sm:p-6 border-b border-border/50 flex items-center justify-between gap-4">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                                    Complete Archive ({totalCertCount})
                                </p>
                                <h3 className="text-lg sm:text-2xl font-extrabold text-foreground">
                                    Certifications &amp; Credentials
                                </h3>
                            </div>
                            <button
                                onClick={() => setShowAllModal(false)}
                                className="w-10 h-10 rounded-full bg-muted/80 border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors flex-shrink-0"
                                aria-label="Close certifications archive"
                            >
                                <XMarkIcon className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Category Filter Pills */}
                        <div className="px-5 sm:px-6 pt-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar border-b border-border/30 flex-shrink-0">
                            {certGroups.map((g, i) => (
                                <button
                                    key={g.group}
                                    onClick={() => setActiveGroup(i)}
                                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 ${
                                        activeGroup === i
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-muted/50 text-muted-foreground hover:text-foreground'
                                    }`}
                                >
                                    {g.group} ({g.items.length})
                                </button>
                            ))}
                        </div>

                        {/* Modal Grid */}
                        <div className="p-5 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {certGroups[activeGroup].items.map((cert) => (
                                <button
                                    key={cert.title}
                                    onClick={() => setLightboxImg(cert.img)}
                                    className="glass-card rounded-[18px] overflow-hidden border border-border/60 hover:border-primary/40 text-left group transition-all"
                                >
                                    <div className="aspect-video w-full overflow-hidden bg-muted/50 relative">
                                        <AppImage
                                            src={cert.img}
                                            alt={`${cert.title} certificate issued by ${cert.issuer}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-3.5">
                                        <h4 className="text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                                            {cert.title}
                                        </h4>
                                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Image Enlarge Lightbox */}
            {lightboxImg && (
                <div
                    className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
                    onClick={() => setLightboxImg(null)}
                >
                    <div
                        className="relative max-w-3xl w-full glass-card rounded-[20px] overflow-hidden shadow-2xl border border-primary/25"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <AppImage
                            src={lightboxImg}
                            alt="Certificate preview enlarged view"
                            width={900}
                            height={640}
                            className="w-full h-auto object-contain max-h-[82vh]"
                            unoptimized
                        />

                        <button
                            onClick={() => setLightboxImg(null)}
                            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-muted/95 border border-border flex items-center justify-center text-foreground hover:bg-muted active:scale-95 transition-all text-sm font-bold shadow-xl"
                            aria-label="Close certificate preview"
                        >
                            <XMarkIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
