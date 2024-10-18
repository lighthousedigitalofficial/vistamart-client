import PropTypes from 'prop-types';
import { useState } from 'react';
import ReviewItem from './ReviewItem';

const CustomerReview = ({ reviews, isLoggedIn = true, onAddReview }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  // Get the current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  };

  const [newReview, setNewReview] = useState({
    name: '',
    date: getCurrentDateTime(),
    color: '',
    verified: false,
    rating: 0,
    title: '',
    description: '',
    helpfulCount: 0,
  });

  // Calculate the reviews to display
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // Calculate total pages
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview(newReview);
    setNewReview({
      name: '',
      date: getCurrentDateTime(),
      color: '',
      verified: false,
      rating: 0,
      title: '',
      description: '',
      helpfulCount: 0,
    });
  };

  return (
    <div className="p-6 w-[60%] mx-auto bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-700">Top Reviews</h2>
      <div className="space-y-8">
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet for this product.</p>
        ) : (
          currentReviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))
        )}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 mx-1">{currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
      {/* Add Review Form */}
      {isLoggedIn && (
        <form onSubmit={handleSubmit} className="mt-6 p-4 bg-gray-100 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Add a Review</h3>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-600 mb-2">Date</label>
            <input
              type="datetime-local"
              name="date"
              value={newReview.date}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div> */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Color</label>
            <input
              type="text"
              name="color"
              value={newReview.color}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Rating</label>
            <input
              type="number"
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              min="1"
              max="5"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={newReview.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Description</label>
            <textarea
              name="description"
              value={newReview.description}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Submit Review
          </button>
        </form>
      )}
    </div>
  );
};

CustomerReview.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      verified: PropTypes.bool.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      helpfulCount: PropTypes.number.isRequired,
    })
  ).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  onAddReview: PropTypes.func.isRequired,
};

export default CustomerReview;