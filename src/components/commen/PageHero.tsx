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
    <div className={`relative bg-gradient-to-r from-dark-900 to-dark-800 text-white py-20 ${className}`}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-xl text-tertiary-100 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageHero;
