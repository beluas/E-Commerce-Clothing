import React from "react";
import "./collectionItem.styles.scss";
import { withRouter } from "react-router-dom";
import CustomButton from "../customButton/CustomButton.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/actions";

const CollectionItem = ({ item, history, match, routeName, addItem }) => {
	const { name, price, imageUrl } = item;

	return (
		<div
			className="collection-item"
			onClick={() => routeName ? history.push(`${match.url}/${routeName}`) :  history.push(`${match.url}/${item.name}`)}
		>
			<div
				className="image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>

				<span className="price">{price}</span>
			</div>

			<CustomButton onClick={() => addItem({ ...item })} inverted>
				Add to cart
			</CustomButton>
		</div>
	);
};

const dispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, dispatchToProps)(withRouter(CollectionItem));
