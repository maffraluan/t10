import Header from '../components/Header/Header';
import homeSVG from '../assets/2905211.svg';

import './pages.styles.scss';
import { About, Services, Portfolio, Contact } from './index';

const Home = () => {
  return (
    <div className={"container app"}>
      <Header />

      <div className={"home-row"}>
        <div className={"home-col-1"}>
          <h2>Inovação, Design e</h2> <br />
          <h1>Experiência</h1>
          <span>Sempre a frente em soluções digitais</span>
          <button>Saiba mais</button>
        </div>

        <div className={"home-col-2"}>
          <img src={homeSVG} alt="SGV" />
        </div>
      </div>

      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  )
}

export { Home }