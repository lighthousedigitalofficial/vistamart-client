/* eslint-disable react/prop-types */
import { useState } from 'react'
import { addToCart } from '../../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import Quantity from './subcomponent/Quantity'
import { useNavigate } from 'react-router-dom'
import WishListIcon from './subcomponent/WishListIcon'
import toast from 'react-hot-toast'
import keys from './../../config/keys'
import Rating from '@mui/material/Rating'

const Product = ({ product }) => {
    const [mainImage, setMainImage] = useState(product?.thumbnail)
    const [qty, setQty] = useState(1)

    const productImages = product ? [...product.images, product?.thumbnail] : []
    const oldPrice = product?.price + product?.discountAmount || 0

    const { cartItems } = useSelector((state) => state.cart)

    const isProductAddToCart = cartItems?.find(
        (item) => item._id === product?._id
    )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addToCartHandler = () => {
        if (qty >= product.minimumOrderQty) {
            dispatch(addToCart({ ...product, qty }))
            toast.success('Item added successfully')
        } else
            toast.error(
                `The min. order for this item is ${product.minimumOrderQty} piece. Adjust quantity to continue.`
            )
    }

    const buyNowHandler = () => {
        if (qty >= product.minimumOrderQty) {
            dispatch(addToCart({ ...product, qty }))
            navigate('/checkout-details')
            toast.success('Item added successfully')
        } else
            toast.error(
                `The min. order for this item is ${product.minimumOrderQty} piece. Adjust quantity to continue.`
            )
    }

    return (
        <div className="flex flex-col w-full p-4 bg-white rounded-lg">
            <div className="flex flex-col md:flex-row h-[50%] gap-10">
                <div className="lg:w-1/2 w-full ">
                    <div className="h-[60vh] overflow-hidden">
                        <img
                            src={`${mainImage}` || keys.DEFAULT_IMG}
                            alt="Main product image"
                            loading="lazy"
                            className="w-full object-cover p-2 transition-transform duration-300 ease-out"
                        />
                    </div>
                    <div className="flex justify-center mt-4 ">
                        {productImages?.map((src, index) => (
                            <img
                                key={index}
                                src={`${src}` || keys.DEFAULT_IMG}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-16 h-16 md:w-20 md:h-20 object-cover mr-2 border border-gray-100 rounded-md shadow-sm cursor-pointer"
                                onClick={() => setMainImage(src)}
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex-grow justify-around flex flex-col gap-8">
                    <h2 className="text-lg md:text-xl">{product.name}</h2>
                    <div className="flex items-center mb-2">
                        <span className="mx-2 text-gray-600 ">
                            {product?.rating || 0}
                        </span>

                        <Rating
                            name="half-rating-read"
                            defaultValue={0}
                            value={product?.rating}
                            precision={0.5}
                            readOnly
                        />

                        <div className="flex justify-between gap-2 border-l-2 px-2 items-center mx-2 text-xs md:text-sm">
                            <p className="border-r-2 pr-2">
                                {product?.numOfReviews || 0} Reviews
                            </p>
                            <p className="px-2">
                                {product.totalOrders || 0} Orders
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-xl font-bold text-primary-400">
                            Rs.{product.price.toFixed(2)}
                        </p>
                        {oldPrice > product.price && (
                            <p className="text-sm font-semibold line-through text-gray-500">
                                Rs.{oldPrice.toFixed(2)}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center">
                        {product.stock > 1 ? (
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-gray-800 font-bold">
                                        Quantity:
                                    </h3>
                                    <Quantity
                                        qty={qty}
                                        setQty={setQty}
                                        product={product}
                                    />
                                    <span className="mx-2 px-1 text-sm">
                                        {product.stock} pieces left
                                    </span>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    (Minimum Order Qrty:{' '}
                                    {product.minimumOrderQty})
                                </p>
                            </div>
                        ) : null}
                    </div>
                    <div className="flex items-center gap-2">
                        <h3 className="text-gray-800 font-bold">
                            Total Price:
                        </h3>
                        <p className="text-xl font-bold text-primary-400 transition-all duration-100 ease-in">
                            Rs.{(product.price * qty).toFixed(2)}
                        </p>
                        <span className="mx-2 px-1 text-xs">(Tax : incl.)</span>
                    </div>
                    <div className="flex gap-6 w-full">
                        <button
                            onClick={buyNowHandler}
                            className="btn bg-orange-500 hover:bg-orange-600 focus: text-white px-10"
                        >
                            Buy now
                        </button>
                        <button
                            onClick={addToCartHandler}
                            className="btn primary-btn px-10"
                        >
                            {isProductAddToCart ? 'Update Cart' : 'Add to cart'}
                        </button>
                        <WishListIcon productId={product._id} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
