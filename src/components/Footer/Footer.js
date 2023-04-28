import "./Footer.css"

// icons
import { AiOutlineCopyrightCircle, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"
import { DiGithubBadge } from "react-icons/di"

const Footer = () => {
  return (
    <div id="footer">
        <div className="copyright">
            <p>Copyright</p>
        </div>

        <div className="socials">
            <a href="mailto:joao1filipe@outlook.com"> <AiOutlineMail className="email" /> </a>

            <a href="https://github.com/joaofilipee?tab=repositories" target="_blank"> <DiGithubBadge className="gitHub" /> </a>

            <a href="https://www.linkedin.com/in/joão-m-84203a126/" target="_blank"> <AiFillLinkedin className="linkedin" /> </a>
        </div>
    </div>
  )
}

export default Footer