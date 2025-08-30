import Hero from '../../components/commen/Hero'
import { FaCalculator, FaChartLine, FaHome, FaDollarSign, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const RentalCalculator = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaCalculator className="text-secondary-800 text-2xl" />,
      title: "Accurate rental property calculations"
    },
    {
      icon: <FaChartLine className="text-secondary-800 text-2xl" />,
      title: "ROI and cash flow analysis"
    },
    {
      icon: <FaHome className="text-secondary-800 text-2xl" />,
      title: "Property investment evaluation tools"
    },
    {
      icon: <FaDollarSign className="text-secondary-800 text-2xl" />,
      title: "Comprehensive financial modeling"
    }
  ];

  // Calculator features for FeatureAccordion
  const calculatorFeatures = [
    {
      id: 'roi-calculator',
      title: "ROI Calculator",
      description: "Calculate return on investment for rental properties including appreciation, cash flow, and tax benefits.",
      learnMoreUrl: "#"
    },
    {
      id: 'cash-flow-analyzer',
      title: "Cash Flow Analyzer",
      description: "Analyze monthly and annual cash flow to determine property profitability and investment viability.",
      learnMoreUrl: "#"
    },
    {
      id: 'rental-rate-estimator',
      title: "Rental Rate Estimator",
      description: "Estimate optimal rental rates based on market data, property features, and location analysis.",
      learnMoreUrl: "#"
    },
    {
      id: 'mortgage-calculator',
      title: "Mortgage Calculator",
      description: "Calculate monthly mortgage payments, interest costs, and amortization schedules.",
      learnMoreUrl: "#"
    },
    {
      id: 'expense-tracker',
      title: "Expense Tracker",
      description: "Track and categorize property expenses to maintain accurate financial records.",
      learnMoreUrl: "#"
    },
    {
      id: 'comparison-tools',
      title: "Comparison Tools",
      description: "Compare multiple properties side-by-side to make informed investment decisions.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Input Property Details",
      description: "Enter property information including purchase price, rental income, and operating expenses."
    },
    {
      step: 2,
      title: "Run Calculations",
      description: "Use our advanced algorithms to calculate ROI, cash flow, and investment metrics."
    },
    {
      step: 3,
      title: "Analyze Results",
      description: "Review detailed reports and analysis to evaluate investment potential and risks."
    },
    {
      step: 4,
      title: "Make Decisions",
      description: "Use calculated insights to make informed decisions about property investments."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Investment Clarity",
      description: "Get clear insights into property investment potential with accurate calculations and analysis."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Risk Assessment",
      description: "Assess investment risks and opportunities with comprehensive financial modeling tools."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Data-Driven Decisions",
      description: "Make informed investment decisions based on solid financial data and analysis."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Rental Property Calculator"
        brandIcon={<FaCalculator className="text-white text-sm" />}
        brandText="Smar8 Calculator"
        headline="Rental Property Investment Calculator"
        subheadline="Make informed investment decisions with our comprehensive rental property calculator. Analyze ROI, cash flow, and investment potential with accurate calculations and insights."
        ctaText="Start Calculating"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Investment Analysis Solution for Real Estate Investors"
        subheadline="From ROI calculations to cash flow analysis, Smar8 provides comprehensive tools to evaluate rental property investments and maximize returns."
        ctaText="Explore Calculator Tools"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Calculator Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Calculator Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Investment Analysis"
        description="Our comprehensive calculator suite provides all the tools you need to analyze rental property investments and make informed decisions."
        features={calculatorFeatures}
        imageSrc={dummyImage}
        imageAlt="Calculator Features"
        defaultActiveFeature="roi-calculator"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Rental Calculator Works"
        subtitle="Simple steps to comprehensive investment analysis and decision making"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Rental Calculator"
        subtitle="Transform your investment analysis with accurate calculations and comprehensive insights"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Analyze Your Investment Potential?"
        description="Join thousands of investors who trust Smar8 calculators for their investment analysis. Start calculating today and make informed property investment decisions."
        buttonText="Start Calculating Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default RentalCalculator
