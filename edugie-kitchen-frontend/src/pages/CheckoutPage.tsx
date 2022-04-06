import React, { useContext } from "react";
import Nav from "./../components/Nav";
import Form from "./../components/Form";
import Basket from "./../components/Basket";
import { OrderContext } from "../context/ordersContext";
import Footer from "../components/Footer";

const CheckoutPage = () => {
  const { onRemove, onAdd, cartItems } = useContext(OrderContext);
  return (
    <>
      <Nav />
      <Form />
      <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Basket>
      <Footer />
    </>
  );
};

export default CheckoutPage;
