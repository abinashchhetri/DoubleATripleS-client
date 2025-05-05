import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MyOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: "ORD001",
      date: "2025-05-03",
      items: [
        {
          title: "Clean Code",
          image: "https://m.media-amazon.com/images/I/41xShlnTZTL.jpg",
          price: 1200,
          discount: 10,
          quantity: 1,
        },
        {
          title: "Design Patterns",
          image: "https://m.media-amazon.com/images/I/51kuc0iWo+L.jpg",
          price: 1000,
          discount: 5,
          quantity: 1,
        },
      ],
      total: 2200,
      discount: 10,
      status: "not-complete",
    },
    {
      id: "ORD002",
      date: "2025-04-28",
      items: [
        {
          title: "Refactoring",
          image: "https://m.media-amazon.com/images/I/41y+cg9kP8L.jpg",
          price: 1000,
          discount: 10,
          quantity: 1,
        },
        {
          title: "The Pragmatic Programmer",
          image: "https://m.media-amazon.com/images/I/41as+WafrFL.jpg",
          price: 800,
          discount: 0,
          quantity: 1,
        },
      ],
      total: 1800,
      discount: 10,
      status: "completed",
    },
    {
      id: "ORD003",
      date: "2025-04-15",
      items: [
        {
          title: "JavaScript: The Good Parts",
          image: "https://m.media-amazon.com/images/I/41bWcNdTG+L.jpg",
          price: 900,
          discount: 0,
          quantity: 1,
        },
      ],
      total: 900,
      discount: 10,
      status: "cancelled",
    },
  ]);

  const handleCancel = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: "cancelled" } : order
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          My Orders
        </h1>

        {orders.map((order) => (
          <Card key={order.id} className="bg-white shadow-md rounded-xl">
            <CardHeader className="border-b border-gray-200">
              <CardTitle className="text-2xl text-gray-800">
                Order #{order.id} – {new Date(order.date).toDateString()}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <p className="text-xl font-semibold text-gray-700 mb-4 text-center">
                  Items:
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-5 justify-items-center">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-sm"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-32 h-40 object-cover rounded-md mb-4"
                      />
                      <div className="text-center">
                        <h3 className="text-lg font-medium text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Price: Rs {item.price}
                        </p>

                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between text-xl font-semibold text-gray-700">
                <span>Discount ({order.discount + "%"}):</span>
                <span>Rs {(order.discount * order.total) / 100}</span>
              </div>

              <div className="flex justify-between text-xl font-semibold text-gray-700">
                <span>Total:</span>
                <span>
                  Rs {order.total - (order.discount * order.total) / 100}
                </span>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span
                  className={`inline-block px-4 py-2 rounded-full text-md font-semibold ${
                    order.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : order.status === "not-complete"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.status}
                </span>

                {order.status === "not-complete" && (
                  <Button
                    onClick={() => handleCancel(order.id)}
                    className="bg-red-500 hover:bg-red-600 text-white text-md"
                  >
                    Cancel Order
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
