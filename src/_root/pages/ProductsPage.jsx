import { BrandHeader } from '../../components/Brands/BrandHeader'
import FilterSidebar from '../../components/Sort/FilterSidebar'
import Loader from '../../components/Loader'
import ProductCard from '../../components/Product/ProductCard'
import { useGetProductsQuery } from '../../redux/slices/productsApiSlice'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import img from '../../assets/no-product-found.png'

export const ProductsPage = () => {
    const [searchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
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
    const { data: products, isLoading } = useGetProductsQuery(filters, {
        skip: !filters,
    })

    useEffect(() => {
        isLoading ? setLoading(true) : setLoading(false)
    }, [products, isLoading])

    return loading ? (
        <Loader />
    ) : products ? (
        <>
            <div className="mt-4 w-full mx-auto py-4">
                <BrandHeader filters={filters} products={products} />
                <div className="flex justify-between items-start gap-4 my-4">
                    <FilterSidebar filters={filters} />
                    {products.doc && products.doc.length ? (
                        <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 transition-all ease-in duration-300">
                            {products?.doc?.map((product, index) => (
                                <ProductCard key={index} data={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-lg flex mt-20 justify-center items-center w-full text-center">
                            <img src={img} alt="NO Product Found" className='w-[60%] mx-auto'/>
                        </div>
                    )}
                </div>
            </div>
        </>
    ) : (
        <p className="text-center p-12">Products not found!</p>
    )
}
export default ProductsPage
