import React from 'react';
import { FaHome, FaCheck } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Navigation/Breadcrumb */}
            <div className="flex items-center space-x-3 text-gray-600">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <FaHome className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-sm font-medium">About Us</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Revolutionizing the Rental Experience
            </h1>

            {/* Introductory Paragraph */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Smar8 Solutions was founded in 2025 with the goal of improving the rental process for landlords, property owners, and renters alike.
            </p>

            {/* Descriptive Paragraph */}
            <p className="text-lg text-gray-600 leading-relaxed">
              We empower millions of people to grow their rental businesses with top-notch technology, outstanding support, and educational content. Smar8 Solutions takes the stress out of managing properties, so you can focus on growing your business and delivering an exceptional rental experience.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105 shadow-lg">
                Start your free trial
              </button>
            </div>

            {/* Trial Details */}
            <div className="space-y-3 pt-6">
              <div className="flex items-center space-x-3">
                <FaCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-sm text-gray-600">Free 14 day trial</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-sm text-gray-600">Credit card required</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-sm text-gray-600">Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Column - Team Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Smar8 Solutions Team" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Optional: Add a subtle overlay or decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

