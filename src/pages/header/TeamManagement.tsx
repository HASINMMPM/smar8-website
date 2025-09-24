import Hero from '../../components/commen/Hero'
import { FaUsers, FaUserTie, FaShieldAlt, FaChartBar, FaDownload, FaEye, FaFilter } from 'react-icons/fa'
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const TeamManagement = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Manage rentals together with a team"
    },
    {
      icon: <FaUserTie className="text-secondary-800 text-2xl" />,
      title: "Role-based access and permissions"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure team collaboration and communication"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Team performance tracking and analytics"
    }
  ];

  // Team Management features for FeatureAccordion
  const teamManagementFeatures = [
    {
      id: 'team-collaboration',
      title: "Team Collaboration & Coordination",
      description: "Enable multiple team members to work together on rental management tasks. Coordinate property viewings, maintenance requests, and tenant communications efficiently.",
      learnMoreUrl: "#"
    },
    {
      id: 'role-based-access',
      title: "Role-Based Access Control",
      description: "Assign specific roles and permissions to team members based on their responsibilities. Control access to sensitive data and operations while maintaining security.",
      learnMoreUrl: "#"
    },
    {
      id: 'task-assignment',
      title: "Task Assignment & Tracking",
      description: "Assign tasks to specific team members and track completion status. Monitor workload distribution and ensure accountability across your rental management team.",
      learnMoreUrl: "#"
    },
    {
      id: 'communication-tools',
      title: "Integrated Communication Tools",
      description: "Provide team members with built-in communication tools for coordinating on properties, sharing updates, and maintaining clear communication channels.",
      learnMoreUrl: "#"
    },
    {
      id: 'performance-monitoring',
      title: "Team Performance Monitoring",
      description: "Track individual and team performance metrics, identify areas for improvement, and optimize your rental management operations based on data-driven insights.",
      learnMoreUrl: "#"
    },
    {
      id: 'workflow-automation',
      title: "Automated Workflow Management",
      description: "Automate routine tasks and workflows to improve team efficiency. Reduce manual work and ensure consistent processes across all team members.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Set Up Team Structure",
      description: "Define your team structure, assign roles and responsibilities, and set up appropriate access permissions for each team member."
    },
    {
      step: 2,
      title: "Configure Workflows",
      description: "Configure automated workflows and task assignment rules to streamline your rental management processes and improve team efficiency."
    },
    {
      step: 3,
      title: "Collaborate & Coordinate",
      description: "Team members collaborate on properties, coordinate viewings and maintenance, and communicate through integrated tools within the platform."
    },
    {
      step: 4,
      title: "Monitor & Optimize",
      description: "Track team performance, identify bottlenecks, and continuously optimize your rental management operations based on performance analytics."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <FaEye className="text-primary-600 text-xl" />,
      title: "Improved Efficiency",
      description: "Increase team productivity with coordinated workflows, automated task assignment, and integrated communication tools that streamline operations."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Better Coordination",
      description: "Improve coordination between team members with centralized task management, real-time updates, and clear communication channels."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Scalable Operations",
      description: "Scale your rental management operations efficiently by adding team members with appropriate roles and permissions as your business grows."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Team Management & Collaboration"
        brandIcon={<FaUsers className="text-white text-sm" />}
        brandText="Smar8 Team Management"
        headline="Manage Rentals Together with Your Team"
        subheadline="Enable seamless team collaboration for rental management with role-based access, task assignment, and integrated communication tools. Coordinate property operations efficiently and scale your business with confidence."
        ctaText="Set Up Team Management"
        ctaUrl="/#"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Team Management Solution for Smar8 Business Owners"
        subheadline="From role-based access control to automated workflow management, Smar8 provides everything you need to build and manage an efficient rental management team."
        ctaText="Explore Team Management Features"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Team Management Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Team Management Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Team Collaboration"
        description="Our platform provides comprehensive tools to manage team roles, coordinate workflows, and maintain efficient collaboration across all your rental management operations."
        features={teamManagementFeatures}
        imageSrc={dummyImage}
        imageAlt="Team Management Features"
        defaultActiveFeature="team-collaboration"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Team Management Works"
        subtitle="Simple steps to build and manage an efficient rental management team"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Team Management"
        subtitle="Transform your rental operations with efficient team collaboration and workflow automation"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Build Your Rental Management Team?"
        description="Join thousands of business owners who trust Smar8 to manage their teams efficiently and scale their rental operations. Start improving your team collaboration today."
        buttonText="Get Started Now"
        buttonUrl="/#"
      />
    </div>
  )
}

export default TeamManagement
