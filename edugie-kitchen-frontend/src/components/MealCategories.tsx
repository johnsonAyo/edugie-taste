import {
  IoFlameOutline,
  IoRestaurantOutline,
  IoStarOutline,
  IoCheckmarkSharp,
  IoFlashOutline,
  IoMap,
  IoWaterOutline,
  IoWalletOutline,
} from "react-icons/io5";
function MealCategories() {
  return (
    <div className="meal">
      <img
        src="img/meals/meal-1.jpg"
        className="meal-img"
        alt="Japanese Gyozas"
      />
      <div className="meal-content">
        <div className="meal-tags">
          <span className="tag tag--vegetarian">Vegetarian</span>
        </div>
        <p className="meal-title">Japanese Gyozas</p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <IoFlameOutline
              className="meal-icon"
              name="flame-outline"
            ></IoFlameOutline>
            <span>
              <strong>650</strong> calories
            </span>
          </li>
          <li className="meal-attribute">
            <IoRestaurantOutline
              className="meal-icon"
              name="restaurant-outline"
            ></IoRestaurantOutline>
            <span>
              NutriScore &reg; <strong>74</strong>
            </span>
          </li>
          <li className="meal-attribute">
            <IoStarOutline
              className="meal-icon"
              name="star-outline"
            ></IoStarOutline>
            <span>
              <strong>4.9</strong> rating (537)
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MealCategories;
