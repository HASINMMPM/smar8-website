import React from 'react';
import { FaBuilding, FaBriefcase, FaUsers, FaArrowRight } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="bg-white modern-section">
      <div className="modern-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Navigation/Breadcrumb */}
            <div className="flex items-center space-x-3 text-dark-600">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-primary-100">
                <FaBuilding className="w-4 h-4 text-primary-600" />
              </div>
              <span className="text-sm font-medium">About Smar8</span>
            </div>

            {/* Headline */}
            <h1 className="modern-heading">
              Revolutionizing
              <span className="text-primary-500"> Property Management</span>
            </h1>

            {/* Introductory Paragraph */}
            <p className="modern-subheading">
              Smar8 is India's most comprehensive property management platform, designed with a unique three-application architecture that serves different user roles while maintaining unified identity and seamless data flow.
            </p>

            {/* Descriptive Paragraph */}
            <p className="modern-text">
              From individual tenants to business owners managing multiple locations, to building owners overseeing entire properties—Smar8 provides the tools, security, and scalability needed to transform property management operations across India.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <FaUsers className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-medium text-dark-700">Unified Identity</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaBriefcase className="w-4 h-4 text-secondary-500" />
                <span className="text-sm font-medium text-dark-700">Role-Based Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaBuilding className="w-4 h-4 text-tertiary-500" />
                <span className="text-sm font-medium text-dark-700">Multi-Tenant</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="modern-button-primary flex items-center space-x-2">
                <span>Start your free trial</span>
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column - System Architecture Visualization */}
          <div className="relative">
            <div className="modern-card p-8 bg-primary-50">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2 text-dark-900">
                  Smar8 System Architecture
                </h3>
                <p className="text-sm text-dark-600">
                  Three Applications, One Unified Platform
                </p>
              </div>
              
              <div className="space-y-4">
                {/* Smar8 Connect */}
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-primary-100 hover:bg-primary-200 transition-colors duration-200">
                  <FaUsers className="w-6 h-6 text-primary-600" />
                  <div>
                    <div className="font-semibold text-primary-900">Smar8 Connect</div>
                    <div className="text-xs text-primary-700">For Tenants & Staff</div>
                  </div>
                </div>
                
                {/* Smar8 Business */}
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-secondary-100 hover:bg-secondary-200 transition-colors duration-200">
                  <FaBriefcase className="w-6 h-6 text-secondary-600" />
                  <div>
                    <div className="font-semibold text-secondary-900">Smar8 Business</div>
                    <div className="text-xs text-secondary-700">For Business Owners</div>
                  </div>
                </div>
                
                {/* Smar8 Manage */}
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-tertiary-100 hover:bg-tertiary-200 transition-colors duration-200">
                  <FaBuilding className="w-6 h-6 text-tertiary-600" />
                  <div>
                    <div className="font-semibold text-tertiary-900">Smar8 Manage</div>
                    <div className="text-xs text-tertiary-700">For Building Owners</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20 bg-secondary-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

