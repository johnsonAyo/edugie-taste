/* eslint-disable jsx-a11y/img-redundant-alt */
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { mealCategories } from "../data/data";
import Orders from "../components/Orders";

import {
  IoCheckmarkSharp,
  IoFlashOutline,
  IoMap,
  IoWaterOutline,
  IoWalletOutline,
} from "react-icons/io5";

import MealCategories from "../components/MealCategories";
import Form from "../components/Form";

function Main() {
  const categoryElement = mealCategories.map((mealCategory: any) => {
    return <MealCategories {...mealCategory} />;
  });

  return (
    <>
      <Nav />
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Edugie Kitchen, Home of Quality Foods
            </h1>
            <p className="hero-description">
              Delicious Meals which ranges from different types of rice to
              swallow and different types of proteins. Also available is a
              variety of pepper soups
            </p>
            <a href="#cta" className="btn btn--full margin-right-sm">
              Place your Orders Now
            </a>

            <a href="#how" className="btn btn--outline">
              Learn more &darr;
            </a>
            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img
                  src="./../img/customers/customer-1.jpg"
                  alt="Customer photo"
                />
                <img src="img/customers/customer-2.jpg" alt="Customer photo" />
                <img src="img/customers/customer-3.jpg" alt="Customer photo" />
                <img src="img/customers/customer-4.jpg" alt="Customer photo" />
                <img src="img/customers/customer-5.jpg" alt="Customer photo" />
                <img src="img/customers/customer-6.jpg" alt="Customer photo" />
              </div>
              <p className="delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <picture>
              <source srcSet="img/hero.webp" type="image/webp" />
              <source srcSet="img/hero-min.png" type="image/png" />

              <img
                src="img/hero-min.png"
                className="hero-img"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
            </picture>
          </div>
        </div>
      </section>
      <section className="section-featured">
        <div className="container">
          <h2 className="heading-featured-in">As featured in</h2>
          <div className="logos">
            <img src="img/logos/techcrunch.png" alt="Techcrunch logo" />
            <img
              src="img/logos/business-insider.png"
              alt="Business Insider logo"
            />
            <img
              src="img/logos/the-new-york-times.png"
              alt="The New York Times logo"
            />
            <img src="img/logos/forbes.png" alt="Forbes logo" />
            <img src="img/logos/usa-today.png" alt="USA Today logo" />
          </div>
        </div>
      </section>

      <section className="section-how" id="how">
        <div className="container">
          <span className="subheading">How it works</span>
          <h2 className="heading-secondary">
            Getting your Desired Meal cant be Easier
          </h2>
        </div>

        <div className="container grid grid--2-cols grid--center-v">
          <div className="step-text-box">
            <p className="step-number">01</p>
            <h3 className="heading-tertiary">
              Tell us what you like (and what not)
            </h3>
            <p className="step-description">
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
          <div className="step-img-box">
            <img
              src="img/app/app-screen-1.png"
              className="step-img"
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
            <h3 className="heading-tertiary">Approve your weekly meal plan</h3>
            <p className="step-description">
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-meals" id="meals">
        <div className="container center-text">
          <span className="subheading">Edugie Home Meals</span>
        </div>

        <div className="container grid grid--3-cols  margin-bottom-md">
          {categoryElement}
        </div>
        <Orders />
      </section>

      <section className="section-testimonials" id="testimonials">
        <div className="testimonials-container">
          <span className="subheading">Testimonials</span>
          <h2 className="heading-secondary">
            Once you try it, you can't go back
          </h2>

          <div className="testimonials">
            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="Photo of customer Dave Bryson"
                src="img/customers/dave.jpg"
              />
              <blockquote className="testimonial-text">
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </blockquote>
              <p className="testimonial-name">&mdash; Dave Bryson</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="Photo of customer Ben Hadley"
                src="img/customers/ben.jpg"
              />
              <blockquote className="testimonial-text">
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It's amazing not to worry about food anymore!
              </blockquote>
              <p className="testimonial-name">&mdash; Ben Hadley</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="Photo of customer Steve Miller"
                src="img/customers/steve.jpg"
              />
              <blockquote className="testimonial-text">
                Omnifood is a life saver! I just started a company, so there's
                no time for cooking. I couldn't live without my daily meals now!
              </blockquote>
              <p className="testimonial-name">&mdash; Steve Miller</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="Photo of customer Hannah Smith"
                src="img/customers/hannah.jpg"
              />
              <blockquote className="testimonial-text">
                I got Omnifood for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </blockquote>
              <p className="testimonial-name">&mdash; Hannah Smith</p>
            </figure>
          </div>
        </div>

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

      <section className="section-cta" id="cta">
        <Form />
      </section>
      <Footer />
    </>
  );
}

export default Main;
