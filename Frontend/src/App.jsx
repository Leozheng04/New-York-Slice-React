import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/Contact/Contact";
import Order from "./pages/Order/Order";
import Menu from "./pages/Menu/Menu";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/order" element={<Order/>} />
      </Routes>

    </>
  )
}

export default App
