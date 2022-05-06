/* eslint-disable jsx-a11y/anchor-is-valid */

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container grid grid--footer">
          <div className="logo-col">
            <p className="footer-heading">Copyright &copy; </p>
            <p className="copyright">
              Copyright &copy; 2022 by Edugie Taste, subsidiary of Edugie Homes
              Inc. All rights reserved.
            </p>
          </div>
          <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
              <p className="address">
                11, Evbomwan lane off Etete, GRA & 12 Gbadamosi avenue off Nosa
                Edugie, MTN mast ugbor village road, Benin city, Edo state.
                Nigeria
              </p>
              <p>
                <a className="footer-link" href="tel:415-201-6370">
                  +234-9062-293-712
                </a>
                <br />
                <a className="footer-link" href="mailto:hello@omnifood.com">
                  hello@edugieTaste.com
                </a>
              </p>
            </address>
          </div>
          <div className="nav-col">
            <p className="footer-heading">Links</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#about">
                  About
                </a>
              </li>
              <li></li>
              <li>
                <a className="footer-link" href="#meals">
                  Order Now
                </a>
              </li>
              <li>
                <a className="footer-link" href="#checkout">
                  Checkout
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="https://me-eta-two.vercel.app/"
                >
                  © Designed by&nbsp;
                  <span className="devname"> Johnson Afuye.</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
