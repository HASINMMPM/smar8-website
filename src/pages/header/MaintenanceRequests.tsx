import Hero from '../../components/commen/Hero'
import { FaTools, FaClock, FaShieldAlt, FaCreditCard, FaUserCog } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const MaintenanceRequests = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaTools className="text-secondary-800 text-2xl" />,
      title: "Submit maintenance requests with photo evidence"
    },
    {
      icon: <FaClock className="text-secondary-800 text-2xl" />,
      title: "Real-time tracking and status updates"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure communication with maintenance teams"
    },
    {
      icon: <FaCreditCard className="text-secondary-800 text-2xl" />,
      title: "Transparent cost tracking and approvals"
    }
  ];

  // Maintenance features for FeatureAccordion
  const maintenanceFeatures = [
    {
      id: 'request-submission',
      title: "Easy Request Submission",
      description: "Submit maintenance requests through our intuitive mobile app or web platform. Include photos, videos, and detailed descriptions to help maintenance teams understand the issue quickly.",
      learnMoreUrl: "#"
    },
    {
      id: 'priority-management',
      title: "Smart Priority Management",
      description: "Our AI-powered system automatically categorizes requests by urgency and type. Emergency issues are flagged immediately, while routine maintenance is scheduled efficiently.",
      learnMoreUrl: "#"
    },
    {
      id: 'vendor-coordination',
      title: "Vendor Coordination",
      description: "Automatically assign requests to qualified vendors based on location, expertise, and availability. Track progress and communicate directly through the platform.",
      learnMoreUrl: "#"
    },
    {
      id: 'cost-tracking',
      title: "Cost Tracking & Approvals",
      description: "Track all maintenance costs in real-time. Get automatic approvals for routine repairs and require authorization for major expenses. Maintain budget control.",
      learnMoreUrl: "#"
    },
    {
      id: 'quality-assurance',
      title: "Quality Assurance",
      description: "Rate completed work and provide feedback. Our system ensures only qualified vendors with good ratings receive future assignments.",
      learnMoreUrl: "#"
    },
    {
      id: 'preventive-maintenance',
      title: "Preventive Maintenance",
      description: "Schedule routine inspections and maintenance to prevent costly repairs. Get alerts for upcoming maintenance tasks and equipment servicing.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Submit Request",
      description: "Report issues through our app with photos, descriptions, and priority level. Our AI categorizes and routes requests automatically."
    },
    {
      step: 2,
      title: "Vendor Assignment",
      description: "Qualified vendors are automatically assigned based on location, expertise, and availability. You'll receive instant notifications."
    },
    {
      step: 3,
      title: "Track Progress",
      description: "Monitor real-time updates, communicate with vendors, and track completion status through our intuitive dashboard."
    },
    {
      step: 4,
      title: "Complete & Review",
      description: "Verify work completion, approve invoices, and rate the service quality to help improve future maintenance."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaClock className="text-primary-600 text-xl" />,
      title: "Faster Response Times",
      description: "Reduce maintenance delays with automated routing and priority management. Emergency issues get immediate attention."
    },
    {
      icon: <FaCreditCard className="text-primary-600 text-xl" />,
      title: "Cost Control",
      description: "Track all expenses, get automatic approvals for routine repairs, and maintain strict budget oversight."
    },
    {
      icon: <FaUserCog className="text-primary-600 text-xl" />,
      title: "Better Communication",
      description: "Stay informed with real-time updates, photo evidence, and direct communication with maintenance teams."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Maintenance Request Management"
        brandIcon={<FaTools className="text-white text-sm" />}
        brandText="Smar8 Maintenance"
        headline="Streamline Your Maintenance Operations"
        subheadline="Manage maintenance requests efficiently with our comprehensive platform. Submit requests, track progress, coordinate vendors, and maintain your properties with ease."
        ctaText="Start Managing Maintenance"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Maintenance Management Solution"
        subheadline="From initial request to final completion, Smar8 handles every aspect of your maintenance operations. Reduce response times, control costs, and improve tenant satisfaction with our integrated platform."
        ctaText="Get Started with Smar8"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Maintenance Management Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Maintenance Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Efficient Maintenance Management"
        description="Our platform provides comprehensive tools to streamline maintenance operations, improve response times, and maintain high-quality service across all your properties."
        features={maintenanceFeatures}
        imageSrc={dummyImage}
        imageAlt="Maintenance Management Features"
        defaultActiveFeature="request-submission"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Maintenance Works"
        subtitle="Simple steps to streamline your maintenance workflow from request to completion"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Maintenance"
        subtitle="Transform your maintenance operations with our intelligent platform designed for property managers and maintenance teams"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Transform Your Maintenance Operations?"
        description="Join thousands of property managers who trust Smar8 to streamline their maintenance processes. Start improving response times and reducing costs today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default MaintenanceRequests
