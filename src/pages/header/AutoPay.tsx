import Hero from '../../components/commen/Hero'
import { FaCreditCard, FaUsers, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const AutoPay = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaCreditCard className="text-secondary-800 text-2xl" />,
      title: "Recurring payments set up by tenants"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Automated payment processing"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure payment verification and tracking"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Payment history and analytics"
    }
  ];

  // AutoPay features for FeatureAccordion
  const autoPayFeatures = [
    {
      id: 'recurring-payments',
      title: "Recurring Payment Setup",
      description: "Allow tenants to set up automatic recurring payments for rent, utilities, and other charges. Eliminate late payments and reduce manual collection efforts.",
      learnMoreUrl: "#"
    },
    {
      id: 'tenant-controlled',
      title: "Tenant-Controlled Setup",
      description: "Tenants can independently set up and manage their own recurring payments through the Smar8 Connect app. Give them control while maintaining oversight.",
      learnMoreUrl: "#"
    },
    {
      id: 'automated-processing',
      title: "Automated Payment Processing",
      description: "Process payments automatically on scheduled dates without manual intervention. Ensure consistent cash flow and reduce administrative overhead.",
      learnMoreUrl: "#"
    },
    {
      id: 'payment-verification',
      title: "Payment Verification & Security",
      description: "Verify all automatic payments before processing and maintain secure records with encrypted storage and comprehensive audit trails.",
      learnMoreUrl: "#"
    },
    {
      id: 'flexible-scheduling',
      title: "Flexible Payment Scheduling",
      description: "Support various payment schedules including monthly, bi-weekly, or custom intervals. Accommodate different tenant payment preferences and financial situations.",
      learnMoreUrl: "#"
    },
    {
      id: 'notification-system',
      title: "Smart Notification System",
      description: "Send automated notifications for successful payments, failed attempts, and upcoming payment dates. Keep both tenants and business owners informed.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Tenant Setup",
      description: "Tenants set up recurring payments through the Smar8 Connect app, choosing payment amounts, frequency, and preferred payment methods."
    },
    {
      step: 2,
      title: "Business Owner Approval",
      description: "Business owners review and approve recurring payment setups, ensuring amounts and schedules align with lease agreements."
    },
    {
      step: 3,
      title: "Automated Processing",
      description: "Payments are automatically processed on scheduled dates, with verification and secure handling through the Smar8 payment system."
    },
    {
      step: 4,
      title: "Monitoring & Notifications",
      description: "Both parties receive notifications about payment status, and business owners can monitor cash flow through comprehensive reporting."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Consistent Cash Flow",
      description: "Ensure consistent cash flow with automated payments that eliminate late payments and reduce manual collection efforts."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Reduced Administrative Work",
      description: "Minimize administrative overhead with automated payment processing that handles recurring transactions without manual intervention."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Tenant Convenience",
      description: "Improve tenant satisfaction by providing convenient, self-service payment options that give them control over their payment schedules."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - AutoPay & Recurring Payments"
        brandIcon={<FaCreditCard className="text-white text-sm" />}
        brandText="Smar8 AutoPay"
        headline="Automate Recurring Payments with Tenant-Controlled Setup"
        subheadline="Allow tenants to set up automatic recurring payments for rent and utilities. Eliminate late payments, ensure consistent cash flow, and reduce administrative overhead with our automated payment system."
        ctaText="Enable AutoPay"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete AutoPay Solution for Smar8 Business Owners"
        subheadline="From tenant-controlled setup to automated payment processing, Smar8 provides everything you need to streamline recurring payments and maintain consistent cash flow."
        ctaText="Explore AutoPay Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="AutoPay Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* AutoPay Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Recurring Payment Management"
        description="Our platform provides comprehensive tools to enable tenant-controlled recurring payments, automate processing, and maintain secure payment verification across all your properties."
        features={autoPayFeatures}
        imageSrc={dummyImage}
        imageAlt="AutoPay Features"
        defaultActiveFeature="recurring-payments"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 AutoPay Works"
        subtitle="Simple steps to enable automated recurring payments with tenant control"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 AutoPay"
        subtitle="Transform your payment collection with automated recurring payments and tenant convenience"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Automate Your Recurring Payments?"
        description="Join thousands of business owners who trust Smar8 to handle recurring payments automatically and maintain consistent cash flow. Start streamlining your payment processes today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default AutoPay
