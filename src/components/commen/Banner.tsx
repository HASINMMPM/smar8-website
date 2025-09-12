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
      {/* Decorative Background Shapes */}
      
      <div className="modern-card max-w-7xl mx-auto bg-gradient-to-br from-secondary-400 to-secondary-700 text-white pt-8 md:pt-16 relative ">
    
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Small decorative circles with animations */}
        <div className="absolute top-8 left-8 w-3 h-3 bg-white/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-16 right-12 w-2 h-2 bg-white/20 rounded-full animate-float-reverse"></div>
        <div className="absolute bottom-16 left-1/3 w-4 h-4 bg-white/25 rounded-full animate-drift-slow"></div>
        <div className="absolute bottom-8 right-8 w-3 h-3 bg-white/17 rounded-full animate-float-medium"></div>
        
        {/* More small circles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/10 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/18 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-white/16 rounded-full animate-drift-medium"></div>
        
        {/* Small accent dots with animations */}
        <div className="absolute top-12 left-1/2 w-2 h-2 bg-white/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-20 left-1/2 w-3 h-3 bg-white/30 rounded-full animate-twinkle"></div>
        <div className="absolute top-28 left-1/2 w-2 h-2 bg-white/15 rounded-full animate-float-slow"></div>
        
        {/* Right side accent dots */}
        <div className="absolute top-16 right-1/3 w-2 h-2 bg-white/25 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-24 right-1/3 w-1 h-1 bg-white/35 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute top-32 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-drift-fast"></div>
        
        {/* Bottom accent elements */}
        <div className="absolute bottom-12 left-1/2 w-2 h-2 bg-white/12 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-white/25 rounded-full animate-pulse-slow"></div>
        
        {/* Small geometric accents */}
        <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-white/15 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-2/3 right-1/6 w-3 h-3 bg-white/12 rotate-12 animate-drift-reverse"></div>
        <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-white/10 -rotate-12 animate-float-reverse"></div>
        
        {/* Additional small shapes scattered around */}
        <div className="absolute top-6 left-1/5 w-1 h-1 bg-white/40 rounded-full animate-float-fast"></div>
        <div className="absolute top-14 right-1/5 w-2 h-2 bg-white/30 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-22 left-1/6 w-1 h-1 bg-white/35 rounded-full animate-twinkle"></div>
        <div className="absolute top-30 right-1/6 w-2 h-2 bg-white/25 rounded-full animate-drift-medium"></div>
        
        <div className="absolute top-1/5 left-1/3 w-1 h-1 bg-white/45 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-2/5 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-float-reverse"></div>
        <div className="absolute top-3/5 left-2/3 w-1 h-1 bg-white/30 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute top-4/5 right-2/3 w-2 h-2 bg-white/15 rounded-full animate-drift-fast"></div>
        
        <div className="absolute bottom-6 left-1/4 w-2 h-2 bg-white/35 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-14 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-22 left-3/4 w-2 h-2 bg-white/25 rounded-full animate-drift-slow"></div>
        <div className="absolute bottom-30 right-3/4 w-1 h-1 bg-white/30 rounded-full animate-pulse-slow"></div>
        
        {/* More geometric shapes */}
        <div className="absolute top-1/6 left-1/8 w-1 h-1 bg-white/20 rotate-30 animate-spin-slow"></div>
        <div className="absolute top-1/6 right-1/8 w-2 h-2 bg-white/25 -rotate-30 animate-float-medium"></div>
        <div className="absolute bottom-1/6 left-1/8 w-1 h-1 bg-white/30 rotate-60 animate-drift-reverse"></div>
        <div className="absolute bottom-1/6 right-1/8 w-2 h-2 bg-white/20 -rotate-60 animate-twinkle"></div>
        
        {/* Extra scattered dots */}
        <div className="absolute top-10 left-1/2 w-1 h-1 bg-white/50 rounded-full animate-float-fast"></div>
        <div className="absolute top-18 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-26 left-2/3 w-1 h-1 bg-white/35 rounded-full animate-drift-medium"></div>
        <div className="absolute top-34 left-1/4 w-1 h-1 bg-white/45 rounded-full animate-twinkle-delayed"></div>
        
        <div className="absolute bottom-10 right-1/2 w-1 h-1 bg-white/50 rounded-full animate-float-reverse"></div>
        <div className="absolute bottom-18 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-26 right-2/3 w-1 h-1 bg-white/35 rounded-full animate-drift-fast"></div>
        <div className="absolute bottom-34 right-1/4 w-1 h-1 bg-white/45 rounded-full animate-pulse-slow"></div>
        
        {/* Even more scattered small shapes */}
        <div className="absolute top-4 left-1/7 w-1 h-1 bg-white/35 rounded-full animate-float-slow"></div>
        <div className="absolute top-12 left-1/7 w-2 h-2 bg-white/25 rounded-full animate-drift-medium"></div>
        <div className="absolute top-20 left-1/7 w-1 h-1 bg-white/40 rounded-full animate-twinkle"></div>
        <div className="absolute top-28 left-1/7 w-2 h-2 bg-white/30 rounded-full animate-bounce-gentle"></div>
        
        <div className="absolute top-4 right-1/7 w-1 h-1 bg-white/35 rounded-full animate-float-reverse"></div>
        <div className="absolute top-12 right-1/7 w-2 h-2 bg-white/25 rounded-full animate-drift-fast"></div>
        <div className="absolute top-20 right-1/7 w-1 h-1 bg-white/40 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute top-28 right-1/7 w-2 h-2 bg-white/30 rounded-full animate-pulse-slow"></div>
        
        <div className="absolute bottom-4 left-1/7 w-1 h-1 bg-white/35 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-12 left-1/7 w-2 h-2 bg-white/25 rounded-full animate-drift-slow"></div>
        <div className="absolute bottom-20 left-1/7 w-1 h-1 bg-white/40 rounded-full animate-twinkle"></div>
        <div className="absolute bottom-28 left-1/7 w-2 h-2 bg-white/30 rounded-full animate-bounce-gentle"></div>
        
        <div className="absolute bottom-4 right-1/7 w-1 h-1 bg-white/35 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-12 right-1/7 w-2 h-2 bg-white/25 rounded-full animate-drift-reverse"></div>
        <div className="absolute bottom-20 right-1/7 w-1 h-1 bg-white/40 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute bottom-28 right-1/7 w-2 h-2 bg-white/30 rounded-full animate-pulse-slow"></div>
      </div>
        
        <div className="modern-container z-20">
          
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
