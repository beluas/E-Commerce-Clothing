import React from "react";
import "./signUp.styles.scss";
import CustomInput from "../customInput/CustomInput.component";
import CustomButton from "../customButton/CustomButton.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
	state = {
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	};

	handleSubmit = async (e) => {
		e.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("password don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (err) {
			console.error(err);
		}
	};

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign Up with your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<CustomInput
						type="text"
						value={this.state.displayName}
						name="displayName"
						label="Display Name"
						required
						onChange={this.handleChange}
					/>

					<CustomInput
						type="text"
						value={this.state.email}
						name="email"
						label="Email"
						required
						onChange={this.handleChange}
					/>

					<CustomInput
						type="password"
						value={this.state.password}
						name="password"
						label="Password"
						required
						onChange={this.handleChange}
					/>

					<CustomInput
						type="password"
						value={this.state.confirmPassword}
						name="confirmPassword"
						label="Confirm Password"
						required
						onChange={this.handleChange}
					/>

					<CustomButton type="submit">SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
