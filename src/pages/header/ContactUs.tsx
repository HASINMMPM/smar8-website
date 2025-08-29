import Hero from '../../components/commen/Hero'
import { FaComments, FaUsers, FaShieldAlt, FaChartBar, FaDownload, FaFilter } from 'react-icons/fa'
import { BiSolidSelectMultiple } from 'react-icons/bi';
import Banner from '../../components/commen/Banner'
import dummyImage from '../../assets/dummy.jpg'
import FeatureAccordion from '../../components/commen/FeatureAccordion'
import Cta from '../../components/commen/Cta'
import HowItWorks from '../../components/commen/HowItWorks'
import FeatureGrid from '../../components/commen/FeatureGrid'

const ContactUs = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaComments className="text-secondary-800 text-2xl" />,
      title: "Get in touch with us"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Multiple contact channels and support options"
    },
    {
      icon: <FaShieldAlt className="text-secondary-800 text-2xl" />,
      title: "Secure communication and data protection"
    },
    {
      icon: <FaChartBar className="text-secondary-800 text-2xl" />,
      title: "Response tracking and follow-up management"
    }
  ];

  // Contact Us features for FeatureAccordion
  const contactUsFeatures = [
    {
      id: 'multiple-channels',
      title: "Multiple Contact Channels",
      description: "Contact us through multiple channels including phone, email, live chat, and contact forms. Choose the communication method that works best for your needs.",
      learnMoreUrl: "#"
    },
    {
      id: 'expert-support',
      title: "Expert Support Team",
      description: "Connect with our experienced support team who understand the Smar8 platform and can provide expert assistance with all your questions and needs.",
      learnMoreUrl: "#"
    },
    {
      id: 'quick-response',
      title: "Quick Response Times",
      description: "Get quick responses to your inquiries with our commitment to timely communication and efficient support processes.",
      learnMoreUrl: "#"
    },
    {
      id: 'personalized-assistance',
      title: "Personalized Assistance",
      description: "Receive personalized assistance tailored to your specific needs and requirements. Our team takes the time to understand your situation and provide relevant solutions.",
      learnMoreUrl: "#"
    },
    {
      id: 'follow-up-support',
      title: "Follow-Up & Support",
      description: "Get comprehensive follow-up support to ensure your questions are fully answered and your needs are completely addressed.",
      learnMoreUrl: "#"
    },
    {
      id: 'feedback-system',
      title: "Feedback & Improvement",
      description: "Share your feedback and suggestions to help us continuously improve our platform and services based on user input and needs.",
      learnMoreUrl: "#"
    }
  ];

  // How it works steps
  const howItWorksSteps = [
    {
      step: 1,
      title: "Choose Channel",
      description: "Select your preferred contact channel including phone, email, live chat, or contact forms based on your needs and urgency."
    },
    {
      step: 2,
      title: "Submit Inquiry",
      description: "Submit your inquiry or question through your chosen channel with all relevant details to help us provide the best assistance."
    },
    {
      step: 3,
      title: "Get Response",
      description: "Receive a quick response from our expert support team with personalized assistance and relevant solutions."
    },
    {
      step: 4,
      title: "Follow-Up Support",
      description: "Get comprehensive follow-up support to ensure your needs are fully addressed and you're completely satisfied with our assistance."
    }
  ];

  // Key benefits features
  const keyBenefits = [
    {
      icon: <BiSolidSelectMultiple className="text-primary-600 text-xl" />,
      title: "Multiple Options",
      description: "Contact us through multiple channels with flexible communication options that fit your schedule and preferences."
    },
    {
      icon: <FaFilter className="text-primary-600 text-xl" />,
      title: "Expert Assistance",
      description: "Get expert assistance from our experienced support team who understand your needs and can provide relevant solutions."
    },
    {
      icon: <FaDownload className="text-primary-600 text-xl" />,
      title: "Quick Support",
      description: "Receive quick responses and comprehensive support to ensure your questions are answered and needs are addressed efficiently."
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Smar8 - Contact Us & Support"
        brandIcon={<FaComments className="text-white text-sm" />}
        brandText="Smar8 Contact Us"
        headline="Get in Touch with Us"
        subheadline="Connect with our expert support team through multiple channels. Get personalized assistance, quick responses, and comprehensive support for all your Smar8 questions and needs."
        ctaText="Contact  Now"
        ctaUrl="/contact-us"
        features={features}
        showSocialProof={false}
        primaryColor="primary"
      />
      
      <Banner
        headline="Complete Contact & Support Solution"
        subheadline="From multiple contact channels to expert support, Smar8 Contact Us provides everything you need to get in touch and receive comprehensive assistance."
        ctaText="Explore Contact Options"
        showImage={true}
        imageSrc={dummyImage}
        imageAlt="Contact Us Platform"
        imageClassName="w-full max-w-3xl mx-auto rounded-xl shadow-2xl"
      />
      
      {/* Contact Us Features Section - Using FeatureAccordion */}
      <FeatureAccordion
        title="Everything You Need for Successful Communication"
        description="Our platform provides multiple contact channels, expert support, and comprehensive assistance to help you get the answers and support you need."
        features={contactUsFeatures}
        imageSrc={dummyImage}
        imageAlt="Contact Us Features"
        defaultActiveFeature="multiple-channels"
      />

      {/* How It Works Section - Using reusable component */}
      <HowItWorks
        title="How Smar8 Contact & Support Works"
        subtitle="Simple steps to get in touch and receive expert assistance"
        steps={howItWorksSteps}
        backgroundColor="bg-gray-50"
      />

      {/* Key Benefits Section - Using reusable component */}
      <FeatureGrid
        title="Key Benefits of Smar8 Contact & Support"
        subtitle="Transform your support experience with multiple channels and expert assistance"
        features={keyBenefits}
        backgroundColor="bg-white"
        columns={3}
      />

      <Cta
        heading="Ready to Get in Touch?"
        description="Join thousands of users who trust Smar8 Contact & Support to provide expert assistance and comprehensive support. Start getting the help you need today."
        buttonText="Get Started Now"
        buttonUrl="/contact"
      />
    </div>
  )
}

export default ContactUs
