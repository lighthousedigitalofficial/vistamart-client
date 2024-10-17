import { useState } from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'react-hot-toast'
import PropTypes from 'prop-types' // Import PropTypes
import StarRating from '../shared/StarRating'

// Define the schema using Zod
const reviewSchema = z.object({
    rating: z.number().min(1, 'Please gives the rating').max(5, 'Rating must be between 1 and 5'),
    comment: z.string().min(10, 'Review must be at least 10 characters long'),
})

const AddReview = ({ onSubmit }) => {
    // const { user } = useContext(UserContext) // Get the user context
    const methods = useForm({
        resolver: zodResolver(reviewSchema),
    })
    const [rating, setRating] = useState(0)

    const handleSubmit = async (data) => {
        try {
            await onSubmit({ ...data, rating })
            toast.success('Review submitted successfully!')
            methods.reset()
            setRating(0)
        } catch (error) {
            toast.error('Failed to submit review')
        }
    }

    // if (!user) {
    //     return <p className="text-red-500">You must be logged in to submit a review.</p>
    // }

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)} className="space-y-4 border rounded-lg p-4">
                <div>
                    <label className="input-label">Rate this Product</label>
                    <Controller
                        name="rating"
                        control={methods.control}
                        render={({ field }) => (
                            <StarRating
                                rating={rating}
                                onRatingChange={(newRating) => {
                                    setRating(newRating)
                                    field.onChange(newRating)
                                }}
                            />
                        )}
                    />
                    {methods.formState.errors.rating && (
                        <p className="text-red-500 text-xs mt-1">
                            {methods.formState.errors.rating.message}
                        </p>
                    )}
                </div>
                <div>
                    <label className="input-label">Reviews</label>
                    <textarea
                        {...methods.register('comment')}
                        className="input"
                        rows="4"
                    />
                    {methods.formState.errors.comment && (
                        <p className="text-red-500 text-xs mt-1">
                            {methods.formState.errors.comment.message}
                        </p>
                    )}
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-300 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit Review
                    </button>
                </div>
            </form>
        </FormProvider>
    )
}

// Add prop types validation
AddReview.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default AddReview