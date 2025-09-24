import React from 'react';
import { FaBuilding, FaStar, FaClock, FaUsers, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const Achievements: React.FC = () => {
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--color-secondary-900)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="text-center mb-16">
          {/* Achievement Label */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: 'var(--color-secondary-600)' }}>
              <FaBuilding className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium" style={{ color: 'var(--color-secondary-200)' }}>Smar8 Achievements</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted Platform, Proven Results
          </h2>

          {/* Sub Text */}
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--color-secondary-200)' }}>
            From individual tenants to large property portfolios—see what makes Smar8 the most comprehensive property management solution in India.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: 500+ Active Buildings */}
          <div className="rounded-lg p-8 text-white shadow-lg" style={{ backgroundColor: 'var(--color-secondary-600)' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaBuilding className="w-8 h-8" style={{ color: 'var(--color-secondary-600)' }} />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-xl font-semibold mb-4">Active Buildings</div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-secondary-100)' }}>
                Successfully managing properties across India with our three-application architecture.
              </p>
            </div>
          </div>

          {/* Card 2: 1,000+ Reviews */}
          <div className="rounded-lg p-8 text-white shadow-lg" style={{ backgroundColor: 'var(--color-secondary-700)' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaStar className="w-8 h-8" style={{ color: 'var(--color-secondary-700)' }} />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1,000+</div>
              <div className="text-xl font-semibold mb-4">Positive Reviews</div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-secondary-100)' }}>
                Consistently high ratings from building owners, business owners, and tenants across all platforms.
              </p>
            </div>
          </div>

          {/* Card 3: 99.9% Uptime */}
          <div className="rounded-lg p-8 text-white shadow-lg" style={{ backgroundColor: 'var(--color-secondary-800)' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaClock className="w-8 h-8" style={{ color: 'var(--color-secondary-800)' }} />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
              <div className="text-xl font-semibold mb-4">Uptime</div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-secondary-200)' }}>
                We work tirelessly to ensure that our platform is always available when you need it most.
              </p>
            </div>
          </div>

          {/* Card 4: 3 Applications */}
          <div className="rounded-lg p-8 text-white shadow-lg" style={{ backgroundColor: 'var(--color-secondary-600)' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaUsers className="w-8 h-8" style={{ color: 'var(--color-secondary-600)' }} />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">3</div>
              <div className="text-xl font-semibold mb-4">Specialized Applications</div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-secondary-200)' }}>
                Connect, Business, and Manage applications serving different user roles with unified identity.
              </p>
            </div>
          </div>

          {/* Card 5: 100% Data Security */}
          <div className="rounded-lg p-8 text-white shadow-lg" style={{ backgroundColor: 'var(--color-secondary-700)' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="w-8 h-8" style={{ color: 'var(--color-secondary-700)' }} />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-xl font-semibold mb-4">Data Security</div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-secondary-100)' }}>
                Enterprise-grade security with role-based access control and zero data visibility breaches.
              </p>
            </div>
          </div>

          {/* Card 6: 14-Day Free Trial */}
          <div className="rounded-lg p-8 text-white shadow-lg" style={{ backgroundColor: 'var(--color-secondary-800)' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="w-8 h-8" style={{ color: 'var(--color-secondary-800)' }} />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">14-Day</div>
              <div className="text-xl font-semibold mb-4">Free Trial</div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-secondary-200)' }}>
                Experience the full power of Smar8 Business and Manage plans with our risk-free trial period.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-dark-900)' }}>
              Join the Smar8 Success Story
            </h3>
            <p className="mb-6 max-w-2xl" style={{ color: 'var(--color-dark-600)' }}>
              Be part of the growing community of property managers who have transformed their operations with Smar8
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-lg font-semibold transition-colors text-white hover:opacity-90" style={{ backgroundColor: 'var(--color-primary-600)' }}>
                Start Free Trial
              </button>
              <button className="px-8 py-3 rounded-lg font-semibold transition-colors border-2 hover:opacity-90" style={{ 
                borderColor: 'var(--color-primary-600)', 
                color: 'var(--color-primary-600)',
                backgroundColor: 'transparent'
              }}>
                Schedule Demo
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Achievements;

