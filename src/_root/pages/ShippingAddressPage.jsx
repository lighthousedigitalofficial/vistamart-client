import { useDispatch, useSelector } from 'react-redux'
import ShippingAddress from '../../components/Checkout/ShippingAddress'
import {
    saveBillingAddress,
    saveShippingAddress,
} from '../../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { z } from 'zod'

const shippingAddressSchema = z.object({
    name: z
        .string()
        .min(1, 'Full Name is required')
        .max(100, 'Full Name cannot exceed 100 characters')
        .regex(
            /^[a-zA-Z\s]+$/,
            'Name must not contain numbers or special characters'
        ),
    phoneNumber: z
        .string()
        .min(10, 'Phone Number must be at least 10 digits')
        .max(20, 'Phone Number cannot exceed 15 digits'),
    country: z
        .string()
        .min(1, 'Country is required')
        .max(50, 'Country cannot exceed 50 characters')
        .regex(
            /^[a-zA-Z\s]+$/,
            'Country must not contain numbers or special characters'
        ),
    city: z
        .string()
        .min(1, 'City is required')
        .max(50, 'City cannot exceed 50 characters')
        .regex(
            /^[a-zA-Z\s]+$/,
            'City must not contain numbers or special characters'
        ),
    state: z
        .string()
        .min(1, 'State is required')
        .max(50, 'State cannot exceed 50 characters')
        .regex(
            /^[a-zA-Z\s]+$/,
            'State must not contain numbers or special characters'
        ),
    zipCode: z
        .string()
        .min(5, 'Zip Code must be at least 5 digits')
        .max(10, 'Zip Code cannot exceed 10 characters')
        .regex(/^\d+$/, 'Zip Code must contain only digits'),
    address: z
        .string()
        .min(1, 'Address is required')
        .max(200, 'Address cannot exceed 200 characters'),
})

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
                    shippingAddressSchema={shippingAddressSchema}
                />
            </div>
        )
    )
}

export default ShippingAddressPage
