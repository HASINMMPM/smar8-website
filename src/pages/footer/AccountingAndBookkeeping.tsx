import React from 'react';
import PageHero from '../../components/commen/PageHero';
import ContentSection from '../../components/commen/ContentSection';

const AccountingAndBookkeeping: React.FC = () => {
  return (
    <div>
      <PageHero
        title="Accounting & Bookkeeping Solutions"
        description="Professional accounting and bookkeeping services designed specifically for real estate investors to maximize tax benefits and maintain compliance."
      />
      
      <ContentSection title="Comprehensive Financial Management">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expense Tracking</h3>
            <p className="text-gray-600">Automatically categorize and track all property-related expenses for tax optimization.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Financial Reporting</h3>
            <p className="text-gray-600">Generate comprehensive financial reports including P&L statements, cash flow analysis, and tax summaries.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tax Optimization</h3>
            <p className="text-gray-600">Maximize deductions and ensure compliance with real estate tax regulations and requirements.</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-900 mb-8 text-center">Our Accounting Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Monthly Bookkeeping</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Transaction categorization</li>
                <li>• Bank reconciliation</li>
                <li>• Expense tracking</li>
                <li>• Income recording</li>
                <li>• Monthly financial statements</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Tax Preparation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Schedule E preparation</li>
                <li>• Depreciation calculations</li>
                <li>• Deduction optimization</li>
                <li>• Tax planning strategies</li>
                <li>• IRS compliance</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Financial Analysis</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Cash flow analysis</li>
                <li>• Profitability reports</li>
                <li>• Investment performance</li>
                <li>• Budget planning</li>
                <li>• ROI calculations</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Compliance & Reporting</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Regulatory compliance</li>
                <li>• Audit preparation</li>
                <li>• Financial disclosures</li>
                <li>• Record keeping</li>
                <li>• Documentation management</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-dark-900 mb-6">Why Choose Our Accounting Services?</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                1
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">Real Estate Expertise</h3>
                <p className="text-gray-600">Our team specializes in real estate accounting, understanding the unique challenges and opportunities in property investment.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                2
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">Technology-Driven</h3>
                <p className="text-gray-600">Advanced software and automation ensure accuracy, efficiency, and real-time access to your financial data.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                3
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">Tax Optimization</h3>
                <p className="text-gray-600">Maximize your deductions and minimize tax liability with our strategic tax planning and preparation services.</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection className="bg-primary-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark-900 mb-6">Ready to Optimize Your Finances?</h2>
          <p className="text-xl text-gray-600 mb-8">Let our expert team handle your accounting while you focus on growing your real estate portfolio.</p>
          <div className="space-x-4">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Get Started Today
            </button>
            <button className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </ContentSection>
    </div>
  );
};

export default AccountingAndBookkeeping;
