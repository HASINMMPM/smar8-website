import Hero from '../../components/commen/Hero'
import { FaChartBar, FaFileAlt, FaShieldAlt, FaCreditCard, FaDownload, FaEye, FaUserTie } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const RentReporting = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Comprehensive rent collection analytics and reporting"
    },
    {
      icon: <FaFileAlt className="text-secondary-800 text-2xl" />,
      title: "Automated report generation and distribution"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure data handling and compliance reporting"
    },
    {
      icon: <FaCreditCard className="text-secondary-800 text-2xl" />,
      title: "Real-time payment tracking and financial insights"
    }
  ];

  // Rent reporting features for FeatureAccordion
  const reportingFeatures = [
    {
      id: 'automated-reports',
      title: "Automated Report Generation",
      description: "Generate comprehensive rent collection reports automatically. Schedule daily, weekly, monthly, and annual reports with customizable templates and branding.",
      learnMoreUrl: "#"
    },
    {
      id: 'real-time-analytics',
      title: "Real-Time Analytics Dashboard",
      description: "Monitor rent collection performance in real-time with interactive charts, graphs, and KPIs. Track occupancy rates, payment trends, and financial metrics.",
      learnMoreUrl: "#"
    },
    {
      id: 'compliance-reporting',
      title: "Compliance & Regulatory Reporting",
      description: "Generate reports for tax purposes, accounting, and regulatory compliance. Export data in multiple formats for seamless integration with existing systems.",
      learnMoreUrl: "#"
    },
    {
      id: 'tenant-performance',
      title: "Tenant Performance Tracking",
      description: "Track individual tenant payment history, late payments, and overall performance. Identify patterns and take proactive measures to improve collections.",
      learnMoreUrl: "#"
    },
    {
      id: 'custom-alerts',
      title: "Custom Alerts & Notifications",
      description: "Set up automated alerts for late payments, occupancy changes, and financial milestones. Stay informed about critical issues and opportunities.",
      learnMoreUrl: "#"
    },
    {
      id: 'data-export',
      title: "Flexible Data Export",
      description: "Export reports in PDF, Excel, CSV, and other formats. Integrate with accounting software, property management systems, and business intelligence tools.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Data Collection",
      description: "Automatically collect rent payment data, occupancy information, and financial transactions from your properties in real-time."
    },
    {
      step: 2,
      title: "Analysis & Processing",
      description: "Our AI processes the data to identify trends, patterns, and insights that help optimize your rental operations."
    },
    {
      step: 3,
      title: "Report Generation",
      description: "Generate customized reports automatically based on your schedule and requirements. Include charts, graphs, and actionable insights."
    },
    {
      step: 4,
      title: "Distribution & Action",
      description: "Share reports with stakeholders, export data for external systems, and take action based on the insights provided."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Complete Visibility",
      description: "Get complete visibility into your rental operations with real-time dashboards and comprehensive reporting across all properties."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Time Savings",
      description: "Automate report generation and distribution, saving hours of manual work while ensuring accuracy and consistency."
    },
    {
      icon: <FaUserTie className="text-primary-600 text-xl" />,
      title: "Better Decision Making",
      description: "Make informed decisions with data-driven insights, trend analysis, and predictive analytics for your rental business."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Rent Reporting & Analytics"
        brandIcon={<FaChartBar className="text-white text-sm" />}
        brandText="Smar8 Analytics"
        headline="Transform Your Rent Collection with Smart Reporting"
        subheadline="Get comprehensive insights into your rental operations with automated reporting, real-time analytics, and actionable data that drives better business decisions."
        ctaText="Start Reporting Today"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Comprehensive Rent Collection Analytics & Reporting"
        subheadline="From automated report generation to real-time dashboards, Smar8 provides everything you need to understand your rental performance, improve collections, and optimize your business operations."
        ctaText="Explore Analytics Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Rent Reporting Analytics Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Reporting Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Comprehensive Rent Reporting"
        description="Our platform provides powerful analytics, automated reporting, and actionable insights to help you optimize your rental operations and maximize revenue."
        features={reportingFeatures}
        imageSrc={dummyImage}
        imageAlt="Rent Reporting Features"
        defaultActiveFeature="automated-reports"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Rent Reporting Works"
        subtitle="Simple steps to transform your rental data into actionable insights and comprehensive reports"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Rent Reporting"
        subtitle="Transform your rental business with data-driven insights and automated reporting that saves time and improves performance"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Transform Your Rent Reporting?"
        description="Join thousands of property managers who trust Smar8 to provide comprehensive insights into their rental operations. Start making data-driven decisions today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default RentReporting
