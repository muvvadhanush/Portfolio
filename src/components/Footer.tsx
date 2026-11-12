import React from 'react';
import Link from 'next/link';

const footerLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
    return (
        <footer className="border-t border-border/50 py-8 bg-background">
            <div className="site-container flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
                {/* Brand */}
                <Link href="/#home" className="flex items-center gap-2.5 group">
                    <div className="w-7 h-7 rounded-lg overflow-hidden border border-primary/40 flex-shrink-0">
                        <img src="/icon-dark.png" alt="Muvva Babu Dhanush Kumar Logo" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm tracking-tight text-foreground group-hover:text-primary transition-colors">
                        Muvva Babu Dhanush Kumar
                    </span>
                </Link>

                {/* Center Nav */}
                <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Copyright */}
                <p className="text-muted-foreground text-xs font-medium">
                    © {new Date().getFullYear()} Muvva Babu Dhanush Kumar. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
