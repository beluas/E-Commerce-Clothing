import React, { Component } from "react";
import HomePage from "./pages/HomePage/HomePage.component";
import "./app.scss";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/Shop/Shop.component";
import Header from "./components/header/Header.component";
import SignInSignUp from "./pages/Sign-in-and-Sign-up/SignIn-SignUp.component";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
	state = {
		currentUser: null,
	};

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={Shop} />
					<Route path="/sign-in" component={SignInSignUp} />
				</Switch>
			</div>
		);
	}
}

export default App;
