import Hero from '../../components/commen/Hero'
import { FaClock, FaUsers, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const LeadTracking = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaClock className="text-secondary-800 text-2xl" />,
      title: "Never miss any potential tenants"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Complete lead lifecycle tracking"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Automated follow-up and reminders"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Performance analytics and insights"
    }
  ];

  // Lead tracking features for FeatureAccordion
  const leadTrackingFeatures = [
    {
      id: 'complete-lifecycle',
      title: "Complete Lead Lifecycle Tracking",
      description: "Track every lead from initial contact through application, viewing, and lease signing. Never lose track of potential tenants with comprehensive lifecycle management.",
      learnMoreUrl: "#"
    },
    {
      id: 'automated-followup',
      title: "Automated Follow-Up & Reminders",
      description: "Set up automated follow-up sequences and reminders to ensure no potential tenant falls through the cracks. Maintain consistent communication without manual effort.",
      learnMoreUrl: "#"
    },
    {
      id: 'lead-scoring',
      title: "Intelligent Lead Scoring & Prioritization",
      description: "Automatically score and prioritize leads based on qualification criteria, response likelihood, and match quality. Focus your efforts on the most promising prospects.",
      learnMoreUrl: "#"
    },
    {
      id: 'communication-tracking',
      title: "Communication History & Tracking",
      description: "Maintain complete records of all interactions with leads including calls, emails, texts, and in-person meetings. Track response times and communication effectiveness.",
      learnMoreUrl: "#"
    },
    {
      id: 'performance-analytics',
      title: "Performance Analytics & Insights",
      description: "Analyze lead conversion rates, response times, and overall performance metrics. Identify areas for improvement and optimize your lead management process.",
      learnMoreUrl: "#"
    },
    {
      id: 'integration-workflow',
      title: "Seamless Workflow Integration",
      description: "Integrate lead tracking directly into your Smar8 tenant management workflow. Automatically create applications, schedule viewings, and track progression through your systems.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Capture & Categorize",
      description: "Capture leads from multiple sources and automatically categorize them based on source, property interest, and qualification criteria."
    },
    {
      step: 2,
      title: "Score & Prioritize",
      description: "Our system automatically scores leads and prioritizes them based on qualification, response likelihood, and match quality with your properties."
    },
    {
      step: 3,
      title: "Track & Follow Up",
      description: "Track all lead interactions and set up automated follow-up sequences to ensure consistent communication and no missed opportunities."
    },
    {
      step: 4,
      title: "Convert & Analyze",
      description: "Convert qualified leads to tenants and analyze performance metrics to continuously improve your lead management process."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Complete Visibility",
      description: "Maintain complete visibility into every lead's journey from initial contact through lease signing with comprehensive tracking and analytics."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Never Miss Opportunities",
      description: "Ensure no potential tenant falls through the cracks with automated follow-up, reminders, and comprehensive lifecycle tracking."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Improved Conversion",
      description: "Improve lead conversion rates with intelligent scoring, prioritization, and automated follow-up sequences that maintain consistent communication."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Lead Tracking & Management"
        brandIcon={<FaClock className="text-white text-sm" />}
        brandText="Smar8 Lead Tracking"
        headline="Never Miss Any Potential Tenants with Complete Lead Tracking"
        subheadline="Track every lead from initial contact through lease signing with comprehensive lifecycle management, automated follow-up, and intelligent scoring. Ensure no potential tenant falls through the cracks."
        ctaText="Start Tracking Leads"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Lead Tracking Solution for Smar8 Business Owners"
        subheadline="From comprehensive lifecycle tracking to automated follow-up sequences, Smar8 provides everything you need to manage leads effectively and never miss potential tenants."
        ctaText="Explore Lead Tracking Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Lead Tracking Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Lead Tracking Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Lead Tracking & Management"
        description="Our platform provides comprehensive tools to track leads through their complete lifecycle, implement automated follow-up, and maintain complete visibility into your tenant acquisition process."
        features={leadTrackingFeatures}
        imageSrc={dummyImage}
        imageAlt="Lead Tracking Features"
        defaultActiveFeature="complete-lifecycle"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Lead Tracking Works"
        subtitle="Simple steps to track every lead and never miss potential tenants"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Lead Tracking"
        subtitle="Transform your lead management with comprehensive tracking and automated follow-up"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Never Miss Another Potential Tenant?"
        description="Join thousands of business owners who trust Smar8 to track leads effectively and maintain complete visibility into their tenant acquisition process. Start improving your lead management today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default LeadTracking
