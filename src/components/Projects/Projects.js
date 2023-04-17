import "./Projects.css"

// imgs
import blogImg from "./imgs/blog.jpg"
import moviesImg from "./imgs/moviesimg.png"
import financeappImg from "./imgs/financeapp.png"


const Projects = () => {

    

  return (
    <div id="projects">
        <h1 className="title"><span>Proj</span>ects</h1>

        <ul>
            <li>
                <div className="title_and_description">
                <img className="projectImg" src={blogImg} alt="Blog" />
                    <h3 className="project-title">Blog</h3>
                    <p className="project-description">Esse projeto eu fiz com HTML, CSS e JavaScript. Esse projeto foi feito no início dos meus estudos. Apenas para praticar o que eu estava aprendendo. Ele se trata de um clone de uma página que foi proposta como desafio.</p>
                </div>

                <a className="btn" href="https://joaosblog.netlify.app" target="_blank">Ver projeto</a>
            </li>

            <li>
            <div className="title_and_description">

              <img className="projectImg" src={moviesImg} alt="Movies" />

              <h3 className="project-title">Movies</h3>
              <p className="project-description">
                Nesse projeto eu utilizei tecnologias/bibliotecas como HTML, CSS, JavaScript, ReactJS, Context API, Git/Github e a API do The Movie Database. Esse foi um projeto em ReactJS integrado com API e foi uma ótima experiência para o meu aprendizado. O projeto consiste em uma galeria de filmes, onde você tem a possibilidade de pesquisar pelo filme, ver detalhes sobre o filme e ter acesso a alguns filmes no catálogo de populares.
              </p>
            </div>

              <a href="https://movies-nine-psi.vercel.app" target="_blank" className="btn">Ver projeto</a>
            </li>
            
            <li>
            <div className="title_and_description">

              <img className="projectImg" src={financeappImg} alt="Finance App" />

              <h3 className="project-title">Finance App</h3>
              <p className="project-description">Nesse projeto eu utilizei tecnologias/bibliotecas como HTML, CSS, JavaScript, ReactJS, Context API, Firebase, Git/Github e React Icons. Esse foi um projeto mais completo com integração de banco de dados, cadastro, login e logout de usuários. O projeto consiste em um aplicativo de controle financeiro. Você tem a possibilidade de colocar uma breve descrição, a quantia e declarar se o valor é do tipo de entrada ou saída, com dados que atualizam à interação do usuário.</p>
            </div>

              <a href="https://financeapp-iota.vercel.app" target="_blank" className="btn">Ver projeto</a>
            </li>
        </ul>

    </div>
  )
}

export default Projects