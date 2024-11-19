import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { savePaymentMethod } from '../../redux/slices/cartSlice'
import PaymentMethod from '../../components/Checkout/PaymentMethod'
import useAuth from '../../hooks/useAuth'
import toast from 'react-hot-toast'
import axios from 'axios'
import keys from '../../config/keys'

const CheckoutPaymentPage = () => {
    const user = useAuth()
    const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [paymentMethod, setPaymentMethod] = useState(null)

    const [formData, setFormData] = useState({
        pp_Version: '1.1',
        pp_TxnType: 'MPAY',
        pp_MerchantID: 'MC133533',
        pp_Password: '8a03t83etu',
        pp_Amount: '10000',
        pp_Language: 'EN',
        pp_TxnRefNo: 'T20241106115800',
        pp_TxnDateTime: '20241106115809',
        pp_TxnExpiryDateTime: '20241107115809',
        pp_BillReference: 'billRef',
        pp_Description: 'Description of transaction',
        pp_ReturnURL:
            'https://www.api2.vistamart.biz/api/v1/transaction/payment/jazzcash/return',
        pp_TxnCurrency: 'PKR',
        pp_SecureHash: '',
        salt: '94ub3u9a2y',
    })

    useEffect(() => {
        if (!user) {
            navigate('/customer/auth/sign-in')
        } else if (!cart) {
            navigate('/products')
        }
    }, [cart, navigate, user])

    const placeOrderSubmit = () => {
        if (paymentMethod) {
            dispatch(savePaymentMethod(paymentMethod))
            navigate('/checkout/order-summary')
        }
    }

    // const handleOnlineCard = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const { data } = await axios.post(
    //             `${keys.BASE_URL}/api/v1/transaction/payment/generate-hash`,
    //             formData
    //         )

    //         if (data.hash) {
    //             setFormData({ ...formData, pp_SecureHash: data.hash })
    //             console.log(
    //                 `https://sandbox.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/?` +
    //                     formData
    //             )
    //             document.forms['jazzcashForm'].submit()
    //         }
    //     } catch (error) {
    //         console.error('Error generating hash:', error)
    //     }
    // }
    return (
        user &&
        cart && (
            <div className="w-full p-4 md:p-4">
                <PaymentMethod
                    onSubmit={placeOrderSubmit}
                    setPaymentMethod={setPaymentMethod}
                />
            </div>
        )
    )
}

export default CheckoutPaymentPage