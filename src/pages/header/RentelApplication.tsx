
import Hero from '../../components/commen/Hero'
import { FaPlus, FaSearch,  FaBuilding, FaShieldAlt, FaCreditCard, FaChartBar } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const mainFeatures = [
  {
    id: 'applications',
    title: "Streamlined Application Management",
    description: "Manage rental applications efficiently with our comprehensive system. Track applicants, review documents, and make informed decisions with detailed applicant profiles and screening results.",
    learnMoreUrl: "#"
  },
  {
    id: 'screening',
    title: "Integrated Background Checks",
    description: "Run comprehensive background checks directly from applications. Get instant results for credit history, criminal records, eviction history, and identity verification—all in one place.",
    learnMoreUrl: "#"
  },
  {
    id: 'compliance',
    title: "FCRA-Compliant Screening Process",
    description: "Stay compliant with fair housing laws and FCRA regulations. Our system includes built-in disclosures, permissions, and adverse action letters to protect your business.",
    learnMoreUrl: "#"
  }
];

const RentelApplication = () => {
  // Features array for the Hero component - updated for Smar8 Business context
  const features = [
    {
      icon: <FaBuilding className="text-secondary-800 text-2xl" />,
      title: "Manage applications across multiple business locations"
    },
    {
      icon: <FaSearch className="text-secondary-800 text-2xl" />,
      title: "Comprehensive background checks with instant results"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure document storage and encrypted data handling"
    },
    {
      icon: <FaCreditCard className="text-secondary-800 text-2xl" />,
      title: "Integrated payment collection and financial tracking"
    }
  ];

  // How it works steps for rental applications
  const howItWorksSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Tenants complete comprehensive applications with all required documents and information through our secure platform."
    },
    {
      step: 2,
      title: "Background Screening",
      description: "Automated background checks run instantly, checking credit, criminal records, eviction history, and identity verification."
    },
    {
      step: 3,
      title: "Review & Approve",
      description: "Business owners review screening results, documents, and make informed decisions with our approval workflow."
    },
    {
      step: 4,
      title: "Tenant Onboarding",
      description: "Approved tenants are automatically onboarded with lease generation and payment setup."
    }
  ];

  // Business management features for FeatureGrid
  const businessFeatures = [
    {
      icon: <FaBuilding className="text-primary-600 text-xl" />,
      title: "Multi-Business Support",
      description: "Manage rental applications across multiple businesses and locations from a single dashboard."
    },
    {
      icon: <FaShieldAlt className="text-primary-600 text-xl" />,
      title: "Security & Compliance",
      description: "Ensure data security with encrypted storage and maintain compliance with industry regulations."
    },
    {
      icon: <FaChartBar className="text-primary-600 text-xl" />,
      title: "Analytics & Reporting",
      description: "Get insights into application trends, screening results, and business performance metrics."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 Business - Rental Applications"
        brandIcon={<FaPlus className="text-white text-sm" />}
        brandText="Smar8 Business"
        headline="Streamline Your Rental Application Process"
        subheadline="As a Business Owner, efficiently manage rental applications, conduct comprehensive tenant screening, and streamline your leasing operations across multiple locations with Smar8 Business."
        ctaText="Start Managing Applications"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      <Banner
        headline="Complete Application Management Platform"
        subheadline="From initial application to final approval, Smar8 Business handles every step of the rental process. Manage multiple businesses, track applicants, and maintain compliance across all your locations."
        ctaText="Get Started with Smar8 Business"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Smar8 Business Application Management"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
     
     <FeatureAccordion
      title="Comprehensive Rental Application Management"
      description="Streamline your rental application process with our integrated platform designed specifically for Business Owners managing multiple properties and businesses."
      features={mainFeatures}
      imageSrc={dummyImage}
      imageAlt="Rental Application Management Features"
      defaultActiveFeature="applications"
    />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Business Application Process Works"
        subtitle="Simple steps to streamline your rental application workflow from start to finish"
        steps={howItWorksSteps}
        backgroundColor="bg-white"
      />

      {/* Additional Business Management Section - Using reusable component */}
      <FeatureGrid
        title="Why Choose Smar8 Business for Applications?"
        subtitle="Our platform is designed specifically for Business Owners who need to manage multiple businesses and locations efficiently."
        features={businessFeatures}
        backgroundColor="bg-gray-50"
        columns={3}
      />

      {/* Call-to-Action Section */}
      <Cta
        heading="Ready to Transform Your Rental Application Process?"
        description="Join thousands of business owners who trust Smar8 Business to manage their rental applications efficiently. Start streamlining your operations today and experience the difference."
        buttonText="Start Free Trial"
        buttonUrl="/#"
      />
    </div>
  )
}

export default RentelApplication