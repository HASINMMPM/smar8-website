import React from 'react';
import { FaPiggyBank, FaChartLine, FaShieldAlt, FaMobile, FaClock, FaDollarSign, FaCheckCircle } from 'react-icons/fa';

const SavingsAccounts: React.FC = () => {
  const features = [
    {
      icon: FaPiggyBank,
      title: "High-Yield Savings",
      description: "Earn competitive interest rates on your property management funds with our high-yield savings accounts."
    },
    {
      icon: FaChartLine,
      title: "Real-Time Analytics",
      description: "Track your savings growth with detailed analytics and performance reports updated in real-time."
    },
    {
      icon: FaShieldAlt,
      title: "FDIC Insured",
      description: "All savings accounts are FDIC-insured up to $250,000, providing complete protection for your funds."
    },
    {
      icon: FaMobile,
      title: "Mobile Banking",
      description: "Manage your savings on-the-go with our intuitive mobile banking app available on all devices."
    },
    {
      icon: FaClock,
      title: "Instant Transfers",
      description: "Transfer funds instantly between your savings and checking accounts with no delays or fees."
    },
    {
      icon: FaDollarSign,
      title: "No Minimum Balance",
      description: "Start saving with any amount - no minimum balance requirements or monthly maintenance fees."
    }
  ];

  const benefits = [
    "FDIC-insured up to $250,000",
    "Competitive interest rates",
    "No monthly maintenance fees",
    "Instant transfers and payments",
    "Mobile banking app",
    "Real-time account monitoring"
  ];

  const rates = [
    { tier: "Basic Savings", rate: "2.5%", min: "$0", description: "Perfect for getting started" },
    { tier: "Premium Savings", rate: "3.2%", min: "$10,000", description: "Higher rates for larger balances" },
    { tier: "Business Savings", rate: "3.8%", min: "$50,000", description: "Best rates for property management" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
                High-Yield Savings Accounts for Property Managers
              </h1>
              <p className="text-xl text-dark-600 mb-8">
                Maximize your property management returns with our high-yield savings accounts. 
                Earn competitive interest rates while keeping your funds secure and easily accessible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors duration-300">
                  Open Account
                </button>
                <button className="px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-xl hover:bg-primary-50 transition-colors duration-300">
                  View Rates
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <FaPiggyBank className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-dark-900">Savings Dashboard</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-dark-600">Current Balance</span>
                    <span className="text-2xl font-bold text-primary-500">$45,230</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-dark-600">Interest Rate</span>
                    <span className="text-2xl font-bold text-secondary-500">3.2% APY</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-dark-600">Interest Earned</span>
                    <span className="text-2xl font-bold text-success-500">$1,447</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Rates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
              Competitive Interest Rates
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Choose the savings account that best fits your property management needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rates.map((rate, index) => (
              <div key={index} className={`rounded-2xl p-8 text-center ${
                index === 1 ? 'bg-primary-500 text-white' : 'bg-gray-50'
              }`}>
                <h3 className={`text-2xl font-bold mb-2 ${index === 1 ? 'text-white' : 'text-dark-900'}`}>
                  {rate.tier}
                </h3>
                <div className={`text-4xl font-bold mb-2 ${index === 1 ? 'text-white' : 'text-primary-500'}`}>
                  {rate.rate}
                </div>
                <p className={`text-sm mb-4 ${index === 1 ? 'text-primary-100' : 'text-dark-600'}`}>
                  Minimum: {rate.min}
                </p>
                <p className={`text-sm ${index === 1 ? 'text-primary-100' : 'text-dark-600'}`}>
                  {rate.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
              Why Choose Our Savings Accounts
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Built specifically for property managers with features that help you grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-900 mb-4">{feature.title}</h3>
                  <p className="text-dark-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-6">
                Complete Banking Solution
              </h2>
              <p className="text-xl text-dark-600 mb-8">
                Our savings accounts integrate seamlessly with your property management workflow, 
                providing a complete banking solution designed for real estate professionals.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheckCircle className="w-6 h-6 text-success-500 mr-3" />
                    <span className="text-lg text-dark-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Account Features</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="text-dark-700">Monthly Interest</span>
                  <span className="text-lg font-semibold text-primary-500">$120.50</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="text-dark-700">Annual Percentage Yield</span>
                  <span className="text-lg font-semibold text-primary-500">3.2%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="text-dark-700">Minimum Balance</span>
                  <span className="text-lg font-semibold text-primary-500">$0</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="text-dark-700">Monthly Fees</span>
                  <span className="text-lg font-semibold text-success-500">$0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Start Earning More Today
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Open your high-yield savings account in minutes and start earning competitive interest on your property management funds.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300">
            Open Account Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default SavingsAccounts;
