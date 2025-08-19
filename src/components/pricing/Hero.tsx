import React, { useState } from 'react';
import { FaCheck, FaStar, FaArrowRight } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-sm">
            <FaStar className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">Simple, Transparent Pricing</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Choose the Perfect Plan for Your
            <span className="text-green-600"> Property Management</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Start free and scale as you grow. No hidden fees, no surprises. 
            Cancel anytime with our flexible pricing plans designed for landlords of all sizes.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-12 w-24 items-center rounded-full transition-colors duration-200 ${
                isYearly ? 'bg-green-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-8 w-8 transform rounded-full bg-white shadow-lg transition-transform duration-200 ${
                  isYearly ? 'translate-x-12' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Save 20%
              </span>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FaCheck className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Free 14-day trial</p>
                <p className="text-sm text-gray-600">No credit card required</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FaCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Cancel anytime</p>
                <p className="text-sm text-gray-600">No long-term contracts</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FaCheck className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">24/7 Support</p>
                <p className="text-sm text-gray-600">Expert help when you need it</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6">
              Join thousands of landlords who trust Smar8 Solutions to manage their properties efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:bg-gray-50 flex items-center justify-center">
                View All Plans
              </button>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12">
            <p className="text-sm text-gray-500 mb-4">Trusted by property managers worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-center">
                <div className="flex space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-600">4.9/5 from 2,000+ reviews</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">50,000+</p>
                <p className="text-xs text-gray-600">Active Properties</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">99.9%</p>
                <p className="text-xs text-gray-600">Uptime Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
