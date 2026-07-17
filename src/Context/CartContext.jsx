import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState(null);

  // Add To Cart
  const addToCart = (service) => {
    setShowPopup(true);
    setLastAddedItem(service);

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) =>
          item.id === service.id &&
          item.waxType === service.waxType
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === service.id &&
          item.waxType === service.waxType
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...service,
          quantity: 1,
        },
      ];
    });
  };

  // Increase Quantity
  const increaseQuantity = (id, waxType) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.waxType === waxType
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id, waxType) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.waxType === waxType
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove Item
  const removeItem = (id, waxType) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(item.id === id && item.waxType === waxType)
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        showPopup,
        setShowPopup,
        lastAddedItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;