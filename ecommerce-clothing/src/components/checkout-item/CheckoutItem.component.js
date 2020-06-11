import React from "react";
import "./checkoutItem.styles.scss";
import { connect } from "react-redux";
import {
	removeItem,
	increaseQuantity /*,decreaseQuantity*/,
} from "../../redux/cart/actions";

const CheckoutItem = ({
	item,
	removeItem,
	increaseQuantity,
	//decreaseQuantity,
}) => {
	const { name, imageUrl, price, quantity } = item;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				{" "}
				<span
					className="arrow"
					onClick={() => {
						/*
						item.quantity === 1
							? */ removeItem(
							item
						); /*
							: decreaseQuantity(item);*/
					}}
				>
					&#10094;
				</span>{" "}
				<span className="value">{quantity}</span>{" "}
				<span className="arrow" onClick={() => increaseQuantity(item)}>
					&#10095;
				</span>
			</span>
			<span className="price">{price}</span>
			<div onClick={() => removeItem(item)} className="remove-button">
				{" "}
				&#10005;{" "}
			</div>
		</div>
	);
};

const dispatchToProps = (dispatch) => ({
	removeItem: (item) => dispatch(removeItem(item)),
	increaseQuantity: (item) => dispatch(increaseQuantity(item)),
	//decreaseQuantity: (item) => dispatch(decreaseQuantity(item)),
});

export default connect(null, dispatchToProps)(CheckoutItem);
