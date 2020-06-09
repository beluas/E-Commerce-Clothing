import React, { Component } from "react";
import HomePage from "./pages/HomePage/HomePage.component";
import "./app.scss";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/Shop/Shop.component";
import Header from "./components/header/Header.component";
import SignInSignUp from "./pages/Sign-in-and-Sign-up/SignIn-SignUp.component";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
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
