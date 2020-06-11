import React from "react";
import "./cartDropdown.styles.scss";
import CustomButton from "../customButton/CustomButton.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem.component";
import { selectCartItems } from "../../redux/cart/cartSelectors";

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

const stateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default connect(stateToProps, null)(CartDropdown);
