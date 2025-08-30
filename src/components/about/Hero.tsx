import React from 'react';
import { FaBuilding, FaBriefcase, FaUsers, FaArrowRight } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Navigation/Breadcrumb */}
            <div className="flex items-center space-x-3" style={{ color: 'var(--color-dark-600)' }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-secondary-100)' }}>
                <FaBuilding className="w-4 h-4" style={{ color: 'var(--color-secondary-600)' }} />
              </div>
              <span className="text-sm font-medium">About Smar8</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" style={{ color: 'var(--color-dark-700)' }}>
              Revolutionizing
              <span style={{ color: 'var(--color-primary-600)' }}> Property Management</span>
            </h1>

            {/* Introductory Paragraph */}
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-dark-600)' }}>
              Smar8 is India's most comprehensive property management platform, designed with a unique three-application architecture that serves different user roles while maintaining unified identity and seamless data flow.
            </p>

            {/* Descriptive Paragraph */}
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-dark-600)' }}>
              From individual tenants to business owners managing multiple locations, to building owners overseeing entire properties—Smar8 provides the tools, security, and scalability needed to transform property management operations across India.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <FaUsers className="w-4 h-4" style={{ color: 'var(--color-primary-600)' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--color-dark-700)' }}>Unified Identity</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaBriefcase className="w-4 h-4" style={{ color: 'var(--color-secondary-600)' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--color-dark-700)' }}>Role-Based Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaBuilding className="w-4 h-4" style={{ color: 'var(--color-tertiary-600)' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--color-dark-700)' }}>Multi-Tenant</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105 shadow-lg flex items-center space-x-2" style={{ backgroundColor: 'var(--color-primary-600)' }}>
                <span>Start your free trial</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column - System Architecture Visualization */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl p-8" style={{ backgroundColor: 'var(--color-primary-50)' }}>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-dark-900)' }}>
                  Smar8 System Architecture
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-dark-600)' }}>
                  Three Applications, One Unified Platform
                </p>
              </div>
              
              <div className="space-y-4">
                {/* Smar8 Connect */}
                <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--color-primary-100)' }}>
                  <FaUsers className="w-6 h-6" style={{ color: 'var(--color-primary-600)' }} />
                  <div>
                    <div className="font-semibold" style={{ color: 'var(--color-primary-900)' }}>Smar8 Connect</div>
                    <div className="text-xs" style={{ color: 'var(--color-primary-700)' }}>For Tenants & Staff</div>
                  </div>
                </div>
                
                {/* Smar8 Business */}
                <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--color-secondary-100)' }}>
                  <FaBriefcase className="w-6 h-6" style={{ color: 'var(--color-secondary-600)' }} />
                  <div>
                    <div className="font-semibold" style={{ color: 'var(--color-secondary-900)' }}>Smar8 Business</div>
                    <div className="text-xs" style={{ color: 'var(--color-secondary-700)' }}>For Business Owners</div>
                  </div>
                </div>
                
                {/* Smar8 Manage */}
                <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--color-tertiary-100)' }}>
                  <FaBuilding className="w-6 h-6" style={{ color: 'var(--color-tertiary-600)' }} />
                  <div>
                    <div className="font-semibold" style={{ color: 'var(--color-tertiary-900)' }}>Smar8 Manage</div>
                    <div className="text-xs" style={{ color: 'var(--color-tertiary-700)' }}>For Building Owners</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: 'var(--color-secondary-100)' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

