import React from "react";

const Manual = () => {
  return (
    <section className="section-how" id="how">
      <div className="container">
        <h5 className="heading-tertiary">Getting your desired meal asap</h5>
      </div>

      <div className="container grid grid--2-cols grid--center-v">
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h5 className="heading-tertiary">
            Tell us what you like (and select from our sumptouus menu of foods)
          </h5>
          <p className="step-description">
            Never again waste time thinking about what to eat! edufie homes is
            prepared to serve you and prepare a meal plan just for you. All you
            need to do is select from our menu and order your desired meal
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
          <h5 className="heading-tertiary">Confirm your orders</h5>
          <p className="step-description">
            After each order, a confirmation call will be placed to confirm the
            order type, price and time of delivery of your placed order.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manual;
