import Hero from '../../components/commen/Hero'
import { FaBriefcase, FaUsers, FaRocket, FaHeart, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const Careers = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaBriefcase className="text-secondary-800 text-2xl" />,
      title: "Exciting career opportunities in real estate tech"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Collaborative and inclusive work environment"
    },
    {
      icon: <FaRocket className="text-secondary-800 text-2xl" />,
      title: "Fast-paced growth and learning opportunities"
    },
    {
      icon: <FaHeart className="text-secondary-800 text-2xl" />,
      title: "Mission-driven company culture"
    }
  ];

  // Career features for FeatureAccordion
  const careerFeatures = [
    {
      id: 'job-opportunities',
      title: "Job Opportunities",
      description: "Explore exciting career opportunities across engineering, sales, marketing, and operations teams.",
      learnMoreUrl: "#"
    },
    {
      id: 'company-culture',
      title: "Company Culture",
      description: "Discover our collaborative, inclusive culture that values innovation, growth, and work-life balance.",
      learnMoreUrl: "#"
    },
    {
      id: 'growth-development',
      title: "Growth & Development",
      description: "Access continuous learning opportunities, mentorship programs, and career advancement paths.",
      learnMoreUrl: "#"
    },
    {
      id: 'benefits-perks',
      title: "Benefits & Perks",
      description: "Enjoy competitive compensation, health benefits, flexible work arrangements, and team events.",
      learnMoreUrl: "#"
    },
    {
      id: 'diversity-inclusion',
      title: "Diversity & Inclusion",
      description: "Join a diverse team where different perspectives are valued and everyone feels welcome.",
      learnMoreUrl: "#"
    },
    {
      id: 'remote-work',
      title: "Remote Work Options",
      description: "Work from anywhere with our flexible remote work policies and digital collaboration tools.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Browse Positions",
      description: "Explore our open positions and find opportunities that match your skills and career goals."
    },
    {
      step: 2,
      title: "Apply Online",
      description: "Submit your application through our streamlined online application process."
    },
    {
      step: 3,
      title: "Interview Process",
      description: "Participate in our comprehensive interview process to assess mutual fit and potential."
    },
    {
      step: 4,
      title: "Join Our Team",
      description: "Welcome to Smar8! Begin your journey with onboarding and team integration."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Career Growth",
      description: "Advance your career with clear growth paths, mentorship, and continuous learning opportunities."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Innovation Culture",
      description: "Work in a fast-paced environment where innovation and creativity are encouraged and rewarded."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Impact & Purpose",
      description: "Make a real impact in the real estate industry while working on meaningful projects."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Careers & Job Opportunities"
        brandIcon={<FaBriefcase className="text-white text-sm" />}
        brandText="Smar8 Careers"
        headline="Join Our Team & Build the Future of Real Estate"
        subheadline="Discover exciting career opportunities at Smar8. Join our mission to transform real estate property management through innovative technology and exceptional service."
        ctaText="View Open Positions"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Career Solution for Talented Professionals"
        subheadline="From engineering to sales, marketing to operations, Smar8 offers diverse opportunities for growth, learning, and making a real impact in real estate technology."
        ctaText="Explore Career Opportunities"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Careers Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Career Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for a Successful Career"
        description="Our comprehensive career program provides opportunities for growth, development, and making a meaningful impact in the real estate industry."
        features={careerFeatures}
        imageSrc={dummyImage}
        imageAlt="Career Features"
        defaultActiveFeature="job-opportunities"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How to Join the Smar8 Team"
        subtitle="Simple steps to start your career journey with us"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Working at Smar8"
        subtitle="Transform your career with growth opportunities and meaningful work"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Join the Smar8 Team?"
        description="Join our growing team of talented professionals who are passionate about transforming real estate. Start your career journey with us today."
        buttonText="Apply Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default Careers
