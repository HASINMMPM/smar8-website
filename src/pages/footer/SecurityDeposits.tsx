import React from 'react';
import { FaShieldAlt, FaLock, FaCheckCircle, FaClock, FaDollarSign, FaFileAlt } from 'react-icons/fa';
import { PageHero, ContentSection, Cta } from '../../components/commen';

const SecurityDeposits: React.FC = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: "Secure Escrow Management",
      description: "All security deposits are held in FDIC-insured escrow accounts, ensuring complete protection for both landlords and tenants."
    },
    {
      icon: FaLock,
      title: "Bank-Level Security",
      description: "256-bit SSL encryption and multi-factor authentication protect all financial transactions and sensitive data."
    },
    {
      icon: FaCheckCircle,
      title: "Automated Compliance",
      description: "Stay compliant with local and state regulations with automated deposit handling and documentation."
    },
    {
      icon: FaClock,
      title: "Instant Processing",
      description: "Deposits are processed instantly, with funds available immediately for both collection and refunds."
    },
    {
      icon: FaDollarSign,
      title: "Interest Earning",
      description: "Security deposits earn interest while held in escrow, benefiting both landlords and tenants."
    },
    {
      icon: FaFileAlt,
      title: "Complete Documentation",
      description: "Automated record-keeping and detailed transaction history for all security deposit activities."
    }
  ];

  const benefits = [
    "FDIC-insured escrow accounts",
    "Automated compliance tracking",
    "Interest earning on deposits",
    "Instant processing and transfers",
    "Complete audit trail",
    "Mobile-friendly interface"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Secure Security Deposit Management"
        description="Protect both landlords and tenants with our secure, compliant security deposit management system. All deposits are held in FDIC-insured escrow accounts with full transparency and automated compliance."
        className="bg-gradient-to-br from-primary-50 to-secondary-50 text-dark-900"
      />
      
      {/* Dashboard Preview */}
      <ContentSection className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors duration-300">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-xl hover:bg-primary-50 transition-colors duration-300">
              Learn More
            </button>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <FaShieldAlt className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-dark-900">Security Deposit Dashboard</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-dark-600">Total Deposits Held</span>
                  <span className="text-2xl font-bold text-primary-500">$125,430</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-dark-600">Active Properties</span>
                  <span className="text-2xl font-bold text-secondary-500">24</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-dark-600">Interest Earned</span>
                  <span className="text-2xl font-bold text-success-500">$1,250</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
              Why Choose Our Security Deposit System
            </h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              Built with security, compliance, and ease of use in mind to protect all parties involved.
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-6">
                Complete Protection & Compliance
              </h2>
              <p className="text-xl text-dark-600 mb-8">
                Our security deposit management system ensures complete compliance with local and state regulations 
                while providing maximum protection for all parties involved.
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
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">How It Works</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="text-lg font-semibold text-dark-900 mb-2">Tenant Submits Deposit</h4>
                    <p className="text-dark-600">Tenant pays security deposit through our secure platform</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="text-lg font-semibold text-dark-900 mb-2">Funds Held in Escrow</h4>
                    <p className="text-dark-600">Deposit is immediately transferred to FDIC-insured escrow account</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="text-lg font-semibold text-dark-900 mb-2">Automated Management</h4>
                    <p className="text-dark-600">System tracks compliance and generates required documentation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                  <div>
                    <h4 className="text-lg font-semibold text-dark-900 mb-2">Easy Refunds</h4>
                    <p className="text-dark-600">Process refunds instantly with full documentation and compliance</p>
                  </div>
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
            Secure Your Security Deposits Today
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join thousands of landlords who trust Smar8 for secure, compliant security deposit management.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

export default SecurityDeposits;
