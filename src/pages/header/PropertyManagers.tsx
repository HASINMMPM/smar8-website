import Hero from '../../components/commen/Hero'
import { FaUsers, FaUserTie, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const PropertyManagers = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Streamline operations and tenant management"
    },
    {
      icon: <FaUserTie className="text-secondary-800 text-2xl" />,
      title: "Professional property management tools"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure data management and compliance"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Comprehensive analytics and reporting"
    }
  ];

  // Property Managers features for FeatureAccordion
  const propertyManagerFeatures = [
    {
      id: 'tenant-management',
      title: "Comprehensive Tenant Management",
      description: "Manage all aspects of tenant relationships including screening, applications, leases, payments, and communications. Streamline your tenant management workflow with integrated tools.",
      learnMoreUrl: "#"
    },
    {
      id: 'property-operations',
      title: "Efficient Property Operations",
      description: "Streamline property operations including maintenance requests, inspections, and vendor management. Coordinate all property-related activities efficiently from one platform.",
      learnMoreUrl: "#"
    },
    {
      id: 'financial-management',
      title: "Professional Financial Management",
      description: "Handle all financial aspects including rent collection, expense tracking, accounting, and reporting. Maintain professional financial records and ensure compliance with regulations.",
      learnMoreUrl: "#"
    },
    {
      id: 'team-coordination',
      title: "Team Coordination & Collaboration",
      description: "Coordinate with property management teams, maintenance staff, and vendors. Assign tasks, track progress, and maintain clear communication across all stakeholders.",
      learnMoreUrl: "#"
    },
    {
      id: 'compliance-management',
      title: "Regulatory Compliance & Reporting",
      description: "Ensure compliance with local, state, and federal regulations. Generate required reports, maintain audit trails, and stay updated with changing legal requirements.",
      learnMoreUrl: "#"
    },
    {
      id: 'performance-analytics',
      title: "Performance Analytics & Optimization",
      description: "Track property performance, tenant satisfaction, and operational efficiency. Use data-driven insights to optimize your property management operations and improve profitability.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Set Up Portfolio",
      description: "Configure your property portfolio, set up management workflows, and establish team roles and permissions for efficient operations."
    },
    {
      step: 2,
      title: "Manage Tenants",
      description: "Handle tenant screening, applications, leases, and ongoing relationships with comprehensive tools and automated workflows."
    },
    {
      step: 3,
      title: "Coordinate Operations",
      description: "Coordinate property maintenance, inspections, and vendor management while maintaining clear communication with tenants and team members."
    },
    {
      step: 4,
      title: "Monitor & Optimize",
      description: "Track performance metrics, generate reports, and continuously optimize your property management operations based on data-driven insights."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Streamlined Operations",
      description: "Streamline all property management operations with integrated tools, automated workflows, and efficient team coordination that saves time and reduces costs."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Professional Standards",
      description: "Maintain professional standards with comprehensive tools, compliance management, and best practices that enhance your reputation and tenant satisfaction."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Improved Profitability",
      description: "Improve profitability through efficient operations, better tenant retention, and data-driven optimization that maximizes your property performance."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Property Managers & Professional Management"
        brandIcon={<FaUsers className="text-white text-sm" />}
        brandText="Smar8 for Property Managers"
        headline="Streamline Operations and Tenant Management"
        subheadline="Professional property managers trust Smar8 to streamline operations, manage tenants efficiently, and maintain professional standards. Get comprehensive tools for all aspects of property management in one integrated platform."
        ctaText="Start Managing Properties"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Property Management Solution for Professionals"
        subheadline="From comprehensive tenant management to efficient property operations, Smar8 provides everything professional property managers need to succeed and maintain high standards."
        ctaText="Explore Property Management Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Property Management Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Property Management Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Property Management"
        description="Our platform provides comprehensive tools to manage tenants, coordinate operations, and maintain professional standards across all your properties."
        features={propertyManagerFeatures}
        imageSrc={dummyImage}
        imageAlt="Property Management Features"
        defaultActiveFeature="tenant-management"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Property Management Works"
        subtitle="Simple steps to streamline your property management operations and maintain professional standards"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Property Management"
        subtitle="Transform your property management with streamlined operations and professional tools"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Streamline Your Property Management?"
        description="Join thousands of professional property managers who trust Smar8 to maintain high standards and efficient operations. Start improving your property management today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default PropertyManagers
