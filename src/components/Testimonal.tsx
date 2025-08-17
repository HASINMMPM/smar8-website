import { FaQuoteRight } from 'react-icons/fa';

const Testimonal = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "Small Business Owner",
      text: "This platform has completely transformed how I manage my finances. The property management tools saved me hours of work each week.",
      rating: 5,
    },
    {
      name: "Maria Alvarez",
      role: "Freelancer",
      text: "As someone who works with international clients, the multi-currency support is a game-changer. The low fees save me hundreds each year.",
      rating: 4.5,
    },
    {
      name: "Robert Kim",
      role: "Investor",
      text: "The investment tools provided insights I couldn't find elsewhere. My portfolio has grown 25% since I started using this platform.",
      rating: 5,
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center text-primary-600 mb-4">
          <span className="section-title text-black">🔥 testimonial</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="section-heading text-black">
            Get to Know Our Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our satisfied users have to say about their experience
            with our platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {
  testimonials.map((testimonial, index) => (
    <div
      key={index}
      className={`rounded-lg shadow-md p-6 ${
        index % 2 === 1
          ? 'bg-green-900 text-white'   
          : 'bg-white text-green-900'  
      }`}
    >
      <div className="flex flex-col items- mb-4 align-center">
        <span className="justify-start text-2xl md:text-4xl"><FaQuoteRight/></span>
        <p className='mt-10'>{testimonial.text}</p>
        <span className="mt-8 font-black">{testimonial.name}</span>
      </div>
    </div>
  ))
}

        </div>
        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 md:py-4 md:text-lg md:px-10 transition duration-300 transform hover:scale-105">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
