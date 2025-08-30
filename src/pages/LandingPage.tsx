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
   <Cta 
     heading="Transform Your Property Management Today" 
     description="Join thousands of property professionals who trust Smar8 to streamline operations, enhance security, and scale their business. Start your 14-day free trial with no credit card required."
     buttonText="Quick Start"
     buttonUrl="/#"
   />
   </>
  )
}

export default LandingPage