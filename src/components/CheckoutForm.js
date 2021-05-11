// Tools
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({ userId, dataArticlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Récupérer les données du formulaire
    const cardELements = elements.getElement(CardElement);

    // Envoyer ces données à l'API Stripe
    const stripeResponse = await stripe.createToken(cardELements, {
      name: userId,
    });

    // Création d'une variable stockant le token reçu de l'API Stripe
    const stripeToken = stripeResponse.token.id;

    // Envoyer le token au serveur
    const response = await axios.post(
      "https://brahim-elba-vinted.herokuapp.com/payment",
      {
        stripeToken: stripeToken,
        dataArticle: dataArticlePayment,
        userId: userId,
      }
    );

    // Afficher le résultat du serveur à l'utilisateur
    if (response.status === 200) {
      setCompleted(true);
    }
  };

  return completed ? (
    <div className="payment-ok">Paiement validé ! 🥳</div>
  ) : (
    <div className="checkout-form">
      <form onSubmit={handleSubmit}>
        <CardElement className="card-element-payment" />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
