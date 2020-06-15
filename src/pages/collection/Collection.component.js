import React from "react";
import CollectionItem from "../../components/collection-item/CollectionItem.component";
import { selectCollection } from "../../redux/initialData/initialData.selectors";
import { connect } from "react-redux";
import {
	CollectionItemContainer,
	CollectionPageContainer,
	TitleContainer,
	ItemsContainer,
} from "./collection.styles";

const Collection = ({ collectionToShow }) => {
	const { items, title } = collectionToShow;
	return (
		<CollectionPageContainer>
			<TitleContainer>{title}</TitleContainer>
			<ItemsContainer>
				{items.map((item) => (
					<CollectionItemContainer key={item.id}>
						<CollectionItem item={item} />
					</CollectionItemContainer>
				))}
			</ItemsContainer>
		</CollectionPageContainer>
	);
};

const stateToProps = (state, ownProps) => ({
	collectionToShow: selectCollection(ownProps.match.params.collectionName)(
		state
	),
});

export default connect(stateToProps, null)(Collection);
