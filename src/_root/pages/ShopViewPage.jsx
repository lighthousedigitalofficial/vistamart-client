import ShopBanner from '../../components/Banners/ShopBanner'
import Loader from '../../components/Loader'
import { useGetVendorBySlugQuery } from '../../redux/slices/vendorsApiSlice'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/Product/ProductCard'
import CategorySidebar from '../../components/Categories/CategorySideBar'
import { BrandHeader } from '../../components/Brands/BrandHeader'
import img from '../../assets/no-product-found.png'
import { TablePagination } from '@mui/material'
import { useState } from 'react'

const ShopViewPage = () => {
    const { slug } = useParams()

    const { data: vendor, isLoading } = useGetVendorBySlugQuery(slug)

    // Pagination states
    const [currentPage, setCurrentPage] = useState(0) // MUI uses 0-based indexing
    const [rowsPerPage, setRowsPerPage] = useState(10) // Adjust as needed

    // Extract product count and any filters you want to pass to BrandHeader
    const productCount = vendor?.doc?.totalProducts || 0

    // Calculate current products based on pagination
    const currentProducts =
        vendor?.doc?.products.slice(
            currentPage * rowsPerPage,
            currentPage * rowsPerPage + rowsPerPage
        ) || []

    // Handle page change
    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage)
    }

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setCurrentPage(0) // Reset to the first page when changing rows per page
    }

    return isLoading ? (
        <Loader />
    ) : vendor && vendor?.doc ? (
        <div>
            <ShopBanner vendor={vendor?.doc} />

            {/* Space between banner and brand header */}
            <div className="mt-6 lg:mt-8">
                <BrandHeader
                    style={{ marginTop: '10px' }} // Spacing between banner and header
                    products={{ results: productCount }}
                    filters={{ brand: vendor?.doc?.name }}
                />
            </div>

            <div className="flex justify-between gap-6 items-start w-full mt-6 lg:mt-8">
                {/* Adjusted sidebar for larger screens */}
                <div className="hidden lg:block lg:w-1/4 bg-white border border-gray-200 rounded-md shadow-lg p-4">
                    <CategorySidebar />
                </div>
                <div className="w-full lg:w-3/4 p-4">
                    {vendor && vendor?.doc?.totalProducts > 0 ? (
                        <>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                                {currentProducts.map((product, index) => (
                                    <ProductCard key={index} data={product} />
                                ))}
                            </div>
                            {/* Pagination Controls using MUI TablePagination */}
                            <TablePagination
                                component="div"
                                count={productCount} // Total product count
                                page={currentPage}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                rowsPerPageOptions={[4, 8, 12]} // You can customize this
                            />
                        </>
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
        </div>
    ) : (
        <p className="text-lg bg-red-50 text-red-500 py-4 px-8 mx-auto">
            Vendor data not found!
        </p>
    )
}

export default ShopViewPage
