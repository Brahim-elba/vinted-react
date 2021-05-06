import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignupPage = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [newsletterSubscription, setNewsletterSubscription] = useState(false);
  //   const [dataUser, setDataUser] = useState(null);

  // history est un tableau
  const history = useHistory();

  const userInfos = {
    username: username,
    email: email,
    password: password,
    phone: phone,
    // checkNewsletter: newsletterSubscription,
  };

  const submitSignUp = (event) => {
    event.preventDefault();

    // On crée une requête
    // useEffect(() => {
    // Création d'une fonction pour créer un compte
    const createAccount = async () => {
      try {
        // Réalisation de la requête post Axios en envoyant les données userInfos
        const response = await axios.post(
          "https://brahim-elba-vinted.herokuapp.com/user/signup",
          userInfos
        );
        // On récupère la réponse
        // setDataUser(response.data); // Asynchrone
        console.log(response.data);
        // alert("Merci pour votre formulaire");
        // On crée une variable token avec le token récupéré et on le passe en paramètre de la fonction setUser
        const token = response.data.token;
        setUser(token);
        // Revenir à la page d'accueil
        history.push("/");
      } catch (error) {
        console.log(error.message);
      }
    };
    createAccount();
    // }, [userInfos]);
  };

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
          {/* <input
            type="checkbox"
            name="check-newsletter"
            onChange={handleNewsletter}
          />
          <label htmlFor="check-newsletter">
            S'inscrire à notre newsletter
          </label> */}
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes et
            Conditions et Politique de confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <input type="submit" value="S'inscrire" />
        </form>
        <p>Tu as déjà un compte ? Connecte-toi !</p>
      </div>
    </div>
  );
};

export default SignupPage;
