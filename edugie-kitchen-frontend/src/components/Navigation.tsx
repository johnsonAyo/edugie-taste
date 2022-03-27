import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to={"/public"} className="navigation__link">
              <span>01</span>About Edugie Kitchen
            </Link>
          </li>

          <li className="navigation__item">
            <Link to={"/"} className="navigation__link">
              <span>02</span>Meals Menu
            </Link>
          </li>
          <li className="navigation__item">
            <Link to={"/register"} className="navigation__link">
              <span>03</span>Available Meals
            </Link>
          </li>
          <li className="navigation__item">
            <Link to={"/login"} className="navigation__link">
              <span>04</span>Carts
            </Link>
          </li>
          <li className="navigation__item">
            <Link to={"/"} className="navigation__link">
              <span>05</span>Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
