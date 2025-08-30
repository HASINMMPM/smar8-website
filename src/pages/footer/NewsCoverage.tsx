import Hero from '../../components/commen/Hero'
import { FaNewspaper, FaGlobe, FaAward, FaChartLine, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const NewsCoverage = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaNewspaper className="text-secondary-800 text-2xl" />,
      title: "Featured in leading industry publications"
    },
    {
      icon: <FaGlobe className="text-secondary-800 text-2xl" />,
      title: "Global recognition and media coverage"
    },
    {
      icon: <FaAward className="text-secondary-800 text-2xl" />,
      title: "Awards and industry accolades"
    },
    {
      icon: <FaChartLine className="text-secondary-800 text-2xl" />,
      title: "Growth and success stories"
    }
  ];

  // News coverage features for FeatureAccordion
  const newsFeatures = [
    {
      id: 'media-features',
      title: "Media Features",
      description: "Discover how Smar8 has been featured in leading real estate and technology publications worldwide.",
      learnMoreUrl: "#"
    },
    {
      id: 'industry-recognition',
      title: "Industry Recognition",
      description: "Learn about the awards, honors, and recognition Smar8 has received from industry leaders and organizations.",
      learnMoreUrl: "#"
    },
    {
      id: 'success-stories',
      title: "Success Stories",
      description: "Read about the success stories and case studies that showcase Smar8's impact on real estate investors.",
      learnMoreUrl: "#"
    },
    {
      id: 'press-releases',
      title: "Press Releases",
      description: "Stay updated with our latest company news, product launches, and strategic announcements.",
      learnMoreUrl: "#"
    },
    {
      id: 'expert-insights',
      title: "Expert Insights",
      description: "Access expert commentary and insights from Smar8 leadership on industry trends and developments.",
      learnMoreUrl: "#"
    },
    {
      id: 'media-resources',
      title: "Media Resources",
      description: "Find press kits, company information, and media contacts for journalists and media professionals.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Browse Coverage",
      description: "Explore our comprehensive collection of media coverage, press releases, and industry recognition."
    },
    {
      step: 2,
      title: "Read Stories",
      description: "Dive deep into success stories, case studies, and expert insights from our team and customers."
    },
    {
      step: 3,
      title: "Stay Updated",
      description: "Subscribe to our press releases and media updates to stay informed about company developments."
    },
    {
      step: 4,
      title: "Share & Connect",
      description: "Share our stories and connect with us for media inquiries and partnership opportunities."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Industry Credibility",
      description: "Build trust and credibility through our extensive media coverage and industry recognition."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Success Validation",
      description: "Validate our platform's success through real customer stories and industry accolades."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Media Resources",
      description: "Access comprehensive media resources and press materials for your own communications."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - News Coverage & Media"
        brandIcon={<FaNewspaper className="text-white text-sm" />}
        brandText="Smar8 Media"
        headline="Smar8 in the News & Industry Recognition"
        subheadline="Discover how Smar8 is making headlines in the real estate industry. From media features to industry awards, see how we're transforming property management."
        ctaText="Explore Coverage"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Media Coverage & Industry Recognition"
        subheadline="From press releases to success stories, discover how Smar8 is being recognized and featured across the real estate and technology industries."
        ctaText="Browse Media Coverage"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Media Coverage Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* News Coverage Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need to Know About Smar8"
        description="Our comprehensive media coverage provides insights into our company, platform, and the impact we're making in real estate property management."
        features={newsFeatures}
        imageSrc={dummyImage}
        imageAlt="News Coverage Features"
        defaultActiveFeature="media-features"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How to Navigate Our Media Coverage"
        subtitle="Simple steps to explore our news coverage and stay updated with company developments"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Our Media Coverage"
        subtitle="Transform your understanding of Smar8 through comprehensive media coverage and industry recognition"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Explore Smar8's Media Coverage?"
        description="Join thousands of readers who stay informed about Smar8's latest developments and industry recognition. Start exploring our media coverage today."
        buttonText="Browse Coverage Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default NewsCoverage
