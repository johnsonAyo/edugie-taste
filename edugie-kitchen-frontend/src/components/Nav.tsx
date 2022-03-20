function Nav() {
  return (
    <>
      <header className="header">
        <a href="#">
          <img
            className="logo"
            alt=""
            src="https://media.istockphoto.com/photos/slippers-isolate-on-a-white-background-picture-id1208578271?k=20&m=1208578271&s=612x612&w=0&h=qicwoCAmulUgPT8ueTg6PJ7Wq9bPQ8wdv1p8HKG_QAM="
          />
        </a>
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
              <a className="main-nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="main-nav-link nav-cta" href="#cta">
                Pay Us A visit
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
