import React, { useState } from 'react';
import { FaArrowLeft, FaPrint, FaEllipsisH, FaBars, FaPlus, FaSearch, FaChevronDown, FaFolder, FaCheck, FaArrowRight } from 'react-icons/fa';

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Rent Collection & Accounting",
      description: "Get paid on time every time with online rent collection and automatic invoices, all in one place. Plus, all the accounting tools you need to manage finances and cash flow.",

    },
    {
      id: 1,
      title: "Listings & Lead Management",
      description: "Showcase your rentals on a custom website or share your listings on several popular sites in one click. From there, you can track eligible leads and invite them to apply.",
    
    },
    {
      id: 2,
      title: "Tenant Screenings & Applications",
      description: "Find reliable tenants even faster with our comprehensive criminal, identification, and finance screenings. Choose from several screening packages to meet your needs.",
    }
  ];

  const renderMobileUI = (featureIndex: number) => {
    switch (featureIndex) {
      case 0: // Rent Collection
        return (
          <div className="bg-white rounded-lg p-4 h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <FaArrowLeft className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">Transaction</h3>
              <div className="flex items-center space-x-2">
                <FaPrint className="w-4 h-4 text-gray-600" />
                <FaEllipsisH className="w-4 h-4 text-gray-600" />
              </div>
            </div>

            {/* Transaction Details */}
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Due on Mar 15, 2025</p>
                <div className="flex items-center space-x-2">
                  <h4 className="text-lg font-semibold text-gray-900">Rent for $2,000.00</h4>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">• Partial</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-purple-600 font-medium">$500.00 Left</span>
                  <span className="text-green-600 font-medium">$1,500.00 Paid</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>

              {/* Payer Info */}
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-600 mb-2">Payer</p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">MW</span>
                  </div>
                  <span className="font-medium text-gray-900">Mia White</span>
                </div>
              </div>

              {/* Collapsible Sections */}
              <div className="space-y-2">
                {[
                  { title: "Summary", subtitle: "Invoice details" },
                  { title: "Payments & Activity", subtitle: "1 record" },
                  { title: "Attachments", subtitle: "0 records" }
                ].map((section, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{section.title}</p>
                      <p className="text-sm text-gray-600">{section.subtitle}</p>
                    </div>
                    <FaArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 1: // Listings Management
        return (
          <div className="bg-white rounded-lg p-4 h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <FaBars className="w-5 h-5 text-gray-600" />
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold text-gray-900">Listings</h3>
                <FaChevronDown className="w-4 h-4 text-gray-600" />
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <FaPlus className="w-4 h-4 text-white" />
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">7 Total</p>

            {/* Search Bar */}
            {/* <div className="mb-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Q Search here..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
            </div> */}

            {/* Filter Buttons */}
            <div className="flex space-x-2 mb-4">
              {["+ Status", "+ Days listed", "+ Syndication"].map((filter, index) => (
                <button key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                  {filter}
                </button>
              ))}
            </div>

            {/* Listing Cards */}
            <div className="space-y-4">
              {/* First Listing */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative">
                  <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                  <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                    Active 55+
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-lg font-semibold text-gray-900">$3,000.00</p>
                      <p className="text-sm text-gray-600">Rent/monthly</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Listed</span>
                  </div>
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <span>× 1 Bedrooms</span>
                    <span>× 0.5 Bathrooms</span>
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <div className="bg-blue-50 rounded-lg p-3 flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <FaCheck className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Are you charging enough for your rental?</p>
                  <p className="text-sm text-gray-600">Get the comparison of your property with others in the area.</p>
                </div>
                <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-xs">?</span>
                </div>
              </div>

              {/* Second Listing */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative">
                  <div className="w-full h-16 bg-gradient-to-br from-blue-500 to-blue-700"></div>
                </div>
                {/* <div className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-lg font-semibold text-gray-900">$5,000.00</p>
                      <p className="text-sm text-gray-600">Rent/monthly</p>
                    </div>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Unlisted</span>
                  </div>
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <span>× 3 Bedrooms</span>
                    <span>× 1.5 Bathrooms</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        );

      case 2: // Tenant Screenings
        return (
          <div className="bg-white rounded-lg p-4 h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <FaBars className="w-5 h-5 text-gray-600" />
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold text-gray-900">Applications</h3>
                <FaChevronDown className="w-4 h-4 text-gray-600" />
              </div>
              <FaEllipsisH className="w-5 h-5 text-gray-600" />
            </div>

            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Q Search here..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["+ Property & Units", "+ Status", "+ Screening status", "+ Ap"].map((filter, index) => (
                <button key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                  {filter}
                </button>
              ))}
            </div>

            {/* Applications List */}
            <div className="space-y-4">
              {/* Honeybee Hideaway */}
              <div className="border border-gray-200 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-3">
                  <FaFolder className="w-4 h-4 text-gray-600" />
                  <span className="font-medium text-gray-900">Honeybee Hideaway</span>
                  <span className="text-sm text-gray-600">(2 Applications)</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">OJ</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Oliver James</p>
                        <p className="text-sm text-gray-600">Applied on Mar 21, 2025</p>
                      </div>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">In review</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">NS</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Nancy Star Gill</p>
                        <p className="text-sm text-gray-600">Applied on Mar 17, 2025</p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Approved</span>
                  </div>
                </div>
              </div>

              {/* Multi Unit */}
              <div className="border border-gray-200 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <FaFolder className="w-4 h-4 text-gray-600" />
                  <span className="font-medium text-gray-900">Multi, Unit 1</span>
                  <span className="text-sm text-gray-600">(4 Applications)</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 text-center">Showing 1-2 of 2 results</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Makes Smar8 Solutions Stand Out?
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Feature List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={feature.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                <button
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left transition-colors duration-200 ${
                    activeFeature === index 
                      ? 'text-gray-900' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <h3 className={`text-xl font-semibold mb-3 ${
                    activeFeature === index ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {feature.title}
                  </h3>
                  
                  {activeFeature === index && (
                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                  
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Right Column - Mobile UI Mockup */}
          <div className="relative">
            <div className="bg-green-100 rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="w-full  max-w-sm mx-auto">
                {renderMobileUI(activeFeature)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
