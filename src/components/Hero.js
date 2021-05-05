import PicHero from "../img/img-hero.jpg";

const Hero = () => {
  return (
    <div className="hero-home">
      <img src={PicHero} alt="pic-hero" />
      <div className="bloc-hero">
        <p>Prêts à faire du tri dans vos placards ?</p>
        <button>Commencer à vendre</button>
        <p>Découvrir comment ça marche</p>
      </div>
    </div>
  );
};

export default Hero;
