/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import keys from '../../config/keys'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ProductSlider = ({ images }) => {
    const [featuredImage, setFeaturedImage] = useState(images[0])

    const handleThumbnailClick = (image) => {
        setFeaturedImage(image)
    }

    const scrollSlider = (direction) => {
        const slider = document.getElementById('slider')
        slider.scrollLeft += direction === 'right' ? 180 : -180
    }

    return (
        <div className="flex flex-wrap justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="w-full lg:w-1/2">
                {/* <img
                    src={
                        featuredImage
                            ? featuredImage.startsWith('products')
                                ? `${keys.BUCKET_URL}${featuredImage}`
                                : featuredImage
                            : keys.DEFAULT_IMG
                    }
                    alt="Featured product"
                    className="w-full h-80 object-cover border-2 border-gray-100 cursor-pointer"
                /> */}

                <LazyLoadImage
                    src={
                        featuredImage
                            ? featuredImage.startsWith('products')
                                ? `${keys.BUCKET_URL}${featuredImage}`
                                : featuredImage
                            : keys.DEFAULT_IMG
                    }
                    effect="blur" // You can use "blur" or "opacity" as lazy load effect
                    alt="Featured product"
                    className="w-full h-80 object-cover border-2 border-gray-100 cursor-pointer"
                />

                <div className="flex items-center space-x-4 mt-4">
                    <FaChevronLeft
                        className="text-gray-500 cursor-pointer transition-transform hover:scale-110"
                        onClick={() => scrollSlider('left')}
                    />
                    <div
                        id="slider"
                        className="flex space-x-2 overflow-x-auto scrollbar-hide"
                    >
                        {images.map((image, index) => {
                            if (image.startsWith('products'))
                                return (
                                    <LazyLoadImage
                                        key={index}
                                        src={`${keys.BUCKET_URL}${image}`}
                                        alt={`Thumbnail ${index + 1}`}
                                        onClick={() =>
                                            handleThumbnailClick(image)
                                        }
                                        className={`w-32 h-20 object-cover cursor-pointer border-2 border-primary-500 transition-opacity ${
                                            featuredImage === image
                                                ? 'opacity-100'
                                                : 'opacity-50'
                                        }`}
                                    />
                                )
                        })}
                    </div>
                    <FaChevronRight
                        className="text-gray-500 cursor-pointer transition-transform hover:scale-110"
                        onClick={() => scrollSlider('right')}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductSlider
