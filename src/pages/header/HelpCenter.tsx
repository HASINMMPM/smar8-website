import Hero from '../../components/commen/Hero'
import { FaQuestionCircle, FaUsers, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const HelpCenter = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaQuestionCircle className="text-secondary-800 text-2xl" />,
      title: "Learn how to use Smar8"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Comprehensive tutorials and guides"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Expert support and troubleshooting"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Searchable knowledge base"
    }
  ];

  // Help Center features for FeatureAccordion
  const helpCenterFeatures = [
    {
      id: 'comprehensive-guides',
      title: "Comprehensive Tutorials & Guides",
      description: "Access step-by-step tutorials, video guides, and comprehensive documentation to learn how to use all Smar8 features effectively.",
      learnMoreUrl: "#"
    },
    {
      id: 'searchable-knowledge',
      title: "Searchable Knowledge Base",
      description: "Find answers quickly with our powerful search functionality. Access articles, FAQs, and troubleshooting guides organized by topic and feature.",
      learnMoreUrl: "#"
    },
    {
      id: 'video-tutorials',
      title: "Video Tutorials & Demos",
      description: "Learn through visual demonstrations with our library of video tutorials covering platform features, best practices, and advanced workflows.",
      learnMoreUrl: "#"
    },
    {
      id: 'interactive-help',
      title: "Interactive Help & Support",
      description: "Get interactive help through our support system including live chat, ticket submission, and direct access to our expert support team.",
      learnMoreUrl: "#"
    },
    {
      id: 'community-support',
      title: "Community Support & Forums",
      description: "Connect with other Smar8 users through our community forums. Share tips, ask questions, and learn from experienced users.",
      learnMoreUrl: "#"
    },
    {
      id: 'regular-updates',
      title: "Regular Updates & New Features",
      description: "Stay updated with platform changes, new features, and best practices through our regularly updated help content and release notes.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Search for Help",
      description: "Search our knowledge base for specific topics, features, or troubleshooting guides using our powerful search functionality."
    },
    {
      step: 2,
      title: "Access Resources",
      description: "Access comprehensive tutorials, video guides, and documentation organized by topic and feature for easy navigation."
    },
    {
      step: 3,
      title: "Get Support",
      description: "Get additional help through interactive support options including live chat, ticket submission, and community forums."
    },
    {
      step: 4,
      title: "Stay Updated",
      description: "Stay informed about platform updates, new features, and best practices through our regularly updated help content."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Faster Learning",
      description: "Learn how to use Smar8 faster with comprehensive tutorials, video guides, and searchable knowledge base that provide quick answers."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Better Support",
      description: "Get better support through multiple channels including self-service resources, interactive help, and expert assistance."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Continuous Improvement",
      description: "Stay updated with platform changes and continuously improve your Smar8 usage through regular content updates and new feature guides."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Help Center & Learning Resources"
        brandIcon={<FaQuestionCircle className="text-white text-sm" />}
        brandText="Smar8 Help Center"
        headline="Learn How to Use Smar8"
        subheadline="Access comprehensive tutorials, guides, and support resources to master the Smar8 platform. Get expert help, video tutorials, and searchable knowledge base to maximize your platform usage."
        ctaText="Get Help Now"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Learning & Support Solution for Smar8 Users"
        subheadline="From comprehensive tutorials to expert support, Smar8 Help Center provides everything you need to learn the platform and get assistance when needed."
        ctaText="Explore Help Resources"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Help Center Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Help Center Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Platform Learning"
        description="Our platform provides comprehensive learning tools including tutorials, video guides, and expert support to help you master Smar8 quickly and efficiently."
        features={helpCenterFeatures}
        imageSrc={dummyImage}
        imageAlt="Help Center Features"
        defaultActiveFeature="comprehensive-guides"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Help Center Works"
        subtitle="Simple steps to get help and learn the platform effectively"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Help Center"
        subtitle="Transform your learning experience with comprehensive resources and expert support"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Master Smar8?"
        description="Join thousands of users who trust Smar8 Help Center to learn the platform and get expert assistance. Start improving your platform usage today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default HelpCenter
