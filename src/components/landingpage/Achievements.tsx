import React from 'react';
import { FaUsers, FaDownload, FaStar, FaChartLine } from 'react-icons/fa';

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: FaUsers,
      number: "50k+",
      label: "Active Users",
      description: "Property managers trust us"
    },
    {
      icon: FaDownload,
      number: "100k+",
      label: "Downloads",
      description: "Mobile app installations"
    },
    {
      icon: FaStar,
      number: "4.9",
      label: "Rating",
      description: "Average user satisfaction"
    },
    {
      icon: FaChartLine,
      number: "99.9%",
      label: "Uptime",
      description: "Reliable service guarantee"
    }
  ];

  return (
    <section className="bg-white modern-section">
      <div className="modern-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="modern-heading mb-6">
            We Speak With Our Achievement & Powerful Status
          </h2>
          <p className="modern-subheading max-w-3xl mx-auto">
            Join thousands of property professionals who have transformed their business with Smar8.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center group">
                <div className="modern-card p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-dark-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-dark-700 mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-dark-600">
                    {achievement.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-12">
          <button className="modern-button-secondary">
            Know More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Achievements;

