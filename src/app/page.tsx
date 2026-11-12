import React from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import HeroSection from './components/Herosection';

const AboutSection = dynamic(() => import('./components/Aboutsection'));
const SkillsSection = dynamic(() => import('./components/Skillssection'));
const ProjectsSection = dynamic(() => import('./components/Projectssection'));
const ExperienceSection = dynamic(() => import('./components/Experiencesection'));
const CertificationsSection = dynamic(() => import('./components/Certificatesection'));
const ContactSection = dynamic(() => import('./components/Contactsection'));
const Footer = dynamic(() => import('@/components/Footer'));

export const metadata: Metadata = {
    title: 'Muvva Babu Dhanush Kumar — AI & ML Engineer Portfolio',
    description: 'Portfolio of Muvva Babu Dhanush Kumar, AI & ML Engineer specializing in RAG systems, multi-tenant chatbots, agentic workflow automation, and intelligent full-stack applications.',
    alternates: {
        canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://dhanushmuvva.in',
    },
};

export default function HomePage() {
    return (
        <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
            <Header />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <CertificationsSection />
            {/* <FaqSection /> */}
            <ContactSection />
            <Footer />
        </main>
    );
}
