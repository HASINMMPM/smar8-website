import React from 'react';
import { FaUsers, FaBriefcase, FaBuilding, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const LearnMore: React.FC = () => {
  const learnMoreCards = [
    {
      id: 1,
      icon: FaUsers,
      title: "Smar8 Connect",
      description: "Learn about our free application for tenants and staff to view memberships, access payment history, and manage their accounts securely.",
      bgColor: "var(--color-primary-100)",
      iconColor: "var(--color-primary-600)",
      link: "/connect"
    },
    {
      id: 2,
      icon: FaBriefcase,
      title: "Smar8 Business",
      description: "Discover how business owners can manage multiple businesses, handle people transfers, and collect payments across different locations.",
      bgColor: "var(--color-secondary-100)",
      iconColor: "var(--color-secondary-600)",
      link: "/business"
    },
    {
      id: 3,
      icon: FaBuilding,
      title: "Smar8 Manage",
      description: "Explore our comprehensive building management solution for property owners to oversee entire infrastructures and multiple businesses.",
      bgColor: "var(--color-tertiary-100)",
      iconColor: "var(--color-tertiary-600)",
      link: "/manage"
    },
    {
      id: 4,
      icon: FaShieldAlt,
      title: "Security & Compliance",
      description: "Understand our enterprise-grade security measures, role-based access control, and data protection protocols.",
      bgColor: "var(--color-primary-50)",
      iconColor: "var(--color-primary-700)",
      link: "/security"
    },
    {
      id: 5,
      icon: FaChartLine,
      title: "Pricing & Plans",
      description: "Learn about our transparent pricing structure, additional charges for people management, and flexible payment options.",
      bgColor: "var(--color-secondary-50)",
      iconColor: "var(--color-secondary-700)",
      link: "/pricing"
    },
    {
      id: 6,
      icon: FaBuilding,
      title: "System Architecture",
      description: "Deep dive into our multi-tenant architecture, unified identity system, and how the three applications work together.",
      bgColor: "var(--color-tertiary-50)",
      iconColor: "var(--color-tertiary-700)",
      link: "/architecture"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--color-tertiary-50)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--color-dark-700)' }}>
            Learn More About Smar8
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--color-dark-600)' }}>
            Discover how our three-application architecture revolutionizes property management across India
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learnMoreCards.map((card) => (
            <div 
              key={card.id}
              className="rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ backgroundColor: card.bgColor }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <card.icon className="w-8 h-8" style={{ color: card.iconColor }} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-center mb-4" style={{ color: 'var(--color-dark-700)' }}>
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-center mb-6 leading-relaxed" style={{ color: 'var(--color-dark-600)' }}>
                {card.description}
              </p>

              {/* CTA Link */}
              {/* <div className="text-left">
                <a 
                  href={card.link}
                  className="inline-flex items-center font-semibold transition-colors group duration-300"
                  style={{ color: 'var(--color-secondary-900)' }}
                >
                  Read More 
                  <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div> */}
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        {/* <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-dark-900)' }}>
              Ready to Get Started?
            </h3>
            <p className="mb-6 max-w-2xl" style={{ color: 'var(--color-dark-600)' }}>
              Start with Smar8 Connect for free and experience the future of property management
            </p>
            <button className="px-8 py-3 rounded-lg font-semibold transition-colors text-white hover:opacity-90" style={{ backgroundColor: 'var(--color-primary-600)' }}>
              Start Free Trial
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default LearnMore;
