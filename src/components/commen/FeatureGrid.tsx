import React from 'react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  title: string;
  subtitle: string;
  features: FeatureItem[];
  backgroundColor?: string;
  className?: string;
  columns?: 2 | 3;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({
  title,
  subtitle,
  features,
  backgroundColor = "bg-gray-50",
  className = "",
  columns = 3
}) => {
  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className={`py-16 ${backgroundColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
