import Formations from "../components/Formations"
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
      <div>
        <Formations />
      </div>
    </>
  )
}
export default Home;