import Hero from '../../components/commen/Hero'
import { FaShareAlt, FaGlobe, FaShieldAlt, FaCreditCard, FaRocket, FaEye, FaUsers } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const AutomaticListingSyndication = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaShareAlt className="text-secondary-800 text-2xl" />,
      title: "Automatically syndicate listings across multiple platforms"
    },
    {
      icon: <FaGlobe className="text-secondary-800 text-2xl" />,
      title: "Reach millions of potential tenants worldwide"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Maintain listing consistency and accuracy"
    },
    {
      icon: <FaCreditCard className="text-secondary-800 text-2xl" />,
      title: "Maximize exposure and rental income"
    }
  ];

  // Syndication features for FeatureAccordion
  const syndicationFeatures = [
    {
      id: 'multi-platform-syndication',
      title: "Multi-Platform Syndication",
      description: "Automatically distribute your property listings across major rental platforms including Zillow, Trulia, Apartments.com, Rent.com, and dozens of other popular sites. Reach millions of potential tenants with a single listing.",
      learnMoreUrl: "#"
    },
    {
      id: 'real-time-synchronization',
      title: "Real-Time Synchronization",
      description: "Keep all your listings synchronized across all platforms in real-time. Update availability, pricing, or photos once, and changes automatically propagate everywhere. No more manual updates on multiple sites.",
      learnMoreUrl: "#"
    },
    {
      id: 'smart-formatting',
      title: "Smart Formatting & Optimization",
      description: "Our AI automatically optimizes your listings for each platform's requirements. Ensure proper formatting, keyword optimization, and compliance with each site's guidelines for maximum visibility.",
      learnMoreUrl: "#"
    },
    {
      id: 'lead-aggregation',
      title: "Lead Aggregation & Management",
      description: "Collect and manage leads from all syndicated platforms in one centralized dashboard. Track inquiries, applications, and conversions from every source to optimize your marketing strategy.",
      learnMoreUrl: "#"
    },
    {
      id: 'performance-analytics',
      title: "Performance Analytics & Insights",
      description: "Track which platforms generate the most leads and conversions. Analyze performance metrics to optimize your syndication strategy and focus on the most effective channels.",
      learnMoreUrl: "#"
    },
    {
      id: 'custom-syndication-rules',
      title: "Custom Syndication Rules",
      description: "Set specific rules for which properties to syndicate to which platforms. Control pricing strategies, availability updates, and content distribution based on your business needs and market strategy.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Create Your Listing",
      description: "Upload your property details, photos, and pricing information once in our platform. Our system automatically formats and optimizes content for each platform."
    },
    {
      step: 2,
      title: "Select Platforms",
      description: "Choose which rental platforms to syndicate to based on your target market and marketing strategy. Set custom rules for each platform if needed."
    },
    {
      step: 3,
      title: "Automatic Distribution",
      description: "Our system automatically distributes your listing across all selected platforms, ensuring proper formatting and compliance with each site's requirements."
    },
    {
      step: 4,
      title: "Monitor & Optimize",
      description: "Track performance across all platforms, manage leads from multiple sources, and optimize your syndication strategy based on real data and insights."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaRocket className="text-primary-600 text-xl" />,
      title: "Maximum Exposure",
      description: "Reach millions of potential tenants across multiple platforms simultaneously. Increase your property's visibility and attract more qualified applicants."
    },
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Time Savings",
      description: "Eliminate the need to manually post and update listings on multiple platforms. Update once and automatically sync everywhere."
    },
    {
      icon: <FaUsers className="text-primary-600 text-xl" />,
      title: "Better Lead Quality",
      description: "Attract more diverse and qualified leads from multiple platforms. Increase your chances of finding the perfect tenant quickly."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Automatic Listing Syndication"
        brandIcon={<FaShareAlt className="text-white text-sm" />}
        brandText="Smar8 Syndication"
        headline="Automatically Syndicate Your Listings Across All Major Platforms"
        subheadline="Reach millions of potential tenants by automatically distributing your property listings across Zillow, Trulia, Apartments.com, and dozens of other popular rental sites. Update once, sync everywhere."
        ctaText="Start Syndicating Today"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Maximum Exposure with Automatic Listing Syndication"
        subheadline="From major rental platforms to niche marketplaces, our syndication system ensures your properties reach the widest possible audience. Increase visibility, attract more leads, and fill vacancies faster."
        ctaText="Explore Syndication Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Listing Syndication Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Syndication Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Listing Syndication"
        description="Our platform provides comprehensive tools to automatically distribute your property listings across multiple platforms, maximize exposure, and streamline your marketing efforts."
        features={syndicationFeatures}
        imageSrc={dummyImage}
        imageAlt="Listing Syndication Features"
        defaultActiveFeature="multi-platform-syndication"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Listing Syndication Works"
        subtitle="Simple steps to maximize your property's exposure across all major rental platforms"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Listing Syndication"
        subtitle="Transform your property marketing with automatic syndication that maximizes exposure and attracts more qualified tenants"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Maximize Your Listing Exposure?"
        description="Join thousands of property managers who use Smar8 to automatically syndicate their listings across multiple platforms. Start reaching more potential tenants today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default AutomaticListingSyndication
