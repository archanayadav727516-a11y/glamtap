import {
  FaStar,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function Professional() {
  const reviews = [
    {
      name: "Soni Joshi",
      feedback: "She Was Humble, Kind And Friendly",
    },
    {
      name: "Garima",
      feedback: "Very Professional Service",
    },
    {
      name: "Swati Pundir",
      feedback: "Excellent Experience",
    },
    {
      name: "Kavya",
      feedback: "Her Service Is Very Good She Is Very Kind And Polite!",
    },
  ];

  const points = [
    "The professional arrives on time.",
    "The professional confirms availability before coming.",
    "The professional grooms properly.",
    "The professional uses disposable items before the service starts.",
    "The professional cleans properly after the service.",
    "I am satisfied with the services.",
    "The professional is excellent in all services.",
    "The professional's behavior is exemplary.",
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#173524] to-[#5A382D] rounded-[36px] overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-5xl md:text-6xl font-serif text-white">
          Happy Customers, beautifully experienced
        </h2>

        <p className="text-xl text-gray-200 mt-4 max-w-3xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-6">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative bg-white rounded-[30px] p-6 shadow-xl"
            >
              {/* Quote */}
              <div className="absolute top-0 right-0 w-14 h-14 bg-gradient-to-br from-green-700 to-yellow-400 flex items-center justify-center rounded-bl-2xl">
                <FaQuoteRight className="text-white text-2xl" />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-semibold text-center">
                {review.name}
              </h3>

              {/* Stars */}
              <div className="flex justify-center gap-1 mt-4 mb-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className="text-green-700 text-2xl"
                  />
                ))}
              </div>

              {/* Points */}
              <ul className="space-y-2 text-base text-gray-800">
                {points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-700">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <p className="mt-5 text-center text-green-700 font-bold text-lg">
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