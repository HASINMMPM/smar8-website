import React from 'react';
import { FaBook, FaChartLine, FaDollarSign, FaHome, FaUsers, FaShieldAlt } from 'react-icons/fa';

const InvestingGuides: React.FC = () => {
  const guides = [
    {
      icon: FaBook,
      title: "Getting Started in Real Estate Investing",
      description: "A comprehensive beginner's guide to real estate investing, covering everything from market research to financing options.",
      readTime: "15 min read",
      level: "Beginner",
      topics: ["Market Research", "Financing", "Property Types", "Risk Assessment"]
    },
    {
      icon: FaChartLine,
      title: "Advanced Investment Strategies",
      description: "Learn sophisticated investment strategies including BRRRR method, house hacking, and portfolio diversification.",
      readTime: "25 min read",
      level: "Advanced",
      topics: ["BRRRR Method", "House Hacking", "Portfolio Diversification", "Market Timing"]
    },
    {
      icon: FaDollarSign,
      title: "Financial Analysis & ROI Calculations",
      description: "Master the art of financial analysis with detailed guides on cap rates, cash flow, and return calculations.",
      readTime: "20 min read",
      level: "Intermediate",
      topics: ["Cap Rates", "Cash Flow", "ROI Calculations", "Tax Benefits"]
    },
    {
      icon: FaHome,
      title: "Property Management Best Practices",
      description: "Essential strategies for effective property management, tenant relations, and maintenance optimization.",
      readTime: "18 min read",
      level: "Intermediate",
      topics: ["Tenant Screening", "Maintenance", "Legal Compliance", "Technology Tools"]
    },
    {
      icon: FaUsers,
      title: "Building Your Real Estate Team",
      description: "Learn how to assemble and manage a professional team of contractors, agents, and service providers.",
      readTime: "12 min read",
      level: "Intermediate",
      topics: ["Team Building", "Contractor Relations", "Service Providers", "Networking"]
    },
    {
      icon: FaShieldAlt,
      title: "Risk Management & Insurance",
      description: "Protect your investments with comprehensive risk management strategies and insurance coverage.",
      readTime: "16 min read",
      level: "Intermediate",
      topics: ["Insurance Types", "Risk Assessment", "Legal Protection", "Emergency Planning"]
    }
  ];

  const categories = [
    { name: "Getting Started", count: 8, color: "bg-primary-100 text-primary-700" },
    { name: "Investment Strategies", count: 12, color: "bg-secondary-100 text-secondary-700" },
    { name: "Financial Analysis", count: 6, color: "bg-success-100 text-success-700" },
    { name: "Property Management", count: 10, color: "bg-warning-100 text-warning-700" },
    { name: "Legal & Compliance", count: 4, color: "bg-error-100 text-error-700" }
  ];

  const featuredArticles = [
    {
      title: "The Complete Guide to Rental Property Analysis",
      excerpt: "Learn how to analyze rental properties like a pro with our comprehensive guide covering all key metrics and calculations.",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "20 min",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "5 Common Mistakes New Real Estate Investors Make",
      excerpt: "Avoid these costly mistakes that many new investors make and set yourself up for success from day one.",
      author: "Michael Chen",
      date: "Dec 12, 2024",
      readTime: "15 min",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Maximizing Cash Flow in a Rising Interest Rate Environment",
      excerpt: "Strategies to maintain and increase cash flow when interest rates are on the rise and market conditions are challenging.",
      author: "Emily Rodriguez",
      date: "Dec 10, 2024",
      readTime: "18 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
              Real Estate Investing Guides
            </h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto mb-8">
              Master the art of real estate investing with our comprehensive guides, expert insights, and proven strategies 
              from industry professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors duration-300">
                Browse All Guides
              </button>
              <button className="px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-xl hover:bg-primary-50 transition-colors duration-300">
                Download Free E-book
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-dark-600">Find guides tailored to your experience level and interests</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <div key={index} className={`p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer ${category.color}`}>
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-sm opacity-75">{category.count} guides</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">Featured Articles</h2>
            <p className="text-lg text-dark-600">Our most popular and recently updated guides</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-dark-500 mb-3">
                    <span>{article.author}</span>
                    <span className="mx-2">•</span>
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-dark-900 mb-3">{article.title}</h3>
                  <p className="text-dark-600 mb-4">{article.excerpt}</p>
                  <button className="text-primary-500 font-semibold hover:text-primary-600 transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">All Investing Guides</h2>
            <p className="text-lg text-dark-600">Comprehensive guides for every aspect of real estate investing</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => {
              const IconComponent = guide.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-500" />
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        guide.level === 'Beginner' ? 'bg-success-100 text-success-700' :
                        guide.level === 'Intermediate' ? 'bg-warning-100 text-warning-700' :
                        'bg-error-100 text-error-700'
                      }`}>
                        {guide.level}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-dark-900 mb-3">{guide.title}</h3>
                  <p className="text-dark-600 mb-4">{guide.description}</p>
                  
                  <div className="flex items-center text-sm text-dark-500 mb-4">
                    <span>{guide.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {guide.topics.slice(0, 2).map((topic, topicIndex) => (
                      <span key={topicIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {topic}
                      </span>
                    ))}
                    {guide.topics.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        +{guide.topics.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-300">
                    Read Guide
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with New Guides
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Get notified when we publish new investing guides, market insights, and expert tips.
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
        </div>
      </section>
    </div>
  );
};

export default InvestingGuides;
