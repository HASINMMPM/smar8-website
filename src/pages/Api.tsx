import React from 'react';

interface ApiEndpoint {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface IntegrationUseCase {
  icon: string;
  description: string;
}

const Api: React.FC = () => {
  const apiEndpoints: ApiEndpoint[] = [
    {
      icon: "🏠",
      title: "Tenant Registration API",
      description: "Submit tenant details via your app or system",
      features: [
        "Upload ID proofs, photos, and mobile numbers",
        "Get status of registration (success, rejected, pending)"
      ]
    },
    {
      icon: "🔁",
      title: "Room Movement API",
      description: "Record when a tenant moves to a new room/property",
      features: [
        "Track shift history across locations",
        "Auto-generate movement reports"
      ]
    },
    {
      icon: "📂",
      title: "Document Upload API",
      description: "Send and store Aadhar or other identity proofs",
      features: [
        "Attach consent or self-attestation digitally",
        "Validate image formats and document size"
      ]
    },
    {
      icon: "📊",
      title: "Compliance Reporting API",
      description: "Generate PDF-based reports on tenants and shifts",
      features: [
        "Download daily/weekly/monthly logs in CSV/JSON",
        "Support integration with police reporting tools (pilot stage)"
      ]
    },
    {
      icon: "👤",
      title: "User & Role Management API",
      description: "Manage owners, coordinators, and support agents",
      features: [
        "Set permissions based on access level",
        "Track user activity via audit logs"
      ]
    },
    {
      icon: "🌐",
      title: "Multilingual Support",
      description: "API responses can return data in your preferred language",
      features: [
        "Language options include English, Malayalam, Bengali, Hindi, Tamil, Kannada, and Assamese"
      ]
    }
  ];

  const integrationUseCases: IntegrationUseCase[] = [
    { icon: "🏢", description: "Housing Companies auto-syncing room/tenant data" },
    { icon: "🏛", description: "Government bodies collecting migrant reports" },
    { icon: "📲", description: "3rd-party apps offering Smar8 services in embedded form" },
    { icon: "📈", description: "Analytics platforms ingesting housing movement patterns" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🔗 API – Smar8 Solutions
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
            Connect. Automate. Extend.
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our powerful REST APIs let you integrate Smar8's migrant management, property, and compliance workflows directly into your own systems or platforms.
          </p>
        </div>

        {/* API Endpoints Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            🚀 What Can You Do With the Smar8 API?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
                <div className="text-4xl mb-4">{endpoint.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {index + 1}. {endpoint.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {endpoint.description}
                </p>
                <ul className="space-y-2">
                  {endpoint.features.map((feature, featureIndex) => (
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

        {/* Integration Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            🧩 Integration Use Cases
          </h2>
          <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {integrationUseCases.map((useCase, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-3xl">{useCase.icon}</div>
                  <p className="text-lg text-gray-700">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Access Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            🛠️ Developer Access
          </h2>
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Base URL (Production):</h3>
                <div className="bg-black/20 rounded-lg p-4">
                  <code className="text-green-400 font-mono text-lg break-all">
                    https://api.smar8.in/v1
                  </code>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-3">🔐 Authentication</h4>
                  <div className="bg-black/20 rounded-lg p-4">
                    <code className="text-yellow-400 font-mono text-sm">
                      Authorization: Bearer YOUR_API_KEY
                    </code>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">⚡ Rate Limits</h4>
                  <div className="bg-black/20 rounded-lg p-4">
                    <code className="text-blue-400 font-mono text-sm">
                      1000 requests/hour<br/>
                      100 requests/minute
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              📚 Documentation
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Get detailed API documentation, code examples, and integration guides to help you get started quickly.
            </p>
            <a
              href="https://docs.smar8.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg shadow-lg"
            >
              <span className="mr-2">📖</span>
              View API Documentation
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

        {/* Try It Out Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🧪 Try It Out
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Ready to test our APIs? Contact our developer support team to get your API keys and start building.
            </p>
            <a
              href="mailto:dev@smar8.in"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg shadow-lg"
            >
              <span className="mr-2">📧</span>
              Contact Developer Support
            </a>
          </div>
        </section>

        {/* Partner With Us Footer CTA */}
        <section className="text-center">
          <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🤝 Partner With Us
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Build powerful integrations, create innovative solutions, and help us transform how migrant workers and property owners connect across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:partner@smar8.in"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg"
              >
                <span className="mr-2">💼</span>
                Partnership Inquiries
              </a>
              <a
                href="https://docs.smar8.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 text-lg"
              >
                <span className="mr-2">📖</span>
                Developer Resources
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Api;
