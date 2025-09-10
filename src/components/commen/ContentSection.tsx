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
    <section className={`modern-section ${className}`}>
      <div className={`modern-container ${containerClassName}`}>
        {title && (
          <h2 className="modern-heading mb-8 text-center">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
