import React, { Component } from "react";
import HomePage from "./pages/HomePage/HomePage.component";
import "./app.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Shop from "./pages/Shop/Shop.component";
import Header from "./components/header/Header.component";
import {
	auth,
	createUserProfileDocument,
	/*addCollectionAndDocuments,*/
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/actions";
import { connect } from "react-redux";
import SignInAndSignUp from "./pages/Sign-in-and-Sign-up/SignIn-SignUp.component";
import { selectCurrentUser } from "./redux/user/userSelector";
import { createStructuredSelector } from "reselect";
import Checkout from "./pages/checkout/Checkout.component";
//import { selectCollectionForPreview } from "./redux/initialData/initialData.selectors";

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser /*collectionsArray*/ } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}

			setCurrentUser(userAuth);

			// Code to add Products to Firebase DB

			// addCollectionAndDocuments(
			// 	"collections",
			// 	collectionsArray.map(({ title, items }) => ({
			// 		title,
			// 		items,
			// 	}))
			// );
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
	//collectionsArray: selectCollectionForPreview,
});

const dispatchToProps = {
	setCurrentUser,
};

export default connect(stateToProps, dispatchToProps)(App);
