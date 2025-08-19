import React from 'react';
import { FaHome, FaCheck, FaPlay, FaVolumeMute, FaStar } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Branding/Context */}
            <div className="flex items-center space-x-3 text-gray-600">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <FaHome className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-sm font-medium">Why Smar8 Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              The All-in-One Property Management Solution
            </h1>

            {/* Product Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Trusted by thousands of landlords and property managers, Smar8 Solutions simplifies rental management with powerful, easy-to-use tools designed to save you time, reduce stress, and maximize your rental income.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105 shadow-lg">
                Start your free trial
              </button>
            </div>

            {/* Trial Benefits */}
            <div className="space-y-3 pt-6">
              <div className="flex items-center space-x-3">
                <FaCheck className="w-4 h-4 text-gray-800 flex-shrink-0" />
                <span className="text-sm text-gray-600">Free 14 day trial</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheck className="w-4 h-4 text-gray-800 flex-shrink-0" />
                <span className="text-sm text-gray-600">Credit card required</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheck className="w-4 h-4 text-gray-800 flex-shrink-0" />
                <span className="text-sm text-gray-600">Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Column - Video Placeholder */}
          <div className="relative">
            <div className="bg-green-800 rounded-lg overflow-hidden shadow-xl aspect-video">
              {/* Video Controls */}
              <div className="absolute top-4 left-4 z-10">
                <button className="bg-black bg-opacity-75 text-white px-3 py-1 rounded text-sm flex items-center space-x-2 hover:bg-opacity-90 transition-colors">
                  <FaVolumeMute className="w-3 h-3" />
                  <span>Unmute</span>
                </button>
              </div>

              {/* Video Content */}
              <div className="h-full flex flex-col items-center justify-center text-white p-8">
                {/* Logo and Branding */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-green-800 font-bold text-xl">S8</span>
                  </div>
                  <span className="text-2xl font-bold">Smar8 Solutions</span>
                </div>

                {/* Play Button */}
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 hover:bg-opacity-30 transition-colors cursor-pointer">
                  <FaPlay className="w-8 h-8 text-white ml-1" />
                </div>

                {/* Video Tagline */}
                <h3 className="text-xl font-semibold text-center max-w-md leading-relaxed">
                  The ultimate property management solution for small, medium, and enterprise portfolios.
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Review Platform Ratings */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {/* Capterra */}
            <div className="flex flex-col items-center space-y-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">Capterra</span>
            </div>

            {/* G2 Crowd */}
            <div className="flex flex-col items-center space-y-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">G2 Crowd</span>
            </div>

            {/* SoftwareAdvice */}
            <div className="flex flex-col items-center space-y-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">SoftwareAdvice</span>
            </div>

            {/* GetApp */}
            <div className="flex flex-col items-center space-y-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">GetApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
