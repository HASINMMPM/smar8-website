import Hero from '../../components/commen/Hero'
import { FaFileAlt, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaCog } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const Reports = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaFileAlt className="text-secondary-800 text-2xl" />,
      title: "Role-based reporting with unified identity system"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Multi-level business analytics and performance insights"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure data handling with role-based content visibility"
    },
    {
      icon: <FaDownload className="text-secondary-800 text-2xl" />,
      title: "Multiple export formats and automated scheduling"
    }
  ];

  // Reports features for FeatureAccordion
  const reportsFeatures = [
    {
      id: 'role-based-reports',
      title: "Role-Based Report Generation",
      description: "Generate reports tailored to your specific role in the Smar8 system. Business Owners see business-level data, Building Owners see building-level data, with complete data isolation and security.",
      learnMoreUrl: "#"
    },
    {
      id: 'business-owner-reports',
      title: "Business Owner Analytics",
      description: "Track business performance, people management, transfer charges, and financial operations across multiple businesses and buildings. Monitor income, expenses, and people movement patterns.",
      learnMoreUrl: "#"
    },
    {
      id: 'building-owner-reports',
      title: "Building Owner Analytics",
      description: "Monitor building performance, business occupancy, rent collection, and staff management. Track income from business owners and manage building-level expenses and operations.",
      learnMoreUrl: "#"
    },
    {
      id: 'people-management-reports',
      title: "People Management Reports",
      description: "Track people additions (40 charges), removals (25 charges), and transfers between businesses and rooms. Monitor people movement patterns and generate comprehensive people analytics.",
      learnMoreUrl: "#"
    },
    {
      id: 'financial-performance-reports',
      title: "Financial Performance Reports",
      description: "Generate comprehensive financial reports including income tracking, expense management, transfer charge reconciliation, and multi-level payment flow analysis across the business hierarchy.",
      learnMoreUrl: "#"
    },
    {
      id: 'compliance-audit-reports',
      title: "Compliance & Audit Reports",
      description: "Generate reports for regulatory compliance, audit requirements, and financial transparency. Maintain complete audit trails for all operations and role transitions.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Role Identification",
      description: "Our system automatically identifies your role (Business Owner, Building Owner, or Person) and provides access to relevant reporting capabilities and data."
    },
    {
      step: 2,
      title: "Data Collection & Filtering",
      description: "Collect and filter data based on your role and permissions. Business Owners see business-level data, Building Owners see building-level data, with complete data isolation."
    },
    {
      step: 3,
      title: "Report Generation",
      description: "Generate role-specific reports with real-time data, interactive charts, and comprehensive analytics tailored to your business needs and operational requirements."
    },
    {
      step: 4,
      title: "Export & Share",
      description: "Export reports in multiple formats (PDF, Excel, CSV), schedule automated delivery, and share insights with your team while maintaining role-based data security."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Role-Based Visibility",
      description: "Get comprehensive insights relevant to your specific role in the Smar8 system with complete data isolation and security across all business levels."
    },
    {
      icon: <FaCog className="text-primary-600 text-xl" />,
      title: "Customizable Solutions",
      description: "Create reports that match your specific business needs with flexible customization options and role-based filtering capabilities."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Easy Export & Sharing",
      description: "Export reports in multiple formats, schedule automated delivery, and share insights easily while maintaining role-based data security."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Role-Based Reports & Analytics"
        brandIcon={<FaFileAlt className="text-white text-sm" />}
        brandText="Smar8 Reports"
        headline="Role-Based Reports & Analytics for Smar8"
        subheadline="Generate comprehensive reports tailored to your role in the Smar8 system. Get business insights, track performance metrics, and make data-driven decisions with our powerful role-based reporting platform."
        ctaText="Start Creating Reports"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Role-Based Reporting Solution for Smar8"
        subheadline="From role-specific analytics to comprehensive business intelligence, Smar8 provides everything you need to understand your business performance and make informed decisions based on your role and permissions."
        ctaText="Explore Reporting Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Role-Based Reports Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Reports Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Comprehensive Role-Based Business Reporting"
        description="Our platform provides powerful tools to create role-specific reports, analyze performance data, and gain valuable insights into all aspects of your Smar8 business operations."
        features={reportsFeatures}
        imageSrc={dummyImage}
        imageAlt="Role-Based Reports Features"
        defaultActiveFeature="role-based-reports"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Role-Based Reports Work"
        subtitle="Simple steps to create comprehensive reports tailored to your role and business needs"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Role-Based Reports"
        subtitle="Transform your business intelligence with role-specific reporting that provides the insights you need to succeed"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Create Role-Based Reports for Your Business?"
        description="Join thousands of Smar8 users who trust our platform to provide comprehensive insights into their business operations. Start making data-driven decisions today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default Reports
