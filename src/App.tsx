import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PricingPlans } from './components/PricingPlans';
import { PastWork } from './components/PastWork';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent my-8" />
        <PastWork />
        <PricingPlans />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
