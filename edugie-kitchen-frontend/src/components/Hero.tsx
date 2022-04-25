/* eslint-disable jsx-a11y/img-redundant-alt */
import About from "../components/About";

const Hero = () => {
  return (
    <section className="section-hero" id="about">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">EDUGIE KITCHEN (TASTE RIPPER)</h1>
          <p className="hero-description">
            Our Green(rooftop) bar and kitchen will tend to the needs of your
            belly. <br />
            Our food menu covers breakfast, brunch lunch & dinner needs; ranging
            from delicious soups, stews, chops, grills & a variety of rice meals
          </p>
          <a href="#meals" className="btn btn--full">
            Place your orders now
          </a>
        </div>

        <div className="hero-img-box">
          <picture>
            <source srcSet="img/home.jpeg" type="image/webp" />
            <source srcSet="img/home.jpeg" type="image/jpeg" />

            <img
              src="img/home.jpeg"
              className="hero-img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </picture>
        </div>

        <div className="col-1-of-2">
          <div className="composition">
            <img
              src="img/edugie-3.jpeg"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src="img/edugie-2.jpeg"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src="img/edugie-1.jpeg"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>

        <About />
      </div>
    </section>
  );
};

export default Hero;
