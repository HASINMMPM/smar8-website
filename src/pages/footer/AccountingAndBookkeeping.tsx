import Hero from '../../components/commen/Hero'
import { FaCalculator, FaChartLine, FaFileInvoiceDollar, FaShieldAlt, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const AccountingAndBookkeeping = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaCalculator className="text-secondary-800 text-2xl" />,
      title: "Automated expense tracking and categorization"
    },
    {
      icon: <FaChartLine className="text-secondary-800 text-2xl" />,
      title: "Comprehensive financial reporting and analysis"
    },
    {
      icon: <FaFileInvoiceDollar className="text-secondary-800 text-2xl" />,
      title: "Tax optimization and compliance management"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure financial data and audit trails"
    }
  ];

  // Accounting features for FeatureAccordion
  const accountingFeatures = [
    {
      id: 'expense-tracking',
      title: "Automated Expense Tracking",
      description: "Automatically categorize and track all property-related expenses for tax optimization. Our system identifies deductible items and maintains detailed records for compliance.",
      learnMoreUrl: "#"
    },
    {
      id: 'financial-reporting',
      title: "Comprehensive Financial Reporting",
      description: "Generate detailed financial reports including P&L statements, cash flow analysis, and tax summaries. Get real-time insights into your property portfolio performance.",
      learnMoreUrl: "#"
    },
    {
      id: 'tax-optimization',
      title: "Tax Optimization & Planning",
      description: "Maximize deductions and ensure compliance with real estate tax regulations. Our experts help you navigate complex tax requirements and optimize your tax position.",
      learnMoreUrl: "#"
    },
    {
      id: 'bank-reconciliation',
      title: "Automated Bank Reconciliation",
      description: "Streamline bank reconciliation with automated matching and error detection. Maintain accurate financial records with minimal manual effort.",
      learnMoreUrl: "#"
    },
    {
      id: 'compliance-management',
      title: "Regulatory Compliance",
      description: "Stay compliant with all regulatory requirements including audit preparation, financial disclosures, and record keeping standards.",
      learnMoreUrl: "#"
    },
    {
      id: 'cash-flow-analysis',
      title: "Cash Flow Analysis",
      description: "Monitor and analyze cash flow patterns to make informed investment decisions. Identify opportunities for optimization and risk mitigation.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Data Collection",
      description: "Automatically collect financial data from all your properties, including income, expenses, and transactions through our integrated platform."
    },
    {
      step: 2,
      title: "Categorization & Analysis",
      description: "Our system categorizes transactions, identifies deductible items, and generates comprehensive financial reports for your review."
    },
    {
      step: 3,
      title: "Expert Review",
      description: "Our accounting experts review your financial data, optimize tax positions, and ensure compliance with all regulatory requirements."
    },
    {
      step: 4,
      title: "Reporting & Insights",
      description: "Receive detailed financial reports, tax summaries, and actionable insights to optimize your real estate investment strategy."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Real Estate Expertise",
      description: "Our team specializes in real estate accounting, understanding the unique challenges and opportunities in property investment."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Technology-Driven",
      description: "Advanced software and automation ensure accuracy, efficiency, and real-time access to your financial data."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Tax Optimization",
      description: "Maximize your deductions and minimize tax liability with our strategic tax planning and preparation services."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Accounting & Bookkeeping Services"
        brandIcon={<FaCalculator className="text-white text-sm" />}
        brandText="Smar8 Accounting"
        headline="Professional Accounting & Bookkeeping for Real Estate Investors"
        subheadline="Maximize tax benefits, maintain compliance, and gain financial insights with our comprehensive accounting and bookkeeping services designed specifically for real estate investors."
        ctaText="Get Started Today"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Accounting Solution for Smar8 Business Owners"
        subheadline="From automated expense tracking to tax optimization, Smar8 provides everything you need to manage your real estate finances professionally and efficiently."
        ctaText="Explore Accounting Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Accounting Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Accounting Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Professional Financial Management"
        description="Our platform provides comprehensive tools to automate expense tracking, generate financial reports, optimize taxes, and maintain compliance across all your properties."
        features={accountingFeatures}
        imageSrc={dummyImage}
        imageAlt="Accounting Features"
        defaultActiveFeature="expense-tracking"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Accounting Works"
        subtitle="Simple steps to professional financial management and tax optimization"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Accounting"
        subtitle="Transform your financial management with professional accounting services and real estate expertise"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Optimize Your Finances?"
        description="Join thousands of real estate investors who trust Smar8 to handle their accounting professionally. Let our expert team manage your finances while you focus on growing your portfolio."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default AccountingAndBookkeeping
