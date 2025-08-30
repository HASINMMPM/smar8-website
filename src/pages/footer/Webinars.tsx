import Hero from '../../components/commen/Hero'
import { FaVideo, FaUsers, FaLightbulb, FaChartLine, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const Webinars = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaVideo className="text-secondary-800 text-2xl" />,
      title: "Live and recorded educational webinars"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Expert insights and industry knowledge"
    },
    {
      icon: <FaLightbulb className="text-secondary-800 text-2xl" />,
      title: "Practical tips and strategies"
    },
    {
      icon: <FaChartLine className="text-secondary-800 text-2xl" />,
      title: "Market trends and analysis"
    }
  ];

  // Webinar features for FeatureAccordion
  const webinarFeatures = [
    {
      id: 'live-webinars',
      title: "Live Webinars",
      description: "Join live interactive webinars with industry experts and get your questions answered in real-time.",
      learnMoreUrl: "#"
    },
    {
      id: 'recorded-sessions',
      title: "Recorded Sessions",
      description: "Access our library of recorded webinars on-demand to learn at your own pace and convenience.",
      learnMoreUrl: "#"
    },
    {
      id: 'expert-speakers',
      title: "Expert Speakers",
      description: "Learn from industry leaders, successful investors, and property management professionals.",
      learnMoreUrl: "#"
    },
    {
      id: 'interactive-sessions',
      title: "Interactive Sessions",
      description: "Participate in Q&A sessions, polls, and discussions to enhance your learning experience.",
      learnMoreUrl: "#"
    },
    {
      id: 'certification-programs',
      title: "Certification Programs",
      description: "Earn certificates and credentials to demonstrate your expertise in property management.",
      learnMoreUrl: "#"
    },
    {
      id: 'networking-opportunities',
      title: "Networking Opportunities",
      description: "Connect with other real estate investors and professionals during our webinar events.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Browse Webinars",
      description: "Explore our upcoming live webinars and browse our library of recorded sessions."
    },
    {
      step: 2,
      title: "Register & Join",
      description: "Register for live webinars or access recorded sessions with your account."
    },
    {
      step: 3,
      title: "Learn & Engage",
      description: "Participate in live sessions or watch recorded content at your own pace."
    },
    {
      step: 4,
      title: "Apply Knowledge",
      description: "Apply the insights and strategies learned to improve your property management."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Expert Knowledge",
      description: "Access insights from industry experts and successful real estate professionals."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Practical Learning",
      description: "Learn actionable strategies and tips that you can immediately apply to your business."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Flexible Access",
      description: "Learn on your schedule with live sessions and on-demand recorded content."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Educational Webinars"
        brandIcon={<FaVideo className="text-white text-sm" />}
        brandText="Smar8 Webinars"
        headline="Educational Webinars for Real Estate Investors"
        subheadline="Expand your knowledge and skills with our comprehensive webinar series. Learn from industry experts, discover new strategies, and stay ahead of market trends."
        ctaText="Browse Webinars"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Learning Solution for Real Estate Professionals"
        subheadline="From live interactive sessions to on-demand recorded content, Smar8 provides comprehensive educational resources to help you succeed in real estate investing."
        ctaText="Explore Learning Resources"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Webinar Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Webinar Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Real Estate Education"
        description="Our comprehensive webinar program provides insights, strategies, and knowledge to help you succeed in real estate investing and property management."
        features={webinarFeatures}
        imageSrc={dummyImage}
        imageAlt="Webinar Features"
        defaultActiveFeature="live-webinars"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Webinars Work"
        subtitle="Simple steps to accessing expert knowledge and improving your real estate skills"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Webinars"
        subtitle="Transform your real estate knowledge with expert insights and practical learning"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Expand Your Real Estate Knowledge?"
        description="Join thousands of investors who are learning and growing with Smar8 webinars. Start your educational journey today and take your real estate business to the next level."
        buttonText="Browse Webinars Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default Webinars
