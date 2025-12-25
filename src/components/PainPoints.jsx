import React from 'react';
import { AlertTriangle, Clock, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const points = [
    {
        icon: DollarSign,
        title: "Burning cash on agencies",
        description: "Traditional agencies charge $150+/hr with minimum retainers that drain your runway before you find product-market fit."
    },
    {
        icon: Clock,
        title: "Development is too slow",
        description: "Waiting weeks for simple changes or bug fixes means you're losing users and missing opportunities."
    },
    {
        icon: AlertTriangle,
        title: "Technical debt is piling up",
        description: "Spaghetti code and poor database structure are making your app slower and harder to maintain every day."
    }
];

export function PainPoints() {
    return (
        <section className="py-24 px-6 bg-secondary/20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Your app is holding you back</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Scaling a Bubble app is hard when you're fighting against your own codebase.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {points.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-card border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                                <point.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {point.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
