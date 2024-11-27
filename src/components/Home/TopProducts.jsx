import StarProducts from '../Product/StarProducts'
import TopRatedIcon from './../../assets/top-rated.png'
import BestSellingIcon from './../../assets/best-sellings.png'
import {
    useGetBestSellingProductsQuery,
    useGetTopRatedProductsQuery,
} from '../../redux/slices/productsApiSlice'
import Loader from '../Loader'

const TopProducts = () => {
    const { data: topProducts, isLoading: topRatedProductsLoading } =
        useGetTopRatedProductsQuery({ limit: 3 })
    const { data: sellingProducts, isLoading: bestProductLoading } =
        useGetBestSellingProductsQuery({ limit: 3 })

    console.log({ topProducts })

    return topRatedProductsLoading || bestProductLoading ? (
        <Loader />
    ) : (
        <div className="flex lg:flex-row flex-col items-center gap-8 my-4">
            {topProducts?.doc && (
                <StarProducts
                    icon={TopRatedIcon}
                    title={'Top rated'}
                    products={topProducts?.doc}
                    link="/products/top-rated"
                />
            )}
            {sellingProducts?.doc && (
                <StarProducts
                    icon={BestSellingIcon}
                    title={'Best sellings'}
                    products={sellingProducts?.doc}
                    link="/products/best-sellings"
                />
            )}
        </div>
    )
}

export default TopProducts
