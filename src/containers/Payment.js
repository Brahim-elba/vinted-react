// Tools
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Création d'une variable avec la clé publique de l'API Stripe
const stripePromise = loadStripe(
  "pk_test_51IpudrFMUjGxjJsvxwjTqupGiudSQxOHfgv4kDbucOsJ5mwT6GJ33i1mcCBC30PiX0bv20dxYoyE5KipmWJk15AC00d8TQcjVz"
);

const Payment = () => {
  return (
    <div>
      Payment
      <Elements stripe={stripePromise}></Elements>
    </div>
  );
};

export default Payment;
