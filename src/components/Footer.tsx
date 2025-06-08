import React from 'react';
import { Calendar, Mail, Twitter, Linkedin, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 relative">
      {/* Top border gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              CraftMVP
            </a>
            <p className="mt-4 text-gray-400">
              We turn your ideas into reality in just 14 days. Rapid MVP development for startups and entrepreneurs.
            </p>
          </div>
          
          {/* Quick links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#work" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://cal.com/soham-nayak-04/30min" 
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Calendar size={16} />
                  <span>Schedule a call</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:sohamnayak04@gmail.com" 
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={16} />
                  <span>sohamnayak04@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://x.com/soham_nayak04" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all"
              >
                <Twitter size={18} />
              </a>
              {/* <a 
                href="" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all"
              >
                <Github size={18} />
              </a> */}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} CraftMVP. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};