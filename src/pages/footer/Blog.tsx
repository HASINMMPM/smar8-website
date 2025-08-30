import Hero from '../../components/commen/Hero'
import { FaNewspaper, FaChartLine, FaLightbulb, FaShieldAlt, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const Blog = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaNewspaper className="text-secondary-800 text-2xl" />,
      title: "Expert insights and market analysis"
    },
    {
      icon: <FaChartLine className="text-secondary-800 text-2xl" />,
      title: "Investment strategies and tips"
    },
    {
      icon: <FaLightbulb className="text-secondary-800 text-2xl" />,
      title: "Property management best practices"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Legal compliance and regulations"
    }
  ];

  // Blog features for FeatureAccordion
  const blogFeatures = [
    {
      id: 'investment-strategies',
      title: "Investment Strategies",
      description: "Learn proven strategies for real estate investing, from analyzing markets to maximizing returns on your property investments.",
      learnMoreUrl: "#"
    },
    {
      id: 'property-management',
      title: "Property Management Tips",
      description: "Discover best practices for managing rental properties, handling tenants, and maintaining profitable operations.",
      learnMoreUrl: "#"
    },
    {
      id: 'market-trends',
      title: "Market Trends & Analysis",
      description: "Stay ahead of the curve with comprehensive market analysis, emerging trends, and investment opportunities.",
      learnMoreUrl: "#"
    },
    {
      id: 'legal-compliance',
      title: "Legal & Compliance",
      description: "Navigate complex real estate regulations, understand tenant rights, and ensure compliance with local laws.",
      learnMoreUrl: "#"
    },
    {
      id: 'financial-planning',
      title: "Financial Planning",
      description: "Master financial planning for real estate investments, including tax strategies and portfolio optimization.",
      learnMoreUrl: "#"
    },
    {
      id: 'technology-tools',
      title: "Technology & Tools",
      description: "Explore the latest technology solutions and tools that can streamline your property management operations.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Browse Articles",
      description: "Explore our comprehensive library of articles covering all aspects of real estate investing and property management."
    },
    {
      step: 2,
      title: "Learn & Apply",
      description: "Read expert insights, practical tips, and real-world examples that you can immediately apply to your investments."
    },
    {
      step: 3,
      title: "Stay Updated",
      description: "Subscribe to our newsletter to receive the latest articles, market updates, and investment opportunities."
    },
    {
      step: 4,
      title: "Grow Your Portfolio",
      description: "Use the knowledge gained from our blog to make informed decisions and grow your real estate portfolio successfully."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Expert Insights",
      description: "Access insights from industry experts and successful real estate investors with proven track records."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Practical Knowledge",
      description: "Learn actionable strategies and tips that you can immediately implement in your real estate business."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Stay Current",
      description: "Keep up with the latest market trends, regulations, and investment opportunities in real estate."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Real Estate Investment Blog"
        brandIcon={<FaNewspaper className="text-white text-sm" />}
        brandText="Smar8 Blog"
        headline="Expert Insights for Real Estate Investors"
        subheadline="Discover expert insights, tips, and strategies to help you succeed in real estate investing and property management. Stay ahead of the curve with our comprehensive blog."
        ctaText="Start Reading"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Your Complete Resource for Real Estate Success"
        subheadline="From investment strategies to property management tips, our blog provides everything you need to make informed decisions and maximize your real estate returns."
        ctaText="Explore Articles"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Blog Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Blog Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need to Succeed in Real Estate"
        description="Our blog covers all aspects of real estate investing, from market analysis to practical management tips, helping you build a successful property portfolio."
        features={blogFeatures}
        imageSrc={dummyImage}
        imageAlt="Blog Features"
        defaultActiveFeature="investment-strategies"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How to Use Our Blog"
        subtitle="Simple steps to access expert knowledge and grow your real estate expertise"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Our Blog"
        subtitle="Transform your real estate knowledge with expert insights and practical strategies"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Boost Your Real Estate Knowledge?"
        description="Join thousands of investors who rely on our blog for expert insights and practical strategies. Start reading today and take your real estate investments to the next level."
        buttonText="Start Reading Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default Blog
