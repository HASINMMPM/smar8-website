import React from 'react';
import { FaCheck, FaPlay, FaVolumeUp, FaCog, FaClosedCaptioning, FaExpand } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Section - Text Content & CTA */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-primary-100 text-primary-700">
              Property Management Software
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl  font-bold text-primary-900 leading-tight">
              The all-in-one platform <span className="text-secondary-500">that scales with your portfolio</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-dark-600 leading-relaxed max-w-2xl">
              TenantCloud helps you simplify and grow your property management business. 
              Find everything you need to list properties, collect rent, and screen tenants—in one, easy place.
            </p>
            
            {/* CTA Form */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email to start"
                className="flex-1 px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap">
                Get started
              </button>
            </div>
            
            {/* Feature Highlights */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-dark-600">
                <FaCheck className="text-primary-500 text-xs" />
                <span>Free 14 day trial</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-dark-600">
                <FaCheck className="text-primary-500 text-xs" />
                <span>Credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-dark-600">
                <FaCheck className="text-primary-500 text-xs" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
          
          {/* Right Section - Video Player */}
          <div className="relative">
            <div className="bg-primary-800 rounded-xl p-6 shadow-2xl">
              {/* Video Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                </div>
                <span className="text-white font-semibold">TenantCloud</span>
                <span className="text-primary-200 text-sm">Property Management Software</span>
              </div>
              
              {/* Video Content - Dashboard UI */}
              <div className="bg-white rounded-lg p-4 space-y-4">
                {/* Calendar Widget */}
                <div className="bg-tertiary-50 rounded-lg p-3">
                  <div className="text-sm font-medium text-dark-900">Today, July 25</div>
                  <div className="text-xs text-dark-600">You have 0 events today. View calendar</div>
                </div>
                
                {/* Recently Viewed Properties */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-dark-900">Recently viewed</div>
                  <div className="flex gap-2">
                    <div className="w-12 h-8 bg-tertiary-200 rounded"></div>
                    <div className="w-12 h-8 bg-tertiary-200 rounded"></div>
                    <div className="w-12 h-8 bg-tertiary-200 rounded"></div>
                  </div>
                </div>
                
                {/* Chart */}
                <div className="h-16 bg-tertiary-100 rounded-lg flex items-end justify-center gap-1 p-2">
                  <div className="w-3 bg-primary-500 rounded-t h-8"></div>
                  <div className="w-3 bg-primary-500 rounded-t h-12"></div>
                  <div className="w-3 bg-primary-500 rounded-t h-6"></div>
                  <div className="w-3 bg-primary-500 rounded-t h-10"></div>
                  <div className="w-3 bg-primary-500 rounded-t h-14"></div>
                </div>
                
                {/* Income Display */}
                <div className="bg-primary-50 rounded-lg p-3 text-center">
                  <div className="text-xs text-dark-600">Income</div>
                  <div className="text-lg font-bold text-primary-700">$251,119</div>
                </div>
                
                {/* User Profile */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-tertiary-300 rounded-full"></div>
                  <div className="text-xs">
                    <div className="font-medium text-dark-900">Property Manager</div>
                    <div className="text-dark-600">Mice Walsh</div>
                  </div>
                </div>
              </div>
              
              {/* Video Player Controls */}
              <div className="flex items-center justify-between mt-4 px-2">
                <div className="flex items-center gap-3">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <FaPlay className="text-primary-800 text-xs" />
                  </button>
                  <span className="text-white text-xs">00:50</span>
                  <div className="w-24 h-1 bg-dark-600 rounded-full">
                    <div className="w-12 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-white hover:text-primary-200">
                    <FaVolumeUp className="text-xs" />
                  </button>
                  <button className="text-white hover:text-primary-200">
                    <FaCog className="text-xs" />
                  </button>
                  <button className="text-white hover:text-primary-200">
                    <FaClosedCaptioning className="text-xs" />
                  </button>
                  <button className="text-white hover:text-primary-200">
                    <FaExpand className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Customer Reviews */}
        <div className="border-t border-tertiary-200 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Capterra */}
            <div className="text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-tertiary-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm font-medium text-dark-700">Capterra</div>
            </div>
            
            {/* G2 Crowd */}
            <div className="text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-tertiary-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm font-medium text-dark-700">G2 Crowd</div>
            </div>
            
            {/* SoftwareAdvice */}
            <div className="text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-tertiary-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm font-medium text-dark-700">SoftwareAdvice</div>
            </div>
            
            {/* GetApp */}
            <div className="text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-tertiary-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm font-medium text-dark-700">GetApp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
