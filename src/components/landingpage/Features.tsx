import React from 'react';
import dualMobile from '../../assets/dual-mobile.jpg';

// Feature data array for reusability
const featuresData = [
  {
    id: 1,
    number: "01",
    title: "Modern Design",
    subtitle: "We follow ui design",
    description: "Business changes you. As you move thro this life and this world, you change thin slightly, you leave marks behind."
  },
  {
    id: 2,
    number: "02", 
    title: "Easy Installation",
    subtitle: "You can install our app",
    description: "Business changes you. As you move thro this life and this world, you change thin slightly, you leave marks behind."
  },
  {
    id: 3,
    number: "03",
    title: "Weakly Update",
    subtitle: "We relased new version",
    description: "Business changes you. As you move thro this life and this world, you change thin slightly, you leave marks behind."
  },
  {
    id: 4,
    number: "04",
    title: "24/7 Support",
    subtitle: "We offer 24/7 support",
    description: "Business changes you. As you move thro this life and this world, you change thin slightly, you leave marks behind."
  }
];

const Features: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-50 via-blue-50 to-green-50 modern-section relative overflow-hidden">
      {/* Dotted background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="modern-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary-500 text-sm font-medium mb-4">
            Most Popular Application Features
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Popular Features That Blows Your Mind
          </h2>
        </div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Features 1 & 3 */}
          <div className="space-y-8">
            {featuresData.filter((_, index) => index % 2 === 0).map((feature) => (
              <div key={feature.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 border border-primary-200 flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-lg">{feature.number}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-primary-500 text-sm font-medium mb-3">
                      {feature.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column - Dual Mobile Mockup */}
          <div className="flex justify-center items-end">
            <div className="relative max-w-sm">
              <img
                src={dualMobile}
                alt="Dual Mobile App Mockup"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Column - Features 2 & 4 */}
          <div className="space-y-8">
            {featuresData.filter((_, index) => index % 2 === 1).map((feature) => (
              <div key={feature.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 border border-primary-200 flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-lg">{feature.number}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-primary-500 text-sm font-medium mb-3">
                      {feature.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
