import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CartContext } from "../../Context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(CartContext);

  // Calendar State
  const [date, setDate] = useState(new Date());

  // Time Slot State
  const [slot, setSlot] = useState("");

  // Cart Total
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );
// Order Summary
const subtotal = total;
const tax = subtotal * 0.1;
const grandTotal = subtotal + tax;

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
            <div className="grid lg:grid-cols-3 gap-10 mt-10">

 

    {/* LEFT SIDE */}
    {/* LEFT SIDE */}
<div className="lg:col-span-2">

  {cart.map((item) => (
    <div
      key={`${item.id}-${item.waxType || "default"}`}
      className="flex flex-col md:flex-row justify-between gap-6 border-b py-6"
    >
      {/* Left Info */}
      <div className="flex gap-5 flex-1">

        {/* Service Image */}
        {/* <img
          src={item.image}
          alt={item.name}
          className="w-28 h-28 rounded-xl object-cover border"
        /> */}

        {/* Service Details */}
        <div className="flex-1">
          <p className="text-xs uppercase tracking-wide text-gray-500">
            {item.duration}
          </p>

          <h2 className="text-xl font-semibold mt-1">
            {item.name}
          </h2>

          {/* Description */}
          {item.description && (
            <p className="text-gray-500 text-sm mt-2">
              {item.description}
            </p>
          )}

          {/* Wax Type */}
          {item.waxType && (
            <p className="text-sm mt-2">
              <span className="font-medium">
                Wax Type:
              </span>{" "}
              {item.waxType}
            </p>
          )}

          {/* Price */}
          <div className="flex items-center gap-3 mt-3">
            <span className="text-xl font-bold text-fuchsia-700">
              ₹{item.price}
            </span>

            {item.oldPrice && (
              <span className="line-through text-gray-400">
                ₹{item.oldPrice}
              </span>
            )}

            {item.oldPrice && (
              <span className="text-green-600 text-sm font-medium">
                {Math.round(
                  ((item.oldPrice - item.price) /
                    item.oldPrice) *
                    100
                )}
                % OFF
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex flex-col items-end justify-between">

        {/* Quantity */}
        <div className="flex items-center border rounded-xl overflow-hidden">
          <button
            onClick={() =>
              decreaseQuantity(item.id, item.waxType)
            }
            className="px-4 py-2 text-xl hover:bg-gray-100"
          >
            −
          </button>

          <span className="px-6 font-semibold">
            {item.quantity}
          </span>

          <button
            onClick={() =>
              increaseQuantity(item.id, item.waxType)
            }
            className="px-4 py-2 text-xl hover:bg-gray-100"
          >
            +
          </button>
        </div>

        {/* Total */}
        <div className="text-right mt-4">
          <p className="text-xl font-bold">
            ₹{item.price * item.quantity}
          </p>

          <button
            onClick={() =>
              removeItem(item.id, item.waxType)
            }
            className="text-red-500 text-sm mt-2 hover:underline"
          >
            Remove
          </button>
        </div>

      </div>
    </div>
  ))}

</div>
{/* RIGHT SIDE */}
<div className="lg:col-span-1">
  <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">

    <div className="flex justify-between mb-3">
      <span>Subtotal</span>
      <span>₹{subtotal.toFixed(2)}</span>
    </div>

    <div className="flex justify-between mb-3">
      <span>Taxes & Fee (10%)</span>
      <span>₹{tax.toFixed(2)}</span>
    </div>

    <hr className="my-4" />

    <div className="flex justify-between text-xl font-bold">
      <span>Total</span>
      <span>₹{grandTotal.toFixed(2)}</span>
    </div>

    <p className="text-center text-sm mt-4 text-gray-500">
      Have a Coupon? Apply it at Checkout
    </p>

    <div className="border-2 border-green-700 rounded-xl mt-6 p-5 text-center">
      <h2 className="text-2xl font-bold text-green-700">
        100% SATISFACTION
      </h2>

      <p className="text-xl text-green-700">
        GUARANTEED ALWAYS
      </p>

      <p className="mt-2 text-gray-600">
        Expert Pros (5+ Years) | Verified Professionals
      </p>
    </div>

    <div className="mt-8">
      <h3 className="font-semibold mb-3">
        Select Service Date
      </h3>

      <Calendar
        value={date}
        onChange={setDate}
      />
    </div>

    <div className="mt-6">
      <h3 className="font-semibold mb-3">
        Choose Your Preferred Time Slot
      </h3>

      <select
        value={slot}
        onChange={(e) => setSlot(e.target.value)}
        className="w-full border rounded-lg p-3"
      >
        <option value="">Select an arrival time</option>
        <option>09:00 AM</option>
        <option>10:00 AM</option>
        <option>11:00 AM</option>
        <option>12:00 PM</option>
        <option>02:00 PM</option>
        <option>04:00 PM</option>
        <option>06:00 PM</option>
      </select>
    </div>

    <button className="w-full mt-6 bg-fuchsia-700 hover:bg-fuchsia-800 text-white py-4 rounded-xl">
      Confirm Slot
    </button>

  </div>
</div>


</div> {/* End Main Grid */}

          </>
        )}
      </div>
    </div>
  );
}

export default Cart;