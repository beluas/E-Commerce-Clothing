import React from "react";

import CollectionPreview from "../../components/collection-preview/CollectionPreview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/initialData/initialData.selectors";

const Shop = ({ collections }) => {
	const displayCollections = (collections) => {
		return collections ? (
			collections.map(({ id, ...collectionProps }) => (
				<CollectionPreview key={id} {...collectionProps} />
			))
		) : (
			<h1>Loading</h1>
		);
	};

	return <div>{displayCollections(collections)}</div>;
};

const stateToProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(stateToProps)(Shop);
