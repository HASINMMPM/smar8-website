import Hero from '../../components/commen/Hero'
import { FaMoneyBillWave, FaClock, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const RentCollection = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaMoneyBillWave className="text-secondary-800 text-2xl" />,
      title: "Automated rent collection and processing"
    },
    {
      icon: <FaClock className="text-secondary-800 text-2xl" />,
      title: "Timely payments and late fee management"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure payment processing and verification"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Real-time tracking and reporting"
    }
  ];

  // Rent collection features for FeatureAccordion
  const rentCollectionFeatures = [
    {
      id: 'automated-payments',
      title: "Automated Payment Processing",
      description: "Set up recurring payments so rent is collected automatically on the due date, every time. Eliminate manual collection efforts and ensure consistent cash flow.",
      learnMoreUrl: "#"
    },
    {
      id: 'secure-processing',
      title: "Secure Payment Processing",
      description: "Bank-level security ensures all transactions are protected and compliant with financial regulations. Your funds are safe and secure.",
      learnMoreUrl: "#"
    },
    {
      id: 'real-time-tracking',
      title: "Real-time Payment Tracking",
      description: "Monitor payment status, track late fees, and view detailed transaction history in real-time. Stay informed about your rental income.",
      learnMoreUrl: "#"
    },
    {
      id: 'tenant-portal',
      title: "Tenant Payment Portal",
      description: "Provide tenants with a convenient, self-service payment portal where they can set up recurring payments and manage their accounts.",
      learnMoreUrl: "#"
    },
    {
      id: 'late-fee-management',
      title: "Late Fee Management",
      description: "Automatically calculate and apply late fees according to your lease terms. Maintain consistent payment policies across all properties.",
      learnMoreUrl: "#"
    },
    {
      id: 'comprehensive-reporting',
      title: "Comprehensive Reporting",
      description: "Generate detailed reports on rent collection, payment history, and cash flow analysis to optimize your property management strategy.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Property Setup",
      description: "Add your rental properties and set rent amounts, due dates, and late fee policies in our system."
    },
    {
      step: 2,
      title: "Tenant Invitation",
      description: "Send secure invitations to your tenants to set up their payment accounts and preferred payment methods."
    },
    {
      step: 3,
      title: "Payment Processing",
      description: "Rent is automatically collected on due dates, with secure processing and immediate fund availability."
    },
    {
      step: 4,
      title: "Monitoring & Reporting",
      description: "Track all payments, monitor cash flow, and access comprehensive reports for better financial management."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Consistent Cash Flow",
      description: "Ensure consistent cash flow with automated rent collection that eliminates late payments and reduces administrative overhead."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Reduced Administrative Work",
      description: "Minimize manual collection efforts and administrative tasks with automated payment processing and tenant self-service options."
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
        imageAlt="Smar8 - Automated Rent Collection"
        brandIcon={<FaMoneyBillWave className="text-white text-sm" />}
        brandText="Smar8 Rent Collection"
        headline="Automated Rent Collection for Landlords"
        subheadline="Streamline your rent collection process with our automated system that ensures timely payments, reduces administrative overhead, and provides secure payment processing."
        ctaText="Get Started Today"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Rent Collection Solution for Smar8 Business Owners"
        subheadline="From automated payment processing to comprehensive reporting, Smar8 provides everything you need to streamline rent collection and maintain consistent cash flow."
        ctaText="Explore Rent Collection Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Rent Collection Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Rent Collection Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Rent Collection"
        description="Our platform provides comprehensive tools to automate rent collection, manage payments securely, and maintain detailed financial records across all your properties."
        features={rentCollectionFeatures}
        imageSrc={dummyImage}
        imageAlt="Rent Collection Features"
        defaultActiveFeature="automated-payments"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Rent Collection Works"
        subtitle="Simple steps to automate your rent collection and ensure consistent cash flow"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Rent Collection"
        subtitle="Transform your rent collection with automated processing and tenant convenience"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Automate Your Rent Collection?"
        description="Join thousands of landlords who trust Smar8 to handle rent collection automatically. Start streamlining your payment processes today and ensure consistent cash flow."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default RentCollection
