import React from 'react';
import { Calendar } from 'lucide-react';

interface ContactButtonProps {
  fullWidth?: boolean;
  large?: boolean;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ fullWidth = false, large = false }) => {
  return (
    <a 
      href="https://cal.com/soham-nayak-04/30min" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`
        ${fullWidth ? 'w-full' : ''} 
        ${large ? 'px-8 py-4 text-lg' : 'px-4 py-2 text-sm'}
        inline-flex items-center justify-center gap-2 
        bg-gradient-to-r from-purple-600 to-pink-600 
        hover:from-purple-700 hover:to-pink-700
        text-white font-medium rounded-md 
        transform transition-all duration-300 
        hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
      `}
    >
      <Calendar size={large ? 20 : 16} />
      <span>Book a Call</span>
    </a>
  );
};