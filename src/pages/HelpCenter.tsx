import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQSection {
  title: string;
  icon: string;
  items: FAQItem[];
}

const HelpCenter: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemKey: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemKey)) {
      newOpenItems.delete(itemKey);
    } else {
      newOpenItems.add(itemKey);
    }
    setOpenItems(newOpenItems);
  };

  const faqSections: FAQSection[] = [
    {
      title: "For Tenants / Workers",
      icon: "🧍",
      items: [
        {
          question: "What is Smar8 and how does it help me?",
          answer: "Smar8 is a digital platform that helps migrant workers register with landlords, track room movements, find jobs, and access welfare — all in your language."
        },
        {
          question: "Is registration mandatory?",
          answer: "Yes. If you're staying in a rented room, your registration is required for safety and legal compliance. We help make this process easy and fast."
        },
        {
          question: "What documents do I need to register?",
          answer: (
            <div>
              <p className="mb-2">You will need:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Aadhar Card (or any valid ID)</li>
                <li>A recent photo</li>
                <li>Phone number</li>
              </ul>
              <p className="mt-2">All documents must be clear, valid, and self-attested.</p>
            </div>
          )
        },
        {
          question: "What are the registration charges?",
          answer: (
            <div>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>First-Time Registration: ₹40</li>
                <li>When you move to another room/property: ₹20 per move (up to 4 moves allowed)</li>
              </ul>
            </div>
          )
        },
        {
          question: "How can I find jobs using the app?",
          answer: "Inside the Smar8 App, go to the \"Job Discovery\" section. Browse local job listings and connect directly with employers."
        }
      ]
    },
    {
      title: "For Building Owners / Landlords",
      icon: "🏢",
      items: [
        {
          question: "Do I need to register every tenant?",
          answer: "Yes, all tenants (especially migrant workers) must be digitally registered to comply with local regulations and for your own safety."
        },
        {
          question: "Can I manage multiple properties?",
          answer: "Yes, our app supports multi-building and multi-room management. You can assign coordinators per building too."
        },
        {
          question: "Is there any paperwork involved?",
          answer: "No physical paperwork is required. All registrations are fully digital. If needed, Smar8 generates a digital report that can be shared with local authorities."
        }
      ]
    },
    {
      title: "For Coordinators",
      icon: "🤝",
      items: [
        {
          question: "Who can become a coordinator?",
          answer: "Anyone who manages one or more properties or works with tenants (building managers, field workers, etc.) can register as a coordinator."
        },
        {
          question: "What can a coordinator do in the app?",
          answer: (
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Help tenants register</li>
              <li>Take photos and upload documents</li>
              <li>Track tenant movement</li>
              <li>Generate and send police reports</li>
            </ul>
          )
        }
      ]
    },
    {
      title: "General Questions",
      icon: "🧾",
      items: [
        {
          question: "Is this platform approved by the government?",
          answer: "While Smar8 is a private digital service, we follow local registration norms and help generate police-compliant reports. We are building partnerships with local authorities."
        },
        {
          question: "Is my data safe?",
          answer: "Yes. We use encryption and strict security protocols. Your data is never sold or shared without your permission."
        },
        {
          question: "What if I face an issue or error in the app?",
          answer: (
            <div>
              <p className="mb-2">You can contact our support team via:</p>
              <div className="space-y-2 ml-4">
                <p className="flex items-center">
                  <span className="mr-2">📧</span>
                  <a href="mailto:support@smar8.in" className="text-blue-600 hover:text-blue-800">support@smar8.in</a>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  +91-XXXXXXXXXX
                </p>
                <p className="flex items-center">
                  <span className="mr-2">💬</span>
                  WhatsApp Support
                </p>
              </div>
            </div>
          )
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ❓ Help Center – Smar8 Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Quick answers to your most common questions.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Whether you're a tenant, building owner, coordinator, or just getting started, we're here to help. Explore our FAQs below or contact us directly if you need more support.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <section key={sectionIndex} className="bg-white rounded-lg shadow-sm border p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">{section.icon}</span>
                {section.title}
              </h2>
              
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const itemKey = `${sectionIndex}-${itemIndex}`;
                  const isOpen = openItems.has(itemKey);
                  
                  return (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleItem(itemKey)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                      >
                        <span className="text-lg font-medium text-gray-900 pr-4">
                          {item.question}
                        </span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4 border-t border-gray-200">
                          <div className="pt-4 text-gray-700 leading-relaxed">
                            {item.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border p-6 md:p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              💬 Still need help?
            </h2>
            <p className="text-gray-700 mb-6">
              Fill out the Support Request Form or contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@smar8.in"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                <span className="mr-2">📧</span>
                Email Support
              </a>
              <a
                href="tel:+91-XXXXXXXXXX"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="mr-2">📞</span>
                Call Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
