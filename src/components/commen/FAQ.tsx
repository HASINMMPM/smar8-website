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
    <section className={`bg-white py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - FAQ Title */}
          <div className="flex items-start">
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 leading-tight ${titleClassName}`}>
              {title}
            </h2>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-0">
            {items.map((item) => {
              const isOpen = openItems.includes(item.id);
              
              return (
                <div key={item.id} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => toggleItem(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    className="w-full px-2 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
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
