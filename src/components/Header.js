import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoVinted from "../img/vinted_logo.png";

const Header = () => {
  return (
    <header className="header-home">
      <img src={LogoVinted} alt="logo-vinted" />
      <form>
        <FontAwesomeIcon className="icon-search" icon="search" />
        <input type="text" placeholder="Recherche des articles" />
      </form>

      <div>
        <button className="signup">S'inscrire</button>
        <button className="login">Se connecter</button>
      </div>
      <button className="sell-articles">Vends tes articles</button>
    </header>
  );
};

export default Header;
