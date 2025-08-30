import Hero from '../../components/commen/Hero'
import { FaGavel, FaFileContract, FaShieldAlt, FaUsers, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const Legal = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaGavel className="text-secondary-800 text-2xl" />,
      title: "Legal compliance and documentation"
    },
    {
      icon: <FaFileContract className="text-secondary-800 text-2xl" />,
      title: "Contract templates and legal forms"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Regulatory guidance and support"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Legal expert consultation services"
    }
  ];

  // Legal features for FeatureAccordion
  const legalFeatures = [
    {
      id: 'legal-compliance',
      title: "Legal Compliance",
      description: "Ensure your property management practices comply with local, state, and federal regulations.",
      learnMoreUrl: "#"
    },
    {
      id: 'contract-templates',
      title: "Contract Templates",
      description: "Access professionally drafted lease agreements, rental contracts, and legal forms.",
      learnMoreUrl: "#"
    },
    {
      id: 'regulatory-guidance',
      title: "Regulatory Guidance",
      description: "Stay updated with changing regulations and get guidance on compliance requirements.",
      learnMoreUrl: "#"
    },
    {
      id: 'legal-consultation',
      title: "Legal Consultation",
      description: "Get expert legal advice and consultation for complex property management issues.",
      learnMoreUrl: "#"
    },
    {
      id: 'dispute-resolution',
      title: "Dispute Resolution",
      description: "Access resources and guidance for resolving tenant disputes and legal conflicts.",
      learnMoreUrl: "#"
    },
    {
      id: 'risk-management',
      title: "Risk Management",
      description: "Identify and mitigate legal risks in your property management operations.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Legal Assessment",
      description: "Assess your current legal compliance and identify areas that need attention."
    },
    {
      step: 2,
      title: "Documentation Review",
      description: "Review and update your legal documents and contracts to ensure compliance."
    },
    {
      step: 3,
      title: "Implementation",
      description: "Implement recommended legal practices and procedures in your business."
    },
    {
      step: 4,
      title: "Ongoing Support",
      description: "Receive ongoing legal support and updates to maintain compliance."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Legal Protection",
      description: "Protect your business from legal risks and ensure compliance with all regulations."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Expert Guidance",
      description: "Access expert legal guidance and support for complex property management issues."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Risk Mitigation",
      description: "Identify and mitigate legal risks to protect your investment and business operations."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Legal Services & Compliance"
        brandIcon={<FaGavel className="text-white text-sm" />}
        brandText="Smar8 Legal"
        headline="Legal Services & Compliance for Property Managers"
        subheadline="Ensure legal compliance and protect your business with our comprehensive legal services. Access expert guidance, contract templates, and regulatory support for your property management operations."
        ctaText="Access Legal Services"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Legal Solution for Real Estate Investors"
        subheadline="From compliance guidance to contract templates, Smar8 provides comprehensive legal services that protect your business and ensure regulatory compliance."
        ctaText="Explore Legal Services"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Legal Services Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Legal Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Legal Compliance"
        description="Our comprehensive legal services provide all the guidance and support you need to ensure compliance and protect your property management business."
        features={legalFeatures}
        imageSrc={dummyImage}
        imageAlt="Legal Services Features"
        defaultActiveFeature="legal-compliance"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Legal Services Work"
        subtitle="Simple steps to legal compliance and business protection"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Legal Services"
        subtitle="Transform your legal compliance with expert guidance and comprehensive support"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Ensure Legal Compliance?"
        description="Join thousands of property managers who trust Smar8 for their legal needs. Access our legal services today and protect your business with expert guidance."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default Legal
