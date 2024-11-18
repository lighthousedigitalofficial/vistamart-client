import { Link } from 'react-router-dom'
import keys from './../../config/keys'
import { formatPrice } from '../../utils/helpers'

const FlatCard = (product) => {
    const oldPrice = product?.price + product?.discountAmount || 0

    const productThumbnail = product?.thumbnail
        ? product.thumbnail.startsWith('products')
            ? `${keys.BUCKET_URL}${product.thumbnail}`
            : product.thumbnail
        : keys.DEFAULT_IMG

    return (
        <div className="w-72 bg-white border border-primary-100 rounded-lg overflow-hidden flex justify-between items-start mx-2">
            <div className="relative rounded-lg overflow-hidden group cursor-pointer z-10">
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
                        className="product__img h-32"
                    />
                </Link>
            </div>
            <div className="p-4 w-44">
                <Link to={`/products/${product.slug}`}>
                    <p className="font-medium truncate mb-2 group:hover:text-primary-400">
                        {product.name}
                    </p>
                </Link>
                <div className="flex items-center gap-2">
                    {oldPrice > product.price && (
                        <p className="text-sm line-through text-gray-500">
                            Rs.{formatPrice(oldPrice)}
                        </p>
                    )}
                    <p className="text-lg font-bold">
                        Rs.{formatPrice(product.price)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FlatCard
