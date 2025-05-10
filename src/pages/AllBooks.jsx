import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const books = [
  {
    id: 1,
    title: "The Great Adventure",
    author: "John Explorer",
    price: 29,
    type: "Fiction",
    date: new Date(2023, 4, 10),
    thumbnail: assets.atomic,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Mindful Living",
    author: "Sara Wellness",
    price: 49,
    type: "Non-Fiction",
    date: new Date(2024, 2, 15),
    thumbnail: assets.becoming,
    rating: 4.0,
  },
  {
    id: 3,
    title: "Mystery Manor",
    author: "Agatha Mystery",
    price: 19,
    type: "Fiction",
    date: new Date(2022, 7, 5),
    thumbnail: assets.educated,
    rating: 4.8,
  },
  {
    id: 4,
    title: "Tech Titans",
    author: "Alex Tech",
    price: 39,
    type: "Non-Fiction",
    date: new Date(2021, 10, 20),
    thumbnail: assets.power,
    rating: 4.2,
  },
  {
    id: 5,
    title: "History of Time",
    author: "Dr. Chronos",
    price: 59,
    type: "Non-Fiction",
    date: new Date(2020, 1, 12),
    thumbnail: assets.sapiens,
    rating: 4.7,
  },
  {
    id: 6,
    title: "History of Time",
    author: "Dr. Chronos",
    price: 59,
    type: "Non-Fiction",
    date: new Date(2020, 1, 12),
    thumbnail: assets.sapiens,
    rating: 4.7,
  },
  {
    id: 7,
    title: "History of Time",
    author: "Dr. Chronos",
    price: 59,
    type: "Non-Fiction",
    date: new Date(2020, 1, 12),
    thumbnail: assets.sapiens,
    rating: 4.7,
  },
  {
    id: 8,
    title: "History of Time",
    author: "Dr. Chronos",
    price: 59,
    type: "Non-Fiction",
    date: new Date(2020, 1, 12),
    thumbnail: assets.sapiens,
    rating: 4.7,
  },




];

export default function AllBooks() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedDate, setSelectedDate] = useState();
  const [bookType, setBookType] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredBooks = books
    .filter(
      (book) =>
        book.price >= priceRange[0] &&
        book.price <= priceRange[1] &&
        (!bookType || book.type === bookType) &&
        (!selectedDate ||
          format(book.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")) &&
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "latest") return b.date.getTime() - a.date.getTime();
      if (sortBy === "oldest") return a.date.getTime() - b.date.getTime();
      return 0;
    });

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 max-w-screen-xl mx-auto">
      {/* Sidebar */}
      <aside className="md:w-[260px] flex flex-col gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Search</h2>
          <Input
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Price Range</h2>
          <Slider
            defaultValue={priceRange}
            min={0}
            max={100}
            step={1}
            onValueChange={(val) => setPriceRange(val)}
          />
          <p className="text-sm mt-2 text-muted-foreground">
            NPR {priceRange[0]} - NPR {priceRange[1]}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Book Type</h2>
          <Select value={bookType} onValueChange={setBookType}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Fiction">Fiction</SelectItem>
              <SelectItem value="Non-Fiction">Non-Fiction</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Sort By</h2>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Select sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="latest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </aside>

      {/* Books Display */}
      <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Card
              key={book.id}
              onClick={() => navigate(`/books/${book.id}`)}
              className="rounded-2xl shadow hover:shadow-lg cursor-pointer transition-all duration-300"
            >
              <img
                src={book.thumbnail}
                alt={book.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <CardContent className="p-4 space-y-1">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-500"> NPR {book.price}</p>
                <p className="text-sm text-muted-foreground">{book.type}</p>
                <p className="text-sm text-gray-600">By {book.author}</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={i + 1 <= book.rating ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-4 h-4 ${
                        i + 1 <= book.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.073 6.374h6.708c.969 0 1.371 1.24.588 1.81l-5.423 3.938 2.073 6.374c.3.921-.755 1.688-1.54 1.118l-5.423-3.938-5.423 3.938c-.785.57-1.84-.197-1.54-1.118l2.073-6.374-5.423-3.938c-.783-.57-.38-1.81.588-1.81h6.708l2.073-6.374z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-gray-500">
                  Published on: {format(book.date, "yyyy-MM-dd")}
                </p>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center text-muted-foreground py-10">
            No books match the selected filters.
          </div>
        )}
      </section>
    </div>
  );
}
