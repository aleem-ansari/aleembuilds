import React from 'react';
import { Button } from './ui/button';

export function LastCTA() {
    return (
        <section className="py-32 px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to stop worrying about your Bubble app?</h2>
                <p className="text-xl text-gray-400 mb-12">
                    Join the founders who sleep soundly knowing their code is in expert hands.
                </p>
                <a href="https://cal.com/aleembuilds" target="_blank" rel="noopener noreferrer">
                    <Button size="xl" className="text-lg px-12">
                        Start shipping
                    </Button>
                </a>
            </div>
        </section>
    );
}
