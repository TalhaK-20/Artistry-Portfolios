import { HouseDoor, Github, Linkedin, ArrowDown } from "react-bootstrap-icons";
import img_my_project from "../../assets/round-text.png";
import { motion } from "framer-motion"
import Reveal from "../animated/Reveal";
import ProjectCircle from "../animated/ProjectCircle";

export const IntroduceSection = ({ scrollToSection }) => {
  return (
    <section className="xl:h-full lg:h-screen exactly-1024:h-fit sm:pt-20 lg:pt-9 relative z-0" id="home">
      <div className="flex items-center md:justify-center sm:justify-start">
        <motion.div
          drag dragConstraints={{ top: -2, left: -2, right: 2, bottom: 2, }}
          variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 }, }}
          initial='hidden' animate={'visible'} transition={{ duration: 0.5, }}
          className="border-1 border-fourth-color rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm md:w-md lg:w-lg xl:w-xl exactly-1024:w-sm flex justify-between">
          <HouseDoor size={18} />
          INTRODUCE
        </motion.div>
      </div>
      <div className="sm:mt-12 mt-24 pb-5 grid grid-flow-row-dense lg:grid-cols-3 ">
        <div className="lg:col-span-2">
          <div className="text-[#28e98c] relative mb-4 helloWorld">
            <Reveal RevealDelay={0.6} TextDelay={0.89}>
              <span className="pl-14 md:text-lg font-second-font tracking-wide">
                WELCOME
              </span>
            </Reveal>
          </div>
          <h1 className="font-main-font text-white sm:text-5xl md:text-5xl lg:text-5xl not-italic font-bold  mb-5 leading-[normal]">
            <Reveal RevealDelay={0.6} TextDelay={0.89}>I am Talha Khalid</Reveal>
            <Reveal RevealDelay={0.6} TextDelay={0.89}>Full Stack Developer</Reveal>
            <Reveal RevealDelay={0.6} TextDelay={0.89}>ML & NLP Engineer</Reveal>
          </h1>
          <span className="font-second-font text-fifth-color sm:text-sm md:text-base xl:pr-10">
            <Reveal RevealDelay={0.6} TextDelay={0.89}> Crafting full stack solutions with passion. Let's build AI-driven projects optimize with cutting-edge ML technologies! </Reveal>
          </span>
          <div className="flex mt-4">
            <motion.a
              variants={{ hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 }, }}
              initial='hidden' animate={'visible'} transition={{ duration: 0.5, delay: 0.89 }}
              title="github" href="https://github.com/talhak-20"
              className="h-1/2 border-3 border-fourth-color p-2 rounded-full mr-4 group hover:border-main-color transition duration-200 ease-linear"
            >
              <Github
                size={30}
                className="text-fourth-color group-hover:text-main-color transition duration-200 ease-linear p-1"
              />
            </motion.a>

            <motion.a
              variants={{ hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 }, }}
              initial='hidden' animate={'visible'} transition={{ duration: 0.2, delay: 0.89 }}
              title="linkdin" href="https://www.linkedin.com/in/talhak20"
              className="h-1/2 border-3 border-fourth-color group hover:border-main-color p-2 rounded-full flex items-center justify-center transition duration-200 ease-linear"
            >
              <Linkedin
                size={30}
                className="text-fourth-color group-hover:text-main-color transition duration-200 ease-linear p-1"
              />
            </motion.a>
          </div>
        </div>
      </div>
      <ProjectCircle>
        <button onClick={() => scrollToSection('project-section')} >
          <ArrowDown
            size={35}
            className="absolute lg:right-[15.8rem] lg:-top-3 xl:-top-5 xl:right-[21.3rem] exactly-1024:right-[15.3rem] animate-bounce"
            style={{ marginRight: '-64px', marginTop: '-36px' }}
          />
          <img
            src={img_my_project}
            alt="my project icon"
            className="absolute lg:right-48 lg:-top-20 xl:right-72  circle-animation"
            style={{ marginRight: '-64px', marginTop: '-36px' }}
            />
        </button>
      </ProjectCircle>
    </section>
  );
};
