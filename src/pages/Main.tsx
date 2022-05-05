/* eslint-disable jsx-a11y/img-redundant-alt */
import Footer from "../components/Footer";
import Meals from "../components/Meals";
import Navbar from "./../components/Navbar/Navbar";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";

function Main() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <Meals />
      <Footer />
    </div>
  );
}

export default Main;
