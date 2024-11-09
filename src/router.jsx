import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './_root/RootLayout'

import HomePage from './_root/pages/HomePage'
import BrandsPage from './_root/pages/BrandsPage'
import FaqPage from './_root/pages/FaqPage'
import ContactUsPage from './_root/pages/ContactUsPage'
import AboutUsPage from './_root/pages/AboutUsPagae'
import CategoriesPage from './_root/pages/CategoriesPage'
import RefundPolicy from './_root/pages/RefundPolicyPage'
import ReturnPolicy from './_root/pages/ReturnPolicyPage'
import CancellationPolicy from './_root/pages/CancellationPolicyPage'
import SearchResultPage from './_root/pages/SearchResulstPage'

// Sperate routes
import productRoutes from './routes/productRoutes'
import vendorRoutes from './routes/vendorRoutes'
import customerRoutes from './routes/customerRoutes'
import profileRoutes from './routes/profileRoutes'
import authRoutes from './routes/authRoutes'

import ScrollToTop from './components/ScrollToTop'
import ServerErrorPage from './_root/pages/ServerErrorPage'
import NotFoundPage from './_root/pages/NotFoundPage'

// import ErrorBoundary from './components/ErrorBoundary'

const router = createBrowserRouter([
    ...authRoutes,
    {
        path: '',
        element: (
            <>
                {/* <ErrorBoundary> */}
                <RootLayout />,
                <ScrollToTop />
                {/* </ErrorBoundary> */}
            </>
        ),
        children: [
            ...productRoutes,
            ...vendorRoutes,
            ...customerRoutes,
            ...profileRoutes,
            {
                path: '',
                element: <HomePage />,
            },

            {
                path: 'brands',
                element: <BrandsPage />,
            },
            {
                path: 'categories',
                element: <CategoriesPage />,
            },
            {
                path: 'about-us',
                element: <AboutUsPage />,
            },
            {
                path: 'contact-us',
                element: <ContactUsPage />,
            },
            {
                path: 'faqs',
                element: <FaqPage />,
            },
            {
                path: '/refund-policy',
                element: <RefundPolicy />,
            },
            {
                path: '/return-policy',
                element: <ReturnPolicy />,
            },
            {
                path: '/cancellation-policy',
                element: <CancellationPolicy />,
            },
            {
                path: '/search',
                element: <SearchResultPage />,
            },
        ],
    },
    {
        path: '/server-error',
        element: <ServerErrorPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
])

export default router
