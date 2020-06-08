import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

const StripeButton = (props) => {
  const priceForStrip = props.price * 100;
  const publishableKey = 'pk_test_51GrQmAJK1ggtri62EHcJYHASk7ToqLdFDqLvEmYSxybXVaWFlroLRig01DFStPGCJ0FWArDMGeb7FCD6WeDOKC2900HHNyyrrV';
  const onToken = token => {
    console.log(token);
    toast("Payment successful, delivery in progress");
    setTimeout(()=>{
        window.location.href = '/';
    }, 5000);
    
  };
  return (
    <StripeCheckout
      label={`Pay $${props.price} Now`}
      name="eclothing"
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${props.price}`}
      amount={priceForStrip}
      panelLabel={`Pay $${props.price} Now`}
      token={onToken}
      stripeKey={publishableKey}
    >
        <button type="button" class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
            Pay ${props.price}
        </button>
    </StripeCheckout>
  );
};

StripeButton.propTypes = {
  price: PropTypes.number,
};

export default StripeButton;