import Hero from '../../components/commen/Hero'
import { FaHome, FaUsers, FaShieldAlt, FaChartBar,  FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const Landlords = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaHome className="text-secondary-800 text-2xl" />,
      title: "Simplify rental property administration"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Streamlined tenant management"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure property and financial management"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Comprehensive property analytics"
    }
  ];

  // Landlords features for FeatureAccordion
  const landlordFeatures = [
    {
      id: 'property-administration',
      title: "Simplified Property Administration",
      description: "Manage all aspects of your rental properties from one centralized platform. Handle tenant screening, lease management, maintenance, and financial tracking efficiently.",
      learnMoreUrl: "#"
    },
    {
      id: 'tenant-management',
      title: "Streamlined Tenant Management",
      description: "Simplify tenant relationships with integrated tools for screening, applications, lease management, and ongoing communication. Maintain professional standards with ease.",
      learnMoreUrl: "#"
    },
    {
      id: 'financial-management',
      title: "Comprehensive Financial Management",
      description: "Track rent collection, expenses, and property performance with detailed financial reporting. Maintain clear financial records and optimize your rental income.",
      learnMoreUrl: "#"
    },
    {
      id: 'maintenance-coordination',
      title: "Efficient Maintenance Coordination",
      description: "Coordinate property maintenance and repairs with tenants and service providers. Track maintenance requests, schedule work, and maintain property value.",
      learnMoreUrl: "#"
    },
    {
      id: 'legal-compliance',
      title: "Legal Compliance & Documentation",
      description: "Ensure compliance with local rental laws and regulations. Generate proper documentation, maintain audit trails, and protect your investment.",
      learnMoreUrl: "#"
    },
    {
      id: 'property-optimization',
      title: "Property Performance Optimization",
      description: "Analyze property performance, tenant satisfaction, and market trends to optimize your rental strategy and maximize property value.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Set Up Properties",
      description: "Configure your rental properties, set up management workflows, and establish tenant management processes for efficient administration."
    },
    {
      step: 2,
      title: "Manage Tenants",
      description: "Handle tenant screening, applications, leases, and ongoing relationships with comprehensive tools and automated workflows."
    },
    {
      step: 3,
      title: "Coordinate Operations",
      description: "Coordinate property maintenance, financial management, and legal compliance while maintaining clear communication with tenants."
    },
    {
      step: 4,
      title: "Optimize Performance",
      description: "Track property performance, analyze market trends, and continuously optimize your rental strategy based on data-driven insights."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Simplified Administration",
      description: "Simplify all aspects of rental property administration with integrated tools, automated workflows, and centralized management that saves time and reduces stress."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Professional Management",
      description: "Maintain professional standards with comprehensive tools, legal compliance, and best practices that enhance your reputation and tenant satisfaction."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Improved Profitability",
      description: "Improve profitability through efficient administration, better tenant retention, and data-driven optimization that maximizes your property performance."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Landlords & Property Administration"
        brandIcon={<FaHome className="text-white text-sm" />}
        brandText="Smar8 for Landlords"
        headline="Simplify Rental Property Administration"
        subheadline="Landlords trust Smar8 to simplify property administration, streamline tenant management, and maintain professional standards. Get comprehensive tools for all aspects of rental property management in one integrated platform."
        ctaText="Start Managing Properties"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Property Administration Solution for Landlords"
        subheadline="From simplified tenant management to comprehensive financial tracking, Smar8 provides everything landlords need to succeed and maintain professional standards."
        ctaText="Explore Landlord Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Landlord Property Management Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Landlord Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Property Administration"
        description="Our platform provides comprehensive tools to simplify property administration, manage tenants efficiently, and maintain professional standards across all your rental properties."
        features={landlordFeatures}
        imageSrc={dummyImage}
        imageAlt="Landlord Features"
        defaultActiveFeature="property-administration"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Landlord Management Works"
        subtitle="Simple steps to simplify your rental property administration and maintain professional standards"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Landlord Management"
        subtitle="Transform your property administration with simplified management and professional tools"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Simplify Your Property Administration?"
        description="Join thousands of landlords who trust Smar8 to maintain professional standards and efficient property management. Start improving your administration today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default Landlords
