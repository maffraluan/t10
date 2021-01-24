import map from '../assets/map.png';
import dotted from '../assets/back1.png';

import Form from '../components/Form/Form'

const Contact = () => {
  return (
    <div className={"content-contact"}>
      <img className={"contact-map-image"} src={map} alt="Map" />
      <div className={"text-h3"}>
        <h3>Contato</h3>
        <span></span>
      </div>

      <div className={"column-content"}>
        <div className={"text-h3"}>
          <h2>Envia sua mensagem</h2>
          <span></span>
        </div>
      </div>

      <div className={"d-flex"}>
        <div className={"form-content"}>
          <Form />
        </div>
      </div>
      <img className={"contact-dotted-image"} src={dotted} alt="Dotted" />
    </div>
  )
}

export { Contact }

/* <img className={"dotted-image"} src={map} alt="dotted" />  */