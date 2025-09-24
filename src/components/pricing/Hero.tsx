import React from 'react';
import { FaCheck, FaStar, FaArrowRight, FaBuilding, FaBriefcase, FaUsers } from 'react-icons/fa';

const Hero: React.FC = () => {

  const pricingPlans = [
    {
      name: "Smar8 Connect",
      subtitle: "For Tenants & Staff",
      price: "Free",
      description: "Access your business memberships and payment history",
      icon: FaUsers,
      features: [
        "View business memberships",
        "Access payment history & receipts",
        "Email + Password login",
        "Mobile + OTP login option",
        "Zero data visibility into others",
        "Secure document access"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Smar8 Business",
      subtitle: "For Business Owners",
      price: "₹2,999",
      period: "/month",
      description: "Operate multiple businesses across different buildings",
      icon: FaBriefcase,
      features: [
        "Manage multiple businesses",
        "Add/remove people (₹40 per person)",
        "Move people between businesses",
        "Collect payments from tenants",
        "Room transfer management",
        "Business analytics & reports",
        "Priority support"
      ],
      cta: "Start Business Plan",
      popular: true
    },
    {
      name: "Smar8 Manage",
      subtitle: "For Building Owners",
      price: "₹4,999",
      period: "/month",
      description: "Complete building infrastructure management",
      icon: FaBuilding,
      features: [
        "Create & manage buildings",
        "Manage rooms & rates",
        "Add/remove business owners",
        "Building-level staff management",
        "Collect rent from business owners",
        "Utilities & maintenance tracking",
        "Security deposit management",
        "Admin-level permissions",
        "24/7 premium support"
      ],
      cta: "Start Manage Plan",
      popular: false
    }
  ];

  return (
    <section className="py-20 lg:py-32" style={{ background: 'linear-gradient(to bottom right, var(--color-primary-50), var(--color-secondary-50))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 rounded-full px-4 py-2 mb-8 shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)' }}>
            <FaStar className="w-4 h-4" style={{ color: 'var(--color-tertiary-500)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-dark-700)' }}>Simple, Transparent Pricing</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--color-dark-900)' }}>
            Choose Your
            <span style={{ color: 'var(--color-primary-600)' }}> Smar8 Plan</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--color-dark-600)' }}>
            Three distinct applications for different user roles. Start with Connect for free, 
            scale up to Business or Manage as your needs grow.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 shadow-lg border transition-transform hover:scale-105 ${
                plan.popular 
                  ? 'transform scale-105' 
                  : ''
              }`}
              style={{ 
                backgroundColor: 'white', 
                borderColor: plan.popular ? 'var(--color-primary-500)' : 'var(--color-dark-100)',
                boxShadow: plan.popular ? '0 0 0 2px var(--color-primary-500)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: 'var(--color-primary-500)' }}>
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-primary-100)' }}>
                  <plan.icon className="w-8 h-8" style={{ color: 'var(--color-primary-600)' }} />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-dark-900)' }}>
                  {plan.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--color-dark-600)' }}>
                  {plan.subtitle}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold" style={{ color: 'var(--color-primary-600)' }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-lg" style={{ color: 'var(--color-dark-600)' }}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-sm" style={{ color: 'var(--color-dark-600)' }}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <FaCheck className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-primary-600)' }} />
                    <span className="text-sm" style={{ color: 'var(--color-dark-700)' }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'text-white shadow-lg'
                    : 'border-2 hover:bg-gray-50'
                }`}
                style={{
                  backgroundColor: plan.popular ? 'var(--color-primary-600)' : 'transparent',
                  borderColor: plan.popular ? 'transparent' : 'var(--color-dark-300)',
                  color: plan.popular ? 'white' : 'var(--color-dark-700)'
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Charges */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="rounded-2xl p-8 shadow-lg border" style={{ backgroundColor: 'white', borderColor: 'var(--color-dark-100)' }}>
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--color-dark-900)' }}>
              Additional Charges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-primary-600)' }}>
                  People Management
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Add new person</span>
                    <span className="font-semibold">₹40</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Remove person</span>
                    <span className="font-semibold">₹25</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Move between businesses</span>
                    <span className="font-semibold">₹30</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-secondary-600)' }}>
                  Payment Terms
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Business Owner payments</span>
                    <span className="font-semibold">Monthly</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Building Owner rates</span>
                    <span className="font-semibold">Variable</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Security deposits</span>
                    <span className="font-semibold">As per agreement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl p-8 shadow-lg border" style={{ backgroundColor: 'white', borderColor: 'var(--color-dark-100)' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-dark-900)' }}>
            Ready to Get Started?
          </h2>
          <p className="mb-6" style={{ color: 'var(--color-dark-600)' }}>
            Join the Smar8 ecosystem and transform your property management experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2" style={{ backgroundColor: 'var(--color-primary-600)' }}>
              <span>Start Free Trial</span>
              <FaArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:bg-gray-50 flex items-center justify-center" style={{ borderColor: 'var(--color-dark-300)', color: 'var(--color-dark-700)' }}>
              Contact Sales
            </button>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12">
          <p className="text-sm mb-4" style={{ color: 'var(--color-dark-500)' }}>Trusted by property managers across India</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-center">
              <div className="flex space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4" style={{ color: 'var(--color-tertiary-500)' }} />
                ))}
              </div>
              <p className="text-xs" style={{ color: 'var(--color-dark-600)' }}>4.9/5 from 1,000+ reviews</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold" style={{ color: 'var(--color-dark-900)' }}>500+</p>
              <p className="text-xs" style={{ color: 'var(--color-dark-600)' }}>Active Buildings</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold" style={{ color: 'var(--color-dark-900)' }}>99.9%</p>
              <p className="text-xs" style={{ color: 'var(--color-dark-600)' }}>Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
