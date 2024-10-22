// import { Carousel } from '@material-tailwind/react'

import Banner1 from '../../assets/slideshow-img/slide-5.jpg'
import Banner2 from '../../assets/slideshow-img/slide-6.png'
import Banner3 from '../../assets/slideshow-img/slide-7.jpg'

import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'

import styles from './Hero.module.css'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const HeroSection = () => (
    <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
        className={`${styles.aws_btn} lg:h-[60vh] md:h-[50vh] h-[35vh]`}
    >
        <div data-src={Banner3} className="object-contain" />
        <div data-src={Banner2} className="object-contain" />
        <div data-src={Banner1} className="object-contain" />
    </AutoplaySlider>
)

export default HeroSection

// const HeroSection = () => {
//     return (
//         <div className="w-full flex justify-between gap-2">
//             {/* <CategorySidebar className="hidden" /> */}
//             {/* <Carousel
//                 className=" w-full z-10 lg:h-[70vh] md:h-[50vh] h-[30vh] rounded-lg "
//                 navigation={({ setActiveIndex, activeIndex, length }) => (
//                     <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//                         {new Array(length).fill('').map((_, i) => (
//                             <span
//                                 key={i}
//                                 className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//                                     activeIndex === i
//                                         ? 'w-8 bg-white'
//                                         : 'w-4 bg-white/50'
//                                 }`}
//                                 onClick={() => setActiveIndex(i)}
//                             />
//                         ))}
//                     </div>
//                 )}
//                 autoplay
//                 loop
//             >
//                 <img
//                     src={Banner1}
//                     alt="image 1"
//                     className="h-full w-full object-cover"
//                 />
//                 <img
//                     src={Banner2}
//                     alt="image 1"
//                     className="h-full w-full object-cover"
//                 />
//                 <img
//                     src={Banner3}
//                     alt="image 1"
//                     className="h-full w-full object-cover"
//                 />
//             </Carousel> */}
//         </div>
//     )
// }
