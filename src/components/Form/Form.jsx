import { useState } from 'react';
import './form.styles.scss';

const Form = () => {
  const [inputValues, setInputValues] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form onSubmit={() => { }} className={"form-center"}>
      <div className={"stretch-input"}>
        <input onChange={handleChange} value={inputValues.name} name={"name"} type={"text"} placeholder={"Nome"} />
        <div className={"row-input"}>
          <input onChange={handleChange} value={inputValues.phone} name={"phone"} type="tel" placeholder={"Telefone"} />
          <input onChange={handleChange} value={inputValues.email} name={"email"} type="email" placeholder={"E-mail"} />
        </div>
        <textarea onChange={handleChange} value={inputValues.message} name={"message"} type="text" placeholder={"Mensagem"} row={4} cols={50} />
      </div>

      <div className={"buttons"}>
        <button type={"submit"}>Enviar</button>
      </div>
    </form>
  )
}
export default Form;