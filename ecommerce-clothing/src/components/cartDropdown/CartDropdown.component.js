import React from "react";
import "./cartDropdown.styles.scss";
import CustomButton from "../customButton/CustomButton.component";
import { connect } from "react-redux";
import CollectionItem from "../collection-item/CollectionItem.component";

const CartDropdown = ({ items }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{items
					? items.map((item) => (
							<CollectionItem
								key={item.id}
								item={item}
								button={false}
							/>
					  ))
					: null}
			</div>
			<CustomButton>Go To Checkout</CustomButton>
		</div>
	);
};

const stateToProps = ({ cart: { items } }) => ({
	items,
});

export default connect(stateToProps, null)(CartDropdown);
