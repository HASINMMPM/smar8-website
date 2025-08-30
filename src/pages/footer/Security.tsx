import Hero from '../../components/commen/Hero'
import { FaShieldAlt, FaLock, FaEye, FaChartLine, FaDownload, FaEye as FaEyeIcon, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const Security = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Bank-level security and encryption"
    },
    {
      icon: <FaLock className="text-secondary-800 text-2xl" />,
      title: "Multi-factor authentication and access control"
    },
    {
      icon: <FaEye className="text-secondary-800 text-2xl" />,
      title: "24/7 monitoring and threat detection"
    },
    {
      icon: <FaChartLine className="text-secondary-800 text-2xl" />,
      title: "Compliance with industry standards"
    }
  ];

  // Security features for FeatureAccordion
  const securityFeatures = [
    {
      id: 'data-encryption',
      title: "Data Encryption",
      description: "All sensitive data is encrypted using industry-standard AES-256 encryption to protect your information.",
      learnMoreUrl: "#"
    },
    {
      id: 'multi-factor-auth',
      title: "Multi-Factor Authentication",
      description: "Secure your account with multiple authentication methods including SMS, email, and authenticator apps.",
      learnMoreUrl: "#"
    },
    {
      id: 'secure-access',
      title: "Secure Access Control",
      description: "Control who has access to your data with role-based permissions and secure login protocols.",
      learnMoreUrl: "#"
    },
    {
      id: 'threat-monitoring',
      title: "Threat Monitoring",
      description: "24/7 monitoring and threat detection to identify and prevent security breaches in real-time.",
      learnMoreUrl: "#"
    },
    {
      id: 'compliance-standards',
      title: "Compliance Standards",
      description: "Meet industry security standards including SOC 2, GDPR, and other regulatory requirements.",
      learnMoreUrl: "#"
    },
    {
      id: 'backup-recovery',
      title: "Backup & Recovery",
      description: "Regular automated backups and disaster recovery procedures to protect your data.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Secure Setup",
      description: "Set up your account with multi-factor authentication and secure access controls."
    },
    {
      step: 2,
      title: "Data Protection",
      description: "Your data is automatically encrypted and protected with bank-level security measures."
    },
    {
      step: 3,
      title: "Continuous Monitoring",
      description: "Our security systems continuously monitor for threats and protect your information."
    },
    {
      step: 4,
      title: "Ongoing Updates",
      description: "Receive regular security updates and improvements to maintain the highest protection levels."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEyeIcon className="text-primary-600 text-xl" />,
      title: "Data Protection",
      description: "Keep your sensitive financial and property data secure with enterprise-grade security measures."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Compliance Assurance",
      description: "Ensure your business meets industry security standards and regulatory requirements."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Peace of Mind",
      description: "Focus on your business knowing your data is protected by world-class security systems."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Security & Data Protection"
        brandIcon={<FaShieldAlt className="text-white text-sm" />}
        brandText="Smar8 Security"
        headline="Enterprise-Grade Security for Your Data"
        subheadline="Protect your sensitive information with bank-level security, encryption, and compliance standards. Your data security is our top priority with comprehensive protection measures."
        ctaText="Learn About Security"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Security Solution for Real Estate Investors"
        subheadline="From data encryption to threat monitoring, Smar8 provides comprehensive security measures that protect your information and ensure compliance with industry standards."
        ctaText="Explore Security Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Security Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Security Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Data Security"
        description="Our comprehensive security program provides all the protection you need to keep your sensitive information safe and secure."
        features={securityFeatures}
        imageSrc={dummyImage}
        imageAlt="Security Features"
        defaultActiveFeature="data-encryption"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Security Works"
        subtitle="Simple steps to comprehensive data protection and security assurance"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Security"
        subtitle="Transform your data protection with enterprise-grade security and compliance assurance"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Secure Your Data?"
        description="Join thousands of investors who trust Smar8 with their sensitive information. Learn more about our security measures and protect your business today."
        buttonText="Learn More Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default Security
