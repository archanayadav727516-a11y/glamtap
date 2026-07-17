import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ServiceCarousel from "../Home/components/ServiceCarousel";
import { ShieldCheck, BadgeCheck, Package } from "lucide-react";
import { CartContext } from "../../Context/CartContext";
import services from "../../data/services";

function Services() {
  const { addToCart } = useContext(CartContext);
  const { category } = useParams();
  
const navigate = useNavigate();
  console.log("Route:", category);

 const normalizeCategory = (value = "") =>
  value
    .trim()
    .toLowerCase()
    .replace(/&/g, "")        // <-- and ki jagah remove
    .replace(/[^a-z0-9]/g, "");

  console.log("Normalized:", normalizeCategory(category));

 const filteredServices = category
  ? services.filter((service) => {
      const serviceCategory = normalizeCategory(service.category);
      const routeCategory = normalizeCategory(category);

      console.log(
        "Service:",
        service.category,
        "=>",
        serviceCategory,
        "| Route:",
        routeCategory
      );

      return serviceCategory === routeCategory;
    })
  : services;

console.log("Filtered Services:", filteredServices);


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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
  {filteredServices.map((service) => (
    <div
      key={service.id}
      onClick={() => navigate(`/service/${service.id}`)}
       className="w-full max-w-[250px] bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col cursor-pointer"

    >
      {/* Image */}
      <img
        src={service.image}
        alt={service.name}
          className="w-full h-32 object-cover"
      />

      {/* Content */}
       <div className="p-2 flex flex-col flex-1">

        {/* Name */}
        <h2 className="text-[15px] font-semibold leading-5 h-10 overflow-hidden">
          {service.name}
        </h2>

        {/* Duration */}
        <p className="text-[11px] uppercase text-gray-500 mt-1">
          {service.duration}
        </p>

        {/* Description */}
        <p className="text-[13px] text-gray-700 mt-1 h-10 overflow-hidden">
          {service.description || "\u00A0"}
        </p>

        {/* Price */}
      {/* Price */}
<div className="flex items-center gap-2 mt-2">
  <span className="line-through text-gray-500 text-sm">
    ₹
    {service.options
      ? service.prices?.Honey?.oldPrice ?? 0
      : service.oldPrice}
  </span>

  <span className="text-lg font-bold">
    ₹
    {service.options
      ? service.prices?.Honey?.price ?? 0
      : service.price}
  </span>

  <span className="text-pink-600 text-sm font-medium">
    {service.options
      ? Math.round(
          (
            ((service.prices?.Honey?.oldPrice ?? 0) -
              (service.prices?.Honey?.price ?? 0)) /
            (service.prices?.Honey?.oldPrice ?? 1)
          ) * 100
        )
      : service.discount}
    % OFF
  </span>
</div>

        {/* Booked */}
       <p className="text-xs text-blue-600 mt-1">

          {service.booked} women booked
        </p>

        {/* Button */}
        <button
  onClick={(e) => {
    e.stopPropagation();

    if (service.options) {
      navigate(`/service/${service.id}`);
    } else {
      addToCart(service);
    }
  }}
  className="mt-3 w-full h-10 rounded-lg border border-pink-500 text-pink-600 font-medium"
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