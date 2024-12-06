import {
    useGetWishListByIdQuery,
    useRemoveWishListMutation,
} from '../../redux/slices/wishlistApiSlice'
import useAuth from '../../hooks/useAuth'
import Loader from '../Loader'
import keys from '../../config/keys'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { data } from 'autoprefixer'
import { Spinner } from '@material-tailwind/react'
const WishList = () => {
    const user = useAuth()
    const [products, setProducts] = useState([])

    const {
        data: wishlist,
        isLoading: wishListLoading,
        refetch,
    } = useGetWishListByIdQuery(user?._id, {
        skip: !user?._id,
    })

    const [removeWishList, { isLoading: removingWishList }] =
        useRemoveWishListMutation()

    useEffect(() => {
        if (wishlist?.doc && wishlist?.doc?.products) {
            setProducts(wishlist?.doc?.products)
        }
    }, [wishlist?.doc])

    const onRemove = async (productId) => {
        try {
            console.log(productId)
            await removeWishList(productId)
            toast.success('Product remove from wishlist')
            refetch()
        } catch (error) {
            toast.success(data.error.message || 'Remove product')
        }
    }

    return (
        <div className="rounded-lg bg-white p-6">
            <h1 className="text-2xl font-semibold mb-5">My Wishlist</h1>
            {wishListLoading || removingWishList ? (
                <Spinner color="green" />
            ) : wishlist && products?.length ? (
                <div className="flex flex-col gap-2">
                    {products?.map((product) => {
                        return (
                            <div
                                key={product._id}
                                className="bg-white border flex justify-between items-center rounded-lg shadow-sm p-2"
                            >
                                <div className="flex-grow flex gap-2">
                                    <img
                                        src={
                                            product?.thumbnail?.startsWith(
                                                'products'
                                            )
                                                ? `${keys.BUCKET_URL}${product.thumbnail}`
                                                : product?.thumbnail
                                                ? product.thumbnail
                                                : keys.DEFAULT_IMG
                                        }
                                        alt={product.name}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                    <div className="flex flex-col justify-between">
                                        <h3 className="text-base md:max-w-[20rem] max-w-[10rem] truncate font-semibold text-gray-800 mb-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-gray-500 mb-4">
                                            Price: ${product.price}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => onRemove(product._id)}
                                    className="py-1 px-4 bg-orange-500 text-white text-base rounded-lg hover:bg-orange-600 transition duration-200"
                                >
                                    Remove
                                </button>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <p className="text-gray-700 text-center">
                    No Product found in wishlist
                </p>
            )}
        </div>
    )
}

export default WishList
