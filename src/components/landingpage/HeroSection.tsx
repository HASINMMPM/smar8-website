import React from 'react';
import mobileMockup from '../../assets/mobile-mockup.webp';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const HeroSection: React.FC = () => {
  const { ref: leftRef, isVisible: leftVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="bg-gradient-to-r from-purple-100 via-blue-50 to-green-100 ">
      <div className="modern-container">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ">

          {/* Left Section - Text Content & CTA */}
          <div 
            ref={leftRef}
            className={`space-y-8 modern-section transition-all duration-1000 ease-out ${
              leftVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Main Title */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">

              The all-in-one platform <span className="text-primary-500">that scales with your portfolio</span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              The collapse of the online-advertising market in 2023 made
              marketing on the Internet seem even less compelling
            </p>

            {/* App Store Badges */}
            <div className="flex flex-row gap-3">
              <button className="flex items-center justify-center gap-2 bg-primary-900 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs font-thin">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center gap-2 bg-primary-900 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs font-thin">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>

       
          </div>

          {/* Right Section - Mobile Mockup */}
          <div 
            ref={rightRef}
            className={`relative flex justify-center items-end h-full lg:justify-end transition-all duration-1000 ease-out delay-300 ${
              rightVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative z-10 ">
              <img
                src={mobileMockup}
                alt="Smar8 Mobile App"
                className="w-auto object-contain h-full "
              />
            </div>
            {/* Decorative background elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-100 rounded-full opacity-30 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary-100 rounded-full opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
