import { useState } from 'react'
import TrackOrderForm from './TrackOrderForm'
import OrderProgress from './OderProgress'
import TrackOrderImg from './../../../assets/track-order.jpg'

const TrackOrder = () => {
    const [orderId, setOrderId] = useState(null)

    const handleTrackOrderSubmit = (orderId) => {
        setOrderId(orderId)
    }

    return (
        <div className="xl:w-full mx-auto p-8 bg-white shadow-sm shadow-primary-100 items-center rounded-lg">
            <TrackOrderForm onSubmit={handleTrackOrderSubmit} />
            {orderId ? (
                <OrderProgress orderId={orderId} />
            ) : (
                <div className="text-center">
                    <img
                        src={TrackOrderImg}
                        alt="Truck"
                        className="mb-2 object-contain"
                    />
                    <p className="text-gray-600">
                        Enter your order ID & phone number to get delivery
                        updates
                    </p>
                </div>
            )}
        </div>
    )
}

export default TrackOrder
