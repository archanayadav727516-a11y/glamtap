
import { Link } from "react-router-dom";
import services from "../../../data/services";
function FeaturedServices() {



  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    {service.name}
                  </h3>

                  <span className="text-yellow-500">
                    ⭐ {service.rating}
                  </span>
                </div>

                <p className="text-gray-500 mt-2">
                  Duration: {service.duration}
                </p>

                <div className="flex justify-between items-center mt-5">

                  <span className="text-pink-600 font-bold text-xl">
                    {service.price}
                  </span>

                  {/* <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
                    Book Now
                  </button> */}
                  <Link
  to={`/service/${service.id}`}
  className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
>
  Book Now
</Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedServices;