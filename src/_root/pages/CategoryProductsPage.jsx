import FilterSidebar from '../../components/Sort/FilterSidebar'
import Loader from '../../components/Loader'
import ProductCard from '../../components/Product/ProductCard'
import { useParams, useSearchParams } from 'react-router-dom'
import { useGetCategoryBySlugQuery } from '../../redux/slices/categoriesApiSlice'
import { capitalizeFirstLetter } from '../../utils'
import img from '../../assets/no-product-found.png'

export const CategoryProductsPage = () => {
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
    const { data: category, isLoading } = useGetCategoryBySlugQuery(slug)

    // console.log(category)

    return isLoading ? (
        <Loader />
    ) : category && category?.doc ? (
        <>
            <div className="mt-4 w-full mx-auto py-4">
                <div className="bg-primary-50 p-6 rounded-lg shadow-sm">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        {capitalizeFirstLetter(category?.doc?.name)}
                    </h1>
                    <h1 className="text-lg text-gray-600">
                        {category?.doc?.totalProducts} Items found
                    </h1>
                </div>
                <div className="flex justify-between items-start gap-4 my-4">
                    <FilterSidebar filters={filters} />
                    {category?.doc &&
                    category?.doc?.products &&
                    category?.doc?.products?.length ? (
                        <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 transition-all ease-in duration-300">
                            {category?.doc?.products?.map((product, index) => (
                                <ProductCard key={index} data={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-lg flex mt-20 justify-center items-center w-full text-center">
                            <img
                                src={img}
                                alt="NO Product Found"
                                className="w-[60%] mx-auto"
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    ) : (
        <p className="text-center p-12">Category not found!</p>
    )
}

export default CategoryProductsPage
