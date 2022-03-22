import { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import { items } from "./../data/data";
import FoodMenu from "./../api/api";

function Orders() {
  const { mealsData, isFetching } = FoodMenu();
  const [categories, setCategories] = useState<Record<string, any>[] | []>([]);
  const [menuItems, setMenuItems] = useState<Record<string, any>[] | []>([]);

  useEffect(() => {
    if (mealsData.length) {
      setMenuItems(mealsData);
      const allCategories = [
        "all",
        ...new Set(mealsData.map((item) => item.category)),
      ];
      setCategories(allCategories);
    }
  }, [mealsData]);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(mealsData);
      return;
    }
    const newItems = mealsData.filter((item) => item.category === category);
    setMenuItems(newItems);
    console.log({ newItems }, "****");
  };

  console.log({ mealsData, categories });

  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Available Meals</h2>
            <div className="underline"></div>
          </div>
          <Categories
            categories={categories}
            onFilter={filterItems}
            filterItems={menuItems}
          />
          <Menu items={menuItems} />
        </section>
      </main>
    </>
  );
}

export default Orders;