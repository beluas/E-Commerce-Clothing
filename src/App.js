import React, { Component } from "react";
import HomePage from "./pages/HomePage/HomePage.component";
import "./app.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Shop from "./pages/Shop/Shop.component";
import Header from "./components/header/Header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/actions";
import { connect } from "react-redux";
import SignInAndSignUp from "./pages/Sign-in-and-Sign-up/SignIn-SignUp.component";
import { selectCurrentUser } from "./redux/user/userSelector";
import { createStructuredSelector } from "reselect";
import Checkout from "./pages/checkout/Checkout.component";

class App extends Component {
	state = {
		currentUser: null,
	};

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					this.props.setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}

			this.props.setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={Shop} />
					<Route
						exact
						path="/sign-in"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInAndSignUp />
							)
						}
					/>
					<Route exact path="/checkout" component={Checkout} />
				</Switch>
			</div>
		);
	}
}

const stateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const dispatchToProps = {
	setCurrentUser,
};

export default connect(stateToProps, dispatchToProps)(App);
