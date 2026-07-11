import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Hero() {
  const images = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg",
    "/images/banner4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Next
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  // Previous
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative w-full h-[650px] overflow-hidden">

      {/* Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

  
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index
                ? "bg-pink-500 w-8"
                : "bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;