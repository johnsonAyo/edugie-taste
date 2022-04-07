import react, { useContext, useState } from "react";
import { OrderContext } from "../context/ordersContext";
import { hostedUrl } from "../api/api";
import axios from "axios";
function Form() {
  const { onRemove, onAdd, cartItems, storeUserOrders } = useContext(
    OrderContext
  );

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    suite: "",
  });

  function orderFood(event: { target: { name: any; value: any } }) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(formData);
    alert("Your order has been placed");
    storeUserOrders();
    try {
      const { data } = await axios({
        url: hostedUrl,
        method: "POST",
        data: formData,
      });
      setFormData({ fullName: "", phone: "", email: "", suite: "" });
      alert("successfully orderd your meal");
      window.location.reload();
      console.log(data);
    } catch (err) {
      console.log("error occured");
    }
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

            <form className="cta-form" onSubmit={handleSubmit} name="sign-up">
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  name="fullName"
                  onChange={orderFood}
                  value={formData.fullName}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  onChange={orderFood}
                  placeholder="me@example.com"
                  name="email"
                  required
                  value={formData.email}
                />
              </div>

              <div>
                <label htmlFor="suite">Suite Number</label>
                <select id="suite" name="suite" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">100</option>
                  <option value="youtube">101</option>
                  <option value="podcast">102</option>
                  <option value="ad">103</option>
                  <option value="others">104</option>
                  value={formData.suite}
                </select>
              </div>

              <div>
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Enter your phone Number"
                  onChange={orderFood}
                  name="phone"
                  value={formData.phone}
                  required
                />
              </div>
              <button className="btn">Checkout</button>
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
