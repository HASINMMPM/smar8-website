import Hero from '../../components/commen/Hero'
import { FaCheckDouble, FaShieldAlt, FaClock, FaChartBar, FaEye, FaDatabase } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const Reconciliation = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaCheckDouble className="text-secondary-800 text-2xl" />,
      title: "Multi-level transaction reconciliation across business hierarchy"
    },
    {
      icon: <FaClock className="text-secondary-800 text-2xl" />,
      title: "Real-time transaction tracking and verification"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure transaction data with encrypted storage and audit trails"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Comprehensive reconciliation reporting for all business levels"
    }
  ];

  // Reconciliation features for FeatureAccordion
  const reconciliationFeatures = [
    {
      id: 'multi-level-reconciliation',
      title: "Multi-Level Transaction Reconciliation",
      description: "Reconcile transactions across the complete Smar8 hierarchy: People → Business Owners → Building Owners. Track all payments, transfers, and charges with automatic verification.",
      learnMoreUrl: "#"
    },
    {
      id: 'payment-verification',
      title: "Payment Verification & Matching",
      description: "Verify all cash payments against expected amounts before completing operations. Match payments with registrations, transfers, and people management activities for complete accuracy.",
      learnMoreUrl: "#"
    },
    {
      id: 'transfer-charge-tracking',
      title: "Transfer Charge Reconciliation",
      description: "Track and reconcile all transfer charges when moving people between businesses or rooms. Verify 40 charges for additions, 25 for removals, and additional transfer fees.",
      learnMoreUrl: "#"
    },
    {
      id: 'business-owner-reconciliation',
      title: "Business Owner Transaction Reconciliation",
      description: "Reconcile income from people payments, expenses for business operations, and payments to building owners. Track multiple businesses across different buildings with consolidated reconciliation.",
      learnMoreUrl: "#"
    },
    {
      id: 'building-owner-reconciliation',
      title: "Building Owner Transaction Reconciliation",
      description: "Reconcile income from business owners (rent, utilities, maintenance, security deposits) with building expenses and staff costs. Maintain complete financial oversight across all buildings.",
      learnMoreUrl: "#"
    },
    {
      id: 'audit-trail-management',
      title: "Complete Audit Trail Management",
      description: "Maintain comprehensive audit trails for all reconciliation activities. Track changes, approvals, and modifications for compliance and financial transparency across the entire system.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Transaction Collection",
      description: "Collect all transaction data from people payments, business operations, and building management activities across the complete Smar8 hierarchy."
    },
    {
      step: 2,
      title: "Automatic Verification",
      description: "Our system automatically verifies payments against expected amounts and matches transactions with corresponding operations for accuracy."
    },
    {
      step: 3,
      title: "Reconciliation & Resolution",
      description: "Identify and resolve any discrepancies, track transfer charges, and ensure all transactions are properly reconciled across all business levels."
    },
    {
      step: 4,
      title: "Reporting & Compliance",
      description: "Generate comprehensive reconciliation reports, maintain complete audit trails, and ensure compliance with all financial and regulatory requirements."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaClock className="text-primary-600 text-xl" />,
      title: "Time Savings",
      description: "Automate the reconciliation process across multiple business levels and save hours of manual work while ensuring accuracy and compliance."
    },
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Complete Transparency",
      description: "Maintain complete visibility into all financial transactions across the business hierarchy with automated reconciliation and real-time tracking."
    },
    {
      icon: <FaDatabase className="text-primary-600 text-xl" />,
      title: "Compliance Ready",
      description: "Generate comprehensive audit trails and reconciliation reports to meet all financial compliance and regulatory requirements across all business levels."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Multi-Level Transaction Reconciliation"
        brandIcon={<FaCheckDouble className="text-white text-sm" />}
        brandText="Smar8 Reconciliation"
        headline="Multi-Level Transaction Reconciliation for Smar8"
        subheadline="Streamline your financial reconciliation process across the complete business hierarchy with automated verification, transfer charge tracking, and comprehensive reporting. Maintain accurate financial records with minimal effort."
        ctaText="Start Reconciling Today"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Reconciliation Solution for Smar8 Business & Building Owners"
        subheadline="From multi-level transaction reconciliation to comprehensive audit trail management, Smar8 provides everything you need to maintain accurate financial records and ensure compliance across all business operations."
        ctaText="Explore Reconciliation Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Multi-Level Reconciliation Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Reconciliation Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Multi-Level Transaction Reconciliation"
        description="Our platform provides comprehensive tools to reconcile transactions across the complete business hierarchy, track transfer charges, and maintain accurate financial records for all operations."
        features={reconciliationFeatures}
        imageSrc={dummyImage}
        imageAlt="Multi-Level Reconciliation Features"
        defaultActiveFeature="multi-level-reconciliation"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Multi-Level Reconciliation Works"
        subtitle="Simple steps to automate your reconciliation process across the complete business hierarchy"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Multi-Level Reconciliation"
        subtitle="Transform your financial reconciliation with automated tools that save time and ensure accuracy across all business levels"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Automate Your Multi-Level Reconciliation?"
        description="Join thousands of business and building owners who trust Smar8 to handle their reconciliation processes efficiently and accurately across all business levels. Start saving time today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default Reconciliation
