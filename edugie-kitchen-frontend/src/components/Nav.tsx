import { Link } from "react-router-dom";
import { FaCartArrowDown, FaToggleOn, FaToggleOff } from "react-icons/fa";

function Nav() {
  return (
    <>
      <header className="header">
        <Link className="logo" to={"/"}>
          <img
            className="logo"
            alt=""
            src="https://edugieinfo.com/asset/images/icon/logo.png"
          />
        </Link>
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
              <Link className="main-nav-link icon" to={"/checkout"}>
                <FaCartArrowDown />
              </Link>
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
