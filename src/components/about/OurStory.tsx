import React from 'react';
import { FaBuilding, FaUsers, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const OurStory: React.FC = () => {
  return (
    <section className="py-20" style={{ backgroundColor: 'var(--color-tertiary-50)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: 'var(--color-dark-700)' }}>
          Our Story
        </h2>

        {/* Main Card Container */}
        <div className="bg-white rounded-lg shadow-md p-8 lg:p-12">
          
          {/* Content Block 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 pb-12 border-b" style={{ borderColor: 'var(--color-dark-200)' }}>
            <div className="space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold" style={{ color: 'var(--color-dark-700)' }}>
                Smar8's Mission: A Better Way to Manage Properties
              </h3>
              <div className="space-y-4 leading-relaxed" style={{ color: 'var(--color-dark-600)' }}>
                <p>
                  The Indian property management industry was fragmented, with separate systems for different user roles. Building owners struggled to manage multiple businesses, business owners had no unified way to handle operations across locations, and tenants lacked transparency in their payments and memberships.
                </p>
                <p>
                  Smar8 was founded to create a unified ecosystem where all stakeholders—from individual tenants to building owners—could operate seamlessly within a single platform while maintaining proper data isolation and role-based access.
                </p>
                <p>
                  Our unique three-application architecture (Connect, Business, Manage) ensures that each user type gets exactly what they need, while the unified identity system allows seamless role transitions as businesses grow and evolve.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-36 h-36 mx-auto rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-secondary-100)' }}>
                <FaBuilding className="w-24 h-24" style={{ color: 'var(--color-secondary-600)' }} />
              </div>
            </div>
          </div>

          {/* Content Block 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 pb-12 border-b" style={{ borderColor: 'var(--color-dark-200)' }}>
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-36 h-36 mx-auto rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary-100)' }}>
                <FaUsers className="w-24 h-24" style={{ color: 'var(--color-primary-600)' }} />
              </div>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h3 className="text-xl lg:text-2xl font-bold" style={{ color: 'var(--color-dark-700)' }}>
                Built for India's Unique Property Landscape
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--color-dark-600)' }}>
                India's property market is unique—with cash-based payments, complex business structures, and diverse building types. Smar8 was built from the ground up to handle these specific challenges. Our platform supports variable rates based on business type, mobile number prefixes, and the complex relationships between building owners, business owners, and tenants.
              </p>
            </div>
          </div>

          {/* Content Block 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 pb-12 border-b" style={{ borderColor: 'var(--color-dark-200)' }}>
            <div className="space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold" style={{ color: 'var(--color-dark-700)' }}>
                Security and Scalability at Our Core
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--color-dark-600)' }}>
                We understand that property management involves sensitive financial data and personal information. Smar8 employs enterprise-grade security with role-based access control, ensuring that users can only see data relevant to their role. Our multi-tenant architecture scales from single buildings to large property portfolios, all while maintaining data isolation and security.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-36 h-36 mx-auto rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-tertiary-100)' }}>
                <FaShieldAlt className="w-24 h-24" style={{ color: 'var(--color-tertiary-600)' }} />
              </div>
            </div>
          </div>

          {/* Content Block 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-36 h-36 mx-auto rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary-100)' }}>
                <FaChartLine className="w-24 h-24" style={{ color: 'var(--color-primary-600)' }} />
              </div>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h3 className="text-xl lg:text-2xl font-bold" style={{ color: 'var(--color-dark-700)' }}>
                Join Us in Transforming Property Management
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--color-dark-600)' }}>
                Smar8 provides powerful tools for efficient, confident, and affordable property management across India. Our comprehensive platform helps you manage properties with ease, build better relationships with tenants, and maximize your rental income. Property management doesn't have to be complicated—let's make it better together with Smar8.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;

