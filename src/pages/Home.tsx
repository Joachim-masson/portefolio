import ContactForm from "../components/ContactForm"
import HardSkills from "../components/HardSkills"
import Hero from "../components/Hero"
import IdentityCard from "../components/IdentityCard"
import NavBar from "../components/NavBar"
import Projet from "../components/Projet"
import SoftSkills from "../components/SoftSkills"

import "./Home.css"

function Home () {
  return (
    <>
      <h1>Mon Portfolio</h1>
      <NavBar />
      <Hero />
      <div className="Home-perso1">
        <IdentityCard />
        <SoftSkills />
      </div>
      <HardSkills />
      <Projet />
      <ContactForm />
    </>
  )
}
export default Home;