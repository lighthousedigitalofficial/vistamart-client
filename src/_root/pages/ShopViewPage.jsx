import ShopBanner from '../../components/Banners/ShopBanner'
import Loader from '../../components/Loader'
import { useGetVendorBySlugQuery } from '../../redux/slices/vendorsApiSlice'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/Product/ProductCard'
import CategorySidebar from '../../components/Categories/CategorySideBar'
import { BrandHeader } from '../../components/Brands/BrandHeader'
import img from '../../assets/no-product-found.png'

const ShopViewPage = () => {
    const { slug } = useParams()

    const { data: vendor, isLoading } = useGetVendorBySlugQuery(slug)

    // console.log(vendor)

    // Extract product count and any filters you want to pass to BrandHeader
    const productCount = vendor?.doc?.totalProducts?.length || 0

    return isLoading ? (
        <Loader />
    ) : vendor && vendor?.doc ? (
        <div className="">
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
                    {vendor && vendor?.doc?.totalProducts?.length ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                            {vendor?.doc?.totalProducts?.map(
                                (product, index) => (
                                    <ProductCard key={index} data={product} />
                                )
                            )}
                        </div>
                    ) : (
                        <div className="text-lg flex mt-20 justify-center items-center w-full text-center">
                            <img src={img} alt="NO Product Found" className='w-[60%] mx-auto'/>
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
