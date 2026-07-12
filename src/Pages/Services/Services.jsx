import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function Services() {
  const { addToCart } = useContext(CartContext);

  const services = [
    {
      id: 1,
      name: "Combo Package",
      image: "/images/A.png",
      price: "₹999",
    },
    {
      id: 2,
      name: "Waxing",
      image: "/images/B.jpg",
      price: "₹499",
    },
    {
      id: 3,
      name: "Facial",
      image: "/images/C.jpg",
      price: "₹799",
    },
    {
      id: 4,
      name: "Clean Up",
      image: "/images/D.jpg",
      price: "₹399",
    },
    {
      id: 5,
      name: "Hair Spa",
      image: "/images/E.jpg",
      price: "₹699",
    },
    {
      id: 6,
      name: "Skin Care",
      image: "/images/F.png",
      price: "₹899",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold">{service.name}</h2>

              <p className="text-pink-500 text-xl font-semibold mt-2">
                {service.price}
              </p>

              <button
                onClick={() => addToCart(service)}
                className="w-full mt-4 bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;