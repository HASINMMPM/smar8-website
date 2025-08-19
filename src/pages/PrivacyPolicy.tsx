import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">


      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              🛡️ Privacy Policy – Smar8 Solutions
            </h1>
            <p className="text-xl text-gray-600">
              Effective Date: [Insert Date]
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed">
              Smar8 Solutions ("we", "us", or "our") respects your privacy and is committed to protecting the personal information of users who interact with our platform, including through our mobile apps and website.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your data.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-blue-500 mr-3">🔍 1.</span>
                What Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">We collect the following types of data:</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">a. Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-6">
                    <li>Full Name</li>
                    <li>Aadhar Number (or other ID proof)</li>
                    <li>Mobile Number</li>
                    <li>Gender, Date of Birth</li>
                    <li>Photograph</li>
                    <li>Room or Property Details</li>
                    <li>Language Preference</li>
                    <li>Emergency Contact</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">b. Location & Usage</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-6">
                    <li>Location when using the app (if enabled)</li>
                    <li>Logs of room-to-room movement</li>
                    <li>Job search activities</li>
                    <li>App interaction logs</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-green-500 mr-3">🔐 2.</span>
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">We use the information to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-6">
                <li>Complete digital registration with property owners</li>
                <li>Generate and submit police/intimation reports</li>
                <li>Track and manage housing movements</li>
                <li>Connect users with job opportunities</li>
                <li>Provide personalized, language-specific services</li>
                <li>Improve app performance and user experience</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-purple-500 mr-3">📤 3.</span>
                Sharing of Information
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell your data to anyone. We may share your data:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-6">
                <li>With property owners for verification and record purposes</li>
                <li>With local police authorities (only with your consent or as mandated)</li>
                <li>With government agencies if legally required</li>
                <li>With our technology partners to improve services (e.g., hosting providers)</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-red-500 mr-3">🛡️ 4.</span>
                Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement strong technical and administrative security measures, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-6">
                <li>End-to-end encrypted data storage</li>
                <li>Restricted staff access</li>
                <li>Regular audits and backups</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-yellow-500 mr-3">🕒 5.</span>
                Data Retention
              </h2>
              <p className="text-gray-700">
                We retain your data as long as your account is active or as needed for legal/regulatory purposes. You may request account deletion at any time.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-indigo-500 mr-3">⚖️ 6.</span>
                Your Rights
              </h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-6">
                <li>View or download your data</li>
                <li>Request correction of any wrong information</li>
                <li>Withdraw consent or request deletion</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To do so, contact us at: [Insert Contact Email or Phone]
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-pink-500 mr-3">👶 7.</span>
                Children's Privacy
              </h2>
              <p className="text-gray-700">
                Our platform is not intended for users under the age of 18 unless used with guardian/owner supervision.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-teal-500 mr-3">🌐 8.</span>
                Third-Party Services
              </h2>
              <p className="text-gray-700">
                We may use third-party services (e.g., Google Maps, payment gateways). These services have their own privacy policies which we encourage you to review.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-orange-500 mr-3">🔄 9.</span>
                Policy Updates
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy occasionally. All changes will be posted here with an updated "Effective Date".
              </p>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-blue-500 mr-3">📩</span>
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">If you have questions or complaints, contact:</p>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smar8 Solutions</h3>
                <div className="space-y-2 text-gray-700">
                  <p>[Your Office Address or City]</p>
                  <p className="flex items-center">
                    <span className="text-blue-500 mr-3">📧</span>
                    Email: <a href="mailto:support@smar8.in" className="text-blue-600 hover:text-blue-800 ml-2">support@smar8.in</a>
                  </p>
                  <p className="flex items-center">
                    <span className="text-blue-500 mr-3">📞</span>
                    Phone: <a href="tel:+91-XXXXXXXXXX" className="text-blue-600 hover:text-blue-800 ml-2">+91-XXXXXXXXXX</a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
