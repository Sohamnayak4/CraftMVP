import React from 'react';
import { Check, X, Zap } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  originalPrice: number;
  currentPrice: number;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
}

export const PricingPlans = () => {
  const plans: PricingPlan[] = [
    {
      name: "Landing Page (In 2 Days)",
      originalPrice: 499,
      currentPrice: 199,
      description: "Perfect for validating your idea with a professional landing page.",
      features: [
        { name: "Single page design", included: true },
        { name: "Mobile responsive", included: true },
        { name: "Contact form", included: true },
        { name: "Basic SEO setup", included: true },
        { name: "Email signup integration", included: true },
        { name: "Custom domain setup", included: false },
        { name: "Content creation", included: false },
        { name: "Analytics integration", included: false },
      ],
    },
    {
      name: "Standard Pack",
      originalPrice: 2499,
      currentPrice: 1999,
      description: "Complete MVP with core features to test your product hypothesis.",
      features: [
        { name: "Multi-page application", included: true },
        { name: "User authentication", included: true },
        { name: "3-5 core features", included: true },
        { name: "Mobile responsive", included: true },
        { name: "Payment integration", included: true },
        { name: "Admin dashboard", included: true },
        { name: "API integration", included: false },
        { name: "Advanced analytics", included: false },
      ],
      isPopular: true,
    },
    {
      name: "Pro Pack",
      originalPrice: 3999,
      currentPrice: 2999,
      description: "Full-featured MVP with advanced functionality ready for investors.",
      features: [
        { name: "Complete web application", included: true },
        { name: "User authentication", included: true },
        { name: "5+ core features", included: true },
        { name: "Mobile responsive", included: true },
        { name: "Payment integration", included: true },
        { name: "Admin dashboard", included: true },
        { name: "API integration", included: true },
        { name: "Advanced analytics", included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-900 relative">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing, Exceptional Value</h2>
          <p className="text-gray-300">
            Choose the package that fits your needs. All projects include our 14-day delivery guarantee.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-gray-800 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 ${
                plan.isPopular ? 'border-2 border-purple-500 relative' : 'border border-gray-700'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -right-8 top-3">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-8 py-1.5 transform rotate-45">
                    POPULAR
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 h-12 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-gray-400 line-through text-lg">${plan.originalPrice}</span>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold">${plan.currentPrice}</span>
                    <span className="text-gray-400 mb-1">one-time</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check size={18} className="text-green-400 mt-0.5 mr-2 shrink-0" />
                      ) : (
                        <X size={18} className="text-gray-500 mt-0.5 mr-2 shrink-0" />
                      )}
                      <span className={feature.included ? "text-gray-200" : "text-gray-500"}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                <ContactButton fullWidth />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">
            Need a custom solution? We can tailor a package to your specific requirements.
          </p>
          <a 
            href="https://cal.com/soham-nayak-04/30min" 
            className="text-purple-400 hover:text-purple-300 font-medium underline underline-offset-4"
          >
            Schedule a consultation call
          </a>
        </div>
      </div>
    </section>
  );
};