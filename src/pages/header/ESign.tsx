import Hero from '../../components/commen/Hero'
import { FaFile, FaUsers, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const ESign = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaFile className="text-secondary-800 text-2xl" />,
      title: "E-sign a lease and send it to your tenants"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Secure digital signature verification"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Legally compliant electronic signatures"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Complete audit trail and tracking"
    }
  ];

  // E-Sign features for FeatureAccordion
  const eSignFeatures = [
    {
      id: 'digital-lease-creation',
      title: "Digital Lease Creation & Management",
      description: "Create professional lease agreements digitally with customizable templates, legal clauses, and property-specific terms. Generate leases that comply with local regulations.",
      learnMoreUrl: "#"
    },
    {
      id: 'secure-e-signatures',
      title: "Secure Electronic Signatures",
      description: "Enable tenants to sign leases electronically with legally compliant digital signatures. Ensure authenticity and security while providing convenience for all parties.",
      learnMoreUrl: "#"
    },
    {
      id: 'tenant-invitation',
      title: "Automated Tenant Invitation",
      description: "Automatically invite tenants to review and sign leases through secure email or SMS notifications. Track invitation status and send reminders as needed.",
      learnMoreUrl: "#"
    },
    {
      id: 'real-time-tracking',
      title: "Real-Time Signature Tracking",
      description: "Monitor lease signing progress in real-time with status updates, signature completion tracking, and automatic notifications when all parties have signed.",
      learnMoreUrl: "#"
    },
    {
      id: 'legal-compliance',
      title: "Legal Compliance & Audit Trails",
      description: "Maintain complete audit trails for all lease transactions including signature timestamps, IP addresses, and verification methods for legal compliance.",
      learnMoreUrl: "#"
    },
    {
      id: 'integration-workflow',
      title: "Seamless Workflow Integration",
      description: "Integrate e-signing directly into your Smar8 tenant management workflow. Automatically create applications, schedule viewings, and track lease progression.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Create Digital Lease",
      description: "Create a professional lease agreement using customizable templates and property-specific terms that comply with local regulations."
    },
    {
      step: 2,
      title: "Invite Tenants",
      description: "Send secure invitations to tenants for lease review and electronic signing through email or SMS notifications."
    },
    {
      step: 3,
      title: "Digital Signing",
      description: "Tenants review and sign leases electronically with legally compliant digital signatures, tracked in real-time."
    },
    {
      step: 4,
      title: "Complete & Store",
      description: "Once all parties have signed, the lease is automatically completed, stored securely, and integrated into your tenant management system."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Faster Processing",
      description: "Complete lease signings in minutes instead of days with digital signatures and automated workflow management."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Legal Compliance",
      description: "Ensure legal compliance with comprehensive audit trails, secure signatures, and regulatory-compliant electronic documentation."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Tenant Convenience",
      description: "Improve tenant experience with convenient digital signing options that eliminate the need for in-person meetings or document mailing."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - E-Sign & Digital Lease Management"
        brandIcon={<FaFile className="text-white text-sm" />}
        brandText="Smar8 E-Sign"
        headline="Streamline Lease Signing with Secure Electronic Signatures"
        subheadline="Create, send, and sign leases electronically with legally compliant digital signatures. Complete lease transactions faster, reduce paperwork, and improve tenant experience with our comprehensive e-signing platform."
        ctaText="Start E-Signing Leases"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete E-Signing Solution for Smar8 Business Owners"
        subheadline="From digital lease creation to secure electronic signatures, Smar8 provides everything you need to streamline lease management and improve tenant onboarding efficiency."
        ctaText="Explore E-Signing Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="E-Signing Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* E-Signing Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Digital Lease Management"
        description="Our platform provides comprehensive tools to create digital leases, enable secure electronic signatures, and maintain complete audit trails for legal compliance."
        features={eSignFeatures}
        imageSrc={dummyImage}
        imageAlt="E-Signing Features"
        defaultActiveFeature="digital-lease-creation"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 E-Signing Works"
        subtitle="Simple steps to create, send, and sign leases electronically"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 E-Signing"
        subtitle="Transform your lease management with digital signatures and automated workflow"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Streamline Your Lease Signing Process?"
        description="Join thousands of business owners who trust Smar8 to handle digital lease management and electronic signatures. Start improving your tenant onboarding today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default ESign
