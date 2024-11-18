import { useDispatch, useSelector } from 'react-redux'
import ShippingAddress from '../../components/Checkout/ShippingAddress'
import {
    saveBillingAddress,
    saveShippingAddress,
} from '../../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'

const ShippingAddressPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cart = useSelector((state) => state.cart)
    const user = useAuth()

    useEffect(() => {
        if (!user) {
            navigate('/customer/auth/sign-in')
        } else if (!cart) {
            navigate('/products')
        }
    }, [cart, navigate, user])

    const handleSubmit = (data) => {
        dispatch(saveShippingAddress(data))
        dispatch(saveBillingAddress(data))

        navigate('/checkout/payment-methods')
    }

    return (
        user &&
        cart && (
            <div className="lg:p-8 md:p-6 p-4 md:w-4/5 w-full mx-auto">
                <ShippingAddress
                    onSubmit={handleSubmit}
                    address={cart?.shippingAddress}
                />
            </div>
        )
    )
}

export default ShippingAddressPage
