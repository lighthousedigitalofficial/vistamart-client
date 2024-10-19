import { useState } from 'react'
import PropTypes from 'prop-types'

const StarRating = ({ rating, onRatingChange }) => {
    const [hover, setHover] = useState(0)

    return (
        <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    className={`text-2xl ${star <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                    onClick={() => onRatingChange(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                >
                    ★
                </button>
            ))}
        </div>
    )
}

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
    onRatingChange: PropTypes.func.isRequired,
}

export default StarRating