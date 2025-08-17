import React from 'react';

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

interface BenefitCard {
  icon: string;
  title: string;
  description: string;
}

const AboutUs: React.FC = () => {
  const features: FeatureCard[] = [
    {
      icon: "✅",
      title: "Digital Migrant Registration",
      description: "Quick, secure, and multilingual onboarding of workers, with valid ID verification and photo capture."
    },
    {
      icon: "🏢",
      title: "Room-to-Room Movement Logs",
      description: "Automatic tracking of tenant movement with digital reports, easing police verification and compliance."
    },
    {
      icon: "📲",
      title: "Owner & Coordinator Mobile Apps",
      description: "Specialized tools to help owners manage rooms, documents, and reports — all from their phone."
    },
    {
      icon: "💼",
      title: "Job Discovery for Workers",
      description: "Workers can explore local job opportunities posted directly by businesses and contractors."
    },
    {
      icon: "🤝",
      title: "Welfare and Financial Access",
      description: "Connect workers to social schemes, support services, and affordable money transfer options."
    },
    {
      icon: "🌍",
      title: "Multilingual Support",
      description: "Available in 7+ Indian languages including Malayalam, Bengali, Hindi, Tamil, Assamese, Kannada, and English."
    }
  ];

  const benefits: BenefitCard[] = [
    {
      icon: "📂",
      title: "Fully Digital",
      description: "No manual registers or photocopies"
    },
    {
      icon: "🔐",
      title: "Privacy First",
      description: "We protect all data using strong encryption"
    },
    {
      icon: "📱",
      title: "Easy to Use",
      description: "Simple apps for workers, owners, and coordinators"
    },
    {
      icon: "🛡",
      title: "Compliant",
      description: "Police report generation made simple"
    },
    {
      icon: "🧾",
      title: "Affordable",
      description: "₹40 for first registration, ₹20 for each move"
    },
    {
      icon: "🌟",
      title: "Scalable",
      description: "Built to support lakhs of workers and properties"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <a
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🔥 About Us – Smar8 Solutions
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
            One Platform. Millions Empowered.
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Smar8 Solutions is a mission-driven technology platform focused on transforming how migrant workers live, move, and work across India — starting from the ground up. We bring together property owners, coordinators, workers, and local authorities into one unified ecosystem.
          </p>
        </div>

        {/* Our Story Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              🏠 Our Story
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Every year, millions of people migrate for work, often without proper records, support, or protection. Property owners struggle with documentation, workers face language barriers, and authorities deal with inconsistent data.
              </p>
              <p>
                We saw a gap — and we built Smar8 to fill it.
              </p>
              <p>
                Our platform is designed to make life simpler, safer, and more organized for everyone involved. No more paper files. No more repetitive work. No more confusion.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            🌐 What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Smar8 Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            💡 Why Choose Smar8?
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                👥 Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                To build the most reliable and inclusive digital infrastructure for migrant communities across India — supporting dignity, mobility, and access for all.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                🚀 Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                A future where every worker is traceable, every room is manageable, and every shift is recorded — empowering both people and platforms to work better together.
              </p>
            </div>
          </div>
        </section>

        {/* Join the Movement Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🤝 Join the Movement
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
              Whether you're an owner, tenant, NGO, or local authority — Smar8 helps you do more with less effort.
            </p>
            <div className="text-2xl md:text-3xl font-bold">
              <p>Together, let's digitize India's workforce — one room at a time.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
