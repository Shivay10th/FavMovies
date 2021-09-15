/** @format */

import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { API } from '../../Backend.js';
import Card from '../card/card';

function Fav() {
	const [movies, setMovies] = useState([]);
	const token = JSON.parse(localStorage.getItem('jwt')).token;
	const userId = JSON.parse(localStorage.getItem('jwt')).user._id;
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch(`${API}\\user\\${userId}\\showfav`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					mode: 'cors',
					Authorization: `Bearer ${token}`,
				},
			});
			const res = await data.json();
			res.map(async (m, i) => {
				const movie = await getMovie(m.movieId);
				setMovies((prev) => [...prev, movie]);
			});
		};
		fetchData();
	}, []);

	const getMovie = async (movieId) => {
		const movie = await (
			await fetch(`${API}\\get_movie\\${movieId}`)
		).json();

		return movie;
	};

	return (
		<div>
			<Navbar />
			<div className="container card-list">
				{movies.map((movie, i) => (
					<Card key={i} movie={movie}></Card>
				))}
			</div>
		</div>
	);
}

export default Fav;
