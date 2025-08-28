
import Hero from '../../components/commen/Hero'
import { FaPlus, FaSearch,  FaBuilding, FaShieldAlt, FaCreditCard, FaChartBar } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'

const mainFeatures = [
  {
    id: 'applications',
    title: "Streamlined Application Management",
    description: "Manage rental applications efficiently with our comprehensive system. Track applicants, review documents, and make informed decisions with detailed applicant profiles and screening results.",
    learnMoreUrl: "#"
  },
  {
    id: 'screening',
    title: "Integrated Background Checks",
    description: "Run comprehensive background checks directly from applications. Get instant results for credit history, criminal records, eviction history, and identity verification—all in one place.",
    learnMoreUrl: "#"
  },
  {
    id: 'compliance',
    title: "FCRA-Compliant Screening Process",
    description: "Stay compliant with fair housing laws and FCRA regulations. Our system includes built-in disclosures, permissions, and adverse action letters to protect your business.",
    learnMoreUrl: "#"
  }
];

const RentelApplication = () => {
  // Features array for the Hero component - updated for Smar8 Business context
  const features = [
    {
      icon: <FaBuilding className="text-secondary-800 text-2xl" />,
      title: "Manage applications across multiple business locations"
    },
    {
      icon: <FaSearch className="text-secondary-800 text-2xl" />,
      title: "Comprehensive background checks with instant results"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure document storage and encrypted data handling"
    },
    {
      icon: <FaCreditCard className="text-secondary-800 text-2xl" />,
      title: "Integrated payment collection and financial tracking"
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 Business - Rental Applications"
        brandIcon={<FaPlus className="text-white text-sm" />}
        brandText="Smar8 Business"
        headline="Streamline Your Rental Application Process"
        subheadline="As a Business Owner, efficiently manage rental applications, conduct comprehensive tenant screening, and streamline your leasing operations across multiple locations with Smar8 Business."
        ctaText="Start Managing Applications"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      <Banner
        headline="Complete Application Management Platform"
        subheadline="From initial application to final approval, Smar8 Business handles every step of the rental process. Manage multiple businesses, track applicants, and maintain compliance across all your locations."
        ctaText="Get Started with Smar8 Business"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Smar8 Business Application Management"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
     
     <FeatureAccordion
      title="Comprehensive Rental Application Management"
      description="Streamline your rental application process with our integrated platform designed specifically for Business Owners managing multiple properties and businesses."
      features={mainFeatures}
      imageSrc={dummyImage}
      imageAlt="Rental Application Management Features"
      defaultActiveFeature="applications"
    />

      {/* Additional Business Management Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Smar8 Business for Applications?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed specifically for Business Owners who need to manage multiple businesses and locations efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaBuilding className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Business Support</h3>
              <p className="text-gray-600">
                Manage rental applications across multiple businesses and locations from a single dashboard.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaShieldAlt className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security & Compliance</h3>
              <p className="text-gray-600">
                Ensure data security with encrypted storage and maintain compliance with industry regulations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaChartBar className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Reporting</h3>
              <p className="text-gray-600">
                Get insights into application trends, screening results, and business performance metrics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RentelApplication