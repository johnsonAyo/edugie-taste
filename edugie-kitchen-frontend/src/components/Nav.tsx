import { Link } from "react-router-dom";
import { FaCartArrowDown, FaToggleOn, FaToggleOff } from "react-icons/fa";

function Nav() {
  return (
    <>
      <header className="header">
        <img className="logo" alt="" src="img/edugielogo.jpeg" />

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a className="main-nav-link" href="#how">
                About Edugie kitchen
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#meals">
                Meals Menu
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#pricing">
                Availabe Meals
              </a>
            </li>
            <li>
              <a className="main-nav-link icon" href="#testimonials">
                <FaCartArrowDown />
              </a>
            </li>
            <li>
              <a className="main-nav-link icon" href="#cta">
                <FaToggleOn />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
