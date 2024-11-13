import Loader from '../../components/Loader'
import ProductCard from '../../components/Product/ProductCard'
import { useGetProductsQuery } from '../../redux/slices/productsApiSlice'

const FeaturedProductsPage = () => {
    const { data: products, isLoading } = useGetProductsQuery({
        isFeatured: true,
    })

    return isLoading ? (
        <Loader />
    ) : products && products?.doc ? (
        <div className="p-4">
            <div className="bg-primary-50 p-6 rounded-lg shadow-sm mb-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Featured Products
                </h1>
                <h1 className="text-lg text-gray-600">
                    {products?.results} Items found
                </h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 py-2">
                {products?.doc?.map((product, index) => {
                    if (index <= 7)
                        return <ProductCard key={index} data={product} />
                })}
            </div>
        </div>
    ) : (
        <p>Featured products not found!</p>
    )
}

export default FeaturedProductsPage
