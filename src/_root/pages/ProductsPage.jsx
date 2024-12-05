import FilterSidebar from '../../components/Sort/FilterSidebar'
import Loader from '../../components/Loader'
import ProductCard from '../../components/Product/ProductCard'
import { useGetProductsQuery } from '../../redux/slices/productsApiSlice'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import img from '../../assets/no-product-found.png'
import { TablePagination } from '@mui/material'
import ProductsHeader from './../../components/Product/subcomponent/ProductsHeader'

export const ProductsPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const [currentPage, setCurrentPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(12)

    const query = searchParams.get('query') || ''

    // Construct filters from search parameters
    let filters = Array.from(searchParams.entries()).reduce(
        (acc, [param, value]) => {
            acc[param] = value
            return acc
        },
        {}
    )
    const { data: products, isFetching: isFetchingProducts } =
        useGetProductsQuery({
            ...filters,
            page: currentPage + 1, // API expects 1-based indexing
            limit: rowsPerPage,
        })

    // Calculate total products and pagination
    const totalProducts = products?.results || 0

    // Calculate the starting index of the products to display on the current page
    const startIndex = currentPage * rowsPerPage
    const currentProducts =
        products?.doc?.slice(startIndex, startIndex + rowsPerPage) || []

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
        setRowsPerPage(parseInt(event.target.value, 10))
        setCurrentPage(0) // Reset to the first page when changing rows per page
    }

    return isFetchingProducts ? (
        <Loader />
    ) : products ? (
        <>
            <div className="mt-4 w-full mx-auto py-4">
                <ProductsHeader
                    title={'Products'}
                    totalItems={products?.totalDocs}
                />
                <div className="flex justify-between items-start gap-4 my-4">
                    <FilterSidebar filters={filters} />
                    {currentProducts?.length ? (
                        <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 transition-all py-2 ease-in duration-300">
                            {currentProducts.map((product, index) => (
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
                {/* Pagination Controls using MUI TablePagination */}
                {totalProducts > rowsPerPage && (
                    <TablePagination
                        component="div"
                        count={totalProducts}
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
        <p className="text-center p-12">Products not found!</p>
    )
}
export default ProductsPage
