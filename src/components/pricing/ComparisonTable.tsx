import React from 'react';
import { FaCheck, FaTimes, FaBuilding, FaBriefcase, FaUsers, FaStar } from 'react-icons/fa';

const ComparisonTable: React.FC = () => {
  const features = [
    {
      category: "Core Features",
      items: [
        { name: "Building Management", connect: false, business: false, manage: true },
        { name: "Business Operations", connect: false, business: true, manage: false },
        { name: "People Management", connect: false, business: true, manage: false },
        { name: "Tenant Access", connect: true, business: false, manage: false },
        { name: "Staff Management", connect: false, business: false, manage: true }
      ]
    },
    {
      category: "User Management",
      items: [
        { name: "Add People", connect: false, business: "₹40/person", manage: false },
        { name: "Remove People", connect: false, business: "₹25/person", manage: false },
        { name: "Move Between Businesses", connect: false, business: "₹30/transfer", manage: false },
        { name: "Role Assignment", connect: false, business: false, manage: true },
        { name: "Staff Addition", connect: false, business: false, manage: true }
      ]
    },
    {
      category: "Payment & Billing",
      items: [
        { name: "Collect from Tenants", connect: false, business: true, manage: false },
        { name: "Pay Building Owners", connect: false, business: true, manage: false },
        { name: "Security Deposits", connect: false, business: false, manage: true },
        { name: "Utilities Management", connect: false, business: false, manage: true },
        { name: "Maintenance Tracking", connect: false, business: false, manage: true }
      ]
    },
    {
      category: "Access & Permissions",
      items: [
        { name: "Email + Password Login", connect: true, business: true, manage: true },
        { name: "Mobile + OTP Login", connect: true, business: true, manage: true },
        { name: "Admin Permissions", connect: false, business: false, manage: true },
        { name: "Business Owner Access", connect: false, business: true, manage: false },
        { name: "Building Owner Access", connect: false, business: false, manage: true }
      ]
    },
    {
      category: "Support & Services",
      items: [
        { name: "Basic Support", connect: true, business: false, manage: false },
        { name: "Priority Support", connect: false, business: true, manage: false },
        { name: "24/7 Premium Support", connect: false, business: false, manage: true },
        { name: "Help Center Access", connect: true, business: true, manage: true },
        { name: "Documentation", connect: true, business: true, manage: true }
      ]
    }
  ];

  const plans = [
    {
      name: "Smar8 Connect",
      subtitle: "For Tenants & Staff",
      price: "Free",
      icon: FaUsers,
      color: "var(--color-primary-600)",
      bgColor: "var(--color-primary-50)",
      popular: false
    },
    {
      name: "Smar8 Business",
      subtitle: "For Business Owners",
      price: "₹2,999",
      period: "/month",
      icon: FaBriefcase,
      color: "var(--color-secondary-600)",
      bgColor: "var(--color-secondary-50)",
      popular: true
    },
    {
      name: "Smar8 Manage",
      subtitle: "For Building Owners",
      price: "₹4,999",
      period: "/month",
      icon: FaBuilding,
      color: "var(--color-tertiary-600)",
      bgColor: "var(--color-tertiary-50)",
      popular: false
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <FaCheck className="w-5 h-5" style={{ color: 'var(--color-primary-600)' }} />
      ) : (
        <FaTimes className="w-5 h-5" style={{ color: 'var(--color-dark-400)' }} />
      );
    }
    return <span className="text-sm font-medium" style={{ color: 'var(--color-dark-700)' }}>{value}</span>;
  };

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--color-dark-50)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--color-dark-900)' }}>
            Detailed Feature Comparison
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-dark-600)' }}>
            Compare the features and capabilities of all three Smar8 applications to choose the right plan for your needs.
          </p>
        </div>

        {/* Plans Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`text-center p-6 rounded-2xl ${
                plan.popular ? 'transform scale-105' : ''
              }`}
              style={{
                backgroundColor: plan.bgColor,
                boxShadow: plan.popular ? '0 0 0 2px var(--color-secondary-500)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            >
              {plan.popular && (
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: 'var(--color-secondary-500)' }}>
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: plan.bgColor }}>
                <plan.icon className="w-8 h-8" style={{ color: plan.color }} />
              </div>
              
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-dark-900)' }}>
                {plan.name}
              </h3>
              <p className="text-sm mb-4" style={{ color: 'var(--color-dark-600)' }}>
                {plan.subtitle}
              </p>
              <div className="mb-4">
                <span className="text-3xl font-bold" style={{ color: plan.color }}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-lg" style={{ color: 'var(--color-dark-600)' }}>
                    {plan.period}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: 'var(--color-dark-50)' }}>
                  <th className="px-6 py-4 text-left text-sm font-semibold w-1/3" style={{ color: 'var(--color-dark-900)' }}>
                    Features
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold" style={{ color: 'var(--color-dark-900)' }}>
                    Smar8 Connect
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold" style={{ color: 'var(--color-dark-900)' }}>
                    Smar8 Business
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold" style={{ color: 'var(--color-dark-900)' }}>
                    Smar8 Manage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: 'var(--color-dark-200)' }}>
                {features.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr style={{ backgroundColor: 'var(--color-dark-50)' }}>
                      <td colSpan={4} className="px-6 py-3">
                        <h3 className="text-lg font-semibold" style={{ color: 'var(--color-dark-900)' }}>
                          {category.category}
                        </h3>
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr key={itemIndex} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium" style={{ color: 'var(--color-dark-700)' }}>
                          {item.name}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {renderFeatureValue(item.connect)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {renderFeatureValue(item.business)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {renderFeatureValue(item.manage)}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: 'var(--color-dark-900)' }}>
              <FaStar className="w-5 h-5 mr-2" style={{ color: 'var(--color-tertiary-500)' }} />
              Key Benefits
            </h3>
            <ul className="space-y-2" style={{ color: 'var(--color-dark-600)' }}>
              <li>• Unified Identity across all applications</li>
              <li>• Seamless role transitions with data preservation</li>
              <li>• Cash-based payment system with digital receipts</li>
              <li>• Role-based content visibility and security</li>
              <li>• Scalable architecture for growing businesses</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: 'var(--color-dark-900)' }}>
              <FaCheck className="w-5 h-5 mr-2" style={{ color: 'var(--color-primary-600)' }} />
              Getting Started
            </h3>
            <ul className="space-y-2" style={{ color: 'var(--color-dark-600)' }}>
              <li>• Start with Connect (Free) to experience the platform</li>
              <li>• Contact sales to upgrade to Business or Manage plans</li>
              <li>• Admin will assign appropriate roles and permissions</li>
              <li>• 14-day free trial available for paid plans</li>
              <li>• No long-term contracts, cancel anytime</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
