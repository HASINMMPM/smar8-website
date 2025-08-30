import React from 'react';
import PageHero from '../../components/commen/PageHero';
import ContentSection from '../../components/commen/ContentSection';

const HelpCenter: React.FC = () => {
  return (
    <div>
      <PageHero
        title="Help Center"
        description="Find answers to your questions and learn how to make the most of Smar8's property management platform."
      />
      
      <ContentSection title="Popular Topics">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-primary-600">Getting Started</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Account setup guide</li>
              <li>• First property setup</li>
              <li>• Platform overview</li>
              <li>• Quick start tutorial</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-primary-600">Property Management</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Adding properties</li>
              <li>• Tenant management</li>
              <li>• Rent collection</li>
              <li>• Maintenance requests</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-primary-600">Financial Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Banking integration</li>
              <li>• Expense tracking</li>
              <li>• Financial reports</li>
              <li>• Tax preparation</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-primary-600">Account & Billing</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Plan management</li>
              <li>• Payment methods</li>
              <li>• Invoice history</li>
              <li>• Account settings</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-primary-600">Mobile App</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• App download</li>
              <li>• Mobile features</li>
              <li>• Push notifications</li>
              <li>• Offline access</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-primary-600">Troubleshooting</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Common issues</li>
              <li>• Error messages</li>
              <li>• Performance tips</li>
              <li>• Browser compatibility</li>
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-900 mb-8 text-center">Still Need Help?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Get instant help from our support team during business hours.</p>
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Start Chat
              </button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us a detailed message and we'll respond within 24 hours.</p>
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Send Email
              </button>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark-900 mb-6">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-600">1-800-SMAR8-00</p>
              <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">support@smar8.com</p>
              <p className="text-sm text-gray-500">24/7 response</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday</p>
              <p className="text-sm text-gray-500">9:00 AM - 6:00 PM EST</p>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  );
};

export default HelpCenter;
