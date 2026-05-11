import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [cartQty, setCartQty] = useState(0);
  const location = useLocation();

  const linkStyle =
    "relative py-1.5 text-[#CCCCCC] after:absolute after:left-1/2 after:-bottom-1.5 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-[#E10600] after:transition-all after:duration-200 hover:after:w-full";

  const activeLinkStyle = "after:w-full text-white";

  const isActivePath = (to) => {
    const path = location.pathname;
    if (to === "/") return path === "/";
    return path === to || path.startsWith(`${to}/`);
  };

  useEffect(() => {
    const readQty = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("cartList")) || [];
        const qty = cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
        setCartQty(qty);
      } catch {
        setCartQty(0);
      }
    };

    readQty();

    const onStorage = (e) => {
      if (!e || e.key === "cartList") readQty();
    };
    const onCartUpdated = () => readQty();

    window.addEventListener("storage", onStorage);
    window.addEventListener("cart-updated", onCartUpdated);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("cart-updated", onCartUpdated);
    };
  }, []);

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
            <Link to="/orders" className="text-[2rem] text-[#CCCCCC]" onClick={() => setShowSidebar(false)}>
              View Orders
            </Link>
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
            <Link to="/" className={`${linkStyle} ${isActivePath("/") ? activeLinkStyle : ""}`}>
              Home
            </Link>
          </li>

          <li className="group relative hidden lg:block">
            <Link to="/menu" className={`${linkStyle} ${isActivePath("/menu") ? activeLinkStyle : ""}`}>
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
              <li>
                <Link to="/orders" className="block px-2.5 py-2.5 text-[#CCCCCC] hover:bg-[#555]">
                  View Orders
                </Link>
              </li>
            </ul>
          </li>

          <li className="hidden lg:block">
            <a href="/#about" className={linkStyle}>
              About
            </a>
          </li>

          <li className="hidden lg:block">
            <Link to="/contact" className={`${linkStyle} ${isActivePath("/contact") ? activeLinkStyle : ""}`}>
              Contact
            </Link>
          </li>

          <li className="lg:hidden">
            <div className="flex items-center gap-4">
              {isActivePath("/order") && (
                <Link
                  to="/order?cart=1"
                  aria-label="Order / cart"
                  className="relative text-3xl text-white"
                >
                  <FiShoppingCart />
                  {cartQty > 0 && (
                    <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs leading-none text-white">
                      {cartQty}
                    </span>
                  )}
                </Link>
              )}

              <button onClick={() => setShowSidebar(true)} className="text-3xl text-white" aria-label="Open menu">
                ☰
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;