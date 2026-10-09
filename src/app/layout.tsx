import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { faqsData } from '@/data/faqs';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://muvvadhanush.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B0F17',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Muvva Babu Dhanush Kumar — AI & ML Engineer | RAG & Multi-Agent Specialist',
    template: '%s | Muvva Babu Dhanush Kumar',
  },
  description:
    'Official portfolio of Muvva Babu Dhanush Kumar, AI & ML Engineer specializing in Retrieval-Augmented Generation (RAG), multi-tenant chatbots, pgvector, dual-provider LLM routing (GPT-4o + Groq Llama-3), agentic tax automation, and Next.js applications.',
  keywords: [
    'Muvva Babu Dhanush Kumar',
    'Babu Dhanush Kumar',
    'Dhanush Kumar AI Engineer',
    'AI & ML Engineer',
    'RAG Systems Engineer',
    'Agentic AI Specialist',
    'Multi-Agent Automation',
    'pgvector Developer',
    'Azure OpenAI Specialist',
    'Next.js 15 AI Developer',
    'Python AI Engineer',
    'Dual-Provider LLM Routing',
    'Neural Bot AI',
    'India AI ML Engineer',
  ],
  authors: [{ name: 'Muvva Babu Dhanush Kumar', url: siteUrl }],
  creator: 'Muvva Babu Dhanush Kumar',
  publisher: 'Muvva Babu Dhanush Kumar',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Muvva Babu Dhanush Kumar — AI & ML Engineer Portfolio',
    description:
      'AI & ML Engineer specializing in RAG architectures, multi-tenant AI chatbots, agentic workflow automation, pgvector, and intelligent web applications.',
    url: siteUrl,
    siteName: 'Muvva Babu Dhanush Kumar Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/assets/image.png',
        width: 1200,
        height: 1200,
        alt: 'Muvva Babu Dhanush Kumar — AI & ML Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muvva Babu Dhanush Kumar — AI & ML Engineer',
    description:
      'AI & ML Engineer specializing in RAG architectures, multi-tenant AI chatbots, agentic workflow automation, pgvector, and intelligent web applications.',
    images: ['/assets/image.png'],
    creator: '@BabuDhanushKumar',
  },
  icons: {
    icon: [
      { url: '/assets/image.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [{ url: '/assets/image.png', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Construct JSON-LD structured schemas
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muvva Babu Dhanush Kumar',
    alternateName: ['Babu Dhanush Kumar', 'Dhanush Kumar'],
    url: siteUrl,
    image: `${siteUrl}/assets/image.png`,
    jobTitle: 'AI & ML Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Algoleap Technologies',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Mohan Babu University',
    },
    description:
      'AI & ML Engineer specializing in Retrieval-Augmented Generation (RAG) systems, multi-tenant chatbots, pgvector, agentic workflow automation, and Next.js applications.',
    email: 'mailto:muvvadhanush7480@gmail.com',
    sameAs: [
      'https://www.linkedin.com/in/muvva-babu-dhanush-kumar-198b81261',
      'https://github.com/BabuDhanushKumar',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Retrieval-Augmented Generation (RAG)',
      'Agentic AI & Multi-Agent Systems',
      'Dual-Provider LLM Routing (GPT-4o & Groq Llama-3)',
      'PostgreSQL & pgvector',
      'Python, FastAPI & Flask',
      'Node.js & Express',
      'Next.js & React',
      'Azure OpenAI Service',
      'PyTorch & Scikit-learn',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'AWS Certified Cloud Practitioner',
        credentialCategory: 'Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Amazon Web Services',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Microsoft Certified: Azure AI Fundamentals',
        credentialCategory: 'Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Microsoft',
        },
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Muvva Babu Dhanush Kumar Portfolio',
    url: siteUrl,
    description:
      'Official engineering portfolio and showcase of AI/ML projects by Muvva Babu Dhanush Kumar.',
    publisher: {
      '@type': 'Person',
      name: 'Muvva Babu Dhanush Kumar',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqsData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <script
          type="module"
          async
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fdhanushmuv7480back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.19"
        />
        <script
          type="module"
          defer
          src="https://static.rocket.new/rocket-shot.js?v=0.0.2"
        />
      </head>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}