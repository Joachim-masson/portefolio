import { useEffect, useState} from "react";

import ThemeToggle from "./ToggleTheme"
import  {Divide as Hamburger} from "hamburger-react";

import githubIcon from '../assets/HardSkills/github-2.svg';
import linkedinIcon from '../assets/linkedin.svg';
import gmailIcon from '../assets/g-mail.svg';
import logo from '../assets/LogoOnglet.png';

import "./NavBar.css"

function NavBar () {
  const [isOpen, setIsOpen] = useState(false);

  // Pour détecter la taille de l'image dès qu'elle change et envoyer sa valeur dans isMobile
  const [isMobile, setIsMobile] = useState (window.innerWidth);

    useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return( 
    <header className="NavBar-header">
      <a href="#JoachimMasson"><img src={logo} alt="logo de Joachim Masson" className="NavBar-logo"/></a>
      {isMobile < 768 ? 
      <Hamburger toggled={isOpen} toggle={setIsOpen} /> : ""
      }
      <nav className="NavBar-nav" aria-label="Navigation principale">
        <a href="#softskills">SoftSkills</a>
        <a href="#hardskills">HardSkills</a>
        <a href="#projets">Projets</a>
        {/* <a href="#maisaussi">Mais aussi...</a> */}
      </nav>
    

      <nav className="NavBar-external-link"aria-label="Liens externes">
        <a href="https://github.com/Joachim-masson" target="_blank"><img src={githubIcon} alt="GitHub" className="nav-icon" /></a>
        <a href="https://www.linkedin.com/in/joachim-masson-dev" target="_blank"><img src={linkedinIcon} alt="LinkedIn" className="nav-icon" /></a>
        <a href="mailto:joachim.masson.17@gmail.com"><img src={gmailIcon} alt="boîte mail" className="nav-icon" /></a>
      </nav>
      <ThemeToggle />
    </header>
  )
}
export default NavBar;