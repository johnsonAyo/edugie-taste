import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";

import React, { useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import { items } from "././data/data";
const allCategories = [
  "all",
  ...new Set(items.map((item: { category: any }) => item.category)),
];

function App() {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
