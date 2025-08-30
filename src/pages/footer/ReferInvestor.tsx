import Hero from '../../components/commen/Hero'
import { FaUserPlus, FaGift, FaUsers, FaChartLine, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const ReferInvestor = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaUserPlus className="text-secondary-800 text-2xl" />,
      title: "Earn rewards for successful referrals"
    },
    {
      icon: <FaGift className="text-secondary-800 text-2xl" />,
      title: "Generous referral bonuses and incentives"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Help fellow investors succeed"
    },
    {
      icon: <FaChartLine className="text-secondary-800 text-2xl" />,
      title: "Track referral progress and earnings"
    }
  ];

  // Referral features for FeatureAccordion
  const referralFeatures = [
    {
      id: 'referral-program',
      title: "Referral Program",
      description: "Join our referral program and earn rewards for introducing successful real estate investors to the Smar8 platform.",
      learnMoreUrl: "#"
    },
    {
      id: 'generous-rewards',
      title: "Generous Rewards",
      description: "Earn substantial bonuses and ongoing rewards for each successful referral that joins our platform.",
      learnMoreUrl: "#"
    },
    {
      id: 'tracking-system',
      title: "Referral Tracking",
      description: "Track your referrals, monitor their progress, and manage your earnings through our comprehensive tracking system.",
      learnMoreUrl: "#"
    },
    {
      id: 'marketing-materials',
      title: "Marketing Materials",
      description: "Access professional marketing materials and tools to help you promote Smar8 to potential investors.",
      learnMoreUrl: "#"
    },
    {
      id: 'support-system',
      title: "Referral Support",
      description: "Get support and guidance to maximize your referral success and optimize your referral strategy.",
      learnMoreUrl: "#"
    },
    {
      id: 'community-benefits',
      title: "Community Benefits",
      description: "Build your network and contribute to the growth of the real estate investment community.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Join Program",
      description: "Sign up for our referral program and get access to marketing materials and tracking tools."
    },
    {
      step: 2,
      title: "Refer Investors",
      description: "Introduce potential investors to Smar8 using your unique referral link and marketing materials."
    },
    {
      step: 3,
      title: "Track Progress",
      description: "Monitor your referrals' progress and track their journey through our platform."
    },
    {
      step: 4,
      title: "Earn Rewards",
      description: "Receive rewards and bonuses when your referrals successfully join and use our platform."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Earn Rewards",
      description: "Generate additional income through our generous referral program and reward system."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Help Others",
      description: "Help fellow real estate investors discover tools and solutions that can transform their business."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Build Network",
      description: "Expand your professional network and strengthen relationships within the real estate community."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Refer a Real Estate Investor"
        brandIcon={<FaUserPlus className="text-white text-sm" />}
        brandText="Smar8 Referral Program"
        headline="Refer Real Estate Investors & Earn Rewards"
        subheadline="Join our referral program and help fellow investors discover the power of Smar8. Earn generous rewards while building your network and contributing to the community."
        ctaText="Join Referral Program"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Referral Solution for Smar8 Community Members"
        subheadline="From marketing materials to tracking tools, Smar8 provides everything you need to succeed in our referral program and earn substantial rewards."
        ctaText="Explore Referral Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Referral Program Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Referral Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Referrals"
        description="Our referral program provides comprehensive tools and support to help you succeed and maximize your referral earnings."
        features={referralFeatures}
        imageSrc={dummyImage}
        imageAlt="Referral Program Features"
        defaultActiveFeature="referral-program"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Referral Program Works"
        subtitle="Simple steps to earning rewards and building your network through referrals"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Referral Program"
        subtitle="Transform your network building with rewards and community growth opportunities"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Start Earning Referral Rewards?"
        description="Join thousands of successful referrers who are earning rewards while helping fellow investors. Start building your network and earning today."
        buttonText="Join Program Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default ReferInvestor
