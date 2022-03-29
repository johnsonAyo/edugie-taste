/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  IoFlameOutline,
  IoRestaurantOutline,
  IoStarOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container grid grid--footer">
          <div className="logo-col">
            <img className="footer-logo" alt="" src="img/edugielogo.jpeg" />

            <ul className="social-links">
              <li>
                <a className="footer-link" href="#">
                  <IoFlameOutline
                    className="social-icon"
                    name="logo-instagram"
                  ></IoFlameOutline>
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <IoRestaurantOutline
                    className="social-icon"
                    name="logo-facebook"
                  ></IoRestaurantOutline>
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <IoStarOutline
                    className="social-icon"
                    name="logo-twitter"
                  ></IoStarOutline>
                </a>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; 2022 by Edugie Kitchen, subsidiary of Edugie
              Homes Inc. All rights reserved.
            </p>
          </div>
          <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
              <p className="address">
                11, Evbomwan lane off etete, gra & 12 Gbadamosi avenue off nosa
                Edugie, mtn mast, ugbor village road
              </p>
              <p>
                <a className="footer-link" href="tel:415-201-6370">
                  +234-9062-293-712
                </a>
                <br />
                <a className="footer-link" href="mailto:hello@omnifood.com">
                  hello@edugiekitchen.com
                </a>
              </p>
            </address>
          </div>
          <nav className="nav-col">
            <p className="footer-heading">Account</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  order Now
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Available meals
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  iOS app
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Android app
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Company</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  About edugie homes
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  For Business
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Cooking partners
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  Recipe directory{" "}
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Help center
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
