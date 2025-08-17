const About = () => {
  return (
    <section className="py-16 md:py-24 bg-green-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Secure financial services"
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="flex items-center text-black mb-4">
              <i className="fas fa-fire mr-2" />
              <span className="section-title">🔥 about</span>
            </div>

            <h2 className="section-heading text-black">
              All your money needs in one app
            </h2>
            <div className="space-y-6">
              <div className="pl-4 border-l-4 border-transparent hover:border-l-green-500 transition-all duration-300  py-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Identity Registration for Migrants
                </h3>
                <p className="text-sm text-gray-600">
                  Secure onboarding and identification for smooth access to
                  services.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-transparent hover:border-l-green-500 transition-all duration-300  py-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Room-to-Room Movement
                </h3>
                <p className="text-sm text-gray-600">
                  Track resident movement to ensure proper coordination and
                  planning.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-transparent hover:border-l-green-500 transition-all duration-300  py-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Owner & Coordinator Mobile App Integration
                </h3>
                <p className="text-sm text-gray-600">
                  Simplify operations through integrated mobile tools for staff.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-transparent hover:border-l-green-500 transition-all duration-300  py-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Local Language Support
                </h3>
                <p className="text-sm text-gray-600">
                  Communicate effectively with support for multiple regional
                  languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
