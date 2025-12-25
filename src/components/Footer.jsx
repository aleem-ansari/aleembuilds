import React from 'react';

export function Footer() {
    return (
        <footer className="py-20 px-6 border-t border-white/5 bg-black">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
                <div className="md:w-1/3">
                    <div className="flex items-center gap-2 mb-6">
                        <img src="/logo.png" alt="Aleem Builds" className="h-8 w-auto object-contain" />
                    </div>
                    <p className="text-gray-500 text-sm">
                        © 2024 Aleem Builds.<br />
                        All rights reserved.
                    </p>
                </div>


            </div>
        </footer>
    );
}
