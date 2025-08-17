import React from 'react';

interface AppModule {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const MobileApp: React.FC = () => {
  const appModules: AppModule[] = [
    {
      icon: "🏠",
      title: "Tenant Registration",
      description: "Capture ID, photo, phone number & emergency contact",
      features: [
        "Supports Aadhar, driving license & other valid IDs",
        "Available in 7+ languages for better understanding"
      ]
    },
    {
      icon: "📦",
      title: "Room Movement Tracking",
      description: "Easily record tenant shifts between rooms or buildings",
      features: [
        "Digital records help comply with police verification",
        "Generates movement logs for future use"
      ]
    },
    {
      icon: "👤",
      title: "Owner / Coordinator Dashboard",
      description: "View and manage multiple properties",
      features: [
        "Assign room managers or coordinators",
        "Download and submit compliance reports"
      ]
    },
    {
      icon: "💼",
      title: "Job Discovery",
      description: "Browse verified job listings nearby",
      features: [
        "Apply through the app or contact directly",
        "Job categories include factory, retail, delivery, housekeeping, etc."
      ]
    },
    {
      icon: "💳",
      title: "Payments & Documentation",
      description: "₹40 for first-time registration",
      features: [
        "₹20 for each room movement (up to 4 allowed)",
        "Digital receipt and payment log included"
      ]
    },
    {
      icon: "🌍",
      title: "Multilingual Support",
      description: "Available in Malayalam, Bengali, Hindi, Tamil, Kannada, Assamese & English",
      features: [
        "Language selection available at login or settings"
      ]
    },
    {
      icon: "🔒",
      title: "Secure and Encrypted",
      description: "End-to-end encrypted data storage",
      features: [
        "Admin-only access for editing or deletion",
        "Local device access restrictions in place"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            📱 Mobile App – Smar8 Solutions
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
            Everything you need. In one app.
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our mobile app is built to serve migrant workers, building owners, coordinators, and job seekers with simple, multilingual digital tools. Whether you're moving into a new room or helping manage hundreds of tenants, the Smar8 app puts it all at your fingertips.
          </p>
        </div>

        {/* Key Modules Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            🔑 Key Modules in the Smar8 Mobile App
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appModules.map((module, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
                <div className="text-4xl mb-4">{module.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {index + 1}. {module.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {module.description}
                </p>
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 text-sm flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              📲 Coming Soon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Welfare Service Enrollment</h3>
                <p className="opacity-90">Access to government schemes and support services</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="text-xl font-semibold mb-2">Live Job Matching AI Engine</h3>
                <p className="opacity-90">Intelligent job recommendations based on skills and location</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl mb-3">👮</div>
                <h3 className="text-xl font-semibold mb-2">Automated Police Integration</h3>
                <p className="opacity-90">Seamless police verification with user consent</p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="text-center">
          <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🔽 Download Now
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Available on Android. iOS version coming soon.
            </p>
            
            {/* Google Play Badge Placeholder */}
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-lg p-8 border-2 border-dashed border-gray-300">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-gray-500 text-lg font-medium">
                  [Google Play Badge Here]
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Placeholder for actual badge asset
                </p>
              </div>
            </div>
            
            {/* Alternative Download Button */}
            <div className="mt-8">
              <button className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 text-lg shadow-lg">
                <span className="mr-2">📥</span>
                Download for Android
              </button>
            </div>
            
            <p className="text-gray-500 mt-4 text-sm">
              iOS version will be available in the App Store soon
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MobileApp;
