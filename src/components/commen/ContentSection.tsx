import React from 'react';

interface ContentSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  title, 
  children, 
  className = "", 
  containerClassName = "" 
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {title && (
          <h2 className="text-3xl font-bold text-dark-900 mb-8 text-center">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
