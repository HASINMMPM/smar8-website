import React from 'react';
import { FaStar, FaQuoteLeft, FaBuilding, FaUsers, FaChartLine } from 'react-icons/fa';
import { PageHero, ContentSection, Cta } from '../../components/commen';

const OurCustomers: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Property Manager",
      company: "Metro Properties",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      content: "Smar8 has revolutionized how we manage our 50+ properties. The tenant screening alone has saved us countless hours and improved our tenant quality significantly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Real Estate Investor",
      company: "Chen Investments",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      content: "The financial reporting and analytics features give me insights I never had before. I can track ROI across all my properties in real-time.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Landlord",
      company: "Rodriguez Properties",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      content: "From rent collection to maintenance requests, everything is streamlined. My tenants love the online portal and I love the reduced administrative work.",
      rating: 5
    }
  ];

  const stats = [
    { icon: FaBuilding, number: "10,000+", label: "Properties Managed" },
    { icon: FaUsers, number: "25,000+", label: "Happy Tenants" },
    { icon: FaChartLine, number: "98%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Our Customers"
        description="Join thousands of property professionals who trust Smar8 to streamline their operations and grow their business."
        className="bg-gradient-to-br from-primary-50 to-secondary-50 text-dark-900"
      />

      {/* Stats Section */}
      <ContentSection className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary-500" />
                </div>
                <div className="text-4xl font-bold text-dark-900 mb-2">{stat.number}</div>
                <div className="text-lg text-dark-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </ContentSection>

      {/* Testimonials Section */}
      <ContentSection 
        title="What Our Customers Say"
        className="bg-gray-50"
      >
        <p className="text-xl text-dark-600 max-w-3xl mx-auto text-center mb-16">
          Real stories from real property professionals who have transformed their business with Smar8.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-dark-900">{testimonial.name}</h3>
                  <p className="text-sm text-dark-600">{testimonial.role}</p>
                  <p className="text-sm text-primary-500">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              
              <div className="relative">
                <FaQuoteLeft className="absolute -top-2 -left-2 text-primary-100 text-2xl" />
                <p className="text-dark-600 leading-relaxed pl-4">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* CTA Section */}
      <Cta
        heading="Ready to Join Our Success Stories?"
        description="Start your free trial today and see why thousands of property professionals choose Smar8."
        buttonText="Start Free Trial"
        buttonUrl="/pricing"
      />
    </div>
  );
};

export default OurCustomers;
