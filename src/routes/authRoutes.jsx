import AuthLayout from '../_auth/AuthLayout'
import EmailVerification from '../_auth/Forms/EmailVerification'
import OtpVerification from '../_auth/Forms/OtpVerification'
import VendorLoginForm from '../_auth/Forms/VendorLoginForm'

const authRoutes = [
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'vendor/login',
                element: <VendorLoginForm />,
            },
            {
                path: 'otp',
                element: <OtpVerification />,
            },
            {
                path: 'email/verification',
                element: <EmailVerification />,
            },
        ],
    },
]

export default authRoutes
