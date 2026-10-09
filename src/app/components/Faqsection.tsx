'use client';

import React, { useState } from 'react';
import { faqsData } from '@/data/faqs';
import { ChevronDownIcon, QuestionMarkCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function FaqSection() {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIdx(openIdx === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 relative overflow-hidden bg-background/50">
            {/* Background Mesh Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[500px] pointer-events-none z-0">
                <div
                    className="absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full blur-[140px] opacity-15"
                    style={{ background: 'radial-gradient(circle, rgba(110,231,247,0.3) 0%, transparent 70%)' }}
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center space-y-4 mb-16">
                    <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full border border-primary/20 text-xs font-bold text-primary">
                        <SparklesIcon className="w-4 h-4" />
                        <span>Answer Engine & Search FAQ</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                        Frequently Asked <span className="text-gradient-cyan">Questions</span>
                    </h2>

                    <p className="text-muted-foreground text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
                        Direct answers regarding engineering expertise, AI project architecture, technical stack, and hiring options.
                    </p>
                </div>

                {/* FAQ Accordion List */}
                <div className="space-y-4">
                    {faqsData.map((faq, index) => {
                        const isOpen = openIdx === index;
                        return (
                            <div
                                key={index}
                                className={`glass-card rounded-2xl sm:rounded-3xl transition-all duration-300 border ${
                                    isOpen
                                        ? 'border-primary/50 shadow-lg shadow-primary/10 bg-muted/40'
                                        : 'border-border/60 hover:border-primary/30'
                                } overflow-hidden`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex items-center gap-3.5">
                                        <div
                                            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                                                isOpen ? 'bg-primary text-primary-foreground' : 'bg-muted/60 text-primary'
                                            }`}
                                        >
                                            <QuestionMarkCircleIcon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-sm sm:text-lg font-bold text-foreground pr-2">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <ChevronDownIcon
                                        className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                                            isOpen ? 'rotate-180 text-primary' : ''
                                        }`}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-border/30 text-xs sm:text-sm text-muted-foreground leading-relaxed animate-fadeIn">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
