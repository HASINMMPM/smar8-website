import React from 'react';

// interface ContactOption {
//   icon: string;
//   title: string;
//   description: string;
//   action?: React.ReactNode;
// }

interface SocialMediaLink {
  name: string;
  url: string;
  icon: string;
}

const ContactUs: React.FC = () => {
  const socialMediaLinks: SocialMediaLink[] = [
    { name: "Facebook", url: "#", icon: "📘" },
    { name: "Instagram", url: "#", icon: "📷" },
    { name: "Twitter / X", url: "#", icon: "🐦" },
    { name: "LinkedIn", url: "#", icon: "💼" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            📞 Contact Us – Smar8 Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Whether you're a tenant, owner, coordinator, or simply curious about our platform, we're here to help. Reach out through any of the methods below.
          </p>
        </div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Office Address */}
          <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
            <div className="text-4xl mb-4">🏢</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Office Address</h2>
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Smar8 Solutions</p>
              <p>[Insert Building Name / Street]</p>
              <p>[City, State, PIN Code]</p>
              <p>[India]</p>
            </div>
          </div>

          {/* Email Us */}
          <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
            <div className="text-4xl mb-4">📧</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 mb-1">General Queries:</p>
                <a 
                  href="mailto:support@smar8.in" 
                  className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                >
                  support@smar8.in
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Technical Issues:</p>
                <a 
                  href="mailto:tech@smar8.in" 
                  className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                >
                  tech@smar8.in
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Partnerships & Media:</p>
                <a 
                  href="mailto:partner@smar8.in" 
                  className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                >
                  partner@smar8.in
                </a>
              </div>
            </div>
          </div>

          {/* Call Us */}
          <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
            <div className="text-4xl mb-4">☎️</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h2>
            <div className="space-y-3">
              <p className="text-gray-700">Customer Support (9 AM to 7 PM IST)</p>
              <a 
                href="tel:+91-XXXXXXXXXX" 
                className="text-2xl font-bold text-blue-600 hover:text-blue-800 hover:underline"
              >
                📞 +91-XXXXXXXXXX
              </a>
              <p className="text-sm text-gray-600">
                (Available in Malayalam, Bengali, Hindi, Tamil & English)
              </p>
            </div>
          </div>

          {/* WhatsApp Support */}
          <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">WhatsApp Support</h2>
            <p className="text-gray-700 mb-4">
              Tap below to chat with our team directly on WhatsApp:
            </p>
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
            >
              <span className="mr-2">👉</span>
              Chat on WhatsApp
            </a>
          </div>

          {/* Support Hours */}
          <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
            <div className="text-4xl mb-4">🕒</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Support Hours</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Monday to Saturday</strong></p>
              <p className="text-lg font-semibold text-blue-600">9:00 AM – 7:00 PM IST</p>
              <p className="text-sm text-gray-600">
                (Sundays & Public Holidays – Email Only)
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
            <div className="text-4xl mb-4">📍</div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Social Media</h2>
            <p className="text-gray-700 mb-4">
              Stay connected and get real-time updates:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="inline-flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-200 text-sm"
                >
                  <span className="mr-2">{social.icon}</span>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Help Center CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🧾 Need Help Quickly?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
              Check our <strong>Help Center / FAQ</strong> for answers to common questions, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <p>How to register as a migrant worker</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p>Owner onboarding</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p>Documentation charges</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p>Room movement tracking</p>
              </div>
            </div>
            <a
              href="/help-center"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              Visit Help Center
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
