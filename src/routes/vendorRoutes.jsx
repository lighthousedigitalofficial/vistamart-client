import ShopViewPage from '../_root/pages/ShopViewPage'
import VendorRegisterPage from '../_root/pages/VendorRegisterPage'
import VendorsPage from '../_root/pages/VendorsPage'

const vendorRoutes = [
    {
        path: 'auth/vendor/registration',
        element: <VendorRegisterPage />,
    },
    {
        path: 'vendors',
        element: <VendorsPage />,
    },
    {
        path: 'shop-view/:slug',
        element: <ShopViewPage />,
    },
]

export default vendorRoutes
