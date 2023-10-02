import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./commponents/NavBar";
import Cart from "./commponents/Cart";
import Home from "./commponents/Home";
import NotFound from "./commponents/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/" redirectRoute={"/"} element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
