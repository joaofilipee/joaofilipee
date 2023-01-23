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
        <NavLink>Projetos</NavLink>
        <NavLink>Contato</NavLink>
        <NavLink>Skills</NavLink>
        </div>
    </nav>
  )
}

export default Navbar