import React from "react";
import "./directory.styles.scss";
import { sections } from "../../original";
import MenuItem from "../menu-item/MenuItem.component";

class Directory extends React.Component {
	state = { sections };

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map((section) => (
					<MenuItem key={section.id} {...section} />
				))}
			</div>
		);
	}
}

export default Directory;
