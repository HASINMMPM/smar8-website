import Hero from '../../components/commen/Hero'
import { FaShieldAlt, FaHome, FaUsers, FaChartLine, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const LandlordInsurance = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Comprehensive property protection coverage"
    },
    {
      icon: <FaHome className="text-secondary-800 text-2xl" />,
      title: "Building and liability protection"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Tenant-related coverage options"
    },
    {
      icon: <FaChartLine className="text-secondary-800 text-2xl" />,
      title: "Competitive rates and flexible plans"
    }
  ];

  // Insurance features for FeatureAccordion
  const insuranceFeatures = [
    {
      id: 'property-coverage',
      title: "Property Coverage",
      description: "Protect your rental properties against damage from fire, storms, vandalism, and other covered perils.",
      learnMoreUrl: "#"
    },
    {
      id: 'liability-protection',
      title: "Liability Protection",
      description: "Get comprehensive liability coverage to protect against lawsuits and claims from tenants or visitors.",
      learnMoreUrl: "#"
    },
    {
      id: 'loss-of-rent',
      title: "Loss of Rent Coverage",
      description: "Cover lost rental income when your property becomes uninhabitable due to covered damage.",
      learnMoreUrl: "#"
    },
    {
      id: 'personal-property',
      title: "Personal Property Coverage",
      description: "Protect appliances, furniture, and other personal property you provide with your rentals.",
      learnMoreUrl: "#"
    },
    {
      id: 'medical-payments',
      title: "Medical Payments",
      description: "Cover medical expenses for injuries that occur on your property, regardless of fault.",
      learnMoreUrl: "#"
    },
    {
      id: 'additional-coverages',
      title: "Additional Coverages",
      description: "Customize your policy with additional coverages like flood, earthquake, or equipment breakdown.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Get Quote",
      description: "Receive a personalized insurance quote based on your property details and coverage needs."
    },
    {
      step: 2,
      title: "Choose Coverage",
      description: "Select the coverage options that best protect your investment and meet your requirements."
    },
    {
      step: 3,
      title: "Policy Setup",
      description: "Complete policy setup with our streamlined process and expert guidance."
    },
    {
      step: 4,
      title: "Ongoing Support",
      description: "Receive ongoing support and assistance with claims and policy management."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Comprehensive Protection",
      description: "Get comprehensive coverage that protects your investment and provides peace of mind."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Cost-Effective Plans",
      description: "Access competitive rates and flexible plans that fit your budget and coverage needs."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Expert Support",
      description: "Receive expert guidance and support throughout the insurance process and claims handling."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Landlord Insurance Services"
        brandIcon={<FaShieldAlt className="text-white text-sm" />}
        brandText="Smar8 Insurance"
        headline="Comprehensive Landlord Insurance Protection"
        subheadline="Protect your rental properties with comprehensive insurance coverage designed specifically for landlords. Get peace of mind with our tailored insurance solutions."
        ctaText="Get Insurance Quote"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Insurance Solution for Property Owners"
        subheadline="From property damage to liability protection, Smar8 provides comprehensive insurance coverage that protects your investment and provides peace of mind."
        ctaText="Explore Insurance Options"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Insurance Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Insurance Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Property Protection"
        description="Our comprehensive insurance portfolio provides all the coverage you need to protect your rental properties and investment portfolio."
        features={insuranceFeatures}
        imageSrc={dummyImage}
        imageAlt="Insurance Features"
        defaultActiveFeature="property-coverage"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Insurance Works"
        subtitle="Simple steps to comprehensive property protection and peace of mind"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Insurance"
        subtitle="Transform your property protection with comprehensive coverage and expert support"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Protect Your Investment?"
        description="Join thousands of landlords who trust Smar8 for comprehensive insurance protection. Get your quote today and secure your peace of mind."
        buttonText="Get Quote Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default LandlordInsurance
