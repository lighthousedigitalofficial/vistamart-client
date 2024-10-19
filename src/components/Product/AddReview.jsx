import { useState } from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'react-hot-toast'
import PropTypes from 'prop-types' // Import PropTypes
import StarRating from '../shared/StarRating'
import { useCreateReviewMutation } from '../../redux/slices/productsApiSlice'

// Define the schema using Zod
const reviewSchema = z.object({
    rating: z.number().min(1, 'Please give a rating').max(5, 'Rating must be between 1 and 5'),
    comment: z.string().min(10, 'Review must be at least 10 characters long'),
})

const AddReview = ({ productId, refetch }) => {
    const methods = useForm({
        resolver: zodResolver(reviewSchema),
    })
    const [rating, setRating] = useState(0)
    const [createReview, { isLoading }] = useCreateReviewMutation() // Use the mutation hook with loading state

    const handleSubmit = async (data) => {
        try {
            const finalData = {
                review: data.comment, 
                rating, 
                productId
            }

            console.log(finalData)

            await createReview(finalData).unwrap()
            refetch()
            toast.success('Review submitted successfully!')
            methods.reset()
            setRating(0)
        } catch (error) {
            toast.error(error.data.message || 'Failed to submit review')
        }
    }

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
                        disabled={isLoading} // Disable the button while loading
                    >
                        {isLoading ? 'Submitting...' : 'Submit Review'} 
                    </button>
                </div>
            </form>
        </FormProvider>
    )
}

// Add prop types validation
AddReview.propTypes = {
    productId: PropTypes.string.isRequired,
    
}

export default AddReview