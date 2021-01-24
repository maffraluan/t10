import fish from '../assets/fish.png';
import appDesign from '../assets/app-design3.png';
import howUX from '../assets/how-ux.png';
import thumbnail from '../assets/thumbnail.png';


const Portfolio = () => {
  return (
    <div className={"portfolio-content"}>
      <div className={"text-h3"}>
        <h3>Portfolio</h3>
        <span></span>
      </div>

      <div className={"column-content"}>
        <div className={"text-h3"}>
          <h2>Meus trabalhos</h2>
          <span></span>
        </div>
        <div className={"portfolio-row"}>
          <img src={fish} alt="Fish" />
          <img src={appDesign} alt="MockUp" />
          <img src={thumbnail} alt="Web Design Trend" />
          <img src={howUX} alt="UX" />
        </div>
      </div>
    </div>
  )
}

export { Portfolio }