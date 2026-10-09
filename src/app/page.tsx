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
import FaqSection from './components/Faqsection';
import ContactSection from './components/Contactsection';

export const metadata: Metadata = {
    title: 'Muvva Babu Dhanush Kumar — AI & ML Engineer Portfolio',
    description: 'Portfolio of Muvva Babu Dhanush Kumar, AI & ML Engineer specializing in RAG systems, multi-tenant chatbots, agentic workflow automation, and intelligent full-stack applications.',
    alternates: {
        canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://muvvadhanush.com',
    },
};

export default function HomePage() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            <Header />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <CertificationsSection />
            <FaqSection />
            <ContactSection />
            <Footer />
        </main>
    );
}