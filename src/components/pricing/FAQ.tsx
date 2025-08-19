import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

// FAQ data
const faqData = [
  {
    id: 1,
    question: "What pricing plans does Smar8 Solutions offer?",
    answer: "Smar8 Solutions offers flexible pricing plans designed to meet the needs of landlords and property managers of all sizes. We have a free plan for getting started, a Starter plan for small portfolios, a Professional plan for growing businesses, and an Enterprise plan for large property management companies. All plans include our core features with additional capabilities and support levels as you scale up."
  },
  {
    id: 2,
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial on all our paid plans with no credit card required. You can explore all the features and see how Smar8 Solutions can help streamline your property management. The trial gives you full access to the platform, and you can upgrade to a paid plan at any time during or after the trial period."
  },
  {
    id: 3,
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. We believe in transparency and flexibility. You can cancel your subscription at any time with no penalties or hidden fees. When you cancel, you'll continue to have access to your account until the end of your current billing period. We also make it easy to downgrade or upgrade your plan as your needs change."
  },
  {
    id: 4,
    question: "What's the difference between monthly and yearly billing?",
    answer: "Monthly billing offers maximum flexibility with no long-term commitment, while yearly billing provides significant cost savings of up to 20%. With yearly billing, you pay upfront for the entire year, but you get the same features and support. Both options include our 14-day free trial, so you can test the platform before committing to either billing cycle."
  },
  {
    id: 5,
    question: "Are there any hidden fees or setup costs?",
    answer: "No hidden fees or setup costs! Our pricing is transparent and straightforward. What you see is what you pay. There are no setup fees, no hidden charges, and no surprise costs. The only additional costs would be optional add-ons like premium support or advanced integrations that you can choose to purchase separately."
  },
  {
    id: 6,
    question: "Do you offer discounts for multiple properties?",
    answer: "Yes, we offer volume discounts for property managers with larger portfolios. Our pricing scales with your business, and we provide custom pricing for Enterprise customers managing 100+ properties. Contact our sales team to discuss your specific needs and get a personalized quote that fits your portfolio size and requirements."
  },
  {
    id: 7,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover) and debit cards. For Enterprise customers, we also offer invoicing with net 30 payment terms. All payments are processed securely through our trusted payment partners, and we never store your payment information on our servers."
  },
  {
    id: 8,
    question: "Is there a money-back guarantee?",
    answer: "While we don't offer a traditional money-back guarantee, we do provide a 14-day free trial so you can fully evaluate our platform before making any financial commitment. If you're not satisfied with Smar8 Solutions during your trial, you can simply cancel without any charges. We're confident you'll love our platform once you experience its benefits."
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              FAQs
            </h2>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-0">
            {faqData.map((item) => {
              const isOpen = openItems.includes(item.id);
              
              return (
                <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => toggleItem(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    className="w-full py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span className="text-lg font-medium text-gray-900 pr-4">
                      {item.question}
                    </span>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <FaMinus className="w-5 h-5 text-gray-500" />
                      ) : (
                        <FaPlus className="w-5 h-5 text-gray-500" />
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
                      <p className="text-gray-600 leading-relaxed">
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
