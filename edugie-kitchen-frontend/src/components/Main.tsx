import Nav from "./Nav";
import Footer from "./Footer";
import {
  IoFlameOutline,
  IoRestaurantOutline,
  IoStarOutline,
  IoCheckmarkSharp,
  IoFlashOutline,
  IoMap,
  IoWaterOutline,
  IoWalletOutline,
} from "react-icons/io5";

function Main() {
  return (
    <>
      <Nav />
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <a href="#cta" className="btn btn--full margin-right-sm">
              Start eating well
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
            Your daily dose of health in 3 simple steps
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

          <div className="step-text-box">
            <p className="step-number">03</p>
            <h3 className="heading-tertiary">
              Receive meals at convenient time
            </h3>
            <p className="step-description">
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </p>
          </div>
          <div className="step-img-box">
            <img
              src="img/app/app-screen-3.png"
              className="step-img"
              alt="iPhone app
            delivery screen"
            />
          </div>
        </div>
      </section>

      <section className="section-meals" id="meals">
        <div className="container center-text">
          <span className="subheading">Meals</span>
          <h2 className="heading-secondary">
            Omnifood AI chooses from 5,000+ recipes
          </h2>
        </div>

        <div className="container grid grid--3-cols margin-bottom-md">
          <div className="meal">
            <img
              src="img/meals/meal-1.jpg"
              className="meal-img"
              alt="Japanese Gyozas"
            />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegetarian">Vegetarian</span>
              </div>
              <p className="meal-title">Japanese Gyozas</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <IoFlameOutline
                    className="meal-icon"
                    name="flame-outline"
                  ></IoFlameOutline>
                  <span>
                    <strong>650</strong> calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <IoRestaurantOutline
                    className="meal-icon"
                    name="restaurant-outline"
                  ></IoRestaurantOutline>
                  <span>
                    NutriScore &reg; <strong>74</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <IoStarOutline
                    className="meal-icon"
                    name="star-outline"
                  ></IoStarOutline>
                  <span>
                    <strong>4.9</strong> rating (537)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="meal">
            <img
              src="img/meals/meal-2.jpg"
              className="meal-img"
              alt="Avocado Salad"
            />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegan">Vegan</span>
                <span className="tag tag--paleo">Paleo</span>
              </div>
              <p className="meal-title">Avocado Salad</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <IoFlameOutline
                    className="meal-icon"
                    name="flame-outline"
                  ></IoFlameOutline>
                  <span>
                    <strong>400</strong> calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <IoRestaurantOutline
                    className="meal-icon"
                    name="restaurant-outline"
                  ></IoRestaurantOutline>
                  <span>
                    NutriScore &reg; <strong>92</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <IoStarOutline
                    className="meal-icon"
                    name="star-outline"
                  ></IoStarOutline>
                  <span>
                    <strong>4.8</strong> rating (441)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="diets">
            <h3 className="heading-tertiary">Works with any diet:</h3>
            <ul className="list">
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="checkmark-outline"
                ></IoCheckmarkSharp>
                <span>Vegetarian</span>
              </li>
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="checkmark-outline"
                ></IoCheckmarkSharp>
                <span>Vegan</span>
              </li>
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="checkmark-outline"
                ></IoCheckmarkSharp>
                <span>Pescatarian</span>
              </li>
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="checkmark-outline"
                ></IoCheckmarkSharp>
                <span>Gluten-free</span>
              </li>
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="checkmark-outline"
                ></IoCheckmarkSharp>
                <span>Lactose-free</span>
              </li>
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="checkmark-outline"
                ></IoCheckmarkSharp>
                <span>Keto</span>
              </li>
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="checkmark-outline"
                ></IoCheckmarkSharp>
                <span>Paleo</span>
              </li>
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="checkmark-outline"
                ></IoCheckmarkSharp>
                <span>Low FODMAP</span>
              </li>
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="checkmark-outline"
                ></IoCheckmarkSharp>
                <span>Kid-friendly</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="container all-recipes">
          <a href="#" className="link">
            See all recipes &rarr;
          </a>
        </div>
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

        <div className="container grid grid--2-cols margin-bottom-md">
          <div className="pricing-plan pricing-plan--starter">
            <header className="plan-header">
              <p className="plan-name">Starter</p>
              <p className="plan-price">
                <span>$</span>399
              </p>
              <p className="plan-text">per month. That's just $13 per meal!</p>
            </header>
            <ul className="list">
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="checkmark-outline"
                ></IoCheckmarkSharp>
                <span>1 meal per day</span>
              </li>
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="checkmark-outline"
                ></IoCheckmarkSharp>
                <span>Order from 11am to 9pm</span>
              </li>
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="checkmark-outline"
                ></IoCheckmarkSharp>
                <span>Delivery is free</span>
              </li>
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="close-outline"
                ></IoCheckmarkSharp>
              </li>
            </ul>
            <div className="plan-sing-up">
              <a href="#" className="btn btn--full">
                Start eating well
              </a>
            </div>
          </div>

          <div className="pricing-plan pricing-plan--complete">
            <header className="plan-header">
              <p className="plan-name">Complete</p>
              <p className="plan-price">
                <span>$</span>649
              </p>
              <p className="plan-text">per month. That's just $11 per meal!</p>
            </header>
            <ul className="list">
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="checkmark-outline"
                ></IoCheckmarkSharp>
                <span>
                  <strong>2 meals</strong> per day
                </span>
              </li>
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="checkmark-outline"
                ></IoCheckmarkSharp>
                <span>
                  Order <strong>24/7</strong>
                </span>
              </li>
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="checkmark-outline"
                ></IoCheckmarkSharp>
                <span>Delivery is free</span>
              </li>
              <li className="list-item">
                <IoCheckmarkSharp
                  className="list-icon"
                  name="checkmark-outline"
                ></IoCheckmarkSharp>
                <span>Get access to latest recipes</span>
              </li>
            </ul>
            <div className="plan-sing-up">
              <a href="#" className="btn btn--full">
                Start eating well
              </a>
            </div>
          </div>
        </div>

        <div className="container grid">
          <aside className="plan-details">
            Prices include all applicable taxes. You can cancel at any time.
            Both plans include the following:
          </aside>
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
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">
                Get your first meal for free!
              </h2>
              <p className="cta-text">
                Healthy, tasty and hassle-free meals are waiting for you. Start
                eating well today. You can cancel or pause anytime. And the
                first meal is on us!
              </p>

              <form className="cta-form" name="sign-up">
                <div>
                  <label htmlFor="full-name">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="John Smith"
                    name="full-name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    name="email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="select-where">
                    Where did you hear from us?
                  </label>
                  <select id="select-where" name="select-where" required>
                    <option value="">Please choose one option:</option>
                    <option value="friends">Friends and family</option>
                    <option value="youtube">YouTube video</option>
                    <option value="podcast">Podcast</option>
                    <option value="ad">Facebook ad</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <button className="btn btn--form">Sign up now</button>

                {/* <!-- <input type="checkbox" />
                <input type="number" /> --> */}
              </form>
            </div>
            <div
              className="cta-img-box"
              role="img"
              aria-label="Woman enjoying food"
            ></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Main;
