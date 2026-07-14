import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ServiceCarousel from "../Home/components/ServiceCarousel";
import services from "../../data/services";

function Services() {
  const { addToCart } = useContext(CartContext);
  const { category } = useParams();

  const normalizeCategory = (value = "") =>
    value
      .trim()
      .toLowerCase()
      .replace(/[\s-]+/g, "");

  const filteredServices = category
    ? services.filter(
        (service) =>
          normalizeCategory(service.category) ===
          normalizeCategory(category)
      )
    : services;

  return (
    <section className="bg-[#f8f5ef] min-h-screen py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Categories */}
        <ServiceCarousel />

        {/* Heading */}
        <div className="text-center mt-8 mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold capitalize">
            {category
              ? `${category.replace(/-/g, " ")} Services`
              : "All Beauty Services"}
          </h1>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Professional salon services at your home
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="w-full max-w-[320px] bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-44 sm:h-48 object-cover"
              />

              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-lg font-semibold leading-6 line-clamp-2 min-h-[52px]">
                  {service.name}
                </h2>

                <p className="text-xs uppercase tracking-wider text-gray-500 mt-2">
                  {service.duration}
                </p>

                <p className="text-sm text-gray-700 mt-3 line-clamp-2 min-h-[42px]">
                  {service.description}
                </p>

                <div className="flex items-center flex-wrap gap-2 mt-4">
                  <span className="text-sm text-gray-400 line-through">
                    ₹{service.oldPrice}
                  </span>

                  <span className="text-2xl font-bold">
                    ₹{service.price}
                  </span>

                  <span className="text-xs font-semibold text-pink-600">
                    {service.discount}% OFF
                  </span>
                </div>

                <p className="text-sm text-blue-600 mt-3">
                  {service.booked} women booked
                </p>

                <button
                  onClick={() => addToCart(service)}
                  className="mt-6 w-full h-11 rounded-xl border-2 border-pink-600 text-pink-600 font-semibold hover:bg-pink-600 hover:text-white transition"
                >
                  {service.options ? "Choose Options" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              No Services Found
            </h2>

            <p className="text-gray-500 mt-3 text-sm sm:text-base">
              Please select another category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;