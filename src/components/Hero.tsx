import React from 'react';
import { Rocket, CheckCircle, Clock } from 'lucide-react';
import { ContactButton } from './ContactButton';

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-600/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-bounce-slow mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm font-semibold">
              Fast. Reliable. Efficient.
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Turn Your Vision Into Reality <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Faster</span>
          </h1>
          
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 inline-block mb-6 px-6 py-3 rounded-lg text-xl md:text-2xl font-bold transform rotate-1 shadow-lg">
            Build Your MVP in 14 Days
          </div>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We design, develop, and deliver high-quality minimum viable products 
            that help startups validate ideas and secure funding quickly.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <ContactButton large />
            <a 
              href="#pricing" 
              className="px-8 py-4 text-lg inline-flex items-center justify-center gap-2 
                bg-gray-800 hover:bg-gray-700 
                text-white font-medium rounded-md border border-gray-700
                transform transition-all duration-300 
                hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              View Pricing
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-400" size={20} />
              <span>No-code friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-blue-400" size={20} />
              <span>14-day delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="text-purple-400" size={20} />
              <span>Startup ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};