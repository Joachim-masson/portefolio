import { NavLink } from "react-router-dom"
import "./Footer.css"

function Footer () {
  return (
  <footer className="Footer">
    <p className="Footer-p"> copyright © 2026 / Joachim Masson </p>
    <NavLink to="/legalNotice" className="Footer-a">Mention légales</NavLink>
    <p className="Footer-p">contact to: joachim.masson.17@gmail.com </p>
  </footer >
  )
}

export default Footer