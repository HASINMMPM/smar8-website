import Hero from '../../components/commen/Hero'
import { FaFile, FaUsers, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const LandlordForms = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaFile className="text-secondary-800 text-2xl" />,
      title: "All the documents you may need"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Legally compliant form templates"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure document management and storage"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Customizable form creation and editing"
    }
  ];

  // Landlord Forms features for FeatureAccordion
  const landlordFormFeatures = [
    {
      id: 'comprehensive-templates',
      title: "Comprehensive Form Templates",
      description: "Access a complete library of legally compliant form templates including lease agreements, rental applications, maintenance requests, and eviction notices.",
      learnMoreUrl: "#"
    },
    {
      id: 'legal-compliance',
      title: "Legal Compliance & Validation",
      description: "Ensure all your forms comply with local, state, and federal regulations. Our templates are regularly updated to reflect changing legal requirements.",
      learnMoreUrl: "#"
    },
    {
      id: 'customization-tools',
      title: "Advanced Customization Tools",
      description: "Customize forms to match your specific needs and branding. Add custom fields, modify layouts, and create personalized templates for your properties.",
      learnMoreUrl: "#"
    },
    {
      id: 'digital-signatures',
      title: "Digital Signature Integration",
      description: "Integrate digital signatures directly into your forms for faster processing and improved tenant experience. Maintain secure audit trails for all signatures.",
      learnMoreUrl: "#"
    },
    {
      id: 'document-management',
      title: "Comprehensive Document Management",
      description: "Organize, store, and manage all your forms and documents securely. Access templates, completed forms, and historical documents from one centralized location.",
      learnMoreUrl: "#"
    },
    {
      id: 'automation-workflows',
      title: "Automated Form Workflows",
      description: "Create automated workflows for form processing including automatic notifications, approval processes, and completion tracking.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Browse Templates",
      description: "Browse our comprehensive library of legally compliant form templates organized by category and property management function."
    },
    {
      step: 2,
      title: "Customize Forms",
      description: "Customize forms to match your specific needs, add custom fields, and modify layouts to create personalized templates."
    },
    {
      step: 3,
      title: "Generate Documents",
      description: "Generate professional documents with tenant information, digital signatures, and secure storage for all completed forms."
    },
    {
      step: 4,
      title: "Manage & Track",
      description: "Manage all your forms and documents, track completion status, and maintain secure records for legal compliance."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Legal Compliance",
      description: "Ensure all your forms comply with current regulations and legal requirements to protect your investment and maintain professional standards."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Time Savings",
      description: "Save time with pre-built, legally compliant templates that eliminate the need to create forms from scratch or research legal requirements."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Professional Standards",
      description: "Maintain professional standards with comprehensive, customizable form templates that enhance your reputation and tenant relationships."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Landlord Forms & Document Templates"
        brandIcon={<FaFile className="text-white text-sm" />}
        brandText="Smar8 Landlord Forms"
        headline="All the Documents You May Need"
        subheadline="Access comprehensive, legally compliant form templates for all aspects of property management. Create professional documents, ensure legal compliance, and streamline your administrative processes with our extensive template library."
        ctaText="Access Forms"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Document Template Solution for Landlords"
        subheadline="From comprehensive form templates to digital signature integration, Smar8 Landlord Forms provides everything you need to create professional, legally compliant documents."
        ctaText="Explore Form Templates"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Landlord Forms Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Landlord Forms Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Document Management"
        description="Our platform provides comprehensive form templates, customization tools, and document management features to help landlords create professional, legally compliant documents."
        features={landlordFormFeatures}
        imageSrc={dummyImage}
        imageAlt="Landlord Forms Features"
        defaultActiveFeature="comprehensive-templates"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Landlord Forms Work"
        subtitle="Simple steps to create professional, legally compliant documents efficiently"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Landlord Forms"
        subtitle="Transform your document management with professional templates and legal compliance"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Streamline Your Document Management?"
        description="Join thousands of landlords who trust Smar8 Forms to create professional, legally compliant documents. Start improving your administrative processes today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default LandlordForms
