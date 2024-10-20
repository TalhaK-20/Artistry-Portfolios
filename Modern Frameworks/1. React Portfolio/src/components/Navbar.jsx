import { useState } from "react";
import { HouseDoor, Person, MenuButton, Diagram3, FileText, Envelope, List} from "react-bootstrap-icons";
import { motion } from "framer-motion";
import NavAnimation from "./animated/NavAnimation";


export const Navbar = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* navbar for large screen */}
      <NavAnimation>
        <nav>
          <ul className="border-1 border-fourth-color rounded-full h-64 flex flex-col justify-between px-3 py-5">
            <li className="group flex relative">
              <button onClick={() => scrollToSection("home")} aria-label="scroll to home section">
                <HouseDoor size={21}
                  className={ activeSection === "home" ? "text-main-color" : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"}
                />
                <span className="hidden group-hover:block absolute left-[-480%] top-1/2 transform -translate-y-1/2 bg-second-color font-second-font text-sm text-white px-2 py-1 rounded">
                  Home
                </span>
              </button>
            </li>
            <li className="group flex relative">
              <button onClick={() => scrollToSection("about-me-section")} aria-label="scroll to about section">
                <Person size={23} 
                className={ activeSection === "about-me-section" ? "text-main-color transition duration-200 ease-linear" : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"}
                />
                <span className="hidden group-hover:block absolute left-[-480%] top-1/2 transform -translate-y-1/2 bg-second-color font-second-font text-sm text-white px-2 py-1 rounded">
                  About
                </span>
              </button>
            </li>
            <li className="group flex relative">
              <button onClick={() => scrollToSection("services-section")} aria-label="scroll to services section">
                <MenuButton size={20}
                  className={ activeSection === "services-section" ? "text-main-color transition duration-200 ease-linear" : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"}
                />
                <span className="hidden group-hover:block absolute left-[-560%] top-1/2 transform -translate-y-1/2 bg-second-color font-second-font text-sm text-white px-2 py-1 rounded">
                  Services
                </span>
              </button>
            </li>
            <li className="group flex relative">
              <button onClick={() => scrollToSection("skills-section")} aria-label="scroll to skills section">
                <Diagram3 size={22}
                  className={ activeSection === "skills-section" ? "text-main-color transition duration-200 ease-linear" : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"}
                />
                <span className="hidden group-hover:block absolute left-[-450%] top-1/2 transform -translate-y-1/2 bg-second-color font-second-font text-sm text-white px-2 py-1 rounded">
                  Skills
                </span>
              </button>
            </li>
            <li className="group flex relative">
              <button onClick={() => scrollToSection("project-section")} aria-label="scroll to project section">
                <FileText size={21}
                  className={ activeSection === "project-section" ? "text-main-color transition duration-200 ease-linear" : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"}
                />
                <span className="hidden group-hover:block absolute left-[-550%] top-1/2 transform -translate-y-1/2 bg-second-color font-second-font text-sm text-white px-2 py-1 rounded">
                  Portfolio
                </span>
              </button>
            </li>
            <li className="group flex relative">
              <button onClick={() => scrollToSection("contact-section")} aria-label="scroll to contact section">
                <Envelope size={20}
                  className={ activeSection === "contact-section" ? "text-main-color transition duration-200 ease-linear" : "text-fourth-color hover:text-main-color transition duration-200 ease-linear"}
                />
                <span className="hidden group-hover:block absolute left-[-520%] top-1/2 transform -translate-y-1/2 bg-second-color font-second-font text-sm text-white px-2 py-1 rounded">
                  Contact
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </NavAnimation>
       {/* navbar for small screen */}
      <nav className="lg:hidden sm:flex justify-end relative top-10 z-50">
        <motion.button aria-label="open navbar"
          initial={{ opacity:0 , x: 70 }}  animate={{opacity :1, x: 0 }} transition={{duration:0.5 , delay:0.85}}
          onClick={() => { setIsOpen(!isOpen);}} className="fixed bg-bg-color border-1 border-fourth-color rounded-full">
          <List size={50} className="p-3" />
        </motion.button>
        <div onClick={() => { setIsOpen(!isOpen); }}
          className={`fixed h-screen inset-0 bg-fifth-color opacity-20 duration-0 transition z-10 ${ isOpen === true ? "translate-x-0" : "translate-x-full"}`}
        ></div>
        <div
          className={`fixed inset-0 flex h-screen bg-[#1f1f1f] duration-700 transition z-40 font-second-font  ${
            isOpen === true ? "sm:translate-x-16 md:translate-x-1/2" : "translate-x-full"}`}
        >
          <ul className="mt-16 ml-24 max-h-96 flex flex-col justify-between">
            <li className="text-xl mb-4">Menu</li>
            <li>
              <button onClick={() =>{scrollToSection('home'); setIsOpen(!isOpen) } } className="text-therd-color flex">
                <HouseDoor size={21} />
                <span className="ml-2">Home</span>
              </button>
            </li>
            <li>
              <button onClick={() =>{scrollToSection('about-me-section'); setIsOpen(!isOpen)} } className="text-therd-color flex">
                <Person size={23} />
                <span className="ml-2">About</span>
              </button>
            </li>
            <li>
              <button onClick={() => {scrollToSection("services-section"); setIsOpen(!isOpen)} } className="text-therd-color  flex">
                <MenuButton size={20} />
                <span className="ml-2">Services</span>
              </button>
            </li>
            <li>
              <button onClick={() => {scrollToSection("skills-section"); setIsOpen(!isOpen)} } className="text-therd-color  flex">
                <Diagram3 size={22} />
                <span className="ml-2">Skills</span>
              </button>
            </li>
            <li>
              <button onClick={() => {scrollToSection("project-section"); setIsOpen(!isOpen)} } className="text-therd-color flex">
                <FileText size={21} />
                <span className="ml-2">Portfolio</span>
              </button>
            </li>
            <li>
              <button onClick={() => {scrollToSection("contact-section"); setIsOpen(!isOpen)} } className="text-therd-color flex">
                <Envelope size={20} />
                <span className="ml-2">Contact</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
