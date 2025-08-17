import { FaArrowAltCircleRight } from "react-icons/fa";

const Trust = () => {
  return (
    <section className="trustworthiness py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Secure data protection"
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 md:py-12">
            <span className="text-sm font-semibold bg-white/20 p-2 rounded-2xl uppercase py-2">
              🔥 trustworthiness
            </span>
            <h2 className="section-heading text-white my-8">
              Built for Security. Trusted by Owners and Authorities Across
              Kerala.
            </h2>
            <p className="text-lg  mb-8 max-w-lg">
              Our platform uses advanced encryption and security protocols to
              ensure your financial data is always protected. With multi-factor
              authentication and real-time fraud monitoring, you can have peace
              of mind with every transaction.
            </p>
            <button className="flex items-center gap-2 px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105">
              Get Started
              <span className="text-2xl">
                <FaArrowAltCircleRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
