import React from "react";
import "./collectionItem.styles.scss";
import { withRouter } from "react-router-dom";

const CollectionItem = ({
	imageUrl,
	price,
	name,
	history,
	match,
	routeName,
}) => {
	return (
		<div
			className="collection-item"
			onClick={() => history.push(`${match.url}/${routeName}`)}
		>
			<div
				className="image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>

				<span className="price">{price}</span>
			</div>
		</div>
	);
};

export default withRouter(CollectionItem);
