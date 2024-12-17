/* eslint-disable react/prop-types */
const TrackingShippingOrder = ({ details }) => {
    const {
        tracking_number,
        order_id,
        order_date,
        shipper,
        pickup,
        consignee,
        order_information,
        tracking_history,
    } = details

    return (
        <div className="bg-gray-50 min-h-screen p-4 md:p-8">
            {/* Hero Section */}
            <div className="text-center mb-6">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
                    Track Your Order
                </h1>
                <p className="text-gray-600">
                    Keep up-to-date with your shipment status
                </p>
            </div>

            {/* Order Summary */}
            <div className="bg-white shadow-md rounded-lg p-4 mb-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Order Summary
                </h2>
                <div className="space-y-2">
                    <p>
                        <span className="font-medium">Tracking Number:</span>{' '}
                        {tracking_number}
                    </p>
                    <p>
                        <span className="font-medium">Order ID:</span>{' '}
                        {order_id}
                    </p>
                    <p>
                        <span className="font-medium">Order Date:</span>{' '}
                        {new Date(order_date).toLocaleString()}
                    </p>
                </div>
            </div>

            {/* Shipper & Consignee Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Pickup Details
                    </h3>
                    <p>
                        <span className="font-medium">Origin:</span>{' '}
                        {pickup.origin}
                    </p>
                    <p>
                        <span className="font-medium">Contact Person:</span>{' '}
                        {pickup.person_of_contact}
                    </p>
                    <p>
                        <span className="font-medium">Phone:</span>{' '}
                        {pickup.phone_number}
                    </p>
                    <p>
                        <span className="font-medium">Address:</span>{' '}
                        {pickup.address}
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Consignee Details
                    </h3>
                    <p>
                        <span className="font-medium">Destination:</span>{' '}
                        {consignee.destination}
                    </p>
                    <p>
                        <span className="font-medium">Name:</span>{' '}
                        {consignee.name}
                    </p>
                    <p>
                        <span className="font-medium">Phone:</span>{' '}
                        {consignee.phone_number_1}
                    </p>
                    <p>
                        <span className="font-medium">Address:</span>{' '}
                        {consignee.address}
                    </p>
                </div>
            </div>

            {/* Order Items */}
            <div className="bg-white shadow-md rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Order Information
                </h3>
                <ul className="space-y-2">
                    {order_information.items.map((item, index) => (
                        <li key={index} className="flex justify-between">
                            <span>
                                {item.description} (x{item.quantity})
                            </span>
                            <span className="text-gray-500">
                                {item.product_type}
                            </span>
                        </li>
                    ))}
                </ul>
                <p className="mt-4">
                    <span className="font-medium">Weight:</span>{' '}
                    {order_information.weight} kg
                </p>
                <p>
                    <span className="font-medium">Shipping Mode:</span>{' '}
                    {order_information.shipping_mode}
                </p>
                <p>
                    <span className="font-medium">Instructions:</span>{' '}
                    {order_information.instructions}
                </p>
            </div>

            {/* Tracking History */}
            <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Tracking History
                </h3>
                <div className="space-y-4">
                    {tracking_history.map((history, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-4"
                        >
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <div>
                                <p className="text-gray-700">
                                    {history.status}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    {history.date_time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrackingShippingOrder
