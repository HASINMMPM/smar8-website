import React from 'react'; 
import { FaTicket } from 'react-icons/fa6';
import { FaDesktop, FaHome, FaEnvelope } from 'react-icons/fa';

const Hero: React.FC = () => {
    return (
        <section className="bg-gradient-to-br from-white to-green-50 py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Contact Us
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Get in touch and let us know how we can help you
                    </p>
                </div>

                {/* Two Cards Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">

                    {/* Technical Support Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div className="text-center">
                            {/* Icon */}
                            <div className="w-20 h-20 bg-green-100 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaDesktop className="w-10 h-10 text-green-600" />
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Technical Support
                            </h2>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Already using our product and experiencing technical issues?
                            </p>

                            {/* Phone Number
              <div className="flex items-center justify-center space-x-2 mb-8">
                <span className="text-lg font-medium text-gray-900">1-737-300-9331</span>
                <FaCalendar className="w-4 h-4 text-gray-500" />
              </div> */}

                            {/* Button */}
                            <button className="w-full flex items-center justify-center space-x-2 bg-white border-2 border-green-500 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                                <FaTicket className="w-4 h-4 text-green-600 mr-2" /> Raise a Ticket
                            </button>
                        </div>
                    </div>

                    {/* General Inquiries Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div className="text-center">
                            {/* Icon */}
                            <div className="w-20 h-20 bg-green-100 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaHome className="w-10 h-10 text-green-600" />
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                General Inquiries
                            </h2>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Have a question or want to send feedback? Email us at{' '}
                                <span className="text-green-600 font-medium">support@smar8.com</span>
                            </p>

                            {/* Button */}
                            <button className="w-full bg-white border-2 border-green-500 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                                <FaEnvelope className="w-4 h-4" />
                                <span><a href="mailto:support@smar8.com">Send Email</a></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Additional Contact Information */}
                <div className="mt-16 text-center">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Need More Help?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Our support team is available to help you with any questions about Smar8 Solutions.
                            We typically respond within 24 hours during business days.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            <div>
                                <p className="font-semibold text-gray-900">Business Hours</p>
                                <p className="text-gray-600">Mon-Fri: 9AM-6PM EST</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Response Time</p>
                                <p className="text-gray-600">Within 24 hours</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Support Channels</p>
                                <p className="text-gray-600">Phone, Email, Chat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
