import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code2, Rocket, Users } from 'lucide-react';

const solutions = [
    {
        icon: Shield,
        title: "Gold-standard security",
        description: "I implement rigorous security rules, privacy policies, and data protection standards to keep your users safe."
    },
    {
        icon: Users,
        title: "Direct access to expert",
        description: "No juniors or interns. You work directly with me—a senior Bubble developer who understands business logic."
    },
    {
        icon: Code2,
        title: "Clean, scalable code",
        description: "I refactor your app to use reusable elements, backend workflows, and proper database indexing."
    },
    {
        icon: Rocket,
        title: "Progress you can see",
        description: "Weekly sprints with clear deliverables, video updates, and a transparent Trello board to track everything."
    }
];

export function Solutions() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background gradient blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Turn your Bubble app into a <br /><span className="text-[#797979]">growth engine</span> again.</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {solutions.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-6 p-6 rounded-2xl hover:bg-white/5 transition-colors group"
                        >
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
