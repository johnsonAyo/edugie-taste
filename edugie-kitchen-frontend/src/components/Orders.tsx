import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import { items } from "./../data/data";
import FoodMenu from "./../api/api";

const allCategories = [
  "all",
  ...new Set(items.map((item: { category: any }) => item.category)),
];

function Orders() {
  FoodMenu();
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter(
      (item: { category: any }) => item.category === category
    );
    setMenuItems(newItems);
  };
  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Available Meals</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </>
  );
}

export default Orders;
