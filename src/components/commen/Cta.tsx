import { FaArrowAltCircleRight } from "react-icons/fa";
import React from "react";
const Cta = () => {
  return (
    <section id="contact" className=" pb-16 md:pb-24 text-white ">
      <div className=" bg-teal-800  py-16 rounded-2xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join 38 Lakh Workers Going Digital Today
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl">
              Join thousands of satisfied users who have transformed their
              financial management with our secure and flexible platform.
            </p>
            <button className="flex items-center gap-2 px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105">
              Get Started
              <span className="text-2xl">
                <FaArrowAltCircleRight />
              </span>
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
              alt="Financial growth"
              className="rounded-lg shadow-xl w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
