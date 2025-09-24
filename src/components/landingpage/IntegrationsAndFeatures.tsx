import React from "react";
import { FaMobile, FaHeadset, FaUser, FaCogs } from "react-icons/fa";

// Feature cards data
const featureCards = [
  {
    id: 1,
    title: "4.7 Star Mobile Apps",
    description:
      "Mobile-friendly support with separate landlord and tenant apps designed to help everyone manage their rentals with ease.",
    icon: FaMobile,
    bgColor: "bg-secondary-100",
    iconColor: "text-secondary-700",
    iconBgColor: "bg-secondary-200",
  },
  {
    id: 2,
    title: "World-Class Service",
    description:
      "Exceptional customer support from real people, including live chat, onboarding, and personalized one-on-one trainings.",
    icon: FaHeadset,
    bgColor: "bg-secondary-100",
    iconColor: "text-secondary-700",
    iconBgColor: "bg-secondary-200",
  },
  {
    id: 3,
    title: "Owner Portal",
    description:
      "Keep owners involved with a separate owner portal, giving them access to the things they need without all the fluff.",
    icon: FaUser,
    bgColor: "bg-secondary-100",
    iconColor: "text-secondary-700",
    iconBgColor: "bg-secondary-200",
  },
  {
    id: 4,
    title: "Team Management",
    description:
      "Get more done with team management tools. Add team members, grant permissions, access a team Calendar and task list, and more.",
    icon: FaCogs,
    bgColor: "bg-secondary-100",
    iconColor: "text-secondary-700",
    iconBgColor: "bg-secondary-200",
  },
];

const IntegrationsAndFeatures: React.FC = () => {
  return (
    <section className="relative">
      {/* Integrations Section */}

      {/* Features Section */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-700 mb-4">
              Plus, everything else you'd expect on our highly rated platform
            </h2>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featureCards.map((feature) => {
              const IconComponent = feature.icon;

              return (
                <div
                  key={feature.id}
                  className={`${feature.bgColor} rounded-xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 group`}
                >
                  {/* Icon */}
                  <div
                    className={`${feature.iconBgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg lg:text-xl font-bold text-dark-700 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm lg:text-base text-dark-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsAndFeatures;
