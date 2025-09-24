import Hero from '../../components/commen/Hero'
import { FaBullhorn, FaUsers, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const PropertyMessageBoard = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaBullhorn className="text-secondary-800 text-2xl" />,
      title: "Send notices to all or some of your tenants"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Targeted communication and messaging"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure message delivery and tracking"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Communication analytics and engagement tracking"
    }
  ];

  // Property Message Board features for FeatureAccordion
  const messageBoardFeatures = [
    {
      id: 'targeted-communication',
      title: "Targeted Communication & Messaging",
      description: "Send notices and messages to specific groups of tenants, individual properties, or your entire portfolio. Target communications based on location, lease status, or other criteria.",
      learnMoreUrl: "#"
    },
    {
      id: 'notice-management',
      title: "Comprehensive Notice Management",
      description: "Create, schedule, and send various types of notices including maintenance updates, policy changes, emergency alerts, and general announcements to keep tenants informed.",
      learnMoreUrl: "#"
    },
    {
      id: 'delivery-tracking',
      title: "Message Delivery & Tracking",
      description: "Track message delivery status, read receipts, and tenant engagement. Ensure important communications reach your tenants and monitor their response and engagement levels.",
      learnMoreUrl: "#"
    },
    {
      id: 'multi-channel-delivery',
      title: "Multi-Channel Message Delivery",
      description: "Deliver messages through multiple channels including in-app notifications, email, SMS, and push notifications to ensure maximum reach and engagement with your tenants.",
      learnMoreUrl: "#"
    },
    {
      id: 'communication-templates',
      title: "Communication Templates & Automation",
      description: "Use pre-built templates for common communications and automate routine messaging. Save time while maintaining consistent, professional communication standards.",
      learnMoreUrl: "#"
    },
    {
      id: 'engagement-analytics',
      title: "Engagement Analytics & Reporting",
      description: "Track communication effectiveness, tenant engagement rates, and response patterns. Use data-driven insights to improve your communication strategy and tenant relationships.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Create Message",
      description: "Create your message using customizable templates or custom content, and select your target audience based on specific criteria or property locations."
    },
    {
      step: 2,
      title: "Schedule & Send",
      description: "Schedule your message for immediate or future delivery, and send it through multiple channels to ensure maximum reach and engagement."
    },
    {
      step: 3,
      title: "Track Delivery",
      description: "Monitor message delivery status, track read receipts, and measure tenant engagement with comprehensive delivery tracking and analytics."
    },
    {
      step: 4,
      title: "Analyze & Optimize",
      description: "Analyze communication effectiveness and tenant engagement patterns to continuously improve your messaging strategy and tenant relationships."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Improved Communication",
      description: "Enhance tenant communication with targeted messaging, multi-channel delivery, and comprehensive tracking that ensures important information reaches your tenants."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Efficient Notice Management",
      description: "Streamline notice management with templates, automation, and targeted delivery that saves time while maintaining professional communication standards."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Better Tenant Engagement",
      description: "Improve tenant engagement and satisfaction with timely, relevant communications delivered through their preferred channels with comprehensive tracking."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Property Message Board & Communication"
        brandIcon={<FaBullhorn className="text-white text-sm" />}
        brandText="Smar8 Message Board"
        headline="Send Notices to All or Some of Your Tenants"
        subheadline="Keep your tenants informed with targeted communication and comprehensive notice management. Send messages to specific groups, track delivery, and improve tenant engagement with our property message board platform."
        ctaText="Start Communicating"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Communication Solution for Smar8 Business Owners"
        subheadline="From targeted messaging to comprehensive notice management, Smar8 provides everything you need to communicate effectively with your tenants and maintain strong relationships."
        ctaText="Explore Message Board Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Property Message Board Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Message Board Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Tenant Communication"
        description="Our platform provides comprehensive tools to create targeted communications, manage notices, and track engagement across all your properties and tenants."
        features={messageBoardFeatures}
        imageSrc={dummyImage}
        imageAlt="Message Board Features"
        defaultActiveFeature="targeted-communication"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Property Message Board Works"
        subtitle="Simple steps to create, send, and track tenant communications effectively"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Property Message Board"
        subtitle="Transform your tenant communication with targeted messaging and comprehensive tracking"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Improve Your Tenant Communication?"
        description="Join thousands of business owners who trust Smar8 to manage tenant communications effectively and maintain strong relationships. Start improving your communication today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default PropertyMessageBoard
