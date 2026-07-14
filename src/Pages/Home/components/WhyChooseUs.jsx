import {
  FaUserCheck,
  FaDownload,
  FaSpa,
  FaMapMarkerAlt,
  FaRegStar,
} from "react-icons/fa";

function WhyChooseUs() {
  const stats = [
    {
      icon: <FaUserCheck className="text-gray-800" />,
      number: "100+",
      title: "Professionals",
    },
    {
      icon: <FaDownload className="text-gray-800" />,
      number: "10K+",
      title: "App Download",
    },
    {
      icon: <FaSpa className="text-gray-800" />,
      number: "15K+",
      title: "Bookings Completed",
    },
    {
      icon: <FaMapMarkerAlt className="text-gray-800" />,
      number: "6+",
      title: "Cities in India",
    },
    {
      icon: <FaRegStar className="text-gray-800" />,
      number: "4.8 ★",
      title: "India's Top Rated\nBeauty App",
    },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-16">
          Achievements so far
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 mx-auto rounded-full bg-pink-50 flex items-center justify-center mb-4 sm:mb-5 lg:mb-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                {item.number}
              </h3>

              <p className="mt-2 text-sm sm:text-base lg:text-xl text-gray-600 whitespace-pre-line">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;