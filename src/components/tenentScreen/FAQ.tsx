import FAQ from '../commen/FAQ';

const faqData = [
  {
    id: 1,
    question: "What is Smar8 Connect?",
    answer: "Smar8 Connect is a tenant and staff application that allows you to view your business memberships, access payment history, and manage your account information."
  },
  {
    id: 2,
    question: "How do I access my payment history?",
    answer: "You can view your payment history and receipts through your Smar8 Connect account. All transactions are securely stored and easily accessible."
  },
  {
    id: 3,
    question: "Can I update my personal information?",
    answer: "Yes, you can update your personal information, contact details, and preferences through your Smar8 Connect profile settings."
  },
  {
    id: 4,
    question: "How do I contact support?",
    answer: "For support, you can reach out to your business owner or contact our customer service team through the help center."
  }
];

const TenantFAQ = () => {
  return (
    <FAQ
      title="Frequently Asked Questions"
      items={faqData}
    />
  );
};

export default TenantFAQ;
