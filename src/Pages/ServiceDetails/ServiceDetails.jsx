import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShieldCheck, BadgeCheck, Package } from "lucide-react";
import { CartContext } from "../../Context/CartContext";
import services from "../../data/services";

function ServiceDetails() {
  const { id } = useParams();

  const service = services.find((item) => item.id === Number(id));

  if (!service) {
    return <h1 className="text-center py-20 text-3xl">Service Not Found</h1>;
  }

const [selectedWax, setSelectedWax] = useState("Honey");
const [qty, setQty] = useState(1);

const { addToCart } = useContext(CartContext);

  const current =
    service.options && service.prices
      ? service.prices[selectedWax]
      : {
          oldPrice: service.oldPrice,
          price: service.price,
        };

  const discount = current.oldPrice
    ? Math.round(
        ((current.oldPrice - current.price) / current.oldPrice) * 100
      )
    : 0;

  return (
    <section className="bg-[#f8f5ef] min-h-screen py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-4">

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Image */}
          <div>
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-[300px] object-cover rounded-2xl"
            />
          </div>

          {/* Details */}
          <div>

            <p className="text-blue-600 font-medium">
              {service.booked} women booked
            </p>

            <h1 className="text-5xl font-light mt-3 leading-tight">
              {service.name}
            </h1>

            <div className="flex items-center gap-3 mt-6">
              <span className="line-through text-xl text-gray-500">
                ₹{current.oldPrice}
              </span>

              <span className="text-4xl font-bold">
                ₹{current.price}
              </span>

              <span className="text-pink-600 font-semibold">
                {discount}% OFF
              </span>
            </div>

            <p className="text-gray-600 mt-6">
              {service.description}
            </p>

            {service.options && (
              <>
                <p className="mt-8 mb-3 text-gray-700">
                  Select type of wax
                </p>

                <div className="flex gap-3 flex-wrap">
  {Object.keys(service.prices).map((wax) => (
    <button
      key={wax}
      onClick={() => setSelectedWax(wax)}
      className={`px-6 py-3 rounded-xl border transition ${
        selectedWax === wax
          ? "bg-black text-white"
          : "bg-white hover:bg-gray-100"
      }`}
    >
      {wax === "RollOn" ? "Roll On Wax" : wax}
    </button>
  ))}
</div>
              </>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-gray-600 mb-3">
                Quantity
              </p>

              <div className="flex items-center border rounded-xl w-fit overflow-hidden">

                <button
                  onClick={() =>
                    setQty((q) => (q > 1 ? q - 1 : 1))
                  }
                  className="px-5 py-3 text-xl"
                >
                  −
                </button>

                <span className="px-6">{qty}</span>

                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-5 py-3 text-xl"
                >
                  +
                </button>

              </div>
            </div>

            <button
  onClick={() =>
    addToCart({
      id: service.id,
      name: service.name,
      image: service.image,
      duration: service.duration,
      price: current.price,
      oldPrice: current.oldPrice,
      quantity: qty,
      waxType: service.options ? selectedWax : null,
    })
  }
  className="w-full mt-4 py-4 rounded-xl border border-pink-600 text-pink-700 hover:bg-pink-50 text-lg font-medium"
>
  Add to Cart
</button>

            {/* Features */}
            <div className="grid grid-cols-3 text-center mt-10 gap-6">

              <div>
                <BadgeCheck
                  size={36}
                  className="mx-auto mb-2"
                />
                <p className="text-sm">
                  Expert Female Partners
                </p>
              </div>

              <div>
                <ShieldCheck
                  size={36}
                  className="mx-auto mb-2"
                />
                <p className="text-sm">
                  100% Safe & Hygienic
                </p>
              </div>

              <div>
                <Package
                  size={36}
                  className="mx-auto mb-2"
                />
                <p className="text-sm">
                  Branded Products
                </p>
              </div>

            </div>

            <button className="mt-10 text-pink-700 font-medium hover:underline">
              View full details →
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;