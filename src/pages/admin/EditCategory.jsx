import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // In a real app, fetch the category data
    // const fetchCategory = async () => {
    //   try {
    //     const response = await axios.get(`/api/categories/${id}`);
    //     setName(response.data.name);
    //     setDescription(response.data.description);
    //   } catch (err) {
    //     setError('Failed to load category');
    //   }
    // };
    // fetchCategory();

    // For demo, use dummy data
    const dummyCategory = {
      id: 1,
      name: 'Fiction',
      description: 'Novels and fictional stories'
    };
    setName(dummyCategory.name);
    setDescription(dummyCategory.description);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Category name is required');
      return;
    }

    try {
      // In a real app: await axios.put(`/api/categories/${id}`, { name, description });
      console.log('Updating category:', { id, name, description });
      setSuccess('Category updated successfully!');
      setTimeout(() => navigate('/admin/categories'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update category');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Category</h2>
      
      {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
      {success && <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">{success}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Category Name *
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => navigate('/admin/categories')}
            className="mr-2 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Update Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCategory;