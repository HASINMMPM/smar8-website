import { FaArrowRight } from 'react-icons/fa';

interface BannerProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  onCtaClick?: () => void;
  showImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  imageClassName?: string;
}

const Banner: React.FC<BannerProps> = ({
  headline,
  subheadline,
  ctaText = "Get Started",
  onCtaClick,
  showImage = false,
  imageSrc,
  imageAlt,
  imageClassName = "w-full max-w-2xl mx-auto rounded-lg shadow-xl"
}) => {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-dark-800 pt-16 md:pt-24 mb-16 md:mb-24 rounded-2xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Dark Teal Background */}
        <div className="text-center mb-16">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {headline}
          </h2>
          
          {/* Sub-headline */}
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            {subheadline}
          </p>
          
          {/* CTA Button */}
          <button 
            onClick={onCtaClick}
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
          >
            {ctaText}
            <FaArrowRight className="text-white" />
          </button>
        </div>

        {/* Bottom Section - Image */}
        {showImage && imageSrc && (
          <div className="relative text-center">
            <img 
              src={imageSrc} 
              alt={imageAlt || "Banner Image"} 
              className={imageClassName}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner;
