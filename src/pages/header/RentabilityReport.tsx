import Hero from '../../components/commen/Hero'
import { FaChartLine, FaShieldAlt, FaDollarSign, FaChartBar, FaEye, FaArrowUp } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const RentabilityReport = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaChartLine className="text-secondary-800 text-2xl" />,
      title: "Business performance analysis and optimization insights"
    },
    {
      icon: <FaDollarSign className="text-secondary-800 text-2xl" />,
      title: "Revenue maximization and competitive rate strategies"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Data-driven recommendations and market intelligence"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Performance tracking and ROI optimization tools"
    }
  ];

  // Rentability features for FeatureAccordion
  const rentabilityFeatures = [
    {
      id: 'business-performance',
      title: "Business Performance Analysis",
      description: "Analyze your business performance across multiple locations and buildings. Track people management efficiency, transfer charge optimization, and overall business profitability with comprehensive metrics.",
      learnMoreUrl: "#"
    },
    {
      id: 'rate-optimization',
      title: "Rate & Charge Optimization",
      description: "Optimize your rates based on business type, mobile prefixes, and market conditions. Fine-tune people management charges (40 for additions, 25 for removals) and transfer fees for maximum profitability.",
      learnMoreUrl: "#"
    },
    {
      id: 'market-intelligence',
      title: "Market Intelligence & Trends",
      description: "Gain insights into local market conditions, competitor analysis, and emerging trends. Identify opportunities to differentiate your businesses and optimize operations for better market positioning.",
      learnMoreUrl: "#"
    },
    {
      id: 'people-efficiency',
      title: "People Management Efficiency",
      description: "Analyze people movement patterns, transfer frequencies, and management efficiency. Optimize your people operations to reduce costs and improve profitability across all businesses.",
      learnMoreUrl: "#"
    },
    {
      id: 'roi-optimization',
      title: "ROI & Performance Optimization",
      description: "Track return on investment across multiple businesses and buildings. Identify high-performing locations and optimize underperforming areas with data-driven insights and recommendations.",
      learnMoreUrl: "#"
    },
    {
      id: 'strategic-planning',
      title: "Strategic Business Planning",
      description: "Use comprehensive analytics to plan business expansion, optimize operations, and make strategic decisions. Identify growth opportunities and optimize resource allocation across your business portfolio.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Business Analysis",
      description: "Input your business details including locations, business types, people management operations, and current rate structures for comprehensive performance analysis."
    },
    {
      step: 2,
      title: "Performance Assessment",
      description: "Our system analyzes your business performance, people management efficiency, transfer patterns, and financial metrics to identify optimization opportunities."
    },
    {
      step: 3,
      title: "Generate Insights",
      description: "Receive detailed rentability reports with rate optimization recommendations, people management insights, and strategic planning guidance for your businesses."
    },
    {
      step: 4,
      title: "Implement & Track",
      description: "Apply recommended strategies, optimize your rates and operations, and track performance improvements across all your businesses and locations."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaArrowUp className="text-primary-600 text-xl" />,
      title: "Increased Business Profitability",
      description: "Optimize your rates, people management, and operations based on data-driven insights to maximize profitability across all your businesses and locations."
    },
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Complete Business Intelligence",
      description: "Gain comprehensive insights into your business operations, people management efficiency, and market positioning to make informed strategic decisions."
    },
    {
      icon: <FaDollarSign className="text-primary-600 text-xl" />,
      title: "Better Resource Allocation",
      description: "Optimize resource allocation across multiple businesses and buildings based on performance data and market intelligence for maximum return on investment."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Business Performance & Rentability Analysis"
        brandIcon={<FaChartLine className="text-white text-sm" />}
        brandText="Smar8 Rentability"
        headline="Maximize Your Business Performance with Data-Driven Insights"
        subheadline="Get comprehensive business performance analysis and optimization insights to improve your people management, optimize rates, and maximize profitability across all your businesses and locations."
        ctaText="Get Your Business Analysis"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Data-Driven Business Optimization & Performance Intelligence"
        subheadline="From comprehensive business analysis to strategic optimization recommendations, Smar8 provides everything you need to maximize your business performance and stay competitive in your markets."
        ctaText="Explore Business Intelligence Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Business Performance Analysis Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Rentability Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Business Performance Optimization"
        description="Our platform provides comprehensive tools to analyze business performance, optimize people management, and maximize profitability through data-driven insights and strategic recommendations."
        features={rentabilityFeatures}
        imageSrc={dummyImage}
        imageAlt="Business Performance Analysis Features"
        defaultActiveFeature="business-performance"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Business Performance Analysis Works"
        subtitle="Simple steps to optimize your business operations and maximize profitability with data-driven insights"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Business Performance Analysis"
        subtitle="Transform your business operations with performance intelligence that increases profitability and improves efficiency"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Optimize Your Business Performance?"
        description="Join thousands of business owners who trust Smar8 to provide performance intelligence and optimization insights. Start maximizing your business profitability today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default RentabilityReport
