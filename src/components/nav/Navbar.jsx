import { Link } from "react-router-dom"
import "./Navbar.style"
import Nav, { Brand, Menü, MenüLink, Hamburger } from "./Navbar.style"
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from "react"



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>{"<Clarusway/>"}</i>
        <span>Recipe</span>
      </Brand>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu/>
      </Hamburger>


      <Menü isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenüLink to="/">Home</MenüLink>
        <MenüLink to="about">About</MenüLink>
        <MenüLink to="register">Register</MenüLink>
        <MenüLink to="Logout" onClick={() => sessionStorage.clear()}>Logout</MenüLink>
      </Menü>
    </Nav>

  )
}

export default Navbar