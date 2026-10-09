import React from 'react';
import type { Metadata } from 'next';
import ProjectsClientView from './ProjectsClientView';
import { projectsData } from '@/data/projects';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://muvvadhanush.com';

export const metadata: Metadata = {
    title: 'All Projects — AI & ML Systems Showcase | Muvva Babu Dhanush Kumar',
    description: 'Explore all AI engineering projects, RAG systems, multi-agent frameworks, SaaS products, machine learning models, and full-stack software built by Muvva Babu Dhanush Kumar.',
    alternates: {
        canonical: `${siteUrl}/projects`,
    },
    openGraph: {
        title: 'All AI & ML Projects — Muvva Babu Dhanush Kumar',
        description: 'Complete showcase of RAG architectures, multi-tenant AI chatbots, agentic workflow automation, and machine learning models.',
        url: `${siteUrl}/projects`,
        type: 'website',
    },
};

export default function AllProjectsPage() {
    const collectionSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'AI & ML Projects Portfolio — Muvva Babu Dhanush Kumar',
        description: 'Complete collection of enterprise AI systems, RAG pipelines, and full-stack applications.',
        url: `${siteUrl}/projects`,
        hasPart: projectsData.map((project) => ({
            '@type': 'SoftwareApplication',
            name: project.title,
            description: project.description,
            applicationCategory: project.category,
            url: `${siteUrl}/projects/${project.id}`,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />
            <ProjectsClientView />
        </>
    );
}
