import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav-bar">
        <div className="name">
            <NavLink to="/">J<span className="red">o</span>ão</NavLink>
        </div>
        <div className="items">
        <NavLink to="/">Home</NavLink>
        <a href="#skills">Skills</a>
        <NavLink to="/projects">Projetos</NavLink>
        <a href="#contact">Contato</a>
        </div>
    </nav>
  )
}

export default Navbar