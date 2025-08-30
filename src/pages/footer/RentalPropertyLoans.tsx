import Hero from '../../components/commen/Hero'
import { FaMoneyBillWave, FaHome, FaChartLine, FaShieldAlt, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const RentalPropertyLoans = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaMoneyBillWave className="text-secondary-800 text-2xl" />,
      title: "Competitive financing for rental properties"
    },
    {
      icon: <FaHome className="text-secondary-800 text-2xl" />,
      title: "Flexible loan terms and options"
    },
    {
      icon: <FaChartLine className="text-secondary-800 text-2xl" />,
      title: "Fast approval and funding process"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure and reliable lending solutions"
    }
  ];

  // Loan features for FeatureAccordion
  const loanFeatures = [
    {
      id: 'purchase-loans',
      title: "Purchase Loans",
      description: "Finance the purchase of new rental properties with competitive rates and flexible terms.",
      learnMoreUrl: "#"
    },
    {
      id: 'refinancing',
      title: "Refinancing",
      description: "Refinance existing properties to lower rates, cash out equity, or consolidate debt.",
      learnMoreUrl: "#"
    },
    {
      id: 'renovation-loans',
      title: "Renovation Loans",
      description: "Finance property improvements and renovations to increase rental value and appeal.",
      learnMoreUrl: "#"
    },
    {
      id: 'portfolio-loans',
      title: "Portfolio Loans",
      description: "Access financing for multiple properties with streamlined portfolio lending solutions.",
      learnMoreUrl: "#"
    },
    {
      id: 'bridge-loans',
      title: "Bridge Loans",
      description: "Get short-term financing to bridge gaps between property purchases and sales.",
      learnMoreUrl: "#"
    },
    {
      id: 'commercial-loans',
      title: "Commercial Loans",
      description: "Finance larger commercial properties and multi-family developments.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Apply Online",
      description: "Complete our simple online application with basic property and financial information."
    },
    {
      step: 2,
      title: "Quick Review",
      description: "Our team reviews your application and provides a preliminary decision within 24 hours."
    },
    {
      step: 3,
      title: "Documentation",
      description: "Submit required documentation for final approval and loan processing."
    },
    {
      step: 4,
      title: "Funding",
      description: "Receive funding quickly once final approval is complete and documents are verified."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Competitive Rates",
      description: "Access competitive interest rates and favorable loan terms for your rental property investments."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Fast Processing",
      description: "Get quick approval and funding to capitalize on time-sensitive investment opportunities."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Flexible Terms",
      description: "Choose from flexible loan terms and options that fit your investment strategy and timeline."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Rental Property Loans"
        brandIcon={<FaMoneyBillWave className="text-white text-sm" />}
        brandText="Smar8 Loans"
        headline="Rental Property Financing Solutions"
        subheadline="Access competitive financing for your rental property investments. Get fast approval, competitive rates, and flexible terms to grow your real estate portfolio."
        ctaText="Apply for Loan"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Financing Solution for Real Estate Investors"
        subheadline="From purchase loans to refinancing, Smar8 provides comprehensive financing solutions that help you acquire and grow your rental property portfolio."
        ctaText="Explore Loan Options"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Loan Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Loan Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Property Financing"
        description="Our comprehensive loan portfolio provides all the financing options you need to acquire, renovate, and grow your rental property investments."
        features={loanFeatures}
        imageSrc={dummyImage}
        imageAlt="Loan Features"
        defaultActiveFeature="purchase-loans"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Property Loans Work"
        subtitle="Simple steps to fast approval and funding for your rental property investments"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Property Loans"
        subtitle="Transform your property acquisition with competitive financing and fast processing"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Finance Your Next Investment?"
        description="Join thousands of investors who trust Smar8 for their property financing needs. Apply today and get fast approval for your rental property investments."
        buttonText="Apply Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default RentalPropertyLoans
