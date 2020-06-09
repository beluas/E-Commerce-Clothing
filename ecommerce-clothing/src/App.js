import React, { Component } from "react";
import HomePage from "./pages/HomePage/HomePage.component";
import "./app.scss";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/Shop/Shop.component";

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={Shop} />
				</Switch>
			</div>
		);
	}
}

export default App;
