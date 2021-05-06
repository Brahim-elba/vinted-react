import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoVinted from "../img/vinted_logo.png";
import { Link } from "react-router-dom";

const Header = ({ userToken, setUser }) => {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header className="header">
      <Link to={"/"}>
        <img src={LogoVinted} alt="logo-vinted" />
      </Link>
      <form>
        <FontAwesomeIcon className="icon-search" icon="search" />
        <input type="text" placeholder="Recherche des articles" />
      </form>

      {userToken ? (
        <div>
          <button className="logout" onClick={handleLogout}>
            Se déconnecter
          </button>
        </div>
      ) : (
        <div>
          <Link to={"/signup"}>
            <button className="signup">S'inscrire</button>
          </Link>
          <Link to={"/login"}>
            <button className="login">Se connecter</button>
          </Link>
        </div>
      )}

      <button className="sell-articles">Vends tes articles</button>
    </header>
  );
};

export default Header;
