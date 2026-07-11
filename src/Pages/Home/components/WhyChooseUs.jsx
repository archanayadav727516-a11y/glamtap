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
      number: "20+",
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Achievements so far
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {stats.map((item, index) => (
            <div key={index} className="text-center">

              <div className="w-36 h-36 mx-auto rounded-full bg-pink-50 flex items-center justify-center mb-6">
                <div className="text-5xl">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-4xl font-bold">
                {item.number}
              </h3>

              <p className="mt-2 text-xl text-gray-600 whitespace-pre-line">
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