// Tools
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoVinted from "../img/vinted_logo.png";
import { Link } from "react-router-dom";

// Components
import SliderRange from "../components/Slider";
import SwitchButton from "../components/Switch";

const Header = ({
  userToken,
  setUser,
  valueRange,
  setValueRange,
  statusSwitch,
  setStatusSwitch,
  valueInputSearch,
  setValueInputSearch,
}) => {
  const handleLogout = () => {
    setUser(null);
  };

  const handleInputSearch = (event) => {
    setValueInputSearch(event.target.value);
  };

  return (
    <header className="header">
      <Link to={"/"}>
        <img src={LogoVinted} alt="logo-vinted" />
      </Link>
      <form>
        <FontAwesomeIcon className="icon-search" icon="search" />
        <input
          type="text"
          placeholder="Recherche des articles"
          value={valueInputSearch}
          onChange={handleInputSearch}
        />
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
      <Link to={"/publish"}>
        <button className="sell-articles-button">Vends tes articles</button>
      </Link>

      <div className="bloc-switch-and-slider">
        <div>
          Trier par prix :
          <SwitchButton
            statusSwitch={statusSwitch}
            setStatusSwitch={setStatusSwitch}
          />
        </div>
        <div>
          Prix entre :
          <SliderRange valueRange={valueRange} setValueRange={setValueRange} />
        </div>
      </div>
    </header>
  );
};

export default Header;
