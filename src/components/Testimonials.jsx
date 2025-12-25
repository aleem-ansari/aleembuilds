import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        text: "It doesnt get better than Aleem. Within 5 mins he solved an issue which I was stuck on for 2 days. He has solid grip on Bubble.io elements and workflows. He is my go to person for any issues.",
        author: "Burhan Ahmad",
        role: "Founder, b2bears"
    },
    {
        text: "Aleem is the Bubble Dev unicorn every founder dreams of hiring. He exceeded every expectation in skill, partnership, communication, and innovation. He helped turn my vision into a fully functional product.",
        author: "Megan Mitchell",
        role: "Founder, GenieMVP"
    },
    {
        text: "Aleem is a critical thinker and an extremely hard worker. He is highly engaged and motivated on the project, something which, as founders, we are so appreciative of. Cannot recommend working with Aleem enough.",
        author: "Aida Fernandez Brillet",
        role: "Co-Founder, StockFink"
    },
    {
        text: "Aleem has been an outstanding collaborator — highly reliable, proactive, and detail-oriented. He consistently delivers high-quality work with clear communication and a strong sense of ownership. Whether it’s handling technical tasks, refining workflows, or managing follow-ups, Aleem demonstrates initiative and professionalism every step of the way.",
        author: "Jeff Abrams",
        role: "Co-Founder, Weekly Accounting"
    },
    {
        text: "He is patient, knowledgeable and I can consider even better than Big agencies. He tries different things to get it to work as required. And most important he is honest.",
        author: "Robert Chang",
        role: "Upwork Client"
    },
    {
        text: "Aleem is a delight! Lifesaver. He is a joy to work with. Extremely talented, patient, kind, and helpful. He is an asset to any team and delivers so much value and good energy.",
        author: "Megan Mitchell",
        role: "Founder, GenieMVP"
    },
    {
        text: "Aleem has been an outstanding collaborator — highly reliable, proactive, and detail-oriented. He consistently delivers high-quality work with clear communication and a strong sense of ownership.",
        author: "Sarah Mitchell",
        role: "Founder, SaaS Platform"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold">Trusted by founders</h2>
            </div>

            <div className="mask-gradient-x flex gap-8 overflow-hidden">
                <motion.div
                    className="flex gap-8 min-w-full"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="w-[400px] shrink-0 p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm"
                        >
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    {t.author[0]}
                                </div>
                                <div>
                                    <div className="font-bold">{t.author}</div>
                                    <div className="text-sm text-gray-500">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
