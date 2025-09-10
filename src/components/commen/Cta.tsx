import { FaArrowRight } from "react-icons/fa";

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
    <section className="modern-section">
      <div className="modern-container">
        <div className="modern-card p-12 text-center bg-gradient-to-br from-primary-500 to-primary-600 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {heading}
          </h2>
          {description && (
            <p className="text-lg text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          <a
            href={buttonUrl}
            className="modern-button bg-white text-primary-500 hover:bg-gray-50 inline-flex items-center gap-2"
          >
            {buttonText}
            <FaArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
