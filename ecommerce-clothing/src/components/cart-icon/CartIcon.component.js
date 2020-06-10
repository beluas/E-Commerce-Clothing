import React from "react";
import "./cartIcon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { connect } from "react-redux";
import { showCart } from "../../redux/cart/actions";

const CartIcon = ({ showCart }) => {
	return (
		<div className="cart-icon" onClick={showCart}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count"> 0 </span>
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

export default connect(null, dispatchToProps)(CartIcon);
