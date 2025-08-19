const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <span className="text-xl font-bold text-white mb-6">
              Smar8 Solutions
            </span>

            <p className="text-gray-400 mt-4">
              Migrant Housing & Workforce Platform
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          {/* COMPANy */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/career" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* PRODUCT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="/mobile-app" className="text-gray-400 hover:text-white">
                  Mobile App
                </a>
              </li>
              <li>
                <a href="/web-platform" className="text-gray-400 hover:text-white">
                  Web Platform
                </a>
              </li>
              <li>
                <a href="/api" className="text-gray-400 hover:text-white">
                  API
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-400 hover:text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          {/* SUPPORT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/helpcenter" className="text-gray-400 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* BOTTOm */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2023 SecureFinance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
