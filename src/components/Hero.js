import PicHero from "../img/img-hero.jpg";
import { Link } from "react-router-dom";

const Hero = ({ userToken }) => {
  return (
    <div className="hero-home">
      <img src={PicHero} alt="pic-hero" />
      <div className="bloc-hero">
        <p>Prêts à faire du tri dans vos placards ?</p>
        {userToken ? (
          <Link to={"/publish"}>
            <button>Commencer à vendre</button>
          </Link>
        ) : (
          <Link to={"/signup"}>
            <button>Commencer à vendre</button>
          </Link>
        )}

        <p>Découvrir comment ça marche</p>
      </div>
    </div>
  );
};

export default Hero;
