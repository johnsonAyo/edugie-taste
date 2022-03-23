import { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import FoodMenu from "./../api/api";
import Basket from "./Basket";

function Orders(props: any) {
  const { mealsData, isFetching } = FoodMenu();
  const [categories, setCategories] = useState<Record<string, any>[] | []>([]);
  const [menuItems, setMenuItems] = useState<Record<string, any>[] | [] | any>(
    []
  );

  const [cartItems, setCartItems] = useState<Record<string, any>[] | []>([]);

  const onAdd = (product: Record<string, any>) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product: any) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist?.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist?.qty - 1 } : x
        )
      );
    }
  };

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

  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Available Meals</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} onFilter={filterItems} />
          <Menu items={menuItems} key={menuItems._id} />
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket>
        </section>
      </main>
    </>
  );
}

export default Orders;
