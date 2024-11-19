import BrandsProductsPage from '../_root/pages/BrandsProductsPage'
import CategoryProductsPage from '../_root/pages/CategoryProductsPage'
import FeaturedProductsPage from '../_root/pages/FeaturedProductsPage'
import FlashDealsPage from '../_root/pages/FlashDealsPage'
import ProductDetailsPage from '../_root/pages/ProductDetailsPage'
import ProductsPage from '../_root/pages/ProductsPage'

const productRoutes = [
    {
        path: 'products',
        element: <ProductsPage />,
    },
    {
        path: '/products/featured',
        element: <FeaturedProductsPage />,
    },
    {
        path: 'products/:slug',
        element: <ProductDetailsPage />,
    },
    {
        path: 'products/category/:slug',
        element: <CategoryProductsPage />,
    },
    {
        path: 'products/brand/:slug',
        element: <BrandsProductsPage />,
    },
    {
        path: 'flash-deals',
        element: <FlashDealsPage />,
    },
]

export default productRoutes