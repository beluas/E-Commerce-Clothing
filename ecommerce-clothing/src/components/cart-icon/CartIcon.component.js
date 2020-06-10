import React from "react";
import "./cartIcon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { connect } from "react-redux";
import { showCart } from "../../redux/cart/actions";

const CartIcon = ({ showCart, totItems }) => {
	return (
		<div className="cart-icon" onClick={showCart}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count"> {totItems} </span>
		</div>
	);
};

const dispatchToProps = {
	showCart,
};

/*

const dispatchToProps = dispatch => 
	showCart: () => dispatch(showCart())
}

*/

const stateToProps = ({ cart: { totItems } }) => ({
	totItems,
});

export default connect(stateToProps, dispatchToProps)(CartIcon);
