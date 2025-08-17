import React from 'react';

interface RoleCard {
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location?: string;
}

const Careers: React.FC = () => {
  const commonRoles: RoleCard[] = [
    {
      title: "Frontend & Mobile Developers",
      description: "React, Flutter"
    },
    {
      title: "Backend Developers",
      description: "Node.js, Firebase, Python"
    },
    {
      title: "Field Coordinators",
      description: "Local language support"
    },
    {
      title: "UX/UI Designers",
      description: "Multilingual, inclusive design"
    },
    {
      title: "Customer Support Executives",
      description: "Multi-language support"
    },
    {
      title: "Marketing & Community Managers",
      description: "Community building & growth"
    },
    {
      title: "Data Analysts / Admins",
      description: "Data insights & management"
    },
    {
      title: "Legal / Compliance Support",
      description: "Regulatory compliance"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      quote: "Working at Smar8 is like being part of a revolution — where every release solves a real-world problem. You see the impact immediately.",
      author: "Jaseem",
      role: "Lead Developer"
    },
    {
      quote: "As a local coordinator, I helped digitize over 1,500 workers. This job changed my life — and theirs.",
      author: "Renu",
      role: "Field Executive",
      location: "Ernakulam"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🚀 Careers at Smar8 Solutions
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
            Empowering People. Transforming Systems. Building the Future.
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Smar8 Solutions, we don't just build apps — we build bridges. Our work empowers millions of migrant workers, simplifies property management, and connects communities across India. If you're passionate about solving real-world problems using technology, you're in the right place.
          </p>
        </div>

        {/* Who We Hire Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            💼 Who We Hire
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            We're always on the lookout for talented, mission-driven individuals to join our fast-growing team. Whether you're a seasoned developer or a fresh graduate with fire in your belly — if you believe in innovation and impact, we want to hear from you.
          </p>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Common Roles:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commonRoles.map((role, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{role.title}</h4>
                  <p className="text-gray-600">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            🌍 Why Work With Us?
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Meaningful Impact</h3>
                <p className="text-gray-700">Your work touches the lives of real people every day.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Growth</h3>
                <p className="text-gray-700">We're scaling fast — grow with us.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Inclusive Culture</h3>
                <p className="text-gray-700">Work with a diverse team across states and languages.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tech + Field Exposure</h3>
                <p className="text-gray-700">Blend digital skills with on-ground experience.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Startup Agility</h3>
                <p className="text-gray-700">Flexible roles, open communication, zero red tape.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            📍 Locations
          </h2>
          <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Our core operations are based in <strong>Kerala</strong>, but we are expanding across India.
            </p>
            <p className="text-lg text-gray-700">
              <strong>Remote & hybrid roles</strong> are available depending on the position.
            </p>
          </div>
        </section>

        {/* How to Apply Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            📝 How to Apply
          </h2>
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <p className="text-lg text-gray-700 mb-6">
              Email us at <a href="mailto:careers@smar8.in" className="text-blue-600 hover:text-blue-800 font-semibold">careers@smar8.in</a> with:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 ml-6 mb-6">
              <li>Subject line: Application – [Role Name]</li>
              <li>Your Resume (PDF)</li>
              <li>A short cover note (optional)</li>
            </ul>
            <p className="text-lg text-gray-700">
              We review applications regularly and will reach out if there's a fit.
            </p>
          </div>
        </section>

        {/* Internships Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            🌱 Internships
          </h2>
          <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
            <p className="text-lg text-gray-700 mb-4">
              We also offer internship and volunteer opportunities for students, NGOs, and community workers.
            </p>
            <p className="text-lg text-gray-700">
              Write to <a href="mailto:interns@smar8.in" className="text-blue-600 hover:text-blue-800 font-semibold">interns@smar8.in</a> for openings.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            💬 Hear From Our Team
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-8">
                <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                  {testimonial.location && (
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🛠 We're Not Just Hiring, We're Building
            </h2>
            <p className="text-xl mb-8 opacity-90">
              If you believe in digital dignity, empowerment through access, and scalable solutions for the grassroots, this is your place.
            </p>
            <div className="text-2xl md:text-3xl font-bold">
              <p className="mb-2">Join Smar8.</p>
              <p>Let's build the future together.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
