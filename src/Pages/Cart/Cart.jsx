import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(CartContext);

  console.log("🛒 Cart Data:", cart);

  const total = cart.reduce((sum, item) => {
    return sum + Number(item.price.replace("₹", "")) * item.quantity;
  }, 0);

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <>
          {cart.map((item) => {
            console.log("Item:", item);

            return (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-6"
              >
                <div>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p>{item.price}</p>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => {
                        console.log("➖ Decrease:", item.id);
                        decreaseQuantity(item.id);
                      }}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => {
                        console.log("➕ Increase:", item.id);
                        increaseQuantity(item.id);
                      }}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 rounded mb-3"
                  />

                  <button
                    onClick={() => {
                      console.log("🗑 Remove:", item.id);
                      removeItem(item.id);
                    }}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}

          <div className="mt-10 flex justify-between items-center">
            <h2 className="text-3xl font-bold">
              Total: ₹{total}
            </h2>

            <button className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;