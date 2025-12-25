import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solutions } from './components/Solutions';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { LastCTA } from './components/LastCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-white/20">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solutions />
        <Pricing />
        <Testimonials />
        <LastCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
