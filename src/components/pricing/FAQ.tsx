import FAQ from '../commen/FAQ';

const faqData = [
  {
    id: 1,
    question: "What pricing plans do you offer?",
    answer: "We offer flexible pricing plans including Basic, Professional, and Enterprise tiers. Each plan is designed to meet different business needs and scales with your operations."
  },
  {
    id: 2,
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated accordingly."
  },
  {
    id: 3,
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for all our plans so you can experience the full features before committing."
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, bank transfers, and can accommodate custom payment arrangements for enterprise customers."
  },
  {
    id: 5,
    question: "Do you offer discounts for annual payments?",
    answer: "Yes, we offer significant discounts for annual payments. Contact our sales team for custom pricing options."
  }
];

const PricingFAQ = () => {
  return (
    <FAQ
      title="Frequently Asked Questions"
      items={faqData}
    />
  );
};

export default PricingFAQ;
