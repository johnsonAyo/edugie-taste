/* eslint-disable jsx-a11y/img-redundant-alt */
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Orders from "../components/Orders";

import {
  IoFlashOutline,
  IoMap,
  IoWaterOutline,
  IoWalletOutline,
} from "react-icons/io5";

import About from "../components/About";
import Navigation from "../components/Navigation";


function Main() {
  return (
    <div>
      <Nav />
      <Navigation />
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">EDUGIE KITCHEN (TASTE RIPPER)</h1>
            <p className="hero-description">
              Our Green(rooftop) bar and kitchen will tend to the needs of your
              belly. <br />
              Our food menu covers breakfast, brunch lunch & dinner needs;
              ranging from delicious soups, stews, chops, grills & a variety of
              rice meals
            </p>
            <a href="#cta" className="btn btn--full margin-right-sm">
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
      <section className="section-testimonials" id="testimonials">
        <div className="gallery">
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-1.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-2.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-3.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-4.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-5.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-6.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-7.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-8.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-9.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-10.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-11.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
          <figure className="gallery-item">
            <img
              src="img/gallery/gallery-12.jpg"
              alt="Photo of beautifully
            arranged food"
            />
          </figure>
        </div>
      </section>
      <section className="section-how" id="how">
        <div className="container">
          <span className="subheading">How it works</span>
          <h2 className="heading-secondary">Getting your desired meal Asap</h2>
        </div>

        <div className="container grid grid--2-cols grid--center-v">
          <div className="step-text-box">
            <p className="step-number">01</p>
            <h3 className="heading-tertiary">
              Tell us what you like (and select from our sumptouus menu of
              foods)
            </h3>
            <p className="step-description">
              Never again waste time thinking about what to eat! edufie homes is
              prepared to serve you and prepare a meal plan just for you. All
              you need to do is select from our menu and order your desired meal
            </p>
          </div>
          <div className="step-img-box">
            <img
              src="img/eduge-3.jpeg"
              className="step-card"
              alt="iPhone app
            preferences selection screen"
            />
          </div>

          <div className="step-img-box">
            <img
              src="img/app/app-screen-2.png"
              className="step-img"
              alt="iPhone app
            meal approving plan screen"
            />
          </div>
          <div className="step-text-box">
            <p className="step-number">02</p>
            <h3 className="heading-tertiary">Confirm your orders</h3>
            <p className="step-description">
              After each order, a confirmation call will be placed to confirm
              the order type, price and time of delivery of your placed order.
            </p>
          </div>
        </div>
      </section>
      <section className="section-meals" id="meals">
        <Orders />
      </section>
      <section className="section-pricing" id="pricing">
        <div className="container">
          <span className="subheading">Pricing</span>
          <h2 className="heading-secondary">
            Eating well without breaking the bank
          </h2>
        </div>

        <div className="container grid grid--4-cols">
          <div className="feature">
            <IoWaterOutline
              className="feature-icon"
              name="infinite-outline"
            ></IoWaterOutline>
            <p className="feature-title">Never cook again!</p>
            <p className="feature-text">
              Our subscriptions cover 365 days per year, even including major
              holidays.
            </p>
          </div>
          <div className="feature">
            <IoWalletOutline
              className="feature-icon"
              name="nutrition-outline"
            ></IoWalletOutline>
            <p className="feature-title">Local and organic</p>
            <p className="feature-text">
              Our cooks only use local, fresh, and organic products to prepare
              your meals.
            </p>
          </div>
          <div className="feature">
            <IoMap className="feature-icon" name="leaf-outline"></IoMap>
            <p className="feature-title">No waste</p>
            <p className="feature-text">
              All our partners only use reusable containers to package all your
              meals.
            </p>
          </div>
          <div className="feature">
            <IoFlashOutline
              className="feature-icon"
              name="pause-outline"
            ></IoFlashOutline>
            <p className="feature-title">Pause anytime</p>
            <p className="feature-text">
              Going on vacation? Just pause your subscription, and we refund
              unused days.
            </p>
          </div>
        </div>
      </section>
      <section className="section-cta" id="cta"></section>
      <Footer />
    </div>
  );
}

export default Main;
