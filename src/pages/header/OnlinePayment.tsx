import Hero from '../../components/commen/Hero'
import { FaCreditCard, FaShieldAlt, FaClock, FaChartBar, FaMobile } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const OnlinePayment = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaCreditCard className="text-secondary-800 text-2xl" />,
      title: "Cash-based payment collection with digital receipts"
    },
    {
      icon: <FaClock className="text-secondary-800 text-2xl" />,
      title: "Variable rates based on business type and mobile prefixes"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure payment verification and audit trail maintenance"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Multi-level payment flow tracking and reporting"
    }
  ];

  // Payment features for FeatureAccordion
  const paymentFeatures = [
    {
      id: 'cash-collection',
      title: "Cash-Only Payment Collection",
      description: "Collect payments in cash from tenants and staff with mandatory payment verification before registration. Generate digital receipts and maintain complete audit trails for all transactions.",
      learnMoreUrl: "#"
    },
    {
      id: 'variable-rates',
      title: "Variable Rate System",
      description: "Set different rates based on business type and mobile number prefixes. Automatically calculate charges for room transfers, people management, and business operations.",
      learnMoreUrl: "#"
    },
    {
      id: 'payment-verification',
      title: "Payment Verification & Security",
      description: "Verify all payments before completing registrations. Maintain secure records with encrypted storage and comprehensive audit trails for compliance and transparency.",
      learnMoreUrl: "#"
    },
    {
      id: 'multi-level-flow',
      title: "Multi-Level Payment Flow",
      description: "Track payments from People → Business Owners → Building Owners. Manage rent, utilities, maintenance fees, and security deposits across the complete property hierarchy.",
      learnMoreUrl: "#"
    },
    {
      id: 'transfer-charges',
      title: "Transfer Charges & Fees",
      description: "Automatically calculate and collect charges for moving people between businesses (40 charges for new additions, 25 for removals, additional fees for transfers).",
      learnMoreUrl: "#"
    },
    {
      id: 'digital-receipts',
      title: "Digital Receipts & Records",
      description: "Generate digital receipts for all payments, track payment history, and maintain comprehensive financial records for business owners and building owners.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Payment Collection",
      description: "Collect cash payments from tenants and staff with mandatory verification before completing any registrations or transfers."
    },
    {
      step: 2,
      title: "Rate Calculation",
      description: "Automatically calculate charges based on business type, mobile prefixes, and transfer requirements using our variable rate system."
    },
    {
      step: 3,
      title: "Verification & Processing",
      description: "Verify payment amounts, generate digital receipts, and process registrations or transfers with complete audit trail."
    },
    {
      step: 4,
      title: "Multi-Level Distribution",
      description: "Distribute payments across the property hierarchy: People → Business Owners → Building Owners with proper tracking and reporting."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaClock className="text-primary-600 text-xl" />,
      title: "Streamlined Collection",
      description: "Simplify cash payment collection with automated rate calculation and mandatory verification before any operations."
    },
    {
      icon: <FaShieldAlt className="text-primary-600 text-xl" />,
      title: "Complete Security",
      description: "Ensure payment security with verification requirements, digital receipts, and comprehensive audit trails for all transactions."
    },
    {
      icon: <FaMobile className="text-primary-600 text-xl" />,
      title: "Flexible Rates",
      description: "Implement variable rates based on business needs and automatically calculate charges for different operations and transfers."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Cash Payment Collection & Management"
        brandIcon={<FaCreditCard className="text-white text-sm" />}
        brandText="Smar8 Payments"
        headline="Streamline Cash Payment Collection with Digital Verification"
        subheadline="Collect cash payments efficiently with our comprehensive payment system. Implement variable rates, verify payments before operations, and maintain complete audit trails with digital receipts."
        ctaText="Start Collecting Payments"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Cash Payment Solution for Smar8 Business Owners"
        subheadline="From cash collection to multi-level payment distribution, Smar8 provides everything you need to manage payments efficiently, implement variable rates, and maintain complete financial oversight."
        ctaText="Explore Payment Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Cash Payment Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Payment Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Cash Payment Management"
        description="Our platform provides comprehensive tools to streamline cash collection, implement variable rates, and maintain complete financial oversight across your business operations."
        features={paymentFeatures}
        imageSrc={dummyImage}
        imageAlt="Cash Payment Features"
        defaultActiveFeature="cash-collection"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Cash Payments Work"
        subtitle="Simple steps to streamline your cash collection and payment verification workflow"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Cash Payments"
        subtitle="Transform your payment collection with secure verification and automated rate calculation"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Streamline Your Cash Payment Collection?"
        description="Join thousands of business owners who trust Smar8 to handle their cash payments securely and efficiently. Start improving your payment processes today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default OnlinePayment
