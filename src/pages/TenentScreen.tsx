
import Hero from '../components/commen/Hero'
import { FaSearch, FaFileAlt, FaUsers, FaCheckCircle } from 'react-icons/fa'
import Banner from '../components/tenentScreen/Banner'
import BackgroundChecks from '../components/tenentScreen/BackgroundChecks'
import FAQ from '../components/tenentScreen/FAQ'
import Cta from '../components/tenentScreen/Cta'
import dummyImage from '../assets/dummy.jpg'

const TenentScreen = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaSearch className="text-secondary-800 text-2xl" />,
      title: "Comprehensive background checks with 99.9% accuracy"
    },
    {
      icon: <FaFileAlt className="text-secondary-800 text-2xl" />,
      title: "Detailed credit and financial history reports"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "National eviction records search included"
    },
    {
      icon: <FaCheckCircle className="text-secondary-800 text-2xl" />,
      title: "Identity verification and SSN matching"
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Tenant Screening"
        brandIcon={<span className="text-primary-600 font-bold text-lg">P</span>}
        brandText="Tenant Screening"
        headline="Tenant screening designed for landlords"
        subheadline="Quickly find trustworthy renters with TenantCloud's 99.9% accurate background and credit checks."
        ctaText="Start your free trial"
        disclaimers={[
          "Free 14 day trial",
          "Credit card required",
          "Cancel anytime"
        ]}
        features={features}
        showSocialProof={true}
        primaryColor="primary"
      />
      <Banner/>
      <BackgroundChecks/>
      <FAQ/>
      <Cta/>
    </div>
  )
}

export default TenentScreen