'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

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

export default function CertificationsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeGroup, setActiveGroup] = useState(0);
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);

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
            if (e.key === 'Escape') setLightboxImg(null);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    const currentItems = certGroups[activeGroup].items;

    return (
        <section id="certifications" className="py-20 sm:py-24 bg-secondary/20" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="reveal-hidden mb-10 sm:mb-12">
                    <span className="section-label text-primary block mb-3 sm:mb-4">Credentials</span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                        Certifications &{' '}
                        <span className="text-gradient-cyan">Achievements</span>
                    </h2>
                </div>

                {/* Tab filters */}
                <div className="reveal-hidden flex gap-2 overflow-x-auto no-scrollbar pb-3 sm:flex-wrap mb-8 sm:mb-10">
                    {certGroups.map((g, i) => (
                        <button
                            key={g.group}
                            onClick={() => setActiveGroup(i)}
                            className={`px-4 py-2 sm:px-5 sm:py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                                activeGroup === i
                                    ? 'bg-primary text-primary-foreground shadow-lg'
                                    : 'glass-card text-muted-foreground hover:text-foreground hover:border-primary/30'
                            }`}
                        >
                            {g.group}
                            <span className="ml-1.5 opacity-60">({g.items.length})</span>
                        </button>
                    ))}
                </div>

                {/* Cert grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentItems.map((cert, i) => (
                        <button
                            key={cert.title}
                            onClick={() => setLightboxImg(cert.img)}
                            className="reveal-hidden glass-card rounded-2xl overflow-hidden card-hover text-left group"
                            style={{ transitionDelay: `${i * 50}ms` }}
                            aria-label={`View certificate: ${cert.title}`}
                        >
                            <div className="aspect-video overflow-hidden bg-muted/50 relative">
                                <AppImage
                                    src={cert.img}
                                    alt={`${cert.title} certificate issued by ${cert.issuer}`}
                                    fill
                                    className="object-cover cert-img-hover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
                                    <ArrowUpRightIcon className="w-5 h-5 text-primary" />
                                </div>
                            </div>
                            <div className="p-3.5 sm:p-4">
                                <h4 className="text-xs sm:text-sm font-bold text-foreground leading-snug mb-1">{cert.title}</h4>
                                <p className="section-label text-muted-foreground">{cert.issuer}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxImg && (
                <div
                    className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
                    onClick={() => setLightboxImg(null)}
                >
                    <div
                        className="relative max-w-3xl w-full glass-card rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <AppImage
                            src={lightboxImg}
                            alt="Certificate preview enlarged view"
                            width={900}
                            height={640}
                            className="w-full h-auto object-contain max-h-[85vh]"
                            unoptimized
                        />

                        <button
                            onClick={() => setLightboxImg(null)}
                            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-muted/90 border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors text-sm font-bold shadow-lg"
                            aria-label="Close certificate preview"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}