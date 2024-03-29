import "./Navbar.css"

// hooks
import { NavLink } from "react-router-dom"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

// icons
import { AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {

  const navigate = useNavigate()

  const navbar = useRef(null)

  const openOrCloseNavbar = (e) => {
    navbar.current.classList.toggle("opened")
  }

  const navigateToSkillsOrContact = () => {
    navigate("/")
  }


  return (
    <nav className="nav-bar">
        <div className="computer-navbar">
          <div className="name">
              <NavLink to="/">J<span className="red">o</span>ão</NavLink>
          </div>
          <div className="items">
            <NavLink to="/">Home</NavLink>
            <a onClick={navigateToSkillsOrContact} href="#skills">Skills</a>
            <NavLink to="/projects">Projetos</NavLink>
            <a onClick={navigateToSkillsOrContact} href="#contact">Contato</a>
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
                <NavLink onClick={openOrCloseNavbar} to="/"> <span className="red">H</span>ome</NavLink>

                <a onClick={() => { 
                  openOrCloseNavbar()
                  navigateToSkillsOrContact()
                 }} href="#skills"><span className="red">S</span>kills</a>

                <NavLink onClick={openOrCloseNavbar} to="/projects"><span className="red">P</span>rojetos</NavLink>
                <a onClick={() => {
                  openOrCloseNavbar()
                  navigateToSkillsOrContact()
                }} href="#contact"><span className="red">C</span>ontato</a>
            </div>

          </div>
          
        </div>

    </nav>
  )
}

export default Navbar