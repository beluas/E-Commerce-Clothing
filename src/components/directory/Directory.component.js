import React from "react";
import MenuItem from "../menu-item/MenuItem.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../redux/initialData/initialData.selectors";
import { DirectoryContainer } from "./directory.styles";

const Directory = ({ sections }) => {
	return (
		<DirectoryContainer>
			{sections.map((section) => (
				<MenuItem key={section.id} {...section} />
			))}
		</DirectoryContainer>
	);
};

const stateToProps = createStructuredSelector({
	sections: selectSections,
});

export default connect(stateToProps, null)(Directory);
