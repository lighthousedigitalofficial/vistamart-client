import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useCustomerOTPVerificationMutation } from '../../redux/slices/customersApiSlice'
import toast from 'react-hot-toast'

const EmailVerification = () => {
    const [otp, setOtp] = useState(new Array(6).fill(''))

    const navigate = useNavigate()
    const [searchParmas] = useSearchParams()
    const email = searchParmas.get('email')

    const [customerOTPVerification, { isLoading }] =
        useCustomerOTPVerificationMutation()

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

        // Focus on next input
        if (element.nextSibling) {
            element.nextSibling.focus()
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Entered OTP: ', otp.join(''))
        try {
            const token = otp.join('')

            const response = await customerOTPVerification({
                token,
                email,
            }).unwrap()
            toast.success(response?.message || 'OTP is correct.')
            navigate('/customer/auth/sign-in')
        } catch (error) {
            console.log(error)
            toast.error(error.data?.message || 'OPT not valid!')
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <div className="text-center">
                    {/* Email icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-12 w-12 text-green-500 mb-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 12l4-4m0 0l-4-4m4 4H4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8m16 0L12 12M4 8l8 4"
                        />
                    </svg>

                    <h2 className="text-2xl font-semibold mb-4">
                        Please check your email
                    </h2>
                    <p className="text-gray-500 mb-6">
                        We have sent a code to <strong>{email}</strong>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex justify-center space-x-4">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 text-2xl font-bold text-green-600 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-green-500"
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                            />
                        ))}
                    </div>

                    <div className="text-center text-sm mt-4">
                        Did not get the code?{' '}
                        <a href="#" className="text-green-500 font-semibold">
                            Click to resend.
                        </a>
                    </div>

                    <div className="w-full mt-6">
                        <button
                            type="submit"
                            className=" w-full py-3 px-6 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
                        >
                            {isLoading ? 'OTP Verifing...' : ' Verify'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmailVerification
