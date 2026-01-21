import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import HardSkills from "../components/HardSkills"
import Hero from "../components/Hero"
import IdentityCard from "../components/IdentityCard"
import Projet from "../components/Projet"
import SoftSkills from "../components/SoftSkills"

import "./Home.css"

function Home () {
  return (
    <>
      <Hero />
      <div className="Home-perso1">
        <IdentityCard />
        <SoftSkills />
      </div>
      <HardSkills />
      <Projet />
      <ContactForm />
      <Footer />
    </>
  )
}
export default Home;