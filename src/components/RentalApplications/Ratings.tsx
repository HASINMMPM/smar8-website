import { FaStar } from 'react-icons/fa';

const Ratings = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8">
          {['Capterra', 'G2 Crowd', 'SoftwareAdvice', 'GetApp'].map((platform) => (
            <div key={platform} className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <span className="text-dark-600 font-medium">{platform}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ratings;
