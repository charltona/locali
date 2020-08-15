import { loadStripe } from "@stripe/stripe-js";
import { apiRequest } from "./util";
import { getStripePriceId } from "./prices";

let stripe;
// Load the Stripe script
loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY).then(
  (stripeInstance) => {
    // Set stripe so all functions below have it in scope
    stripe = stripeInstance;
  }
);

export async function redirectToCheckout(planId) {
  // Create a checkout session
  const session = await apiRequest("stripe-create-checkout-session", "POST", {
    priceId: getStripePriceId(planId),
  });

  // Ensure if user clicks browser back button from checkout they go to /pricing
  // instead of this page or they'll redirect right back to checkout.
  window.history.replaceState({}, "", "/build?path=pricing");

  // Redirect to checkout
  return stripe.redirectToCheckout({
    sessionId: session.id,
  });
}

export async function redirectToBilling() {
  // Create a billing session
  const session = await apiRequest("stripe-create-billing-session", "POST");

  // Redirect to billing session url
  window.location.href = session.url;
}
