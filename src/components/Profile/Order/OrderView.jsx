// import { useGetOrderDetailsQuery } from '../../../redux/slices/ordersApiSlice'
// import { useParams } from 'react-router-dom'
// import Loader from '../../Loader'

// const OrderView = () => {
//     // Get the order ID from the URL parameters
//     const { orderId } = useParams()

//     // Use the query to fetch order details with the order ID
//     const {
//         data: orderDetails,
//         error,
//         isLoading,
//     } = useGetOrderDetailsQuery(orderId)

//     // Handle error state
//     if (error) {
//         return (
//             <div className="text-red-600">
//                 Error loading order details: {error.message}
//             </div>
//         )
//     }

//     console.log(orderDetails)

//     return isLoading ? (
//         <Loader />
//     ) : orderDetails && orderDetails?.doc ? (
//         <div className="max-w-2xl mx-auto p-4">
//             <h2 className="text-xl font-semibold mb-2">Customer Details</h2>
//             <table className="min-w-full border border-gray-300 mb-6">
//                 <thead>
//                     <tr className="bg-gray-100">
//                         <th className="border border-gray-300 p-2">Field</th>
//                         <th className="border border-gray-300 p-2">Details</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td className="border border-gray-300 p-2">Name</td>
//                         <td className="border border-gray-300 p-2">
//                             {orderDetails.doc.shippingAddress.name}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td className="border border-gray-300 p-2">Phone</td>
//                         <td className="border border-gray-300 p-2">
//                             {orderDetails.doc.shippingAddress.phoneNumber}
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>

//             <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
//             <table className="min-w-full border border-gray-300 mb-6">
//                 <thead>
//                     <tr className="bg-gray-100">
//                         <th className="border border-gray-300 p-2">Field</th>
//                         <th className="border border-gray-300 p-2">Details</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td className="border border-gray-300 p-2">Address</td>
//                         <td className="border border-gray-300 p-2">
//                             {orderDetails.doc.shippingAddress.address}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td className="border border-gray-300 p-2">City</td>
//                         <td className="border border-gray-300 p-2">
//                             {orderDetails.doc.shippingAddress.city}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td className="border border-gray-300 p-2">State</td>
//                         <td className="border border-gray-300 p-2">
//                             {orderDetails.doc.shippingAddress.state}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td className="border border-gray-300 p-2">Zip Code</td>
//                         <td className="border border-gray-300 p-2">
//                             {orderDetails.doc.shippingAddress.zipCode}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td className="border border-gray-300 p-2">Country</td>
//                         <td className="border border-gray-300 p-2">
//                             {orderDetails.doc.shippingAddress.country}
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>

//             <h2 className="text-xl font-semibold mb-2">Billing Address</h2>
//             <table className="min-w-full border border-gray-300 mb-6">
//                 <thead>
//                     <tr className="bg-gray-100">
//                         <th className="border border-gray-300 p-2">Field</th>
//                         <th className="border border-gray-300 p-2">Details</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td className="border border-gray-300 p-2">Name</td>
//                         <td className="border border-gray-300 p-2">
//                             {orderDetails.doc.billingAddress.name}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td className="border border-gray-300 p-2">Address</td>
//                         <td className="border border-gray-300 p-2">
//                             {orderDetails.doc.billingAddress.address}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td className="border border-gray-300 p-2">City</td>
//                         <td className="border border-gray-300 p-2">
//                             {orderDetails.doc.billingAddress.city}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td className="border border-gray-300 p-2">State</td>
//                         <td className="border border-gray-300 p-2">
//                             {orderDetails.doc.billingAddress.state}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td className="border border-gray-300 p-2">Zip Code</td>
//                         <td className="border border-gray-300 p-2">
//                             {orderDetails.doc.billingAddress.zipCode}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td className="border border-gray-300 p-2">Country</td>
//                         <td className="border border-gray-300 p-2">
//                             {orderDetails.doc.billingAddress.country}
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>

//             <h2 className="text-xl font-semibold mb-2">Order Information</h2>
//             <table className="min-w-full border border-gray-300 mb-6">
//                 <thead>
//                     <tr className="bg-gray-100">
//                         <th className="border border-gray-300 p-2">Field</th>
//                         <th className="border border-gray-300 p-2">Details</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td className="border border-gray-300 p-2">
//                             Order Status
//                         </td>
//                         <td className="border border-gray-300 p-2">
//                             {orderDetails.doc.status}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td className="border border-gray-300 p-2">
//                             Total Amount
//                         </td>
//                         <td className="border border-gray-300 p-2">
//                             ${orderDetails.doc.totalAmount?.toFixed(2)}
//                         </td>
//                     </tr>
//                     <tr>
//                         <td className="border border-gray-300 p-2">
//                             Payment Method
//                         </td>
//                         <td className="border border-gray-300 p-2">
//                             {orderDetails.doc.paymentMethod}
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>

