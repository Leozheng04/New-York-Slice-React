import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home/home";
import Contact from "./pages/contact/Contact";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

    </>
  )
}

export default App
