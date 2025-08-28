import React from 'react';
import { FaCheck, FaStar } from 'react-icons/fa';

interface HeroProps {
  // Brand/Product section
  brandIcon?: React.ReactNode;
  brandText: string;
  
  // Main content
  headline: string;
  subheadline: string;
  ctaText: string;
  onCtaClick?: () => void;
  
  // Disclaimers
  disclaimers: string[];
  
  // Visual content - now supports both image and custom content
  imageSrc?: string;
  imageAlt?: string;
  
  // Features section
  features?: Array<{
    icon: React.ReactNode;
    title: string;
  }>;
  
  // Social proof
  showSocialProof?: boolean;
  socialProofPlatforms?: string[];
  
  // Styling
  backgroundColor?: string;
  textColor?: string;
  primaryColor?: string;
}

const Hero: React.FC<HeroProps> = ({
  brandIcon,
  brandText,
  headline,
  subheadline,
  ctaText,
  onCtaClick,
  disclaimers,
  imageSrc,
  imageAlt,
  features,
  showSocialProof = true,
  socialProofPlatforms = ['Capterra', 'G2 Crowd', 'SoftwareAdvice', 'GetApp'],
  backgroundColor = 'bg-white',
  textColor = 'text-dark-900',
  primaryColor = 'primary'
}) => {
  const getColorClass = (colorType: string, defaultColor: string) => {
    if (colorType === 'primary') return defaultColor;
    return colorType;
  };

  return (
    <div className={backgroundColor}>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Brand/Product Name */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 bg-${getColorClass(primaryColor, 'primary-200')} rounded-lg flex items-center justify-center`}>
                  {brandIcon || <span className={`text-${getColorClass(primaryColor, 'primary-600')} font-bold text-lg`}>P</span>}
                </div>
                <span className="text-dark-600 font-semibold text-lg">{brandText}</span>
              </div>

              {/* Headline */}
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${textColor} leading-tight`}>
                {headline}
              </h1>

              {/* Sub-headline */}
              <p className="text-xl text-dark-600 max-w-2xl leading-relaxed">
                {subheadline}
              </p>

              {/* CTA Button */}
              <button 
                onClick={onCtaClick}
                className={`bg-${getColorClass(primaryColor, 'primary-500')} hover:bg-${getColorClass(primaryColor, 'primary-600')} text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                {ctaText}
              </button>

              {/* Small Print/Disclaimers */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-sm text-dark-500">
                {disclaimers.map((disclaimer, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaCheck className={`text-${getColorClass(primaryColor, 'primary-500')} flex-shrink-0`} />
                    <span>{disclaimer}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="space-y-6">
              {/* Visual Content */}
              <div className="flex justify-center lg:justify-end">
                { (imageSrc && (
                  <div className="relative">
                    <img 
                      src={imageSrc} 
                      alt={imageAlt || 'Hero image'} 
                      className="w-full max-w-lg rounded-2xl shadow-2xl"
                    />
                    {/* Optional overlay elements can be added here */}
                  </div>
                ))}
              </div>

              {/* Social Proof/Ratings */}
              {showSocialProof && (
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  {socialProofPlatforms.map((platform) => (
                    <div key={platform} className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-sm" />
                        ))}
                      </div>
                      <span className="text-dark-600 text-xs sm:text-sm font-medium">{platform}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {features && features.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-dark-900 leading-tight">
                Every feature you'll ever need, and more
              </h2>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary-200 rounded-lg flex items-center text-secondary-800 justify-center mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dark-900">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Hero;
