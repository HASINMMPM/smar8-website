import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaArrowRight, FaQuoteRight } from 'react-icons/fa';
import './TestimonialAndSolutions.css';

// Press mentions data
const pressMentions = [
  { name: "Entrepreneur", logo: "Entrepreneur" },
  { name: "Chicago Tribune", logo: "Chicago Tribune" },
  { name: "msn", logo: "msn" },
  { name: "MarketWatch", logo: "MarketWatch" },
  { name: "Forbes", logo: "Forbes" },
  { name: "Capterra", logo: "Capterra", hasCheckmark: true },
  { name: "Reviews.com", logo: "Reviews.com" },
  { name: "TC TechCrunch", logo: "TC TechCrunch" },
  { name: "THE BUSINESS JOURNALS", logo: "THE BUSINESS JOURNALS" },
  { name: "The Washington Post", logo: "The Washington Post" }
];

// Solution cards data
const solutionCards = [
  {
    id: 1,
    role: "Landlord",
    title: "Protect your property and find tenants you trust.",
    description: "Built-in features to help you manage every task on your plate, whether you're a do-it-yourself landlord or a landlord with 100+ properties.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    alt: "Landlord managing property portfolio"
  },
  {
    id: 2,
    role: "Property Manager",
    title: "Property Managers",
    description: "Stay organized and connected with your team.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    alt: "Property manager with curly dark hair"
  },
  {
    id: 3,
    role: "Tenant",
    title: "Tenants",
    description: "Enjoy your rental, stress-free.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    alt: "Tenant with long wavy brown hair"
  },
  {
    id: 4,
    role: "Service Professional",
    title: "Service Pros",
    description: "Connect with landlords and find jobs in your area.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    alt: "Service professional in blue uniform"
  },
  {
    id: 5,
    role: "Property Owner",
    title: "Owners",
    description: "Take control of your rental management business.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    alt: "Property owner with gray hair and beard"
  }
];
const reviews = [
    {
      "name": "Marie K.",
      "stars": 5,
      "review": "I've been using this platform for years and it's been a game-changer for my property management. Everything is in one spot - communication, maintenance requests, invoice management, and tax preparation. Tax season is a breeze now, and it's great to have it all in one space!",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "title": "Long Time User"
    },
    {
      "name": "James T.",
      "stars": 4,
      "review": "Great platform with lots of features. Customer support has been really helpful whenever we ran into issues.",
      "image": "https://images.unsplash.com/photo-1603415526960-f7e0328f91ec?auto=format&fit=crop&w=800&q=80",
      "title": "Helpful Support"
    },
    {
      "name": "Sophia L.",
      "stars": 5,
      "review": "The best property management tool I've ever used. Highly recommend it to anyone managing rentals.",
      "image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
      "title": "Highly Recommend"
    },
    {
      "name": "Marie K.",
      "stars": 5,
      "review": "I've been using this platform for years and it's been a game-changer for my property management. Everything is in one spot - communication, maintenance requests, invoice management, and tax preparation. Tax season is a breeze now, and it's great to have it all in one space!",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "title": "Long Time User"
    },
    {
      "name": "James T.",
      "stars": 4,
      "review": "Great platform with lots of features. Customer support has been really helpful whenever we ran into issues.",
      "image": "https://images.unsplash.com/photo-1603415526960-f7e0328f91ec?auto=format&fit=crop&w=800&q=80",
      "title": "Helpful Support"
    },
    {
      "name": "Sophia L.",
      "stars": 5,
      "review": "The best property management tool I've ever used. Highly recommend it to anyone managing rentals.",
      "image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
      "title": "Highly Recommend"
    },
    {
      "name": "Marie K.",
      "stars": 5,
      "review": "I've been using this platform for years and it's been a game-changer for my property management. Everything is in one spot - communication, maintenance requests, invoice management, and tax preparation. Tax season is a breeze now, and it's great to have it all in one space!",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "title": "Long Time User"
    },
    {
      "name": "James T.",
      "stars": 4,
      "review": "Great platform with lots of features. Customer support has been really helpful whenever we ran into issues.",
      "image": "https://images.unsplash.com/photo-1603415526960-f7e0328f91ec?auto=format&fit=crop&w=800&q=80",
      "title": "Helpful Support"
    },
    {
      "name": "Sophia L.",
      "stars": 5,
      "review": "The best property management tool I've ever used. Highly recommend it to anyone managing rentals.",
      "image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
      "title": "Highly Recommend"
    }
  ]
  

