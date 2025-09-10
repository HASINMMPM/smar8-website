import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ModernFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does Smar8 help with tenant screening?",
      answer: "Smar8 provides comprehensive tenant screening including credit checks, background verification, rental history, and income verification. Our automated system processes applications quickly and provides detailed reports to help you make informed decisions."
    },
    {
      question: "Can I manage multiple properties with Smar8?",
      answer: "Yes! Smar8 is designed to scale with your portfolio. You can manage anywhere from 1 to unlimited properties depending on your plan. Our dashboard gives you a unified view of all your properties and their performance."
    },
    {
      question: "Is my data secure with Smar8?",
      answer: "Absolutely. We use bank-level encryption, secure cloud infrastructure, and comply with all major data protection regulations including GDPR and CCPA. Your data is encrypted both in transit and at rest."
    },
    {
      question: "Do you offer mobile apps?",
      answer: "Yes, we have native mobile apps for both iOS and Android. The apps provide full functionality including property management, tenant communication, rent collection, and maintenance requests on the go."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer multiple support channels including email, live chat, and phone support. Our response times vary by plan, with Pro and Enterprise customers getting priority support and dedicated account managers."
    },
    {
      question: "Can I integrate Smar8 with other tools?",
      answer: "Yes, Smar8 integrates with over 50+ popular tools including accounting software, payment processors, listing sites, and maintenance platforms. We also offer API access for custom integrations."
    }
  ];

  return (
    <section className="bg-white modern-section">
      <div className="modern-container">
            <h2 className="modern-heading mb-6">
              Frequently Asked Questions
            </h2>
            <p className="modern-subheading mb-8">
              Get answers to common questions about Smar8 and how it can help your property management business.
            </p>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* FAQ Section */}
          <div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="modern-card p-6 border border-gray-100"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full text-left flex items-center justify-between gap-4"
                  >
                    <h3 className="text-lg font-semibold text-dark-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <FaMinus className="w-5 h-5 text-primary-500" />
                      ) : (
                        <FaPlus className="w-5 h-5 text-primary-500" />
                      )}
                    </div>
                  </button>
                  
                  {openIndex === index && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-dark-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="relative rounded-2xl shadow-lg border border-gray-100 p-8 bg-blue-500 text-white overflow-hidden">
              {/* decorative corner blobs */}
              <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-white/15 rounded-3xl"></div>
              <div className="pointer-events-none absolute -bottom-10 -left-10 w-32 h-32 bg-white/15 rounded-3xl"></div>

              <h3 className="text-2xl font-bold mb-2">
                Have You Any Qusition?
              </h3>
              <p className="text-blue-100 mb-6 text-sm">
                We have several powerful plans to showcase your business and get discovered.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full px-4 py-3 rounded-xl border-0 bg-white text-dark-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full px-4 py-3 rounded-xl border-0 bg-white text-dark-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Your mail address"
                  className="w-full px-4 py-3 rounded-xl border-0 bg-white text-dark-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <textarea
                  placeholder="Your message here..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-0 bg-white text-dark-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                ></textarea>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-dark-900 text-white font-semibold py-3 px-6 rounded-xl hover:bg-dark-800 transition-colors duration-300"
                  >
                    Send Your Message Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFAQ;

