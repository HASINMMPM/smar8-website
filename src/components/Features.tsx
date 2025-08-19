import { FaArrowAltCircleRight } from "react-icons/fa";
import { CgCheckO } from "react-icons/cg";

const features = [
  "₹40 Documentation per Registration",
  "₹20 for Room Shifts (up to 4 allowed)",
  "Fully Digital Record for Each Tenant",
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-primary-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="flex items-center text-black mb-4">
              <i className="fas fa-fire mr-2" />
              <span className="section-title">🔥 featured</span>
            </div>
            <h2 className="section-heading text-black">
              All the features in one app
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-md">
              <div className="space-y-3">
                {features.map((text, index) => (
                  <div key={index} className="flex items-start">
                    <CgCheckO className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-lg font-semibold text-gray-800">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center">
                <div className="bg-primary-100 p-2 rounded-full mr-4">
                  <i className="fas fa-coins text-primary-600" />
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105">
              Download Our App{" "}
              <span className="text-2xl">
                <FaArrowAltCircleRight />
              </span>
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Financial dashboard"
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
