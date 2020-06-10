import React, { Component } from "react";
import "./SignIn-SignUp.styles.scss";
import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from "../../components/sign-up/SignUp.component";

class SignInSignUp extends Component {
	render() {
		return (
			<div className="sign-in-and-sign-up">
				<SignIn />
				<SignUp />
			</div>
		);
	}
}

export default SignInSignUp;
