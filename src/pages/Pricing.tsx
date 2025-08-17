import React from 'react';

interface PricingItem {
  icon: string;
  service: string;
  price: string;
  notes: string;
}

interface AddOnItem {
  icon: string;
  addOn: string;
  price: string;
  availability: string;
}

interface PaymentMethod {
  icon: string;
  name: string;
}

interface ChecklistItem {
  text: string;
}

const Pricing: React.FC = () => {
  const tenantPricing: PricingItem[] = [
    {
      icon: "📝",
      service: "First-Time Registration",
      price: "₹40",
      notes: "Includes ID submission, photo capture, and digital tenant profile"
    },
    {
      icon: "🔄",
      service: "Room Shift Registration",
      price: "₹20 per shift",
      notes: "Charged each time you move to a new room/property (max 4 allowed per year)"
    },
    {
      icon: "📄",
      service: "Digital Copy / Record Access",
      price: "FREE",
      notes: "Access your record anytime in the app"
    },
    {
      icon: "💬",
      service: "Multi-Language Support",
      price: "FREE",
      notes: "Available in 7 Indian languages"
    }
  ];

  const ownerPricing: PricingItem[] = [
    {
      icon: "🏘️",
      service: "Owner App Access",
      price: "FREE",
      notes: "Create and manage properties, view reports"
    },
    {
      icon: "👤",
      service: "Tenant Registration via App",
      price: "₹40 per tenant",
      notes: "Paid by owner or tenant (can be adjusted as needed)"
    },
    {
      icon: "🔄",
      service: "Room Shift / Reassignment",
      price: "₹20 per tenant shift",
      notes: "Helps keep police reports and digital logs updated"
    },
    {
      icon: "📊",
      service: "Reports & Logs (Monthly)",
      price: "FREE",
      notes: "Downloadable in Excel / PDF format"
    },
    {
      icon: "🧾",
      service: "Annual Platform Maintenance",
      price: "₹999/year (optional)",
      notes: "For premium features, support & compliance automation"
    }
  ];

  const addOns: AddOnItem[] = [
    {
      icon: "📝",
      addOn: "Police Auto-Intimation Tool",
      price: "₹299/year",
      availability: "Pilot in select cities"
    },
    {
      icon: "💼",
      addOn: "Job Posting for Employers",
      price: "₹199/month",
      availability: "For verified local businesses"
    },
    {
      icon: "🧮",
      addOn: "Analytics Dashboard (Advanced)",
      price: "₹499/year",
      availability: "For property groups and NGOs"
    }
  ];

  const paymentMethods: PaymentMethod[] = [
    { icon: "📱", name: "UPI / QR Code" },
    { icon: "💳", name: "Debit/Credit Card" },
    { icon: "👛", name: "Wallets" },
    { icon: "💵", name: "Cash (via coordinators)" }
  ];

  const checklistItems: ChecklistItem[] = [
    { text: "No Registration = No Tracking" },
    { text: "Low-cost = High compliance" },
    { text: "Designed for rural and urban India" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            💰 Pricing – Smar8 Solutions
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
            Simple. Transparent. Affordable.
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our pricing is designed to keep things accessible for migrant workers and sustainable for property owners — no hidden fees, no surprises.
          </p>
        </div>

        {/* Tenant Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            🧍 For Tenants / Migrant Workers
          </h2>
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tenantPricing.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <span className="font-medium text-gray-900">{item.service}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-2xl font-bold text-blue-600">{item.price}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Mobile Cards */}
            <div className="md:hidden">
              {tenantPricing.map((item, index) => (
                <div key={index} className="p-6 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="font-medium text-gray-900">{item.service}</span>
                    </div>
                    <span className="text-xl font-bold text-blue-600">{item.price}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{item.notes}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 px-6 py-4">
              <p className="text-sm text-gray-700">
                📌 All tenant payments include digital receipts and report generation. Self-attested documents required.
              </p>
            </div>
          </div>
        </section>

        {/* Owner Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            🏢 For Building Owners / Landlords
          </h2>
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {ownerPricing.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <span className="font-medium text-gray-900">{item.service}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-2xl font-bold text-blue-600">{item.price}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Mobile Cards */}
            <div className="md:hidden">
              {ownerPricing.map((item, index) => (
                <div key={index} className="p-6 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="font-medium text-gray-900">{item.service}</span>
                    </div>
                    <span className="text-xl font-bold text-blue-600">{item.price}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{item.notes}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 px-6 py-4">
              <p className="text-sm text-gray-700">
                💡 Discounts available for bulk onboarding (20+ tenants) or multi-property owners.
              </p>
            </div>
          </div>
        </section>

        {/* Optional Add-ons Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            📦 Optional Add-ons (Coming Soon)
          </h2>
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Add-On</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Availability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {addOns.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <span className="font-medium text-gray-900">{item.addOn}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-xl font-bold text-green-600">{item.price}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{item.availability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Mobile Cards */}
            <div className="md:hidden">
              {addOns.map((item, index) => (
                <div key={index} className="p-6 border-b border-gray-200 last:border-b-0">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="font-medium text-gray-900">{item.addOn}</span>
                    </div>
                    <span className="text-xl font-bold text-green-600">{item.price}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{item.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            💳 Payment Methods
          </h2>
          <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-8 text-center">
              We support:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paymentMethods.map((method, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-3">{method.icon}</div>
                  <p className="font-medium text-gray-900">{method.name}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-700 mt-8">
              All receipts are digitally generated and stored in your account.
            </p>
          </div>
        </section>

        {/* Built For Everyone Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            🛠 Built For Everyone
          </h2>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-center mb-6 last:mb-0">
                  <span className="text-2xl mr-4">✅</span>
                  <span className="text-xl">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact for Bulk Pricing Footer CTA */}
        <section className="text-center">
          <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🤝 Need Bulk Pricing or NGO Support?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              If you're an organization managing 50+ tenants or working in welfare, reach out to us at:
            </p>
            <div className="mb-8">
              <a
                href="mailto:billing@smar8.in"
                className="inline-flex items-center text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <span className="mr-3">📧</span>
                billing@smar8.in
              </a>
            </div>
            <a
              href="mailto:billing@smar8.in"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg shadow-lg"
            >
              <span className="mr-2">💬</span>
              Contact Billing Team
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
