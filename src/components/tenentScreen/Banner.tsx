import { FaArrowRight, FaArrowLeft, FaEllipsisH, FaCheck, FaClock, FaUser } from 'react-icons/fa';

const Banner = () => {
  return (
    <section className=" relative overflow-hidden">
      <div className="bg-dark-800  pt-16 md:pt-24 mb-16 md:mb-24 rounded-2xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Dark Teal Background */}
        <div className="text-center mb-16">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Screen tenants and get them onboarded, in one place
          </h2>
          
          {/* Sub-headline */}
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Receive an application, run a background check, and get them ready to lease—all from your TenantCloud dashboard.
          </p>
          
          {/* CTA Button */}
          <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto">
            Get Started
            <FaArrowRight className="text-white" />
          </button>
        </div>

        {/* Bottom Section - Floating White Card */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full">
            {/* Card Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-8">
              {/* Breadcrumbs */}
              <div className="text-sm text-gray-500 order-2 sm:order-1">
                Dashboard / Breadcrumb / Breadcrumb
              </div>
              
              {/* Page Title with Back Arrow */}
              <div className="flex items-center gap-3 order-1 sm:order-2">
                <FaArrowLeft className="text-gray-400" />
                <h3 className="text-xl sm:text-2xl font-bold text-dark-900">Screening report</h3>
              </div>
              
              {/* Actions Button */}
              <button className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors order-3">
                Actions
                <FaEllipsisH />
              </button>
            </div>

            {/* Card Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Side - Applicant Information */}
              <div className="space-y-6">
                {/* Full Check Status */}
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <FaUser className="text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-dark-900">Full Check</span>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <FaCheck className="text-white text-xs" />
                      </div>
                      <span className="text-green-600 font-medium">Ready</span>
                    </div>
                  </div>
                </div>

                {/* Applicant Information */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-dark-900">Rita Formstou</h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Address</label>
                    <p className="text-dark-900">504 Nelm Street<br />Arlington, VA 22201</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">SSN Match</label>
                    <p className="text-dark-900">Exact SSN match</p>
                  </div>
                </div>

                {/* Credit Score Factors */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-gray-400" />
                    <h5 className="font-semibold text-dark-900">Credit score factors</h5>
                  </div>
                  <ul className="space-y-2 ml-6">
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      Too few open revolving accounts
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      Too many serious derogatory items
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      Too few revolving accounts
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                      Too many inquiries
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Side - Resident Score */}
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-2xl font-bold text-dark-900 mb-6">Resident score</h4>
                
                {/* Score Visualization */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-6">
                  {/* Circular Gauge Background */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    {/* Red to Orange to Green gradient */}
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="50%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#22c55e" />
                      </linearGradient>
                    </defs>
                    
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    
                    {/* Score arc (690 out of 850 = ~81%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="url(#scoreGradient)"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="47.7"
                      strokeLinecap="round"
                    />
                  </svg>
                  
                  {/* Score Marker */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-900">690</div>
                      <div className="text-sm sm:text-base lg:text-lg text-green-600 font-medium">Good</div>
                    </div>
                  </div>
                  
                  {/* Score Marker Dot */}
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-dark-900 rounded-full transform -translate-x-1/2 -translate-y-1/2" 
                       style={{ transform: 'translate(-50%, -50%) rotate(81deg) translateY(-40px)' }}>
                  </div>
                </div>
                
                {/* Learn More Link */}
                <a href="#" className="text-primary-500 hover:text-primary-600 font-medium flex items-center gap-2 transition-colors">
                  Learn more
                  <FaArrowRight className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
