// import { useGetMyOrdersQuery } from '../../redux/slices/ordersApiSlice'
// import { useSelector } from 'react-redux'
// import Loader from '../Loader'
// import { IoEyeSharp } from 'react-icons/io5'
// import { Link } from 'react-router-dom'


// const MyOrders = () => {
//     const { user } = useSelector((state) => state.auth.userInfo)

//     const { data: orders, isLoading } = useGetMyOrdersQuery(user._id, {
//         skip: !user._id,
//     })

//     const formatDate = (dateString) => {
//         const options = {
//             year: 'numeric',
//             month: 'short',
//             day: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit',
//             hour12: true,
//         }
//         return new Date(dateString).toLocaleString('en-US', options)
//     }

//     return isLoading ? (
//         <Loader />
//     ) : orders ? (
//         <div className="rounded-lg p-4 md:p-8 bg-white">
//             <h1 className="text-sm md:text-lg lg:text-xl font-bold mb-4">
//                 My Orders
//             </h1>
//             {orders?.doc && orders?.doc?.length ? (
//                 <div className="rounded-lg shadow-lg">
//                     <table className="min-w-full border border-gray-200 table-auto">
//                         <thead>
//                             <tr>
//                                 <th className="px-2 md:px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider rounded-tl-lg">
//                                     Order Id
//                                 </th>
//                                 <th className="px-2 md:px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">
//                                     Order Date
//                                 </th>
//                                 <th className="px-2 md:px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">
//                                     Status
//                                 </th>
//                                 <th className="px-2 md:px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-center text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">
//                                     Total
//                                 </th>
//                                 <th className="px-2 md:px-4 py-2 border-b-2 border-gray-200 bg-gray-100 rounded-tr-lg">
//                                     Action
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {orders.doc.map((order) => (
//                                 <tr
//                                     key={order._id}
//                                     className="border-b border-gray-200 text-left sm:text-left"
//                                 >
//                                     <td className="px-2 md:px-4 py-2 bg-white text-xs md:text-sm border border-gray-200 rounded-l-lg">
//                                         <div className="flex items-center">
//                                             <div className="ml-2">
//                                                 <p className="text-gray-900 whitespace-no-wrap text-xs md:text-sm">
//                                                     {order._id}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className="px-2 md:px-4 py-2 bg-white text-xs md:text-sm border border-gray-200">
//                                         <span className="relative inline-block font-semibold leading-tight text-xs md:text-sm">
//                                             <span className="relative">
//                                                 {formatDate(order.createdAt)}
//                                             </span>
//                                         </span>
//                                     </td>
//                                     <td className="px-2 md:px-4 py-2 bg-white text-xs md:text-sm border border-gray-200">
//                                         <span className="relative inline-block font-semibold text-green-900 leading-tight text-xs md:text-sm">
//                                             <span className="relative">
//                                                 {order.orderStatus}
//                                             </span>
//                                         </span>
//                                     </td>
//                                     <td className="px-2 md:px-4 py-2 bg-white text-xs md:text-sm border border-gray-200">
//                                         <p className="text-gray-900 whitespace-no-wrap text-xs md:text-sm">
//                                             $
//                                             {order.totalAmount
//                                                 ? order.totalAmount.toFixed(2)
//                                                 : '0.00'}
//                                         </p>
//                                     </td>
//                                     <td className="px-2 md:px-4 py-2 bg-white text-xs md:text-sm flex justify-center items-center">
//                                         <Link
//                                             to={`/profile/order-view/${order._id}`}
//                                             className="text-blue-600 hover:text-blue-900 border-none cursor-pointer"
//                                         >
//                                             <IoEyeSharp />
//                                         </Link>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             ) : (
//                 <p>No orders found!</p>
//             )}
//         </div>
//     ) : (
//         <p>Something went wrong.</p>
//     )
// }

// export default MyOrders

// OrderPage.jsx

import OrderCard from "./subcomponenets/OrderCard";
import img from "../../assets/brands/green-good.png";
import img1 from "../../assets/brands/i-logo.png";
import img2 from "../../assets/brands/infine.png";
 
const OrderPage = () => {
  // Sample order data (this can come from an API)
  const orders=[
    {
      img: img, // Placeholder image URL
      orderId: 'ORD123456',
      items: 3,
      date: '2023-10-01T10:30:00',
      status: 'Shipped',
      total: 109.97,
    },
    {
      img: img1, // Placeholder image URL
      orderId: 'ORD123457',
      items: 2,
      date: '2023-10-02T14:45:00',
      status: 'Processing',
      total: 59.99,
    },
    {
      img: img2, // Placeholder image URL
      orderId: 'ORD123458',
      items: 1,
      date: '2023-10-03T09:15:00',
      status: 'Delivered',
      total: 29.99,
    },
  ]

  const handleViewOrder = (Id) => {
    // alert(`Viewing details for order ${orderId}`);
    navigator(`/profile/order/${Id}`);
  };

  const handleDownloadOrder = (Id) => {
    alert(`Downloading invoice for order ${Id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-semibold mb-5">My Order</h1>

        {/* Order List Header */}
        <div className="border-b-2 bg-green-50 p-2 pb-2 mb-5">
          <div className="grid grid-cols-5 text-center text-gray-600 font-semibold">
            <div className="col-span-2 text-left">Order List</div>
            <div>Status</div>
            <div>Total</div>
            <div>Action</div>
          </div>
        </div>

        {/* Order List */}
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            data={order}
            onView={() => handleViewOrder(order.id)}
            onDownload={() => handleDownloadOrder(order.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
