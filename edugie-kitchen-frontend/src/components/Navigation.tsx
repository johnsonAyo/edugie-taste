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
            <a className="navigation__link" href="#how">
              <span>01</span>About Edugie Kitchen
            </a>
          </li>

          <li className="navigation__item">
            <a className="navigation__link" href="#how">
              <span>02</span>Meals Menu
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#how">
              <span>03</span>Available Meals
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#how">
              <span>04</span>Carts
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#how">
              <span>05</span>Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
