import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const dummyBooks = [
  {
    id: 1,
    title: "The Great Novel",
    price: 24.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=700&fit=crop",
  },
  {
    id: 2,
    title: "Design Patterns",
    price: 49.99,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=700&fit=crop",
  },
  {
    id: 3,
    title: "Clean Code",
    price: 34.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=700&fit=crop",
  },
];

export default function Checkout() {
  const subtotal = dummyBooks.reduce(
    (acc, book) => acc + book.price * book.quantity,
    0
  );
  const shipping = 5.99;
  const tax = subtotal * 0.07;
  const discount = 0.1; // 10% discount
  const discountedTotal = subtotal - subtotal * discount;
  const total = discountedTotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Checkout
        </h1>

        <Card className="shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-800">
              Order Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-10">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-lg">Product</TableHead>
                  <TableHead className="text-right text-lg">Price</TableHead>
                  <TableHead className="text-right text-lg">Quantity</TableHead>
                  <TableHead className="text-right text-lg">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyBooks.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell className="flex items-center gap-4 py-4">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-[60px] h-[80px] object-cover rounded-md border"
                      />
                      <span className="text-base font-medium text-gray-800">
                        {book.title}
                      </span>
                    </TableCell>
                    <TableCell className="text-right text-base">
                      Rs {book.price.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right text-base">
                      {book.quantity}
                    </TableCell>
                    <TableCell className="text-right text-base">
                      Rs {(book.price * book.quantity).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="space-y-4 text-lg px-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">Rs {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discount (10%)</span>
                <span className="font-medium">
                  − Rs {(subtotal * discount).toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between pt-5 border-t border-gray-300 text-xl font-bold text-gray-800">
                <span>Grand Total</span>
                <span>Rs {total.toFixed(2)}</span>
              </div>
            </div>

            <div className="pt-6">
              <Button className="w-full text-lg py-6 bg-[#636AE8] hover:bg-[#4b4e85]">
                Confirm Order
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
