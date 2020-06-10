import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/original.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const signOut = () => {
	auth.signOut();
};

const Header = ({ currentUser }) => {
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
				{currentUser ? (
					<div className="option" onClick={signOut} to="/">
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/sign-in">
						SIGN IN
					</Link>
				)}

				<Link className="option" to="/">
					CART
				</Link>
			</div>
		</div>
	);
};

const stateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

export default connect(stateToProps, null)(Header);
