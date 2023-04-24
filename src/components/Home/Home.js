import "./Home.css"

// hooks
import { useRef, useLayoutEffect, useState } from "react"
import { Link } from "react-router-dom"

export let balls = document.querySelectorAll(".ball")

const Home = () => {

  const [downloadBtnPosition, setDownloadBtnPosition] = useState("")
  const downloadBtn = useRef(null)

  const handleHomeScroll = (e) => {
    if(downloadBtnPosition > window.scrollY){
      balls.forEach(ball => {
        ball.style.backgroundColor = "transparent"
      })

      balls[0].style.backgroundColor = "#FF4A57"
    }

  }

  useLayoutEffect(() => {
    if(downloadBtn) {
      setDownloadBtnPosition(downloadBtn.current.offsetTop)

      window.addEventListener("scroll", handleHomeScroll)
      balls = document.querySelectorAll(".ball")
  }
})

  return (
    <div id="home">
      <div className="presentation">

        <h2 className="about">
          Olá, sou um desenvolvedor Front end
        </h2>
        <p className="description">
          Desenvolvo aplicações web através da programação
        </p>

        <a href="https://drive.google.com/u/0/uc?id=1lXyp63dGywNLt-gncwoLiMMFL_fZuSVh&export=download" download="curriculo.docx">
          <button ref={downloadBtn} className="btn">Download CV</button>
        </a>

      </div>
      
      <div className="page-location">

        <div className="ball firstball"></div>
        <div className="bar"></div>

        <div className="ball secondball"></div>

        <div className="bar"></div>
        <div className="ball thirdball"></div>

      </div>


    </div>
  )
}

export default Home