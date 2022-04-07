import axios from "axios";
import { useEffect, useState } from "react";

export const hostedUrl = "https://edugie-kitchen.herokuapp.com/";
function FoodMenu() {
  const [isFetching, setIsFetching] = useState(false);
  const [mealsData, setItems] = useState<Record<string, any>[] | []>([]);
  useEffect(() => {
    const getMeals = async () => {
      try {
        setIsFetching(true);
        const res = await axios(`${hostedUrl}api/meal`);
        const mealData = res.data.data;

        setIsFetching(false);

        setItems(mealData.data);
      } catch (err) {
        setIsFetching(false);
        console.log(err);
      }
    };
    getMeals();
  }, []);

  return { mealsData, isFetching };
}

export default FoodMenu;
