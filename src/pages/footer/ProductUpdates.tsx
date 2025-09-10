import React from 'react';
import { FaRocket, FaBug, FaStar, FaBell, FaDownload, FaCode, FaCheckCircle } from 'react-icons/fa';

const ProductUpdates: React.FC = () => {
  const updates = [
    {
      type: "feature",
      title: "Advanced Analytics Dashboard",
      description: "New comprehensive analytics dashboard with real-time insights, customizable reports, and predictive analytics for better decision making.",
      date: "December 15, 2024",
      version: "v2.4.0",
      icon: FaRocket,
      highlights: ["Real-time data visualization", "Custom report builder", "Predictive analytics", "Mobile-optimized interface"]
    },
    {
      type: "improvement",
      title: "Enhanced Tenant Communication",
      description: "Improved tenant portal with better messaging system, file sharing capabilities, and automated notifications.",
      date: "December 10, 2024",
      version: "v2.3.2",
      icon: FaStar,
      highlights: ["In-app messaging", "File sharing", "Push notifications", "Multi-language support"]
    },
    {
      type: "fix",
      title: "Bug Fixes & Performance Improvements",
      description: "Resolved several critical bugs and significantly improved application performance and stability.",
      date: "December 5, 2024",
      version: "v2.3.1",
      icon: FaBug,
      highlights: ["Fixed payment processing issues", "Improved page load times", "Resolved mobile app crashes", "Enhanced data synchronization"]
    },
    {
      type: "feature",
      title: "Mobile App Redesign",
      description: "Complete redesign of our mobile application with improved user experience, new features, and better performance.",
      date: "November 28, 2024",
      version: "v2.3.0",
      icon: FaDownload,
      highlights: ["New intuitive interface", "Offline functionality", "Biometric authentication", "Improved navigation"]
    },
    {
      type: "improvement",
      title: "API Enhancements",
      description: "New API endpoints and improved developer tools for better third-party integrations and custom solutions.",
      date: "November 20, 2024",
      version: "v2.2.5",
      icon: FaCode,
      highlights: ["New REST API endpoints", "GraphQL support", "Webhook improvements", "Enhanced documentation"]
    },
    {
      type: "feature",
      title: "Automated Rent Collection",
      description: "New automated rent collection system with smart reminders, late fee management, and multiple payment options.",
      date: "November 15, 2024",
      version: "v2.2.0",
      icon: FaRocket,
      highlights: ["Smart payment reminders", "Automated late fees", "Multiple payment methods", "Recurring payment setup"]
    }
  ];

  const upcomingFeatures = [
    {
      title: "AI-Powered Tenant Screening",
      description: "Advanced AI algorithms for more accurate tenant screening and risk assessment.",
      eta: "Q1 2025",
      status: "In Development"
    },
    {
      title: "Property Maintenance Automation",
      description: "Automated maintenance scheduling and vendor management system.",
      eta: "Q1 2025",
      status: "In Development"
    },
    {
      title: "Advanced Financial Reporting",
      description: "Comprehensive financial reporting with tax preparation tools and investment analysis.",
      eta: "Q2 2025",
      status: "Planned"
    },
    {
      title: "Multi-Property Portfolio Management",
      description: "Enhanced tools for managing large property portfolios with advanced analytics.",
      eta: "Q2 2025",
      status: "Planned"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "feature":
        return "bg-primary-100 text-primary-700";
      case "improvement":
        return "bg-secondary-100 text-secondary-700";
      case "fix":
        return "bg-success-100 text-success-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "feature":
        return "New Feature";
      case "improvement":
        return "Improvement";
      case "fix":
        return "Bug Fix";
      default:
        return "Update";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
              Product Updates
            </h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto mb-8">
              Stay informed about the latest features, improvements, and fixes we're rolling out to make 
              your property management experience even better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors duration-300">
                Subscribe to Updates
              </button>
              <button className="px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-xl hover:bg-primary-50 transition-colors duration-300">
                View Release Notes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">Recent Updates</h2>
            <p className="text-lg text-dark-600">Latest improvements and new features</p>
          </div>
          
          <div className="space-y-8">
            {updates.map((update, index) => {
              const IconComponent = update.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-primary-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-dark-900">{update.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(update.type)}`}>
                            {getTypeLabel(update.type)}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-dark-500">
                          <span>{update.date}</span>
                          <span className="mx-2">•</span>
                          <span className="font-semibold">{update.version}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-dark-600 mb-6">{update.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {update.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center">
                        <FaCheckCircle className="w-5 h-5 text-success-500 mr-3" />
                        <span className="text-dark-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">Coming Soon</h2>
            <p className="text-lg text-dark-600">Exciting features we're working on</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-dark-900">{feature.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    feature.status === 'In Development' 
                      ? 'bg-primary-100 text-primary-700' 
                      : 'bg-warning-100 text-warning-700'
                  }`}>
                    {feature.status}
                  </span>
                </div>
                <p className="text-dark-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-sm text-dark-500">
                  <FaBell className="w-4 h-4 mr-2" />
                  <span>Expected: {feature.eta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Never Miss an Update
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and be the first to know about new features, improvements, and important announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-primary-100 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductUpdates;
