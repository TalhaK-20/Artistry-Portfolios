import { Github, Linkedin } from "react-bootstrap-icons";
import Reveal from "./animated/Reveal";

export default function Footer() {
    return (
        <div className="font-second-font pb-4 flex justify-between">
            <Reveal RevealDelay={1} TextDelay={1.5}><span> © Designed and Developed by Talha Khalid 😊</span></Reveal>
            <Reveal RevealDelay={1} TextDelay={1.5}>
                <span className="flex xl:mr-16">
                    <a
                        title="github"
                        href="https://github.com/talhak-20"
                        className="group"
                    >
                        <Github
                            size={30}
                            className="text-fourth-color group-hover:text-main-color transition duration-200 ease-linear p-1"
                        />
                    </a>
                    <a
                        title="linkdin"
                        href="https://www.linkedin.com/in/talhak20"
                        className="group"
                    >
                        <Linkedin
                            size={30}
                            className="text-fourth-color group-hover:text-main-color transition duration-200 ease-linear p-1"
                        />
                    </a>
                </span>
            </Reveal>
        </div>
    );
}