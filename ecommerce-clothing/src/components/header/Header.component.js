import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/original.svg";
import "./header.styles.scss";

const Header = () => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					{" "}
					<span className="">SHOP</span>{" "}
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				<Link className="option" to="/signin">
					SIGN IN
				</Link>
				<Link className="option" to="/">
					CART
				</Link>
			</div>
		</div>
	);
};

export default Header;
