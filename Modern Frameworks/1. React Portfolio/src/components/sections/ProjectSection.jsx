import Project1Img1 from '../../assets/project images/project-img1.png';
import Project2Img1 from '../../assets/project images/project2-img1.png';
import Project3Img1 from '../../assets/project images/project3-img1.png';
import NavTitle from '../animated/NavTitle';

import { MenuButton, Github, EyeFill } from 'react-bootstrap-icons';

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';

export const ProjectSection = ({ handleModalToggle, setProjectName }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="xl:h-full lg:h-full exactly-1024:h-fit pb-16 pt-9 mt-6 relative z-0" id="project-section">
      <div className="blobs right-20"></div>
      <NavTitle>
        <div className="border-1 border-second-color items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm  md:w-md lg:w-lg xl:w-xl flex justify-between">
          <MenuButton size={18} />
          PORTFOLIO
        </div>
      </NavTitle>
      <div className="md:my-24 sm:mt-8  grid grid-cols-1 lg:grid-cols-2 sm:place-items-center lg:place-items-start gap-8 lg:w-[84%] relative font-second-font">
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="lg:max-w-sm sm:max-w-sm md:max-w-xl lg:h-72 rounded-lg overflow-hidden shadow-lg project-cart1">
          <div className="font-bold text-bg-color text-lg my-1 pl-2">Stock Building Materials</div>
          <img className="w-full px-2 cursor-pointer" src={Project1Img1} alt="Sunset in the mountains" onClick={() => { setProjectName('Stock-Building-materials'); handleModalToggle() }} />
          <div className="px-2 pt-4 lg:mt-4 flex justify-between items-center">
            <div>
              <span className="inline-block bg-bg-color rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React/Laravel</span>
              <span className="inline-block bg-bg-color rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TailwindCss</span>
            </div>
            <span className="inline-block pl-3 py-1 mr-1 mb-2">
              <a title="github" href="https://github.com/HamzaOutmassint/Stock-Building-materials-V2">
                <Github size={30} className="text-bg-color" />
              </a>
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="lg:max-w-sm sm:max-w-sm md:max-w-xl lg:h-72 rounded-lg overflow-hidden shadow-lg project-cart2">
          <div className="font-bold text-bg-color text-lg my-1 pl-2">Multishop</div>
          <img className="w-full px-2 cursor-pointer" src={Project2Img1} alt="Sunset in the mountains" onClick={() => { setProjectName('Multishop'); handleModalToggle() }} />
          <div className="px-2 pt-4 lg:mt-4 flex justify-between items-center">
            <div>
              <span className="inline-block bg-bg-color text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React/Laravel</span>
              <span className="inline-block bg-bg-color text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Material UI</span>
            </div>
            <span className="inline-block pl-3 py-1 mr-1 mb-2">
              <a title="github" href="https://github.com/HamzaOutmassint/MultiShop">
                <Github size={30} className="text-bg-color" />
              </a>
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="lg:max-w-sm sm:max-w-sm md:max-w-xl lg:h-72 rounded-lg overflow-hidden shadow-lg project-cart3">
          <div className="my-1 px-2 flex justify-between items-center">
            <span className='font-bold text-bg-color text-lg'>CommonShare Landing</span>
            <a title="visit" target="_blank" rel="noreferrer" href="https://b2b-commonshare-landing.vercel.app">
              <EyeFill size={25} className='text-bg-color'/>
            </a>
          </div>
          <img className="w-full px-2 cursor-pointer" src={Project3Img1} alt="Sunset in the mountains" onClick={() => { setProjectName('CommonShare'); handleModalToggle() }} />
          <div className="px-2 pt-4 lg:mt-4 flex justify-between items-center">
            <div>
              <span className="inline-block bg-bg-color text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NextJs</span>
              <span className="inline-block bg-bg-color text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TailwindCss/Shadcn UI</span>
            </div>
            <span className="inline-block pl-3 py-1 mr-1 mb-2">
              <a title="github" href="https://github.com/HamzaOutmassint/b2b-landing">
                <Github size={30} className="text-bg-color" />
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};