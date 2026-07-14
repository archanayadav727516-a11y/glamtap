import { useParams } from "react-router-dom";
import services from "../../data/services";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ServiceDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const service = services.find((item) => item.id === Number(id));

  if (!service) {
    return (
      <div className="text-center py-16 sm:py-20">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Service Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Image */}
        <div>
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-[280px] sm:h-[420px] lg:h-[520px] object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {service.name}
          </h1>

          <p className="text-lg sm:text-xl text-yellow-500 mt-3">
            ⭐ {service.rating}
          </p>

          <h2 className="text-3xl sm:text-4xl text-pink-600 font-bold mt-5">
            {service.price}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-gray-600">
            <span className="font-semibold">Duration:</span> {service.duration}
          </p>

          <p className="mt-6 text-gray-700 text-sm sm:text-base lg:text-lg leading-7">
            {service.description}
          </p>

          {/* Benefits */}
          <div className="mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">
              Benefits
            </h3>

            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Deep Skin Cleansing</li>
              <li>Instant Glow</li>
              <li>Hydrated Skin</li>
              <li>Relaxing Massage</li>
            </ul>
          </div>

          {/* Button */}
          <button
            onClick={() => addToCart(service)}
            className="mt-8 w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-xl text-base sm:text-lg font-semibold transition duration-300"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;