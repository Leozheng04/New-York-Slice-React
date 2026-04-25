import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const linkStyle =
    "relative py-1.5 text-[#CCCCCC] after:absolute after:left-1/2 after:-bottom-1.5 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-[#E10600] after:transition-all after:duration-200 hover:after:w-full";

  return (
    <header className="fixed top-0 z-[1000] flex h-[100px] w-full items-center justify-between border-b border-[#2a2a2a] bg-[#1f1f1f] px-[60px]">
      <Link to="/" className="self-start text-white">
        <img src={logo} alt="logo" className="block h-[70px] w-auto" />
      </Link>

      <nav>
        {/* Sidebar */}
        <ul
          className={`fixed right-0 top-0 z-[1001] flex h-screen w-[250px] flex-col items-start justify-start gap-4 bg-[#1A1A1A]/80 px-10 pb-5 pt-[30px] text-2xl transition-transform duration-300 ${
            showSidebar ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li className="w-full">
            <button onClick={() => setShowSidebar(false)} className="text-white">
              ✕
            </button>
          </li>

          <li className="w-full">
            <Link to="/" className="text-[2rem] text-[#CCCCCC]" onClick={() => setShowSidebar(false)}>
              Home
            </Link>
          </li>

          <li className="w-full">
            <Link to="/menu" className="text-[2rem] text-[#CCCCCC]" onClick={() => setShowSidebar(false)}>
              Menu
            </Link>
          </li>

          <li className="w-full">
            <Link to="/order" className="text-[2rem] text-[#CCCCCC]" onClick={() => setShowSidebar(false)}>
              Order
            </Link>
          </li>

          <li className="w-full">
            <a href="#about" className="text-[2rem] text-[#CCCCCC]" onClick={() => setShowSidebar(false)}>
              About
            </a>
          </li>

          <li className="w-full">
            <Link to="/contact" className="text-[2rem] text-[#CCCCCC]" onClick={() => setShowSidebar(false)}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop nav */}
        <ul className="flex list-none items-center justify-around gap-8 text-[1.2rem]">
          <li className="hidden lg:block">
            <Link to="/" className={`${linkStyle} after:w-full`}>
              Home
            </Link>
          </li>

          <li className="group relative hidden lg:block">
            <Link to="/menu" className={linkStyle}>
              Menu
            </Link>

            <span className="ml-[5px] text-[#CCCCCC] transition-transform duration-300">
              ▾
            </span>

            <ul className="absolute left-0 top-full hidden min-w-[160px] list-none bg-[#333] group-hover:block">
              <li>
                <Link to="/menu" className="block px-2.5 py-2.5 text-[#CCCCCC] hover:bg-[#555]">
                  Physical Menu
                </Link>
              </li>
              <li>
                <Link to="/order" className="block px-2.5 py-2.5 text-[#CCCCCC] hover:bg-[#555]">
                  Order Now
                </Link>
              </li>
            </ul>
          </li>

          <li className="hidden lg:block">
            <a href="#about" className={linkStyle}>
              About
            </a>
          </li>

          <li className="hidden lg:block">
            <Link to="/contact" className={linkStyle}>
              Contact
            </Link>
          </li>

          <li className="lg:hidden">
            <button onClick={() => setShowSidebar(true)} className="text-3xl text-white">
              ☰
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;