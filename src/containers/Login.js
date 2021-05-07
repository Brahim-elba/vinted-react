import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // history est un tableau
  const history = useHistory();

  const userInfos = {
    email: email,
    password: password,
  };

  const submitLogin = async (event) => {
    event.preventDefault();

    // Création d'une fonction pour s'identifier
    try {
      // Réalisation de la requête post Axios en envoyant les données userInfos
      const response = await axios.post(
        "https://brahim-elba-vinted.herokuapp.com/user/login",
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

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-page">
      <div className="bloc-login-form">
        <p>Se connecter</p>
        <form onSubmit={submitLogin}>
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
            className="button-submit-login"
            type="submit"
            value="Se connecter"
          />
        </form>
        <Link to={"/signup"}>
          <button>Pas encore de compte ? Inscris-toi !</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
