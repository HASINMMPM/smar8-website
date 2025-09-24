import Hero from '../../components/commen/Hero'
import { FaStar, FaUsers, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const PremiumLeads = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaStar className="text-secondary-800 text-2xl" />,
      title: "Access to millions of potential tenants"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Pre-screened and qualified leads"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Verified contact information and backgrounds"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Advanced filtering and matching algorithms"
    }
  ];

  // Premium leads features for FeatureAccordion
  const premiumLeadsFeatures = [
    {
      id: 'millions-of-leads',
      title: "Access to Millions of Leads",
      description: "Get access to a vast database of millions of potential tenants actively looking for rental properties. Expand your reach beyond local listings and find qualified tenants quickly.",
      learnMoreUrl: "#"
    },
    {
      id: 'pre-screened-qualification',
      title: "Pre-Screened & Qualified Leads",
      description: "All leads come pre-screened with basic qualification criteria including income verification, credit checks, and rental history. Save time by focusing on qualified prospects.",
      learnMoreUrl: "#"
    },
    {
      id: 'advanced-filtering',
      title: "Advanced Filtering & Matching",
      description: "Use sophisticated algorithms to filter leads by location, budget, move-in date, credit score, and other criteria. Get the most relevant leads for your properties.",
      learnMoreUrl: "#"
    },
    {
      id: 'verified-information',
      title: "Verified Contact Information",
      description: "All lead contact information is verified and up-to-date. Reduce no-shows and improve response rates with accurate phone numbers and email addresses.",
      learnMoreUrl: "#"
    },
    {
      id: 'lead-scoring',
      title: "Intelligent Lead Scoring",
      description: "Our system automatically scores leads based on qualification criteria, response likelihood, and match quality. Focus your efforts on the highest-scoring prospects.",
      learnMoreUrl: "#"
    },
    {
      id: 'integration-tools',
      title: "Seamless Integration Tools",
      description: "Integrate premium leads directly into your Smar8 workflow. Automatically create applications, schedule viewings, and track lead progression through your existing systems.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Access Premium Database",
      description: "Gain access to our database of millions of pre-screened, qualified leads actively searching for rental properties across all markets."
    },
    {
      step: 2,
      title: "Set Your Criteria",
      description: "Define your ideal tenant profile using advanced filters for location, budget, credit score, move-in date, and other qualification criteria."
    },
    {
      step: 3,
      title: "Receive Matched Leads",
      description: "Get automatically matched leads that meet your criteria, complete with verified contact information and qualification scores."
    },
    {
      step: 4,
      title: "Convert & Track",
      description: "Contact qualified leads, schedule viewings, and track their progression through your Smar8 tenant management workflow."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Expanded Reach",
      description: "Access millions of potential tenants beyond your local market to fill vacancies faster and reduce vacancy periods."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Quality Matches",
      description: "Get highly qualified leads that match your specific criteria, reducing time spent on unqualified prospects."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Time Savings",
      description: "Save hours of lead generation and screening time with pre-qualified prospects ready for immediate contact."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Premium Leads & Tenant Acquisition"
        brandIcon={<FaStar className="text-white text-sm" />}
        brandText="Smar8 Premium Leads"
        headline="Access Millions of Pre-Screened, Qualified Tenant Leads"
        subheadline="Get instant access to millions of potential tenants actively searching for rental properties. Our premium leads come pre-screened and qualified, helping you fill vacancies faster with quality tenants."
        ctaText="Get Premium Leads Access"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Premium Lead Generation for Smar8 Business Owners"
        subheadline="From millions of qualified leads to intelligent matching algorithms, Smar8 provides everything you need to expand your tenant pool and reduce vacancy periods with high-quality prospects."
        ctaText="Explore Premium Lead Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Premium Leads Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Premium Leads Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Premium Lead Generation"
        description="Our platform provides comprehensive tools to access millions of qualified leads, implement advanced filtering, and integrate seamlessly with your existing Smar8 tenant management workflow."
        features={premiumLeadsFeatures}
        imageSrc={dummyImage}
        imageAlt="Premium Leads Features"
        defaultActiveFeature="millions-of-leads"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Premium Leads Work"
        subtitle="Simple steps to access millions of qualified leads and fill your vacancies faster"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Premium Leads"
        subtitle="Transform your tenant acquisition with millions of qualified leads and intelligent matching"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Access Millions of Qualified Leads?"
        description="Join thousands of business owners who trust Smar8 to provide premium leads that fill vacancies faster. Start expanding your tenant pool today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default PremiumLeads
