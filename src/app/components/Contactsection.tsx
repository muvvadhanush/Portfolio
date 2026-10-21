'use client';

import React, { useEffect, useRef, useState } from 'react';
import { EnvelopeIcon, PhoneIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            } else {
                setErrorMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setErrorMessage('Unable to send message right now. Please try again later.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <section id="contact" className="py-16 sm:py-24" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="reveal-hidden mb-8 sm:mb-16">
                    <span className="section-label text-primary block mb-2 sm:mb-4">Get In Touch</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                        Let&apos;s{' '}
                        <span className="text-gradient-cyan">Connect</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 sm:gap-12">
                    {/* Left: Info */}
                    <div className="lg:col-span-5 space-y-6 sm:space-y-8">
                        <div className="reveal-hidden">
                            <p className="text-muted-foreground text-xs sm:text-base leading-relaxed">
                                I&apos;d love to hear from you. Whether you have a project in mind, want to collaborate,
                                or just want to discuss AI architectures — my inbox is always open.
                            </p>
                        </div>

                        <div className="reveal-hidden space-y-3 sm:space-y-4" style={{ transitionDelay: '100ms' }}>
                            <a
                                href="mailto:dhanushmuvva@gmail.com"
                                className="flex items-center gap-3.5 glass-card rounded-xl sm:rounded-2xl p-3.5 sm:p-5 hover:border-primary/30 transition-all group"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                </div>
                                <div className="min-w-0">
                                    <p className="section-label text-muted-foreground text-[9px] sm:text-[10px]">Email</p>
                                    <p className="text-xs sm:text-sm font-semibold text-foreground truncate">dhanushmuvva@gmail.com</p>
                                </div>
                                <ArrowUpRightIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary ml-auto transition-colors flex-shrink-0" />
                            </a>

                            <a
                                href="tel:+917329995385"
                                className="flex items-center gap-3.5 glass-card rounded-xl sm:rounded-2xl p-3.5 sm:p-5 hover:border-primary/30 transition-all group"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                </div>
                                <div className="min-w-0">
                                    <p className="section-label text-muted-foreground text-[9px] sm:text-[10px]">Phone</p>
                                    <p className="text-xs sm:text-sm font-semibold text-foreground truncate">+91 73299 95385</p>
                                </div>
                                <ArrowUpRightIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary ml-auto transition-colors flex-shrink-0" />
                            </a>
                        </div>

                        <div className="reveal-hidden space-y-2 sm:space-y-3" style={{ transitionDelay: '200ms' }}>
                            <p className="section-label text-muted-foreground text-[10px]">Social Profiles</p>
                            <div className="flex gap-2.5 sm:gap-3">
                                {[
                                    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muvva-babu-dhanush-kumar-198b81261' },
                                    { label: 'GitHub', href: 'https://github.com/BabuDhanushKumar' },
                                ].map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 sm:flex-initial flex items-center justify-center gap-2 glass-card rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-muted-foreground hover:text-primary hover:border-primary/30 transition-all active:scale-95"
                                    >
                                        {link.label}
                                        <ArrowUpRightIcon className="w-3.5 h-3.5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Dark card with quote */}
                        <div
                            className="reveal-hidden glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary/15 cyan-glow"
                            style={{ transitionDelay: '300ms' }}
                        >
                            <p className="text-xs sm:text-sm italic text-muted-foreground leading-relaxed">
                                &ldquo;Passionate about building innovative AI tools that solve real-world industrial challenges.&rdquo;
                            </p>
                            <p className="section-label text-primary mt-2 sm:mt-3 text-[10px]">— Dhanush Kumar</p>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-7">
                        <div className="reveal-hidden glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10" style={{ transitionDelay: '100ms' }}>
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-10 sm:py-12 text-center space-y-3 sm:space-y-4">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                                        <span className="text-2xl text-primary font-bold">✓</span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-foreground">Message Sent!</h3>
                                    <p className="text-muted-foreground text-xs sm:text-sm max-w-sm">
                                        Thanks for reaching out. I&apos;ll get back to you within 1 business day.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-primary text-xs sm:text-sm font-semibold hover:underline pt-2"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    {errorMessage && (
                                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 sm:p-4 text-xs font-semibold text-red-400">
                                            {errorMessage}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                        <div className="space-y-1.5 sm:space-y-2">
                                            <label htmlFor="name" className="section-label text-muted-foreground block text-[10px]">
                                                Your Name
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your Name"
                                                className="w-full bg-muted/40 border border-border/60 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-muted/60 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-1.5 sm:space-y-2">
                                            <label htmlFor="email" className="section-label text-muted-foreground block text-[10px]">
                                                Email Address
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="you@company.com"
                                                className="w-full bg-muted/40 border border-border/60 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-muted/60 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label htmlFor="message" className="section-label text-muted-foreground block text-[10px]">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="I'd like to discuss a project opportunity..."
                                            className="w-full bg-muted/40 border border-border/60 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-muted/60 transition-all resize-none sm:rows-6"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-primary text-primary-foreground py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm hover:bg-accent active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                                Sending...
                                            </span>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}