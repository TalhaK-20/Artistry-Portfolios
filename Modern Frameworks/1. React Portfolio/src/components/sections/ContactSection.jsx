import { Envelope } from "react-bootstrap-icons"
import NavTitle from "../animated/NavTitle"
import Reveal from "../animated/Reveal"

export const ContactSection = () => {
  return (
    <section className="xl:h-full lg:h-full exactly-1024:h-fit pt-9 md:pb-28 sm:pb-20 relative z-0" id="contact-section">
      <NavTitle>
        <div className="border-1 border-second-color items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm  md:w-md lg:w-lg xl:w-xl flex justify-between">
          <Envelope size={18} />
          CONTACT
        </div>
      </NavTitle>
      <div>
        <div className="flex flex-col mb-6 mt-10">
          <div>
            <Reveal RevealDelay={0.6} TextDelay={0.89}><h1 className="text-5xl font-bold">Let's chat.</h1></Reveal>
            <Reveal RevealDelay={0.6} TextDelay={0.89}><h1 className="text-5xl font-bold mb-5">Tell me about your project.</h1></Reveal>
            <Reveal RevealDelay={0.6} TextDelay={0.89}>
              <p className="font-second-font text-fifth-color">
                I'm open to Job opportunities for both remote and non-remote positions where I can contribute,
                learn and grow.
              </p>
            </Reveal>
            <Reveal RevealDelay={0.6} TextDelay={0.89}>
              <p className="font-second-font text-fifth-color">
                If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
              </p>
            </Reveal>
          </div>
          <a href="mailto:F2021266625@umt.edu.pk" target="_blank" className="max-w-fit font-second-font mt-8" rel="noreferrer">
            <Reveal RevealDelay={1} TextDelay={1.5}>
              <button className="relative group p-3 px-12 bg-main-color transition-colors duration-300 rounded-full border-2 border-main-color">
                <div className="absolute top-3.5 left-3 h-5 w-5 bg-bg-color rounded-full group-hover:h-full group-hover:w-full group-hover:top-0 group-hover:left-0 transition-all duration-300 z-10"></div>
                <span className="z-20 relative text-second-color group-hover:text-main-color font-bold">DROP ME AN EMAIL</span>
              </button>
            </Reveal>
          </a>
        </div>
      </div>
    </section>
  )
}
