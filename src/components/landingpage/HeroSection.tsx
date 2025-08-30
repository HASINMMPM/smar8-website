import React from 'react';
// import { FaPlay, FaVolumeUp, FaCog, FaClosedCaptioning, FaExpand } from 'react-icons/fa';
import dummyImage from '../../assets/dummy.jpg'

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
          </div>
          
          {/* Right Section - Video Player */}
          <div className="relative">
            <img src={dummyImage} alt="" />
          </div>
        </div>
        
        {/* Bottom Section - Customer Reviews */}
       
      </div>
    </section>
  );
};

export default HeroSection;
