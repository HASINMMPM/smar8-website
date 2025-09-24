import React from 'react';
import { FaFileAlt, FaDownload, FaEdit, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import { PageHero, ContentSection, Cta } from '../../components/commen';

const RentalForms: React.FC = () => {
  const formCategories = [
    {
      title: "Lease Agreements",
      description: "Comprehensive lease agreements for all property types and rental situations.",
      forms: [
        { name: "Standard Residential Lease", pages: 8, updated: "2024", downloads: "2.5K" },
        { name: "Month-to-Month Agreement", pages: 4, updated: "2024", downloads: "1.8K" },
        { name: "Commercial Lease Agreement", pages: 12, updated: "2024", downloads: "890" },
        { name: "Roommate Agreement", pages: 6, updated: "2024", downloads: "1.2K" }
      ]
    },
    {
      title: "Application Forms",
      description: "Professional tenant screening and application forms to find the right tenants.",
      forms: [
        { name: "Rental Application Form", pages: 3, updated: "2024", downloads: "3.2K" },
        { name: "Background Check Authorization", pages: 2, updated: "2024", downloads: "2.1K" },
        { name: "Employment Verification Form", pages: 2, updated: "2024", downloads: "1.5K" },
        { name: "Reference Check Form", pages: 2, updated: "2024", downloads: "1.3K" }
      ]
    },
    {
      title: "Property Management",
      description: "Essential forms for day-to-day property management operations.",
      forms: [
        { name: "Move-in/Move-out Checklist", pages: 4, updated: "2024", downloads: "2.8K" },
        { name: "Maintenance Request Form", pages: 2, updated: "2024", downloads: "2.2K" },
        { name: "Rent Increase Notice", pages: 1, updated: "2024", downloads: "1.7K" },
        { name: "Property Inspection Report", pages: 6, updated: "2024", downloads: "1.9K" }
      ]
    },
    {
      title: "Legal & Compliance",
      description: "Important legal documents to ensure compliance with local and state laws.",
      forms: [
        { name: "Security Deposit Receipt", pages: 2, updated: "2024", downloads: "2.4K" },
        { name: "Notice to Pay or Quit", pages: 1, updated: "2024", downloads: "1.6K" },
        { name: "Eviction Notice", pages: 2, updated: "2024", downloads: "980" },
        { name: "Pet Addendum", pages: 3, updated: "2024", downloads: "1.4K" }
      ]
    }
  ];

  const features = [
    {
      icon: FaShieldAlt,
      title: "Legally Compliant",
      description: "All forms are reviewed by legal experts and updated regularly to ensure compliance with current laws."
    },
    {
      icon: FaEdit,
      title: "Customizable",
      description: "Easily customize any form to match your specific needs and property requirements."
    },
    {
      icon: FaDownload,
      title: "Instant Download",
      description: "Download forms immediately in PDF or Word format for immediate use."
    },
    {
      icon: FaCheckCircle,
      title: "Professional Quality",
      description: "High-quality, professional forms that reflect well on your property management business."
    }
  ];

  const popularForms = [
    { name: "Standard Residential Lease", downloads: "2.5K", rating: 4.9 },
    { name: "Rental Application Form", downloads: "3.2K", rating: 4.8 },
    { name: "Move-in/Move-out Checklist", downloads: "2.8K", rating: 4.7 },
    { name: "Maintenance Request Form", downloads: "2.2K", rating: 4.6 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Professional Rental Forms"
        description="Access a comprehensive library of legally compliant rental forms, lease agreements, and property management documents. Download, customize, and use instantly."
        className="bg-gradient-to-br from-primary-50 to-secondary-50 text-dark-900"
      />
      
      {/* CTA Buttons */}
      <ContentSection className="bg-white">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors duration-300">
            Browse All Forms
          </button>
          <button className="px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-xl hover:bg-primary-50 transition-colors duration-300">
            Download Free Sample
          </button>
        </div>
      </ContentSection>

      {/* Popular Forms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">Most Popular Forms</h2>
            <p className="text-lg text-dark-600">Our most downloaded and highly rated rental forms</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularForms.map((form, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <FaFileAlt className="w-8 h-8 text-primary-500" />
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-sm font-semibold text-dark-700">{form.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-2">{form.name}</h3>
                <p className="text-sm text-dark-600 mb-4">{form.downloads} downloads</p>
                <button className="w-full px-4 py-2 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-300">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">Form Categories</h2>
            <p className="text-lg text-dark-600">Organized by type for easy navigation</p>
          </div>
          
          <div className="space-y-8">
            {formCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">{category.title}</h3>
                  <p className="text-dark-600">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.forms.map((form, formIndex) => (
                    <div key={formIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <FaFileAlt className="w-6 h-6 text-primary-500 mt-1" />
                        <div className="text-right text-sm text-dark-500">
                          <div>{form.pages} pages</div>
                          <div>Updated {form.updated}</div>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-dark-900 mb-2">{form.name}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-dark-600">{form.downloads} downloads</span>
                        <button className="px-3 py-1 bg-primary-500 text-white text-sm font-semibold rounded hover:bg-primary-600 transition-colors duration-300">
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <ContentSection 
        title="Why Choose Our Forms"
        className="bg-white"
      >
        <p className="text-lg text-dark-600 text-center mb-12">Professional quality forms designed for property managers</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-3">{feature.title}</h3>
                <p className="text-dark-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </ContentSection>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 mb-4">How It Works</h2>
            <p className="text-lg text-dark-600">Get started with our rental forms in just a few simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-dark-900 mb-3">Browse & Select</h3>
              <p className="text-dark-600">Browse our comprehensive library and select the forms you need for your property management business.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-dark-900 mb-3">Customize</h3>
              <p className="text-dark-600">Download and customize the forms to match your specific needs, property details, and local requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-dark-900 mb-3">Use & Manage</h3>
              <p className="text-dark-600">Print, distribute, and manage your forms with our integrated property management system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Cta
        heading="Get Access to All Forms"
        description="Join thousands of property managers who rely on our professional rental forms to streamline their operations."
        buttonText="Start Free Trial"
        buttonUrl="/pricing"
      />
    </div>
  );
};

export default RentalForms;
