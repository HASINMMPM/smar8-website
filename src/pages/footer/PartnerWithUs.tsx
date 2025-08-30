import Hero from '../../components/commen/Hero'
import { FaHandshake, FaUsers, FaChartLine, FaShieldAlt, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const PartnerWithUs = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaHandshake className="text-secondary-800 text-2xl" />,
      title: "Strategic partnership opportunities and collaboration"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Access to our network of real estate investors"
    },
    {
      icon: <FaChartLine className="text-secondary-800 text-2xl" />,
      title: "Revenue sharing and growth opportunities"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Trusted partnership with proven track record"
    }
  ];

  // Partnership features for FeatureAccordion
  const partnershipFeatures = [
    {
      id: 'strategic-partnerships',
      title: "Strategic Partnerships",
      description: "Form strategic partnerships with Smar8 to expand your reach and offer comprehensive solutions to real estate investors.",
      learnMoreUrl: "#"
    },
    {
      id: 'network-access',
      title: "Network Access",
      description: "Gain access to our extensive network of real estate investors, property managers, and industry professionals.",
      learnMoreUrl: "#"
    },
    {
      id: 'revenue-sharing',
      title: "Revenue Sharing",
      description: "Benefit from our revenue sharing model and create new income streams through strategic collaboration.",
      learnMoreUrl: "#"
    },
    {
      id: 'marketing-support',
      title: "Marketing Support",
      description: "Receive marketing support, co-branded materials, and promotional opportunities to grow your business.",
      learnMoreUrl: "#"
    },
    {
      id: 'technology-integration',
      title: "Technology Integration",
      description: "Integrate your services with our platform to provide seamless solutions for property management needs.",
      learnMoreUrl: "#"
    },
    {
      id: 'training-resources',
      title: "Training & Resources",
      description: "Access training materials, best practices, and industry insights to enhance your service offerings.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Initial Discussion",
      description: "Schedule a consultation to discuss partnership opportunities and explore mutual benefits."
    },
    {
      step: 2,
      title: "Partnership Agreement",
      description: "Develop a customized partnership agreement that aligns with both parties' goals and objectives."
    },
    {
      step: 3,
      title: "Integration & Launch",
      description: "Integrate services and launch collaborative offerings to our shared customer base."
    },
    {
      step: 4,
      title: "Growth & Expansion",
      description: "Scale the partnership and explore new opportunities for mutual growth and success."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Expanded Reach",
      description: "Access our extensive network of real estate investors and property managers to grow your business."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Revenue Growth",
      description: "Create new revenue streams through strategic partnerships and collaborative service offerings."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Industry Expertise",
      description: "Leverage our industry expertise and platform capabilities to enhance your service portfolio."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Partner With Us"
        brandIcon={<FaHandshake className="text-white text-sm" />}
        brandText="Smar8 Partnerships"
        headline="Partner With Smar8 for Mutual Success"
        subheadline="Join our network of strategic partners and unlock new opportunities in real estate property management. Collaborate with industry leaders and grow your business together."
        ctaText="Become a Partner"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Strategic Partnership Opportunities for Industry Leaders"
        subheadline="From technology integration to marketing collaboration, Smar8 provides comprehensive partnership opportunities that drive mutual growth and success."
        ctaText="Explore Partnership Options"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Partnership Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Partnership Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Partnerships"
        description="Our partnership program provides comprehensive tools and support to create mutually beneficial relationships and drive business growth."
        features={partnershipFeatures}
        imageSrc={dummyImage}
        imageAlt="Partnership Features"
        defaultActiveFeature="strategic-partnerships"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Partnerships Work"
        subtitle="Simple steps to building successful strategic partnerships and collaborative relationships"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Partnerships"
        subtitle="Transform your business with strategic partnerships and collaborative growth opportunities"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Partner With Smar8?"
        description="Join our network of successful partners and unlock new opportunities for growth and collaboration. Let's build something great together."
        buttonText="Start Partnership Discussion"
        buttonUrl="/#"
      />
    </div>
  )
}

export default PartnerWithUs
