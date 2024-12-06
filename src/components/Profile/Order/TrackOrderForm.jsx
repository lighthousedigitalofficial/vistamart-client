/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FaSyncAlt } from 'react-icons/fa'

const TrackOrderForm = ({ onSubmit }) => {
    const [orderId, setOrderId] = useState('')

    const handleClear = () => {
        setOrderId('')
    }

    const handleTrackOrder = () => {
        if (orderId) {
            onSubmit(orderId)
        }
    }

    return (
        <div className="xl:w-full mx-auto p-8 h-[100%] bg-white shadow-sm shadow-primary-100 items-center rounded-lg">
            <button
                onClick={handleClear}
                className="flex items-center text-gray-600 hover:text-gray-800"
            >
                <FaSyncAlt className="mr-1" /> Clear
            </button>
            <h2 className="text-2xl font-semibold text-center mb-6">
                Track Order
            </h2>
            <div className="flex justify-center items-center mb-4 gap-4">
                <input
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="Order ID"
                    className="border border-gray-400 rounded-md px-4 py-2 w-1/3 focus:outline-none"
                />
                <button onClick={handleTrackOrder} className="btn primary-btn">
                    Track Order
                </button>
            </div>
        </div>
    )
}

export default TrackOrderForm
