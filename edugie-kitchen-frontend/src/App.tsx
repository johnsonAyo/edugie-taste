import { Route, Routes } from "react-router";
import Checkout from "./pages/CheckoutPage";

import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
