import { useParams } from "react-router-dom";
import services from "../../data/services";

function ServiceDetails() {
  const { id } = useParams();

  const service = services.find((item) => item.id === Number(id));

  if (!service) {
    return <h1 className="text-center py-20">Service Not Found</h1>;
  }

  return (
    <section className="max-w-7xl mx-auto py-10 px-6">
      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={service.image}
          alt={service.name}
          className="w-full rounded-xl shadow-lg"
        />

        <div>

          <p className="text-blue-600">
            {service.booked} women booked
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {service.name}
          </h1>

          <div className="flex items-center gap-3 mt-5">

            <span className="line-through text-gray-500">
              ₹{service.oldPrice}
            </span>

            <span className="text-3xl font-bold">
              ₹{service.price}
            </span>

            <span className="text-green-600 font-semibold">
              {service.discount}% OFF
            </span>

          </div>

          <p className="mt-6 text-gray-600">
            {service.description}
          </p>

          <div className="flex gap-3 mt-8">
            <button className="px-5 py-2 rounded bg-black text-white">
              Honey
            </button>

            <button className="px-5 py-2 border rounded">
              Rica
            </button>

            <button className="px-5 py-2 border rounded">
              Roll On Wax
            </button>
          </div>

          <button className="w-full mt-8 py-3 bg-pink-600 text-white rounded-lg">
            Add To Cart
          </button>

        </div>

      </div>
    </section>
  );
}

export default ServiceDetails;