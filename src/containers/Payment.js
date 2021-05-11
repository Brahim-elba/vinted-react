// Tools
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import CheckoutForm from "../components/CheckoutForm";

// Création d'une variable avec la clé publique de l'API Stripe
const stripePromise = loadStripe(
  "pk_test_51IpudrFMUjGxjJsvxwjTqupGiudSQxOHfgv4kDbucOsJ5mwT6GJ33i1mcCBC30PiX0bv20dxYoyE5KipmWJk15AC00d8TQcjVz"
);

const Payment = ({ userId }) => {
  const { id } = useParams();
  const [dataArticlePayment, setDataArticlePayment] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const shippingCost = 6;
  const protectionBuyers = 3;
  let totalBuy = shippingCost + protectionBuyers;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://brahim-elba-vinted.herokuapp.com/offer/${id}`
        );
        setDataArticlePayment(response.data);
        console.log(dataArticlePayment);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id, dataArticlePayment]);

  return isLoading ? (
    <div className="spin-loading">
      <FontAwesomeIcon icon="spinner" spin />
    </div>
  ) : (
    <div className="payment-page">
      <div className="payment-page-form">
        <div className="payment-form-top">
          <p>Résumé de la commande</p>
          <div>
            <p>Commande</p>
            <p>{dataArticlePayment.product_price.toFixed(2)} €</p>
          </div>
          <div>
            <p>Frais protection acheteurs</p>
            <p>{protectionBuyers.toFixed(2)} €</p>
          </div>
          <div>
            <p>Frais de port</p>
            <p>{shippingCost.toFixed(2)} €</p>
          </div>
        </div>
        <div className="payment-form-middle">
          <div>
            <p>Total</p>
            <p>
              {(
                dataArticlePayment.product_price +
                shippingCost +
                protectionBuyers
              ).toFixed(2)}{" "}
              €
            </p>
          </div>
          <p>
            Il ne vous reste plus qu'une étape pour vous offrir{" "}
            {dataArticlePayment.product_name}. Vous allez payer {totalBuy} €
            (frais de protection et frais de port inclus).
          </p>
        </div>
        <div className="payment-form-bottom">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              userId={userId}
              dataArticlePayment={dataArticlePayment}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
