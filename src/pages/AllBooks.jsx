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
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const books = [
  {
    id: 1,
    title: "The Great Adventure",
    author: "John Explorer",
    price: 29,
    type: "Fiction",
    date: new Date(2023, 4, 10),
    thumbnail:
      "https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?t=st=1746350976~exp=1746354576~hmac=a171c168ec2119142baa514e0dec5decfea5c1e39713622f7c8548a6a9f0ed39&w=740",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Mindful Living",
    author: "Sara Wellness",
    price: 49,
    type: "Non-Fiction",
    date: new Date(2024, 2, 15),
    thumbnail:
      "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?t=st=1746351007~exp=1746354607~hmac=b72693b3b67833e6ea247e2d142425c1ba46dce839875efc841edf44378bc8ec&w=996",
    rating: 4.0,
  },
  {
    id: 3,
    title: "Mystery Manor",
    author: "Agatha Mystery",
    price: 19,
    type: "Fiction",
    date: new Date(2022, 7, 5),
    thumbnail:
      "https://img.freepik.com/free-vector/stack-colorful-books_74855-314.jpg?t=st=1746351038~exp=1746354638~hmac=8615d8de1ec0db52782c7ca5b3e002880a6e248c7bd0b7bb5608b592ca5418b4&w=740",
    rating: 4.8,
  },
  {
    id: 4,
    title: "Tech Titans",
    author: "Alex Tech",
    price: 39,
    type: "Non-Fiction",
    date: new Date(2021, 10, 20),
    thumbnail:
      "https://img.freepik.com/free-vector/stack-colorful-books_74855-314.jpg?t=st=1746351038~exp=1746354638~hmac=8615d8de1ec0db52782c7ca5b3e002880a6e248c7bd0b7bb5608b592ca5418b4&w=740",
    rating: 4.2,
  },
  {
    id: 5,
    title: "History of Time",
    author: "Dr. Chronos",
    price: 59,
    type: "Non-Fiction",
    date: new Date(2020, 1, 12),
    thumbnail:
      "https://img.freepik.com/free-vector/stack-colorful-books_74855-314.jpg?t=st=1746351038~exp=1746354638~hmac=8615d8de1ec0db52782c7ca5b3e002880a6e248c7bd0b7bb5608b592ca5418b4&w=740",
    rating: 4.7,
  },
  {
    id: 6,
    title: "Fantasy Realm",
    author: "Eliza Magic",
    price: 24,
    type: "Fiction",
    date: new Date(2023, 8, 14),
    thumbnail:
      "https://img.freepik.com/free-vector/stack-colorful-books_74855-314.jpg?t=st=1746351038~exp=1746354638~hmac=8615d8de1ec0db52782c7ca5b3e002880a6e248c7bd0b7bb5608b592ca5418b4&w=740",
    rating: 4.3,
  },
];

export default function AllBooks() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedDate, setSelectedDate] = useState();
  const [bookType, setBookType] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books
    .filter(
      (book) =>
        book.price >= priceRange[0] &&
        book.price <= priceRange[1] &&
        (!bookType || book.type === bookType) &&
        (!selectedDate ||
          format(book.date, "yyyy-MM-dd") ===
            format(selectedDate, "yyyy-MM-dd")) &&
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
    <div className="flex gap-4 p-6  max-w-[1540px] mx-auto w-full ">
      {/* Sidebar */}
      <div className="md:col-span-1 space-y-4 max-w-[300px] gap-4 flex flex-col">
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
          <p className="text-sm mt-2">
            From ${priceRange[0]} to ${priceRange[1]}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Published Date</h2>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Book Type</h2>
          <Select onValueChange={setBookType}>
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
          <Select onValueChange={setSortBy}>
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
      </div>

      {/* Book Cards */}
      <div className="flex flex-wrap justify-center gap-4 w-full ">
        {filteredBooks.map((book, index) => (
          <Card
            key={`${book.id}-${index}`}
            className="rounded-2xl shadow-md border w-full sm:w-[200px] md:w-[250px] lg:w-[280px] hover:shadow-lg transition duration-300 height-[400px]"
          >
            <img
              src={book.thumbnail}
              alt={book.title}
              className="w-full  object-cover rounded-t-2xl"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">
                ${book.price}
              </p>
              <p className="text-sm text-gray-700">{book.type}</p>
              <p className="text-sm text-gray-600">By {book.author}</p>
              <div className="flex items-center gap-1 my-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={i < book.rating ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-4 h-4 ${
                      i < book.rating ? "text-yellow-400" : "text-gray-300"
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
        ))}

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
