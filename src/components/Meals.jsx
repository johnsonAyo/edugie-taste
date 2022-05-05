import { useEffect, useContext, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import FoodMenu from "../api/api";
import Basket from "./Basket";
import { OrderContext } from "../context/ordersContext";

function Orders(props) {
  const { mealsData, isFetching } = FoodMenu();
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const { onRemove, onAdd, cartItems, getUserOrders } =
    useContext(OrderContext);

  useEffect(() => {
    if (mealsData.length) {
      setMenuItems(mealsData);
      const allCategories = [
        ...new Set(mealsData.map((item) => item.category)),
      ];
      setCategories(allCategories);
    }
  }, [mealsData]);

  const filterItems = (category) => {
    const newItems = mealsData.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <section className="section-meals" id="meals">
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Available Meals</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} onFilter={filterItems} />
          <Menu items={menuItems} key={menuItems} onAdd={onAdd} />
          {console.log(menuItems)}
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            getUserOrders={getUserOrders}
          ></Basket>
          {console.log(cartItems)}
        </section>
      </main>
    </section>
  );
}

export default Orders;
