import React from "react";
import "./cartDropdown.styles.scss";
import CustomButton from "../customButton/CustomButton.component";

const CartDropdown = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items" />
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	);
};

export default CartDropdown;
