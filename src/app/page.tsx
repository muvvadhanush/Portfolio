import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/Herosection';
import AboutSection from './components/Aboutsection';
import SkillsSection from './components/Skillssection';
import ProjectsSection from './components/Projectssection';
import ExperienceSection from './components/Experiencesection';
import CertificationsSection from './components/Certificatesection';
import ContactSection from './components/Contactsection';

export const metadata: Metadata = {
    title: 'Muvva Babu Dhanush Kumar — AI & ML Engineer',
    description: 'Portfolio of Muvva Babu Dhanush Kumar, AI & ML Engineer specializing in RAG systems, multi-tenant chatbots, and intelligent full-stack applications.',
};

export default function HomePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: 'Babu Dhanush Kumar — AI & ML Engineer',
                        description: 'Portfolio of Muvva Babu Dhanush Kumar, AI & ML Engineer specializing in RAG systems, multi-tenant chatbots, and intelligent full-stack applications.',
                        url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
                        mainEntity: {
                            '@type': 'Person',
                            name: 'Muvva Babu Dhanush Kumar',
                            jobTitle: 'AI & ML Engineer',
                        },
                    }),
                }}
            />
            <main className="bg-background text-foreground min-h-screen">
                <Header />
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ExperienceSection />
                <CertificationsSection />
                <ContactSection />
                <Footer />
            </main>
        </>
    );
}