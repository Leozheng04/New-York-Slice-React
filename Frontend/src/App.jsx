import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/Contact/Contact";
import Order from "./pages/Order/Order";
import Orders from "./pages/Orders/Orders";
import Menu from "./pages/Menu/Menu";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/orders" element={<Orders/>} />
      </Routes>

    </>
  )
}

export default App
