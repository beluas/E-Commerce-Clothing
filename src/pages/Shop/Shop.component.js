import React from "react";
import { Route } from "react-router-dom";
import Collection from "../collection/Collection.component";

import CollectionOverview from "../../components/collections-overview/CollectionOverview.component";
import { firestore } from "../../firebase/firebase.utils";

class Shop extends React.Component {
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const collectionRef = firestore.collection("collections");

		collectionRef.onSnapshot(async (snapshot) => {
			console.log(snapshot);
		});
	}

	render() {
		const { match } = this.props;
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
	}
}

export default Shop;
