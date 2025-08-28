import { FaArrowRight, FaArrowLeft, FaUser, FaTimes, FaWallet } from 'react-icons/fa';

const BackgroundChecks = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-dark-900 leading-tight">
              Background Checks for Peace of Mind
            </h2>
            
            {/* Three Main Features */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-dark-800">Background Check</h3>
                <p className="text-lg text-dark-600 leading-relaxed">
                  Search criminal records, identity, education, employment history, and past evictions with 99.9% accuracy.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-dark-800">Credit Check</h3>
                <p className="text-lg text-dark-600 leading-relaxed">
                  View credit and financial history as part of your tenant screening process.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-dark-800">Full Check Report</h3>
                <p className="text-lg text-dark-600 leading-relaxed">
                  Advanced criminal background check, credit check, and National Eviction Records search.
                </p>
              </div>
            </div>
            
            {/* Learn More Link */}
            <a href="#" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold text-lg transition-colors">
              Learn More <FaArrowRight />
            </a>
            
            {/* Divider */}
            <div className="border-t border-gray-200 pt-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-600">Expand Your Criminal Search</h3>
                <h3 className="text-xl font-semibold text-gray-600">Verify a Tenant's Income</h3>
              </div>
            </div>
          </div>

          {/* Right Column - Mobile Application UI */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Mobile Phone Frame */}
              <div className="w-64 sm:w-72 lg:w-80 h-[500px] sm:h-[550px] lg:h-[600px] bg-gradient-to-br from-green-100 to-blue-100 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-4 sm:p-5 lg:p-6 shadow-2xl">
                {/* Mobile Screen Content */}
                <div className="bg-white h-full rounded-[2.5rem] overflow-hidden">
                  {/* Header */}
                  <div className="bg-gray-50 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 flex items-center justify-between">
                    <FaArrowLeft className="text-gray-600 text-base sm:text-lg" />
                    <h4 className="text-base sm:text-lg font-semibold text-dark-900">Get a screening report</h4>
                    <FaTimes className="text-gray-600 text-base sm:text-lg" />
                  </div>
                  
                  {/* Main Content */}
                  <div className="p-4 sm:p-5 lg:p-6 space-y-6 sm:space-y-8">
                    {/* Question */}
                    <div className="text-center space-y-2">
                      <h5 className="text-lg sm:text-xl font-semibold text-dark-900">
                        Who will pay for the report?
                      </h5>
                      <p className="text-sm sm:text-base text-gray-600">
                        Select an option below.
                      </p>
                    </div>
                    
                    {/* Selection Options */}
                    <div className="space-y-3 sm:space-y-4">
                      {/* Applicant Option */}
                      <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-center hover:border-primary-300 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary-50 transition-colors">
                          <FaUser className="text-lg sm:text-xl lg:text-2xl text-gray-600 group-hover:text-primary-600" />
                        </div>
                        <span className="text-base sm:text-lg font-semibold text-dark-900">Applicant</span>
                      </div>
                      
                      {/* Me Option */}
                      <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-center hover:border-primary-300 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary-50 transition-colors">
                          <FaWallet className="text-lg sm:text-xl lg:text-2xl text-gray-600 group-hover:text-primary-600" />
                        </div>
                        <span className="text-base sm:text-lg font-semibold text-dark-900">Me</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundChecks;
