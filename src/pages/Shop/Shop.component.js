import React from "react";
import { Route } from "react-router-dom";
import Collection from "../collection/Collection.component";
import { connect } from "react-redux";

import WithSpinner from "../../components/spinner/Spinner.component";

import CollectionOverview from "../../components/collections-overview/CollectionOverview.component";
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/initialData/actions";

const CollectionWithSpinner = WithSpinner(Collection);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

class Shop extends React.Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const collectionRef = firestore.collection("collections");

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
			async (snapshot) => {
				const collectionsMap = await convertCollectionsSnapshotToMap(
					snapshot
				);

				this.props.updateCollections(collectionsMap);
				this.setState({ loading: false });
			}
		);
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionOverviewWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionName`}
					render={(props) => (
						<CollectionWithSpinner isLoading={loading} {...props} />
					)}
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
