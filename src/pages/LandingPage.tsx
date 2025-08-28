import HeroSection from '../components/landingpage/HeroSection'
import Features from '../components/landingpage/Features'
import IntegrationsAndFeatures from '../components/landingpage/IntegrationsAndFeatures'
import TestimonialAndSolutions from '../components/commen/TestimonialAndSolutions'
import FAQ from '../components/landingpage/FAQ'
import Cta from '../components/commen/Cta'

const LandingPage = () => {
  return (
   <>
   <HeroSection />
   <Features/>
   <IntegrationsAndFeatures/>
   <TestimonialAndSolutions/>
   <FAQ/>
   <Cta heading="Ready to get started?" />
   </>
  )
}

export default LandingPage