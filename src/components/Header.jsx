import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-white/5"
        >
            <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Aleem Builds" className="h-8 w-auto object-contain" />
            </div>
            <a href="https://cal.com/aleembuilds" target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="sm" className="font-semibold">
                    Start shipping
                </Button>
            </a>
        </motion.header>
    );
}
