'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
    { label: 'Home', href: '/#home', id: 'home' },
    { label: 'About', href: '/#about', id: 'about' },
    { label: 'Skills', href: '/#skills', id: 'skills' },
    { label: 'Projects', href: '/#projects', id: 'projects' },
    { label: 'Experience', href: '/#experience', id: 'experience' },
    { label: 'Contact', href: '/#contact', id: 'contact' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent background scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );
        navLinks.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled ? 'glass-nav py-2.5' : 'py-4 sm:py-5 bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/#home" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 rounded-lg overflow-hidden border border-primary/40 shadow-sm animate-pulse-glow flex-shrink-0">
                            <img src="/icon-dark.png" alt="Dhanush Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="font-bold text-sm tracking-tight text-foreground block">
                            Dhanush<span className="text-primary">.</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1 bg-muted/40 backdrop-blur-md border border-border/50 rounded-full px-2 py-1.5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                                    activeSection === link.id
                                        ? 'bg-primary text-primary-foreground shadow-lg'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <Link
                        href="/#contact"
                        className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-full text-xs font-bold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-primary/30"
                    >
                        Hire Me
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-muted/60 border border-border text-foreground hover:border-primary/40 active:scale-95 transition-all"
                        aria-label="Toggle navigation menu"
                    >
                        {menuOpen ? <XMarkIcon className="w-5 h-5 text-primary" /> : <Bars3Icon className="w-5 h-5" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 md:hidden animate-fadeIn">
                    <div
                        className="absolute inset-0 bg-background/85 backdrop-blur-xl transition-opacity"
                        onClick={() => setMenuOpen(false)}
                    />
                    <div className="absolute top-20 left-4 right-4 max-h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar glass-card rounded-2xl p-4 sm:p-5 space-y-2 border border-primary/25 shadow-2xl cyan-glow">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/40 px-2">
                            <span className="section-label text-primary text-[10px]">Navigation</span>
                            <span className="text-[10px] text-muted-foreground font-mono">Dhanush.</span>
                        </div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                                    activeSection === link.id
                                        ? 'bg-primary/20 text-primary border border-primary/30'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50 active:bg-muted/70'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-3 border-t border-border/40">
                            <Link
                                href="/#contact"
                                onClick={() => setMenuOpen(false)}
                                className="block text-center bg-primary text-primary-foreground px-4 py-3.5 rounded-xl text-sm font-bold shadow-lg hover:bg-accent active:scale-[0.98] transition-all"
                            >
                                Hire Me
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}