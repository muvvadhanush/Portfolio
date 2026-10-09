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
        <section id="contact" className="py-24" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="reveal-hidden mb-16">
                    <span className="section-label text-primary block mb-4">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                        Let&apos;s{' '}
                        <span className="text-gradient-cyan">Connect</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left: Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="reveal-hidden">
                            <p className="text-muted-foreground text-base leading-relaxed">
                                I&apos;d love to hear from you. Whether you have a project in mind, want to collaborate,
                                or just want to say hi — my inbox is always open.
                            </p>
                        </div>

                        <div className="reveal-hidden space-y-4" style={{ transitionDelay: '100ms' }}>
                            <a
                                href="mailto:dhanushmuvva@gmail.com"
                                className="flex items-center gap-4 glass-card rounded-2xl p-5 hover:border-primary/30 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <EnvelopeIcon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="section-label text-muted-foreground">Email</p>
                                    <p className="text-sm font-semibold text-foreground">dhanushmuvva@gmail.com</p>
                                </div>
                                <ArrowUpRightIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary ml-auto transition-colors" />
                            </a>

                            <a
                                href="tel:+917329995385"
                                className="flex items-center gap-4 glass-card rounded-2xl p-5 hover:border-primary/30 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <PhoneIcon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="section-label text-muted-foreground">Phone</p>
                                    <p className="text-sm font-semibold text-foreground">+91 73299 95385</p>
                                </div>
                                <ArrowUpRightIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary ml-auto transition-colors" />
                            </a>
                        </div>

                        <div className="reveal-hidden space-y-3" style={{ transitionDelay: '200ms' }}>
                            <p className="section-label text-muted-foreground">Social Links</p>
                            <div className="flex gap-3">
                                {[
                                    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muvva-babu-dhanush-kumar-198b81261' },
                                    { label: 'GitHub', href: 'https://github.com/BabuDhanushKumar' },
                                ].map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 glass-card rounded-xl px-5 py-3 text-sm font-bold text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                                    >
                                        {link.label}
                                        <ArrowUpRightIcon className="w-3.5 h-3.5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Dark card with quote */}
                        <div
                            className="reveal-hidden glass-card rounded-2xl p-6 border border-primary/15 cyan-glow"
                            style={{ transitionDelay: '300ms' }}
                        >
                            <p className="text-sm italic text-muted-foreground leading-relaxed">
                                &ldquo;Passionate about building innovative AI tools that solve real-world industrial challenges.&rdquo;
                            </p>
                            <p className="section-label text-primary mt-3">— Dhanush Kumar</p>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-7">
                        <div className="reveal-hidden glass-card rounded-3xl p-8 md:p-10" style={{ transitionDelay: '100ms' }}>
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                                        <span className="text-2xl">✓</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                                    <p className="text-muted-foreground text-sm">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-primary text-sm font-semibold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {errorMessage && (
                                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-xs font-semibold text-red-400">
                                            {errorMessage}
                                        </div>
                                    )}
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="section-label text-muted-foreground block">
                                                Your Name
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Rahul Sharma"
                                                className="w-full bg-muted/40 border border-border/60 rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-muted/60 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="section-label text-muted-foreground block">
                                                Email Address
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="rahul@company.com"
                                                className="w-full bg-muted/40 border border-border/60 rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-muted/60 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="section-label text-muted-foreground block">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="I'd like to discuss a project opportunity..."
                                            className="w-full bg-muted/40 border border-border/60 rounded-xl px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-muted/60 transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-sm hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
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