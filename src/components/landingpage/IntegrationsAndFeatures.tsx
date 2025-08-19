import React from 'react';
import { FaMobile, FaHeadset, FaUser, FaCogs, FaCalendar, FaCreditCard, FaBuilding } from 'react-icons/fa';

// Integration partners data
const integrationPartners = [
  { name: "rentler", logo: "rentler" },
  { name: "Tenant Turner", logo: "Tenant Turner" },
  { name: "zumper", logo: "zumper" },
  { name: "ShowMojo", logo: "ShowMojo" },
  { name: "Rent.", logo: "Rent." },
  { name: "Zillow", logo: "Zillow" },
  { name: "TransUnion", logo: "TransUnion" },
  { name: "ASURINT", logo: "ASURINT" },
  { name: "EQUIFAX", logo: "EQUIFAX" },
  { name: "INTUIT quickbooks", logo: "INTUIT quickbooks" },
  { name: "RENTRANGE", logo: "RENTRANGE" },
  { name: "_zapier", logo: "_zapier" },
  { name: "stripe", logo: "stripe" },
  { name: "Capital", logo: "Capital" },
  { name: "Calendar", logo: "Calendar" }
];

// Feature cards data
const featureCards = [
  {
    id: 1,
    title: "4.7 Star Mobile Apps",
    description: "Mobile-friendly support with separate landlord and tenant apps designed to help everyone manage their rentals with ease.",
    icon: FaMobile,
    bgColor: "bg-green-100",
    iconColor: "text-green-700",
    iconBgColor: "bg-green-200"
  },
  {
    id: 2,
    title: "World-Class Service",
    description: "Exceptional customer support from real people, including live chat, onboarding, and personalized one-on-one trainings.",
    icon: FaHeadset,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-700",
    iconBgColor: "bg-purple-200"
  },
  {
    id: 3,
    title: "Owner Portal",
    description: "Keep owners involved with a separate owner portal, giving them access to the things they need without all the fluff.",
    icon: FaUser,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-700",
    iconBgColor: "bg-blue-200"
  },
  {
    id: 4,
    title: "Team Management",
    description: "Get more done with team management tools. Add team members, grant permissions, access a team Calendar and task list, and more.",
    icon: FaCogs,
    bgColor: "bg-teal-100",
    iconColor: "text-teal-700",
    iconBgColor: "bg-teal-200"
  }
];

const IntegrationsAndFeatures: React.FC = () => {
  return (
    <section className="relative">
      {/* Integrations Section */}
      <div className="bg-teal-800 rounded-t-3xl py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Integrated with the apps you love
            </h2>
            <p className="text-lg text-teal-100 max-w-4xl mx-auto">
              Stay connected with 10+ third-party integrations including Google Calendar, Zapier, Stripe, RentRange, QuickBooks Online, Tenant Turner, and more.
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-4 md:grid-cols-7 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {integrationPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-20 h-12 lg:w-24 lg:h-16"
              >
                <div className="text-white text-xs lg:text-sm font-semibold text-center opacity-80 hover:opacity-100 transition-opacity duration-300">
                  {partner.logo === "Calendar" && (
                    <div className="flex flex-col items-center">
                      <FaCalendar className="w-6 h-6 mb-1" />
                      <span>Calendar</span>
                    </div>
                  )}
                  {partner.logo === "stripe" && (
                    <div className="flex flex-col items-center">
                      <FaCreditCard className="w-6 h-6 mb-1" />
                      <span>Stripe</span>
                    </div>
                  )}
                  {partner.logo === "Zillow" && (
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 bg-white rounded flex items-center justify-center mb-1">
                        <span className="text-teal-800 font-bold text-xs">Z</span>
                      </div>
                      <span>Zillow</span>
                    </div>
                  )}
                  {partner.logo === "INTUIT quickbooks" && (
                    <div className="flex flex-col items-center">
                      <FaBuilding className="w-6 h-6 mb-1" />
                      <span className="text-xs">QuickBooks</span>
                    </div>
                  )}
                  {partner.logo === "_zapier" && (
                    <div className="flex flex-col items-center">
                      <FaCogs className="w-6 h-6 mb-1" />
                      <span>Zapier</span>
                    </div>
                  )}
                  {!["Calendar", "stripe", "Zillow", "INTUIT quickbooks", "_zapier"].includes(partner.logo) && (
                    <span>{partner.logo}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
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
                  <div className={`${feature.iconBgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
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
