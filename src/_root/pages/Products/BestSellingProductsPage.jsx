import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { TablePagination } from '@mui/material'

import FilterSidebar from '../../../components/Sort/FilterSidebar'
import Loader from '../../../components/Loader'
import ProductCard from '../../../components/Product/ProductCard'

import img from '../../../assets/no-product-found.png'
import { useGetBestSellingProductsQuery } from '../../../redux/slices/productsApiSlice'
import { BrandHeader } from '../../../components/Brands/BrandHeader'

export const BestSellingProductsPage = () => {
    const [searchParams] = useSearchParams()

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
    const { data: products, isFetching: isFetchingProducts } =
        useGetBestSellingProductsQuery({ limit: 60, ...filters })

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

    return isFetchingProducts ? (
        <Loader />
    ) : products ? (
        <>
            <div className="mt-4 w-full mx-auto py-4">
                <BrandHeader
                    filters={filters}
                    title={'Best Selling Products'}
                    products={products}
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
                {products?.results > rowsPerPage && (
                    <TablePagination
                        component="div"
                        count={products?.results}
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
export default BestSellingProductsPage
