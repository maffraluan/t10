import page1 from '../assets/Page-1.svg';
import arrow from '../assets/arrow.svg'
import dotted from '../assets/back1.png';

const Services = () => {
  return (
    <div className={"content-services"}>
      <div className={"text-h3"}>
        <h3>Serviços</h3>
        <span></span>
      </div>

      <div className={"column-content"}>
        <div className={"text-h3"}>
          <h2>Proporcionamos uma melhor experiência</h2>
          <span></span>
        </div>

        <div className={'services-row'}>
          <div className={"about-col-1"}>
            <div className={"light-card"}>
              <h3>85%</h3>
              <progress value={85} max={100}></progress>
              <h4>Design UI</h4>
              <span>Photoshop, Illustrator</span>
            </div>
            <img src={dotted} alt="dotted" />
          </div>

          <div className={"about-col-2"}>
            <div className={"red-card"}>
              <div className={"column"}>
                <div className={"eclipse"}>
                  <img src={page1} alt="UI" />
                </div>
                <h3>Design</h3>

                <div className={'hr-row'}>
                  <hr />
                  <hr />
                  <hr />
                </div>

                <p>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</p>

                <button>Saiba mais
                  <span>
                    <img src={arrow} alt="arrow" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Services }