import FilterSidebar from '../../components/Sort/FilterSidebar'
import Loader from '../../components/Loader'
import ProductCard from '../../components/Product/ProductCard'
import { useParams, useSearchParams } from 'react-router-dom'
import { useGetCategoryBySlugQuery } from '../../redux/slices/categoriesApiSlice'
import { capitalizeFirstLetter } from '../../utils'
import img from '../../assets/no-product-found.png'
import { useGetProductsQuery } from '../../redux/slices/productsApiSlice'
import { useState } from 'react'
import { TablePagination } from '@mui/material'

export const CategoryProductsPage = () => {
    const [searchParams] = useSearchParams()

    const { slug } = useParams()
    const [currentPage, setCurrentPage] = useState(0) // Current page
    const [rowsPerPage, setRowsPerPage] = useState(12) // Rows per page

    // Construct filters from search parameters
    let filters = Array.from(searchParams.entries()).reduce(
        (acc, [param, value]) => {
            acc[param] = value
            return acc
        },
        {}
    )

    // Fetch products based on query parameters
    const { data: category, isLoading } = useGetCategoryBySlugQuery(slug)

    const { data: products, isFetching: productsFetching } =
        useGetProductsQuery({
            category: category?.doc?._id,
            status: 'approved',
            ...filters,
        })

    // Calculate the starting index of the products to display on the current page
    const startIndex = currentPage * rowsPerPage
    const currentProducts =
        products?.doc?.slice(startIndex, startIndex + rowsPerPage) || []

    // Handle page change
    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage)
    }

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setCurrentPage(0) // Reset to the first page when changing rows per page
    }

    return isLoading || productsFetching ? (
        <Loader />
    ) : category && category?.doc ? (
        <>
            <div className="mt-4 w-full mx-auto py-4">
                <div className="bg-primary-50 p-6 rounded-lg shadow-sm">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        Category Products (
                        {capitalizeFirstLetter(category?.doc?.name)})
                    </h1>
                    <h1 className="text-lg text-gray-600">
                        {products?.results} Items found
                    </h1>
                </div>
                <div className="flex justify-between items-start gap-4 my-4">
                    <FilterSidebar filters={filters} />
                    {productsFetching ? (
                        <Loader />
                    ) : currentProducts?.length > 0 ? (
                        <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 py-2 transition-all ease-in duration-300">
                            {currentProducts?.map((product, index) => (
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
                {/* Pagination Controls */}
                {products?.results > rowsPerPage && (
                    <TablePagination
                        component="div"
                        count={products?.results || 0}
                        page={currentPage}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        rowsPerPageOptions={[12, 24, 36, 60]} // You can customize this
                    />
                )}
            </div>
        </>
    ) : (
        <p className="text-center p-12">Category not found!</p>
    )
}

export default CategoryProductsPage
