import React from 'react';
import { FaComment, FaUser, FaBriefcase, FaArrowRight } from 'react-icons/fa';

const LearnMore: React.FC = () => {
  const learnMoreCards = [
    {
      id: 1,
      icon: FaComment,
      title: "Why Smar8 Solutions",
      description: "Learn more about our all-in-one property management platform designed for landlords.",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-700",
      link: "/why-smar8"
    },
    {
      id: 2,
      icon: FaUser,
      title: "Case Studies",
      description: "Discover how real landlords and property managers use Smar8 Solutions to succeed.",
      bgColor: "bg-green-50",
      iconColor: "text-gray-700",
      link: "/case-studies"
    },
    {
      id: 3,
      icon: FaBriefcase,
      title: "Affiliate Program",
      description: "Share Smar8 Solutions with others and earn rewards every time someone signs up.",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-700",
      link: "/affiliate-program"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Learn More About Smar8 Solutions
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learnMoreCards.map((card) => (
            <div 
              key={card.id}
              className={`${card.bgColor} rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <card.icon className={`w-8 h-8 ${card.iconColor}`} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {card.description}
              </p>

              {/* CTA Link */}
              <div className="text-left">
                <a 
                  href={card.link}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors group"
                >
                  Read More 
                  <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
