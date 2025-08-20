import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

// FAQ data
const faqData = [
  {
    id: 1,
    question: "What is rental property management software?",
    answer: "Rental property management software is a comprehensive digital solution designed to help landlords and property managers streamline their operations. It typically includes features for tenant screening, rent collection, maintenance tracking, financial reporting, and communication tools. This software centralizes all property-related tasks in one platform, making it easier to manage multiple properties efficiently."
  },
  {
    id: 2,
    question: "Why do you need property management software?",
    answer: "Property management software is essential for modern landlords and property managers because it automates time-consuming tasks, reduces human error, and provides better organization. It helps you track income and expenses, maintain tenant relationships, handle maintenance requests promptly, and ensure compliance with local regulations. The software also provides valuable insights through reporting and analytics to help you make informed decisions about your properties."
  },
  {
    id: 3,
    question: "Who can use rental property management software?",
    answer: "Rental property management software is designed for a wide range of users including individual landlords, property management companies, real estate investors, and even tenants in some cases. Whether you manage a single rental property or a large portfolio of hundreds of units, there are solutions available to meet your specific needs. The software is typically user-friendly and can be accessed via web browsers or mobile apps."
  },
  {
    id: 4,
    question: "What features should you look for in rental property management software?",
    answer: "When choosing rental property management software, look for essential features like tenant screening and background checks, online rent collection, maintenance request tracking, financial reporting and accounting tools, document storage, communication platforms, and mobile accessibility. Advanced features might include tenant portals, owner portals, integration with accounting software, and automated marketing tools for finding new tenants."
  },
  {
    id: 5,
    question: "What problems does property management software solve?",
    answer: "Property management software solves numerous common problems including disorganized record-keeping, missed rent payments, delayed maintenance responses, poor communication with tenants, time-consuming administrative tasks, and lack of financial visibility. It also helps with tenant screening to find reliable renters, automates recurring tasks, provides better customer service, and ensures compliance with local laws and regulations."
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent, id: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - FAQ Title */}
          <div className="flex items-start">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-700 leading-tight">
              FAQs
            </h2>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-0">
            {faqData.map((item) => {
              const isOpen = openItems.includes(item.id);
        
              
              return (
                <div key={item.id} className="border-b border-dark-200 last:border-b-0 ">
                  <button
                    onClick={() => toggleItem(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    className="w-full px-2 py-6 text-left flex items-center justify-between hover:bg-dark-50 transition-colors duration-200 focus:outline-none focus:bg-dark-50"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span className="text-lg font-medium text-dark-700 pr-4">
                      {item.question}
                    </span>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <FaMinus className="w-5 h-5 text-dark-500" />
                      ) : (
                        <FaPlus className="w-5 h-5 text-dark-500" />
                      )}
                    </div>
                  </button>
                  
                  <div
                    id={`faq-answer-${item.id}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-6 pr-8">
                      <p className="text-dark-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default FAQ;
