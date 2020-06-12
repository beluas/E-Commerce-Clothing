import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51Gt8swF2iRRkeHLAwgRUlWjfswuRKl9HicYS4V6w7iheVzeliOvzsastPLaKKfO3MlLvcFDQ2hUSQ0FZJM4TikqS00ZGmt4LfU";

	const onToken = (token) => {
		alert("Payment Successful");

		console.log(token);
	};

	return (
		<StripeCheckout
			label="Pay Now"
			stripeKey={publishableKey}
			name="E-commerce clothing"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			allowRememberMe
			description={`Your total is ${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
		/>
	);
};

export default StripeCheckoutButton;
