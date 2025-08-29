import Hero from '../../components/commen/Hero'
import { FaDollarSign, FaUsers, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const AffiliateProgram = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaDollarSign className="text-secondary-800 text-2xl" />,
      title: "Recommend us and get paid"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Comprehensive affiliate tools and tracking"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure commission tracking and payments"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Performance analytics and reporting"
    }
  ];

  // Affiliate Program features for FeatureAccordion
  const affiliateProgramFeatures = [
    {
      id: 'commission-structure',
      title: "Competitive Commission Structure",
      description: "Earn attractive commissions for every successful referral. Our tiered commission structure rewards high-performing affiliates with increased earnings potential.",
      learnMoreUrl: "#"
    },
    {
      id: 'marketing-tools',
      title: "Comprehensive Marketing Tools",
      description: "Access professional marketing materials including banners, landing pages, and promotional content to help you promote Smar8 effectively.",
      learnMoreUrl: "#"
    },
    {
      id: 'tracking-analytics',
      title: "Advanced Tracking & Analytics",
      description: "Track your referral performance with comprehensive analytics including click-through rates, conversion tracking, and commission calculations.",
      learnMoreUrl: "#"
    },
    {
      id: 'payment-processing',
      title: "Secure Payment Processing",
      description: "Receive secure, timely payments for your earned commissions. Our automated payment system ensures reliable and transparent commission distribution.",
      learnMoreUrl: "#"
    },
    {
      id: 'support-resources',
      title: "Dedicated Support & Resources",
      description: "Get dedicated support from our affiliate team and access to training resources, best practices, and optimization strategies.",
      learnMoreUrl: "#"
    },
    {
      id: 'growth-opportunities',
      title: "Growth & Scaling Opportunities",
      description: "Scale your affiliate business with our proven strategies, exclusive offers, and ongoing support to maximize your earning potential.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Join Program",
      description: "Sign up for our affiliate program and get access to your personalized affiliate dashboard with tracking tools and marketing materials."
    },
    {
      step: 2,
      title: "Promote Smar8",
      description: "Use our marketing tools and materials to promote Smar8 to your audience through various channels and strategies."
    },
    {
      step: 3,
      title: "Track Performance",
      description: "Monitor your referral performance with comprehensive analytics and track commissions earned from successful conversions."
    },
    {
      step: 4,
      title: "Earn Commissions",
      description: "Receive secure payments for your earned commissions and continue growing your affiliate business with our ongoing support."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Additional Income",
      description: "Generate additional income by recommending Smar8 to your network with competitive commissions and reliable payment processing."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Professional Tools",
      description: "Access professional marketing tools and comprehensive tracking to maximize your referral success and commission earnings."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Ongoing Support",
      description: "Get ongoing support and resources to help you grow your affiliate business and optimize your promotional strategies."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Affiliate Program & Referral Marketing"
        brandIcon={<FaDollarSign className="text-white text-sm" />}
        brandText="Smar8 Affiliate Program"
        headline="Recommend Us and Get Paid"
        subheadline="Join our affiliate program and earn competitive commissions for every successful referral. Access professional marketing tools, comprehensive tracking, and ongoing support to grow your affiliate business."
        ctaText="Join Affiliate Program"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Affiliate Marketing Solution"
        subheadline="From competitive commissions to professional marketing tools, Smar8 Affiliate Program provides everything you need to succeed in referral marketing."
        ctaText="Explore Affiliate Program"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Affiliate Program Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Affiliate Program Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Affiliate Marketing"
        description="Our platform provides comprehensive affiliate tools, competitive commissions, and ongoing support to help you succeed in referral marketing."
        features={affiliateProgramFeatures}
        imageSrc={dummyImage}
        imageAlt="Affiliate Program Features"
        defaultActiveFeature="commission-structure"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Affiliate Program Works"
        subtitle="Simple steps to start earning commissions and growing your affiliate business"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Affiliate Program"
        subtitle="Transform your referral marketing with competitive commissions and professional tools"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Start Earning Commissions?"
        description="Join thousands of affiliates who trust Smar8 to provide competitive commissions and professional support. Start growing your affiliate business today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default AffiliateProgram
