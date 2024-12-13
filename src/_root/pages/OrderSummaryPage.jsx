import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { FaTruck, FaShieldAlt, FaUndo, FaCheckCircle } from 'react-icons/fa'
import { MdOutlineCelebration } from 'react-icons/md'
import { useEffect } from 'react'
import { useCreateOrderMutation } from '../../redux/slices/ordersApiSlice'
import toast from 'react-hot-toast'
import { clearCartItems } from '../../redux/slices/cartSlice'
import { formatPrice } from '../../utils/helpers'
import useAuth from './../../hooks/useAuth'

const OrderSummaryPage = () => {
    const cart = useSelector((state) => state.cart)

    const user = useAuth()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/customer/auth/sign-in')
        }
    }, [navigate, user])

    useEffect(() => {
        if (!cart?.paymentMethod || !cart) {
            navigate('/checkout/payment-methods')
        }
    }, [cart, navigate])

    const [createOrder, { isLoading }] = useCreateOrderMutation()

    const handleOrderSubmit = async () => {
        try {
            // Group products by vendor
            const groupedOrders = cart?.cartItems.reduce((acc, item) => {
                // Safeguard against undefined `product`
                if (!item.userId) {
                    toast.error('Missing product or userId for item:', item)
                    return acc // Skip this item
                }

                // Assuming `userId` represents the vendor
                const vendorId = item.userId
                if (!acc[vendorId]) {
                    acc[vendorId] = {
                        vendor: vendorId,
                        products: [],
                    }
                }

                acc[vendorId].products.push({
                    product: item._id,
                    price: item.price,
                    discountAmount: item.discountAmount || 0, // Ensure discountAmount is present
                    shippingCost: item.shippingCost || 0, // Ensure shippingCost is present
                    taxAmount: item.taxIncluded ? item.taxAmount * item.qty : 0, // Ensure taxAmount is present
                    quantity: item.qty,
                })
                return acc
            }, {})

            const orders = Object.keys(groupedOrders).map((vendorId) => {
                const vendorOrder = groupedOrders[vendorId]

                // Calculate all totals in one pass
                const totals = vendorOrder.products.reduce(
                    (acc, product) => {
                        acc.totalAmount +=
                            product.price * product.quantity -
                            (product.discountAmount || 0) +
                            ((product.taxIncluded && product.taxAmount) || 0) +
                            product.shippingCost
                        acc.totalDiscount += product.discountAmount || 0
                        acc.totalShippingCost += product.shippingCost || 0
                        acc.totalQty += product.quantity
                        acc.totalTaxAmount +=
                            (product.taxIncluded && product.taxAmount) || 0 // Ensure taxAmount is handled even if missing

                        return acc
                    },
                    {
                        totalAmount: 0,
                        totalDiscount: 0,
                        totalShippingCost: 0,
                        totalQty: 0,
                        totalTaxAmount: 0,
                    }
                )

                return {
                    vendor: vendorId,
                    products: vendorOrder.products,
                    customerId: user?._id,
                    shippingAddress: cart?.shippingAddress,
                    billingAddress: cart?.billingAddress,
                    paymentMethod: cart?.paymentMethod,
                    totalAmount: totals.totalAmount,
                    totalDiscount: totals.totalDiscount,
                    totalShippingCost: totals.totalShippingCost,
                    totalTaxAmount: totals.totalTaxAmount,
                    totalQty: totals.totalQty,
                    paymentStatus: cart?.paymentStatus,
                }
            })

            if (orders.length !== 0) {
                // Submit each order separately
                for (const order of orders) {
                    const res = await createOrder(order).unwrap()
                    toast.success(
                        `Order created successfully: ${res.doc.orderId}`
                    )
                }

                // Clear cart and navigate to confirmation
                dispatch(clearCartItems())
                // navigate('/order-confirmation')
                window.location.href = '/order-confirmation'
            }
        } catch (err) {
            console.error(err)
            toast.error(err?.data?.message || 'Something went wrong')
        }
    }

    return (
        <div className=" mx-auto w-full p-4">
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Order Summary
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                        Review your order details and place your order for fast
                        and secure checkout.
                    </p>
                </div>
                <section className="flex flex-col justify-around  md:flex-row gap-8 ">
                    <div className="w-1/2">
                        {/* Savings Info */}
                        {cart?.totalDiscount > 0 && (
                            <div className="bg-green-50 text-green-500 p-4 rounded-lg mb-4">
                                <h2 className="text-lg font-semibold flex items-center justify-center gap-2">
                                    <MdOutlineCelebration className="w-6 h-6" />
                                    You saved
                                    <p>
                                        <span className="text-xs">Rs.</span>
                                        {formatPrice(cart?.totalDiscount)}!
                                    </p>
                                </h2>
                            </div>
                        )}

                        {/* Pricing Details */}
                        <div className="space-y-4 mb-10">
                            <div className="text-gray-800 font-semibold">
                                <div className="order__price-box">
                                    <span>Sub Total</span>
                                    <span>
                                        <span className="text-xs">Rs.</span>
                                        {formatPrice(cart?.subTotal || 0)}
                                    </span>
                                </div>
                                <div className="order__price-box">
                                    <span>Tax</span>
                                    <span>
                                        <span className="text-xs">Rs.</span>
                                        {formatPrice(cart?.taxPrice || 0)}
                                    </span>
                                </div>
                                <div className="order__price-box">
                                    <span>Shipping</span>
                                    <span>
                                        <span className="text-xs">Rs.</span>
                                        {formatPrice(
                                            cart?.totalShippingPrice || 0
                                        )}
                                    </span>
                                </div>
                                <div className="order__price-box">
                                    <span>Discount</span>
                                    <span>
                                        - <span className="text-xs">Rs.</span>
                                        {formatPrice(cart?.totalDiscount || 0)}
                                    </span>
                                </div>
                                <div className="order__price-box">
                                    <span>Payment Method</span>
                                    <span className="">
                                        {cart.paymentMethod ||
                                            'cash_on_delivery'}
                                    </span>
                                </div>
                                <div className="order__price-box">
                                    <span>Payment Status</span>
                                    <span
                                        className={`${
                                            cart.paymentStatus === 'paid'
                                                ? 'text-green-500'
                                                : 'text-red-500'
                                        }`}
                                    >
                                        {cart.paymentStatus || 'unpaid'}
                                    </span>
                                </div>

                                <div className="flex justify-between py-3 border-t text-primary-500 border-gray-300">
                                    <span className="text-xl font-bold ">
                                        Total
                                    </span>
                                    <span className="text-xl font-bold">
                                        <span className="text-xs">Rs.</span>
                                        {formatPrice(cart?.totalPrice || 0)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-grow flex flex-col justify-around py-4 ">
                        {/* Trust Signals */}
                        <div className="grid grid-cols-2 justify-between items-center gap-4  py-4 text-center">
                            <div className="flex flex-col items-center justify-around">
                                <FaTruck className="text-3xl text-blue-500 mb-2" />
                                <span className="text-base text-green-400">
                                    Fast Delivery Nationwide
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-around">
                                <FaShieldAlt className="text-3xl text-primary-500 mb-2" />
                                <span className="text-base text-green-400">
                                    100% Safe Payment
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-around">
                                <FaUndo className="text-3xl text-orange-500 mb-2" />
                                <span className="text-base text-green-400">
                                    7 Days Return Policy
                                </span>
                            </div>
                            <div className="flex flex-col items-center justify-around">
                                <FaCheckCircle className="text-3xl text-indigo-500 mb-2" />
                                <span className="text-base text-green-400">
                                    100% Authentic Products
                                </span>
                            </div>
                        </div>

                        {/* Action Button and Links */}
                        <div className="mt-6 flex flex-col items-center gap-3">
                            <button
                                onClick={handleOrderSubmit}
                                type="submit"
                                className={`md:w-1/2 w-full py-3 text-lg font-semibold rounded-lg transition-all duration-300
                                 bg-primary-500 hover:bg-primary-400 text-white`}
                            >
                                {isLoading ? 'Placing order...' : 'Place Order'}
                            </button>

                            <Link
                                to="/products"
                                className="text-primary-400 text-sm transition duration-300 hover:text-primary-600"
                            >
                                <span className="inline-block">&lt;</span>{' '}
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default OrderSummaryPage
