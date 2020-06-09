import React from "react";
import "./collectionPreview.styles.scss";
import CollectionItem from "../collection-item/CollectionItem.component";

const CollectionPreview = ({ items, title, routeName }) => {
	return (
		<div className="collection-preview">
			<h1>{title}</h1>
			<div className="preview">
				{items
					.filter((item, id) => id < 4)
					.map(({ id, ...itemProps }) => (
						<CollectionItem
							key={id}
							{...itemProps}
							routeName={routeName}
						/>
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
