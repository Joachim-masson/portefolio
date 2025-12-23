import ThemeToggle from "./ToggleTheme"

import "./NavBar.css"

function NavBar () {
  return( 
    <header className="NavBar-header">
      <a href="#moi">Joachim Masson</a>
      <nav className="NavBar-nav">
        <a href="#softskills">SoftSkills</a>
        <a href="#hardskills">HardSkills</a>
        <a href="#projets">Projets</a>
        <a href="#formation">Formations</a>
        <a href="#exppro">Experience Pro</a>
        <a href="#maisaussi">Mais aussi...</a>
      </nav>
      <ThemeToggle />
    </header>
  )
}
export default NavBar;