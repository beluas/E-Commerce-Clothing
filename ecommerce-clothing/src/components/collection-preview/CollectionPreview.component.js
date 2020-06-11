import React from "react";
import "./collectionPreview.styles.scss";
import CollectionItem from "../collection-item/CollectionItem.component";

const CollectionPreview = ({ items, title, routeName, itemsToShow }) => {
	return (
		<div className="collection-preview">
			<h1>{title}</h1>
			<div className="preview">
				{items
					.filter((item, id) => id < itemsToShow)
					.map((item) => (
						<CollectionItem
							key={item.id}
							item={item}
							routeName={routeName}
							button
						/>
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
