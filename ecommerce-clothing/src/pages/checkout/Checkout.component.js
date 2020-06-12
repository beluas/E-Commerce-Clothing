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

const Checkout = ({ items, total }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>

				<div className="header-block">
					<span>Quantity</span>
				</div>

				<div className="header-block">
					<span>Price</span>
				</div>

				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{items.length ? (
				items.map((item) => (
					<CheckoutItem key={item.id} total={total} item={item} />
				))
			) : (
				<span className="empty-message">Your cart is empty</span>
			)}

			<div className="total">
				<span>TOTAL: ${total}</span>
			</div>
			<StripeCheckoutButton price={total} />
			<div className="test-warning">
				* Please use the following test credit card for payments
				<br />
				4242 4242 4242 4242 - Exp: 01/22 - CVV : 123
			</div>
		</div>
	);
};

const stateToProps = createStructuredSelector({
	items: selectCartItems,
	total: selectTotPrice,
});

export default connect(stateToProps, null)(Checkout);
