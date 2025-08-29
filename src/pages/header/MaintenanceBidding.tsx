import Hero from '../../components/commen/Hero'
import { FaGavel, FaUsers, FaShieldAlt, FaCreditCard, FaHandshake, FaClock, FaStar } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const MaintenanceBidding = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaGavel className="text-secondary-800 text-2xl" />,
      title: "Competitive bidding from qualified maintenance vendors"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Vetted vendor network with ratings and reviews"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Quality assurance and warranty protection"
    },
    {
      icon: <FaCreditCard className="text-secondary-800 text-2xl" />,
      title: "Transparent pricing and cost comparison"
    }
  ];

  // Bidding features for FeatureAccordion
  const biddingFeatures = [
    {
      id: 'vendor-network',
      title: "Vetted Vendor Network",
      description: "Access a network of pre-screened, licensed, and insured maintenance vendors. All vendors undergo background checks and maintain minimum rating requirements.",
      learnMoreUrl: "#"
    },
    {
      id: 'competitive-bidding',
      title: "Competitive Bidding System",
      description: "Post maintenance jobs and receive competitive bids from multiple qualified vendors. Compare pricing, timelines, and quality guarantees to make informed decisions.",
      learnMoreUrl: "#"
    },
    {
      id: 'quality-assurance',
      title: "Quality Assurance & Warranty",
      description: "All completed work comes with vendor warranties and our quality guarantee. Rate vendors after completion to maintain high standards across the network.",
      learnMoreUrl: "#"
    },
    {
      id: 'project-management',
      title: "Project Management Tools",
      description: "Track project progress, communicate with vendors, and manage timelines through our integrated platform. Get real-time updates and milestone notifications.",
      learnMoreUrl: "#"
    },
    {
      id: 'cost-control',
      title: "Cost Control & Budgeting",
      description: "Set project budgets and receive bids within your financial constraints. Track actual costs vs. estimates and maintain financial oversight throughout projects.",
      learnMoreUrl: "#"
    },
    {
      id: 'performance-tracking',
      title: "Vendor Performance Tracking",
      description: "Monitor vendor performance metrics including completion time, quality ratings, and customer satisfaction. Build long-term relationships with top-performing vendors.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Post Your Job",
      description: "Describe your maintenance needs, upload photos, set budget range, and specify timeline requirements through our intuitive job posting system."
    },
    {
      step: 2,
      title: "Receive Bids",
      description: "Qualified vendors in your area will submit competitive bids with pricing, timelines, and quality guarantees. Compare options side-by-side."
    },
    {
      step: 3,
      title: "Select & Award",
      description: "Choose the best vendor based on price, quality, timeline, and ratings. Award the job and begin project management through our platform."
    },
    {
      step: 4,
      title: "Monitor & Complete",
      description: "Track project progress, communicate with vendors, and ensure quality completion. Rate the work and vendor for future reference."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaHandshake className="text-primary-600 text-xl" />,
      title: "Better Vendor Selection",
      description: "Choose from multiple qualified vendors with competitive pricing and proven track records. Make informed decisions based on comprehensive bid comparisons."
    },
    {
      icon: <FaClock className="text-primary-600 text-xl" />,
      title: "Faster Project Completion",
      description: "Reduce project delays with our streamlined bidding process and project management tools. Get work started quickly with pre-screened vendors."
    },
    {
      icon: <FaStar className="text-primary-600 text-xl" />,
      title: "Higher Quality Work",
      description: "Ensure quality results with our vendor rating system, warranty protection, and quality assurance processes. Maintain high standards across all projects."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Maintenance Bidding Platform"
        brandIcon={<FaGavel className="text-white text-sm" />}
        brandText="Smar8 Bidding"
        headline="Get the Best Maintenance Services at Competitive Prices"
        subheadline="Connect with qualified maintenance vendors through our competitive bidding platform. Post jobs, receive multiple bids, and choose the best option for your needs and budget."
        ctaText="Start Bidding Today"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Competitive Bidding for Quality Maintenance Services"
        subheadline="From small repairs to major renovations, our bidding platform connects you with qualified vendors who compete for your business. Get quality work at competitive prices with our vetted network."
        ctaText="Post Your First Job"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Maintenance Bidding Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Bidding Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Maintenance Bidding"
        description="Our platform provides comprehensive tools to manage the entire bidding process, from job posting to project completion, ensuring quality results at competitive prices."
        features={biddingFeatures}
        imageSrc={dummyImage}
        imageAlt="Maintenance Bidding Features"
        defaultActiveFeature="vendor-network"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Maintenance Bidding Works"
        subtitle="Simple steps to get competitive bids and quality maintenance services for your properties"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Maintenance Bidding"
        subtitle="Transform your maintenance procurement with competitive bidding that saves money and ensures quality results"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Get Competitive Maintenance Bids?"
        description="Join thousands of property managers who use Smar8 to find quality maintenance services at competitive prices. Start saving money and improving service quality today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default MaintenanceBidding
