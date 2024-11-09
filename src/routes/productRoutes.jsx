import BrandsProductsPage from '../_root/pages/BrandsProductsPage'
import CategoryProductsPage from '../_root/pages/CategoryProductsPage'
import FlashDealsPage from '../_root/pages/FlashDealsPage'
import ProductDetailsPage from '../_root/pages/ProductDetailsPage'
import ProductsPage from '../_root/pages/ProductsPage'
import FeatureProducts from '../components/Product/FeatureProducts'

const productRoutes = [
    {
        path: 'products',
        element: <ProductsPage />,
    },
    {
        path: '/products/featured',
        element: <FeatureProducts />,
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
