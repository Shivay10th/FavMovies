/** @format */

import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { API } from '../../Backend.js';
import { Card } from '../card/card';

function Latest() {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const data = await (await fetch(`${API}\\latest`)).json();
			// console.log(data);
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

export default Latest;
