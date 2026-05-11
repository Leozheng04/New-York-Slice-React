import { useEffect, useState } from "react";
import Navbar from "../../component/navbar/Navbar";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await fetch("http://localhost:5000/api/orders");
    const data = await res.json();
    setOrders(data);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/orders/${id}`, {
      method: "DELETE",
    });
    fetchOrders();
  };

  const handleQuantityChange = (orderId, itemIndex, type) => {
    setOrders((prev) =>
      prev.map((order) => {
        if (order._id !== orderId) return order;
        const updatedItems = order.items.map((item, i) => {
          if (i !== itemIndex) return item;
          const newQty = type === "plus" ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: Math.max(1, newQty) };
        });
        return { ...order, items: updatedItems };
      })
    );
  };

  const handleUpdate = async (order) => {
    await fetch(`http://localhost:5000/api/orders/${order._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: order.items,
        totalAmount: order.items.reduce(
          (sum, item) => sum + item.price * item.quantity, 0
        ),
      }),
    });
    alert("Order updated!");
    fetchOrders();
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#1A1A1A] pt-[100px] pb-[50px]">
        <div className="mx-auto w-[750px] max-w-[90%]">
          <div className="py-8 text-white">
            <div className="text-3xl font-semibold">
              MY ORDERS
              <div className="mt-2 h-1 w-1/4 rounded-full bg-[#E10600]" />
            </div>
          </div>

          {orders.length === 0 ? (
            <p className="text-white">No orders yet.</p>
          ) : (
            orders.map((order) => (
              <div key={order._id} className="mb-6 rounded-[20px] bg-[#eeeee6] p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleString()}
                  </span>
                  <span className="rounded-full bg-[#E10600] px-3 py-1 text-xs text-white capitalize">
                    {order.status}
                  </span>
                </div>

                {order.items.map((item, index) => (
                  <div key={index} className="mb-2 flex items-center justify-between">
                    <span className="font-semibold">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(order._id, index, "minus")}
                        className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#333] text-xs font-bold text-white"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(order._id, index, "plus")}
                        className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#333] text-xs font-bold text-white"
                      >
                        +
                      </button>
                      <span className="ml-2 text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="mt-3 border-t border-gray-300 pt-3 flex items-center justify-between">
                  <span className="font-bold">
                    Total: ${order.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUpdate(order)}
                      className="rounded-[15px] bg-[#333] px-4 py-1 text-sm text-white hover:bg-[#555]"
                    >
                      Update Order
                    </button>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="rounded-[15px] bg-[#E10600] px-4 py-1 text-sm text-white hover:bg-[#C00500]"
                    >
                      Cancel Order
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </>
  );
}

export default Orders;