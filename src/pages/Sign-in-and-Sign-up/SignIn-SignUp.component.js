import React, { Component } from "react";
import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from "../../components/sign-up/SignUp.component";
import { SignInSignUpContainer } from "./signIn-signup.styles";

class SignInSignUp extends Component {
	render() {
		return (
			<SignInSignUpContainer>
				<SignIn />
				<SignUp />
			</SignInSignUpContainer>
		);
	}
}

export default SignInSignUp;
