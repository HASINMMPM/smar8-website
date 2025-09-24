import React, { useState } from 'react';
import { FaCalculator, FaUsers, FaBuilding, FaBriefcase, FaInfoCircle } from 'react-icons/fa';

const PricingCalculator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'connect' | 'business' | 'manage'>('business');
  const [peopleCount, setPeopleCount] = useState(10);
  const [monthlyTransfers, setMonthlyTransfers] = useState(2);
  const [businessesCount, setBusinessesCount] = useState(1);

  const calculateCosts = () => {
    let baseCost = 0;
    let additionalCosts = 0;
    let totalCost = 0;

    switch (selectedPlan) {
      case 'connect':
        baseCost = 0;
        break;
      case 'business':
        baseCost = 2999;
        additionalCosts = (peopleCount * 40) + (monthlyTransfers * 30);
        break;
      case 'manage':
        baseCost = 4999;
        additionalCosts = (businessesCount * 100); // Additional cost per business
        break;
    }

    totalCost = baseCost + additionalCosts;
    return { baseCost, additionalCosts, totalCost };
  };

  const { baseCost, additionalCosts, totalCost } = calculateCosts();

  const plans = [
    {
      id: 'connect',
      name: 'Smar8 Connect',
      subtitle: 'Free for Tenants & Staff',
      icon: FaUsers,
      color: 'var(--color-primary-600)',
      bgColor: 'var(--color-primary-50)',
      description: 'Basic access to view memberships and payments'
    },
    {
      id: 'business',
      name: 'Smar8 Business',
      subtitle: '₹2,999/month + usage charges',
      icon: FaBriefcase,
      color: 'var(--color-secondary-600)',
      bgColor: 'var(--color-secondary-50)',
      description: 'Manage multiple businesses and people'
    },
    {
      id: 'manage',
      name: 'Smar8 Manage',
      subtitle: '₹4,999/month + business charges',
      icon: FaBuilding,
      color: 'var(--color-tertiary-600)',
      bgColor: 'var(--color-tertiary-50)',
      description: 'Complete building infrastructure management'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full px-4 py-2 mb-6 shadow-sm" style={{ backgroundColor: 'var(--color-primary-50)' }}>
            <FaCalculator className="w-4 h-4" style={{ color: 'var(--color-primary-600)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--color-primary-700)' }}>Cost Calculator</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--color-dark-900)' }}>
            Calculate Your Total Costs
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-dark-600)' }}>
            Use our interactive calculator to estimate your monthly costs based on your usage patterns and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Calculator Form */}
          <div className="space-y-8">
            
            {/* Plan Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-dark-900)' }}>Choose Your Plan</h3>
              <div className="space-y-3">
                {plans.map((plan) => (
                  <label
                    key={plan.id}
                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedPlan === plan.id
                        ? 'border-2'
                        : 'border-2 hover:border-gray-300'
                    }`}
                    style={{
                      borderColor: selectedPlan === plan.id ? 'var(--color-primary-500)' : 'var(--color-dark-200)',
                      backgroundColor: selectedPlan === plan.id ? 'var(--color-primary-50)' : 'transparent'
                    }}
                  >
                    <input
                      type="radio"
                      name="plan"
                      value={plan.id}
                      checked={selectedPlan === plan.id}
                      onChange={(e) => setSelectedPlan(e.target.value as any)}
                      className="sr-only"
                    />
                    <div className="w-5 h-5 rounded-full border-2 mr-3" style={{
                      borderColor: selectedPlan === plan.id ? 'var(--color-primary-500)' : 'var(--color-dark-300)',
                      backgroundColor: selectedPlan === plan.id ? 'var(--color-primary-500)' : 'transparent'
                    }}>
                      {selectedPlan === plan.id && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: plan.bgColor }}>
                        <plan.icon className="w-5 h-5" style={{ color: plan.color }} />
                      </div>
                      <div>
                        <div className="font-medium" style={{ color: 'var(--color-dark-900)' }}>{plan.name}</div>
                        <div className="text-sm" style={{ color: 'var(--color-dark-600)' }}>{plan.subtitle}</div>
                        <div className="text-xs" style={{ color: 'var(--color-dark-500)' }}>{plan.description}</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Usage Parameters */}
            {selectedPlan === 'business' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-dark-900)' }}>Business Usage</h3>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-dark-700)' }}>
                    Number of People You Manage
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={peopleCount}
                      onChange={(e) => setPeopleCount(parseInt(e.target.value))}
                      className="flex-1 h-2 rounded-lg appearance-none cursor-pointer slider"
                      style={{ backgroundColor: 'var(--color-dark-200)' }}
                    />
                    <span className="text-lg font-semibold min-w-[3rem]" style={{ color: 'var(--color-dark-900)' }}>
                      {peopleCount}
                    </span>
                  </div>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-dark-500)' }}>
                    Each person costs ₹40 to add initially
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-dark-700)' }}>
                    Monthly People Transfers
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="0"
                      max="20"
                      value={monthlyTransfers}
                      onChange={(e) => setMonthlyTransfers(parseInt(e.target.value))}
                      className="flex-1 h-2 rounded-lg appearance-none cursor-pointer slider"
                      style={{ backgroundColor: 'var(--color-dark-200)' }}
                    />
                    <span className="text-lg font-semibold min-w-[3rem]" style={{ color: 'var(--color-dark-900)' }}>
                      {monthlyTransfers}
                    </span>
                  </div>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-dark-500)' }}>
                    Each transfer costs ₹30
                  </p>
                </div>
              </div>
            )}

            {selectedPlan === 'manage' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-dark-900)' }}>Building Management</h3>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-dark-700)' }}>
                    Number of Businesses in Your Buildings
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={businessesCount}
                      onChange={(e) => setBusinessesCount(parseInt(e.target.value))}
                      className="flex-1 h-2 rounded-lg appearance-none cursor-pointer slider"
                      style={{ backgroundColor: 'var(--color-dark-200)' }}
                    />
                    <span className="text-lg font-semibold min-w-[3rem]" style={{ color: 'var(--color-dark-900)' }}>
                      {businessesCount}
                    </span>
                  </div>
                  <p className="text-xs mt-1" style={{ color: 'var(--color-dark-500)' }}>
                    Additional ₹100 per business for management
                  </p>
                </div>
              </div>
            )}

            {/* Info Box */}
            <div className="border rounded-lg p-4" style={{ backgroundColor: 'var(--color-primary-50)', borderColor: 'var(--color-primary-200)' }}>
              <div className="flex items-start space-x-3">
                <FaInfoCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-primary-600)' }} />
                <div className="text-sm" style={{ color: 'var(--color-primary-800)' }}>
                  <p className="font-medium mb-1">Important Notes:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• All prices are in Indian Rupees (₹)</li>
                    <li>• Additional charges apply for people management</li>
                    <li>• 14-day free trial available for paid plans</li>
                    <li>• No long-term contracts required</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--color-dark-50)' }}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-dark-900)' }}>Cost Breakdown</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'var(--color-dark-200)' }}>
                <span style={{ color: 'var(--color-dark-600)' }}>Base Plan Cost</span>
                <span className="font-semibold" style={{ color: 'var(--color-dark-900)' }}>₹{baseCost.toLocaleString()}</span>
              </div>
              
              {additionalCosts > 0 && (
                <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'var(--color-dark-200)' }}>
                  <span style={{ color: 'var(--color-dark-600)' }}>Additional Usage Costs</span>
                  <span className="font-semibold" style={{ color: 'var(--color-dark-900)' }}>₹{additionalCosts.toLocaleString()}</span>
                </div>
              )}
              
              <div className="flex justify-between items-center py-3 border-b-2" style={{ borderColor: 'var(--color-primary-500)' }}>
                <span className="text-lg font-semibold" style={{ color: 'var(--color-dark-900)' }}>Total Monthly Cost</span>
                <span className="text-2xl font-bold" style={{ color: 'var(--color-primary-600)' }}>₹{totalCost.toLocaleString()}</span>
              </div>
            </div>

            {/* Annual Savings */}
            {selectedPlan !== 'connect' && (
              <div className="border rounded-lg p-4 mb-6" style={{ backgroundColor: 'var(--color-primary-50)', borderColor: 'var(--color-primary-200)' }}>
                <div className="text-center">
                  <p className="text-sm mb-2" style={{ color: 'var(--color-primary-800)' }}>Annual Cost</p>
                  <p className="text-2xl font-bold" style={{ color: 'var(--color-primary-700)' }}>
                    ₹{(totalCost * 12).toLocaleString()}
                  </p>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="text-center">
              <button className="w-full py-3 px-6 rounded-lg font-semibold transition-colors text-white hover:opacity-90" style={{ backgroundColor: 'var(--color-primary-600)' }}>
                Start Free Trial
              </button>
              <p className="text-xs mt-2" style={{ color: 'var(--color-dark-500)' }}>
                No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
