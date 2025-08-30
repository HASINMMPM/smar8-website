import Hero from '../components/pricing/Hero'
import ComparisonTable from '../components/pricing/ComparisonTable'
import PricingCalculator from '../components/pricing/PricingCalculator'
import KeyBenefits from '../components/pricing/KeyBenefits'
import FAQ from '../components/pricing/FAQ'
import { FaArrowAltCircleRight } from "react-icons/fa";

const Pricing = () => {
    return (
        <div>
            <Hero />
            <ComparisonTable />
            <PricingCalculator />
            <KeyBenefits />
            <FAQ />
            
            {/* Self-contained CTA Section */}
            <section id="contact" className="pb-16 md:pb-24 text-white mt-16">
              <div className="py-16 rounded-2xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--color-dark-800)' }}>
                <div className="flex flex-col items-center justify-center">
                  <div className="md:w-2/3 mb-10 md:mb-0 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Ready to choose your plan?
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-tertiary-100)' }}>
                      Join the Smar8 ecosystem and transform your property management experience with our comprehensive, role-based platform.
                    </p>
                    <a 
                      href="#"
                      className="inline-flex items-center gap-2 mt-12 px-8 py-3 border border-transparent text-base font-medium rounded-full text-white md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105"
                      style={{ backgroundColor: 'var(--color-primary-500)' }}
                    >
                      Get Started
                      <span className="text-2xl">
                        <FaArrowAltCircleRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
        </div>
    )
}

export default Pricing