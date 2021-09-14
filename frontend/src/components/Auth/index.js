/** @format */

import { API } from '../../Backend.js';

export const signup = (user) => {
	return fetch(`${API}/signup`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then((response) => response.json())
		.catch((err) => console.log(err));
};
export const login = (user) => {
	return fetch(`${API}/signin`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then((response) => response.json())
		.catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('jwt', JSON.stringify(data));

		localStorage.setItem('id', data.user._id);
		next();
	}
};

export const logout = (next) => {
	if (typeof window !== 'undefined') {
		localStorage.removeItem('jwt');
		next();
		return fetch(`${API}/logout`, {
			method: 'GET',
		})
			.then((res) => console.log('logged out'))
			.catch((err) => console.log(err));
	}
};

export const isAuthenticated = () => {
	if (typeof window == 'undefined') {
		return false;
	}
	if (localStorage.getItem('jwt')) {
		return JSON.parse(localStorage.getItem('jwt'));
	} else {
		return false;
	}
};
