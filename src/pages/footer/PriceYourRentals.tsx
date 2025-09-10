import React, { useState } from 'react';
import { FaCalculator, FaChartLine, FaMapMarkerAlt, FaBed, FaBath, FaRuler } from 'react-icons/fa';
import { PageHero, ContentSection, Cta } from '../../components/commen';

const PriceYourRentals: React.FC = () => {
  const [formData, setFormData] = useState({
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    squareFeet: '',
    location: '',
    amenities: []
  });

  const [estimatedRent, setEstimatedRent] = useState<number | null>(null);

  const propertyTypes = [
    { value: 'apartment', label: 'Apartment' },
    { value: 'house', label: 'Single Family House' },
    { value: 'condo', label: 'Condo' },
    { value: 'townhouse', label: 'Townhouse' },
    { value: 'duplex', label: 'Duplex' }
  ];

  const amenities = [
    { value: 'parking', label: 'Parking' },
    { value: 'laundry', label: 'In-Unit Laundry' },
    { value: 'ac', label: 'Air Conditioning' },
    { value: 'dishwasher', label: 'Dishwasher' },
    { value: 'balcony', label: 'Balcony/Patio' },
    { value: 'pool', label: 'Pool' },
    { value: 'gym', label: 'Gym' },
    { value: 'pet-friendly', label: 'Pet Friendly' }
  ];

  const handleCalculate = () => {
    // Simple calculation logic (in real app, this would use market data)
    const baseRent = 1200;
    const bedroomMultiplier = parseInt(formData.bedrooms) * 200;
    const bathroomMultiplier = parseInt(formData.bathrooms) * 100;
    const sqftMultiplier = parseInt(formData.squareFeet) * 0.5;
    const amenityBonus = formData.amenities.length * 50;
    
    const calculatedRent = baseRent + bedroomMultiplier + bathroomMultiplier + sqftMultiplier + amenityBonus;
    setEstimatedRent(Math.round(calculatedRent));
  };

  const features = [
    {
      icon: FaCalculator,
      title: "Market Analysis",
      description: "Get accurate rent estimates based on real market data and comparable properties in your area."
    },
    {
      icon: FaChartLine,
      title: "Trend Analysis",
      description: "Track rental price trends and seasonal fluctuations to optimize your pricing strategy."
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location Insights",
      description: "Understand how location factors like schools, transportation, and amenities affect rental prices."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        title="Price Your Rentals with Confidence"
        description="Get accurate rental price estimates using our advanced market analysis tools. Maximize your rental income with data-driven pricing strategies."
        className="bg-gradient-to-br from-primary-50 to-secondary-50 text-dark-900"
      />

      {/* Calculator Section */}
      <ContentSection className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-dark-900 mb-6">Rental Price Calculator</h2>
              
              <div className="space-y-6">
                {/* Property Type */}
                <div>
                  <label className="block text-sm font-semibold text-dark-700 mb-2">Property Type</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                    className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select Property Type</option>
                    {propertyTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                {/* Bedrooms and Bathrooms */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-dark-700 mb-2">Bedrooms</label>
                    <select
                      value={formData.bedrooms}
                      onChange={(e) => setFormData({...formData, bedrooms: e.target.value})}
                      className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select</option>
                      {[1,2,3,4,5,6].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark-700 mb-2">Bathrooms</label>
                    <select
                      value={formData.bathrooms}
                      onChange={(e) => setFormData({...formData, bathrooms: e.target.value})}
                      className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select</option>
                      {[1,1.5,2,2.5,3,3.5,4].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Square Feet */}
                <div>
                  <label className="block text-sm font-semibold text-dark-700 mb-2">Square Feet</label>
                  <input
                    type="number"
                    value={formData.squareFeet}
                    onChange={(e) => setFormData({...formData, squareFeet: e.target.value})}
                    placeholder="Enter square footage"
                    className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-semibold text-dark-700 mb-2">Location (City, State)</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="e.g., Austin, TX"
                    className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Amenities */}
                <div>
                  <label className="block text-sm font-semibold text-dark-700 mb-2">Amenities</label>
                  <div className="grid grid-cols-2 gap-2">
                    {amenities.map(amenity => (
                      <label key={amenity.value} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.amenities.includes(amenity.value)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({...formData, amenities: [...formData.amenities, amenity.value]});
                            } else {
                              setFormData({...formData, amenities: formData.amenities.filter(a => a !== amenity.value)});
                            }
                          }}
                          className="mr-2"
                        />
                        <span className="text-sm text-dark-600">{amenity.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleCalculate}
                  className="w-full px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors duration-300"
                >
                  Calculate Rental Price
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Estimated Rental Price</h3>
              
              {estimatedRent ? (
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary-500 mb-4">
                    ${estimatedRent.toLocaleString()}
                  </div>
                  <p className="text-lg text-dark-600 mb-6">per month</p>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-dark-600">Base Rent</span>
                      <span className="font-semibold">$1,200</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-dark-600">Bedroom Bonus</span>
                      <span className="font-semibold">+${parseInt(formData.bedrooms) * 200}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-dark-600">Bathroom Bonus</span>
                      <span className="font-semibold">+${parseInt(formData.bathrooms) * 100}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-dark-600">Size Bonus</span>
                      <span className="font-semibold">+${Math.round(parseInt(formData.squareFeet) * 0.5)}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-dark-600">Amenities</span>
                      <span className="font-semibold">+${formData.amenities.length * 50}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-dark-500">
                  <FaCalculator className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p>Fill out the form to get your rental price estimate</p>
                </div>
              )}
            </div>
          </div>
        </ContentSection>

      {/* Features Section */}
      <ContentSection 
        title="Advanced Pricing Tools"
        className="bg-gray-50"
      >
        <p className="text-xl text-dark-600 max-w-3xl mx-auto text-center mb-16">
          Our comprehensive pricing tools help you make informed decisions about your rental properties.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 mb-4">{feature.title}</h3>
                <p className="text-dark-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </ContentSection>

      {/* CTA Section */}
      <Cta
        heading="Get Professional Pricing Analysis"
        description="Upgrade to our premium pricing tools for detailed market analysis and competitive insights."
        buttonText="Upgrade Now"
        buttonUrl="/pricing"
      />
    </div>
  );
};

export default PriceYourRentals;
