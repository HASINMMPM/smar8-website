import Hero from '../../components/commen/Hero'
import { FaUniversity, FaShieldAlt, FaChartLine, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const Banking = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaUniversity className="text-secondary-800 text-2xl" />,
      title: "Separate business and personal accounts"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure banking with fraud protection"
    },
    {
      icon: <FaChartLine className="text-secondary-800 text-2xl" />,
      title: "Real-time financial analytics and reporting"
    },
    {
      icon: <FaDownload className="text-secondary-800 text-2xl" />,
      title: "Automated rent collection and deposits"
    }
  ];

  // Banking features for FeatureAccordion
  const bankingFeatures = [
    {
      id: 'separate-accounts',
      title: "Separate Business Accounts",
      description: "Keep your personal and business finances completely separate with dedicated accounts for each property. Maintain clear financial boundaries for better organization.",
      learnMoreUrl: "#"
    },
    {
      id: 'automated-rent-collection',
      title: "Automated Rent Collection",
      description: "Set up automatic rent deposits and never worry about late payments again. Streamline your cash flow with automated collection systems.",
      learnMoreUrl: "#"
    },
    {
      id: 'real-time-analytics',
      title: "Real-time Financial Analytics",
      description: "Track your cash flow, expenses, and profitability with detailed financial reports. Make informed decisions with comprehensive financial insights.",
      learnMoreUrl: "#"
    },
    {
      id: 'fraud-protection',
      title: "Advanced Fraud Protection",
      description: "Bank-level security with advanced fraud detection and protection. Your funds are safe with our comprehensive security measures.",
      learnMoreUrl: "#"
    },
    {
      id: 'mobile-banking',
      title: "Mobile Banking Access",
      description: "Access your accounts anytime, anywhere with our secure mobile banking app. Manage your finances on the go with full functionality.",
      learnMoreUrl: "#"
    },
    {
      id: 'integrated-finances',
      title: "Integrated Financial Management",
      description: "Seamlessly integrate your banking with property management tools for comprehensive financial oversight and simplified operations.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Open Your Account",
      description: "Complete a simple online application and get approved in minutes with our streamlined process designed for real estate investors."
    },
    {
      step: 2,
      title: "Connect Your Properties",
      description: "Link your rental properties and set up automatic rent collection from your tenants through our integrated system."
    },
    {
      step: 3,
      title: "Manage Your Finances",
      description: "Use our dashboard to monitor cash flow, pay expenses, and track your investment performance with real-time updates."
    },
    {
      step: 4,
      title: "Scale & Grow",
      description: "As your portfolio grows, our banking solutions scale with you, providing advanced tools for larger property management needs."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Financial Organization",
      description: "Keep your personal and business finances completely separate with dedicated accounts for better organization and tax compliance."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Automated Operations",
      description: "Streamline your financial operations with automated rent collection, deposits, and comprehensive reporting systems."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Real-time Insights",
      description: "Access real-time financial data and analytics to make informed decisions and optimize your investment strategy."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Banking Solutions for Real Estate Investors"
        brandIcon={<FaUniversity className="text-white text-sm" />}
        brandText="Smar8 Banking"
        headline="Banking Solutions for Real Estate Investors"
        subheadline="Streamline your property management finances with our comprehensive banking solutions designed specifically for real estate investors. Separate accounts, automated operations, and real-time insights."
        ctaText="Open Account Today"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Banking Solution for Smar8 Business Owners"
        subheadline="From separate business accounts to automated rent collection, Smar8 provides everything you need to manage your real estate finances professionally and efficiently."
        ctaText="Explore Banking Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Banking Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Banking Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Professional Financial Management"
        description="Our banking platform provides comprehensive tools to separate finances, automate operations, and maintain detailed financial records across all your properties."
        features={bankingFeatures}
        imageSrc={dummyImage}
        imageAlt="Banking Features"
        defaultActiveFeature="separate-accounts"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Banking Works"
        subtitle="Simple steps to professional banking services and financial management"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Banking"
        subtitle="Transform your financial management with professional banking services and real estate expertise"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Optimize Your Banking Experience?"
        description="Join thousands of real estate investors who trust Smar8 for their banking needs. Let our expert team manage your finances while you focus on growing your portfolio."
        buttonText="Open Account Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default Banking
