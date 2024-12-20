import { useState, useEffect, Suspense } from 'react'

import FeatureProducts from '../../components/Product/FeatureProducts'
import Categories from '../../components/Categories'
// import FeaturedDeal from '../../components/Deals/FeaturedDeal'
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
import PromoSaleImage from './../../assets/banner/headphone-add.webp'
import MegaSaleBanner1 from './../../assets/banner/mega-sale.webp'
import MegaSaleBanner2 from './../../assets/banner/super-sale.webp'

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
            <HeroSection />

            <Suspense fallback={<Loader />}>
                <section>
                    <Categories />
                </section>

                <section className="py-2 mb-4">
                    <FlashDeal />
                </section>

                <section className="py-4 mb-4">
                    <FeatureProducts />
                </section>
            </Suspense>

            <section className="py-4 mb-4">
                <img
                    src={PromoSaleImage}
                    alt="Promo Sale Banner"
                    className="rounded-lg"
                    loading="lazy"
                />
            </section>

            <TopSeller />

            <section className="py-4 mb-4 flex flex-col items-center w-full lg:flex-row lg:items-start justify-around gap-4">
                <DealOfTheDay />
                <LatestProducts />
            </section>

            <section className="py-4">
                <div className="flex justify-between items-center lg:flex-row flex-col gap-4 w-full">
                    <img
                        src={MegaSaleBanner1}
                        alt="Mega Sale 1"
                        className="lg:w-1/2 w-full rounded-lg"
                        loading="lazy"
                    />
                    <img
                        src={MegaSaleBanner2}
                        alt="Mega Sale 2"
                        className="lg:w-1/2 w-full rounded-lg"
                        loading="lazy"
                    />
                </div>
            </section>

            <TopProducts />

            <Suspense fallback={<Loader />}>
                <section>
                    <Brands />
                </section>
                <section className="py-4">
                    <ProductsCategory />
                </section>
                <section>
                    <ServicesList />
                </section>
            </Suspense>
        </main>
    )
}

export default HomePage

//   <div className="flex justify-center items-center py-4 px-8 text-lg bg-red-100 text-red-500 my-8">
//                 Something went wrong, Please try again!
//             </div>
