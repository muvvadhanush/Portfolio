import React from 'react';

export default function Footer() {
    return (
        <footer className="border-t border-border/50 py-8 bg-background">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-muted-foreground text-sm font-medium">
                    © 2025 Muvva Babu Dhanush Kumar. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a
                        href="https://www.linkedin.com/in/muvva-babu-dhanush-kumar-198b81261"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/BabuDhanushKumar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                    >
                        GitHub
                    </a>
                    <a
                        href="mailto:dhanushmuvva@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}