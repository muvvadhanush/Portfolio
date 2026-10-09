'use client';

import React, { useEffect, useRef } from 'react';

const skillCategories = [
    {
        category: 'AI & Machine Learning',
        icon: '◈',
        color: 'text-primary',
        skills: ['Generative AI', 'Hybrid RAG', 'Multi-Agent', 'Prompt Engineering', 'Azure OpenAI', 'pgvector', 'Scikit-learn', 'PyTorch'],
    },
    {
        category: 'Languages & Core',
        icon: '{ }',
        color: 'text-cyan-300',
        skills: ['Python', 'JavaScript', 'SQL', 'HTML5', 'CSS3', 'TypeScript'],
    },
    {
        category: 'Backend & APIs',
        icon: '⟳',
        color: 'text-violet-400',
        skills: ['Node.js', 'Express', 'Python (Flask)', 'FastAPI', 'REST APIs', 'JWT Security'],
    },
    {
        category: 'Databases & Vector Stores',
        icon: '⬡',
        color: 'text-blue-400',
        skills: ['PostgreSQL', 'pgvector', 'MySQL', 'Neon Postgres', 'Vector DBs'],
    },
    {
        category: 'Frontend Development',
        icon: '⚡',
        color: 'text-sky-400',
        skills: ['React.js', 'Next.js 15', 'Tailwind CSS', 'Redux', 'Responsive UI'],
    },
    {
        category: 'Data Quality & Analytics',
        icon: '∑',
        color: 'text-emerald-400',
        skills: ['Data Cleaning', 'Data Modeling', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    },
    {
        category: 'DevOps & Tools',
        icon: '☁',
        color: 'text-orange-400',
        skills: ['DevOps', 'Docker', 'AWS', 'Git & GitHub', 'MQTT', 'Vercel'],
    },
    {
        category: 'Soft Skills & Leadership',
        icon: '◇',
        color: 'text-pink-400',
        skills: ['Problem-Solving', 'Communication', 'Attention to Detail', 'Adaptability', 'Agile Teamwork'],
    },
];

export default function SkillsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

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

    return (
        <section id="skills" className="py-20 sm:py-24" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="reveal-hidden mb-12 sm:mb-16">
                    <span className="section-label text-primary block mb-3 sm:mb-4">Technical Stack</span>
                    <div className="flex flex-col md:flex-row md:items-end gap-4 sm:gap-6 justify-between">
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                            Skills &{' '}
                            <span className="text-gradient-cyan">Expertise</span>
                        </h2>
                        <p className="text-muted-foreground max-w-sm text-xs sm:text-sm leading-relaxed">
                            A curated stack built through real-world AI applications, internships, and production deployments.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {skillCategories.map((cat, i) => (
                        <div
                            key={cat.category}
                            className="reveal-hidden glass-card rounded-2xl p-5 sm:p-6 card-hover"
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            <div className="flex items-center gap-3 mb-4 sm:mb-5">
                                <span className={`text-xl sm:text-2xl font-black ${cat.color}`}>{cat.icon}</span>
                                <h3 className="text-xs sm:text-sm font-bold text-foreground">{cat.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="skill-pill text-muted-foreground text-[11px] sm:text-xs font-medium px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}