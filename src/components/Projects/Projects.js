import "./Projects.css"

// imgs
import blogImg from "./imgs/oi.jpg"


const Projects = () => {

    

  return (
    <div id="projects">
        <h1 className="title"><span>Proj</span>ects</h1>

        <ul>
            <li>
                <img className="projectImg" src={blogImg} alt="" />
               
                <h3 className="project-title">Blog</h3>
                <p className="project-description">Esse projeto eu fiz com HTML, CSS e JavaScript. Esse projeto foi feito no início dos meus estudos. Apenas para praticar o que eu estava aprendendo. Ele se trata de um clone de uma página que foi proposta como desafio.</p>

                <a className="btn" href="https://joaosblog.netlify.app" target="_blank">Ver projeto</a>
            </li>
            <li>2</li>
            <li>3</li>
        </ul>

    </div>
  )
}

export default Projects