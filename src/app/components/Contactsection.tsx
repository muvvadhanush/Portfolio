'use client';

import React, { useEffect, useRef, useState } from 'react';
import { EnvelopeIcon, PhoneIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

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
        } catch {
            setErrorMessage('Unable to send message right now. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-14 sm:py-20 lg:py-24 scroll-mt-20" ref={sectionRef}>
            <div className="site-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full min-w-0">
                    {/* Left Column (5 cols): Invitation, Direct Pills & Socials */}
                    <div className="lg:col-span-5 space-y-5 min-w-0 w-full">
                        <div className="reveal-hidden">
                            <div className="inline-flex items-center gap-2 mb-3">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                <span className="section-label text-primary font-bold tracking-[0.2em] text-[11px] uppercase">
                                    Get In Touch
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.12] mb-3">
                                Let&apos;s <span className="text-gradient-cyan">Connect</span>
                            </h2>
                            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                                Have a project, AI workflow, or technical challenge you want to discuss? I&apos;d love to hear from you.
                            </p>
                        </div>

                        {/* Compact Direct Contact Pills */}
                        <div className="reveal-hidden flex flex-wrap gap-2.5" style={{ transitionDelay: '100ms' }}>
                            <a
                                href="mailto:dhanushmuvva@gmail.com"
                                className="inline-flex items-center gap-2.5 glass-card rounded-full px-4 py-2.5 border border-border/70 hover:border-primary/40 transition-all group max-w-full"
                            >
                                <EnvelopeIcon className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                                    dhanushmuvva@gmail.com
                                </span>
                            </a>

                            <a
                                href="tel:+917329995385"
                                className="inline-flex items-center gap-2.5 glass-card rounded-full px-4 py-2.5 border border-border/70 hover:border-primary/40 transition-all group"
                            >
                                <PhoneIcon className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                                    +91 73299 95385
                                </span>
                            </a>
                        </div>

                        {/* Circular Social Links */}
                        <div className="reveal-hidden flex items-center gap-3 pt-1" style={{ transitionDelay: '180ms' }}>
                            <a
                                href="https://www.linkedin.com/in/muvva-babu-dhanush-kumar-198b81261"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="w-9 h-9 rounded-full glass-card border border-border/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                            >
                                <span className="font-extrabold text-xs">in</span>
                            </a>
                            <a
                                href="https://github.com/BabuDhanushKumar"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="w-9 h-9 rounded-full glass-card border border-border/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="mailto:dhanushmuvva@gmail.com"
                                aria-label="Send Email"
                                className="w-9 h-9 rounded-full glass-card border border-border/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                            >
                                <EnvelopeIcon className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column (7 cols / ~58% width): Compact Contact Form */}
                    <div className="lg:col-span-7 w-full min-w-0">
                        <div
                            className="reveal-hidden glass-card rounded-[24px] p-5 sm:p-7 border border-border/60"
                            style={{ transitionDelay: '100ms' }}
                        >
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-10 text-center space-y-3">
                                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
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
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {errorMessage && (
                                        <div className="bg-red-500/10 border border-red-500/30 rounded-[14px] p-3 text-xs font-semibold text-red-400">
                                            {errorMessage}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="sr-only">
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
                                                className="w-full bg-muted/40 border border-border/60 rounded-[14px] px-4 py-3 text-xs sm:text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-muted/60 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="sr-only">
                                                Your Email
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your Email"
                                                className="w-full bg-muted/40 border border-border/60 rounded-[14px] px-4 py-3 text-xs sm:text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-muted/60 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="sr-only">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your Message"
                                            className="w-full bg-muted/40 border border-border/60 rounded-[14px] px-4 py-3 text-xs sm:text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-muted/60 transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-full font-bold text-xs sm:text-sm hover:bg-accent active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <>
                                                <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <PaperAirplaneIcon className="w-4 h-4" />
                                            </>
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
