import Header from "./Components/Header";
import "./styles.css";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
