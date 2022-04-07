import react, { useContext } from "react";
import { OrderContext } from "../context/ordersContext";
function Form() {
  const { onRemove, onAdd, cartItems, storeUserOrders } = useContext(
    OrderContext
  );

  const handleSubmit = () => {
    alert("Your order has been placed");
    storeUserOrders();
  };
  return (
    <>
      <div className="container-reg">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">
              Edugie Kitchen Got you covered
            </h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime before you
              receive the confirmation call.
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
                <label htmlFor="select-where">Suite Number</label>
                <select id="select-where" name="select-where" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">100</option>
                  <option value="youtube">101</option>
                  <option value="podcast">102</option>
                  <option value="ad">103</option>
                  <option value="others">104</option>
                </select>
              </div>

              <div>
                <label htmlFor="email">Phone number</label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Enter your phone Number"
                  name="Phone"
                  required
                />
              </div>
              <button className="btn" onClick={() => handleSubmit()}>
                Checkout
              </button>
            </form>
          </div>
          <div
            className="cta-img-box"
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Form;
