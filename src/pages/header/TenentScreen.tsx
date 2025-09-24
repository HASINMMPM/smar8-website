
import Hero from '../../components/commen/Hero'
import { FaSearch,  FaBuilding, FaShieldAlt, FaCreditCard, FaChartBar } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import BackgroundChecks from '../../components/tenentScreen/BackgroundChecks'
import FAQ from '../../components/tenentScreen/FAQ'
import Cta from '../../components/commen/Cta'
import dummyImage from '../../assets/dummy.jpg'

const TenentScreen = () => {
  // Features array for the Hero component - updated for Smar8 Business context
  const features = [
    {
      icon: <FaBuilding className="text-secondary-800 text-2xl" />,
      title: "Screen tenants across multiple business locations"
    },
    {
      icon: <FaSearch className="text-secondary-800 text-2xl" />,
      title: "Comprehensive background checks with 99.9% accuracy"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure screening with encrypted data protection"
    },
    {
      icon: <FaCreditCard className="text-secondary-800 text-2xl" />,
      title: "Integrated payment collection for screening fees"
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 Business - Tenant Screening"
        brandIcon={<FaSearch className="text-white text-sm" />}
        brandText="Smar8 Business"
        headline="Professional Tenant Screening for Business Owners"
        subheadline="Conduct comprehensive background checks, credit screenings, and identity verification for your business tenants. Make informed decisions with our 99.9% accurate screening system."
        ctaText="Start Screening Tenants"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      <Banner
        headline="Complete Tenant Screening Platform"
        subheadline="From application to approval, Smar8 Business provides comprehensive tenant screening tools designed for Business Owners managing multiple properties and businesses."
        ctaText="Get Started with Smar8 Business"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Smar8 Business Tenant Screening Dashboard"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      <BackgroundChecks/>
      <FAQ/>
      
      {/* Business Owner Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Business Owners Choose Smar8 for Tenant Screening
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed specifically for Business Owners who need reliable tenant screening across multiple locations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaBuilding className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Business Management</h3>
              <p className="text-gray-600">
                Screen tenants across multiple businesses and locations from a centralized dashboard with role-based access control.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaShieldAlt className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security & Compliance</h3>
              <p className="text-gray-600">
                Ensure FCRA compliance and data security with encrypted storage and built-in compliance tools.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaChartBar className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Reporting</h3>
              <p className="text-gray-600">
                Get detailed screening reports, analytics, and insights to make informed tenant decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Cta
        heading="Ready to streamline your tenant screening process?"
        description="Join Smar8 Business and take control of your tenant screening operations. Conduct comprehensive background checks, maintain compliance, and make informed decisions across all your businesses."
        buttonText="Start Screening Today"
        buttonUrl="/#"
      />
    </div>
  )
}

export default TenentScreen