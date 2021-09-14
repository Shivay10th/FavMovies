/** @format */

import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { login, authenticate, isAuthenticated } from '../Auth/index';
import './form.css';
import { Redirect } from 'react-router';
const Login = () => {
	const [values, setValues] = useState({
		email: 'shivay10th@gmail.com',
		password: '123456789,',
		error: '',
		didRedirect: false,
	});

	const { email, password, error, didRedirect } = values;

	const handleChange = (name) => (event) => {
		setValues({ ...values, error: false, [name]: event.target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(email);
		setValues({ ...values, error: false });
		console.log(email);
		login({ email, password })
			.then((data) => {
				if (data.error) {
					setValues({ ...values, error: data.error });
				} else {
					console.log(data);
					authenticate(data, () => {
						setValues({
							...values,
							name: '',
							email: '',
							password: '',
							error: '',
							didRedirect: true,
						});
					});
				}
			})
			.catch((err) => console.log('Login req failed'));
	};

	const redirect = () => {
		if (didRedirect) {
			return <Redirect to="/discover" />;
		} else {
			return <Redirect to="/login" />;
		}
	};
	return (
		<>
			<Navbar />
			<div className="form">
				<h2>login</h2>
				<form method="POST">
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

export default Login;
