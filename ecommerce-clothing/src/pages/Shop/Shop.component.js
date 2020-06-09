import React, { Component } from "react";
import { SHOP_DATA as collections } from "../../shopData";
import CollectionPreview from "../../components/collection-preview/CollectionPreview.component";

class Shop extends Component {
	state = {
		collections,
	};

	render() {
		const { collections } = this.state;
		return (
			<div>
				{collections.map(({ id, ...collectionProps }) => (
					<CollectionPreview key={id} {...collectionProps} />
				))}
			</div>
		);
	}
}

export default Shop;
