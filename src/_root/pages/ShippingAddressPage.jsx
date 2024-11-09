import { useDispatch, useSelector } from 'react-redux'
import ShippingAddress from '../../components/Checkout/ShippingAddress'
import {
    saveBillingAddress,
    saveShippingAddress,
} from '../../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'

const ShippingAddressPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cart = useSelector((state) => state.cart)

    console.log(cart)

    const handleSubmit = (data) => {
        dispatch(saveShippingAddress(data))
        dispatch(saveBillingAddress(data))

        navigate('/checkout/payment-methods')
    }

    return (
        <div className="lg:p-8 md:p-6 p-4 md:w-4/5 w-full mx-auto">
            <ShippingAddress
                onSubmit={handleSubmit}
                address={cart?.shippingAddress}
            />
        </div>
    )
}

export default ShippingAddressPage
