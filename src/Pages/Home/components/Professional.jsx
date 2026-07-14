import {
  FaStar,
  // FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function Professional() {
  const reviews = [
    {
      name: "Ananya Sharma",
      feedback: " salon experience.",
      points: [
        "Professional arrived on time.",
        "Booking process was smooth.",
        "Service was hygienic.",
        "Products used were of good quality.",
        "Staff was polite and professional.",
      ],
    },
    {
      name: "Neha Verma",
      feedback: "Very Professional Service.",
      points: [
        "Excellent facial service.",
        "Professional explained every step.",
        "Clean and sanitized equipment.",
        "Great attention to detail.",
        "Will book again.",
      ],
    },
    {
      name: "Riya Gupta",
      feedback: "Highly Recommended.",
      points: [
        "Waxing service was painless.",
        "Professional was very friendly.",
        "Arrived exactly on schedule.",
        "Maintained proper hygiene.",
        "Highly recommended.",
      ],
    },
    {
      name: "Sneha Kapoor",
      feedback: "Amazing Service Experience.",
      points: [
        "Amazing manicure and pedicure.",
        "Neat and clean setup.",
        "Premium quality products.",
        "Very satisfied with the service.",
        "Worth every penny.",
      ],
    },
    {
      name: "Pooja Singh",
      feedback: "Excellent Home Service.",
      points: [
        "Quick and hassle-free booking.",
        "Professional behavior.",
        "Excellent cleanup service.",
        "Home service experience was comfortable.",
        "Will recommend to friends.",
      ],
    },
    {
      name: "Radhika Sharma",
      feedback: "Outstanding Professional Experience.",
      points: [
        "The professional arrived exactly on time.",
        "The products used were clean and of high quality.",
        "The service was smooth, relaxing, and professionally done.",
      
        
      ],
    },
  ];

  return (
<section className="py-2 bg-white rounded-[24px] overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="text-3xl md:text-4xl font-serif text-black font-bold">
         Testimonials
        </h2>

       <p className="text-base text-gray-600 mt-2 max-w-2xl mx-auto">
          Real stories from clients who booked, relaxed, and came back for the
          experience.
        </p>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center">
          <FaChevronLeft className="text-lg text-green-900" />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {reviews.map((review, index) => (
            <div
              key={index}
            className="relative bg-white rounded-2xl p-4 shadow-lg h-[420px] flex flex-col"
            >
              {/* Quote */}
              {/* <div className="absolute top-0 right-0 w-14 h-14 bg-gradient-to-br from-green-700 to-yellow-400 flex items-center justify-center rounded-bl-2xl">
                <FaQuoteRight className="text-white text-2xl" />
              </div> */}

              {/* Name */}
              <h3 className="text-2xl font-semibold text-center">
                {review.name}
              </h3>

              {/* Stars */}
              <div className="flex justify-center gap-1 mt-4 mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-pink-700 text-2xl" />
                ))}
              </div>

              {/* Points */}
              <ul className="space-y-2 text-base text-gray-800">
                {review.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-700 font-bold">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <p className="mt-5 text-center text-pink-700 font-bold text-lg">
                {review.feedback}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center">
          <FaChevronRight className="text-lg text-green-900" />
        </button>
      </div>
    </section>
  );
}

export default Professional;