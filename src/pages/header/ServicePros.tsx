import Hero from '../../components/commen/Hero'
import { FaTools, FaUsers, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const ServicePros = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaTools className="text-secondary-800 text-2xl" />,
      title: "Find jobs and get paid from your area"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Connect with property owners and managers"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure job management and payment processing"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Track job performance and earnings"
    }
  ];

  // Service Pros features for FeatureAccordion
  const serviceProFeatures = [
    {
      id: 'job-discovery',
      title: "Local Job Discovery & Matching",
      description: "Find maintenance and service jobs in your area with intelligent matching based on your skills, location, and availability. Get notified of new opportunities automatically.",
      learnMoreUrl: "#"
    },
    {
      id: 'client-connection',
      title: "Direct Client Connection",
      description: "Connect directly with property owners and managers through the Smar8 platform. Build relationships, receive job requests, and maintain professional communication.",
      learnMoreUrl: "#"
    },
    {
      id: 'job-management',
      title: "Comprehensive Job Management",
      description: "Manage all aspects of your service jobs including scheduling, progress tracking, and completion documentation. Maintain professional standards and client satisfaction.",
      learnMoreUrl: "#"
    },
    {
      id: 'payment-processing',
      title: "Secure Payment Processing",
      description: "Get paid securely and efficiently through the Smar8 platform. Track payments, generate invoices, and maintain clear financial records for all your work.",
      learnMoreUrl: "#"
    },
    {
      id: 'reputation-building',
      title: "Reputation & Review System",
      description: "Build your professional reputation through client reviews and ratings. Showcase your work quality and reliability to attract more business opportunities.",
      learnMoreUrl: "#"
    },
    {
      id: 'business-growth',
      title: "Business Growth Tools",
      description: "Access tools and insights to grow your service business including performance analytics, client management, and marketing support.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Create Profile",
      description: "Set up your professional profile with skills, experience, and service areas to attract the right job opportunities."
    },
    {
      step: 2,
      title: "Find Jobs",
      description: "Browse available jobs in your area, receive job notifications, and apply for opportunities that match your skills and schedule."
    },
    {
      step: 3,
      title: "Complete Work",
      description: "Manage job assignments, track progress, and maintain professional communication with clients throughout the project."
    },
    {
      step: 4,
      title: "Get Paid",
      description: "Complete jobs, submit documentation, and receive secure payments through the platform while building your reputation."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "More Job Opportunities",
      description: "Access more job opportunities in your area with intelligent matching and direct client connections that expand your business reach."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Professional Management",
      description: "Manage your service business professionally with integrated tools for job management, client communication, and financial tracking."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Secure Payments",
      description: "Get paid securely and efficiently through the platform with automated invoicing and payment processing that improves cash flow."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Service Professionals & Job Management"
        brandIcon={<FaTools className="text-white text-sm" />}
        brandText="Smar8 for Service Pros"
        headline="Find Jobs and Get Paid from Your Area"
        subheadline="Service professionals trust Smar8 to discover local job opportunities, connect with property owners, and manage their service business efficiently. Get comprehensive tools for job discovery, management, and payment processing."
        ctaText="Start Finding Jobs"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Service Professional Solution"
        subheadline="From job discovery to secure payment processing, Smar8 provides everything service professionals need to grow their business and maintain professional standards."
        ctaText="Explore Service Pro Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Service Professional Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Service Pro Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Service Business Management"
        description="Our platform provides comprehensive tools to discover jobs, manage client relationships, and process payments efficiently across all your service areas."
        features={serviceProFeatures}
        imageSrc={dummyImage}
        imageAlt="Service Pro Features"
        defaultActiveFeature="job-discovery"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Service Professional Platform Works"
        subtitle="Simple steps to find jobs, manage work, and get paid efficiently"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Service Professional Platform"
        subtitle="Transform your service business with job discovery and professional management tools"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Grow Your Service Business?"
        description="Join thousands of service professionals who trust Smar8 to find jobs and manage their business efficiently. Start expanding your opportunities today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default ServicePros
