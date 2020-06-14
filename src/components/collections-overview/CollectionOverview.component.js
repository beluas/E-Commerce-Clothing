import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/initialData/initialData.selectors";
import CollectionPreview from "../collection-preview/CollectionPreview.component";
import { CollectionOverviewContainer } from "./collectionOverview.styles";

const CollectionOverview = ({ collections }) => {
	return (
		<CollectionOverviewContainer>
			{collections.map(({ ...collections }) => (
				<CollectionPreview
					key={collections.items}
					{...collections}
					itemsToShow={4}
				/>
			))}
		</CollectionOverviewContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionForPreview,
});

export default connect(mapStateToProps, null)(CollectionOverview);
