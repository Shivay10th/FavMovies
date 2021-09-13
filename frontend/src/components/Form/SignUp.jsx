/** @format */

import React, { useState } from 'react';
import { Redirect } from 'react-router';
import Navbar from '../Navbar/Navbar';
import { signup } from '../Auth/index';
import './form.css';
const Signup = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		error: '',
		success: false,
	});

	const { name, email, password, error, success } = values;

	const handleChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: false });
		signup({ name, email, password })
			.then((data) => {
				if (data.error) {
					setValues({ ...values, error: data.error, success: false });
				} else {
					setValues({
						...values,
						name: '',
						email: '',
						password: '',
						error: '',
						success: true,
					});
				}
			})
			.catch((err) => console.log('error in form'));
	};
	const redirect = () => {
		if (success) {
			return <Redirect to="/login" />;
		} else {
			return <Redirect to="/signup" />;
		}
	};
	return (
		<>
			<Navbar />
			<div className="form">
				<h2>Sign Up</h2>
				<form method="POST">
					<div className="elementBox">
						<input
							type="text"
							onChange={handleChange('name')}
							name="Name"
							value={name}
							required="true"
						/>
						<label>Username</label>
					</div>
					<div className="elementBox">
						<input
							type="email"
							onChange={handleChange('email')}
							name="Email"
							value={email}
							required="true"
						/>
						<label>Email</label>
					</div>
					<div className="elementBox">
						<input
							onChange={handleChange('password')}
							type="password"
							name="password"
							value={password}
							required="true"
						/>
						<label>Password</label>
					</div>
					<button type="submit" onClick={onSubmit} value="submit">
						Submit
					</button>
				</form>
			</div>
			{redirect()}
		</>
	);
};

export default Signup;
