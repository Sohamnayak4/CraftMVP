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
      originalPrice: 299,
      currentPrice: 99,
      description: "Perfect for validating your idea with a professional landing page.",
      features: [
        { name: "Discovery Call (15 minutes)", included: true },
        { name: "Single Page Design", included: true },
        { name: "1 Round of Design Revisions", included: true },
        { name: "Mobile Responsive", included: true },
        { name: "Contact Form Integration", included: true },
        { name: "Email Signup Integration", included: true },
        { name: "Basic SEO Setup", included: true },
        { name: "Basic QA Testing", included: true },
      ],
    },
    {
      name: "Standard Pack",
      originalPrice: 1999,
      currentPrice: 999,
      description: "A complete MVP with core features to test your product hypothesis.",
      features: [
        { name: "Discovery & Strategy Workshop", included: true },
        { name: "Wireframing & Prototyping", included: true },
        { name: "Multi-page Application (up to 5 pages)", included: true },
        { name: "User Authentication", included: true },
        { name: "3-5 Core Features", included: true },
        { name: "Mobile Responsive Design", included: true },
        { name: "Payment Integration", included: true },
        { name: "Admin Dashboard", included: true },
        { name: "2 Rounds of Revisions", included: true },
        { name: "Comprehensive QA Testing", included: true },
        { name: "14-Day Post-Launch Support", included: true },
      ],
      isPopular: true,
    },
    {
      name: "Pro Pack",
      originalPrice: 2999,
      currentPrice: 1499,
      description: "A full-featured MVP with advanced functionality ready for investors.",
      features: [
        { name: "Deep-Dive Strategy & Roadmap Session", included: true },
        { name: "Interactive Prototyping", included: true },
        { name: "Complete Web Application", included: true },
        { name: "User Authentication", included: true },
        { name: "5+ Core Features", included: true },
        { name: "Mobile Responsive Design", included: true },
        { name: "Payment Integration", included: true },
        { name: "Custom Admin Dashboard", included: true },
        { name: "Third-Party API Integration", included: true },
        { name: "Advanced Analytics Integration", included: true },
        { name: "3+ Rounds of Revisions", included: true },
        { name: "Extensive QA & Performance Testing", included: true },
        { name: "30-Day Post-Launch Support & Maintenance", included: true },
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
