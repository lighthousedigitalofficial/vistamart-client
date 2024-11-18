/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { FaStar, FaBoxOpen, FaComment } from 'react-icons/fa'
import { useGetVendorDetailsQuery } from '../../../redux/slices/vendorsApiSlice'
import Loader from '../../Loader'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import keys from '../../../config/keys'

const VanderCard = ({ vendorId }) => {
    const { data: vendor, isLoading } = useGetVendorDetailsQuery(vendorId, {
        skip: !vendorId,
    })

    return isLoading ? (
        <Loader />
    ) : vendor && vendor?.doc ? (
        <div
            key={vendor?.doc?._id}
            className="bg-white p-4 rounded shadow flex flex-col gap-2"
        >
            <Link
                to={`/shop-view/${vendor?.doc?.slug}`}
                className="flex items-center space-x-2 group"
            >
                <LazyLoadImage
                    src={
                        vendor?.doc?.logo
                            ? vendor?.doc?.logo.startsWith('vendors')
                                ? `${keys.BUCKET_URL}${vendor?.doc?.logo}`
                                : vendor?.doc?.logo
                            : keys.DEFAULT_IMG
                    }
                    effect="blur" // You can use "blur" or "opacity" as lazy load effect
                    alt={vendor?.doc?.shopName}
                    className="w-16 h-16 rounded-full object-contain"
                />
                <div>
                    <div className="font-bold group-hover:text-primary-400">
                        {vendor?.doc?.shopName}
                    </div>
                    <div className="text-gray-600 text-sm group-hover:text-primary-400">
                        {vendor?.doc?.address}
                    </div>
                </div>
            </Link>
            <div className="mt-2">
                <div className="flex text-gray-600 mx-auto justify-center items-center">
                    <div className="flex flex-col gap-2 justify-center items-center pr-4 border-r border-gray-300">
                        <FaStar className="text-yellow-800 text-lg" />{' '}
                        {vendor?.doc?.reviews.length || 0} Reviews
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center pl-4">
                        <FaBoxOpen className="text-green-800 text-lg" />{' '}
                        {vendor?.doc?.totalProducts || 0} Products
                    </div>
                </div>
            </div>
            {/* <button className="bg-primary-400 text-white px-4 py-2 rounded mt-4 w-full flex justify-center items-center">
                <FaComment className="mr-2" /> Chat With Vendor
            </button> */}
        </div>
    ) : null
}

VanderCard.propTypes = {
    vendor: PropTypes.object,
}

export default VanderCard
