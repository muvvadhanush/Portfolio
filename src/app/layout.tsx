import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Dhanush Kumar — AI & ML Engineer',
  description: 'Portfolio of Muvva Babu Dhanush Kumar, AI & ML Engineer specializing in RAG systems, multi-tenant chatbots, and intelligent full-stack applications.',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
  openGraph: {
    title: 'Dhanush Kumar — AI & ML Engineer',
    description: 'AI & ML Engineer specializing in RAG systems, multi-tenant chatbots, and intelligent full-stack applications.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Dhanush Kumar Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/assests/image.png', width: 800, height: 800, alt: 'Dhanush Kumar' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhanush Kumar — AI & ML Engineer',
    description: 'AI & ML Engineer specializing in RAG systems, multi-tenant chatbots, and intelligent full-stack applications.',
    images: ['/assests/image.png'],
  },
  icons: {
    icon: [
      { url: '/assests/image.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/assests/image.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Muvva Babu Dhanush Kumar',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
              jobTitle: 'AI & ML Engineer',
              description: 'AI & ML Engineer specializing in RAG systems, multi-tenant chatbots, and intelligent full-stack applications.',
              sameAs: [
                'https://www.linkedin.com/in/muvva-babu-dhanush-kumar-198b81261',
                'https://github.com/BabuDhanushKumar',
              ],
            }),
          }}
        />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fdhanushmuv7480back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.19" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></head>
      <body className={plusJakartaSans.className}>
        {children}
</body>
    </html>
  );
}