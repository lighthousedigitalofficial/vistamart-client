import { Suspense, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import StickyIcons from '../components/shared/StcikyIcons'
import Contacts from '../components/shared/Contacts'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

import { validateSession } from '../_auth/api'
import { useSelector } from 'react-redux'
import SessionExpiredModal from './../components/shared/SessionExpiredModal'
import toast from 'react-hot-toast'
import { useCheckHealthQuery } from '../redux/slices/apiHealthSlice'

const RootLayout = () => {
    const [isLoading, setIsLoading] = useState(true)
    const { userInfo } = useSelector((state) => state.auth)

    const navigate = useNavigate()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const { error, isLoading: checkApiHealthLoading } = useCheckHealthQuery()

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
                try {
                    await validateSession(token, setIsModalOpen)
                } catch (error) {
                    setIsModalOpen(true)
                }
            }

            setIsLoading(false)
        }

        checkSession()
    }, [userInfo, userInfo?.accessToken])

    const closeModal = () => {
        setIsModalOpen(false)
        navigate('/customer/auth/sign-in') // Redirect after closing the modal
    }

    return isLoading || checkApiHealthLoading ? (
        <Loader />
    ) : (
        !error && (
            <div>
                <Header />
                <div className="lg:w-[90%] w-full mx-auto md:px-8 px-4">
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
                {isModalOpen && <SessionExpiredModal onClose={closeModal} />}
            </div>
        )
    )
}

export default RootLayout
