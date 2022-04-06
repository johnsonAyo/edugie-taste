import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Form from "./Form";
import Basket from "./Basket";
import { OrderContext } from "../context/ordersContext";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Checkout() {
  const { onRemove, onAdd, cartItems } = useContext(OrderContext);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000000";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button className="btn" onClick={openModal}>
        Checkout
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          Input your Order Details Here
        </h2>
        <button className="btn" onClick={closeModal}>
          close
        </button>
        <div>I am a modal</div>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </Modal>
    </div>
  );
}
export default Checkout;
