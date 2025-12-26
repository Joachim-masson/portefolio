
import imageHero from "../assets/img-hero-2.png"

import "./Hero.css";

function Hero () {
  return ( 
    <section className="Hero-section">
      <img className="Hero-imageHero"src={imageHero} alt="Illustration du code devenant créativité"/>
      <div className="Hero-link-container" >
        <a href="" className="Hero-link">Projets</a>
        <a href="" className="Hero-link">CV</a>
      </div>
    </section>)
}

export default Hero
  