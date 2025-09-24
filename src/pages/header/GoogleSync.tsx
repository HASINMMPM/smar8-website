import Hero from '../../components/commen/Hero'
import { FaPhone, FaUsers, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const GoogleSync = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaPhone className="text-secondary-800 text-2xl" />,
      title: "Synchronize your TC Calendar with Google"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Seamless calendar integration and management"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure data synchronization and backup"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Real-time updates and conflict resolution"
    }
  ];

  // Google Sync features for FeatureAccordion
  const googleSyncFeatures = [
    {
      id: 'calendar-synchronization',
      title: "Two-Way Calendar Synchronization",
      description: "Synchronize your Smar8 calendar with Google Calendar in real-time. Viewings, appointments, and maintenance schedules automatically sync across both platforms.",
      learnMoreUrl: "#"
    },
    {
      id: 'appointment-management',
      title: "Unified Appointment Management",
      description: "Manage all appointments, viewings, and maintenance schedules from either Smar8 or Google Calendar. Changes in one platform automatically update the other.",
      learnMoreUrl: "#"
    },
    {
      id: 'team-coordination',
      title: "Team Calendar Coordination",
      description: "Coordinate team schedules, property viewings, and maintenance appointments across multiple team members with synchronized Google Calendar integration.",
      learnMoreUrl: "#"
    },
    {
      id: 'conflict-resolution',
      title: "Smart Conflict Resolution",
      description: "Automatically detect and resolve scheduling conflicts between Smar8 and Google Calendar. Maintain data integrity across both platforms with intelligent synchronization.",
      learnMoreUrl: "#"
    },
    {
      id: 'mobile-access',
      title: "Mobile Calendar Access",
      description: "Access your synchronized calendar from any device through Google Calendar mobile apps. Stay updated on appointments and schedules while on the go.",
      learnMoreUrl: "#"
    },
    {
      id: 'backup-sync',
      title: "Automatic Backup & Sync",
      description: "Ensure your calendar data is always backed up and synchronized. Automatic sync processes maintain data consistency across all connected platforms.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Connect Accounts",
      description: "Securely connect your Smar8 account with Google Calendar using OAuth authentication for secure data access and synchronization."
    },
    {
      step: 2,
      title: "Configure Sync Settings",
      description: "Set up synchronization preferences including sync frequency, conflict resolution rules, and which calendar events to synchronize."
    },
    {
      step: 3,
      title: "Automatic Synchronization",
      description: "Your calendars automatically synchronize in real-time, with appointments, viewings, and schedules appearing in both platforms."
    },
    {
      step: 4,
      title: "Manage & Monitor",
      description: "Manage appointments from either platform and monitor synchronization status to ensure data consistency across all connected calendars."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Unified Calendar View",
      description: "View all your appointments, viewings, and schedules in one place with seamless synchronization between Smar8 and Google Calendar."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Improved Team Coordination",
      description: "Coordinate team schedules and property viewings more effectively with synchronized calendars accessible to all team members."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Mobile Accessibility",
      description: "Access your synchronized calendar from any device through Google Calendar mobile apps for improved productivity and accessibility."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Google Calendar Synchronization"
        brandIcon={<FaPhone className="text-white text-sm" />}
        brandText="Smar8 Google Sync"
        headline="Synchronize Your Smar8 Calendar with Google Calendar"
        subheadline="Keep your Smar8 appointments, viewings, and maintenance schedules synchronized with Google Calendar. Manage all your scheduling from either platform with real-time synchronization and conflict resolution."
        ctaText="Enable Google Sync"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Calendar Synchronization for Smar8 Business Owners"
        subheadline="From two-way calendar sync to unified appointment management, Smar8 provides everything you need to keep your schedules synchronized across all platforms and devices."
        ctaText="Explore Google Sync Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Google Calendar Sync Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Google Sync Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Calendar Synchronization"
        description="Our platform provides comprehensive tools to synchronize calendars, manage appointments, and maintain data consistency across Smar8 and Google Calendar platforms."
        features={googleSyncFeatures}
        imageSrc={dummyImage}
        imageAlt="Google Sync Features"
        defaultActiveFeature="calendar-synchronization"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Google Sync Works"
        subtitle="Simple steps to synchronize your calendars and manage appointments seamlessly"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Google Sync"
        subtitle="Transform your calendar management with unified synchronization and improved accessibility"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Synchronize Your Calendars?"
        description="Join thousands of business owners who trust Smar8 to keep their calendars synchronized and accessible across all platforms. Start improving your schedule management today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default GoogleSync
