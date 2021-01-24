import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButon = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey =
    "pk_test_51ID58oALX2b0SDa6NN9DgxJzENdaBMXwkrfUPGLJlIgzZrBjCxnAXCG1rBBxmNuZwM05aF04nwdSawHWpsBqCEMa00Xi4BFoid";

  const onToken = (token) => {
    console.log(token);

    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripeCheckoutButon;
