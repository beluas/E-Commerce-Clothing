import React from "react";
import "./cartDropdown.styles.scss";
import CustomButton from "../customButton/CustomButton.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem.component";

const CartDropdown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems
					? cartItems.map((item) => (
							<CartItem key={item.id} item={item} />
					  ))
					: null}
			</div>
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	);
};

const stateToProps = ({ cart: { items } }) => ({
	cartItems: items,
});

export default connect(stateToProps, null)(CartDropdown);
