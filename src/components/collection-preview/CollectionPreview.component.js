import React from "react";
import "./collectionPreview.styles.scss";
import CollectionItem from "../collection-item/CollectionItem.component";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({
	items,
	title,
	routeName,
	itemsToShow,
	history,
	match,
}) => {
	return (
		<div className="collection-preview">
			<h1 onClick={() => history.push(`${match.url}/${routeName}`)}>
				{title}
			</h1>
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

export default withRouter(CollectionPreview);
