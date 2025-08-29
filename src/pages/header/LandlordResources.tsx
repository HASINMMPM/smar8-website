import Hero from '../../components/commen/Hero'
import { FaMicrophone, FaUsers, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const LandlordResources = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaMicrophone className="text-secondary-800 text-2xl" />,
      title: "Blog, podcast, webinars, laws and guides"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Expert insights and industry knowledge"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Legal compliance and best practices"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Market trends and property insights"
    }
  ];

  // Landlord Resources features for FeatureAccordion
  const landlordResourceFeatures = [
    {
      id: 'educational-content',
      title: "Comprehensive Educational Content",
      description: "Access a wealth of educational content including blog posts, articles, and guides covering all aspects of rental property management and industry best practices.",
      learnMoreUrl: "#"
    },
    {
      id: 'multimedia-resources',
      title: "Multimedia Learning Resources",
      description: "Learn through multiple formats including podcasts, webinars, and video content featuring industry experts and successful property managers sharing insights.",
      learnMoreUrl: "#"
    },
    {
      id: 'legal-guidance',
      title: "Legal Compliance & Guidance",
      description: "Stay updated with changing rental laws and regulations. Access legal guides, compliance checklists, and expert advice to protect your investment.",
      learnMoreUrl: "#"
    },
    {
      id: 'industry-insights',
      title: "Industry Insights & Trends",
      description: "Stay informed about market trends, industry developments, and emerging best practices through our regularly updated content and expert analysis.",
      learnMoreUrl: "#"
    },
    {
      id: 'best-practices',
      title: "Best Practices & Strategies",
      description: "Learn proven strategies and best practices from successful property managers and industry experts to optimize your rental business operations.",
      learnMoreUrl: "#"
    },
    {
      id: 'community-engagement',
      title: "Community Engagement & Networking",
      description: "Connect with other landlords and property managers through our community resources, forums, and networking opportunities.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Browse Resources",
      description: "Explore our comprehensive library of landlord resources including blogs, podcasts, webinars, and legal guides organized by topic and category."
    },
    {
      step: 2,
      title: "Access Content",
      description: "Access educational content in multiple formats including written articles, audio podcasts, video webinars, and downloadable guides."
    },
    {
      step: 3,
      title: "Apply Knowledge",
      description: "Apply the knowledge and insights gained from our resources to improve your property management practices and business operations."
    },
    {
      step: 4,
      title: "Stay Updated",
      description: "Stay informed about industry changes, legal updates, and best practices through our regularly updated content and expert insights."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Continuous Learning",
      description: "Continuously improve your property management skills with comprehensive educational content, expert insights, and industry best practices."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Legal Compliance",
      description: "Stay compliant with changing rental laws and regulations through expert legal guidance and regularly updated compliance resources."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Industry Knowledge",
      description: "Stay informed about market trends, industry developments, and emerging best practices to maintain competitive advantage."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Landlord Resources & Educational Content"
        brandIcon={<FaMicrophone className="text-white text-sm" />}
        brandText="Smar8 Landlord Resources"
        headline="Blog, Podcast, Webinars, Laws and Guides"
        subheadline="Access comprehensive landlord resources including educational content, legal guidance, and industry insights. Stay informed about best practices, legal compliance, and market trends through our multimedia learning platform."
        ctaText="Access Resources"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Educational Resource Solution for Landlords"
        subheadline="From comprehensive educational content to legal guidance and industry insights, Smar8 Landlord Resources provides everything you need to succeed in property management."
        ctaText="Explore Landlord Resources"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Landlord Resources Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Landlord Resources Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Property Management Education"
        description="Our platform provides comprehensive educational resources including multimedia content, legal guidance, and industry insights to help landlords succeed."
        features={landlordResourceFeatures}
        imageSrc={dummyImage}
        imageAlt="Landlord Resources Features"
        defaultActiveFeature="educational-content"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Landlord Resources Work"
        subtitle="Simple steps to access educational content and improve your property management knowledge"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Landlord Resources"
        subtitle="Transform your property management with comprehensive education and expert guidance"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Improve Your Property Management Knowledge?"
        description="Join thousands of landlords who trust Smar8 Resources to stay informed and improve their property management practices. Start learning today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default LandlordResources
