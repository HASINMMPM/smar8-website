import React from 'react';
import { FaKey, FaChartLine, FaMousePointer } from 'react-icons/fa';

const OurStory: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our Story
        </h2>

        {/* Main Card Container */}
        <div className="bg-white rounded-lg shadow-md p-8 lg:p-12">
          
          {/* Content Block 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 pb-12 border-b border-gray-200">
            <div className="space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                Smar8 Solutions' Mission: A Better Way to Rent
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The rental industry was plagued with manual tasks, communication errors, and financial headaches. Property managers spent countless hours on paperwork, tenant screening, and maintenance coordination, while landlords struggled to track income and expenses effectively.
                </p>
                <p>
                  Smar8 Solutions was founded to help small businesses manage rentals more efficiently and connect landlords, owners, and renters in a seamless digital ecosystem. Our platform streamlines every aspect of property management, from tenant applications to rent collection.
                </p>
                <p>
                  Today, we continue to expand our services and support businesses of all sizes, from individual landlords managing their first property to large property management companies overseeing hundreds of units across multiple locations.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-36 h-36 mx-auto bg-green-100 rounded-lg flex items-center justify-center">
                <FaKey className="w-24 h-24 text-green-600" />
              </div>
            </div>
          </div>

          {/* Content Block 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 pb-12 border-b border-gray-200">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-36 h-36 mx-auto bg-purple-100 rounded-lg flex items-center justify-center">
                <FaChartLine className="w-24 h-24 text-purple-600" />
              </div>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                Built for Independent & Growing Portfolios
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Managing rentals shouldn't be complicated. Whether you're a first-time landlord or managing a growing portfolio, Smar8 Solutions provides a feature-rich solution that scales with your business. Our platform is designed to help business owners scale at their own pace, with tools that grow alongside your property management needs.
              </p>
            </div>
          </div>

          {/* Content Block 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                Join Us in the Transformation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Smar8 Solutions provides powerful tools for efficient, confident, and affordable property management. Our comprehensive platform helps you manage properties with ease, build better relationships with tenants, and maximize your rental income. Renting doesn't have to be a hassle—let's make it better together.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-36 h-36 mx-auto bg-blue-100 rounded-lg flex items-center justify-center">
                <FaMousePointer className="w-24 h-24 text-blue-600" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;

