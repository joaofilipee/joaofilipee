import "./Skills.css"

// Icons
import { DiReact, DiGit, DiGithubBadge, DiHtml5, DiCss3 } from "react-icons/di"
import { SiJavascript, SiTypescript } from "react-icons/si"

// hooks
import { useRef, useState, useLayoutEffect } from "react"

const Skills = () => {

  const [scroll, setScroll] = useState(0)
  const titleRef = useRef(null)

  const cards = document.querySelectorAll(".card")

  // location
  const balls = document.querySelectorAll(".ball")

  const handleSkillScroll = event => {
    
    if(scroll > window.scrollY && scroll < window.scrollY + window.screen.height - 300) {
      cards.forEach(card => card.classList.add("appearing"))

      balls.forEach(ball => {
        ball.style.backgroundColor = "transparent"
      })
      balls[1].style.backgroundColor = "#FF4A57"
    }
    
  }

  useLayoutEffect(() => {
    setScroll(titleRef.current.offsetTop)

    if(scroll > 0) {
      window.addEventListener("scroll", handleSkillScroll)
    }
  })

  return (
    <div id="skill">
        <h1 id="skills" ref={titleRef} className="title"><span>Skill</span>-Set</h1>
        <section className="skills">

            <div className="card">

              <div className="icon react"><DiReact /></div>

              <h4 className="technology-name">React</h4>
              <p className="technology-description">
                React é uma biblioteca Javascript utilizada para criar interfaces mais complexas de forma mais simples.
              </p>
            </div>

            <div className="card">
              <div className="icon ts"> <SiTypescript /> </div>

              <h4 className="technology-name">Typescript</h4>
              <p className="technology-description">Typescript é um superset de Javascript para ajudar o desenvolvimento de softwares adicionando tipagem estática.</p>
            </div>

            <div className="card">
                <div className="icon git"><DiGit /></div>
              
                <h4 className="technology-name">Controle de versões Git</h4>
                <p className="technology-description">
                  O ponto focal do Git é ser um sistema de controle e organização que armazena e revisa projetos.</p>
            </div>

            <div className="card">
              <div className="icon git-hub"><DiGithubBadge /></div>

              <h4 className="technology-name">Github</h4>
              <p className="technology-description">
                É uma plataforma que nos permite hospedagem prática de código-fonte e arquivos em nuvem.
              </p>
            </div>

            <div className="card">
              <div className="icon js"> <SiJavascript /> </div>

              <h4 className="technology-name">JavaScript</h4>
              <p className="technology-description">JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web.</p>
            </div>

            <div className="card">
              <div className="icon html"> <DiHtml5 /> </div>

              <h4 className="technology-name">HTML</h4>
              <p className="technology-description">HTML é uma linguagem de marcação de texto que utilizamos para a construção de páginas na Web.</p>
            </div>

            <div className="card">
              <div className="icon css"> <DiCss3 /> </div>

              <h4 className="technology-name">CSS3</h4>
              <p className="technology-description">É uma linguagem que permite que você especifique um elemento ou mais para aplicar regras de estilo.</p>
            </div>

            

        </section>
    </div>
  )
}

export default Skills