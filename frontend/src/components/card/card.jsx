/** @format */

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { API } from '../../Backend';
import { isAuthenticated } from '../Auth/index';

import './card.style.css';

const Card = (props) => {
	const [hover, setHover] = useState(false);
	const [overView, setoverView] = useState('');
	const handleOnClick = async () => {
		const { id } = props.movie;
		const token = JSON.parse(localStorage.getItem('jwt')).token;
		const userId = JSON.parse(localStorage.getItem('jwt')).user._id;
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
		<div
			onMouseOver={() => {
				setHover(true);
				setoverView(props.movie.overview.substring(1, 201) + '....');
			}}
			onMouseOut={() => {
				setHover(false);
			}}
			className="card-container"
		>
			<img
				alt=""
				src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`}
			/>
			<h2 className="title">{props.movie.title}</h2>
			<p className="cp">
				<span className="sm">Release date: </span>
				{props.movie.release_date}
			</p>
			<p className="cp">
				<span className="sm">Rating: </span>
				{props.movie.vote_average}/10
			</p>
			{!isAuthenticated() ? (
				<button onClick={() => props.history.push('/login')}>
					Fav
				</button>
			) : (
				<button onClick={handleOnClick}>Fav</button>
			)}
			{hover && <p>{overView}</p>}
		</div>
	);
};

export default withRouter(Card);
