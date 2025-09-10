import React from 'react';

interface PageHeroProps {
  title: string;
  description: string;
  backgroundImage?: string;
  className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  description, 
  backgroundImage, 
  className = "" 
}) => {
  return (
    <div className={`relative bg-gradient-to-br from-primary-500 to-primary-600 text-white modern-section ${className}`}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 rounded-b-3xl"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="relative modern-container text-center">
        <h1 className="modern-heading text-white mb-6">
          {title}
        </h1>
        <p className="modern-subheading text-primary-100 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageHero;
