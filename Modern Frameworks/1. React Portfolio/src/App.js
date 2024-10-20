import { AboutMeSection } from "./components/sections/AboutMeSection";
import { ContactSection } from "./components/sections/ContactSection";
import Footer from "./components/Footer";
import { IntroduceSection } from "./components/sections/IntroduceSection";
import Project from "./components/projects/Project";
import { Navbar } from "./components/Navbar";
import { ProjectSection } from "./components/sections/ProjectSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { useState, useEffect } from "react";
import Loading from "./components/preloader/Loading";


function App() {
  const [activeSection, setActiveSection] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ProjectName, setProjectName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let sectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          sectionId = section.getAttribute("id");
        }
      });
      setActiveSection(sectionId);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  }

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
    setTimeout(() => {
      scrollToSection('project-section');
    }, 50);
  };

  if(loading){
    return <Loading/>
  }else{
    if (isModalOpen) {
      return (
        <Project isModalOpen={isModalOpen} handleModalToggle={handleModalToggle} ProjectName={ProjectName} />
      )
    } else {
      return (
        <>
          <div className="container mx-auto scroll-smooth xl:px-32 md:px-10 sm:p-0">
            <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
            <IntroduceSection scrollToSection={scrollToSection} />
            <AboutMeSection />
            <ServicesSection />
            <SkillsSection />
            <ProjectSection handleModalToggle={handleModalToggle} setProjectName={setProjectName} />
            <ContactSection />
            <Footer />
          </div>
        </>
      )
    }
  }
}

export default App;
