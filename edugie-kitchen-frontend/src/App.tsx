import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
