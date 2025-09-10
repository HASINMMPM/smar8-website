import Hero from '../components/pricing/Hero'
import ComparisonTable from '../components/pricing/ComparisonTable'
import PricingCalculator from '../components/pricing/PricingCalculator'
import KeyBenefits from '../components/pricing/KeyBenefits'
import FAQ from '../components/pricing/FAQ'
import Cta from '../components/commen/Cta'

const Pricing = () => {
    return (
        <div>
            <Hero />
            <ComparisonTable />
            <PricingCalculator />
            <KeyBenefits />
            <FAQ />
            <Cta 
              heading="Ready to choose your plan?"
              description="Join the Smar8 ecosystem and transform your property management experience with our comprehensive, role-based platform."
              buttonText="Get Started Today"
              buttonUrl="/#"
            />
        </div>
    )
}

export default Pricing