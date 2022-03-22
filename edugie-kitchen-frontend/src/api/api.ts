import axios from "axios";
import { useEffect, useState } from "react";

const url = "http://localhost:3000/";
function FoodMenu() {
  useEffect(() => {
    const getMeals = async () => {
      try {
        const res = await axios(`${url}api/meal`);
        const mealData = res.data.data;
        console.log(mealData);
        return mealData;
      } catch (err) {
        console.log(err);
      }
    };
    getMeals();
  }, []);
}

export default FoodMenu;
