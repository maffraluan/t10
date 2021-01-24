import logo from '../../assets/logo.png';
import './header.styles.scss';


function Header() {
  return (
    <header>
      <div className={'logo'}>
        <img src={logo} alt={"logo"} />
      </div>
      <nav className={'links'}>
        <a href={"/"}>Home</a>
        <a href={"about"}>Sobre nós</a>
        <a href={"services"}>Serviços</a>
        <a href={"portfolio"}>Portfólio</a>
        <a href={"contact"}>Contato</a>
      </nav>
    </header>
  )
}

export default Header;