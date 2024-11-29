import AuthLayout from '../_auth/AuthLayout'
import EmailVerification from '../_auth/Forms/EmailVerification'
import ForgotPassword from '../_auth/Forms/ForgotPassword'
import OtpVerification from '../_auth/Forms/OtpVerification'
import ResetPassword from '../_auth/Forms/ResetPassword'
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
            {
                path: 'forgot-password',
                element: <ForgotPassword />,
            },
            {
                path: 'reset-password/:hash',
                element: <ResetPassword />,
            },
        ],
    },
]

export default authRoutes
