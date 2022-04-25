import { useContext } from "react";
import Swal from "sweetalert2";

import { OrderContext } from "../context/ordersContext";
const Menu = ({ items }: { items: any }) => {
  const { onAdd, storeUserOrders } = useContext(OrderContext);

  return (
    <div className="section-center">
      {items.map(
        (menuItem: {
          _id: any;
          title: any;
          img: any;
          desc: any;
          price: any;
        }) => {
          const { _id, title, img, desc, price } = menuItem;

          const handleClick = () => {
            if (!items) return;
            Swal.fire({
              icon: "success",
              title: "Added to Cart !",
              text: "Checkout below",
              confirmButtonText: "OK",
              background: "black",
              color: "white",
            });

            onAdd(menuItem);
            storeUserOrders([menuItem]);
          };

          return (
            <article key={_id} className="menu-item">
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4 className="food-title">{title}</h4>
                  <h4 className="price">₦{price}</h4>
                </header>
                <p className="item-text">{desc}</p>
                <button className="button" onClick={() => handleClick()}>
                  Order Now
                </button>
              </div>
            </article>
          );
        }
      )}
    </div>
  );
};

export default Menu;
