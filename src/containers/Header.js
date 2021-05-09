import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoVinted from "../img/vinted_logo.png";
import { Link } from "react-router-dom";
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

      <button className="sell-articles">Vends tes articles</button>
      <div className="bloc-switch-and-slider">
        <div>
          Trier par :
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
