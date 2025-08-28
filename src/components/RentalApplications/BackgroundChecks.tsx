import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import dummyImage from '../../assets/dummy.jpg';

// Content data arrays
const mainFeatures = [
  {
    id: 'occupancies',
    title: "View Occupancies at a Glance",
    description: "Access the Occupancy Tracker, a visual lease timeline that makes it easy to see who's living where, for how long, and what's coming up next.",
    learnMoreUrl: "#"
  },
  {
    id: 'leases',
    title: "Send, Sign, and Store Leases Digitally",
    description: "Speed up the signing process with secure eSignatures. Simply create and send your lease form, then TenantCloud will walk tenants through the final steps. Don't need an e-signature? No worries— just upload the lease, and you're good to go.",
    learnMoreUrl: "#"
  },
  {
    id: 'compliance',
    title: "Stay Compliant with Attorney-Approved Forms",
    description: "Our state-specific lease forms are reviewed by real estate attorneys— designed to help you stay compliant and protected while giving you complete flexibility.",
    learnMoreUrl: "#"
  }
];

const BackgroundChecks = () => {
  const [activeFeature, setActiveFeature] = useState<string>('occupancies');

  const handleFeatureClick = (featureId: string) => {
    setActiveFeature(featureId);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 leading-tight">
              Streamline Your Rental Management
            </h2>
            
            {/* Main Description */}
            <p className="text-xl text-dark-600 leading-relaxed">
              Manage your properties efficiently with our comprehensive suite of tools designed to simplify every aspect of rental property administration.
            </p>
            
           
            
            {/* Accordion Style Feature Section */}
            <div className="space-y-4">
              {mainFeatures.map((feature) => (
                <div key={feature.id} className="border-t border-gray-200 pt-6">
                  <button
                    onClick={() => handleFeatureClick(feature.id)}
                    className={`w-full text-left transition-all duration-300 ${
                      activeFeature === feature.id 
                        ? 'text-dark-900' 
                        : 'text-dark-300 hover:text-gray-700'
                    }`}
                  >
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </button>
                  
                  {/* Description - Positioned below each heading */}
                  <div 
                    className={`transition-all duration-500 ${
                      activeFeature === feature.id 
                        ? 'opacity-100 max-h-96 mt-4' 
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    <div className="space-y-4">
                      <p className="text-lg text-dark-600 leading-relaxed">{feature.description}</p>
                      
                      <a href={feature.learnMoreUrl} className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold text-lg transition-colors">
                        Learn More <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={dummyImage} 
                alt="Rental Management Features" 
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg shadow-lg"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundChecks;
