import { Link } from 'react-router-dom'
import keys from './../../config/keys'
import { formatPrice } from '../../utils/helpers'
import { useEffect, useState } from 'react'
import { Rating } from '@mui/material'

const FlatCard = (product) => {
    const oldPrice = product?.price + product?.discountAmount || 0

    const [totalPrice, setTotalPrice] = useState(product.price || 0)

    useEffect(() => {
        if (!product?.taxIncluded) {
            setTotalPrice(product?.price + product.taxAmount)
        } else setTotalPrice(product.price)
    }, [product])

    const productThumbnail = product?.thumbnail
        ? product.thumbnail.startsWith('products')
            ? `${keys.BUCKET_URL}${product.thumbnail}`
            : product.thumbnail
        : keys.DEFAULT_IMG

    return (
        <div className="w-full bg-white  rounded-lg overflow-hidden flex gap-2 items-start mx-2">
            <div className="relative overflow-hidden group cursor-pointer z-10">
                {product.discount > 0 && (
                    <div className="discount-badge">
                        -${formatPrice(product.discountAmount)}
                    </div>
                )}
                <Link to={`/products/${product.slug}`}>
                    <img
                        src={productThumbnail}
                        alt={product.name}
                        loading="lazy"
                        className="w-32 h-32 object-cover object-top"
                    />
                </Link>
            </div>
            <div className="p-4 w-44">
                <Link to={`/products/${product.slug}`}>
                    <p className="font-medium truncate lg:w-80 md:72 w-52 mb-2 group:hover:text-primary-400">
                        {product.name}
                    </p>
                </Link>
                {product?.rating > 0 && (
                    <div className="flex items-center gap-2">
                        <Rating
                            name="half-rating-read"
                            defaultValue={0}
                            value={product?.rating}
                            precision={0.5}
                            readOnly
                            size="small"
                        />
                        <p className="text-xs">({product?.numOfReviews})</p>
                    </div>
                )}
                <div className="flex items-center gap-2">
                    {oldPrice > product.price && (
                        <p className="text-sm line-through text-gray-500">
                            Rs.{formatPrice(oldPrice)}
                        </p>
                    )}
                    <p className="text-lg font-bold text-primary-500">
                        Rs.{formatPrice(totalPrice)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FlatCard
