import freelancer from '../assets/freelancer.png';
import dotted from '../assets/back1.png';

const About = () => {
  return (
    <div className={"content"}>
      <div className={"text-h3"}>
        <h3>Sobre nós</h3>
        <span></span>
      </div>

      <div className={"about-row"}>
        <div className={"about-col-1"}>
          <img src={freelancer} alt="Freelancer" className={"freelancer-image"} />
          <img src={dotted} alt="dotted" className={"dotted-image"} />
        </div>

        <div className={"about-col-2"}>
          <span>Qual o seu próximo projeto?</span>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat consequat mauris nunc congue nisi. Lorem ipsum dolor sit amet. Ut diam quam nulla porttitor massa id neque.</p>

          <button>Download CV</button>
        </div>
      </div>
    </div>
  )
}

export { About }