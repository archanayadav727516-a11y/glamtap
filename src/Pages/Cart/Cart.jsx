import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="bg-[#f8f5ef] min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-5xl font-light">Your cart</h1>

          <Link
            to="/"
            className="text-green-700 underline hover:text-green-900"
          >
            Continue shopping
          </Link>
        </div>

        {/* Column Headings */}
        <div className="hidden md:grid grid-cols-12 text-xs uppercase tracking-widest text-gray-500 border-b pb-4">
          <div className="col-span-6">Service</div>
          <div className="col-span-3 text-center">Quantity</div>
          <div className="col-span-3 text-right">Total</div>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-24">
            <h2 className="text-3xl font-semibold">
              Your cart is empty
            </h2>

            <Link
              to="/"
              className="mt-6 inline-block bg-black text-white px-8 py-3 rounded-lg"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.waxType || "default"}`}
                className="grid grid-cols-12 items-center border-b py-8 gap-4"
              >
                {/* Service */}
                <div className="col-span-6">
  <p className="text-xs uppercase text-gray-500">
    {item.duration}
  </p>

  <h2 className="text-xl font-medium mt-1">
    {item.name}
  </h2>

  {item.waxType && (
    <p className="text-sm text-gray-500 mt-1">
      Select type of wax:
      <span className="font-medium"> {item.waxType}</span>
    </p>
  )}

  <div className="flex items-center gap-2 mt-2">
    <span className="text-lg font-bold">
      ₹{item.price}
    </span>

    {item.oldPrice && (
      <span className="line-through text-gray-400">
        ₹{item.oldPrice}
      </span>
    )}

    {item.oldPrice && (
      <span className="text-pink-600 text-sm">
        {Math.round(
          ((item.oldPrice - item.price) / item.oldPrice) * 100
        )}
        % OFF
      </span>
    )}
  </div>


                </div>

                {/* Quantity */}
                <div className="col-span-3 flex justify-center">
                  <div className="flex items-center border rounded-xl overflow-hidden">

                    <button
                     onClick={() => decreaseQuantity(item.id, item.waxType)}
                      className="px-4 py-2 text-xl"
                    >
                      −
                    </button>

                    <span className="px-6">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id, item.waxType)}
                      className="px-4 py-2 text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="col-span-3 text-right">
                  <p className="text-xl font-semibold">
                    ₹{item.price * item.quantity}
                  </p>

                  <button
                    onClick={() => removeItem(item.id, item.waxType)}
                    className="text-red-500 text-sm mt-3"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Footer */}
            <div className="flex justify-between items-center mt-10">

              <div>
                <h2 className="text-2xl font-bold">
                  Grand Total
                </h2>

                <p className="text-4xl font-bold mt-2">
                  ₹{total}
                </p>
              </div>

              <button className="bg-black text-white px-10 py-4 rounded-xl text-lg hover:bg-gray-900 transition">
                Proceed to Checkout
              </button>

            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;