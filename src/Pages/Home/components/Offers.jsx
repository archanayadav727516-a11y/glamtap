function Offers() {
  const brands = [
    "/images/Lan.jpg",
    "/images/Lore.jpg",
    "/images/O+.webp",
    "/images/Rich.png",
    "/images/Sey.png",
   
  ];

  return (
    <section className="py-16 bg-white-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-black mb-3">
          Best Brands We Use
        </h2>

        <p className="text-xl italic text-gray-600 mb-10">
          We use best Brands in 1-Time use packs
        </p>

        {/* Auto Scrolling Brands */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="w-80 h-40 bg-white-50 border border-pink-200 flex items-center justify-center shrink-0 hover:bg-white transition-all duration-300"
              >
                <img
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="w-60 h-28 object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;