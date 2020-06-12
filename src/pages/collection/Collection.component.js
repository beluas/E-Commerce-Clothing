import React from "react";
import CollectionItem from "../../components/collection-item/CollectionItem.component";
import "./collection.styles.scss";
import { selectCollection } from "../../redux/initialData/initialData.selectors";
import { connect } from "react-redux";

const Collection = ({ collectionToShow }) => {
	if (!collectionToShow) {
		return <h1>404</h1>;
	}

	const { items, title } = collectionToShow;
	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const stateToProps = (state, ownProps) => ({
	collectionToShow: selectCollection(ownProps.match.params.collectionName)(
		state
	),
});

export default connect(stateToProps, null)(Collection);
