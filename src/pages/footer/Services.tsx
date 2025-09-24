import Hero from '../../components/commen/Hero'
import { FaCogs, FaTools, FaUsers, FaChartLine, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const Services = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaCogs className="text-secondary-800 text-2xl" />,
      title: "Comprehensive property management services"
    },
    {
      icon: <FaTools className="text-secondary-800 text-2xl" />,
      title: "Professional tools and solutions"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Expert support and guidance"
    },
    {
      icon: <FaChartLine className="text-secondary-800 text-2xl" />,
      title: "Performance optimization and growth"
    }
  ];

  // Services features for FeatureAccordion
  const servicesFeatures = [
    {
      id: 'property-management',
      title: "Property Management",
      description: "Comprehensive property management services including tenant screening, rent collection, and maintenance coordination.",
      learnMoreUrl: "#"
    },
    {
      id: 'financial-services',
      title: "Financial Services",
      description: "Banking, accounting, and bookkeeping services designed specifically for real estate investors.",
      learnMoreUrl: "#"
    },
    {
      id: 'tenant-services',
      title: "Tenant Services",
      description: "Tenant screening, background checks, and rental application processing for quality tenant selection.",
      learnMoreUrl: "#"
    },
    {
      id: 'maintenance-coordination',
      title: "Maintenance Coordination",
      description: "Streamlined maintenance request handling and contractor coordination for efficient property upkeep.",
      learnMoreUrl: "#"
    },
    {
      id: 'legal-compliance',
      title: "Legal & Compliance",
      description: "Ensure compliance with local regulations and fair housing laws across all your properties.",
      learnMoreUrl: "#"
    },
    {
      id: 'analytics-reporting',
      title: "Analytics & Reporting",
      description: "Comprehensive reporting and analytics to optimize your property portfolio performance.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Service Selection",
      description: "Choose from our comprehensive range of property management services that meet your needs."
    },
    {
      step: 2,
      title: "Setup & Configuration",
      description: "Our team helps you set up and configure services for optimal performance and efficiency."
    },
    {
      step: 3,
      title: "Service Delivery",
      description: "Receive professional service delivery with ongoing support and optimization."
    },
    {
      step: 4,
      title: "Performance Monitoring",
      description: "Monitor service performance and receive insights for continuous improvement."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Professional Quality",
      description: "Access professional-grade services and tools that streamline your property management operations."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Cost Efficiency",
      description: "Reduce operational costs and increase efficiency with our integrated service solutions."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Expert Support",
      description: "Get expert guidance and support to optimize your property management strategy and performance."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Property Management Services"
        brandIcon={<FaCogs className="text-white text-sm" />}
        brandText="Smar8 Services"
        headline="Comprehensive Property Management Services"
        subheadline="Access professional property management services designed to streamline your operations, reduce costs, and maximize your real estate investment returns."
        ctaText="Explore Services"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Service Solution for Real Estate Investors"
        subheadline="From property management to financial services, Smar8 provides comprehensive solutions that address every aspect of your real estate business."
        ctaText="Browse Service Options"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Services Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Services Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Property Management Success"
        description="Our comprehensive service portfolio provides all the tools and support you need to manage properties professionally and profitably."
        features={servicesFeatures}
        imageSrc={dummyImage}
        imageAlt="Service Features"
        defaultActiveFeature="property-management"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Services Work"
        subtitle="Simple steps to accessing professional property management services"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Services"
        subtitle="Transform your property management with professional services and expert support"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Access Professional Property Management Services?"
        description="Join thousands of investors who trust Smar8 for comprehensive property management solutions. Start optimizing your operations today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default Services
