import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const dummyCartItems = [
  {
    id: 1,
    title: "The Great Novel",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=700&fit=crop", // Replace with real image URL or asset
    price: 24.99,
    quantity: 1,
  },
  {
    id: 2,
    title: "Design Patterns",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=700&fit=crop",
    price: 49.99,
    quantity: 2,
  },
];

export default function Cart() {
  const subtotal = dummyCartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 5.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          My Cart
        </h1>

        <Card className="shadow-md rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">
              Cart Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {dummyCartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center md:items-start justify-between border-b pb-5"
              >
                <div className="flex items-center space-x-4 w-full md:w-2/3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-32 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-xl font-medium text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-gray-600">
                      Price: Rs {item.price.toFixed(2)}
                    </p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 text-right font-semibold text-lg text-gray-700">
                  Rs {(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}

            <div className="space-y-4 text-lg pt-6 border-t">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">Rs {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Rs {shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (7%)</span>
                <span className="font-medium">Rs {tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-xl font-bold text-gray-900 pt-4 border-t">
                <span>Grand Total</span>
                <span>Rs {total.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between pt-8 gap-4">
              <Link to="/books">
                <Button variant="outline" className="w-full sm:w-auto">
                  ← Continue Shopping
                </Button>
              </Link>
              <Link to="/checkout">
                <Button className="w-full sm:w-auto bg-[#636AE8] hover:bg-[#4b51c9]">
                  Proceed to Checkout →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
