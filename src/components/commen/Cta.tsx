import { FaArrowAltCircleRight } from "react-icons/fa";

interface CtaProps {
  heading: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
}

const Cta = ({
  heading,
  description,
  buttonText = "Get Started",
  buttonUrl = "#"
}: CtaProps) => {
  return (
    <section id="contact" className="pb-16 md:pb-24 text-white mt-16">
      <div className="bg-dark-800 py-8 md:py-16 rounded-2xl w-[90%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="md:w-2/3 md:mb-0 text-center ">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {heading}
            </h2>
            {description && (
              <p className="text-lg text-tertiary-100 mb-8 max-w-2xl mx-auto">
                {description}
              </p>
            )}
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 mt-4 md:mt-12 px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-500 hover:bg-primary-600 md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105"
            >
              {buttonText}
              <span className="text-2xl">
                <FaArrowAltCircleRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
