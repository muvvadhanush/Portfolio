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
        <section id="faq" className="py-16 sm:py-24 relative overflow-hidden bg-background/50">
            {/* Background Mesh Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[500px] pointer-events-none z-0">
                <div
                    className="absolute top-1/3 right-1/4 w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] rounded-full blur-[100px] sm:blur-[140px] opacity-15"
                    style={{ background: 'radial-gradient(circle, rgba(110,231,247,0.3) 0%, transparent 70%)' }}
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 glass-card px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-primary/20 text-[10px] sm:text-xs font-bold text-primary">
                        <SparklesIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>Answer Engine & Search FAQ</span>
                    </div>

                    <h2 className="text-2xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                        Frequently Asked <span className="text-gradient-cyan">Questions</span>
                    </h2>

                    <p className="text-muted-foreground text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
                        Direct answers regarding engineering expertise, AI project architecture, technical stack, and hiring options.
                    </p>
                </div>

                {/* FAQ Accordion List */}
                <div className="space-y-3 sm:space-y-4">
                    {faqsData.map((faq, index) => {
                        const isOpen = openIdx === index;
                        return (
                            <div
                                key={index}
                                className={`glass-card rounded-2xl sm:rounded-3xl transition-all duration-300 border ${isOpen
                                        ? 'border-primary/50 shadow-lg shadow-primary/10 bg-muted/40'
                                        : 'border-border/60 hover:border-primary/30'
                                    } overflow-hidden`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                                        <div
                                            className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-muted/60 text-primary'
                                                }`}
                                        >
                                            <QuestionMarkCircleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                        <h3 className="text-xs sm:text-base font-bold text-foreground leading-snug">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <ChevronDownIcon
                                        className={`w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-primary' : ''
                                            }`}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 border-t border-border/30 text-xs sm:text-sm text-muted-foreground leading-relaxed animate-fadeIn">
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
