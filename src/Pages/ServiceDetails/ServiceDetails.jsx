import { useParams } from "react-router-dom";
import services from "../../data/services";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ServiceDetails() {
  const { id } = useParams();

  const service = services.find((item) => item.id === Number(id));

  const { addToCart } = useContext(CartContext);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div>
          <img
            src={service.image}
            alt={service.name}
            className="rounded-xl w-full shadow-lg"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold">
            {service.name}
          </h1>

          <p className="text-yellow-500 mt-3">
            ⭐ {service.rating}
          </p>

          <h2 className="text-3xl text-pink-600 font-bold mt-5">
            {service.price}
          </h2>

          <p className="mt-3 text-gray-600">
            Duration : {service.duration}
          </p>

          <p className="mt-6 text-gray-700">
            {service.description}
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-3">
              Benefits
            </h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>Deep Skin Cleansing</li>
              <li>Instant Glow</li>
              <li>Hydrated Skin</li>
              <li>Relaxing Massage</li>
            </ul>
          </div>

          {/* <button
            onClick={() => addToCart(service)}
            className="mt-8 bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600"
          >
            Add To Cart
          </button> */}

          <button
  onClick={() => {
    console.log("Button Clicked");
    console.log(service);
    addToCart(service);
  }}
  className="mt-8 bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600"
>
  Add To Cart
</button>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;