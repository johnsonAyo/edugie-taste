import React from "react";
import SimpleAccordion from "./Accordion";

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
        {cartItems.length === 0 && (
          <h4 className="text-center">
            Cart is currently empty, Add meal to cart by clicking on order Now
          </h4>
        )}
        {cartItems.map((item: any) => (
          <div key={item._id} className="row food-list ">
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
              {/* <Modal /> */}
              <SimpleAccordion />
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
