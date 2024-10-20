import { Diagram3 } from "react-bootstrap-icons";
import butterfly from '../../assets/butterfly.png';
import Skills from '../database/Skills.json';
import React, { useRef, useState, useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavTitle from "../animated/NavTitle";
import Reveal from "../animated/Reveal";

export const SkillsSection = () => {
  const [dragStatus, setDragStatus] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex(prevIndex => (prevIndex + 1) % Skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // console.log(typeof currentTitleIndex)

  gsap.registerPlugin(Draggable, MotionPathPlugin, ScrollTrigger);

  const container = useRef();
  const collisionDiv = useRef();
  const sphere = useRef();

  // GSAP Animations
  useGSAP(() => {
    const boxes = gsap.utils.toArray(`.box`);

    const handleResize = () => {
      // MotionPath
      gsap.set(boxes, {
        motionPath: {
          path: "#circularCarouselPath",
          align: "#circularCarouselPath",
          alignOrigin: [0.5, 0.5],
          start: -0.25,
          end: (i) => i / boxes.length - 0.25,
          autoRotate: true
        }
      });
    };

    // Draggable
    setActiveIndex(0);
    // Draggable.create(`.circularCarousel`, {
    //   type: "rotation",
    //   inertia: true,
    //   snap: (endVal) => gsap.utils.snap(360 / boxes.length, endVal),
    //   onPress: () => {
    //     setDragStatus('pressed');
    //   },
    //   onRelease: () => {
    //     setDragStatus(null);
    //   },
    //   onDragStart: () => {
    //     setActiveIndex(null);
    //   },
    //   onThrowComplete: () => {
    //     let collisionDivRect = collisionDiv.current?.getBoundingClientRect();
    //     let newActiveIndex = null;

    //     boxes.forEach((box, index) => {
    //       let boxRect = box.getBoundingClientRect();
    //       if (
    //         collisionDivRect.x < boxRect.x + boxRect.width &&
    //         collisionDivRect.x + collisionDivRect.width > boxRect.x &&
    //         collisionDivRect.y < boxRect.y + boxRect.height &&
    //         collisionDivRect.y + collisionDivRect.height > boxRect.y
    //       ) {
    //         newActiveIndex = index;
    //       }
    //     });
    //     setActiveIndex(newActiveIndex);
    //   },
    // });

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, { scope: container });

  return (
    <section className="xl:h-[44rem] lg:h-[46rem] md:h-[30rem]  sm:h-[24rem] exactly-1024:h-[37rem] pt-9 mt-6 overflow-hidden relative z-0" id="skills-section" ref={container}>
      <NavTitle>
        <div className="border-1 border-second-color items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal sm:w-sm  md:w-md lg:w-lg xl:w-xl flex justify-between">
          <Diagram3 size={18} />
          <span className="pr-5"> SKILLS </span>
        </div>
      </NavTitle>
      <div className="relative lg:mr-16">
        <img src={butterfly} alt="butterfly img" width={500} className="opacity-5 rotate-45 absolute lg:right-11 md:-right-14 sm:-right-16 z-0" />
        <h1 className="font-second-font lg:text-5xl sm:text-xl md:mb-16 sm:mt-8">
          <Reveal  RevealDelay={0.6} TextDelay={0.85}><span>My</span></Reveal>
          <Reveal  RevealDelay={0.6} TextDelay={0.85}><span className="text-main-color">Skillset</span></Reveal>
        </h1>
        <div className="flex justify-center items-center mt-8">
          <div className='collisionDiv' ref={collisionDiv}></div>
          <div className="w-[40dvw] circularCarousel relative animate-spin-slow">
            <svg viewBox="0 0 400 400" className="visible h-full w-full pointer-events-none">
              <path strokeWidth="2" stroke="red" id="circularCarouselPath" fill="none"
                d="M396,200 C396,308.24781 308.24781,396 200,396 91.75219,396 4,308.24781 4,200 4,91.75219 91.75219,4 200,4 308.24781,4 396,91.75219 396,200 z"></path>
            </svg>

            {Skills.map((skill, index) => (
              <div key={index} 
                className={`box flex justify-center items-center rounded-2xl ${activeIndex === index ? 'isActive' : ''}`}>
                <img src={require(`../../assets/icons/${skill.image}`)} alt={skill.title} width={100} height={100} loading={'lazy'} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute exactly-1024:top-[73%] lg:top-[72%] md:top-[70%] sm:top-[80%] lg:left-[34%] sm:left-[35%] w-[30%] flex flex-col items-center justify-center">
        <span className="text-fifth-color font-second-font md:text-3xl sm:text-6x1 font-bold"> {Skills[currentTitleIndex].title} </span>
      </div>
      <div ref={sphere} className='sphereWrapper xl:left-[38%] lg:left-[37%] exactly-1024:left-[39%] sm:left-[41%]'>
        <div className={`sphere ${dragStatus === 'pressed' ? 'isActive' : ''}`}></div>
      </div>
    </section>
  )
}