import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSearchProductsQuery } from '../../redux/slices/productsApiSlice'
import Loader from '../../components/Loader'
import ProductCard from '../../components/Product/ProductCard'

import TablePagination from '@mui/material/TablePagination'

const SearchResultPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [currentPage, setCurrentPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(15)

    const query = searchParams.get('query') || ''
    const category = searchParams.get('category') || ''
    const brand = searchParams.get('brand') || ''
    const slug = searchParams.get('product') || ''

    const [filters, setFilters] = useState({})

    useEffect(() => {
        // Construct new filters object immutably
        const newFilters = {}

        if (category) {
            newFilters.category = category // Add category filter
        } else if (brand) {
            newFilters.brand = brand // Add brand filter
        } else if (query) {
            newFilters.query = query // Add query filter
        }
        if (slug) {
            newFilters.slug = slug // Add slug filter
        }

        // Update state with the new filters object
        setFilters(newFilters)
    }, [brand, category, query, slug])

    const { data, isFetching } = useSearchProductsQuery({
        ...filters,
        page: currentPage + 1, // API expects 1-based indexing
        limit: rowsPerPage,
    })

    const totalProducts = data?.totalProducts || 0

    // Handle page change
    const handleChangePage = (_, newPage) => {
        setCurrentPage(newPage)
        setSearchParams({ query, page: newPage + 1 }) // Sync with URL (1-based indexing)
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        const newRowsPerPage = parseInt(event.target.value, 10)
        setRowsPerPage(newRowsPerPage)
        setCurrentPage(0) // Reset to the first page
        setSearchParams({ query, page: 1 }) // Reset page to 1 in the URL
    }

    return isFetching ? (
        <Loader />
    ) : (
        data && (
            <div className="container mx-auto p-4">
                <div className="py-2">
                    <h1 className="text-xl font-bold">Search Results</h1>
                    <h1 className="text-base text-gray-600 mb-4">
                        {totalProducts > 0
                            ? `${totalProducts} items found for "${query}"`
                            : 'No products found'}
                    </h1>
                </div>
                {totalProducts > 0 ? (
                    <>
                        {/* Product Grid */}
                        <div className="grid w-full lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
                            {data.doc.map((product) => (
                                <ProductCard key={product._id} data={product} />
                            ))}
                        </div>

                        {/* Pagination Controls using MUI TablePagination */}
                        {totalProducts > rowsPerPage && (
                            <TablePagination
                                component="div"
                                count={totalProducts}
                                page={currentPage}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                rowsPerPageOptions={[15, 30, 60]} // Customize options
                            />
                        )}
                    </>
                ) : (
                    <p className="text-center mt-12 py-8 text-lg text-gray-600">
                        {`There is no product! for this "${query}".`}
                    </p>
                )}
            </div>
        )
    )
}

export default SearchResultPage
