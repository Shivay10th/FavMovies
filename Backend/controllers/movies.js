/** @format */
const fetch = require('axios');

exports.discover = async (req, res) => {
	const data = await fetch(
		`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&region=US&sort_by=original_title.desc&include_adult=false&include_video=false&page=1&watch_region=US&with_watch_monetization_types=flatrate`,
	);
	const movies = data.data;
	return res.status(200).json(movies.results);
};

exports.popular = async (req, res) => {
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1&region=us`,
	);
	const movies = data.data;
	return res.status(200).json(movies.results);
};

exports.latest = async (req, res) => {
	const data = await fetch(
		`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=primary_release_date.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`,
	);
	const movies = data.data;
	return res.status(200).json(movies.results);
};
