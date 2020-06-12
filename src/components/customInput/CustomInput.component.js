import React from "react";
import "./customInput.styles.scss";

const CustomInput = ({ handleChange, label, ...otherProps }) => {
	return (
		<div className="group">
			{label ? (
				<label
					className={`${
						otherProps.value.length ? "shrink" : ""
					} form-input-label`}
				>
					{label}
				</label>
			) : null}
			<input
				className="form-input"
				onChange={handleChange}
				{...otherProps}
			/>
		</div>
	);
};

export default CustomInput;
