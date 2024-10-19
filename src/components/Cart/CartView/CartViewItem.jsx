/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../redux/slices/cartSlice'
import { FaTrash } from 'react-icons/fa'
import keys from './../../../config/keys'

const CartViewItem = ({ item }) => {
    const dispatch = useDispatch()

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div
            key={item._id}
            className="flex items-center bg-gray-50 justify-around border-b p-2"
        >
            <img
                src={item?.thumbnail ? `${item.thumbnail}` : keys.DEFAULT_IMG}
                alt={item.name}
                className="w-16 h-16 object-contain mr-4"
            />
            <div className="flex-grow">
                <div className="font-semibold truncate">{item.name}</div>
                <div className="text-gray-700">
                    Rs.{item?.price?.toFixed(2)}
                </div>
            </div>
            <div className="flex flex-col justify-between gap-4 py-2">
                <p>
                    qty: <span>{item.qty}</span>
                </p>
                <button
                    onClick={() => removeFromCartHandler(item._id)}
                    className="text-inherit cursor-pointer py-2"
                >
                    <FaTrash className="text-sm text-red-300 ml-2 hover:text-red-400" />
                </button>
            </div>
        </div>
    )
}

export default CartViewItem
