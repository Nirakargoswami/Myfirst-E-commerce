import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Stripecheckout_button = (props) => {
 const Price = props.price;

  const Publishablekey = "pk_test_N1NAxtOVUphMaekbByewUhkU00J8ELSUXR";
console.log(Price)
  return (
    <StripeCheckout
      // the pop-in header title
      description="Big clone of flipcart" // the pop-in header subtitle
      image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
      ComponentClass="div"
      panelLabel="Give Money" //
      amount= {Price} // cents
      currency="IDR"
      stripeKey={Publishablekey}
      email="flipcartclonemadebyme@gmail.com"
     
      shippingAddress
      billingAddress
    ></StripeCheckout>
  );
};

export default Stripecheckout_button;
