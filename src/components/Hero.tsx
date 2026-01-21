
import imageHero from "../assets/img-hero-2.png"

import "./Hero.css";

function Hero () {
  return ( 
    <section className="Hero-section">
      <img className="Hero-imageHero"src={imageHero} alt="Illustration du code devenant créativité"/>
      <div className="Hero-link-container" >
        <a href="#projets" className="Hero-link">Projets</a>
        <a href="/cv-joachim.pdf" download="CV_Joachim_masson.pdf" className="Hero-link">CV</a>
        <a href="#contact" className="Hero-link">Contact</a>
      </div>
    </section>)
}

export default Hero
  