import React from 'react';
import { FaShieldAlt, FaUsers, FaSync, FaLock, FaChartLine, FaHandshake } from 'react-icons/fa';

const KeyBenefits: React.FC = () => {
  const benefits = [
    {
      icon: FaUsers,
      title: "Unified Identity System",
      description: "Single registration with email/password works across all three applications. Admin assigns roles and permissions seamlessly.",
      color: "var(--color-primary-600)",
      bgColor: "var(--color-primary-50)"
    },
    {
      icon: FaSync,
      title: "Seamless Role Transitions",
      description: "Evolve from Person to Business Owner to Building Owner. Your data is preserved across all role changes.",
      color: "var(--color-secondary-600)",
      bgColor: "var(--color-secondary-50)"
    },
    {
      icon: FaShieldAlt,
      title: "Role-Based Security",
      description: "Zero data visibility into other users' information. Content is filtered based on your assigned role and permissions.",
      color: "var(--color-tertiary-600)",
      bgColor: "var(--color-tertiary-50)"
    },
    {
      icon: FaChartLine,
      title: "Scalable Architecture",
      description: "Start with Connect (Free), scale up to Business or Manage as your needs grow. No long-term contracts required.",
      color: "var(--color-primary-700)",
      bgColor: "var(--color-primary-100)"
    },
    {
      icon: FaLock,
      title: "Secure Document Management",
      description: "Sensitive documents are encrypted and stored securely. Google Drive integration with PDF generation capabilities.",
      color: "var(--color-secondary-700)",
      bgColor: "var(--color-secondary-100)"
    },
    {
      icon: FaHandshake,
      title: "Flexible Payment System",
      description: "Cash-based payments with digital receipts and audit trails. Variable rates based on business type and mobile prefixes.",
      color: "var(--color-tertiary-700)",
      bgColor: "var(--color-tertiary-100)"
    }
  ];

  const differentiators = [
    {
      title: "Multi-Tenant Architecture",
      description: "Three distinct applications serving different user roles while maintaining data isolation and security."
    },
    {
      title: "Building Infrastructure Management",
      description: "Complete solution for building owners to manage entire properties, not just individual units."
    },
    {
      title: "Business Operations Focus",
      description: "Dedicated tools for business owners to manage multiple businesses across different buildings."
    },
    {
      title: "People Transfer System",
      description: "Flexible people management with transfer capabilities between businesses and rooms."
    }
  ];

  return (
    <section className="py-16 lg:py-24" style={{ background: 'linear-gradient(to bottom right, var(--color-dark-50), white)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--color-dark-900)' }}>
            Why Choose Smar8?
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-dark-600)' }}>
            Discover the unique advantages that make Smar8 the most comprehensive property management solution in India.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: benefit.bgColor }}>
                <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} />
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-dark-900)' }}>
                {benefit.title}
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--color-dark-600)' }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* System Differentiators */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--color-dark-900)' }}>
            What Makes Smar8 Different?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--color-primary-500)' }}></div>
                <div>
                  <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-dark-900)' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--color-dark-600)' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border" style={{ 
            background: 'linear-gradient(to bottom right, var(--color-primary-50), var(--color-primary-100))',
            borderColor: 'var(--color-primary-200)'
          }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary-900)' }}>For Building Owners</h3>
            <ul className="space-y-2" style={{ color: 'var(--color-primary-800)' }}>
              <li>• Manage entire building infrastructure</li>
              <li>• Collect rent from multiple business owners</li>
              <li>• Handle utilities and maintenance</li>
              <li>• Manage building-level staff</li>
              <li>• Set variable rates based on business type</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border" style={{ 
            background: 'linear-gradient(to bottom right, var(--color-secondary-50), var(--color-secondary-100))',
            borderColor: 'var(--color-secondary-200)'
          }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-secondary-900)' }}>For Business Owners</h3>
            <ul className="space-y-2" style={{ color: 'var(--color-secondary-800)' }}>
              <li>• Operate multiple businesses</li>
              <li>• Manage people across locations</li>
              <li>• Handle payments and transfers</li>
              <li>• Access business analytics</li>
              <li>• Scale operations efficiently</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border" style={{ 
            background: 'linear-gradient(to bottom right, var(--color-tertiary-50), var(--color-tertiary-100))',
            borderColor: 'var(--color-tertiary-200)'
          }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-tertiary-900)' }}>For Tenants & Staff</h3>
            <ul className="space-y-2" style={{ color: 'var(--color-tertiary-800)' }}>
              <li>• View business memberships</li>
              <li>• Access payment history</li>
              <li>• Multiple login options</li>
              <li>• Secure document access</li>
              <li>• Zero data privacy concerns</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-dark-900)' }}>
              Ready to Experience the Smar8 Difference?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto" style={{ color: 'var(--color-dark-600)' }}>
              Join thousands of property managers who have transformed their operations with our comprehensive, role-based property management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-lg font-semibold transition-colors text-white hover:opacity-90" style={{ backgroundColor: 'var(--color-primary-600)' }}>
                Start Free Trial
              </button>
              <button className="border-2 px-8 py-3 rounded-lg font-semibold transition-colors hover:opacity-90" style={{ 
                borderColor: 'var(--color-primary-600)', 
                color: 'var(--color-primary-600)',
                backgroundColor: 'var(--color-primary-50)'
              }}>
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
