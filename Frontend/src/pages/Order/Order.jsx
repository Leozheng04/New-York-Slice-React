import { useEffect, useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import { FiShoppingCart } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";

function Order() {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [products , setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cartList")) || [];
  });

  useEffect(() => {
    if (searchParams.get("cart") === "1") {
      setCartOpen(true);
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart-updated"));
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () =>{
      try{
        const response = await fetch("http://localhost:5000/api/products")
        const data = await response.json()
        setProducts(data)
      }
      catch(err){
        console.error("Error fetching products:", err)
      }
    }
    fetchProducts()
  }, [])

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
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#1A1A1A] pt-[100px] pb-[50px]">
        <div className="mx-auto w-[750px] max-w-[90%]">
          <div className="flex items-center justify-between py-8 text-white">
            <div className="text-3xl font-semibold">
              ORDER NOW
              <div className="mx-auto mt-2 h-1 w-3/4 translate-y-[10px] rounded-full bg-[#E10600]" />
            </div>

            <button
              onClick={() => setCartOpen(true)}
              className="relative -translate-y-5 hidden text-3xl text-white lg:block"
            >
              <FiShoppingCart aria-label="Cart" />
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
                  src={`/MenuItem/${product.image}`}
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
          className={`fixed bottom-0 top-[100px] z-[999] grid w-full grid-rows-[70px_1fr_50px_70px] bg-[#111111] text-[#CCCCCC] transition-all duration-300 sm:w-[400px] ${
            cartOpen ? "right-0" : "-right-full sm:-right-[400px]"
          }`}
        >
          <h1 className="p-5 text-2xl font-bold">Shopping Cart</h1>

          <div className="flex flex-col overflow-auto">
            {cart.map((item) => {
              const product = products.find((p) => p.id === item.product_id);
              if (!product) return null;

              return (
                <div
                  key={item.product_id}
                  className="grid grid-cols-[56px_1fr_auto] items-center gap-3 bg-[#1A1A1A] px-3 py-2 even:bg-white/10 sm:grid-cols-[70px_150px_70px_1fr] sm:gap-2 sm:px-0 sm:py-0 sm:text-center"
                >
                  <img
                    src={`/MenuItem/${product.image}`}
                    alt={product.name}
                    className="h-12 w-12 object-contain sm:h-auto sm:w-full"
                  />

                  <div className="min-w-0 text-left sm:text-center">
                    <div className="truncate">{product.name}</div>
                    <div className="text-sm text-white/70 sm:hidden">
                      ${(product.price * item.quantity).toFixed(2)}
                    </div>
                  </div>

                  <div className="hidden sm:block">
                    ${(product.price * item.quantity).toFixed(2)}
                  </div>

                  <div className="flex items-center justify-end gap-1 sm:justify-start">
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