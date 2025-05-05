import React, { useState } from 'react';

const Book = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    format: '',
    price: '',
    stock: '',
    language: '',
    publisher: '',
    isbn: '',
    description: '',
  });

  const [coverImage, setCoverImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleImageChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in bookData) {
      formData.append(key, bookData[key]);
    }
    formData.append('coverImage', coverImage);

    console.log('Submitting form data...', formData);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#636AE8] mb-6">Add New Book</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block font-medium">Title</label>
            <input type="text" name="title" value={bookData.title} onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-[#636AE8]" />
          </div>

          <div>
            <label className="block font-medium">Author</label>
            <input type="text" name="author" value={bookData.author} onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-[#636AE8]" />
          </div>

          <div>
            <label className="block font-medium">Genre</label>
            <input type="text" name="genre" value={bookData.genre} onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-[#636AE8]" />
          </div>

          <div>
            <label className="block font-medium">Format</label>
            <input type="text" name="format" value={bookData.format} onChange={handleChange}
              placeholder="e.g., Hardcover, Paperback"
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-[#636AE8]" />
          </div>

          <div>
            <label className="block font-medium">Price</label>
            <input type="number" name="price" value={bookData.price} onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-[#636AE8]" />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <label className="block font-medium">Stock Quantity</label>
            <input type="number" name="stock" value={bookData.stock} onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-[#636AE8]" />
          </div>

          <div>
            <label className="block font-medium">Language</label>
            <input type="text" name="language" value={bookData.language} onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-[#636AE8]" />
          </div>

          <div>
            <label className="block font-medium">Publisher</label>
            <input type="text" name="publisher" value={bookData.publisher} onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-[#636AE8]" />
          </div>

          <div>
            <label className="block font-medium">ISBN</label>
            <input type="text" name="isbn" value={bookData.isbn} onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-[#636AE8]" />
          </div>

          <div>
            <label className="block font-medium">Cover Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#636AE8] file:text-white hover:file:bg-[#4d51c8]" />
          </div>
        </div>

        {/* Full Width Description */}
        <div className="md:col-span-2">
          <label className="block font-medium">Description</label>
          <textarea name="description" value={bookData.description} onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-[#636AE8]"></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button type="submit"
            className="w-full bg-[#636AE8] text-white py-2 rounded hover:bg-[#4d51c8] transition duration-200">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default Book;
