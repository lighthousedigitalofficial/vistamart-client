import { Link, useParams } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import {
    useGetProductBySlugQuery,
    useGetProductsQuery,
} from '../../redux/slices/productsApiSlice'

import Product from '../../components/Product/Product'
import Loader from '../../components/Loader'
import ProductCard from '../../components/Product/ProductCard'
import ProductCarousel from '../../components/shared/ProductCarousel'
import ProductReviews from '../../components/Product/ProductReviews'
import VendorRightBar from '../../components/Seller/VendorRightBar'
import Overview from '../../components/Product/subcomponent/Overview'
// import AddReview from '../../components/Product/AddReview'

const ProductDetailsPage = () => {
    const { slug } = useParams()

    const { data: product, isFetching: isProductFetching } =
        useGetProductBySlugQuery(slug, {
            skip: !slug,
        })

    const { data: products, isFetching: isProductsLoading } =
        useGetProductsQuery(
            {
                brand: product?.doc?.brand?._id,
                limit: 10,
            },
            { skip: !product?.doc?.brand?._id }
        )

    return isProductFetching ? (
        <Loader />
    ) : product && product.doc ? (
        <div className="container w-full flex flex-col space-y-4 sm:space-y-0 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 w-full">
                <div className="flex flex-col w-full">
                    <Product product={product?.doc} />
                    <div className="flex flex-col-reverse lg:flex-row w-full gap-4">
                        <div className="flex flex-col w-full lg:w-3/4">
                            <Overview product={product?.doc} />
                            <ProductReviews product={product?.doc} />
                            {/* <AddReview
                                productId={product?.doc._id}
                                refetch={refetch}
                            /> */}
                        </div>
                        <div className="w-full lg:w-1/4 mt-8">
                            <VendorRightBar
                                vendorId={product?.doc?.userId}
                                shop
                            />
                        </div>
                    </div>
                </div>
            </div>

            {isProductsLoading ? (
                <Loader />
            ) : products && products.doc?.length ? (
                <div className="products-container">
                    <div className="flex justify-between items-center mx-2">
                        <div className="flex justify-between items-center w-fit gap-2 mb-4">
                            <h3 className="text-xl font-bold">
                                Similar Products
                            </h3>
                        </div>
                        <Link
                            to={`/products/brand/${product.doc.brand.slug}`}
                            className="view-box"
                        >
                            View All
                            <span>
                                <FaAngleRight className="text-lg" />
                            </span>
                        </Link>
                    </div>
                    <ProductCarousel
                        data={products?.doc}
                        component={ProductCard}
                        largeDesktopLimit={5}
                        desktopLimit={4}
                    />
                </div>
            ) : null}
        </div>
    ) : (
        <p>Product details not found!</p>
    )
}

export default ProductDetailsPage
