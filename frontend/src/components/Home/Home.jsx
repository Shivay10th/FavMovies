/** @format */

import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { API } from '../../Backend.js';
import { Card } from '../card/card';

function Home() {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const data = await (await fetch(`${API}\\discover`)).json();
			setMovies(data);
		};
		fetchData();
	});

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

export default Home;
