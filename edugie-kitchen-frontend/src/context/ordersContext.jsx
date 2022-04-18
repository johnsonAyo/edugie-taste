import { createContext, useState } from "react";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist?.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist?.qty - 1 } : x
        )
      );
    }
  };

  // export const getUserToken = () => {
  //   let data = localStorage.getItem("tweeter");
  //   console.log(data);

  const onAdd = (item) => {
    const exist = cartItems.find((x) => x._id === item._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === item._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const storeUserOrders = (orders) => {
    let data = localStorage.setItem("ORDERS", JSON.stringify(orders));
  };

  const getUserOrders = () => {
    let data = localStorage.getItem("ORDERS");
    return data;
  };

  return (
    <OrderContext.Provider
      value={{ onAdd, onRemove, cartItems, storeUserOrders, getUserOrders }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
