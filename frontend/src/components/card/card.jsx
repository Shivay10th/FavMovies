/** @format */

import React from 'react';
import { API } from '../../Backend';
import { isAuthenticated } from '../Auth';

import './card.style.css';

export const Card = (props) => {
	const { id } = props.movie;
	const user = isAuthenticated();
	console.log(user.id + '###' + id);
	const handleOnClick = async (event) => {
		await fetch(`${API}\\`);
	};
	return (
		<div className="card-container">
			<img
				alt="You Know you are too a monster"
				src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`}
			/>
			<h2>{props.movie.title}</h2>
			<button onClick={handleOnClick}>Fav</button>
		</div>
	);
};
