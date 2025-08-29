import Hero from '../../components/commen/Hero'
import { FaCalculator, FaShieldAlt, FaChartBar, FaFileAlt,FaDownload, FaEye, FaDatabase } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const Accounting = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaCalculator className="text-secondary-800 text-2xl" />,
      title: "Multi-level financial tracking across business hierarchy"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Variable rate calculations and transfer charge management"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure financial data with encrypted storage and audit trails"
    },
    {
      icon: <FaFileAlt className="text-secondary-800 text-2xl" />,
      title: "Comprehensive financial reporting for all business levels"
    }
  ];

  // Accounting features for FeatureAccordion
  const accountingFeatures = [
    {
      id: 'multi-level-tracking',
      title: "Multi-Level Financial Tracking",
      description: "Track financial flows across the complete Smar8 hierarchy: People → Business Owners → Building Owners. Monitor rent, utilities, maintenance, and transfer charges at every level.",
      learnMoreUrl: "#"
    },
    {
      id: 'variable-rate-management',
      title: "Variable Rate & Charge Management",
      description: "Implement variable rates based on business type and mobile prefixes. Automatically calculate and track charges for people management (40 for additions, 25 for removals) and room transfers.",
      learnMoreUrl: "#"
    },
    {
      id: 'payment-verification',
      title: "Payment Verification & Security",
      description: "Verify all cash payments before completing operations. Maintain secure financial records with encrypted storage and comprehensive audit trails for compliance and transparency.",
      learnMoreUrl: "#"
    },
    {
      id: 'business-owner-finances',
      title: "Business Owner Financial Management",
      description: "Track income from people payments, manage expenses, and handle payments to building owners. Monitor multiple businesses across different buildings with consolidated financial oversight.",
      learnMoreUrl: "#"
    },
    {
      id: 'building-owner-finances',
      title: "Building Owner Financial Management",
      description: "Manage income from business owners (rent, utilities, maintenance, security deposits), track building-level expenses, and manage staff costs for security and maintenance.",
      learnMoreUrl: "#"
    },
    {
      id: 'transfer-charge-accounting',
      title: "Transfer Charge Accounting",
      description: "Track and account for all transfer charges when moving people between businesses or rooms. Maintain detailed records of transfer fees and their distribution across the system.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Multi-Level Setup",
      description: "Configure your role (Business Owner or Building Owner) and set up financial tracking for your businesses, buildings, and people management operations."
    },
    {
      step: 2,
      title: "Rate Configuration",
      description: "Set variable rates based on business type and mobile prefixes. Configure transfer charges and people management fees according to your business requirements."
    },
    {
      step: 3,
      title: "Financial Tracking",
      description: "Track all financial transactions across the hierarchy: people payments, business operations, building expenses, and transfer charges with complete audit trails."
    },
    {
      step: 4,
      title: "Reporting & Analysis",
      description: "Generate comprehensive financial reports, analyze performance across multiple businesses or buildings, and maintain complete financial oversight for compliance."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Complete Financial Visibility",
      description: "Get real-time insights into your financial operations across all businesses, buildings, and people management activities with comprehensive tracking."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Automated Calculations",
      description: "Automate rate calculations, transfer charges, and people management fees to save time and ensure accuracy across all financial operations."
    },
    {
      icon: <FaDatabase className="text-primary-600 text-xl" />,
      title: "Secure & Compliant",
      description: "Maintain secure financial records with encrypted storage, comprehensive audit trails, and role-based access control for complete compliance."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Multi-Level Financial Management & Accounting"
        brandIcon={<FaCalculator className="text-white text-sm" />}
        brandText="Smar8 Accounting"
        headline="Complete Multi-Level Financial Management for Smar8"
        subheadline="Manage finances across the complete Smar8 hierarchy with variable rates, transfer charges, and comprehensive financial tracking. Maintain secure records and complete audit trails for all business operations."
        ctaText="Start Managing Finances"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Professional Financial Management for Smar8 Business & Building Owners"
        subheadline="From multi-level financial tracking to variable rate management, Smar8 provides everything you need to manage finances professionally across your businesses, buildings, and people operations."
        ctaText="Explore Accounting Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Smar8 Financial Management Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Accounting Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Professional Smar8 Financial Management"
        description="Our platform provides comprehensive tools to manage finances across the complete business hierarchy, implement variable rates, and maintain professional accounting records for all operations."
        features={accountingFeatures}
        imageSrc={dummyImage}
        imageAlt="Smar8 Financial Management Features"
        defaultActiveFeature="multi-level-tracking"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Multi-Level Financial Management Works"
        subtitle="Simple steps to streamline your financial operations across the complete business hierarchy"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Financial Management"
        subtitle="Transform your financial operations with multi-level tracking and automated rate management"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Professionalize Your Smar8 Financial Management?"
        description="Join thousands of business and building owners who trust Smar8 to handle their multi-level financial operations professionally and efficiently. Start improving your financial oversight today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default Accounting
