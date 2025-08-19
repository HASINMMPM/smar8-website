import React from 'react';

interface PlatformFeature {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface UserType {
  description: string;
}

const WebPlatform: React.FC = () => {
  const platformFeatures: PlatformFeature[] = [
    {
      icon: "🏠",
      title: "Property Dashboard",
      description: "Add and manage buildings, rooms, floors, and ownership details",
      features: [
        "Assign property managers and coordinators per location",
        "Get real-time visibility into vacant and occupied rooms"
      ]
    },
    {
      icon: "👤",
      title: "Tenant Management",
      description: "Register tenants with photo, ID, and mobile number",
      features: [
        "View full registration history",
        "Export tenant logs for local records or police reporting"
      ]
    },
    {
      icon: "🔁",
      title: "Room Movement Logs",
      description: "Record shifts between rooms or buildings",
      features: [
        "Automatically generates updated tenant reports",
        "Keeps a digital trail of every move"
      ]
    },
    {
      icon: "📄",
      title: "Police Report Generation",
      description: "Download printable police reporting formats",
      features: [
        "Attach self-attested documents and submit manually",
        "Coming soon: Auto-send to police stations (with permission)"
      ]
    },
    {
      icon: "📊",
      title: "Admin Panel & Analytics",
      description: "Track registration counts, pending reports, and user activity",
      features: [
        "View movement heatmaps and compliance charts",
        "Customize date range and filters for reports"
      ]
    },
    {
      icon: "🌍",
      title: "Multi-Language & User Roles",
      description: "Web UI available in English and regional languages",
      features: [
        "Role-based access: Admin, Owner, Coordinator",
        "Secure login with OTP or password"
      ]
    },
    {
      icon: "🧾",
      title: "Digital Receipt System",
      description: "Issue payment receipts for registrations",
      features: [
        "Track charges collected per property or coordinator",
        "View monthly summaries and export reports"
      ]
    }
  ];

  const userTypes: UserType[] = [
    { description: "Building owners managing multiple units" },
    { description: "Coordinators working with 50+ tenants" },
    { description: "NGOs or local bodies supporting migrant welfare" },
    { description: "Admins overseeing town, district, or city-level operations" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            💻 Web Platform – Smar8 Solutions
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
            Manage your properties, tenants, and records — all from your browser.
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The Smar8 Web Platform is built for landlords, coordinators, and authorities who need to manage multiple properties, tenants, and compliance reports across locations. No app installation required — just log in from any device.
          </p>
        </div>

        {/* Key Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            🌟 Key Features of Our Web Portal
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {index + 1}. {feature.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 text-sm flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Security & Scale Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🔐 Built for Security & Scale
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl mb-3">☁️</div>
                <h3 className="text-xl font-semibold mb-2">Cloud-Hosted</h3>
                <p className="opacity-90">Secure, high-performance servers</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-xl font-semibold mb-2">Role-Based Access</h3>
                <p className="opacity-90">Data-level encryption & permissions</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="text-xl font-semibold mb-2">Scalable Operations</h3>
                <p className="opacity-90">Urban and rural operations at scale</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Use Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              🧠 Who Should Use the Web Portal?
            </h2>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4">
                {userTypes.map((userType, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-3 text-xl">•</span>
                    <span className="text-lg text-gray-700">{userType.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Access Now CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🌐 Access Now
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Just open <a href="https://smar8.in/dashboard" className="underline font-semibold hover:opacity-80">https://smar8.in/dashboard</a> in your browser and log in.
            </p>
            <div className="text-lg mb-8 opacity-90">
              No installation required.
            </div>
            <a
              href="https://smar8.in/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg shadow-lg"
            >
              <span className="mr-2">🚀</span>
              Access Web Platform
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebPlatform;
