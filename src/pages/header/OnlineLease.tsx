
import Hero from '../../components/commen/Hero'
import { FaFileAlt, FaChartBar, FaBuilding, FaUsers, FaShieldAlt, FaCreditCard } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import Cta from '../../components/commen/Cta'

const OnlineLease = () => {
  // Features array for the Hero component - updated for Smar8 Business context
  const features = [
    {
      icon: <FaBuilding className="text-secondary-800 text-2xl" />,
      title: "Manage multiple businesses across different buildings"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Add, remove, and transfer people between businesses"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure lease management with encrypted document storage"
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
        imageAlt="Smar8 Business - Online Lease Management"
        brandIcon={<FaFileAlt className="text-white text-sm" />}
        brandText="Smar8 Business"
        headline="Streamline Your Business Operations with Smart Lease Management"
        subheadline="As a Business Owner, efficiently manage your leased spaces, handle tenant agreements, and streamline operations across multiple buildings. Smar8 Business gives you complete control over your business portfolio."
        ctaText="Start Managing Your Businesses"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      <Banner
        headline="Complete Business Management Platform"
        subheadline="From lease creation to tenant management, Smar8 Business handles everything you need to operate multiple businesses efficiently. Manage people, track payments, and maintain compliance across all your locations."
        ctaText="Get Started with Smar8 Business"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Smar8 Business Management Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Business Management Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Your Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smar8 Business provides comprehensive tools for Business Owners to manage their operations, tenants, and financials across multiple buildings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaBuilding className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Building Operations</h3>
              <p className="text-gray-600">
                Operate businesses across different buildings with centralized management. Track performance, occupancy, and financials for each location.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaUsers className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">People Management</h3>
              <p className="text-gray-600">
                Add, remove, and transfer people between your businesses. Manage staff, tenants, and business relationships with ease.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaCreditCard className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Control</h3>
              <p className="text-gray-600">
                Track payments, manage rent collection, and maintain financial records. Generate reports and insights for better decision-making.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaFileAlt className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Document Management</h3>
              <p className="text-gray-600">
                Store and manage all business documents securely. Access lease agreements, contracts, and compliance documents from anywhere.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaShieldAlt className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Security & Compliance</h3>
              <p className="text-gray-600">
                Ensure data security with encrypted storage and role-based access control. Maintain compliance with industry standards and regulations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaChartBar className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Reporting</h3>
              <p className="text-gray-600">
                Get insights into your business performance with comprehensive analytics. Track occupancy rates, revenue trends, and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Smar8 Business Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to get your businesses running efficiently with Smar8
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Register Your Businesses</h3>
              <p className="text-gray-600">
                Add your businesses to the Smar8 platform. Specify building locations, business types, and operational details.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Manage People & Operations</h3>
              <p className="text-gray-600">
                Add staff, manage tenants, and handle day-to-day operations. Transfer people between businesses as needed.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Track & Optimize</h3>
              <p className="text-gray-600">
                Monitor performance, track payments, and optimize operations across all your business locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Cta
        heading="Ready to Transform Your Business Management?"
        description="Join Smar8 Business and take control of your multi-location operations. Streamline lease management, people operations, and financial tracking across all your businesses."
        buttonText="Start with Smar8 Business"
        buttonUrl="/contact"
      />
    </div>
  )
}

export default OnlineLease