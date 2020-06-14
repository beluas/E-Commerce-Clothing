import React from "react";
import { ReactComponent as Logo } from "../../assets/original.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cartDropdown/CartDropdown.component";
import { selectShowCart } from "../../redux/cart/cartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { createStructuredSelector } from "reselect";
import {
	OptionsContainer,
	OptionLink,
	HeaderContainer,
	LogoContainer,
} from "./header.styles";

const signOut = () => {
	auth.signOut();
};

const Header = ({ currentUser, showCart }) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">
					{" "}
					<span className="">SHOP</span>{" "}
				</OptionLink>
				<OptionLink to="/contact">CONTACT</OptionLink>
				{currentUser ? (
					<OptionLink as="div" onClick={signOut} to="/">
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to="/sign-in">SIGN IN</OptionLink>
				)}

				<CartIcon />
			</OptionsContainer>
			{showCart ? <CartDropdown /> : ""}
		</HeaderContainer>
	);
};

const stateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	showCart: selectShowCart,
});

export default connect(stateToProps, null)(Header);
