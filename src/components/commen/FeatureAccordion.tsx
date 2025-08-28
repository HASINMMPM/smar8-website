import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface Feature {
  id: string;
  title: string;
  description: string;
  learnMoreUrl: string;
}

interface FeatureAccordionProps {
  title: string;
  description: string;
  features: Feature[];
  imageSrc: string;
  imageAlt: string;
  defaultActiveFeature?: string;
  className?: string;
}

const FeatureAccordion = ({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  defaultActiveFeature,
  className = ""
}: FeatureAccordionProps) => {
  const [activeFeature, setActiveFeature] = useState<string>(defaultActiveFeature || features[0]?.id || '');

  const handleFeatureClick = (featureId: string) => {
    setActiveFeature(featureId);
  };

  return (
    <section className={`bg-white py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 leading-tight">
              {title}
            </h2>
            
            {/* Main Description */}
            <p className="text-xl text-dark-600 leading-relaxed">
              {description}
            </p>
            
            {/* Accordion Style Feature Section */}
            <div className="space-y-4">
              {features.map((feature) => (
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
                src={imageSrc} 
                alt={imageAlt} 
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

export default FeatureAccordion;
