import logo from "../assets/logo.jpg"
const Header = () => {
  return (
    <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center">
            <i className="fas fa-lock text-primary-600 text-2xl mr-2" />
            <img src={logo} alt="" className="h-20"/>
          </div>
        </div>
        <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
          <a
            href="/"
            className="text-primary-700 hover:text-primary-900 px-3 py-2 text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
          >
            About
          </a>
          <a
            href="#features"
            className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
          >
            Features
          </a>
          <a
            href="#services"
            className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
          >
            Contact
          </a>
        </div>
        <div className="hidden md:ml-6 md:flex md:items-center">
          <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            Sign In
          </button>
        </div>
        <div className="-mr-2 flex items-center md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Header