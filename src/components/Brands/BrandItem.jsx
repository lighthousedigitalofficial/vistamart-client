import { Link } from "react-router-dom";
import keys from "./../../config/keys";

/* eslint-disable react/prop-types */
const BrandItem = ({ brand }) => {
	return (
		<div className="border border-gray-300 h-24 w-24 rounded-full p-4 group cursor-pointer">
			<Link to={`/products?brand=${brand._id}`} className="">
				<img
					src={`${keys.BUCKET_URL}${brand.logo}` || keys.DEFAULT_IMG}
					alt={brand.name}
					className=" object-contain transition-transform duration-300 group-hover:scale-110"
				/>
			</Link>
		</div>
	);
};

export default BrandItem;
