/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addToCart } from '../../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import Quantity from './subcomponent/Quantity'
import { FaXmark } from 'react-icons/fa6'
import Loader from '../Loader'
import { useGetProductDetailsQuery } from '../../redux/slices/productsApiSlice'
import WishListIcon from './subcomponent/WishListIcon'
import toast from 'react-hot-toast'
import Rating from '@mui/material/Rating'
import { formatPrice } from '../../utils/helpers'
import ProductSlider from './ProductSlider'

const ProductQuickView = ({ productId, onClose }) => {
    const { data: product, isLoading } = useGetProductDetailsQuery(productId, {
        skip: !productId,
    })

    const [totalPrice, setTotalPrice] = useState(0)
    const [images, setImages] = useState([])

    const [qty, setQty] = useState(1)
    const [minimumOrderError, setMinimumOrderError] = useState(false)

    const oldPrice = product?.doc?.price + product?.doc?.discountAmount || 0
    useEffect(() => {
        if (product?.doc) {
            const productImages = product?.doc
                ? [product?.doc?.thumbnail, ...product.doc.images]
                : []
            setImages(productImages)
        }
        if (!product?.doc?.taxIncluded) {
            setTotalPrice((product?.doc?.price + product?.doc.taxAmount) * qty)
        } else setTotalPrice(product?.doc?.price * qty)

        // setMainImage(productImage)
    }, [product?.doc, qty])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { cartItems } = useSelector((state) => state.cart)

    const isProductAddToCart = cartItems?.find(
        (item) => item._id === product?.doc?._id
    )

    const addToCartHandler = () => {
        if (qty >= product.doc.minimumOrderQty) {
            dispatch(addToCart({ ...product.doc, qty }))
            onClose()
            toast.success('Item added successfully')
        } else setMinimumOrderError(true)
    }

    if (minimumOrderError) {
        setTimeout(() => {
            setMinimumOrderError(false)
        }, 3000)
    }

    const buyNowHandler = () => {
        if (qty >= product.doc.minimumOrderQty) {
            dispatch(addToCart({ ...product.doc, qty }))
            onClose()
            navigate('/checkout/shipping-address')
        } else setMinimumOrderError(true)
    }

    return isLoading ? (
        <div className="z-50">
            <Loader />
        </div>
    ) : product && product?.doc ? (
        <div className="flex flex-col  border shadow bg-white rounded w-full p-4 max-h-screen md:max-h-[100vh] overflow-y-auto">
            {/* Close button and Product title */}
            <div className="flex justify-between items-center p-4 border-b">
                <Link
                    to={`/products/${product.doc.slug}`}
                    className="text-lg md:text-xl truncate w-2/3 font-semibold hover:text-primary-500 text-primary-600"
                >
                    {product.doc.name}
                </Link>
                <button onClick={onClose} className="text-gray-500 text-xl">
                    <FaXmark />
                </button>
            </div>

            {/* Product Image and Details */}
            <div className="flex flex-col lg:flex-row items-start gap-4 p-4">
                {/* Product Image Section */}
                <div className="lg:w-1/2 w-full">
                    <ProductSlider images={images} />
                </div>

                {/* Product Details Section */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                    <h2 className="text-xl md:text-2xl">{product.doc.name}</h2>
                    <div className="flex items-center mb-2">
                        <span className="mx-2 text-gray-600 ">
                            {product?.doc?.rating || 0}
                        </span>
                        <Rating
                            name="half-rating-read"
                            defaultValue={0}
                            value={product?.doc?.rating}
                            precision={0.5}
                            readOnly
                        />

                        <div className="flex justify-between gap-2 border-l-2 px-2 items-center mx-2 text-xs md:text-sm">
                            <p className="border-r-2 pr-2">
                                {product?.doc?.numOfReviews || 0} Reviews
                            </p>
                            <p className="px-2">
                                {product?.doc?.totalOrders || 0} Orders
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-bold text-primary-400">
                            Rs.{formatPrice(product?.doc?.price)}
                        </p>
                        {oldPrice > product.doc.price && (
                            <p className="text-sm font-semibold line-through text-gray-500">
                                Rs.{formatPrice(oldPrice)}
                            </p>
                        )}
                    </div>
                    {product.doc.stock > 0 ? (
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-bold">Quantity:</h3>
                                <Quantity
                                    qty={qty}
                                    setQty={setQty}
                                    product={product.doc}
                                />
                                <span className="text-sm">
                                    {product.doc.stock} left
                                </span>
                            </div>
                            <p className="text-sm">
                                (Minimum Order Qty:{' '}
                                {product.doc.minimumOrderQty})
                            </p>
                            {minimumOrderError && (
                                <p className="bg-red-100 text-red-400 w-full rounded-lg p-2">
                                    {`Minimum order for this item is ${product.doc.minimumOrderQty} piece.`}
                                </p>
                            )}
                        </div>
                    ) : (
                        <h2 className="md:text-2xl text-lg font-bold text-red-600 mb-2">
                            Out of Stock
                        </h2>
                    )}
                    <div className="flex items-center gap-2 font-bold">
                        <h3 className="">Total Price:</h3>
                        <p className="text-primary-400 ">
                            Rs.{formatPrice(totalPrice)}
                        </p>
                        <span className="text-xs">
                            {' '}
                            {product.doc.taxIncluded
                                ? '(Tax: incl.)'
                                : `(Tax: Rs. ${product.doc.taxAmount || 0})`}
                        </span>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-6 w-full">
                        <button
                            onClick={buyNowHandler}
                            disabled={product.doc.stock < 1}
                            className={`btn px-10 text-white ${
                                product.doc.stock < 1
                                    ? 'bg-orange-500 opacity-50 cursor-not-allowed'
                                    : 'bg-orange-500 hover:bg-orange-600'
                            }`}
                        >
                            Buy now
                        </button>
                        <button
                            onClick={addToCartHandler}
                            disabled={product.doc.stock < 1}
                            className={`btn px-10 ${
                                product.doc.stock < 1
                                    ? 'primary-btn opacity-50 cursor-not-allowed'
                                    : 'primary-btn'
                            }`}
                        >
                            {isProductAddToCart ? 'Update Cart' : 'Add to cart'}
                        </button>
                        <WishListIcon productId={product._id} />
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <p>Product details not found!</p>
    )
}

export default ProductQuickView