//             <h2 className="text-xl font-semibold mb-2">Products</h2>
//             <table className="min-w-full border border-gray-300 mb-6">
//                 <thead>
//                     <tr className="bg-gray-100">
//                         <th className="border border-gray-300 p-2">
//                             Product Name
//                         </th>
//                         <th className="border border-gray-300 p-2">Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {orderDetails.doc.products?.map((product) => (
//                         <tr key={product._id}>
//                             <td className="border border-gray-300 p-2">
//                                 {product.name}
//                             </td>
//                             <td className="border border-gray-300 p-2">
//                                 ${product.price?.toFixed(2)}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <h2 className="text-xl font-semibold mb-2">Vendors</h2>
//             <table className="min-w-full border border-gray-300 mb-6">
//                 <thead>
//                     <tr className="bg-gray-100">
//                         <th className="border border-gray-300 p-2">
//                             Vendor Name
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {/* <td className="border border-gray-300 p-2">
//                         {orderDetails.vendor.firstName}
//                     </td> */}
//                 </tbody>
//             </table>
//         </div>
//     ) : (
//         <p>Order Details not found!</p>
//     )
// }

// export default OrderView





import { useGetOrderDetailsQuery } from '../../../redux/slices/ordersApiSlice';
import { useParams } from 'react-router-dom';
import Loader from '../../Loader';

