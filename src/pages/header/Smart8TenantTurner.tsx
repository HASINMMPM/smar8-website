import Hero from '../../components/commen/Hero'
import { FaSync, FaUsers, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const Smart8TenantTurner = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaSync className="text-secondary-800 text-2xl" />,
      title: "List, schedule, fill rentals—hassle-free"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Integrated tenant acquisition workflow"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Seamless platform integration and management"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Comprehensive analytics and performance tracking"
    }
  ];

  // Smart8 + Tenant Turner features for FeatureAccordion
  const tenantTurnerFeatures = [
    {
      id: 'integrated-listing',
      title: "Integrated Property Listing",
      description: "Create and manage property listings directly within Smar8 with automatic synchronization to Tenant Turner. Maintain consistent property information across both platforms.",
      learnMoreUrl: "#"
    },
    {
      id: 'automated-scheduling',
      title: "Automated Viewing Scheduling",
      description: "Automatically schedule property viewings through Tenant Turner integration. Tenants can book viewings directly, and appointments automatically sync with your Smar8 calendar.",
      learnMoreUrl: "#"
    },
    {
      id: 'tenant-acquisition',
      title: "Streamlined Tenant Acquisition",
      description: "Streamline the entire tenant acquisition process from listing to lease signing. Track leads, schedule viewings, and manage applications all within your Smar8 workflow.",
      learnMoreUrl: "#"
    },
    {
      id: 'lead-management',
      title: "Unified Lead Management",
      description: "Manage leads from Tenant Turner directly within Smar8. Track viewing requests, applicant information, and conversion progress in one centralized system.",
      learnMoreUrl: "#"
    },
    {
      id: 'calendar-sync',
      title: "Seamless Calendar Synchronization",
      description: "Keep your viewing schedules synchronized between Smar8 and Tenant Turner. Eliminate double-booking and maintain consistent availability across both platforms.",
      learnMoreUrl: "#"
    },
    {
      id: 'performance-analytics',
      title: "Comprehensive Performance Analytics",
      description: "Track listing performance, viewing conversion rates, and overall tenant acquisition effectiveness with integrated analytics from both platforms.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Create Integrated Listings",
      description: "Create property listings in Smar8 that automatically sync with Tenant Turner, ensuring consistent information across both platforms."
    },
    {
      step: 2,
      title: "Automated Viewing Management",
      description: "Tenants book viewings through Tenant Turner, which automatically syncs with your Smar8 calendar and workflow management system."
    },
    {
      step: 3,
      title: "Unified Lead Tracking",
      description: "Track all leads, viewing requests, and applicant information within Smar8, maintaining complete visibility into your tenant acquisition process."
    },
    {
      step: 4,
      title: "Streamlined Conversion",
      description: "Convert qualified leads to tenants with seamless workflow integration, from application to lease signing, all within your Smar8 system."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Hassle-Free Management",
      description: "Manage listings, viewings, and tenant acquisition from one integrated platform, eliminating the need to switch between multiple systems."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Improved Efficiency",
      description: "Streamline your tenant acquisition workflow with automated scheduling, integrated lead management, and seamless platform synchronization."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Better Tenant Experience",
      description: "Provide tenants with a seamless experience from initial listing discovery through viewing scheduling and application submission."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 + Tenant Turner Integration"
        brandIcon={<FaSync className="text-white text-sm" />}
        brandText="Smar8 + Tenant Turner"
        headline="List, Schedule, Fill Rentals—Hassle-Free Integration"
        subheadline="Integrate Smar8 with Tenant Turner for a seamless property management experience. Create listings, schedule viewings, and fill rentals with automated workflow integration and unified lead management."
        ctaText="Enable Integration"
        ctaUrl="/E"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Integration Solution for Smar8 Business Owners"
        subheadline="From integrated property listing to streamlined tenant acquisition, Smar8 + Tenant Turner provides everything you need to manage your rental business efficiently across both platforms."
        ctaText="Explore Integration Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Smar8 + Tenant Turner Integration Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Integration Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Platform Integration"
        description="Our platform provides comprehensive tools to integrate Smar8 with Tenant Turner, streamline tenant acquisition, and maintain unified workflow management across both platforms."
        features={tenantTurnerFeatures}
        imageSrc={dummyImage}
        imageAlt="Integration Features"
        defaultActiveFeature="integrated-listing"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 + Tenant Turner Integration Works"
        subtitle="Simple steps to streamline your rental business with integrated platform management"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 + Tenant Turner Integration"
        subtitle="Transform your rental business with hassle-free platform integration and streamlined workflow"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Streamline Your Rental Business?"
        description="Join thousands of business owners who trust Smar8 + Tenant Turner integration to manage their properties efficiently. Start improving your workflow today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default Smart8TenantTurner
