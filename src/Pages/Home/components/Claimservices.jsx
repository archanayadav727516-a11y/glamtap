import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Claimservices() {
  const services = [
    {
      id: 1,
      title: "Wax",
      brand: "Wax Threading",
      price: "₹370/-",
      image:
        "https://i.pinimg.com/736x/53/35/b4/5335b4b7ed80f8622f6a44e9ee1c43d4.jpg",
    },
    {
      id: 2,
      title: "Bikini wax",
      brand: "Bikini wax Threading",
      price: "₹100/-",
      image:
        "https://i.pinimg.com/1200x/15/c3/d3/15c3d3f16b94702002465150f19f9434.jpg",
    },
    {
      id: 3,
      title: "Face & Neck",
      brand: "Face & Neck Threading",
      price: "₹320/-",
      image:
        "https://i.pinimg.com/736x/92/2f/35/922f3587a63bb3f2b761be6f876dc590.jpg",
    },
    {
      id: 4,
      title: "Stress Relief",
      brand: "Stress Relief Threading",
      price: "₹50/-",
      image:
        "https://i.pinimg.com/736x/7e/ce/a3/7ecea3ac6a931c1c172f8b96a5c8b4a0.jpg",
    },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto bg-pink-50 rounded-2xl lg:rounded-[35px] shadow-xl px-4 sm:px-6 lg:px-8 py-6">

        <span className="inline-block px-4 sm:px-6 py-2 rounded-full border bg-white text-pink-700 text-xs sm:text-sm font-semibold tracking-wide">
          LIMITED-TIME WELCOME OFFER
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
          Claim ₹1 Services
        </h2>

        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-pink-600 to-yellow-400 rounded mt-4 mb-5"></div>

        <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl leading-7">
          Unlock complimentary services and add one to your cart before the
          timer runs out. A calmer way to try GlamTap for the first time.
        </p>

        {/* Slider */}
        <div className="relative mt-8">

          {/* Left */}
          <button
            onClick={scrollLeft}
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-pink-500 hover:text-white transition"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Right */}
          <button
            onClick={scrollRight}
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-pink-500 hover:text-white transition"
          >
            <ChevronRight size={26} />
          </button>

          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-1 lg:px-3"
          >
            {services.map((item) => (
              <div
                key={item.id}
                className="snap-center flex-shrink-0 w-[250px] sm:w-[280px] md:w-[300px] lg:w-[320px] h-[340px] sm:h-[380px] md:h-[420px] rounded-3xl overflow-hidden relative group shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-2xl lg:text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-base lg:text-lg mt-1">
                    {item.brand}
                  </p>

                  <div className="flex items-center gap-3 mt-4">
                    <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm">
                      FREE
                    </span>

                    <span className="line-through text-lg text-gray-300">
                      {item.price}
                    </span>
                  </div>

                  <button className="mt-5 w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white px-7 py-3 rounded-full font-semibold transition">
                    Claim Now
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Claimservices;