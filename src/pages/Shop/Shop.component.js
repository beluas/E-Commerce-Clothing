import React from "react";
import { Route } from "react-router-dom";
import Collection from "../collection/Collection.component";

import CollectionOverview from "../../components/collections-overview/CollectionOverview.component";

const Shop = ({ match }) => {
	console.log(match);
	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				component={CollectionOverview}
			/>
			<Route
				path={`${match.path}/:collectionName`}
				component={Collection}
			/>
		</div>
	);
};

export default Shop;
