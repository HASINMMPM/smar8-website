import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

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

  const faqData = [
    {
      id: 1,
      question: "What are the three Smar8 applications and how do they differ?",
      answer: "Smar8 has three distinct applications: 1) Smar8 Connect (Free) - for tenants and staff to view memberships and payments, 2) Smar8 Business (₹2,999/month) - for business owners to manage multiple businesses and people, 3) Smar8 Manage (₹4,999/month) - for building owners to manage entire building infrastructure and collect rent from business owners."
    },
    {
      id: 2,
      question: "Can I use multiple Smar8 applications with the same account?",
      answer: "Yes! Smar8 uses a Unified Identity system where you register once with email/password, and admin assigns roles. You can have multiple roles (Person, Business Owner, Building Owner) and access different applications based on your permissions. Same login credentials work across all apps."
    },
    {
      id: 3,
      question: "What are the additional charges for people management?",
      answer: "Additional charges include: Adding new person (₹40), Removing person (₹25), Moving people between businesses (₹30). These charges apply to Business Owner accounts when managing their people."
    },
    {
      id: 4,
      question: "How does the payment flow work in Smar8?",
      answer: "The payment flow is: People pay Business Owners for services/memberships, Business Owners pay Building Owners for rent/utilities/maintenance, and Building Owners can also collect security deposits. All payments are cash-based with digital receipts and audit trails."
    },
    {
      id: 5,
      question: "Can I upgrade from one plan to another?",
      answer: "Yes, you can upgrade your role and access higher-tier applications. Admin can promote users from Person to Business Owner to Building Owner. Your data is preserved across role transitions, and you can access multiple applications based on your assigned roles."
    },
    {
      id: 6,
      question: "What happens if I'm a Building Owner but also want to operate a business?",
      answer: "Building Owners can operate businesses within their own buildings without paying rent to themselves. You'll have access to both Smar8 Manage (for building management) and Smar8 Business (for business operations) based on your role permissions."
    },
    {
      id: 7,
      question: "Is there a free trial available?",
      answer: "Smar8 Connect is completely free for tenants and staff. For Business and Manage plans, we offer a 14-day free trial so you can experience the full features before committing to a paid plan."
    },
    {
      id: 8,
      question: "How do I get started with Smar8?",
      answer: "Start with Smar8 Connect for free to experience the platform. If you need business management features, contact our sales team to upgrade to Business or Manage plans. We'll help you set up your account and assign appropriate roles."
    },
    {
      id: 9,
      question: "What support is included with each plan?",
      answer: "Smar8 Connect includes basic support, Smar8 Business includes priority support, and Smar8 Manage includes 24/7 premium support. All plans include access to our help center and documentation."
    },
    {
      id: 10,
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. However, if you're a Business Owner or Building Owner, ensure you've properly transferred or closed your businesses and settled all outstanding payments before cancellation."
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - FAQ Title */}
          <div className="flex items-start">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: 'var(--color-dark-900)' }}>
              Frequently Asked Questions About Smar8 Pricing
            </h2>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-0">
            {faqData.map((item) => {
              const isOpen = openItems.includes(item.id);
              
              return (
                <div key={item.id} className="border-b last:border-b-0" style={{ borderColor: 'var(--color-dark-200)' }}>
                  <button
                    onClick={() => toggleItem(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    className="w-full px-2 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span className="text-lg font-medium pr-4" style={{ color: 'var(--color-dark-900)' }}>
                      {item.question}
                    </span>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <FaMinus className="w-5 h-5" style={{ color: 'var(--color-dark-500)' }} />
                      ) : (
                        <FaPlus className="w-5 h-5" style={{ color: 'var(--color-dark-500)' }} />
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
                      <p className="leading-relaxed" style={{ color: 'var(--color-dark-600)' }}>
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
