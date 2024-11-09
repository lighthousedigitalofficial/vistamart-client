import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { savePaymentMethod } from '../../redux/slices/cartSlice'
import PaymentMethod from '../../components/Checkout/PaymentMethod'
import useAuth from '../../hooks/useAuth'

const CheckoutPaymentPage = () => {
    const user = useAuth()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/customer/auth/sign-in')
        }
    }, [navigate, user])

    const handleSubmit = (data) => {
        console.log(data)
        dispatch(savePaymentMethod(data.paymentMethod))

        navigate('/checkout/order-summary')
    }

    return (
        <div className="w-full p-4 md:p-4">
            <PaymentMethod onSubmit={handleSubmit} />
        </div>
    )
}

export default CheckoutPaymentPage
