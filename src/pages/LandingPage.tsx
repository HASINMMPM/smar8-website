import HeroSection from '../components/landingpage/HeroSection'
import Achievements from '../components/landingpage/Achievements'
import Features from '../components/landingpage/Features'
import IntegrationsAndFeatures from '../components/landingpage/IntegrationsAndFeatures'
import TestimonialAndSolutions from '../components/commen/TestimonialAndSolutions'
// import PricingSection from '../components/landingpage/PricingSection'
import ModernFAQ from '../components/landingpage/ModernFAQ'
import BlogSection from '../components/landingpage/BlogSection'
import ModernCTA from '../components/landingpage/ModernCTA'

const LandingPage = () => {
  return (
   <>
   <HeroSection />
   <Achievements />
   <Features/>
   <IntegrationsAndFeatures/>
   <TestimonialAndSolutions/>
   {/* <PricingSection /> */}
   <ModernFAQ />
   {/* <BlogSection /> */}
   <ModernCTA />
   </>
  )
}

export default LandingPage