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
  imageClassName = "w-full max-w-2xl mx-auto rounded-2xl modern-shadow"
}) => {
  return (
    <section className="relative overflow-hidden">
      <div className="modern-card bg-gradient-to-br from-primary-500 to-primary-600 text-white modern-section mb-16">
        <div className="modern-container">
          {/* Top Section - Purple Background */}
          <div className="text-center mb-16">
            {/* Headline */}
            <h2 className="modern-heading text-white mb-6">
              {headline}
            </h2>
            
            {/* Sub-headline */}
            <p className="modern-subheading text-primary-100 max-w-4xl mx-auto mb-8">
              {subheadline}
            </p>
            
            {/* CTA Button */}
            <button 
              onClick={onCtaClick}
              className="modern-button bg-white text-primary-500 hover:bg-gray-50 flex items-center gap-3 mx-auto"
            >
              {ctaText}
              <FaArrowRight className="w-4 h-4" />
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
      </div>
    </section>
  );
};

export default Banner;
