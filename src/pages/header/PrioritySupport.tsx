import Hero from '../../components/commen/Hero'
import { FaPhone, FaUsers, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const PrioritySupport = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaPhone className="text-secondary-800 text-2xl" />,
      title: "Call, text, chat. We are here to assist"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Priority support for business owners"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Expert assistance and problem resolution"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Comprehensive support tracking and analytics"
    }
  ];

  // Priority Support features for FeatureAccordion
  const prioritySupportFeatures = [
    {
      id: 'multi-channel-support',
      title: "Multi-Channel Support Options",
      description: "Get assistance through multiple channels including phone calls, text messaging, live chat, and email. Choose the communication method that works best for your needs and schedule.",
      learnMoreUrl: "#"
    },
    {
      id: 'priority-access',
      title: "Priority Access & Response",
      description: "Receive priority support with faster response times and dedicated assistance. Get your questions answered and problems resolved quickly to minimize business disruption.",
      learnMoreUrl: "#"
    },
    {
      id: 'expert-assistance',
      title: "Expert Support Team",
      description: "Work with experienced support specialists who understand the Smar8 platform and can provide expert guidance on all aspects of your rental management operations.",
      learnMoreUrl: "#"
    },
    {
      id: 'problem-resolution',
      title: "Comprehensive Problem Resolution",
      description: "Get complete solutions to technical issues, workflow questions, and platform optimization. Our support team works with you until your issue is fully resolved.",
      learnMoreUrl: "#"
    },
    {
      id: 'training-guidance',
      title: "Training & Best Practices",
      description: "Receive guidance on platform features, best practices, and optimization strategies. Learn how to maximize the value of Smar8 for your rental business.",
      learnMoreUrl: "#"
    },
    {
      id: 'support-analytics',
      title: "Support Analytics & Tracking",
      description: "Track support interactions, resolution times, and satisfaction levels. Monitor your support experience and provide feedback to help us continuously improve our service.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Choose Your Channel",
      description: "Select your preferred support channel - phone, text, chat, or email - based on your needs and urgency level."
    },
    {
      step: 2,
      title: "Connect with Support",
      description: "Connect with our expert support team who will quickly understand your issue and provide immediate assistance."
    },
    {
      step: 3,
      title: "Get Expert Resolution",
      description: "Receive expert guidance and comprehensive solutions to resolve your issue quickly and efficiently."
    },
    {
      step: 4,
      title: "Follow Up & Optimize",
      description: "Get follow-up support and guidance on best practices to optimize your Smar8 usage and prevent future issues."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Faster Resolution",
      description: "Get your issues resolved quickly with priority support access and expert assistance that minimizes business disruption."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Multiple Channels",
      description: "Choose from multiple support channels including phone, text, chat, and email to get assistance in the way that works best for you."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Expert Guidance",
      description: "Receive expert guidance and best practices to maximize the value of Smar8 and optimize your rental management operations."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Priority Support & Customer Service"
        brandIcon={<FaPhone className="text-white text-sm" />}
        brandText="Smar8 Priority Support"
        headline="Call, Text, Chat. We Are Here to Assist"
        subheadline="Get priority support through multiple channels with expert assistance and comprehensive problem resolution. Our support team is here to help you maximize the value of Smar8 for your rental business."
        ctaText="Get Priority Support"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Priority Support Solution for Smar8 Business Owners"
        subheadline="From multi-channel support options to expert problem resolution, Smar8 provides everything you need to get assistance quickly and optimize your platform usage."
        ctaText="Explore Support Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Priority Support Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Priority Support Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Platform Support"
        description="Our platform provides comprehensive support tools including multi-channel assistance, expert guidance, and comprehensive problem resolution to help you succeed with Smar8."
        features={prioritySupportFeatures}
        imageSrc={dummyImage}
        imageAlt="Priority Support Features"
        defaultActiveFeature="multi-channel-support"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Priority Support Works"
        subtitle="Simple steps to get expert assistance and resolve issues quickly"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Priority Support"
        subtitle="Transform your support experience with priority access and expert assistance"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Get Priority Support?"
        description="Join thousands of business owners who trust Smar8 to provide expert assistance and comprehensive support. Start getting the help you need today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default PrioritySupport
