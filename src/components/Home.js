import "./Home.css"

const Home = () => {
  return (
    <div id="home">
      <div className="presentation">

        <h2 className="about">
          Olá, sou um desenvolvedor Front end
        </h2>
        <p className="description">
          Desenvolvo aplicações web através da programação
        </p>

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