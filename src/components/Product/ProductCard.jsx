import { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import ProductDialog from './ProductDialog'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import keys from './../../config/keys'
import { formatPrice } from '../../utils/helpers'
import { Rating } from '@mui/material'

const ProductCard = ({ data: product }) => {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleProductClick = (product) => {
        setSelectedProduct(product)
        setIsDialogOpen(true)
    }

    const handleCloseDialog = () => {
        setIsDialogOpen(false)
        setSelectedProduct(null)
    }

    const productThumbnail = product?.thumbnail
        ? product.thumbnail.startsWith('products')
            ? `${keys.BUCKET_URL}${product.thumbnail}`
            : product.thumbnail
        : keys.DEFAULT_IMG

    return (
        product && (
            <div className="bg-white overflow-hidden shadow-sm  w-full">
                <div className="relative overflow-hidden group cursor-pointer z-10">
                    {product?.discountAmount > 0 && (
                        <div className="discount-badge">
                            - Rs.{formatPrice(product?.discountAmount)}
                        </div>
                    )}
                    <Link to={`/products/${product}`}>
                        <img
                            src={productThumbnail}
                            alt={product.name}
                            loading="lazy"
                            className="product__img object-cover object-top"
                        />
                    </Link>
                    <div className="product__quick-view z-20">
                        <button
                            onClick={() => handleProductClick(product)}
                            className="bg-white p-2 rounded-full shadow-sm cursor-pointer hover:text-primary-400"
                        >
                            <FaEye className="text-xl" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col p-4 group gap-4">
                    <Link to={`/products/${product.slug}`}>
                        <p className="font-medium truncate mb-2 group-hover:text-primary-400 transition-all ease-in">
                            {product.name}
                        </p>
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
                                <p className="text-xs">
                                    ({product?.numOfReviews})
                                </p>
                            </div>
                        )}

                        <div className="flex items-center gap-2">
                            <p className="text-sm font-bold text-primary-400">
                                <span className="text-xs">Rs.</span>
                                {product.discountAmount > 0
                                    ? formatPrice(
                                          product?.price -
                                              product.discountAmount
                                      )
                                    : formatPrice(product?.price)}
                            </p>
                            {product.discountAmount > 0 && product.price && (
                                <p className="text-xs line-through text-gray-500">
                                    {formatPrice(product.price)}
                                </p>
                            )}
                        </div>
                    </Link>
                </div>

                {selectedProduct && (
                    <ProductDialog
                        productId={product._id}
                        open={isDialogOpen}
                        onClose={handleCloseDialog}
                    />
                )}
            </div>
        )
    )
}

export default ProductCard

ProductCard.propTypes = {
    data: PropTypes.object.isRequired,
}