const TestimonialAndSolutions: React.FC = () => {
  const [_, setCurrentCardIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(6);

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % solutionCards.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + solutionCards.length) % solutionCards.length);
  };

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => Math.min(prev + 6, reviews.length));
  };

  const hasMoreReviews = visibleReviews < reviews.length;

  return (
    <section className="bg-gray-50">
             {/* Customer Testimonial Section */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
         
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, visibleReviews).map((testimonial, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-md p-6 h-80 flex text-green-900 flex-col ${
                  index % 2 === 1
                    ? 'bg-green-100 '   
                    : 'bg-white '  
                }`}
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <span className="text-2xl md:text-3xl"><FaQuoteRight/></span>
                </div>
                
                {/* Review Text - Takes up available space */}
                <div className="flex-1 mb-6">
                  <p className='text-sm leading-relaxed'>{testimonial.review}</p>
                </div>
                
                {/* Name and Stars Row - Fixed at bottom */}
                <div className="mt-auto">
                  {/* Title */}
                  {/* <p className="text-sm opacity-80 mb-3 text-center">{testimonial.title}</p> */}
                  
                  {/* Name and Stars Row - Option 1: Left Aligned */}
                  <div className="flex flex-col items-cener justify-start space-x-3">
                    <span className="font-bold text-lg">{testimonial.name}</span>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Alternative: Option 2: Right Aligned (commented out) */}
                  {/* <div className="flex items-center justify-end space-x-3">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-bold text-lg">{testimonial.name}</span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
         
         {hasMoreReviews && (
           <div className="text-center mt-16">
             <button 
               onClick={loadMoreReviews}
               className="px-8 py-3 border border-green-600 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
               aria-label={`Load ${Math.min(6, reviews.length - visibleReviews)} more reviews`}
             >
               View More Reviews
             </button>
           </div>
         )}
       </div>

      {/* Press Mentions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-5 md:grid-cols-10 gap-8 items-center justify-items-center">
          {pressMentions.map((mention, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-20 h-12 lg:w-24 lg:h-16"
            >
              <div className="text-gray-400 text-xs lg:text-sm font-semibold text-center opacity-60 hover:opacity-80 transition-opacity duration-300">
                {mention.hasCheckmark && (
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mb-1">
                      <FaStar className="w-2 h-2 text-white" />
                    </div>
                    <span>{mention.logo}</span>
                  </div>
                )}
                {!mention.hasCheckmark && (
                  <span>{mention.logo}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scalable Solution Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Section Header with Navigation */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            A solution that scales with your needs
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevCard}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
              aria-label="Previous card"
            >
              <FaChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={nextCard}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
              aria-label="Next card"
            >
              <FaChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

                 {/* Solution Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
           {solutionCards.map((card) => (
             <div
               key={card.id}
               className="group cursor-pointer perspective-1000 w-full h-80"
             >
               <div className="relative w-full h-full transform-style-preserve-3d transition-all duration-700 group-hover:rotate-y-180">
                 {/* Front of Card */}
                 <div className="absolute inset-0 backface-hidden">
                   <div className="w-full h-full rounded-xl p-6 flex flex-col justify-between shadow-lg bg-white">
                     <div className="flex-1 flex items-center justify-center mb-4">
                       <img
                         src={card.image}
                         alt={card.alt}
                         className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                       />
                     </div>
                     
                     <div className="text-center">
                       <div className="text-sm font-semibold text-green-600 mb-2">
                         {card.role}
                       </div>
                       <h3 className="text-lg font-bold text-gray-900 mb-2">
                         {card.title}
                       </h3>
                       {/* <p className="text-sm text-gray-600 mb-4">
                         {card.description}
                       </p> */}
                       <div className="flex items-center justify-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors duration-200">
                         Choose <FaArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Back of Card */}
                 <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 flex flex-col justify-center items-center text-white shadow-lg">
                   <div className="text-center">
                     <h3 className="text-xl font-bold mb-3 text-center">
                       {card.title}
                     </h3>
                     <p className="text-sm text-center mb-6 opacity-90 leading-relaxed">
                       {card.description}
                     </p>
                     <div className="flex items-center justify-center text-white font-semibold text-sm">
                       Learn More <FaArrowRight className="w-4 h-4 ml-2" />
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};

export default TestimonialAndSolutions;
