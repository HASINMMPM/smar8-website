
import { FaArrowAltCircleRight } from "react-icons/fa";
import {
  MdMeetingRoom,
  MdCompareArrows,
  MdReport,
  MdWork,
  MdPayment,
  MdLanguage,
} from "react-icons/md";


const services = [
  {
    title: "Digital Room Registration",
    description:
      "Register and allocate rooms digitally for faster and transparent move-ins.",
    icon: <MdMeetingRoom className="text-green-600 text-3xl" />,
  },
  {
    title: "Rental Movement Logs",
    description:
      "Track tenant movement between rooms with automated logs for better management.",
    icon: <MdCompareArrows className="text-green-600 text-3xl" />,
  },
  {
    title: "Police Report Automation",
    description:
      "Auto-generate tenant police reports with a single click, saving time and ensuring compliance.",
    icon: <MdReport className="text-green-600 text-3xl" />,
  },
  {
    title: "Job Finder for Migrants",
    description:
      "Discover job opportunities in nearby areas, tailored for migrant workers.",
    icon: <MdWork className="text-green-600 text-3xl" />,
  },
  {
    title: "UPI-based Money Transfers",
    description:
      "Send and receive money instantly through secure UPI integration.",
    icon: <MdPayment className="text-green-600 text-3xl" />,
  },
  {
    title: "Support in Bengali, Hindi, Malayalam...",
    description:
      "Access the entire platform in your native language for better understanding and comfort.",
    icon: <MdLanguage className="text-green-600 text-3xl" />,
  },
];


const Service = () => {
  return (
    <section className="py-16 md:py-24 bg-green-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center text-primary-600 mb-4">
            <span className="section-title text-black">🔥 services</span>
          </div>
          <h2 className="section-heading text-black">
            Can Help You Achieve Financial Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of services designed to meet all your financial
            needs in one convenient platform.
          </p>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 p-3 rounded-full mr-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
        <div className="text-center mt-16 flex justify-center">
          <button className="flex items-center gap-2 px-8 py-3 border border-green-900 text-base font-medium rounded-full text-green-900 md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105 hover:bg-white">
            View More{" "}
            <span className="text-2xl">
              <FaArrowAltCircleRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Service;
