import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home/home";
import Contact from "./pages/contact/Contact";
import Menu from "./pages/Menu/Menu";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>

    </>
  )
}

export default App
