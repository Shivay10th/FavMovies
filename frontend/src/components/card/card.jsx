/** @format */

import React from 'react';
import { API } from '../../Backend';

import './card.style.css';

export const Card = (props) => {
	const { id } = props.movie;
	const token = JSON.parse(localStorage.getItem('jwt')).token;
	const userId = JSON.parse(localStorage.getItem('jwt')).user._id;
	console.log(props.movie + '666666666666' + props.movie.poster_path);
	const handleOnClick = async () => {
		await fetch(`${API}\\user\\${userId}\\addFav`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ id }),
		});
		console.log('Fav Saved');
	};
	return (
		<div className="card-container">
			<img
				alt=""
				src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`}
			/>
			<h2>{props.movie.title}</h2>
			<button onClick={handleOnClick}>Fav</button>
		</div>
	);
};
