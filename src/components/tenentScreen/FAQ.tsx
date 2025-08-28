import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

// FAQ data
const faqData = [
  {
    id: 1,
    question: "What is included in a tenant background check?",
    answer: "Our comprehensive tenant background check includes criminal record searches at the county, state, and federal levels, identity verification, credit history and score, employment verification, rental history, and eviction records. We also search for sex offender registries and terrorist watchlists to ensure complete safety and compliance with fair housing laws."
  },
  {
    id: 2,
    question: "How accurate are your background check results?",
    answer: "Our background checks boast 99.9% accuracy through multiple data source verification and advanced screening algorithms. We cross-reference information from federal, state, and local databases, ensuring reliable results. All reports are FCRA compliant and include detailed explanations of any findings, helping you make informed decisions about potential tenants."
  },
  {
    id: 3,
    question: "How long does a background check take to complete?",
    answer: "Most background checks are completed within 24-48 hours. Basic screenings can be ready in as little as 2-4 hours, while comprehensive checks including employment verification and multiple jurisdiction searches typically take 1-2 business days. We'll notify you immediately when results are available in your dashboard."
  },
  {
    id: 4,
    question: "What credit information do you provide in tenant screening?",
    answer: "Our credit reports include the applicant's credit score, payment history, outstanding debts, credit utilization, and any derogatory marks like late payments or collections. We also provide a risk assessment and recommendations based on the credit profile. All credit information is obtained legally and in compliance with FCRA regulations."
  },
  {
    id: 5,
    question: "Can applicants pay for their own background checks?",
    answer: "Yes, applicants can pay for their own background checks, which is often preferred by many landlords. Our system allows you to send screening requests directly to applicants, who can then complete payment and authorization online. This approach is transparent, convenient, and helps ensure applicants are serious about the rental property."
  },
  {
    id: 6,
    question: "What happens if a background check reveals negative information?",
    answer: "If negative information is found, we provide detailed explanations and context for each item. Our reports include recommendations on how to interpret findings and comply with fair housing laws. We also offer guidance on what constitutes legitimate grounds for rejection versus information that cannot legally be used in rental decisions."
  },
  {
    id: 7,
    question: "Are your background checks compliant with fair housing laws?",
    answer: "Absolutely. All our screening processes are designed to comply with federal, state, and local fair housing laws. We provide standardized screening criteria that help ensure consistent evaluation of all applicants. Our reports include compliance guidance and we regularly update our processes to reflect changes in fair housing regulations."
  },
  {
    id: 8,
    question: "How do you protect applicant privacy during screening?",
    answer: "We take applicant privacy seriously and comply with all applicable privacy laws including FCRA, GLBA, and state privacy regulations. All personal information is encrypted, access is strictly controlled, and we never share applicant data with unauthorized parties. Applicants must provide explicit consent before any screening begins."
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Left Column - FAQ Title */}
          <div className="flex items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-700 leading-tight">
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
                    <span className="text-base sm:text-lg font-medium text-dark-700 pr-2 sm:pr-4">
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
                    <div className="pb-6 pr-2 sm:pr-8">
                      <p className="text-sm sm:text-base text-dark-600 leading-relaxed">
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
