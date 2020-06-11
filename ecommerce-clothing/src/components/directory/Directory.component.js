import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/MenuItem.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../redux/initialData/initialData.selectors";

const Directory = ({ sections }) => {
	return (
		<div className="directory-menu">
			{sections.map((section) => (
				<MenuItem key={section.id} {...section} />
			))}
		</div>
	);
};

const stateToProps = createStructuredSelector({
	sections: selectSections,
});

export default connect(stateToProps, null)(Directory);
