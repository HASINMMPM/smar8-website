import React from 'react';
import PageHero from '../../components/commen/PageHero';
import ContentSection from '../../components/commen/ContentSection';

const Blog: React.FC = () => {
  return (
    <div>
      <PageHero
        title="Real Estate Investment Blog"
        description="Expert insights, tips, and strategies to help you succeed in real estate investing and property management."
      />
      
      <ContentSection title="Latest Articles">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <div className="text-sm text-primary-600 mb-2">Property Management</div>
              <h3 className="text-xl font-semibold mb-2">10 Essential Tips for New Landlords</h3>
              <p className="text-gray-600 mb-4">Learn the fundamentals of property management to avoid common pitfalls and maximize your returns.</p>
              <div className="text-sm text-gray-500">March 15, 2024 • 5 min read</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <div className="text-sm text-primary-600 mb-2">Investment Strategy</div>
              <h3 className="text-xl font-semibold mb-2">How to Analyze Rental Property ROI</h3>
              <p className="text-gray-600 mb-4">Master the art of calculating returns on investment to make smarter property decisions.</p>
              <div className="text-sm text-gray-500">March 12, 2024 • 7 min read</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <div className="text-sm text-primary-600 mb-2">Market Trends</div>
              <h3 className="text-xl font-semibold mb-2">2024 Real Estate Market Outlook</h3>
              <p className="text-gray-600 mb-4">Stay ahead of the curve with our comprehensive analysis of emerging market trends.</p>
              <div className="text-sm text-gray-500">March 10, 2024 • 6 min read</div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection className="bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark-900 mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">Get the latest insights delivered to your inbox.</p>
          <div className="max-w-md mx-auto">
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  );
};

export default Blog;
