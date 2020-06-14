import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { connect } from "react-redux";
import { showCart } from "../../redux/cart/actions";
import {
	/*selectCartItems,
	selectItemsCount,*/
	selectTotItems,
} from "../../redux/cart/cartSelectors";

import {
	CartIconContainer,
	ShoppingIconContainer,
	ItemCountContainer,
} from "./cartIcon.styles";

import { createStructuredSelector } from "reselect";

const CartIcon = ({ showCart, totItems }) => {
	return (
		<CartIconContainer onClick={showCart}>
			<ShoppingIconContainer>
				{" "}
				<ShoppingIcon />
			</ShoppingIconContainer>
			<ItemCountContainer> {totItems} </ItemCountContainer>
		</CartIconContainer>
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

const stateToProps = createStructuredSelector({
	//totItems: selectItemsCount,
	//OR
	totItems: selectTotItems,
});

export default connect(stateToProps, dispatchToProps)(CartIcon);
