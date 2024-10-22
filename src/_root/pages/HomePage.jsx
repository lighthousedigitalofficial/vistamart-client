import { useEffect, useState } from 'react'
import FeatureProducts from '../../components/Product/FeatureProducts'
import Categories from '../../components/Categories'
import FeaturedDeal from '../../components/Deals/FeaturedDeal'
import LatestProducts from '../../components/Product/LatestProducts'
import DealOfTheDay from '../../components/Deals/DealOfTheDay'
import ProductsCategory from '../../components/Product/ProductsCategory'
import FlashDeal from '../../components/Deals/FlashDeal'
import ServicesList from '../../components/Services/ServicesList'
import Loader from './../../components/Loader'
import TopSeller from '../../components/Seller/TopSeller'
import HeroSection from './../../components/Home/HeroSection'
import Brands from '../../components/Brands'
import TopProducts from '../../components/Home/TopProducts'

// images
import PromoSaleImage from './../../assets/banner/promo-sale.webp'
import MegaSaleBanner1 from './../../assets/banner/mega-sale.webp'
import MegaSaleBanner2 from './../../assets/banner/super-sale.webp'

import keys from './../../config/keys'

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 500) // .5 seconds delay

        return () => clearTimeout(timer)
    }, [])

    return isLoading ? (
        <Loader />
    ) : (
        <main>
            {/* Hero Section */}
            <HeroSection />

            {/* Categories Section */}
            <section>
                <Categories />
            </section>

            {/* Flash Deal */}
            <section className="py-2 mb-4">
                <FlashDeal />
            </section>

            {/* Feature Products Section */}
            <section className="py-4 mb-4">
                <FeatureProducts />
            </section>

            {/* Featured Deal */}
            <section className="py-4">
                <FeaturedDeal />
            </section>

            {/* Deal Offer Section */}
            <section className="py-4 mb-4">
                <img
                    src={PromoSaleImage}
                    alt="promo sale banner"
                    className="rounded-lg"
                    loading="lazy"
                />
            </section>

            {/* Top Sellers */}
            <TopSeller />

            <section className="py-4 mb-4 flex flex-col items-center w-full lg:flex-row lg:items-start justify-around gap-4">
                <DealOfTheDay
                    image={
                        `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-macbook-air-space-gray-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145627000` ||
                        keys.DEFAULT_IMG
                    }
                    title={'Laptop'}
                    loading="lazy"
                    price={150.0}
                />
                <LatestProducts />
            </section>

            {/* Banner Sale Section */}
            <section className="py-4">
                <div className="flex justify-between items-center lg:flex-row flex-col gap-4 w-full">
                    <img
                        src={MegaSaleBanner1}
                        alt="mega sale"
                        className="lg:w-1/2 w-full rounded-lg"
                        loading="lazy"
                    />
                    <img
                        src={MegaSaleBanner2}
                        alt="mega sale"
                        className="lg:w-1/2 w-full rounded-lg"
                        loading="lazy"
                    />
                </div>
            </section>

            <TopProducts />

            {/* Brands Section */}
            <section>
                <Brands />
            </section>

            <section className="py-4">
                <ProductsCategory />
            </section>

            <section>
                <ServicesList />
            </section>
        </main>
    )
}

export default HomePage

//   <div className="flex justify-center items-center py-4 px-8 text-lg bg-red-100 text-red-500 my-8">
//                 Something went wrong, Please try again!
//             </div>
