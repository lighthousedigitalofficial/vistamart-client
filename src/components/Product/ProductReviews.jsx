/* eslint-disable react/prop-types */
import { timeAgo } from '../../utils'
import keys from './../../config/keys'
import Rating from '@mui/material/Rating'

let reviews = []

const calculateRatingPercentage = (rating, totalReviews) => {
    if (totalReviews === 0) return 0
    const ratingCount = reviews.filter(
        (review) => Math.round(review.rating) === rating
    )?.length

    return (ratingCount / totalReviews) * 100
}

const ProductReviews = ({ product }) => {
    reviews = product?.reviews || []

    return (
        <div className="w-full mx-auto p-4 bg-white rounded-md shadow-gray-50 shadow-md mb-8">
            <div className="text-center mb-4">
                <h1 className="text-3xl font-bold">{product.rating || 0}</h1>
                <Rating
                    name="half-rating-read"
                    defaultValue={0}
                    value={product?.rating}
                    precision={0.5}
                    readOnly
                />
                <p className="text-gray-600">
                    {product.numOfReviews || 0} Ratings
                </p>
            </div>
            <div className="mb-4 px-8">
                {['Excellent', 'Good', 'Average', 'Below Average', 'Poor']?.map(
                    (label, index) => {
                        const rating = 5 - index
                        const percentage =
                            product.numOfReviews > 0
                                ? calculateRatingPercentage(
                                      rating,
                                      product.numOfReviews
                                  )
                                : 0

                        return (
                            <div
                                key={index}
                                className="flex items-center justify-between gap-4 mb-2"
                            >
                                <p className="w-36">{label}</p>
                                <div className="flex-1 bg-gray-200 h-1 rounded-lg overflow-hidden">
                                    <div
                                        className="bg-primary-300 h-full"
                                        style={{ width: `${percentage}%` }}
                                    ></div>
                                </div>
                                {/* <p>{`${percentage}%`}</p> */}
                            </div>
                        )
                    }
                )}
            </div>
            <div className="py-2">
                <h2 className="text-xl font-semibold mb-4 text-center bg-gray-100 py-2 px-4">
                    Product Review
                </h2>
                {reviews && reviews.length ? (
                    reviews.map((review) => {
                        // console.log(review)
                        return (
                            <div
                                key={review._id}
                                className="flex justify-between items-start mb-4 py-2 border-b"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={
                                            review?.customer?.image
                                                ? `${keys.BUCKET_URL}${review?.customer?.image}`
                                                : 'https://shorturl.at/KREMs'
                                        }
                                        alt={`${review.customer.firstName} avatar`}
                                        className="w-10 h-10 object-contain rounded-full"
                                    />
                                    <div>
                                        <h3 className="font-bold">
                                            {`${review.customer.firstName} ${review.customer.lastName}`}
                                        </h3>
                                        <Rating
                                            name="half-rating-read"
                                            defaultValue={0}
                                            value={product?.rating}
                                            precision={0.5}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2 text-left">
                                    <p>{review.review}</p>
                                </div>
                                <p className="text-gray-500 text-sm">
                                    {timeAgo(review.updatedAt)}
                                </p>
                            </div>
                        )
                    })
                ) : (
                    <p className="text-lg text-center p-4">
                        No product reviews have been added yet.
                    </p>
                )}
            </div>
        </div>
    )
}

export default ProductReviews
