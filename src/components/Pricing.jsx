import React from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
    {
        name: "Starter",
        price: "$2,995",
        description: "Perfect for bug fixes and small features.",
        features: [
            "2-3 day turnaround",
            "Slack communication",
            "Trello board access",
            "Bug fixes & maintenance",
            "Weekly updates"
        ]
    },
    {
        name: "Growth",
        price: "$4,995",
        popular: true,
        description: "Best for active development and scaling.",
        features: [
            "1-2 day turnaround",
            "Priority Slack support",
            "Design systems included",
            "Complex feature builds",
            "API integrations",
            "Performance optimization"
        ]
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For large platforms needing dedicated attention.",
        features: [
            "Dedicated support",
            "Custom SLAs",
            "Architecture planning",
            "Security audits",
            "24/7 Monitoring",
            "White-label options"
        ]
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 px-6 bg-secondary/20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Grow on your own terms</h2>
                    <p className="text-gray-400 text-lg">Simple monthly pricing. Pause or cancel anytime.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative p-8 rounded-2xl border ${plan.popular ? 'bg-white/5 border-white/20' : 'bg-card border-white/5'} flex flex-col`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black font-bold text-sm rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-3xl font-bold">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-gray-500">/mo</span>}
                                </div>
                                <p className="text-sm text-gray-400">{plan.description}</p>
                            </div>

                            <div className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, f) => (
                                    <div key={f} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-white shrink-0" />
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a href="https://cal.com/aleembuilds" target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button
                                    variant={plan.popular ? "default" : "secondary"}
                                    className="w-full"
                                >
                                    Get started
                                </Button>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
