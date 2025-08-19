import { FaArrowAltCircleRight } from 'react-icons/fa';

const Hero = () => {
  return (
     <section className="hero py-16 md:py-24  ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="flex items-center text-primary-600 mb-4">
            <i className="fas fa-fire mr-2" />
            <span className="text-sm font-semibold bg-white/20 p-2 rounded-2xl">
              🔥 100% Trusted Platform
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase mb-6 leading-tight">
            Find rooms, track rent, get jobs, and more — <span className='text-yellow-300'>all in your own language</span>
          </h1>
          <p className="text-lg mb-8 max-w-lg">
            Complete platform for workers with comprehensive services. Find
            properties, manage rent, discover jobs, access welfare - all secured
            and available in 7 languages for your everyday needs.
          </p>
          <button className="flex items-center gap-2 px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105">
            Download Our App <span className='text-2xl'><FaArrowAltCircleRight/></span>
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Financial app on mobile"
            className="rounded-lg shadow-xl w-full max-w-md"
          />
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-primary-200">
        <p className="text-center text-gray-400 mb-6">
          Trusted by leading payment providers
        </p>
       <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 bg-green-900">
  <img
    src="https://imgs.search.brave.com/1pf_gyxSrtWeD1-BrQrvzzy48f3LtX2W10YSz_Y1gaE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXBheXRtLTIyNjQ0/OC5wbmc_Zj13ZWJw/Jnc9MjU2"
    alt="Paytm"
    className="h-12 filter brightness-0 invert opacity-70 hover:opacity-100 transition"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
    alt="PayPal"
    className="h-8 filter brightness-0 invert opacity-70 hover:opacity-100 transition"
  />
  
  <img
    src="https://imgs.search.brave.com/abdYHJ5YFyyhvDnywWbagXWxWm5mJTz_6TXdxmzcc-E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDIxLzY3/Mi82Mjkvbm9uXzJ4/L2dvb2dsZS1wYXkt/bG9nby10cmFuc3Bh/cmVudC1mcmVlLXBu/Zy5wbmc"
    alt="Google Pay"
    className="h-16 filter brightness-0 invert opacity-70 hover:opacity-100 transition"
  />
</div>

      </div>
    </div>
  </section>
  )
}

export default Hero