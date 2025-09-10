import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  items: FAQItem[];
  className?: string;
  titleClassName?: string;
}

const FAQ = ({ title, items, className = "", titleClassName = "" }: FAQProps) => {
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
    <section className={`bg-white modern-section ${className}`}>
      <div className="modern-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - FAQ Title */}
          <div className="flex items-start">
            <h2 className={`modern-heading ${titleClassName}`}>
              {title}
            </h2>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {items.map((item) => {
              const isOpen = openItems.includes(item.id);
              
              return (
                <div key={item.id} className="modern-card p-6 border border-gray-100">
                  <button
                    onClick={() => toggleItem(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    className="w-full text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50 rounded-lg p-2 -m-2"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span className="text-lg font-semibold text-dark-900 pr-4">
                      {item.question}
                    </span>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <FaMinus className="w-5 h-5 text-primary-500" />
                      ) : (
                        <FaPlus className="w-5 h-5 text-primary-500" />
                      )}
                    </div>
                  </button>
                  
                  <div
                    id={`faq-answer-${item.id}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 pr-8">
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