const OrderView = () => {
    // Get the order ID from the URL parameters
    const { orderId } = useParams();
    // Use the query to fetch order details with the order ID
    const {
        data: orderDetails,
        error,
        isLoading,
    } = useGetOrderDetailsQuery(orderId);

    // Handle error state
    if (error) {
        return (
            <div className="text-red-600">
                Error loading order details: {error.message}
            </div>
        );
    }

    console.log(orderDetails);

    return isLoading ? (
        <Loader />
    ) : orderDetails && orderDetails?.doc ? (
        <div className="bg-[#F9F9FB] w-full px-4 py-8">
            <div className="flex items-center gap-2">
                
                <h1 className="text-xl font-bold">Order Details</h1>
            </div>
            <br />
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
                <div className="col-span-1 lg:col-span-4 bg-white rounded h-full border-gray-400 hover:shadow-md p-4">
                    <h2 className="text-[0.7rem] md:text-[0.9rem] text-wrap md:text-nowrap font-bold pb-5">
                        Order ID #{orderDetails.doc.orderId}
                    </h2>
                    <p className='text-sm'>{new Date(orderDetails.doc.createdAt).toLocaleString()}</p>
                    <div className="text-end t pt-2">
                        <h1 className='text-sm'>
                            Status :
                            <span className={`bg-secondary-500 text-sm font-bold p-1 rounded border text-primary-500`}>
                                {orderDetails.doc.status}
                            </span>
                        </h1>
                        <h1 className="pt-3 text-sm">
                            Payment Method :
                            <span className="font-bold text-sm text-primary-500">{orderDetails.doc.paymentMethod}</span>
                        </h1>
                        <h1 className="pt-3 text-sm">
                            Total Amount :
                            <span className="font-bold text-sm text-primary-500">${orderDetails.doc.totalAmount?.toFixed(2)}</span>
                        </h1>
                        
                        <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-secondary-500 text-gray-500">
                      <th className="px-4 py-2 text-center font-semibold text-sm whitespace-nowrap">
                        SL
                      </th>
                      <th className="px-4 py-2 text-center font-semibold text-sm whitespace-nowrap">
                        Item Details
                      </th>
                      <th className="px-4 py-2 text-center font-semibold text-sm whitespace-nowrap">
                        Item Price
                      </th>
                      <th className="px-4 py-2 text-center font-semibold text-sm whitespace-nowrap">
                        Tax
                      </th>
                      <th className="px-4 py-2 text-center font-semibold text-sm whitespace-nowrap">
                        Item Discount
                      </th>
                      <th className="px-4 py-2 text-center font-bold text-sm whitespace-nowrap">
                        Total Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderDetails.doc && orderDetails.doc?.length > 0 ? (
                      orderDetails.doc?.map((item, index) => (
                        <tr className="hover:bg-gray-100" key={item?._id}>
                          <td className="px-4 py-2 text-center">{index + 1}</td>
                          <td className="px-4 py-2 w-full">
                            <div className="flex items-center whitespace-nowrap">
                              <img
                                src={
                                  item?.orderDetails.doc.thumbnail
                                    ? `${apiConfig.bucket}/${item.orderDetails.doc.thumbnail}`
                                    : fallbackImage
                                }
                                alt={item?.orderDetails.doc.name || "Product Image"}
                                className="w-10 h-10 object-cover rounded mr-3"
                                onError={(e) => (e.target.src = fallbackImage)} // Fallback image if load fails
                              />

                              <div>
                                <div>{item?.orderDetails.doc.name}</div>
                                <div>Qty: {item?.orderDetails.doc.quantity}</div>
                                <div>
                                  Unit price: PKR {item?.orderDetails.doc.price} (Tax:{" "}
                                  {item?.orderDetails.doc.taxAmount}%)
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-2 text-center">
                            PKR {item?.orderDetails.doc.price}
                          </td>
                          <td className="px-4 py-2 text-center">
                            PKR {item?.orderDetails.doc.taxAmount}
                          </td>
                          <td className="px-4 py-2 text-center">
                            PKR {item?.orderDetails.doc.discountAmount}
                          </td>
                          <td className="px-4 py-2 text-center">
                            PKR {item?.orderDetails.doc.price + item?.orderDetails.doc.taxAmount}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center py-4">
                          No products available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

                    </div>
                    <h2 className="text-base font-semibold mb-2">Products</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 mb-6">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-300 p-2 text-sm">Product Name</th>
                                    <th className="border border-gray-300 p-2 text-sm">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderDetails.doc.products?.map((product) => (
                                    <tr key={product._id}>
                                        <td className="border border-gray-300 p-2 text-sm">
                                            {product.name}
                                        </td>
                                        <td className="border border-gray-300 p-2 text-sm">
                                            ${product.price?.toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4">
                <div className="flex justify-between border-t pt-2 text-sm">
                  <span>Item price</span>
                  <span>PKR {orderDetails.doc.totalAmount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Item Discount</span>
                  <span>- PKR 0.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Sub Total</span>
                  <span>PKR {orderDetails.doc.totalAmount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Coupon discount</span>
                  <span>- PKR 0.00</span>
                </div>
                {/* <div className="flex justify-between">
                  <span>VAT/TAX</span>
                   <span>${order.vatTax.toFixed(2)}</span>
                </div> */}
                {/* <div className="flex justify-between">
                  <span>Delivery Fee</span>
                   <span>${order.deliveryFee.toFixed(2)}</span> 
                </div> */}
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>Total</span>
                  <span>PKR {orderDetails.doc.totalAmount}</span>
                </div>
              </div>
                </div>
                <div className="col-span-1 lg:col-span-2">
                    <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4">
                        <h2 className="text-base font-semibold text-start">Customer Information</h2>
                        <div className='flex gap-4'>
                        <h3 className="text-sm">Name:</h3>
                        <p className="text-sm font-medium">{orderDetails.doc.customer.firstName}</p>
                        </div>
                        <div className='flex gap-4'>
                        <h3 className="text-sm">Phone:</h3>
                        <p className="text-gray-500 text-sm">{orderDetails.doc.customer.phoneNumber}</p>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4 mt-5 ">
                        <h1 className='text-base text-start font-bold'>Shipping Address</h1>
                        <table className="min-w-full  mb-6">
               
                <tbody>
                    <tr>
                        <td className="text-sm p-2">Address:</td>
                        <td className="text-sm p-2">
                            {orderDetails.doc.shippingAddress.address}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-sm p-2">City:</td>
                        <td className="text-sm p-2">
                            {orderDetails.doc.shippingAddress.city}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-sm p-2">State:</td>
                        <td className="text-sm p-2">
                            {orderDetails.doc.shippingAddress.state}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-sm p-2">Zip Code</td>
                        <td className="text-sm p-2">
                            {orderDetails.doc.shippingAddress.zipCode}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-sm p-2">Country</td>
                        <td className="text-sm p-2">
                            {orderDetails.doc.shippingAddress.country}
                        </td>
                    </tr>
                </tbody>
            </table>

                   
                    </div>
                    <div className="px-4 py-3 bg-white rounded-xl shadow-md space-y-4 mt-5">
                        <h2 className="text-base font-semibold text-start">Billing Address</h2>
                        <tbody>
                     <tr>
                         <td className="text-sm p-2">Name:</td>
                         <td className=" text-sm p-2">
                             {orderDetails.doc.billingAddress.name}
                         </td>
                     </tr>
                     <tr>
                         <td className="text-sm p-2">Address:</td>
                         <td className="text-sm p-2">
                             {orderDetails.doc.billingAddress.address}
                         </td>
                     </tr>
                     <tr>
                         <td className="text-sm p-2">City:</td>
                         <td className="text-sm p-2">
                            {orderDetails.doc.billingAddress.city}
                         </td>
                     </tr>
                     <tr>
                         <td className="text-sm p-2">State:</td>
                         <td className="text-sm p-2">
                             {orderDetails.doc.billingAddress.state}
                         </td>
                     </tr>
                     <tr>
                         <td className="text-sm p-2">Zip Code:</td>
                         <td className="text-sm p-2">
                             {orderDetails.doc.billingAddress.zipCode}
                         </td>
                     </tr>
                     <tr>
                         <td className="text-sm p-2">Country:</td>
                         <td className="text-sm p-2">
                            {orderDetails.doc.billingAddress.country}
                        </td>
                     </tr>
                 </tbody>
                    </div>
                    <div className='bg-white shadow-md rounded-xl space-y-4 mt-5 px-4 py-3'>
                    <h2 className="text-base font-semibold mb-2">Vendor Information</h2>
            <table className="min-w-full mb-6">
                <thead>
                    <tr className="">
                        <th className=" text-start p-2">
                            Vendor Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* <td className="border border-gray-300 p-2">
                        {orderDetails.vendor.firstName}
                    </td> */}
                </tbody>
            </table>
            </div>
                </div>
            </div>
        </div>
    ) : (
        <p>Order Details not found!</p>
    );
};

export default OrderView;