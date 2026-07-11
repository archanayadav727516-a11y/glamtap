import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (service) => {
    console.log("✅ addToCart Called");
    console.log("Service:", service);

    setCart((prevCart) => {
      console.log("Previous Cart:", prevCart);

      const existingItem = prevCart.find(
        (item) => item.id === service.id
      );

      if (existingItem) {
        console.log("Item already exists. Increasing quantity...");

        return prevCart.map((item) =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      console.log("New item added.");

      return [...prevCart, { ...service, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    console.log("Increase Quantity:", id);

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    console.log("Decrease Quantity:", id);

    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    console.log("Remove Item:", id);

    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  console.log("Current Cart:", cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;