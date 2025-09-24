import Hero from '../../components/commen/Hero'
import { FaPlay, FaEye, FaUsers, FaChartLine, FaDownload, FaEye as FaEyeIcon, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const Demo = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaPlay className="text-secondary-800 text-2xl" />,
      title: "Interactive platform demonstration"
    },
    {
      icon: <FaEye className="text-secondary-800 text-2xl" />,
      title: "See features in action"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Guided tour with experts"
    },
    {
      icon: <FaChartLine className="text-secondary-800 text-2xl" />,
      title: "Real-time performance insights"
    }
  ];

  // Demo features for FeatureAccordion
  const demoFeatures = [
    {
      id: 'platform-overview',
      title: "Platform Overview",
      description: "Get a comprehensive tour of our property management platform and understand its full capabilities.",
      learnMoreUrl: "#"
    },
    {
      id: 'feature-showcase',
      title: "Feature Showcase",
      description: "See our key features in action including tenant screening, rent collection, and financial management.",
      learnMoreUrl: "#"
    },
    {
      id: 'user-interface',
      title: "User Interface",
      description: "Experience our intuitive user interface designed for efficiency and ease of use.",
      learnMoreUrl: "#"
    },
    {
      id: 'workflow-demo',
      title: "Workflow Demo",
      description: "Watch how our platform streamlines common property management workflows and processes.",
      learnMoreUrl: "#"
    },
    {
      id: 'mobile-experience',
      title: "Mobile Experience",
      description: "See how our platform works on mobile devices for on-the-go property management.",
      learnMoreUrl: "#"
    },
    {
      id: 'integration-demo',
      title: "Integration Demo",
      description: "Learn about our integrations with banking, accounting, and other essential services.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Schedule Demo",
      description: "Book a convenient time for your personalized platform demonstration."
    },
    {
      step: 2,
      title: "Platform Tour",
      description: "Receive a guided tour of our platform with real examples and use cases."
    },
    {
      step: 3,
      title: "Feature Deep-Dive",
      description: "Explore specific features that are most relevant to your property management needs."
    },
    {
      step: 4,
      title: "Q&A Session",
      description: "Ask questions and get expert guidance on implementing our platform for your business."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEyeIcon className="text-primary-600 text-xl" />,
      title: "See It in Action",
      description: "Experience our platform firsthand to understand how it can transform your property management."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Ask Questions",
      description: "Get answers to your specific questions and concerns about our platform and services."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Expert Guidance",
      description: "Receive expert guidance on how to implement and optimize our platform for your business."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Platform Demo"
        brandIcon={<FaPlay className="text-white text-sm" />}
        brandText="Smar8 Demo"
        headline="See Smar8 in Action - Platform Demo"
        subheadline="Experience our property management platform firsthand. See how our features work, explore the user interface, and understand how Smar8 can transform your real estate business."
        ctaText="Schedule Demo"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Platform Demonstration for Real Estate Investors"
        subheadline="From feature showcases to workflow demonstrations, Smar8 provides comprehensive demos that help you understand our platform's capabilities and value."
        ctaText="Book Your Demo"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Demo Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Demo Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need to Know About Smar8"
        description="Our comprehensive demo program provides insights into our platform, features, and how we can help you succeed in property management."
        features={demoFeatures}
        imageSrc={dummyImage}
        imageAlt="Demo Features"
        defaultActiveFeature="platform-overview"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Demo Works"
        subtitle="Simple steps to experiencing our platform and understanding its value"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Demo"
        subtitle="Transform your understanding of our platform with hands-on experience and expert guidance"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to See Smar8 in Action?"
        description="Join thousands of investors who have experienced our platform through demos. Schedule your personalized demonstration today and see how we can transform your property management."
        buttonText="Schedule Demo Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default Demo
