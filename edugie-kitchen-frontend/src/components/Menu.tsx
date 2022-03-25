import React, { useState } from "react";

const Menu = ({ items }: { items: any; key: any; onAdd: any }) => {
  return (
    <div className="section-center">
      {items.map(
        (menuItem: {
          _id: any;
          title: any;
          img: any;
          desc: any;
          price: any;
          onAdd: any;
        }) => {
          const { _id, title, img, desc, price, onAdd } = menuItem;

          console.log(onAdd, _id, menuItem);

          return (
            <article key={_id} className="menu-item">
              <img src={img} alt={title} className="photo" />
              <div className="item-info">
                <header>
                  <h4 className="food-title">{title}</h4>
                  <h4 className="price">₦{price}</h4>
                </header>
                <p className="item-text">{desc}</p>
                <h4 className="button" onClick={() => onAdd(menuItem)}>
                  {" "}
                  Order Now
                </h4>
              </div>
            </article>
          );
        }
      )}
    </div>
  );
};

export default Menu;
