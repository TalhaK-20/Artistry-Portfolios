import { MenuButton, CodeSlash } from "react-bootstrap-icons";
import figma from "../../assets/figma.svg"
import NavTitle from "../animated/NavTitle";
import Reveal from "../animated/Reveal";
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";
import { AiOutlineRobot } from 'react-icons/ai';
import { FaFlask } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';


export const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="xl:h-full lg:h-screen exactly-1024:h-fit pt-9 md:mb-48 sm:mb-28 relative z-0" id="services-section">
      <div className="blobs md:-left-56 md:top-64 sm:-left-12 sm:top-32"></div>
      <NavTitle>
        <div className="border-1 border-second-color items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm  md:w-md lg:w-lg xl:w-xl flex justify-between">
          <MenuButton size={18} />
          SERVICES
        </div>
      </NavTitle>
      <div className="mt-8 lg:w-[70%] font-second-font">
        <h1 className="font-second-font lg:text-5xl sm:text-xl">
          <Reveal RevealDelay={0.6} TextDelay={0.89}><span>My</span></Reveal>
          <Reveal RevealDelay={0.6} TextDelay={0.89}><span className="text-main-color">Specializations</span></Reveal>
        </h1>

        <div className="md:mt-12 sm:mt-8">
          <motion.div ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-between border-1 border-fourth-color hover:border-main-color transition duration-200 ease-linear rounded-xl h-32 p-8 px-8 mb-6">
            <div className="flex flex-col justify-center">
              <span className="text-xl sm:text-lg md:text-xl lg:text-2xl mb-1 font-normal">Full Stack Development</span>
              <span className="text-sm sm:text-xs md:text-lg lg:text-lg text-fifth-color">Build web applications using the most powerful technologies</span>
            </div>
            <div>
              <CodeSlash size={30} className="text-main-color" />
            </div>
          </motion.div>

        
          <motion.div ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-between border-1 border-fourth-color hover:border-main-color transition duration-200 ease-linear rounded-xl h-32 p-8 px-8 ">
            <div className="flex flex-col justify-center">
              <span className="text-xl sm:text-lg md:text-xl lg:text-2xl mb-1 font-normal">AI Product Development</span>
              <span className="text-sm sm:text-xs md:text-lg lg:text-lg text-fifth-color">Create digital AI products using the advanced AI technologies</span>
            </div>
            <div>
              <AiOutlineRobot size={30} className="text-main-color" />
            </div>
          </motion.div>


          <motion.div ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex justify-between border-1 border-fourth-color hover:border-main-color transition duration-200 ease-linear rounded-xl h-32 p-8 px-8 " style={{marginTop: '24px'}}>
            <div className="flex flex-col justify-center">
              <span className="text-xl sm:text-lg md:text-xl lg:text-2xl mb-1 font-normal">Research Development</span>
              <span className="text-sm sm:text-xs md:text-lg lg:text-lg text-fifth-color">Conduct research in the fields of ML and NLP</span>
            </div>
            <div>
              <GiBrain size={30} className="text-main-color" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
