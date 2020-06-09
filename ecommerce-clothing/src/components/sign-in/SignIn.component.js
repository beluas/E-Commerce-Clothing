import React, { Component } from "react";
import "./signIn.styles.scss";
import CustomInput from "../customInput/CustomInput.component";
import CustomButton from "../customButton/CustomButton.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
	state = {
		email: "",
		password: "",
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: "", password: "" });
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h1 className="title">I already have an account</h1>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<CustomInput
						type="email"
						name="email"
						value={this.state.email}
						handleChange={this.handleChange}
						required={true}
						label="Email"
					/>

					<CustomInput
						type="password"
						name="password"
						value={this.state.password}
						handleChange={this.handleChange}
						required={true}
						label="Password"
					/>
					<div className="button">
						<CustomButton type="submit">SIGN IN</CustomButton>

						<CustomButton
							isGoogleSignIn={true}
							onClick={signInWithGoogle}
						>
							SIGN IN WITH GOOGLE
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
