import React, { useState } from "react";
import { MenuItems } from "./MenuItem";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleMenuClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <Link className="navbar-logo" to={"/"}>
        <img
          className="navbar-logo"
          alt=""
          src="https://edugieinfo.com/asset/images/icon/logo.png"
        />
      </Link>
      <div className="menu-icon" onClick={() => handleMenuClick()}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
