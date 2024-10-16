// OrderDetails.jsx
import { useParams } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

const OrderDetail = () => {
  const { orderId } = useParams(); // Get orderId from URL parameters

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-semibold">Order #{orderId}</h1>
          <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full">Pending</span>
        </div>

        <div className="text-sm text-gray-500 mb-5">16 Oct, 2024 01:10 AM</div>

        <div className="border p-3 rounded-lg shadow-sm mb-5">
          <div className="flex justify-between items-center mb-3">
            <span>Order Verification Code: <span className="text-blue-500">421870</span></span>
            <button className="text-blue-500 hover:text-blue-700">
              <FaDownload className="inline w-5 h-5 mr-1" />
              Download Invoice
            </button>
          </div>
          <div className="grid grid-cols-3 gap-5 text-gray-700">
            <div>
              <h2 className="font-semibold">Payment Info</h2>
              <p>Payment Status: <span className="text-red-500">Unpaid</span></p>
              <p>Payment Method: Cash On Delivery</p>
            </div>
            <div>
              <h2 className="font-semibold">Shipping Address</h2>
              <p>Name: Aqib Ahmed</p>
              <p>Phone: +1**********</p>
              <p>City/Zip: Islamabad, 45710</p>
              <p>Address: Soan Garden</p>
            </div>
            <div>
              <h2 className="font-semibold">Billing Address</h2>
              <p>Name: Aqib Ahmed</p>
              <p>Phone: +1**********</p>
              <p>City/Zip: Islamabad, 45710</p>
              <p>Address: Soan Garden Heights 2</p>
            </div>
          </div>
        </div>

        <div className="border rounded-lg shadow-sm p-5">
          <div className="grid grid-cols-6 text-center font-semibold mb-4">
            <div className="col-span-4 text-left">Order Details</div>
            <div>Qty</div>
            <div>Price</div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Product"
                className="w-12 h-12 rounded-md mr-4"
              />
              <div>
                <p>Table Tennis Bat - Double Fish - 3A-C - 2 Pcs</p>
              </div>
            </div>
            <div className="text-center">1</div>
            <div className="text-right">$987.00</div>
          </div>

          <div className="flex justify-end">
            <div className="w-1/3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$957.39</span>
              </div>
              <div className="flex justify-between">
                <span>Tax fee</span>
                <span>$88.83</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>-$29.61</span>
              </div>
              <div className="flex justify-between">
                <span>Coupon discount</span>
                <span>-$0.00</span>
              </div>
              <div className="flex justify-between font-bold mt-3">
                <span>Total</span>
                <span>$1,046.22</span>
              </div>
              <button className="mt-5 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
