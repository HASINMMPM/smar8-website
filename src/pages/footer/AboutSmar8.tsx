import React from 'react';
import PageHero from '../../components/commen/PageHero';
import ContentSection from '../../components/commen/ContentSection';

const AboutSmar8: React.FC = () => {
  return (
    <div>
      <PageHero
        title="About Smar8"
        description="Empowering real estate investors with innovative property management solutions since our founding."
      />
      
      <ContentSection title="Our Story">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Smar8 was founded with a simple mission: to make property management easier, more efficient, and more profitable for real estate investors. 
            We understand the challenges that come with managing rental properties, from finding quality tenants to maintaining accurate financial records.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Today, we serve thousands of property owners across the country, helping them streamline their operations, reduce costs, and maximize their returns. 
            Our platform combines cutting-edge technology with industry expertise to deliver solutions that truly work for real estate investors.
          </p>
        </div>
      </ContentSection>

      <ContentSection className="bg-gray-50">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">10K+</div>
            <p className="text-gray-600">Properties Managed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">$500M+</div>
            <p className="text-gray-600">Rent Collected</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To revolutionize property management by providing innovative, user-friendly solutions that empower real estate investors to succeed.
          </p>
        </div>
      </ContentSection>
    </div>
  );
};

export default AboutSmar8;
