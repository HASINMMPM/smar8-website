import React, { useState, useEffect, useRef } from 'react';
import { FaCheck, FaBuilding, FaUsers, FaChartLine, FaShieldAlt } from 'react-icons/fa';

// Feature data array for reusability
const featuresData = [
  {
    id: 1,
    title: "Property Management",
    description: "Streamline your property operations with our comprehensive management tools. Track maintenance, handle tenant requests, and manage property portfolios efficiently.",
    icon: FaBuilding,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Property management dashboard showing building overview"
  },
  {
    id: 2,
    title: "Tenant Screening",
    description: "Comprehensive tenant screening with background checks, credit reports, and rental history verification. Make informed decisions with confidence.",
    icon: FaUsers,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Tenant screening interface with profile cards"
  },
  {
    id: 3,
    title: "Financial Analytics",
    description: "Advanced reporting and analytics to track income, expenses, and property performance. Get insights to optimize your rental business.",
    icon: FaChartLine,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Financial analytics dashboard with charts and graphs"
  },
  {
    id: 4,
    title: "Secure Payments",
    description: "Secure online rent collection with automated reminders and late fee management. Multiple payment options for tenant convenience.",
    icon: FaShieldAlt,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Secure payment processing interface"
  }
];

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState<boolean[]>(new Array(featuresData.length).fill(false));
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection Observer for scroll-based activation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = featureRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            setIsVisible(prev => {
              const newVisible = [...prev];
              newVisible[index] = entry.isIntersecting;
              return newVisible;
            });
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Update active feature based on visibility
  useEffect(() => {
    const visibleIndex = isVisible.findIndex(visible => visible);
    if (visibleIndex !== -1) {
      setActiveFeature(visibleIndex);
    }
  }, [isVisible]);

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    // Scroll to feature on mobile
    if (window.innerWidth < 1024) {
      featureRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleFeatureClick(index);
    }
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-700 mb-4">
            Powerful Features for Property Management
          </h2>
          <p className="text-lg text-dark-400 max-w-3xl mx-auto">
            Everything you need to manage your properties efficiently, from tenant screening to financial reporting.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Feature List */}
          <div className="space-y-6">
            {featuresData.map((feature, index) => {
              const IconComponent = feature.icon;
              const isActive = index === activeFeature;
              
              return (
                                 <div
                   key={feature.id}
                   ref={(el) => {
                     featureRefs.current[index] = el;
                   }}
                   className={`group cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'bg-white shadow-lg rounded-xl p-6 border-l-4 border-secondary-500' 
                      : 'bg-white/50 hover:bg-white/80 rounded-xl p-6 border-l-4 border-transparent hover:border-secondary-300'
                  }`}
                  onClick={() => handleFeatureClick(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${feature.title} feature`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      isActive 
                        ? 'bg-secondary-100 text-secondary-600' 
                        : 'bg-gray-100 text-gray-600 group-hover:bg-secondary-50 group-hover:text-secondary-600'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                        isActive ? 'text-dark-700' : 'text-dark-800 group-hover:text-dark-900'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                        isActive ? 'text-dark-700' : 'text-dark-600 group-hover:text-dark-700'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Active indicator */}
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-secondary-500 text-white scale-100' 
                        : 'bg-gray-200 text-transparent scale-75 group-hover:bg-secondary-100 group-hover:text-secondary-500'
                    }`}>
                      <FaCheck className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Image Display */}
          <div className="relative lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative aspect-[4/3] lg:aspect-[3/2]">
                {featuresData.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === activeFeature 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95'
                    }`}
                    aria-hidden={index !== activeFeature}
                  >
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    
                    {/* Image overlay with feature info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-200 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                                 ))}
               </div>
              
              {/* Feature navigation dots */}
              {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {featuresData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleFeatureClick(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeFeature 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to feature ${index + 1}`}
                  />
                ))}
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
     
      </div>
    </section>
  );
};

export default Features;
