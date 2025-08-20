import React, { useState } from 'react';
import { FaCheck, FaStar, FaArrowRight } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 lg:py-32" style={{ background: 'linear-gradient(to bottom right, var(--color-primary-50), var(--color-secondary-50))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 rounded-full px-4 py-2 mb-8 shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)' }}>
            <FaStar className="w-4 h-4" style={{ color: 'var(--color-tertiary-500)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-dark-700)' }}>Simple, Transparent Pricing</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--color-dark-900)' }}>
            Choose the Perfect Plan for Your
            <span style={{ color: 'var(--color-primary-600)' }}> Property Management</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--color-dark-600)' }}>
            Start free and scale as you grow. No hidden fees, no surprises. 
            Cancel anytime with our flexible pricing plans designed for landlords of all sizes.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`} style={{ color: !isYearly ? 'var(--color-dark-900)' : 'var(--color-dark-500)' }}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-12 w-24 items-center rounded-full transition-colors duration-200"
              style={{ backgroundColor: isYearly ? 'var(--color-primary-600)' : 'var(--color-dark-300)' }}
            >
              <span
                className="inline-block h-8 w-8 transform rounded-full bg-white shadow-lg transition-transform duration-200"
                style={{ transform: isYearly ? 'translateX(48px)' : 'translateX(4px)' }}
              />
            </button>
            <span className={`text-lg font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`} style={{ color: isYearly ? 'var(--color-dark-900)' : 'var(--color-dark-500)' }}>
              Yearly
            </span>
            {isYearly && (
              <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'var(--color-primary-100)', color: 'var(--color-primary-800)' }}>
                Save 20%
              </span>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary-100)' }}>
                <FaCheck className="w-6 h-6" style={{ color: 'var(--color-primary-600)' }} />
              </div>
              <div className="text-left">
                <p className="font-semibold" style={{ color: 'var(--color-dark-900)' }}>Free 14-day trial</p>
                <p className="text-sm" style={{ color: 'var(--color-dark-600)' }}>No credit card required</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-secondary-100)' }}>
                <FaCheck className="w-6 h-6" style={{ color: 'var(--color-secondary-600)' }} />
              </div>
              <div className="text-left">
                <p className="font-semibold" style={{ color: 'var(--color-dark-900)' }}>Cancel anytime</p>
                <p className="text-sm" style={{ color: 'var(--color-dark-600)' }}>No long-term contracts</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-tertiary-100)' }}>
                <FaCheck className="w-6 h-6" style={{ color: 'var(--color-tertiary-600)' }} />
              </div>
              <div className="text-left">
                <p className="font-semibold" style={{ color: 'var(--color-dark-900)' }}>24/7 Support</p>
                <p className="text-sm" style={{ color: 'var(--color-dark-600)' }}>Expert help when you need it</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-2xl p-8 shadow-lg border" style={{ backgroundColor: 'white', borderColor: 'var(--color-dark-100)' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-dark-900)' }}>
              Ready to Get Started?
            </h2>
            <p className="mb-6" style={{ color: 'var(--color-dark-600)' }}>
              Join thousands of landlords who trust Smar8 Solutions to manage their properties efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2" style={{ backgroundColor: 'var(--color-primary-600)' }}>
                <span>Start Free Trial</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:bg-gray-50 flex items-center justify-center" style={{ borderColor: 'var(--color-dark-300)', color: 'var(--color-dark-700)' }}>
                View All Plans
              </button>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12">
            <p className="text-sm mb-4" style={{ color: 'var(--color-dark-500)' }}>Trusted by property managers worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-center">
                <div className="flex space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" style={{ color: 'var(--color-tertiary-500)' }} />
                  ))}
                </div>
                <p className="text-xs" style={{ color: 'var(--color-dark-600)' }}>4.9/5 from 2,000+ reviews</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold" style={{ color: 'var(--color-dark-900)' }}>50,000+</p>
                <p className="text-xs" style={{ color: 'var(--color-dark-600)' }}>Active Properties</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold" style={{ color: 'var(--color-dark-900)' }}>99.9%</p>
                <p className="text-xs" style={{ color: 'var(--color-dark-600)' }}>Uptime Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
