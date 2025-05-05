import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MyFavorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: "FAV001",
      title: "Clean Code",
      image: "https://m.media-amazon.com/images/I/41xShlnTZTL.jpg",
      price: 1200,
      discount: 10, // in percent
      quantity: 1,
    },
    {
      id: "FAV002",
      title: "Design Patterns",
      image: "https://m.media-amazon.com/images/I/51kuc0iWo+L.jpg",
      price: 1000,
      discount: 5,
      quantity: 1,
    },
    {
      id: "FAV003",
      title: "Refactoring",
      image: "https://m.media-amazon.com/images/I/41y+cg9kP8L.jpg",
      price: 800,
      discount: 15,
      quantity: 2,
    },
  ]);

  const handleRemoveFavorite = (favoriteId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== favoriteId)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          My Favorites
        </h1>

        {favorites.length === 0 ? (
          <div className="text-center text-lg text-gray-500">
            You have no favorite items.
          </div>
        ) : (
          favorites.map((favorite) => (
            <Card key={favorite.id} className="bg-white shadow-md rounded-xl">
              <CardHeader className="border-b border-gray-200">
                <CardTitle className="text-xl text-gray-800">
                  {favorite.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <img
                    src={favorite.image}
                    alt={favorite.title}
                    className="w-1/3 h-32 object-cover rounded-md shadow-sm"
                  />
                  <div className="ml-4 flex flex-col justify-center">
                    <span className="text-gray-800 text-lg font-medium">
                      {favorite.title}
                    </span>
                    <p className="text-sm text-gray-600">Price: Rs {favorite.price}</p>
                    <p className="text-sm text-gray-600">Discount: {favorite.discount}%</p>
                    <p className="text-sm text-gray-600">Quantity: {favorite.quantity}</p>
                  </div>
                  <Button
                    onClick={() => handleRemoveFavorite(favorite.id)}
                    className="ml-auto bg-red-500 hover:bg-red-600 text-white"
                  >
                    Remove from Favorites
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default MyFavorites;
