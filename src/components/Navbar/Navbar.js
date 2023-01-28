import "./Navbar.css"

// hooks
import { NavLink } from "react-router-dom"
import { useRef, useEffect } from "react"

// icons
import { AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {

  const navbar = useRef(null)

  const openOrCloseNavbar = (e) => {
    navbar.current.classList.toggle("opened")
    
  }

  return (
    <nav className="nav-bar">
        <div className="computer-navbar">
          <div className="name">
              <NavLink to="/">J<span className="red">o</span>ão</NavLink>
          </div>
          <div className="items">
            <NavLink to="/">Home</NavLink>
            <a href="#skills">Skills</a>
            <NavLink to="/projects">Projetos</NavLink>
            <a href="#contact">Contato</a>
          </div>
        </div>

        <div className="mobile-navbar" ref={navbar}>

          <div className="navbar-content">
            <div className="name">
                <NavLink to="/">J<span className="red">o</span>ão</NavLink>
            </div>
            <div className="menu-div" >

                <button>
                   <AiOutlineMenu onClick={openOrCloseNavbar} />
                </button>
            </div>
          </div>

          <div className="mobile-navbar-links">

            <div className="mobile-items">
                <NavLink to="/"> <span className="red">H</span>ome</NavLink>
                <a href="#skills"><span className="red">S</span>kills</a>
                <NavLink to="/projects"><span className="red">P</span>rojetos</NavLink>
                <a href="#contact"><span className="red">C</span>ontato</a>
            </div>

          </div>
          
        </div>

    </nav>
  )
}

export default Navbar