import FilterSidebar from '../../components/Sort/FilterSidebar'
import Loader from '../../components/Loader'
import ProductCard from '../../components/Product/ProductCard'
import { useParams, useSearchParams } from 'react-router-dom'
import { useGetBrandBySlugQuery } from '../../redux/slices/brandsApiSlice'

export const BrandsProductsPage = () => {
    const [searchParams] = useSearchParams()

    const { slug } = useParams()
    // Extract query parameters from URL

    let filters = {}
    for (let [param, value] of searchParams.entries()) {
        filters[param] = value
        if (param === 'discount') {
            filters = {
                sort: 'discount',
            }
        }

        if (param === 'featured') {
            filters = {
                isFeatured: true,
            }
        }
    }

    // Fetch products based on query parameters
    const { data: brand, isLoading } = useGetBrandBySlugQuery(slug)

    console.log(brand)

    return isLoading ? (
        <Loader />
    ) : brand && brand?.doc ? (
        <>
            <div className="mt-4 w-full mx-auto py-4">
                <div>
                    <h1>{brand?.doc?.name}</h1>
                    <h1>{brand?.doc?.totalProducts} items founds </h1>
                </div>
                <div className="flex justify-between items-start gap-4 my-4">
                    <FilterSidebar filters={filters} />
                    {brand?.doc &&
                    brand?.doc?.products &&
                    brand?.doc?.products?.length ? (
                        <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 transition-all ease-in duration-300">
                            {brand?.doc?.products?.map((product, index) => (
                                <ProductCard key={index} data={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-lg flex mt-20 justify-center items-center bg-red-100 text-red-500 py-4 px-8 w-full text-center">
                            <h2>Brand products not found!</h2>
                        </div>
                    )}
                </div>
            </div>
        </>
    ) : (
        <p className="text-center p-12">Brand not found!</p>
    )
}

export default BrandsProductsPage
