import Hero from '../../components/commen/Hero'
import { FaCogs, FaUsers, FaChartLine, FaShieldAlt, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const HowItWorksPage = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaCogs className="text-secondary-800 text-2xl" />,
      title: "Simple setup and onboarding process"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Comprehensive tenant management tools"
    },
    {
      icon: <FaChartLine className="text-secondary-800 text-2xl" />,
      title: "Financial tracking and reporting"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure and compliant operations"
    }
  ];

  // How it works features for FeatureAccordion
  const howItWorksFeatures = [
    {
      id: 'simple-setup',
      title: "Simple Setup & Onboarding",
      description: "Create your account and complete the onboarding process in minutes. Our team will guide you through every step to get you started quickly.",
      learnMoreUrl: "#"
    },
    {
      id: 'property-management',
      title: "Property Management",
      description: "Add your properties to the platform and configure all essential details. Our system helps you optimize pricing and management strategies.",
      learnMoreUrl: "#"
    },
    {
      id: 'tenant-screening',
      title: "Tenant Screening & Selection",
      description: "List your properties, screen applicants, and select the best tenants using our comprehensive screening tools and background checks.",
      learnMoreUrl: "#"
    },
    {
      id: 'operations-management',
      title: "Operations Management",
      description: "Handle maintenance requests, collect rent, and manage all day-to-day operations through our integrated platform dashboard.",
      learnMoreUrl: "#"
    },
    {
      id: 'performance-tracking',
      title: "Performance Tracking",
      description: "Monitor your investment performance with detailed analytics, reports, and insights to maximize returns and optimize strategy.",
      learnMoreUrl: "#"
    },
    {
      id: 'scaling-growth',
      title: "Scaling & Growth",
      description: "As your portfolio grows, our platform scales with you, providing advanced tools for larger property management needs and portfolio expansion.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Sign Up & Onboard",
      description: "Create your account and complete the onboarding process. Our team will guide you through every step to ensure success."
    },
    {
      step: 2,
      title: "Add Your Properties",
      description: "Input property details, upload photos, and set rental rates. Our system will help you optimize pricing and management strategies."
    },
    {
      step: 3,
      title: "Find Great Tenants",
      description: "List your properties, screen applicants, and select the best tenants using our comprehensive screening tools and background checks."
    },
    {
      step: 4,
      title: "Manage & Scale",
      description: "Handle operations, track performance, and scale your portfolio with our comprehensive property management platform."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Comprehensive Platform",
      description: "Access all the tools you need for property management in one integrated platform, from tenant screening to financial reporting."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Streamlined Operations",
      description: "Simplify your property management with automated processes, integrated tools, and comprehensive reporting systems."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Scalable Solution",
      description: "Start small and grow your portfolio with confidence, knowing our platform scales with your business needs."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - How It Works"
        brandIcon={<FaCogs className="text-white text-sm" />}
        brandText="Smar8 Platform"
        headline="How Smar8 Works for Real Estate Investors"
        subheadline="Discover how our comprehensive property management platform simplifies your real estate investment journey with simple setup, powerful tools, and scalable solutions."
        ctaText="Get Started Today"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Property Management Solution for Smar8 Business Owners"
        subheadline="From simple setup to comprehensive portfolio management, Smar8 provides everything you need to succeed in real estate investing and property management."
        ctaText="Explore Platform Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Platform Overview"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* How It Works Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Property Management"
        description="Our platform provides comprehensive tools to manage properties, screen tenants, handle operations, and track performance across your entire real estate portfolio."
        features={howItWorksFeatures}
        imageSrc={dummyImage}
        imageAlt="Platform Features"
        defaultActiveFeature="simple-setup"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Works"
        subtitle="Simple steps to successful property management and portfolio growth"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Platform"
        subtitle="Transform your property management with comprehensive tools and scalable solutions"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Transform Your Property Management?"
        description="Join thousands of successful real estate investors who trust Smar8. Start your journey today and discover how easy property management can be."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default HowItWorksPage
