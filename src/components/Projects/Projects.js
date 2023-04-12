import "./Projects.css"

// imgs
import blogImg from "./imgs/blog.jpg"
import moviesImg from "./imgs/moviesimg.png"


const Projects = () => {

    

  return (
    <div id="projects">
        <h1 className="title"><span>Proj</span>ects</h1>

        <ul>
            <li>
                <img className="projectImg" src={blogImg} alt="Blog" />
               
                <h3 className="project-title">Blog</h3>
                <p className="project-description">Esse projeto eu fiz com HTML, CSS e JavaScript. Esse projeto foi feito no início dos meus estudos. Apenas para praticar o que eu estava aprendendo. Ele se trata de um clone de uma página que foi proposta como desafio.</p>

                <a className="btn" href="https://joaosblog.netlify.app" target="_blank">Ver projeto</a>
            </li>

            <li>
              <img className="projectImg" src={moviesImg} alt="Movies" />

              <h3 className="project-title">Movies</h3>
              <p className="project-description">
                Nesse projeto eu utilizei tecnologias/conhecimentos em HTML, CSS, JavaScript, ReactJS, Context API, Git/Github e a API do The Movie Database. Esse foi um projeto em ReactJS integrado com API e foi uma ótima experiência para o meu aprendizado.
              </p>

              <a href="https://movies-nine-psi.vercel.app" target="_blank" className="btn">Ver projeto</a>
            </li>
            
        </ul>

    </div>
  )
}

export default Projects