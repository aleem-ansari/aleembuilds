import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Zap } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-background to-background pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8 hover:bg-white/10 transition-colors">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                        Accepting new clients for January
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                        Ship weekly <span className="text-[#797979]">Bubble improvements</span> without the overhead.
                    </h1>

                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        I help startup founders and agencies build, scale, and maintain their Bubble applications with senior-level expertise on demand.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a href="https://cal.com/aleembuilds" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button size="xl" className="text-lg w-full">
                                Start shipping
                            </Button>
                        </a>
                        <a href="#pricing" className="w-full sm:w-auto">
                            <Button variant="secondary" size="xl" className="text-lg w-full">
                                View pricing
                            </Button>
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 mb-20">
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 fill-white text-white" />
                            <Star className="w-4 h-4 fill-white text-white" />
                            <Star className="w-4 h-4 fill-white text-white" />
                            <Star className="w-4 h-4 fill-white text-white" />
                            <Star className="w-4 h-4 fill-white text-white" />
                            <span className="text-white ml-2 font-medium">5.0 Star Rating</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-700 rounded-full hidden sm:block"></div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                            <span>Certified Bubble Expert</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Recent Improvements removed */}
        </section>
    );
}
