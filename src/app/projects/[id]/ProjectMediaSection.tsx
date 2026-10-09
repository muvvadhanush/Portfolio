'use client';

import React, { useState } from 'react';
import { ProjectMedia } from '@/data/projects';
import { VideoCameraIcon, PhotoIcon, PlayIcon, SparklesIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface ProjectMediaSectionProps {
    media?: ProjectMedia;
    title: string;
    accent: string;
    icon: string;
}

export default function ProjectMediaSection({ media, title, accent, icon }: ProjectMediaSectionProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const videoUrl = media?.videoUrl;
    const gallery = media?.gallery || [];

    return (
        <div className="space-y-6 mb-12">
            {/* Main Video Demo / Visual Player Container */}
            <div className="glass-card rounded-3xl overflow-hidden border border-border/60 relative group shadow-2xl">
                {videoUrl ? (
                    <div className="relative aspect-video w-full bg-black/90 flex items-center justify-center overflow-hidden">
                        <video
                            controls
                            poster={media?.thumbnail}
                            className="w-full h-full object-contain"
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                        >
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support playing this demo video.
                        </video>
                    </div>
                ) : (
                    /* Fallback High-Impact Visual Banner when Video MP4 is pending upload */
                    <div className="relative aspect-video sm:aspect-[21/9] w-full bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8 sm:p-12 flex flex-col justify-between overflow-hidden">
                        {/* Radial Background Accent Glow */}
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full blur-[120px] opacity-25"
                            style={{ background: `radial-gradient(circle, ${accent}, transparent)` }}
                        />

                        {/* Top Bar */}
                        <div className="relative z-10 flex items-center justify-between">
                            <div className="flex items-center gap-2 bg-muted/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-primary">
                                <VideoCameraIcon className="w-4 h-4" />
                                <span>Video Demo Pipeline</span>
                            </div>
                            <span className="text-xs font-mono text-muted-foreground uppercase">MP4 Showcase</span>
                        </div>

                        {/* Center Icon & Visual Banner Title */}
                        <div className="relative z-10 my-auto text-center space-y-3">
                            <div
                                className="w-20 h-20 rounded-3xl mx-auto flex items-center justify-center text-4xl shadow-2xl backdrop-blur-md border border-white/20 animate-pulse-glow"
                                style={{ background: `linear-gradient(135deg, ${accent}30, rgba(15, 23, 42, 0.9))` }}
                            >
                                {icon}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">{title}</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                                Drop your recorded demo video into <code className="text-primary font-mono text-[11px]">public/assets/projects/`id`/demo.mp4</code> to display live video streaming.
                            </p>
                        </div>

                        {/* Bottom Status */}
                        <div className="relative z-10 flex items-center justify-between text-xs text-muted-foreground border-t border-border/40 pt-4">
                            <div className="flex items-center gap-2">
                                <SparklesIcon className="w-4 h-4 text-primary animate-spin-slow" />
                                <span>High Resolution Media View</span>
                            </div>
                            <span>0% Technical Code Snippets</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Screenshots Gallery Section (If gallery images exist) */}
            {gallery.length > 0 && (
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        <PhotoIcon className="w-4 h-4 text-primary" />
                        <span>Interactive UI Screenshot Gallery</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {gallery.map((imgUrl, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImage(imgUrl)}
                                className="glass-card rounded-2xl overflow-hidden aspect-video relative group border border-border/50 hover:border-primary/40 transition-all text-left"
                            >
                                <img
                                    src={imgUrl}
                                    alt={`${title} screenshot ${idx + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                                    <span className="text-xs font-bold text-white bg-primary/80 px-3 py-1 rounded-full shadow">
                                        Click to Enlarge 🔍
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Lightbox Image Preview Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-background/90 backdrop-blur-2xl flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-4xl w-full glass-card rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Full resolution project preview"
                            className="w-full h-auto object-contain max-h-[85vh]"
                        />

                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors text-lg font-bold shadow-lg"
                        >
                            <XMarkIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
