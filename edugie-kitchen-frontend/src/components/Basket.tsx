import React from "react";
import Modal from "./Modal";

export default function Basket(props: any) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce(
    (a: any, c: any) => a + c.qty * c.price,
    0
  );

  const totalPrice = itemsPrice;
  return (
    <aside className="block col-1">
      <h2 className="text-center">Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item: any) => (
          <div key={item.id} className="row food-list ">
            <div className="col-2">{item.title}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 food-list text-right">
              {item.qty} x ₦{item.price}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>

            <div className="row food-list ">
              <div className="col-1">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>₦{totalPrice}</strong>
              </div>
            </div>
            <hr />
            <div className="row col-1 Checkout-btn">
              <Modal />
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
