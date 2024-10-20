import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Project1Img1 from '../../../assets/project images/project-img1.png';
import Project1Img2 from '../../../assets/project images/project-img2.png';
import Project1Img3 from '../../../assets/project images/project-img3.png';
import Project1Img4 from '../../../assets/project images/project-img4.png';
import { XSquare, ArrowRightCircleFill } from 'react-bootstrap-icons';
import Reveal from '../../animated/Reveal';

function StockBuildingMaterials({ handleModalToggle }) {
    return (
        <div className="bg-bg-color h-screen md:pl-20 sm:pl-5 font-second-font " id='modal-section'>
            <div className="blobs right-blobs-project-component right-20"></div>
            <div className="blobs left-blobs-project-component md:-left-56 md:top-64 sm:-left-12 sm:top-32"></div>
            <button onClick={handleModalToggle} className='float-right mt-3 mr-4'>
                <XSquare size={18} />
            </button>
            <div className='md:pr-20 sm:pr-5 pt-16'>
                <Reveal RevealDelay={0.6} TextDelay={0.89}><h1 className='md:text-4xl sm:text-xl mb-4'>Project Description</h1></Reveal>
                <Reveal RevealDelay={0.6} TextDelay={0.89}>
                    <p className='md:text-lg sm:text-base leading-[2.5rem] text-fifth-color mb-11'>
                        Inventory management is a web application designed to streamline project
                        management tasks by keeping track of the equipment used at construction
                        sites. The application enables project managers to record and track the
                        amount of equipment used by workers each day, including the depletion of
                        equipment specific to each specialty. The project administrator can also
                        add new workers, assign them unique login credentials, and monitor their
                        work on the site. This system helps the administrator to accurately
                        monitor the quantity of equipment used at each location, as well as the
                        worker responsible for its use.
                    </p>
                </Reveal>
                <Reveal RevealDelay={0.6} TextDelay={0.89}><h1 className='md:text-4xl sm:text-xl mb-4 '>Technologies Used</h1></Reveal>
                <span className='md:text-lg sm:text-base  text-fifth-color'><Reveal>This project was built using the following technologies:</Reveal></span>
                <ul className='list-disc text-base leading-[2.5rem] mt-2 ml-10 mb-12 text-fifth-color'>
                    <Reveal RevealDelay={0.6} TextDelay={0.89}><li>Laravel: A PHP web application framework used for back-end development</li></Reveal>
                    <Reveal RevealDelay={0.6} TextDelay={0.89}><li>Vite: A build tool used for front-end development with React</li></Reveal>
                    <Reveal RevealDelay={0.6} TextDelay={0.89}><li>Tailwind CSS: A utility-first CSS framework used for styling the application</li></Reveal>
                </ul>
                <a href="https://github.com/HamzaOutmassint/Stock-Building-materials-V2" target="_blank" rel="noreferrer" className="cta flex items-center gap-x-[3px] lg:gap-x-[5px] w-fit">
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
                        <img src={Project1Img4} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Project1Img3} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Project1Img1} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Project1Img2} alt="projectImage" className="rounded-md " />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default StockBuildingMaterials