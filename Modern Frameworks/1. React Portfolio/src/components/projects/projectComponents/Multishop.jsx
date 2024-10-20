import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Project2Img1 from '../../../assets/project images/project2-img1.png';
import Project2Img2 from '../../../assets/project images/project2-img2.png';
import Project2Img3 from '../../../assets/project images/project2-img3.png';
import Project2Img4 from '../../../assets/project images/project2-img4.png';
import Project2Img5 from '../../../assets/project images/project2-img5.png';
import Project2Img6 from '../../../assets/project images/project2-img6.png';
import Project2Img7 from '../../../assets/project images/project2-img7.png';
import Project2Img8 from '../../../assets/project images/project2-img8.png';
import { XSquare, ArrowRightCircleFill } from 'react-bootstrap-icons';
import Reveal from '../../animated/Reveal';

function MultiShop({ handleModalToggle }) {
    return (
        <div className="bg-bg-color h-screen md:pl-20 sm:pl-5 font-second-font " id='modal-section'>
            <button onClick={handleModalToggle} className='float-right mt-3 mr-4'>
                <XSquare size={18} />
            </button>
            <div className='md:pr-20 sm:pr-5 pt-16'>
                <Reveal RevealDelay={0.6} TextDelay={0.89}><h1 className='md:text-4xl sm:text-xl mb-4'>Project Description</h1></Reveal>
                <Reveal RevealDelay={0.6} TextDelay={0.89}><p className='md:text-lg sm:text-base leading-[2.5rem] text-fifth-color mb-11'>
                    Multishop is an e-commerce platform for online fashion shopping. With its sleek and
                    intuitive interface, the website is designed to deliver a seamless user experience.
                    It includes dedicated Men , Women and accessories sections, each equipped with a
                    powerfulfiltering system that empowers users to precisely refine their search based on
                    price range and categories. The cart management system is seamlessly integrated,
                    allowing users to effortlessly  add products,remove products ,choose sizes, even without
                    signing  in. All user actions are securely stored in a user-specific  database, ensuring a
                    continuous and personalized experience. The robust authentication system enhances security
                    and facilitates  the smooth transfer of data, including cart items, to the user&apos;s
                    account upon signing in.
                </p></Reveal>
                <Reveal RevealDelay={0.6} TextDelay={0.89}><h1 className='md:text-4xl sm:text-xl mb-4 '>Technologies Used</h1></Reveal>
                <span className='md:text-lg sm:text-base  text-fifth-color'><Reveal RevealDelay={0.6} TextDelay={0.89}>This project was built using the following technologies:</Reveal></span>
                <ul className='list-disc text-base leading-[2.5rem] mt-2 ml-10 mb-12 text-fifth-color'>
                    <Reveal RevealDelay={0.6} TextDelay={0.89}><li>Laravel: A PHP web application framework used for back-end development</li></Reveal>
                    <Reveal RevealDelay={0.6} TextDelay={0.89}><li>React: A JavaScript library used for Building user interfaces</li></Reveal>
                    <Reveal RevealDelay={0.6} TextDelay={0.89}><li>CSS: is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML</li></Reveal>
                    <Reveal RevealDelay={0.6} TextDelay={0.89}><li>Material UI: is an open-source React component library that implements Google's Material Design.</li></Reveal>
                </ul>
                <a href="https://github.com/HamzaOutmassint/MultiShop" target="_blank" className="cta flex items-center gap-x-[3px] lg:gap-x-[5px] w-fit" rel="noreferrer">
                    <span className=" font-clash font-semibold text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
                        Source Code
                    </span>
                    <ArrowRightCircleFill size={24} className='z-50 ml-4' />
                </a>
            </div>
            <div className='md:mr-20 mr-4 mt-14 pb-10'>
                <Swiper  
                    cssMode={true} 
                    spaceBetween={30} 
                    pagination={{ clickable: true, }} 
                    modules={[Pagination]} 
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={Project2Img1} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Project2Img2} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Project2Img3} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Project2Img4} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Project2Img5} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Project2Img6} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Project2Img7} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Project2Img8} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default MultiShop