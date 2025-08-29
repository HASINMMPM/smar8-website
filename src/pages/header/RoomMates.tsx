import Hero from '../../components/commen/Hero'
import { FaUsers, FaSearch, FaShieldAlt, FaCreditCard, FaHandshake, FaUserFriends } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const RoomMates = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Find compatible roommates based on lifestyle preferences"
    },
    {
      icon: <FaSearch className="text-secondary-800 text-2xl" />,
      title: "Advanced filtering and matching algorithms"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Verified profiles and background checks"
    },
    {
      icon: <FaCreditCard className="text-secondary-800 text-2xl" />,
      title: "Secure payment and rent splitting tools"
    }
  ];

  // Roommate matching features for FeatureAccordion
  const roommateFeatures = [
    {
      id: 'smart-matching',
      title: "Smart Compatibility Matching",
      description: "Our AI-powered algorithm matches you with roommates based on lifestyle preferences, schedules, cleanliness habits, and personality traits. Find your perfect match in minutes.",
      learnMoreUrl: "#"
    },
    {
      id: 'profile-verification',
      title: "Verified Profiles & Background Checks",
      description: "All profiles are verified with real identity checks and optional background screenings. Feel confident knowing your potential roommate is who they say they are.",
      learnMoreUrl: "#"
    },
    {
      id: 'communication-tools',
      title: "Built-in Communication Tools",
      description: "Chat, video call, and schedule viewings directly through our platform. No need to exchange personal information until you're ready to meet.",
      learnMoreUrl: "#"
    },
    {
      id: 'rent-splitting',
      title: "Rent Splitting & Financial Tools",
      description: "Automatically split rent, utilities, and shared expenses. Track payments, generate reports, and maintain financial transparency with your roommates.",
      learnMoreUrl: "#"
    },
    {
      id: 'document-management',
      title: "Lease & Document Management",
      description: "Store and manage all roommate agreements, lease documents, and important paperwork in one secure location. Access everything from anywhere.",
      learnMoreUrl: "#"
    },
    {
      id: 'dispute-resolution',
      title: "Conflict Resolution Support",
      description: "Get help with roommate conflicts through our mediation tools and support resources. Maintain healthy relationships and resolve issues amicably.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Create Your Profile",
      description: "Build a detailed profile highlighting your lifestyle, preferences, and what you're looking for in a roommate. Add photos and personal details."
    },
    {
      step: 2,
      title: "Find Your Match",
      description: "Browse compatible roommates or let our algorithm suggest perfect matches. Filter by location, budget, and lifestyle preferences."
    },
    {
      step: 3,
      title: "Connect & Meet",
      description: "Chat with potential roommates, schedule viewings, and get to know each other before making any commitments."
    },
    {
      step: 4,
      title: "Move In Together",
      description: "Once you've found your perfect match, use our tools to manage rent, utilities, and shared expenses seamlessly."
    }
  ];

  // Success stories
  const successStories = [
    {
      name: "Sarah & Emma",
      story: "Found each other through Smar8 and have been living together for 2 years. We're like sisters now!",
      avatar: dummyImage
    },
    {
      name: "Mike & Alex",
      story: "Perfect match! We both love cooking and have similar work schedules. Couldn't be happier.",
      avatar: dummyImage
    },
    {
      name: "Jasmine & Priya",
      story: "Different cultures, same values. We've learned so much from each other and created an amazing home.",
      avatar: dummyImage
    }
  ];

  // Safety & Trust features
  const safetyFeatures = [
    {
      icon: <FaShieldAlt className="text-primary-600 text-xl" />,
      title: "Identity Verification",
      description: "All users must verify their identity with government-issued ID and phone verification."
    },
    {
      icon: <FaSearch className="text-primary-600 text-xl" />,
      title: "Background Screening",
      description: "Optional background checks available for additional peace of mind and safety."
    },
    {
      icon: <FaHandshake className="text-primary-600 text-xl" />,
      title: "Community Guidelines",
      description: "Strict community guidelines and reporting systems to maintain a safe environment."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Find Your Perfect Roommate"
        brandIcon={<FaUserFriends className="text-white text-sm" />}
        brandText="Smar8 Roommates"
        headline="Find Your Perfect Roommate Match"
        subheadline="Connect with compatible roommates who share your lifestyle, values, and living preferences. Our smart matching algorithm and verified profiles ensure you find the right person to share your space with."
        ctaText="Start Finding Roommates"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Smart Roommate Matching That Actually Works"
        subheadline="Stop wasting time with incompatible roommates. Our AI-powered platform uses advanced algorithms to match you with people who share your lifestyle, habits, and living preferences. Find your perfect match in days, not months."
        ctaText="Create Your Profile"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Roommate Matching Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Roommate Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Roommate Living"
        description="From initial matching to long-term living arrangements, Smar8 provides all the tools and features you need to find and live successfully with compatible roommates."
        features={roommateFeatures}
        imageSrc={dummyImage}
        imageAlt="Roommate Matching Features"
        defaultActiveFeature="smart-matching"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Roommates Works"
        subtitle="Simple steps to find your perfect roommate and start living together"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories from Real Roommates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Smar8 has helped thousands of people find their perfect living companions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={story.avatar} 
                    alt={story.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{story.name}</h3>
                <p className="text-gray-600 italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Trust Section - Using reusable component */}
      <FeatureGrid
        title="Your Safety & Trust is Our Priority"
        subtitle="We've built multiple layers of protection to ensure you can find roommates safely and confidently"
        features={safetyFeatures}
        backgroundColor="bg-gray-50"
        columns={3}
      />

      <Cta
        heading="Ready to Find Your Perfect Roommate?"
        description="Join thousands of people who have found their ideal living companions through Smar8. Start your journey to better roommate living today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default RoomMates
