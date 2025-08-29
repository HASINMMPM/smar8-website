import Hero from '../../components/commen/Hero'
import { FaUser, FaUsers, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const Tenants = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaUser className="text-secondary-800 text-2xl" />,
      title: "Pay rent and manage your account"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Access to business memberships and services"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure account management and data privacy"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Track payments and account history"
    }
  ];

  // Tenants features for FeatureAccordion
  const tenantFeatures = [
    {
      id: 'rent-payment',
      title: "Easy Rent Payment & Management",
      description: "Pay rent and manage your account through the Smar8 Connect app. Set up automatic payments, track payment history, and maintain clear financial records.",
      learnMoreUrl: "#"
    },
    {
      id: 'business-access',
      title: "Business Membership Access",
      description: "Access your business memberships and services through a unified platform. View membership details, track usage, and manage your business relationships.",
      learnMoreUrl: "#"
    },
    {
      id: 'account-management',
      title: "Comprehensive Account Management",
      description: "Manage your personal information, payment methods, and account preferences. Update contact details, change passwords, and maintain account security.",
      learnMoreUrl: "#"
    },
    {
      id: 'communication-tools',
      title: "Direct Communication Channels",
      description: "Communicate directly with business owners and property managers. Submit maintenance requests, ask questions, and stay informed about important updates.",
      learnMoreUrl: "#"
    },
    {
      id: 'document-access',
      description: "Access important documents including leases, receipts, and notices. Download and store documents securely for your records and reference.",
      title: "Document Access & Storage",
      learnMoreUrl: "#"
    },
    {
      id: 'mobile-convenience',
      title: "Mobile-First Experience",
      description: "Access all your account features from your mobile device. Pay rent, submit requests, and manage your account on the go with our mobile-optimized platform.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Create Account",
      description: "Set up your Smar8 Connect account with your email or mobile number and create secure login credentials."
    },
    {
      step: 2,
      title: "Access Services",
      description: "Access your business memberships, view account details, and manage your personal information through the platform."
    },
    {
      step: 3,
      title: "Make Payments",
      description: "Pay rent and other charges, set up automatic payments, and track your payment history and account balance."
    },
    {
      step: 4,
      title: "Stay Connected",
      description: "Communicate with business owners, submit requests, and stay updated on important information and notices."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Convenient Management",
      description: "Manage your account, payments, and business memberships from one convenient platform accessible from any device."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Secure Access",
      description: "Access your account securely with multiple authentication options and comprehensive data privacy protection."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Better Communication",
      description: "Improve communication with business owners and property managers through direct messaging and request submission."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Tenants & Account Management"
        brandIcon={<FaUser className="text-white text-sm" />}
        brandText="Smar8 for Tenants"
        headline="Pay Rent and Manage Your Account"
        subheadline="Tenants trust Smar8 Connect to manage their accounts, pay rent, and access business services efficiently. Get comprehensive tools for account management, payments, and communication in one unified platform."
        ctaText="Access Your Account"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Tenant Account Management Solution"
        subheadline="From rent payment to business membership access, Smar8 Connect provides everything tenants need to manage their accounts and stay connected with business owners."
        ctaText="Explore Tenant Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Tenant Account Management Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Tenant Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Account Management"
        description="Our platform provides comprehensive tools to manage your account, make payments, and access business services efficiently across all your memberships."
        features={tenantFeatures}
        imageSrc={dummyImage}
        imageAlt="Tenant Features"
        defaultActiveFeature="rent-payment"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Tenant Platform Works"
        subtitle="Simple steps to manage your account and access business services efficiently"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Tenant Platform"
        subtitle="Transform your account management with convenient access and secure tools"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Manage Your Account Efficiently?"
        description="Join thousands of tenants who trust Smar8 Connect to manage their accounts and stay connected with business owners. Start improving your account management today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default Tenants
