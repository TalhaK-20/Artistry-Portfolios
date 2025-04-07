import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            {/* Logo on the left */}
            <div className="flex items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={70} height={70} alt="logo" />
                </a>
            </div>
            {/* Social icons on the right */}
            <div className="m-8 flex items-center justify-center gap-4 text-3xl">
                <a href="/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="/" target="_blank" aria-label="Github" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                    <FaTwitterSquare />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
