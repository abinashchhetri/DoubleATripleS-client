import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Welcome to <span className="text-[#636AE8]">BookMate</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Your one-stop shop for discovering amazing reads. Explore handpicked selections across genres curated just for you.
          </p>
          <Link to="/books">
            <button className="mt-8 px-6 py-3 bg-[#636AE8] text-white rounded-xl hover:bg-indigo-700 transition text-lg">
              Browse Books
            </button>
          </Link>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Books Stack"
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Featured Books */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Atomic Habits",
              author: "James Clear",
              image: "https://m.media-amazon.com/images/I/91bYsX41DVL._SY466_.jpg",
            },
            {
              title: "It Ends With Us",
              author: "Colleen Hoover",
              image: "https://m.media-amazon.com/images/I/81s0B6NYXML._SY466_.jpg",
            },
            {
              title: "Ikigai",
              author: "Héctor García",
              image: "https://m.media-amazon.com/images/I/71tbalAHYCL._SY466_.jpg",
            },
          ].map((book, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
              <img
                src={book.image}
                alt={book.title}
                className="h-64 object-contain mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">{book.title}</h3>
              <p className="text-gray-600 text-sm text-center mt-1">by {book.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">What Our Readers Say</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                name: "Abinash",
                quote: "BookMate makes it easy to find books I actually enjoy. Love the interface!",
              },
              
              {
                name: "Smirti",
                quote: "I’ve gifted so many books from here. Great for book lovers!",
              },
              {
                name: "Sahil",
                quote: "User-friendly, affordable, and great book curation. What else do you need?",
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-md transition">
                <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                <p className="font-semibold text-indigo-700">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
<section className="bg-[#636AE8] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold mb-4 leading-tight">Stay in the Loop with <span className="underline decoration-white/30">BookMate</span></h2>
    <p className="mb-8 text-lg opacity-90">
      Be the first to know about fresh arrivals, exclusive discounts, and curated picks. No spam, we promise!
    </p>
    
  </div>
</section>

    </div>
  );
};

export default Home;
