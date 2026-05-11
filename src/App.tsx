import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"

import './App.css'

function App() {
 
  return (
    <>
      <h1>Mon Portfolio</h1>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
