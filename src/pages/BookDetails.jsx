import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Heart, ShoppingCart, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Example data
const book = {
  id: 1,
  title: "The Art of Programming",
  author: "Donald Knuth",
  description:
    "An in-depth look into algorithms, data structures, and the philosophy of code.",
  price: 39.99,
  image:
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=700&fit=crop",
  rating: 4.5,
  reviews: [
    { user: "Alice", comment: "Excellent and detailed!" },
    { user: "Bob", comment: "A bit complex but very thorough." },
  ],
};

export default function BookDetails() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1200px] mx-auto flex items-center justify-between  mt-14 ">
      {/* Book Cover */}
      <div className="flex justify-center items-center max-w-[400px] max-h-[600px] mx-auto">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-auto rounded-2xl shadow-md object-cover"
        />
      </div>

      {/* Book Info */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{book.title}</h1>
        <p className="text-muted-foreground text-lg">By {book.author}</p>
        <p className="text-xl font-semibold text-primary">
          ${book.price.toFixed(2)}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.floor(book.rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              fill={i < Math.floor(book.rating) ? "#facc15" : "none"}
            />
          ))}
          <span className="text-sm text-gray-500">
            ({book.rating.toFixed(1)})
          </span>
        </div>

        <p className="text-base text-gray-700 leading-relaxed">
          {book.description}
        </p>

        {/* Actions */}
        <div className="flex gap-4 pt-4">
          <Button variant="outline">
            <Heart className="w-4 h-4 mr-2" /> Add to Fav
          </Button>
          <Button variant="secondary">
            <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
          </Button>
          <Button onClick={() => navigate("/checkout")}>
            <Zap className="w-4 h-4 mr-2" /> Order Now
          </Button>
        </div>

        {/* Reviews */}
        <div className="pt-6">
          <h2 className="text-xl font-semibold mb-2">Reviews</h2>
          <div className="space-y-3">
            {book.reviews.map((review, index) => (
              <Card key={index} className="p-3">
                <CardContent className="p-0">
                  <p className="font-medium">{review.user}</p>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
