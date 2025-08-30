import Hero from '../../components/commen/Hero'
import { FaUserCheck, FaShieldAlt, FaSearch, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const TenantScreening = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaUserCheck className="text-secondary-800 text-2xl" />,
      title: "Comprehensive background checks and verification"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure and compliant screening process"
    },
    {
      icon: <FaSearch className="text-secondary-800 text-2xl" />,
      title: "Detailed credit and rental history reports"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Risk assessment and scoring system"
    }
  ];

  // Tenant screening features for FeatureAccordion
  const screeningFeatures = [
    {
      id: 'background-checks',
      title: "Comprehensive Background Checks",
      description: "Verify identity, criminal history, and employment status with thorough background screening that meets industry standards.",
      learnMoreUrl: "#"
    },
    {
      id: 'credit-reports',
      title: "Credit History Reports",
      description: "Access detailed credit reports to assess financial responsibility and payment history of potential tenants.",
      learnMoreUrl: "#"
    },
    {
      id: 'rental-history',
      title: "Rental History Verification",
      description: "Contact previous landlords to verify rental history, payment patterns, and property care behavior.",
      learnMoreUrl: "#"
    },
    {
      id: 'employment-verification',
      title: "Employment Verification",
      description: "Confirm current employment status, income verification, and job stability for reliable tenant screening.",
      learnMoreUrl: "#"
    },
    {
      id: 'risk-assessment',
      title: "Risk Assessment Scoring",
      description: "Get comprehensive risk scores based on multiple factors to make informed tenant selection decisions.",
      learnMoreUrl: "#"
    },
    {
      id: 'compliance-tools',
      title: "Compliance & Legal Tools",
      description: "Ensure your screening process complies with fair housing laws and local regulations.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Tenants complete online applications with consent for background screening and verification processes."
    },
    {
      step: 2,
      title: "Automated Screening",
      description: "Our system automatically runs comprehensive checks including background, credit, and rental history."
    },
    {
      step: 3,
      title: "Report Generation",
      description: "Receive detailed screening reports with risk assessments and recommendations for tenant selection."
    },
    {
      step: 4,
      title: "Decision Support",
      description: "Use comprehensive data and risk scores to make informed decisions about tenant approval."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Risk Mitigation",
      description: "Reduce the risk of problematic tenants with comprehensive screening and verification processes."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Quality Tenants",
      description: "Attract and select high-quality tenants who are more likely to pay rent on time and care for your property."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Legal Compliance",
      description: "Ensure your screening process complies with all applicable laws and regulations."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Tenant Screening Services"
        brandIcon={<FaUserCheck className="text-white text-sm" />}
        brandText="Smar8 Tenant Screening"
        headline="Comprehensive Tenant Screening for Landlords"
        subheadline="Protect your investment with our comprehensive tenant screening services. Verify backgrounds, check credit history, and assess risk to select the best tenants for your properties."
        ctaText="Start Screening Today"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Tenant Screening Solution for Smar8 Business Owners"
        subheadline="From background checks to risk assessment, Smar8 provides everything you need to screen tenants thoroughly and make informed rental decisions."
        ctaText="Explore Screening Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Tenant Screening Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Tenant Screening Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Comprehensive Tenant Screening"
        description="Our platform provides comprehensive tools to verify tenant backgrounds, assess risk, and ensure compliance with all screening requirements."
        features={screeningFeatures}
        imageSrc={dummyImage}
        imageAlt="Tenant Screening Features"
        defaultActiveFeature="background-checks"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Tenant Screening Works"
        subtitle="Simple steps to comprehensive tenant verification and risk assessment"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Tenant Screening"
        subtitle="Transform your tenant selection with comprehensive screening and risk assessment"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Screen Tenants Professionally?"
        description="Join thousands of landlords who trust Smar8 for comprehensive tenant screening. Protect your investment and select quality tenants with confidence."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default TenantScreening
