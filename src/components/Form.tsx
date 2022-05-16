import { useContext, useState } from "react";
import { OrderContext } from "../context/ordersContext";
import { hostedUrl, localUrl } from "../api/api";
import axios from "axios";
import Swal from "sweetalert2";
function Form() {
  const { storeUserOrders, cartItems, setCartItems } = useContext(OrderContext);

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

  const totalAmount = cartItems.reduce(
    (a: number, c: any) => a + c.qty * c.price,
    0
  );

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    let order = { formData, cartItems, totalAmount };
    storeUserOrders(order);
    Swal.fire({
      icon: "success",
      title: "Your order has been placed successful",
      text: "You will recieve a mail containing your order details",
      confirmButtonText: "close",
      background: "black",
      color: "white",
    });
    try {
      const { data } = await axios({
        url: `${hostedUrl}api/orders`,
        method: "POST",
        data: { body: order },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      console.log("got here ********************");

      await axios.post(
        `${hostedUrl}send_mail`,
        {
          order,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      setFormData({ fullName: "", phone: "", email: "", suite: "" });
      setCartItems([]);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container-reg">
        <div className="cta">
          <div className="cta-text-box">
            <div className="heading-secondary">Edugie taste got you covered</div>
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
                <label htmlFor="suite">Suite</label>
                <select
                  id="suite"
                  value={formData.suite}
                  onChange={orderFood}
                  name="suite"
                  required
                >
                  <option value="">Please choose one option:</option>
                  <option value="HALO SUITE">HALO SUITE</option>
                  <option value="EZE SUITE">EZE SUITE</option>
                  <option value="AIZE SUITE">AIZE SUITE</option>
                  <option value="UKI SUITE">UKI SUITE</option>
                  <option value="QUIET STORM">QUIET STORM</option>
                  <option value="ARABIAN NIGHTS">ARABIAN NIGHTS</option>
                  <option value="FIFTH AVENUE">FIFTH AVENUE</option>
                  <option value="KALEIDOSCOPE ">KALEIDOSCOPE </option>
                  <option value="GARDENIA">GARDENIA</option>
                  <option value="HERITAGE">HERITAGE</option>
                  <option value="MOD 1">MOD 1</option>
                  <option value="MOD 2">MOD 2</option>
                  <option value="MOD 3">MOD 3</option>
                  <option value="MOD 4">MOD 4</option>
                  <option value="MOD 5">MOD 5</option>
                  <option value="MOD 6">MOD 6</option>
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
