import { Link } from 'react-router-dom'
import keys from './../../config/keys'

/* eslint-disable react/prop-types */

// ${keys.BUCKET_URL}
const BrandItem = ({ brand }) => {
    return (
        <div className="border border-gray-300 h-24 w-24 rounded-full group cursor-pointer">
            <Link to={`/products/brand/${brand.slug}`} className="">
                <img
                    src={`${brand.logo}` || keys.DEFAULT_IMG}
                    alt={brand.name}
                    className="w-full h-full rounded-full overflow-hidden object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </Link>
        </div>
    )
}

export default BrandItem
