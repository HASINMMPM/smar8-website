import FAQ from '../commen/FAQ';

const faqData = [
  {
    id: 1,
    question: "What is Smar8 Solutions?",
    answer: "Smar8 Solutions is a comprehensive property management platform that helps building owners, business owners, and tenants manage their properties efficiently through three specialized applications: Smar8 Manage, Smar8 Business, and Smar8 Connect."
  },
  {
    id: 2,
    question: "How does the three-app system work?",
    answer: "Our platform consists of three interconnected applications: Smar8 Manage for building owners, Smar8 Business for business operators, and Smar8 Connect for tenants and staff. Each app serves specific user roles while maintaining unified authentication and data security."
  },
  {
    id: 3,
    question: "Is my data secure?",
    answer: "Yes, we prioritize data security with encrypted storage, role-based access control, and compliance with industry standards. Sensitive documents are stored securely with encryption, and access is strictly controlled based on user roles."
  },
  {
    id: 4,
    question: "Can I use multiple apps with one account?",
    answer: "Yes, our unified identity system allows you to access multiple apps with the same email and password. Your access to different apps is determined by your assigned role and permissions."
  },
  {
    id: 5,
    question: "What payment methods do you support?",
    answer: "We support cash payments and can integrate with various payment systems. Our platform tracks all transactions and provides digital receipts and audit trails for complete financial transparency."
  }
];

const LandingFAQ = () => {
  return (
    <FAQ
      title="Frequently Asked Questions"
      items={faqData}
    />
  );
};

export default LandingFAQ;
