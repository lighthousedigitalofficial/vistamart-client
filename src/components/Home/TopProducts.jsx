import StarProducts from '../Product/StarProducts'
import TopRatedIcon from './../../assets/top-rated.png'
import BestSellingIcon from './../../assets/best-sellings.png'
import { useGetTopRatedProductsQuery } from '../../redux/slices/productsApiSlice'
import Loader from '../Loader'

const TopProducts = () => {
    const { data: topProducts, isLoading } = useGetTopRatedProductsQuery({})

    return isLoading ? (
        <Loader />
    ) : topProducts && topProducts?.doc ? (
        <div className="flex justify-between lg:flex-row flex-col items-center gap-4 my-4">
            <StarProducts
                icon={BestSellingIcon}
                title={'Best sellings'}
                products={topProducts?.docs}
            />
            <StarProducts
                icon={TopRatedIcon}
                title={'Top rated'}
                products={topProducts?.docs}
            />
        </div>
    ) : null
}

export default TopProducts
