import React from "react";
import { Route } from "react-router-dom";
import Collection from "../collection/Collection.component";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collections-overview/CollectionOverview.component";
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/initialData/actions";

class Shop extends React.Component {
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const collectionRef = firestore.collection("collections");

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
			async (snapshot) => {
				const collectionsMap = await convertCollectionsSnapshotToMap(
					snapshot
				);

				this.props.updateCollections(collectionsMap);
			}
		);
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

const dispatchToProps = (dispatch) => ({
	updateCollections: (collections) =>
		dispatch(updateCollections(collections)),
});

export default connect(null, dispatchToProps)(Shop);
