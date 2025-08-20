import React from 'react';
import { FaHome, FaStar, FaClock, FaUsers, FaDollarSign, FaGlobe } from 'react-icons/fa';

const Achievements: React.FC = () => {
  return (
    <section className="py-20 bg-secondary-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="text-center mb-16">
          {/* Achievement Label */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-secondary-600 rounded flex items-center justify-center">
              <FaHome className="w-3 h-3 text-white" />
            </div>
            <span className="text-secondary-200 text-sm font-medium">Our Achievements</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted Tools, Proven Results
          </h2>

          {/* Sub Text */}
          <p className="text-secondary-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From millions of users to a growing team across the globe—see what sets us apart from the rest.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: 1 million + users */}
          <div className="bg-secondary-600 rounded-lg p-8 text-white shadow-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaUsers className="w-8 h-8 text-secondary-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">1 million +</div>
              <div className="text-xl font-semibold mb-4">users</div>
              <p className="text-secondary-100 text-sm leading-relaxed">
                Trusted by over one million landlords and renters (and growing).
              </p>
            </div>
          </div>

          {/* Card 2: $1 billion + in rent payments */}
          <div className="bg-secondary-700 rounded-lg p-8 text-white shadow-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaDollarSign className="w-8 h-8 text-secondary-700" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">$1 billion +</div>
              <div className="text-xl font-semibold mb-4">in rent payments</div>
              <p className="text-green-100 text-sm leading-relaxed">
                Over a billion dollars in rent payments are processed annually, reinforcing our commitment to secure, efficient payments.
              </p>
            </div>
          </div>

          {/* Card 3: 99.94% Uptime */}
          <div className="bg-secondary-800 rounded-lg p-8 text-white shadow-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaClock className="w-8 h-8 text-secondary-800" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">99.94%</div>
              <div className="text-xl font-semibold mb-4">Uptime</div>
              <p className="text-secondary-200 text-sm leading-relaxed">
                We work tirelessly to ensure that our software is always up and running when you need it most.
              </p>
            </div>
          </div>

          {/* Card 4: 4.7 App Store Rating */}
          <div className="bg-secondary-600 rounded-lg p-8 text-white shadow-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaStar className="w-8 h-8 text-secondary-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.7</div>
              <div className="text-xl font-semibold mb-4">App Store Rating</div>
                <p className="text-secondary-200 text-sm leading-relaxed">
                Consistently high ratings from our users across all platforms and devices.
              </p>
            </div>
          </div>

          {/* Card 5: 10+ integration platforms */}
          <div className="bg-secondary-700 rounded-lg p-8 text-dark-700 shadow-lg text-white">
            <div className="text-center">
              <div className="w-16 h-16 bg-white  rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaGlobe className="w-8 h-8 text-secondary-700" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-xl font-semibold mb-4">integration platforms</div>
              <p className="text-secondary-100 text-sm leading-relaxed">
                Smar8 Solutions connects to over ten platforms, offering some of the most comprehensive, direct integrations in the industry.
              </p>
            </div>
          </div>

          {/* Card 6: 100+ global employees */}
          <div className="bg-secondary-800 rounded-lg p-8 text-white shadow-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <FaUsers className="w-8 h-8 text-secondary-800" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
              <div className="text-xl font-semibold mb-4">global employees</div>
              <p className="text-secondary-200 text-sm leading-relaxed">
                With employees across the US, Philippines, and Ukraine, we bring together the best minds in PropTech, working to build a better platform, worldwide.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;

