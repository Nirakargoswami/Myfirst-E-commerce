import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Stripecheckout_button = () => {
  const price = "100rs";
  const Tokan = () => {
    alert(`you are goin to pahy ${price}`);
  };
  const Publishablekey = "pk_test_N1NAxtOVUphMaekbByewUhkU00J8ELSUXR";

  return (
    <StripeCheckout
      // the pop-in header title
      description="Big clone of flipcart" // the pop-in header subtitle
      image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
      ComponentClass="div"
      panelLabel="Give Money" //
      amount={price} // cents
      currency="USD"
      stripeKey={Publishablekey}
      email="flipcartclonemadebyme@gmail.com"
      token={Tokan}
      shippingAddress
      billingAddress
    ></StripeCheckout>
  );
};

export default Stripecheckout_button;
