import React from "react";
import "./cartDropdown.styles.scss";
import CustomButton from "../customButton/CustomButton.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem.component";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { showCart } from "../../redux/cart/actions";

const CartDropdown = ({ cartItems, history, /*showCart,*/ dispatch }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map((item) => (
						<CartItem key={item.id} item={item} />
					))
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					dispatch(showCart());
					history.push("/checkout");
				}}
			>
				Go To Checkout
			</CustomButton>
		</div>
	);
};

const stateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

// const dispatchToProps = {
// 	showCart,
// };

export default withRouter(
	connect(stateToProps /*dispatchToProps*/)(CartDropdown)
);
