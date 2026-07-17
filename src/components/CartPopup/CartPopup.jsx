import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { X } from "lucide-react";

function CartPopup() {
  const {
    showPopup,
    setShowPopup,
    lastAddedItem,
    cart,
  } = useContext(CartContext);

  const navigate = useNavigate();

  if (!showPopup || !lastAddedItem) return null;

  return (
    <div className="fixed top-5 right-5 z-50 w-80 bg-white rounded-2xl shadow-2xl p-5 animate-in slide-in-from-right duration-300">

      <div className="flex justify-between items-center">
        <p className="text-sm font-medium">
          Item added to your cart
        </p>

        <button onClick={() => setShowPopup(false)}>
          <X size={18} />
        </button>
      </div>

      <div className="flex gap-3 mt-5">
        <img
          src={lastAddedItem.image}
          alt={lastAddedItem.name}
          className="w-10 h-10 rounded-lg object-cover"
        />

        <div>
          <p className="text-xs text-gray-400">
            {lastAddedItem.duration}
          </p>

          <h3 className="font-medium">
            {lastAddedItem.name}
          </h3>
        </div>
      </div>

   <button
  onClick={() => {
    setShowPopup(false);
    navigate("/cart");
  }}
  className="w-full mt-6 py-3 rounded-xl border-2 border-gray-700 font-medium hover:bg-gray-100 transition"
>
  View Cart ({cart.length})
</button>

<button
  onClick={() => {
    setShowPopup(false);
  }}
  className="w-full mt-3 text-gray-600 hover:underline"
>
  Continue Shopping
</button>
    </div>
  );
}

export default CartPopup;