import { useEffect, useState } from "react";
import Navbar from "../../component/navbar/Navbar";

import cheesePizza from "./images/MenuItem/Cheese_Pizza.webp";
import pepperoniPizza from "./images/MenuItem/Pepperoni_Pizza.webp";
import bbqPizza from "./images/MenuItem/BBQ_Chicken_Pizza.png";
import soda from "./images/MenuItem/Soda.png";
import lemonade from "./images/MenuItem/lemonade.png";
import iceTea from "./images/MenuItem/Ice_Tea.png";
import chicken from "./images/MenuItem/Chicken_Sandwich.png";
import sausage from "./images/MenuItem/Sausage_Sandwich.png";
import meatball from "./images/MenuItem/Meatball_Sandwich.png";
import spaghettiMeatballs from "./images/MenuItem/Spaghetti_Meatballs.png";
import spaghettiParmesen from "./images/MenuItem/Spaghetti_Parmesen.png";
import spaghettiShrimp from "./images/MenuItem/Spaghetti_Shrimp.png";

const products = [
  { id: 1, name: "Cheese Pizza", price: 12.5, image: cheesePizza },
  { id: 2, name: "Pepperoni Pizza", price: 14.5, image: pepperoniPizza },
  { id: 3, name: "BBQ Chicken Pizza", price: 15.0, image: bbqPizza },
  { id: 4, name: "Soda", price: 1.5, image: soda },
  { id: 5, name: "Lemonade", price: 2.75, image: lemonade },
  { id: 6, name: "Ice Tea", price: 2.75, image: iceTea },
  { id: 7, name: "Chicken Cutlet", price: 7.75, image: chicken },
  { id: 8, name: "Sausage Parmigiana", price: 7.5, image: sausage },
  { id: 9, name: "Meatball Parmigiana", price: 7.5, image: meatball },
  { id: 10, name: "Spaghetti W/Meatballs", price: 9.25, image: spaghettiMeatballs },
  { id: 11, name: "Spaghetti W/Parmensen", price: 6.75, image: spaghettiParmesen },
  { id: 12, name: "Spaghetti W/Shrimp", price: 12.5, image: spaghettiShrimp },
];

function Order() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cartList")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id) => {
    setCart((prev) => {
      const found = prev.find((item) => item.product_id === id);

      if (found) {
        return prev.map((item) =>
          item.product_id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { product_id: id, quantity: 1 }];
    });
  };

  const changeQuantity = (id, type) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product_id !== id) return item;

          if (type === "minus") {
            return { ...item, quantity: item.quantity - 1 };
          }

          return { ...item, quantity: item.quantity + 1 };
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.product_id);
    return sum + product.price * item.quantity;
  }, 0);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#1A1A1A] pt-[100px]">
        <div className="mx-auto w-[750px] max-w-[90%]">
          <div className="flex items-center justify-between py-8 text-white">
            <div className="text-3xl font-semibold">
              ORDER NOW
              <div className="mx-auto mt-2 h-1 w-3/4 translate-y-[10px] rounded-full bg-[#E10600]" />
            </div>

            <button
              onClick={() => setCartOpen(true)}
              className="relative -translate-y-5 text-3xl text-white"
            >
              🛒
              <span className="absolute left-5 top-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                {totalQuantity}
              </span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 max-[768px]:grid-cols-2 max-[768px]:gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center justify-center gap-2 rounded-[20px] bg-[#eeeee6] p-4 text-[#333]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-auto w-full max-w-[180px] object-contain max-[768px]:max-w-[140px]"
                />

                <h2 className="text-center text-[1.1rem] font-bold max-[768px]:text-base">
                  {product.name}
                </h2>

                <div className="text-sm font-light">
                  ${product.price.toFixed(2)}
                </div>

                <button
                  onClick={() => addToCart(product.id)}
                  className="rounded-[15px] border border-[#333] bg-white px-4 py-1 text-sm font-semibold hover:bg-[#C00500] hover:text-white"
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        <aside
          className={`fixed bottom-0 top-[100px] z-[999] grid w-[400px] grid-rows-[70px_1fr_50px_70px] bg-[#111111] text-[#CCCCCC] transition-all duration-300 ${
            cartOpen ? "right-0" : "-right-[400px]"
          }`}
        >
          <h1 className="p-5 text-2xl font-bold">Shopping Cart</h1>

          <div className="flex flex-col overflow-auto">
            {cart.map((item) => {
              const product = products.find((p) => p.id === item.product_id);

              return (
                <div
                  key={item.product_id}
                  className="grid grid-cols-[70px_150px_50px_1fr] items-center gap-2 bg-[#1A1A1A] text-center even:bg-white/10"
                >
                  <img src={product.image} alt={product.name} className="w-full" />

                  <div>{product.name}</div>

                  <div>${(product.price * item.quantity).toFixed(2)}</div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => changeQuantity(product.id, "minus")}
                      className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#eee] text-xs font-bold text-[#333]"
                    >
                      &lt;
                    </button>

                    <span className="px-2">{item.quantity}</span>

                    <button
                      onClick={() => changeQuantity(product.id, "plus")}
                      className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#eee] text-xs font-bold text-[#333]"
                    >
                      &gt;
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center p-5 text-xl font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </div>

          <div className="grid grid-cols-2 font-semibold">
            <button onClick={() => setCartOpen(false)} className="border border-[#CCCCCC] hover:bg-[#CCCCCC] hover:text-black">
              CLOSE
            </button>

            <button onClick={() => setCart([])} className="border border-[#CCCCCC] hover:bg-[#CCCCCC] hover:text-black">
              CLEAR CART
            </button>

            <button className="col-span-2 border border-[#CCCCCC] hover:bg-[#CCCCCC] hover:text-black">
              CHECKOUT
            </button>
          </div>
        </aside>
      </main>
    </>
  );
}

export default Order;