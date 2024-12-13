import { Suspense, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet-async'

import Header from '../components/Header'
import StickyIcons from '../components/shared/StcikyIcons'
import Contacts from '../components/shared/Contacts'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import SessionExpiredModal from './../components/shared/SessionExpiredModal'

import { useCheckHealthQuery } from '../redux/slices/apiHealthSlice'
import { logout } from '../redux/slices/authSlice'
import { useCustomerLogoutMutation } from '../redux/slices/customersApiSlice'

import { validateSession } from '../api/validateService'

const RootLayout = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const { userInfo } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { error, isLoading: checkApiHealthLoading } = useCheckHealthQuery()
    const [customerLogout] = useCustomerLogoutMutation()

    useEffect(() => {
        if (error) {
            toast.error('Server is not responding!')
            navigate('/server-error')
        }
    }, [error, navigate])

    useEffect(() => {
        const checkSession = async () => {
            const token = userInfo?.accessToken

            if (token) {
                await validateSession(token, setIsModalOpen)
            }

            setIsLoading(false)
        }

        checkSession()
    }, [userInfo, userInfo?.accessToken])

    const logoutUser = async () => {
        // Get accessToken from localStorage
        const userInfo = localStorage.getItem('userInfo')
        const user = JSON.parse(userInfo)

        dispatch(logout())
        await customerLogout(user?.accessToken)

        window.location.reload()
    }

    const closeModal = () => {
        setIsModalOpen(false)
        logoutUser()
        navigate('/customer/auth/sign-in')
    }

    return isLoading || checkApiHealthLoading ? (
        <Loader />
    ) : (
        !error && (
            <>
                {/* Global Helmet for the entire app */}
                <Helmet>
                    <title>Vista Mart - Best Online Shopping Experience</title>
                    <meta
                        name="description"
                        content="Shop at Vista Mart for a wide range of products with the best deals!"
                    />
                    <meta
                        name="keywords"
                        content="shopping, ecommerce, online store, best deals"
                    />
                    <meta name="author" content="Vista Mart" />
                    <link rel="canonical" href="https://vistamart.biz/" />
                </Helmet>
                <div className="bg-[#f3f5f9]">
                    <Header />
                    <div className="lg:w-[95%] w-full mx-auto md:px-8 px-4 ">
                        <Suspense
                            fallback={
                                <div>
                                    <Loader />
                                </div>
                            }
                        >
                            <Outlet />
                        </Suspense>
                    </div>
                    <StickyIcons />
                    <Contacts />
                    <Footer />
                    {isModalOpen && (
                        <SessionExpiredModal onClose={closeModal} />
                    )}
                </div>
            </>
        )
    )
}

export default RootLayout
