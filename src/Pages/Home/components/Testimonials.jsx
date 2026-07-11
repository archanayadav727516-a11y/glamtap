function Testimonials() {
  const features = [
    {
      title: "Affordable Price",
      image: "/images/A.png",
    },
    {
      title: "On Time Services",
      image: "/images/B.jpg",
    },
    {
      title: "Trained & Verified\nBeauticians",
      image: "/images/C.jpg",
    },
    {
      title: "Safe & Hygienic\nServices",
      image: "/images/D.jpg",
    },
    {
      title: "One-Time Product\nMono-dose used",
      image: "/images/E.jpg",
    },
    {
      title: "One Time Disposable\nUse",
      image: "/images/F.png",
    },
  ];

  return (
    <section className="bg-[#FCEEE7] rounded-3xl py-8 px-5">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
        Why Choose Glam Tap?
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
        {features.map((item, index) => (
          <div
            key={index}
            className="relative h-44 md:h-48 overflow-hidden rounded-3xl group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-4 left-0 right-0 px-4 text-center">
              <h3 className="text-white text-xl md:text-2xl font-semibold whitespace-pre-line">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;