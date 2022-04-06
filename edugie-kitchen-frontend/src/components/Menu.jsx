import React, { useState, useContext } from "react";

import { OrderContext } from "../context/ordersContext";
const Menu = ({ items }) => {
  const { onAdd } = useContext(OrderContext);

  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { _id, title, img, desc, price } = menuItem;

        const handleClick = () => {
          if (!items) return;
          onAdd(menuItem);
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
      })}
    </div>
  );
};

export default Menu;
