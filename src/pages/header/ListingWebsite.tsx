import Hero from '../../components/commen/Hero'
import { FaGlobe, FaSearch, FaShieldAlt, FaCreditCard, FaMobile, FaEye, FaUsers } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const ListingWebsite = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaGlobe className="text-secondary-800 text-2xl" />,
      title: "Professional property listing websites with custom branding"
    },
    {
      icon: <FaSearch className="text-secondary-800 text-2xl" />,
      title: "Advanced search and filtering capabilities"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure tenant applications and document management"
    },
    {
      icon: <FaCreditCard className="text-secondary-800 text-2xl" />,
      title: "Integrated payment processing and rent collection"
    }
  ];

  // Website features for FeatureAccordion
  const websiteFeatures = [
    {
      id: 'custom-branding',
      title: "Custom Branding & Design",
      description: "Create professional property listing websites that match your brand identity. Custom colors, logos, and design elements to showcase your properties professionally.",
      learnMoreUrl: "#"
    },
    {
      id: 'advanced-search',
      title: "Advanced Search & Filtering",
      description: "Help potential tenants find their perfect home with powerful search filters including location, price, bedrooms, amenities, and more. Mobile-responsive design for on-the-go searching.",
      learnMoreUrl: "#"
    },
    {
      id: 'property-showcase',
      title: "Property Showcase Tools",
      description: "Display properties with high-quality photos, virtual tours, floor plans, and detailed descriptions. Highlight unique features and amenities to attract quality tenants.",
      learnMoreUrl: "#"
    },
    {
      id: 'tenant-applications',
      title: "Integrated Tenant Applications",
      description: "Streamline the application process with built-in forms, document uploads, and background check integration. Collect all necessary information in one place.",
      learnMoreUrl: "#"
    },
    {
      id: 'lead-management',
      title: "Lead Management & CRM",
      description: "Track and manage all inquiries and applications through our integrated CRM system. Follow up with prospects and convert leads into tenants efficiently.",
      learnMoreUrl: "#"
    },
    {
      id: 'analytics-insights',
      title: "Analytics & Performance Insights",
      description: "Monitor website performance, track visitor behavior, and analyze conversion rates. Optimize your listings based on real data and insights.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Design Your Website",
      description: "Choose from professional templates and customize with your branding, colors, and design preferences to create a unique property showcase."
    },
    {
      step: 2,
      title: "Add Your Properties",
      description: "Upload property photos, descriptions, and details. Set pricing, availability, and highlight unique features to attract potential tenants."
    },
    {
      step: 3,
      title: "Launch & Market",
      description: "Publish your website and start marketing to potential tenants. Share on social media, email campaigns, and other marketing channels."
    },
    {
      step: 4,
      title: "Manage & Convert",
      description: "Track inquiries, manage applications, and convert leads into tenants. Use analytics to optimize your listings and improve performance."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Professional Image",
      description: "Present your properties professionally with custom-branded websites that build trust and attract quality tenants to your listings."
    },
    {
      icon: <FaUsers className="text-primary-600 text-xl" />,
      title: "More Qualified Leads",
      description: "Attract better-qualified tenants with detailed property information, virtual tours, and professional presentation that showcases your properties effectively."
    },
    {
      icon: <FaMobile className="text-primary-600 text-xl" />,
      title: "Mobile-First Experience",
      description: "Provide an excellent mobile experience for tenants searching on smartphones and tablets, increasing engagement and conversion rates."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Professional Property Listing Websites"
        brandIcon={<FaGlobe className="text-white text-sm" />}
        brandText="Smar8 Websites"
        headline="Create Professional Property Listing Websites"
        subheadline="Build custom-branded property websites that showcase your listings professionally. Attract quality tenants with beautiful designs, advanced search, and integrated applications."
        ctaText="Build Your Website"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Professional Property Websites That Convert Visitors to Tenants"
        subheadline="From custom branding to integrated applications, our platform provides everything you need to create professional property websites that attract quality tenants and streamline the rental process."
        ctaText="Start Building Today"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Property Listing Website Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Website Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Professional Property Websites"
        description="Our platform provides comprehensive tools to create beautiful, functional property websites that showcase your listings and convert visitors into qualified tenants."
        features={websiteFeatures}
        imageSrc={dummyImage}
        imageAlt="Property Website Features"
        defaultActiveFeature="custom-branding"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Property Websites Work"
        subtitle="Simple steps to create professional property websites that attract and convert quality tenants"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Property Websites"
        subtitle="Transform your property marketing with professional websites that build trust and attract quality tenants"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Build Your Professional Property Website?"
        description="Join thousands of property managers who use Smar8 to create beautiful, functional websites that showcase their properties and attract quality tenants."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default ListingWebsite
