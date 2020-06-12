import React from "react";
import "./collectionOverview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/initialData/initialData.selectors";
import CollectionPreview from "../collection-preview/CollectionPreview.component";

const CollectionOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ ...collections }) => (
				<CollectionPreview
					key={collections.items}
					{...collections}
					itemsToShow={4}
				/>
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionForPreview,
});

export default connect(mapStateToProps, null)(CollectionOverview);
