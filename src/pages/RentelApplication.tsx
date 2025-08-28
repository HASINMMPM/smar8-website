
import Hero from '../components/commen/Hero'
import { FaPlus, FaSearch, FaFileAlt, FaUsers } from 'react-icons/fa'
import Banner from '../components/RentalApplications/Banner'
import BackgroundChecks from '../components/RentalApplications/BackgroundChecks'
import Ratings from '../components/RentalApplications/Ratings'
import dummyImage from '../assets/dummy.jpg'

const RentelApplication = () => {
  // Features array for the Hero component
  const features = [
    {
      icon: <FaPlus className="text-secondary-800 text-2xl" />,
      title: "Pre-screen applicants up front, saving time and energy"
    },
    {
      icon: <FaSearch className="text-secondary-800 text-2xl" />,
      title: "Request background checks instantly from an application"
    },
    {
      icon: <FaFileAlt className="text-secondary-800 text-2xl" />,
      title: "All-in-one leasing from listing to applications to screening"
    },
    {
      icon: <FaUsers className="text-secondary-800 text-2xl" />,
      title: "Get nearly 4 applications per listing on average"
    }
  ];

  return (
    <div>
      <Hero
        imageSrc={dummyImage}
        imageAlt="Rental Applications"
        brandIcon={<FaPlus className="text-white text-sm" />}
        brandText="Rental Applications"
        headline="List, apply, sign—all in one place"
        subheadline="Landlords report reduced vacancy time and improved occupancy by 15% with TenantCloud's leasing tools."
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
      <Ratings/>
    </div>
  )
}

export default RentelApplication