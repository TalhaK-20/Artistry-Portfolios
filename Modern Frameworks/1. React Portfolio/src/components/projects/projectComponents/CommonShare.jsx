import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Project1Img1 from '../../../assets/project images/project3-img1.png';
import Project1Img2 from '../../../assets/project images/project3-img2.png';
import Project1Img3 from '../../../assets/project images/project3-img3.png';
import Project1Img4 from '../../../assets/project images/project3-img4.png';
import Project1Img5 from '../../../assets/project images/project3-img5.png';
import { XSquare, ArrowRightCircleFill } from 'react-bootstrap-icons';
import Reveal from '../../animated/Reveal';

function CommonShare({ handleModalToggle }) {
    return (
        <div className="bg-bg-color h-screen md:pl-20 sm:pl-5 font-second-font " id='modal-section'>
            <button onClick={handleModalToggle} className='float-right mt-3 mr-4'>
                <XSquare size={18} />
            </button>
            <div className='md:pr-20 sm:pr-5 pt-16'>
                <Reveal RevealDelay={0.6} TextDelay={0.89}><h1 className='md:text-4xl sm:text-xl mb-4'>Project Description</h1></Reveal>
                <Reveal RevealDelay={0.6} TextDelay={0.89}>
                    <p className='md:text-lg sm:text-base leading-[2.5rem] text-fifth-color mb-11'>
                        The B2B Landing Page for CommonShare is a modern, responsive web application designed to 
                        facilitate business-to-business interactions for CommonShare, a platform dedicated to 
                        streamlining sustainable procurement and supply chains. this landing page provides a user-friendly
                        interface with a visually appealing design and a seamless experience across various devices.
                    </p>
                </Reveal>
                <Reveal RevealDelay={0.6} TextDelay={0.89}><h1 className='md:text-4xl sm:text-xl mb-4 '>Technologies Used</h1></Reveal>
                <span className='md:text-lg sm:text-base  text-fifth-color'><Reveal>This project was built using the following technologies:</Reveal></span>
                <ul className='list-disc text-base leading-[2.5rem] mt-2 ml-10 mb-12 text-fifth-color'>
                    <Reveal RevealDelay={0.6} TextDelay={0.89}><li>Next.js: A React framework for building performant web applications.</li></Reveal>
                    <Reveal RevealDelay={0.6} TextDelay={0.89}><li>TypeScript: A typed superset of JavaScript that enhances code reliability and maintainability.</li></Reveal>
                    <Reveal RevealDelay={0.6} TextDelay={0.89}><li>Tailwind CSS: A utility-first CSS framework used for styling the application</li></Reveal>
                    <Reveal RevealDelay={0.6} TextDelay={0.89}><li>Shadcn UI: A collection of React UI components based on Tailwind CSS.</li></Reveal>
                </ul>
                <a href="https://github.com/HamzaOutmassint/b2b-landing" target="_blank" rel="noreferrer" className="cta flex items-center gap-x-[3px] lg:gap-x-[5px] w-fit">
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
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={Project1Img1} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Project1Img2} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Project1Img3} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Project1Img4} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Project1Img5} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default CommonShare