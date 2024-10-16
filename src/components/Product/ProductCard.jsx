import { useState } from "react";
import { FaEye } from "react-icons/fa";
import ProductDialog from "./ProductDialog";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import keys from "./../../config/keys";

const ProductCard = ({ data: product }) => {
	const oldPrice = product?.price + product?.discount || null;
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleProductClick = (product) => {
		setSelectedProduct(product);
		setIsDialogOpen(true);
	};

	const handleCloseDialog = () => {
		setIsDialogOpen(false);
		setSelectedProduct(null);
	};

	console.log(product);

	return (
		product && (
			<div className="bg-white rounded-lg overflow-hidden shadow-md shadow-gray-100 w-full max-w-xs">
				<div className="relative rounded-lg overflow-hidden group cursor-pointer z-10">
					{product?.discountAmount > 0 && (
						<div className="discount-badge">-${product?.discountAmount}</div>
					)}
					<img
						src={product?.thumbnail ? `${product.thumbnail}` : keys.DEFAULT_IMG}
						alt={product.name}
						className="product__img"
					/>
					<div className="product__quick-view z-20">
						<button
							onClick={() => handleProductClick(product)}
							className="bg-white p-2 rounded-full shadow-sm cursor-pointer hover:text-primary-400"
						>
							<FaEye className="text-xl" />
						</button>
					</div>
				</div>
				<div className="p-4 group">
					<Link to={`/products/${product.slug}`}>
						<p className="font-medium truncate mb-2 group-hover:text-primary-400 transition-all ease-in">
							{product.name}
						</p>
						<div className="flex items-center gap-2">
							{oldPrice > product.price && (
								<p className="text-sm line-through text-gray-500">
									${oldPrice?.toFixed(2)}
								</p>
							)}
							<p className="text-lg font-bold">${product.price?.toFixed(2)}</p>
						</div>
					</Link>
				</div>

				{selectedProduct && (
					<ProductDialog
						productId={product._id}
						open={isDialogOpen}
						onClose={handleCloseDialog}
					/>
				)}
			</div>
		)
	);
};

export default ProductCard;

ProductCard.propTypes = {
	data: PropTypes.object.isRequired,
};
