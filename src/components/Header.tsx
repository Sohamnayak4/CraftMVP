import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ContactButton } from './ContactButton';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold">
            <img src="/favicon.png" alt="CraftMVP Logo" className="h-8 w-8 rounded-full" />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              CraftMVP
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#work" className="text-gray-300 hover:text-white transition-colors">
              Our Work
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <ContactButton />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a 
              href="#work" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our Work
            </a>
            <a 
              href="#pricing" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <ContactButton fullWidth />
          </nav>
        </div>
      )}
    </header>
  );
};