import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // history est un tableau
  const history = useHistory();

  const userInfos = {
    email: email,
    password: password,
  };

  const submitLogin = (event) => {
    event.preventDefault();

    // On crée une requête
    // useEffect(() => {
    // Création d'une fonction pour créer un compte
    const logUser = async () => {
      try {
        // Réalisation de la requête post Axios en envoyant les données userInfos
        const response = await axios.post(
          "https://brahim-elba-vinted.herokuapp.com/user/login",
          userInfos
        );
        // On récupère la réponse
        // On crée une variable token avec le token récupéré et on le passe en paramètre de la fonction setUser
        const token = response.data.token;
        setUser(token);
        // Revenir à la page d'accueil
        history.push("/");
      } catch (error) {
        console.log(error.message);
      }
    };
    logUser();
    // });
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

          <input type="submit" value="Se connecter" />
        </form>
        <p>Tu as déjà un compte ? Connecte-toi !</p>
      </div>
    </div>
  );
};

export default LoginPage;
