import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/original.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cartDropdown/CartDropdown.component";
import { selectShowCart } from "../../redux/cart/cartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { createStructuredSelector } from "reselect";

const signOut = () => {
	auth.signOut();
};

const Header = ({ currentUser, showCart }) => {
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

				<div className="option">
					<CartIcon />
				</div>
			</div>
			{showCart ? <CartDropdown /> : ""}
		</div>
	);
};

const stateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	showCart: selectShowCart,
});

export default connect(stateToProps, null)(Header);
