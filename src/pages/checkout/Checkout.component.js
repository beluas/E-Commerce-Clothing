import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import {
	selectCartItems,
	selectTotPrice,
} from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";
import StripeCheckoutButton from "../../components/stripeButton/StripeButton.component";
import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	TotalContainer,
	TextWarningContainer,
} from "./checkout.styles";

const Checkout = ({ items, total }) => {
	return (
		<CheckoutPageContainer>
			<CheckoutHeaderContainer>
				<HeaderBlockContainer>
					<span>Product</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Description</span>
				</HeaderBlockContainer>

				<HeaderBlockContainer>
					<span>Quantity</span>
				</HeaderBlockContainer>

				<HeaderBlockContainer>
					<span>Price</span>
				</HeaderBlockContainer>

				<HeaderBlockContainer>
					<span>Remove</span>
				</HeaderBlockContainer>
			</CheckoutHeaderContainer>
			{items.length ? (
				items.map((item) => (
					<CheckoutItem key={item.id} total={total} item={item} />
				))
			) : (
				<span className="empty-message">Your cart is empty</span>
			)}

			<TotalContainer>
				<span>TOTAL: ${total}</span>
			</TotalContainer>
			<StripeCheckoutButton price={total} />
			<TextWarningContainer>
				* Please use the following test credit card for payments
				<br />
				4242 4242 4242 4242 - Exp: 01/22 - CVV : 123
			</TextWarningContainer>
		</CheckoutPageContainer>
	);
};

const stateToProps = createStructuredSelector({
	items: selectCartItems,
	total: selectTotPrice,
});

export default connect(stateToProps, null)(Checkout);
