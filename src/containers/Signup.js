import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const SignupPage = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [newsletterSubscription, setNewsletterSubscription] = useState(false);

  // history est un tableau
  const history = useHistory();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleNewsletter = () => {
    setNewsletterSubscription(!newsletterSubscription);
  };

  const userInfos = {
    username: username,
    email: email,
    password: password,
    phone: phone,
    checkNewsletter: newsletterSubscription,
  };

  const submitSignUp = async (event) => {
    event.preventDefault();

    // Création d'une fonction pour créer un compte
    try {
      // Réalisation de la requête post Axios en envoyant les données userInfos
      const response = await axios.post(
        "https://brahim-elba-vinted.herokuapp.com/user/signup",
        userInfos
      );
      // On récupère la réponse et le token contenu dans la réponse si il est présent
      // On le passe en paramètre de la fonction setUser
      if (response.data.token) {
        setUser(response.data.token);
      }
      // Revenir à la page d'accueil
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signup-page">
      <div className="bloc-signup-form">
        <p>S'inscrire</p>
        <form onSubmit={submitSignUp}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={handleUsername}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePassword}
          />
          <input
            type="text"
            placeholder="Téléphone"
            value={phone}
            onChange={handlePhone}
          />
          <label>
            <input
              type="checkbox"
              name="check-newsletter"
              onChange={handleNewsletter}
            />
            S'inscrire à notre newsletter
          </label>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes et
            Conditions et Politique de confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <input
            className="button-submit-signup"
            type="submit"
            value="S'inscrire"
          />
        </form>
        <Link to={"/login"}>
          <button>Tu as déjà un compte ? Connecte-toi !</button>
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
