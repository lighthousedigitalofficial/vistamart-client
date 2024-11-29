import SignInForm from '../_auth/Forms/SignInForm'
import SignUpForm from '../_auth/Forms/SignUpForm'
import CartPage from '../_root/pages/CartPage'
import CheckoutPage from '../_root/pages/CheckoutPage'
import CheckoutPaymentPage from '../_root/pages/CheckoutPaymentPage'
import OrderConfirmationPage from '../_root/pages/OrderConfirmationPage'
import OrderSummaryPage from '../_root/pages/OrderSummaryPage'
import ShippingAddressPage from '../_root/pages/ShippingAddressPage'
import CardPaymentStatus from '../components/Checkout/CaridCardPaymentStatus'
import JazzCashCard from '../components/Checkout/JazzCashCard'

const customerRoutes = [
    {
        path: 'customer/auth/sign-up',
        element: <SignUpForm />,
    },
    {
        path: 'customer/auth/sign-in',
        element: <SignInForm />,
    },
    {
        path: 'cart',
        element: <CartPage />,
    },
    {
        path: 'checkout',
        element: <CheckoutPage />,
    },
    {
        path: 'checkout/shipping-address',
        element: <ShippingAddressPage />,
    },
    {
        path: 'checkout/payment-methods',
        element: <CheckoutPaymentPage />,
    },
    {
        path: 'checkout/order-summary',
        element: <OrderSummaryPage />,
    },
    {
        path: 'order-confirmation',
        element: <OrderConfirmationPage />,
    },

    {
        path: 'jazzcash/card',
        element: <JazzCashCard />,
    },
    {
        path: 'checkout/card',
        element: <CardPaymentStatus />,
    },
]

export default customerRoutes
