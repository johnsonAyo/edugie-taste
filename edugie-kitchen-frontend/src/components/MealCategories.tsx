import {
  IoFlameOutline,
  IoRestaurantOutline,
  IoStarOutline,
} from "react-icons/io5";
function MealCategories(props: any) {
  const { id, img, meal_category, calories, nutriScore, ratings } = props;
  return (
    <div className="meal">
      <img key={id} src={img} className="meal-img" alt="Japanese Gyozas" />
      <div className="meal-content">
        <div className="meal-tags">
          <span className="tag tag--vegetarian">Vegetarian</span>
        </div>
        <p className="meal-title">{meal_category}</p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <IoFlameOutline
              className="meal-icon"
              name="flame-outline"
            ></IoFlameOutline>
            <span>{calories}</span>
          </li>
          <li className="meal-attribute">
            <IoRestaurantOutline
              className="meal-icon"
              name="restaurant-outline"
            ></IoRestaurantOutline>
            <span>{nutriScore}</span>
          </li>
          <li className="meal-attribute">
            <IoStarOutline
              className="meal-icon"
              name="star-outline"
            ></IoStarOutline>
            <span>{ratings}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MealCategories;
