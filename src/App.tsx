import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PricingPlans } from './components/PricingPlans';
import { PastWork } from './components/PastWork';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <PricingPlans />
        <PastWork />
      </main>
      <Footer />
    </div>
  );
}

export default App;