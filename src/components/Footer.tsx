import { NavLink } from "react-router-dom"
import "./Footer.css"

function Footer () {

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }

  return (
  <footer className="Footer">
    <NavLink to="/" className="Footer-a" onClick={scrollToTop}> copyright © 2026 / Joachim Masson </NavLink>
    <NavLink to="/legalNotice" className="Footer-a">Mention légales</NavLink>
    <a href="mailto:joachim.masson.17@gmail.com"className="Footer-a">contact to: joachim.masson.17@gmail.com </a>
  </footer >
  )
}

export default Footer